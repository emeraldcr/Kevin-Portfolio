package com.tecsancarlos.iotambiental.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.tecsancarlos.iotambiental.data.model.EnvironmentalVariable
import com.tecsancarlos.iotambiental.ui.components.AppScaffold
import com.tecsancarlos.iotambiental.ui.components.MetricCard
import com.tecsancarlos.iotambiental.utils.StatsUtils.format

@Composable
fun DashboardScreen(onBack: () -> Unit, viewModel: DashboardViewModel = viewModel()) {
    val state by viewModel.uiState.collectAsState()
    AppScaffold("Dashboard ambiental", onBack) { padding ->
        Box(Modifier.padding(padding).padding(16.dp).fillMaxSize()) {
            when {
                state.isLoading -> CircularProgressIndicator(Modifier.align(Alignment.Center))
                state.error != null -> Text(state.error.orEmpty(), modifier = Modifier.align(Alignment.Center))
                else -> Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
                    EnvironmentalVariable.entries.forEach { variable ->
                        val item = state.latest.firstOrNull { it.variable == variable.key }
                        MetricCard("Última ${variable.label.lowercase()}", item?.let { "${it.value.format()} ${it.unit}" } ?: "Sin datos", item?.let { "${it.date} ${it.time} · ${it.sensorId}" } ?: "Repositorio vacío")
                    }
                    MetricCard("Promedio general del día", state.todayAverage.format(), "Promedio combinado de lecturas del día más reciente")
                    MetricCard("Máximo histórico", state.max?.let { "${it.value.format()} ${it.unit}" } ?: "Sin datos", "Temperatura · ${state.max?.date.orEmpty()} ${state.max?.time.orEmpty()}")
                    MetricCard("Mínimo histórico", state.min?.let { "${it.value.format()} ${it.unit}" } ?: "Sin datos", "Temperatura · ${state.min?.date.orEmpty()} ${state.min?.time.orEmpty()}")
                }
            }
        }
    }
}
