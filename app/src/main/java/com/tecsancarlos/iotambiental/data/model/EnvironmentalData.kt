package com.tecsancarlos.iotambiental.data.model

data class EnvironmentalData(
    val id: String = "",
    val timestamp: Long = 0L,
    val date: String = "",
    val time: String = "",
    val variable: String = "",
    val value: Double = 0.0,
    val unit: String = "",
    val location: String = "",
    val sensorId: String = ""
)

data class QueryResult(
    val label: String,
    val value: Double,
    val unit: String,
    val variable: String,
    val date: String = "",
    val time: String = "",
    val sensorId: String = ""
)

data class LocationPoint(
    val id: String,
    val name: String,
    val description: String,
    val x: Float,
    val y: Float,
    val temperature: Double,
    val humidity: Double,
    val windSpeed: Double,
    val sensorId: String
)

enum class EnvironmentalVariable(val key: String, val label: String, val unit: String) {
    Temperature("temperature", "Temperatura", "°C"),
    Humidity("humidity", "Humedad", "%"),
    Wind("wind", "Viento", "km/h");

    companion object {
        fun fromKey(key: String) = entries.firstOrNull { it.key == key } ?: Temperature
    }
}
