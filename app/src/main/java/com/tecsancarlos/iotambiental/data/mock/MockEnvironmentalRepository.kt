package com.tecsancarlos.iotambiental.data.mock

import com.tecsancarlos.iotambiental.data.model.EnvironmentalData
import com.tecsancarlos.iotambiental.data.model.QueryResult
import com.tecsancarlos.iotambiental.data.repository.EnvironmentalRepository
import com.tecsancarlos.iotambiental.utils.StatsUtils
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flowOf

class MockEnvironmentalRepository(
    private val data: List<EnvironmentalData> = MockDataGenerator.environmentalData()
) : EnvironmentalRepository {
    override fun getAllData(): Flow<List<EnvironmentalData>> = flowOf(data)

    override fun getLatestData(): Flow<List<EnvironmentalData>> = flowOf(
        data.groupBy { it.variable }.mapNotNull { (_, values) -> values.maxByOrNull { it.timestamp } }
    )

    override fun getDataByDateRange(startDate: String, endDate: String): Flow<List<EnvironmentalData>> =
        flowOf(StatsUtils.filterByDateRange(data, startDate, endDate))

    override fun getAverageByHour(date: String, variable: String): Flow<List<QueryResult>> =
        flowOf(StatsUtils.averageByHour(data, date, variable))

    override fun getAverageByDay(startDate: String, endDate: String, variable: String): Flow<List<QueryResult>> =
        flowOf(StatsUtils.averageByDay(data, startDate, endDate, variable))

    override fun getHistoricalMax(variable: String): Flow<QueryResult?> = flowOf(StatsUtils.historicalMax(data, variable))

    override fun getHistoricalMin(variable: String): Flow<QueryResult?> = flowOf(StatsUtils.historicalMin(data, variable))
}
