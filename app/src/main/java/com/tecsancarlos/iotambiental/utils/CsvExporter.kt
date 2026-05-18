package com.tecsancarlos.iotambiental.utils

import com.tecsancarlos.iotambiental.data.model.EnvironmentalData
import com.tecsancarlos.iotambiental.data.model.QueryResult

object CsvExporter {
    fun environmentalDataToCsv(data: List<EnvironmentalData>): String = buildString {
        appendLine("id,timestamp,date,time,variable,value,unit,location,sensorId")
        data.forEach { appendLine("${it.id},${it.timestamp},${it.date},${it.time},${it.variable},${it.value},${it.unit},${it.location},${it.sensorId}") }
    }

    fun queryResultsToCsv(results: List<QueryResult>): String = buildString {
        appendLine("label,variable,value,unit,date,time,sensorId")
        results.forEach { appendLine("${it.label},${it.variable},${it.value},${it.unit},${it.date},${it.time},${it.sensorId}") }
    }
}
