package com.tecsancarlos.iotambiental.data.mock

import com.tecsancarlos.iotambiental.data.model.EnvironmentalData
import com.tecsancarlos.iotambiental.data.model.EnvironmentalVariable
import com.tecsancarlos.iotambiental.data.model.LocationPoint
import java.time.LocalDate
import java.time.LocalDateTime
import java.time.LocalTime
import java.time.ZoneId
import java.time.format.DateTimeFormatter
import kotlin.math.PI
import kotlin.math.cos
import kotlin.math.sin
import kotlin.random.Random

object MockDataGenerator {
    private val dateFormatter = DateTimeFormatter.ISO_LOCAL_DATE
    private val timeFormatter = DateTimeFormatter.ofPattern("HH:mm")

    fun environmentalData(days: Long = 10): List<EnvironmentalData> {
        val random = Random(2026)
        val start = LocalDate.now().minusDays(days - 1)
        val data = mutableListOf<EnvironmentalData>()
        repeat(days.toInt()) { dayIndex ->
            val date = start.plusDays(dayIndex.toLong())
            for (slot in 0 until 48) {
                val time = LocalTime.MIDNIGHT.plusMinutes(slot * 30L)
                val hour = time.hour + time.minute / 60.0
                val daylightCurve = ((sin(((hour - 6.0) / 24.0) * 2.0 * PI) + 1.0) / 2.0)
                val nightCurve = ((cos(((hour - 2.0) / 24.0) * 2.0 * PI) + 1.0) / 2.0)
                val windCurve = ((sin(((hour + 3.0) / 12.0) * 2.0 * PI) + 1.0) / 2.0)
                val samples = listOf(
                    Triple(EnvironmentalVariable.Temperature, 19.0 + daylightCurve * 12.0 + random.nextDouble(-0.8, 0.8), "SENSOR_TEMP_01"),
                    Triple(EnvironmentalVariable.Humidity, 80.0 + nightCurve * 15.0 + random.nextDouble(-1.2, 1.2), "SENSOR_HUM_01"),
                    Triple(EnvironmentalVariable.Wind, 5.0 + windCurve * 7.0 + random.nextDouble(-0.9, 0.9), "SENSOR_WIND_01")
                )
                samples.forEach { (variable, value, sensor) ->
                    val timestamp = LocalDateTime.of(date, time).atZone(ZoneId.systemDefault()).toInstant().toEpochMilli()
                    data += EnvironmentalData(
                        id = "${variable.key}_${date.format(dateFormatter)}_${time.format(timeFormatter)}",
                        timestamp = timestamp,
                        date = date.format(dateFormatter),
                        time = time.format(timeFormatter),
                        variable = variable.key,
                        value = value.coerceIn(minFor(variable), maxFor(variable)),
                        unit = variable.unit,
                        location = "TEC San Carlos",
                        sensorId = sensor
                    )
                }
            }
        }
        return data.sortedBy { it.timestamp }
    }

    fun locationPoints() = listOf(
        LocationPoint("direccion", "Dirección de Sede", "Administración principal del campus.", .52f, .25f, 25.1, 88.0, 7.2, "SENSOR_DIR_01"),
        LocationPoint("devesa", "DEVESA", "Departamento de Vida Estudiantil y Servicios Académicos.", .35f, .42f, 24.6, 90.4, 6.8, "SENSOR_DEV_02"),
        LocationPoint("computacion", "Oficinas de Computación", "Coordinación académica y oficinas docentes.", .62f, .46f, 25.8, 86.2, 7.9, "SENSOR_COMP_03"),
        LocationPoint("exactas", "Ciencias Exactas", "Aulas y laboratorios de ciencias básicas.", .70f, .35f, 24.9, 89.6, 6.5, "SENSOR_EXA_04"),
        LocationPoint("comedor", "Comedor Institucional", "Zona de alimentación estudiantil.", .44f, .58f, 26.0, 87.1, 8.1, "SENSOR_COM_05"),
        LocationPoint("labs", "Laboratorios de Computación", "Laboratorios para cursos de programación e IoT.", .66f, .60f, 25.4, 88.7, 7.4, "SENSOR_LAB_06"),
        LocationPoint("biblioteca", "Biblioteca", "Centro de recursos bibliográficos y estudio.", .50f, .70f, 24.2, 91.3, 6.1, "SENSOR_BIB_07"),
        LocationPoint("entrada", "Entrada Principal", "Acceso principal al TEC San Carlos.", .18f, .78f, 26.5, 84.9, 9.3, "SENSOR_ENT_08"),
        LocationPoint("ctec", "CTEC", "Centro de Transferencia Tecnológica y Educación Continua.", .80f, .74f, 25.7, 86.8, 8.7, "SENSOR_CTEC_09")
    )

    private fun minFor(variable: EnvironmentalVariable) = when (variable) {
        EnvironmentalVariable.Temperature -> 19.0
        EnvironmentalVariable.Humidity -> 80.0
        EnvironmentalVariable.Wind -> 5.0
    }

    private fun maxFor(variable: EnvironmentalVariable) = when (variable) {
        EnvironmentalVariable.Temperature -> 31.0
        EnvironmentalVariable.Humidity -> 95.0
        EnvironmentalVariable.Wind -> 12.0
    }
}
