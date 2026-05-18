package com.tecsancarlos.iotambiental.data.remote

import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.ktx.toObject
import com.tecsancarlos.iotambiental.data.model.EnvironmentalData
import com.tecsancarlos.iotambiental.data.model.QueryResult
import com.tecsancarlos.iotambiental.data.repository.EnvironmentalRepository
import com.tecsancarlos.iotambiental.utils.StatsUtils
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.callbackFlow
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.flow.flow

class FirebaseEnvironmentalRepository(
    private val firestore: FirebaseFirestore = FirebaseFirestore.getInstance()
) : EnvironmentalRepository {
    private val collection = firestore.collection("environmental_data")

    override fun getAllData(): Flow<List<EnvironmentalData>> = callbackFlow {
        val listener = collection.addSnapshotListener { snapshot, error ->
            if (error != null) {
                close(error)
                return@addSnapshotListener
            }
            trySend(snapshot?.documents?.mapNotNull { document ->
                document.toObject<EnvironmentalData>()?.copy(id = document.id)
            }?.sortedBy { it.timestamp }.orEmpty())
        }
        awaitClose { listener.remove() }
    }

    override fun getLatestData(): Flow<List<EnvironmentalData>> = flow {
        emit(getAllData().first().groupBy { it.variable }.mapNotNull { it.value.maxByOrNull { item -> item.timestamp } })
    }

    override fun getDataByDateRange(startDate: String, endDate: String): Flow<List<EnvironmentalData>> = flow {
        emit(StatsUtils.filterByDateRange(getAllData().first(), startDate, endDate))
    }

    override fun getAverageByHour(date: String, variable: String): Flow<List<QueryResult>> = flow {
        emit(StatsUtils.averageByHour(getAllData().first(), date, variable))
    }

    override fun getAverageByDay(startDate: String, endDate: String, variable: String): Flow<List<QueryResult>> = flow {
        emit(StatsUtils.averageByDay(getAllData().first(), startDate, endDate, variable))
    }

    override fun getHistoricalMax(variable: String): Flow<QueryResult?> = flow {
        emit(StatsUtils.historicalMax(getAllData().first(), variable))
    }

    override fun getHistoricalMin(variable: String): Flow<QueryResult?> = flow {
        emit(StatsUtils.historicalMin(getAllData().first(), variable))
    }
}
