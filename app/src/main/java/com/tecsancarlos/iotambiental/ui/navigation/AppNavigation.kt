package com.tecsancarlos.iotambiental.ui.navigation

import androidx.compose.runtime.Composable
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.tecsancarlos.iotambiental.ui.screens.*

sealed class Screen(val route: String) {
    data object Home : Screen("home")
    data object Dashboard : Screen("dashboard")
    data object Query : Screen("query")
    data object Charts : Screen("charts")
    data object Map : Screen("map")
}

@Composable
fun AppNavigation() {
    val navController = rememberNavController()
    NavHost(navController = navController, startDestination = Screen.Home.route) {
        composable(Screen.Home.route) { HomeScreen { navController.navigate(it) } }
        composable(Screen.Dashboard.route) { DashboardScreen { navController.popBackStack() } }
        composable(Screen.Query.route) { QueryScreen { navController.popBackStack() } }
        composable(Screen.Charts.route) { ChartsScreen { navController.popBackStack() } }
        composable(Screen.Map.route) { MapScreen { navController.popBackStack() } }
    }
}
