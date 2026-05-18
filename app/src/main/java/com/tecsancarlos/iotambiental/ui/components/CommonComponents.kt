package com.tecsancarlos.iotambiental.ui.components

import android.content.Intent
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.tecsancarlos.iotambiental.data.model.QueryResult
import com.tecsancarlos.iotambiental.utils.StatsUtils.format

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun AppScaffold(title: String, onBack: (() -> Unit)? = null, content: @Composable (PaddingValues) -> Unit) {
    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text(title) },
                navigationIcon = { if (onBack != null) TextButton(onClick = onBack) { Text("Atrás") } }
            )
        },
        content = content
    )
}

@Composable
fun MetricCard(title: String, value: String, subtitle: String, modifier: Modifier = Modifier, color: Color = MaterialTheme.colorScheme.primaryContainer) {
    ElevatedCard(modifier = modifier.fillMaxWidth(), colors = CardDefaults.elevatedCardColors(containerColor = color)) {
        Column(Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(6.dp)) {
            Text(title, style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.SemiBold)
            Text(value, style = MaterialTheme.typography.headlineMedium, fontWeight = FontWeight.Bold)
            Text(subtitle, style = MaterialTheme.typography.bodyMedium)
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SimpleDropdown(label: String, selected: String, options: List<Pair<String, String>>, onSelected: (String) -> Unit, modifier: Modifier = Modifier) {
    var expanded by remember { mutableStateOf(false) }
    ExposedDropdownMenuBox(expanded = expanded, onExpandedChange = { expanded = !expanded }, modifier = modifier) {
        OutlinedTextField(
            value = options.firstOrNull { it.first == selected }?.second.orEmpty(),
            onValueChange = {},
            readOnly = true,
            label = { Text(label) },
            trailingIcon = { ExposedDropdownMenuDefaults.TrailingIcon(expanded) },
            modifier = Modifier.menuAnchor().fillMaxWidth()
        )
        ExposedDropdownMenu(expanded = expanded, onDismissRequest = { expanded = false }) {
            options.forEach { (key, text) ->
                DropdownMenuItem(text = { Text(text) }, onClick = { onSelected(key); expanded = false })
            }
        }
    }
}

@Composable
fun QueryResultsTable(results: List<QueryResult>) {
    Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
        results.forEach {
            ElevatedCard(Modifier.fillMaxWidth()) {
                Row(Modifier.padding(14.dp), horizontalArrangement = Arrangement.SpaceBetween, verticalAlignment = Alignment.CenterVertically) {
                    Column(Modifier.weight(1f)) {
                        Text(it.label, fontWeight = FontWeight.SemiBold)
                        Text(listOf(it.date, it.time, it.sensorId).filter { text -> text.isNotBlank() }.joinToString(" · "))
                    }
                    Text("${it.value.format()} ${it.unit}", fontWeight = FontWeight.Bold)
                }
            }
        }
    }
}

@Composable
fun LineChart(results: List<QueryResult>, modifier: Modifier = Modifier, color: Color = MaterialTheme.colorScheme.primary) {
    ChartSurface(title = "Evolución temporal", modifier = modifier) {
        Canvas(Modifier.fillMaxWidth().height(220.dp).padding(12.dp)) {
            if (results.size < 2) return@Canvas
            val values = results.map { it.value }
            val min = values.minOrNull() ?: 0.0
            val max = values.maxOrNull() ?: 1.0
            val range = (max - min).takeIf { it > 0 } ?: 1.0
            val stepX = size.width / (results.lastIndex.coerceAtLeast(1))
            val path = Path()
            results.forEachIndexed { index, result ->
                val x = index * stepX
                val y = size.height - (((result.value - min) / range).toFloat() * size.height)
                if (index == 0) path.moveTo(x, y) else path.lineTo(x, y)
            }
            drawPath(path, color, style = Stroke(width = 5f, cap = StrokeCap.Round))
        }
    }
}

@Composable
fun BarChart(results: List<QueryResult>, modifier: Modifier = Modifier, color: Color = MaterialTheme.colorScheme.tertiary) {
    ChartSurface(title = "Promedios diarios", modifier = modifier) {
        Canvas(Modifier.fillMaxWidth().height(220.dp).padding(12.dp)) {
            if (results.isEmpty()) return@Canvas
            val max = results.maxOf { it.value }.takeIf { it > 0 } ?: 1.0
            val barWidth = size.width / (results.size * 1.6f)
            results.forEachIndexed { index, result ->
                val height = (result.value / max).toFloat() * size.height
                val left = index * (barWidth * 1.6f) + barWidth * .3f
                drawRoundRect(color, topLeft = Offset(left, size.height - height), size = androidx.compose.ui.geometry.Size(barWidth, height))
            }
        }
    }
}

@Composable
private fun ChartSurface(title: String, modifier: Modifier = Modifier, content: @Composable () -> Unit) {
    ElevatedCard(modifier.fillMaxWidth()) {
        Column(Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
            Text(title, style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
            Box(Modifier.fillMaxWidth().background(MaterialTheme.colorScheme.surfaceVariant, RoundedCornerShape(16.dp))) { content() }
        }
    }
}

@Composable
fun ShareCsvButton(csv: String, label: String = "Exportar CSV") {
    val context = LocalContext.current
    Button(onClick = {
        val intent = Intent(Intent.ACTION_SEND).apply {
            type = "text/csv"
            putExtra(Intent.EXTRA_SUBJECT, "iot_ambiental_tec.csv")
            putExtra(Intent.EXTRA_TEXT, csv)
        }
        context.startActivity(Intent.createChooser(intent, "Compartir datos CSV"))
    }, enabled = csv.isNotBlank()) { Text(label) }
}
