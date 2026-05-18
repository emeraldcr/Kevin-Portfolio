package com.tecsancarlos.iotambiental.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.tecsancarlos.iotambiental.ui.navigation.Screen

@Composable
fun HomeScreen(onNavigate: (String) -> Unit) {
    Scaffold { padding ->
        Column(Modifier.padding(padding).padding(20.dp).fillMaxSize(), verticalArrangement = Arrangement.spacedBy(18.dp)) {
            Text("IoT Ambiental TEC", style = MaterialTheme.typography.displaySmall, fontWeight = FontWeight.Bold)
            Text("Dashboard académico para consultar datos ambientales del TEC San Carlos con Kotlin, Jetpack Compose y Firestore.")
            HomeCard("Dashboard ambiental", "Últimos registros, promedios y extremos históricos.") { onNavigate(Screen.Dashboard.route) }
            HomeCard("Consultas inteligentes", "Promedios por hora, por día y máximos/mínimos históricos.") { onNavigate(Screen.Query.route) }
            HomeCard("Gráficos", "Evolución temporal y comparación entre variables.") { onNavigate(Screen.Charts.route) }
            HomeCard("Mapa interactivo", "Puntos de interés del TEC San Carlos con sensores simulados.") { onNavigate(Screen.Map.route) }
        }
    }
}

@Composable
private fun HomeCard(title: String, description: String, onClick: () -> Unit) {
    ElevatedCard(onClick = onClick, modifier = Modifier.fillMaxWidth()) {
        Column(Modifier.padding(18.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
            Text(title, style = MaterialTheme.typography.titleLarge, fontWeight = FontWeight.Bold)
            Text(description, style = MaterialTheme.typography.bodyMedium)
        }
    }
}
