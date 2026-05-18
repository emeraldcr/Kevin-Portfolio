package com.tecsancarlos.iotambiental

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import com.tecsancarlos.iotambiental.ui.navigation.AppNavigation
import com.tecsancarlos.iotambiental.ui.theme.IoTAmbientalTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            IoTAmbientalTheme { AppNavigation() }
        }
    }
}
