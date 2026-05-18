package com.tecsancarlos.iotambiental.utils

import com.tecsancarlos.iotambiental.data.model.EnvironmentalData
import com.tecsancarlos.iotambiental.data.model.QueryResult
import java.util.Locale
import kotlin.math.abs
import kotlin.math.pow
import kotlin.math.sqrt

object StatsUtils {
    fun filterByVariable(data: List<EnvironmentalData>, variable: String) = data.filter { it.variable == variable }

    fun filterByDateRange(data: List<EnvironmentalData>, startDate: String, endDate: String) =
        data.filter { it.date >= startDate && it.date <= endDate }

    fun averageByHour(data: List<EnvironmentalData>, date: String, variable: String): List<QueryResult> =
        data.filter { it.date == date && it.variable == variable }
            .groupBy { it.time.take(2) + ":00" }
            .toSortedMap()
            .map { (hour, values) -> values.toQueryResult(hour, variable, values.first().unit, date, hour) }

    fun averageByDay(data: List<EnvironmentalData>, startDate: String, endDate: String, variable: String): List<QueryResult> =
        filterByDateRange(data, startDate, endDate)
            .filter { it.variable == variable }
            .groupBy { it.date }
            .toSortedMap()
            .map { (day, values) -> values.toQueryResult(day, variable, values.first().unit, day, "") }

    fun historicalMax(data: List<EnvironmentalData>, variable: String): QueryResult? =
        data.filter { it.variable == variable }.maxByOrNull { it.value }?.toQueryResult("Máximo histórico")

    fun historicalMin(data: List<EnvironmentalData>, variable: String): QueryResult? =
        data.filter { it.variable == variable }.minByOrNull { it.value }?.toQueryResult("Mínimo histórico")

    fun dailyGeneralAverage(data: List<EnvironmentalData>, date: String): Double =
        data.filter { it.date == date }.map { it.value }.average().takeIf { !it.isNaN() } ?: 0.0

    fun detectOutliers(data: List<EnvironmentalData>, variable: String): List<EnvironmentalData> {
        val values = filterByVariable(data, variable)
        if (values.size < 4) return emptyList()
        val mean = values.map { it.value }.average()
        val deviation = sqrt(values.sumOf { (it.value - mean).pow(2) } / values.size)
        return values.filter { deviation > 0 && abs(it.value - mean) > deviation * 2.5 }
    }

    fun Double.format(decimals: Int = 1): String = String.format(Locale.US, "%.${decimals}f", this)

    private fun List<EnvironmentalData>.toQueryResult(label: String, variable: String, unit: String, date: String, time: String) =
        QueryResult(label, map { it.value }.average(), unit, variable, date, time, firstOrNull()?.sensorId.orEmpty())

    private fun EnvironmentalData.toQueryResult(label: String) =
        QueryResult(label, value, unit, variable, date, time, sensorId)
}
