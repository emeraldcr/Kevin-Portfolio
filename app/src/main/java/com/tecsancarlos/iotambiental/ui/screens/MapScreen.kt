package com.tecsancarlos.iotambiental.ui.screens

import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.onSizeChanged
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.tecsancarlos.iotambiental.data.model.LocationPoint
import com.tecsancarlos.iotambiental.ui.components.AppScaffold

@Composable
fun MapScreen(onBack: () -> Unit, viewModel: MapViewModel = viewModel()) {
    val points by viewModel.points.collectAsState()
    var selected by remember { mutableStateOf<LocationPoint?>(null) }
    AppScaffold("Mapa interactivo", onBack) { padding ->
        Column(Modifier.padding(padding).padding(16.dp).fillMaxSize(), verticalArrangement = Arrangement.spacedBy(14.dp)) {
            Text("TEC San Carlos", style = MaterialTheme.typography.titleLarge, fontWeight = FontWeight.Bold)
            CampusMap(points = points, onPointClick = { selected = it }, modifier = Modifier.fillMaxWidth().weight(1f))
            selected?.let { point ->
                ElevatedCard(Modifier.fillMaxWidth()) {
                    Column(Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(6.dp)) {
                        Text(point.name, style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
                        Text(point.description)
                        Text("Temperatura: ${point.temperature} °C")
                        Text("Humedad: ${point.humidity} %")
                        Text("Viento: ${point.windSpeed} km/h")
                        Text("Sensor asociado: ${point.sensorId}")
                    }
                }
            } ?: Text("Toque un punto del mapa para ver los datos ambientales del sensor.")
        }
    }
}

@Composable
private fun CampusMap(points: List<LocationPoint>, onPointClick: (LocationPoint) -> Unit, modifier: Modifier = Modifier) {
    var size by remember { mutableStateOf(IntSize.Zero) }
    val density = LocalDensity.current
    Box(modifier.background(MaterialTheme.colorScheme.surfaceVariant, RoundedCornerShape(24.dp)).onSizeChanged { size = it }) {
        Canvas(Modifier.matchParentSize()) {
            drawRoundRect(Color(0xFFB9E6D3))
            drawLine(Color(0xFF6D8F82), Offset(size.width * .12f, size.height * .82f), Offset(size.width * .88f, size.height * .20f), 14f)
            drawLine(Color(0xFF6D8F82), Offset(size.width * .22f, size.height * .22f), Offset(size.width * .80f, size.height * .78f), 10f)
        }
        points.forEach { point ->
            Box(
                Modifier
                    .offset(x = with(density) { (size.width * point.x).toDp() } - 10.dp, y = with(density) { (size.height * point.y).toDp() } - 10.dp)
                    .size(22.dp)
                    .background(MaterialTheme.colorScheme.primary, CircleShape)
                    .clickable { onPointClick(point) }
            )
        }
        Text("Placeholder académico del mapa del campus", Modifier.align(Alignment.BottomCenter).padding(12.dp))
    }
}
