package com.tecsancarlos.iotambiental.domain.usecase

import com.tecsancarlos.iotambiental.data.repository.EnvironmentalRepository

class EnvironmentalUseCases(private val repository: EnvironmentalRepository) {
    fun allData() = repository.getAllData()
    fun latestData() = repository.getLatestData()
    fun dataByRange(startDate: String, endDate: String) = repository.getDataByDateRange(startDate, endDate)
    fun averageByHour(date: String, variable: String) = repository.getAverageByHour(date, variable)
    fun averageByDay(startDate: String, endDate: String, variable: String) = repository.getAverageByDay(startDate, endDate, variable)
    fun historicalMax(variable: String) = repository.getHistoricalMax(variable)
    fun historicalMin(variable: String) = repository.getHistoricalMin(variable)
}
