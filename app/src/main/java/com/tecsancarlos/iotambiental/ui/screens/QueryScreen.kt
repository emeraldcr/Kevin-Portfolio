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

@Composable
fun QueryScreen(onBack: () -> Unit, viewModel: QueryViewModel = viewModel()) {
    val state by viewModel.uiState.collectAsState()
    AppScaffold("Consultas", onBack) { padding ->
        Column(Modifier.padding(padding).padding(16.dp).verticalScroll(rememberScrollState()), verticalArrangement = Arrangement.spacedBy(12.dp)) {
            SimpleDropdown("Variable", state.variable, EnvironmentalVariable.entries.map { it.key to it.label }, viewModel::setVariable)
            OutlinedTextField(state.startDate, viewModel::setStartDate, label = { Text("Fecha inicial (YYYY-MM-DD)") }, modifier = Modifier.fillMaxWidth(), singleLine = true)
            OutlinedTextField(state.endDate, viewModel::setEndDate, label = { Text("Fecha final (YYYY-MM-DD)") }, modifier = Modifier.fillMaxWidth(), singleLine = true)
            SimpleDropdown("Tipo de consulta", state.queryType?.name.orEmpty(), QueryType.entries.map { it.name to it.label }, { viewModel.setQueryType(QueryType.valueOf(it)) })
            state.validationError?.let { Text(it, color = MaterialTheme.colorScheme.error) }
            Button(onClick = viewModel::consult, enabled = state.validationError == null && !state.isLoading, modifier = Modifier.fillMaxWidth()) { Text("Consultar") }
            if (state.isLoading) LinearProgressIndicator(Modifier.fillMaxWidth())
            state.error?.let { Text(it, color = MaterialTheme.colorScheme.error) }
            if (state.results.isNotEmpty()) {
                Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) { ShareCsvButton(CsvExporter.queryResultsToCsv(state.results)) }
                QueryResultsTable(state.results)
            }
        }
    }
}
