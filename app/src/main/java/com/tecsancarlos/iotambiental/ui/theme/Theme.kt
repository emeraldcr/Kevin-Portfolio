package com.tecsancarlos.iotambiental.ui.theme

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

private val LightColors = lightColorScheme(
    primary = Color(0xFF006B5B),
    secondary = Color(0xFF4A635E),
    tertiary = Color(0xFF3E5F90),
    background = Color(0xFFF5FBF8),
    surface = Color(0xFFFFFFFF)
)

private val DarkColors = darkColorScheme(
    primary = Color(0xFF74DCC7),
    secondary = Color(0xFFB1CCC4),
    tertiary = Color(0xFFA8C7FA),
    background = Color(0xFF0F1513),
    surface = Color(0xFF17201D)
)

@Composable
fun IoTAmbientalTheme(darkTheme: Boolean = isSystemInDarkTheme(), content: @Composable () -> Unit) {
    MaterialTheme(colorScheme = if (darkTheme) DarkColors else LightColors, content = content)
}
