package com.tecsancarlos.iotambiental.ui.screens

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.tecsancarlos.iotambiental.data.mock.MockDataGenerator
import com.tecsancarlos.iotambiental.data.model.EnvironmentalData
import com.tecsancarlos.iotambiental.data.model.EnvironmentalVariable
import com.tecsancarlos.iotambiental.data.model.LocationPoint
import com.tecsancarlos.iotambiental.data.model.QueryResult
import com.tecsancarlos.iotambiental.data.repository.RepositoryProvider
import com.tecsancarlos.iotambiental.domain.usecase.EnvironmentalUseCases
import com.tecsancarlos.iotambiental.utils.StatsUtils
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.launch
import java.time.LocalDate

data class DashboardUiState(
    val isLoading: Boolean = true,
    val latest: List<EnvironmentalData> = emptyList(),
    val todayAverage: Double = 0.0,
    val max: QueryResult? = null,
    val min: QueryResult? = null,
    val error: String? = null
)

class DashboardViewModel : ViewModel() {
    private val useCases = EnvironmentalUseCases(RepositoryProvider.environmentalRepository)
    private val _uiState = MutableStateFlow(DashboardUiState())
    val uiState: StateFlow<DashboardUiState> = _uiState.asStateFlow()

    init { load() }

    fun load() = viewModelScope.launch {
        val all = useCases.allData().catch { _uiState.value = DashboardUiState(isLoading = false, error = it.message) }
        all.collect { data ->
            if (data.isEmpty()) _uiState.value = DashboardUiState(isLoading = false, error = "No hay datos ambientales disponibles.")
            else {
                val latest = data.groupBy { it.variable }.mapNotNull { it.value.maxByOrNull { item -> item.timestamp } }
                val today = data.maxByOrNull { it.timestamp }?.date ?: LocalDate.now().toString()
                _uiState.value = DashboardUiState(
                    isLoading = false,
                    latest = latest,
                    todayAverage = StatsUtils.dailyGeneralAverage(data, today),
                    max = StatsUtils.historicalMax(data, EnvironmentalVariable.Temperature.key),
                    min = StatsUtils.historicalMin(data, EnvironmentalVariable.Temperature.key)
                )
            }
        }
    }
}

enum class QueryType(val label: String) {
    AverageHour("Promedio por hora en un día específico"),
    AverageDay("Promedio por día en rango de fechas"),
    HistoricalMax("Máximo histórico"),
    HistoricalMin("Mínimo histórico")
}

data class QueryUiState(
    val variable: String = "",
    val startDate: String = LocalDate.now().minusDays(9).toString(),
    val endDate: String = LocalDate.now().toString(),
    val queryType: QueryType? = null,
    val results: List<QueryResult> = emptyList(),
    val isLoading: Boolean = false,
    val error: String? = null
) {
    val validationError: String?
        get() = when {
            variable.isBlank() -> "Seleccione una variable ambiental."
            queryType == null -> "Seleccione el tipo de consulta."
            startDate.isBlank() || endDate.isBlank() -> "Ingrese fecha inicial y fecha final."
            endDate < startDate -> "La fecha final no puede ser menor que la fecha inicial."
            else -> null
        }
}

class QueryViewModel : ViewModel() {
    private val useCases = EnvironmentalUseCases(RepositoryProvider.environmentalRepository)
    private val _uiState = MutableStateFlow(QueryUiState())
    val uiState: StateFlow<QueryUiState> = _uiState.asStateFlow()

    fun setVariable(value: String) { _uiState.value = _uiState.value.copy(variable = value, error = null) }
    fun setStartDate(value: String) { _uiState.value = _uiState.value.copy(startDate = value, error = null) }
    fun setEndDate(value: String) { _uiState.value = _uiState.value.copy(endDate = value, error = null) }
    fun setQueryType(value: QueryType) { _uiState.value = _uiState.value.copy(queryType = value, error = null) }

    fun consult() {
        val state = _uiState.value
        state.validationError?.let { _uiState.value = state.copy(error = it); return }
        viewModelScope.launch {
            _uiState.value = state.copy(isLoading = true, error = null)
            when (state.queryType) {
                QueryType.AverageHour -> useCases.averageByHour(state.startDate, state.variable)
                    .catch { _uiState.value = _uiState.value.copy(isLoading = false, error = it.message) }
                    .collect { updateResults(it) }
                QueryType.AverageDay -> useCases.averageByDay(state.startDate, state.endDate, state.variable)
                    .catch { _uiState.value = _uiState.value.copy(isLoading = false, error = it.message) }
                    .collect { updateResults(it) }
                QueryType.HistoricalMax -> useCases.historicalMax(state.variable)
                    .catch { _uiState.value = _uiState.value.copy(isLoading = false, error = it.message) }
                    .collect { updateResults(listOfNotNull(it)) }
                QueryType.HistoricalMin -> useCases.historicalMin(state.variable)
                    .catch { _uiState.value = _uiState.value.copy(isLoading = false, error = it.message) }
                    .collect { updateResults(listOfNotNull(it)) }
                null -> return@launch
            }
        }
    }
    private fun updateResults(results: List<QueryResult>) {
        _uiState.value = _uiState.value.copy(
            isLoading = false,
            results = results,
            error = if (results.isEmpty()) "No se encontraron resultados." else null
        )
    }

}

data class ChartsUiState(
    val variable: String = EnvironmentalVariable.Temperature.key,
    val startDate: String = LocalDate.now().minusDays(9).toString(),
    val endDate: String = LocalDate.now().toString(),
    val lineData: List<QueryResult> = emptyList(),
    val barData: List<QueryResult> = emptyList(),
    val comparison: List<QueryResult> = emptyList()
)

class ChartsViewModel : ViewModel() {
    private val useCases = EnvironmentalUseCases(RepositoryProvider.environmentalRepository)
    private val _uiState = MutableStateFlow(ChartsUiState())
    val uiState: StateFlow<ChartsUiState> = _uiState.asStateFlow()

    init { load() }
    fun setVariable(value: String) { _uiState.value = _uiState.value.copy(variable = value); load() }
    fun setStartDate(value: String) { _uiState.value = _uiState.value.copy(startDate = value); load() }
    fun setEndDate(value: String) { _uiState.value = _uiState.value.copy(endDate = value); load() }

    fun load() = viewModelScope.launch {
        val state = _uiState.value
        val all = useCases.allData()
        all.collect { data ->
            val filtered = StatsUtils.filterByDateRange(data, state.startDate, state.endDate)
            _uiState.value = state.copy(
                lineData = filtered.filter { it.variable == state.variable }.takeLast(36).map { QueryResult(it.time, it.value, it.unit, it.variable, it.date, it.time, it.sensorId) },
                barData = StatsUtils.averageByDay(data, state.startDate, state.endDate, state.variable),
                comparison = EnvironmentalVariable.entries.mapNotNull { variable ->
                    val values = filtered.filter { it.variable == variable.key }
                    if (values.isEmpty()) null else QueryResult(variable.label, values.map { it.value }.average(), variable.unit, variable.key)
                }
            )
        }
    }
}

class MapViewModel : ViewModel() {
    private val _points = MutableStateFlow(MockDataGenerator.locationPoints())
    val points: StateFlow<List<LocationPoint>> = _points.asStateFlow()
}
