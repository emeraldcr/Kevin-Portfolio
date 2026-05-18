package com.tecsancarlos.iotambiental.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.tecsancarlos.iotambiental.data.model.EnvironmentalVariable
import com.tecsancarlos.iotambiental.ui.components.*
import com.tecsancarlos.iotambiental.utils.CsvExporter
import com.tecsancarlos.iotambiental.utils.StatsUtils.format

@Composable
fun ChartsScreen(onBack: () -> Unit, viewModel: ChartsViewModel = viewModel()) {
    val state by viewModel.uiState.collectAsState()
    AppScaffold("Gráficos", onBack) { padding ->
        Column(Modifier.padding(padding).padding(16.dp).verticalScroll(rememberScrollState()), verticalArrangement = Arrangement.spacedBy(12.dp)) {
            SimpleDropdown("Variable", state.variable, EnvironmentalVariable.entries.map { it.key to it.label }, viewModel::setVariable)
            OutlinedTextField(state.startDate, viewModel::setStartDate, label = { Text("Fecha inicial (YYYY-MM-DD)") }, modifier = Modifier.fillMaxWidth())
            OutlinedTextField(state.endDate, viewModel::setEndDate, label = { Text("Fecha final (YYYY-MM-DD)") }, modifier = Modifier.fillMaxWidth())
            LineChart(state.lineData)
            BarChart(state.barData)
            ElevatedCard(Modifier.fillMaxWidth()) {
                Column(Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
                    Text("Comparación entre variables", style = MaterialTheme.typography.titleMedium)
                    state.comparison.forEach { Text("${it.label}: ${it.value.format()} ${it.unit}") }
                }
            }
            ShareCsvButton(CsvExporter.queryResultsToCsv(state.barData), "Exportar promedios diarios")
        }
    }
}
