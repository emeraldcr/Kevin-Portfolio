# IoT Ambiental TEC

Aplicación Android nativa para un proyecto académico de IoT ambiental del TEC San Carlos. La app permite visualizar datos simulados de sensores y deja preparada la arquitectura para consultar datos reales desde Firebase Firestore.

## Tecnologías usadas

- Kotlin
- Jetpack Compose
- Material 3
- Navigation Compose
- ViewModel
- StateFlow / MutableStateFlow
- Arquitectura MVVM
- Firebase Firestore
- Gradle Kotlin DSL
- Canvas de Compose para gráficos simples

## Funcionalidades implementadas

- Pantalla de inicio con navegación clara a Dashboard, Consultas, Gráficos y Mapa Interactivo.
- Dashboard ambiental con últimas lecturas de temperatura, humedad y viento.
- Promedio general del día más reciente.
- Máximo y mínimo histórico.
- Consultas por:
  - Promedio por hora en un día específico.
  - Promedio por día en rango de fechas.
  - Máximo histórico.
  - Mínimo histórico.
- Validaciones en tiempo real para variable, tipo de consulta y rango de fechas.
- Gráfico de línea para evolución temporal.
- Gráfico de barras para promedios diarios.
- Comparación entre variables ambientales.
- Exportación básica de resultados a CSV usando el menú de compartir de Android.
- Modo oscuro automático según la configuración del sistema.
- Mapa interactivo placeholder del TEC San Carlos con puntos clicables:
  - Dirección de Sede
  - DEVESA
  - Oficinas de Computación
  - Ciencias Exactas
  - Comedor Institucional
  - Laboratorios de Computación
  - Biblioteca
  - Entrada Principal
  - CTEC

## Cómo correr el proyecto

1. Abre este repositorio en Android Studio.
2. Espera la sincronización de Gradle.
3. Selecciona un emulador o dispositivo físico con Android 8.0 o superior.
4. Ejecuta la configuración `app`.

También puedes intentar compilar desde terminal:

```bash
gradle :app:assembleDebug
```

> Nota: el entorno de línea de comandos necesita tener instalado Android SDK y configurada la variable `ANDROID_HOME` o `ANDROID_SDK_ROOT`.

## Datos mock

La app inicia con `MockEnvironmentalRepository`, por lo que funciona sin credenciales de Firebase. El generador crea datos sintéticos de al menos 10 días, cada 30 minutos, para:

- Temperatura: 19 °C a 31 °C.
- Humedad: 80 % a 95 %.
- Viento: 5 km/h a 12 km/h.

El comportamiento simulado considera temperatura más alta durante el día, humedad más alta durante la noche y viento con variaciones moderadas.

## Configuración de Firebase Firestore

La base para Firestore ya está incluida en `FirebaseEnvironmentalRepository`.

Para activar Firebase real:

1. Crea un proyecto en Firebase Console.
2. Registra una app Android con el paquete:

```text
com.tecsancarlos.iotambiental
```

3. Descarga el archivo `google-services.json`.
4. Colócalo en:

```text
app/google-services.json
```

5. En `app/build.gradle.kts`, descomenta el plugin:

```kotlin
id("com.google.gms.google-services")
```

6. Cambia el proveedor de repositorio en `RepositoryProvider` para usar `FirebaseEnvironmentalRepository` en lugar de `MockEnvironmentalRepository`.

## Colección esperada en Firestore

Colección:

```text
environmental_data
```

Documento de ejemplo:

```json
{
  "timestamp": 1760000000000,
  "date": "2026-10-01",
  "time": "08:00",
  "variable": "temperature",
  "value": 24.5,
  "unit": "°C",
  "location": "TEC San Carlos",
  "sensorId": "SENSOR_001"
}
```

Variables soportadas:

- `temperature`
- `humidity`
- `wind`

## Reglas básicas sugeridas para pruebas

Estas reglas son solo para pruebas académicas. No deben usarse en producción sin autenticación y controles adicionales.

```text
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /environmental_data/{document} {
      allow read, write: if true;
    }
  }
}
```

## Estructura principal

```text
app/src/main/java/com/tecsancarlos/iotambiental/
├── data/
│   ├── mock/
│   ├── model/
│   ├── remote/
│   └── repository/
├── domain/usecase/
├── ui/
│   ├── components/
│   ├── navigation/
│   ├── screens/
│   └── theme/
└── utils/
```

## Pendientes y mejoras futuras

- Reemplazar el mapa placeholder por una imagen real del TEC San Carlos.
- Agregar DatePicker nativo para selección de fechas.
- Guardar el CSV como archivo físico con `FileProvider`.
- Agregar autenticación Firebase para entornos reales.
- Agregar pruebas unitarias para cálculos estadísticos.
- Agregar alertas para valores atípicos o condiciones ambientales críticas.
