package com.tecsancarlos.iotambiental.data.repository

import com.tecsancarlos.iotambiental.data.mock.MockEnvironmentalRepository

object RepositoryProvider {
    val environmentalRepository: EnvironmentalRepository by lazy { MockEnvironmentalRepository() }
}
