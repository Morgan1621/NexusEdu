# NexusEdu
Entorno Virtual

# 🎓 NexusEdu - Sistema de Gestión Académica Inteligente

**NexusEdu** es un ecosistema virtual diseñado para centralizar la vida académica universitaria. Bajo una arquitectura de **N-Capas** y un modelo **Cliente-Servidor**, permite a los estudiantes gestionar su progreso, visualizar métricas de rendimiento y acceder a recursos de IA en una interfaz moderna y eficiente.

---

## 📑 Tabla de Contenidos

1. [Tecnologías Utilizadas](https://www.google.com/search?q=%23-tecnolog%C3%ADas-utilizadas)
2. [Arquitectura y Diseño](https://www.google.com/search?q=%23-arquitectura-y-dise%C3%B1o)
3. [Documentación de Ingeniería](https://www.google.com/search?q=%23-documentaci%C3%B3n-de-ingenier%C3%ADa)
4. [Gestión del Proyecto](https://www.google.com/search?q=%23-gesti%C3%B3n-del-proyecto)
5. [Manuales](https://www.google.com/search?q=%23-manuales)

---

## 🛠 Tecnologías Utilizadas

* **Lenguaje:** C# (.NET Framework/Core)
* **Base de Datos:** SQL Server (Transact-SQL)
* **Acceso a Datos:** ADO.NET (Arquitectura Cliente-Servidor)
* **Frontend:** HTML5, CSS3 (Custom Properties), JavaScript (ES6+)
* **Metodología:** SCRUM

---

## 🏗 Arquitectura y Diseño

### Arquitectura en N-Capas

El sistema se divide en:

1. **Capa de Presentación:** Interfaz web interactiva (vistas que ya diseñaste).
2. **Capa de Negocio (BLL):** Lógica de cálculos de GPA, validaciones de créditos y reglas de auditoría.
3. **Capa de Acceso a Datos (DAL):** Uso de **ADO.NET** para ejecución de Procedures y queries.
4. **Capa de Entidades:** Modelos de datos compartidos entre capas.

### Diagrama de Componentes

---

## 📊 Documentación de Ingeniería

<details>
<summary><b>📐 Diagrama Entidad-Relación (DER)</b></summary>
Define la estructura de tablas como `Estudiantes`, `Carreras`, `Asignaturas`, `Calificaciones` y `Matrícula`.
</details>

<details>
<summary><b>🔄 Diagrama de Actividad</b></summary>
Describe el flujo desde el Login del estudiante hasta la generación del reporte de Auditoría Académica.
</details>

<details>
<summary><b>🎯 Casos de Uso</b></summary>

* **CU01:** Autenticación de usuario.
* **CU02:** Visualización de historial de calificaciones.
* **CU03:** Generación de Auditoría Académica interactiva.
</details>

---

## 📈 Gestión del Proyecto

### Estimación COCOMO II

Se aplicó el modelo para estimar el esfuerzo en meses-hombre y el tiempo de desarrollo basado en los Puntos de Función y líneas de código estimadas para un sistema de gestión de complejidad media.

### Matriz de Riesgo y Solución

| Riesgo | Impacto | Solución |
| --- | --- | --- |
| Pérdida de conexión al servidor | Alto | Implementación de reintentos en la capa DAL y caché local. |
| Inconsistencia en cálculos de GPA | Medio | Pruebas unitarias rigurosas en la Capa de Negocio. |

### Estudio de Factibilidad

* **Operativa:** Interfaz intuitiva que reduce la curva de aprendizaje.
* **Técnica:** Uso de SQL Server para integridad referencial sólida.
* **Económica:** Optimización de recursos mediante arquitectura Cliente-Servidor.

---

## 📅 Planificación (Gantt)

El desarrollo se dividió en Sprints de 2 semanas siguiendo la metodología **SCRUM**:

* **Sprint 1:** Modelado de BD y Capa de Acceso a Datos.
* **Sprint 2:** Lógica de Negocio y Conectividad ADO.NET.
* **Sprint 3:** Integración de Frontend (HTML/CSS/JS) y Pruebas.

---

## 🖥 Vistas de la Interfaz

Aquí se integran las capturas de pantalla que ya tienes de tu proyecto:

* **Login:** Acceso seguro por carnet.
* **Dashboard:** Resumen de datos personales.
* **Auditoría:** Visualización dinámica de progreso (Gráficos JS).

---

## 📖 Manuales e Instalación

### Manual de Instalación

1. **Base de Datos:** Ejecutar el script `database.sql` en SQL Server Management Studio.
2. **Configuración:** Ajustar el `ConnectionString` en el archivo de configuración del servidor.
3. **Ejecución:** Compilar la solución en Visual Studio y lanzar el servidor local.

### Manual de Usuario

* Ingresa tus credenciales (Carnet/PIN).
* Navega por las pestañas superiores para ver tus **Clases Actuales**.
* En la sección **Auditoría**, haz clic en "Exportar datos" para obtener tu resumen académico.
