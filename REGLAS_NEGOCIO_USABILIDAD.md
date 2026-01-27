# 📋 REGLAS DE NEGOCIO Y USABILIDAD - LOGEVITY
## Flujos de Usuario, Reglas de Progreso y Sistema de Certificados

---

## 🔄 FLUJOS DE USUARIO

### Flujo 1: Registro y Primer Acceso

```
1. Usuario llega a / (Auth)
   ↓
2. Selecciona "Registrarse"
   ↓
3. Completa formulario:
   - Nombre completo (requerido)
   - Email (requerido, formato válido)
   - Contraseña (mínimo 6 caracteres)
   - Confirmar contraseña (debe coincidir)
   ↓
4. Validación en tiempo real
   ↓
5. Submit → Registro exitoso
   ↓
6. Auto-login automático
   ↓
7. Redirección a /dashboard
   ↓
8. Inicialización de progreso vacío en localStorage
```

**Reglas de Negocio:**
- Email debe ser único (no puede estar registrado)
- Contraseña mínimo 6 caracteres
- Validación de formato de email con regex
- Al registrar, se crea progreso vacío automáticamente
- Avatar generado automáticamente con iniciales

### Flujo 2: Login

```
1. Usuario llega a / (Auth)
   ↓
2. Ingresa email y contraseña
   ↓
3. Validación de credenciales
   ↓
4a. Si válido → Login exitoso → /dashboard
4b. Si inválido → Mensaje de error
```

**Reglas de Negocio:**
- Credenciales se verifican contra localStorage
- Si no existe usuario → Error: "Credenciales incorrectas"
- Sesión persiste en localStorage
- Si ya está autenticado → Redirección automática a /dashboard

### Flujo 3: Exploración de Cursos

```
1. Usuario en /dashboard
   ↓
2. Ve grid de cursos disponibles
   ↓
3. Click en curso → /course/:courseId
   ↓
4. Ve información del curso:
   - Descripción
   - Instructor
   - Duración
   - Número de lecciones
   - Rating
   - Progreso (si ya iniciado)
   ↓
5. Puede:
   - Ver módulos y lecciones
   - Continuar curso (si ya iniciado)
   - Comenzar curso (si es nuevo)
```

**Reglas de Negocio:**
- Todos los cursos son accesibles para ver información
- Progreso se muestra si el curso ha sido iniciado
- Botón "Comenzar" disponible si curso no iniciado
- Botón "Continuar" disponible si curso en progreso

### Flujo 4: Inicio de Curso

```
1. Usuario en /course/:courseId
   ↓
2. Click en "Comenzar curso" o "Continuar curso"
   ↓
3. Navegación a primera lección no completada
   ↓
4. Si es primera vez:
   - Se crea entrada de progreso para el curso
   - Se marca startedAt con timestamp actual
   ↓
5. Redirección a /course/:courseId/lesson/:moduleId/:lessonId
```

**Reglas de Negocio:**
- Solo se puede acceder a lecciones de módulos desbloqueados
- Primer módulo siempre está desbloqueado
- Módulos siguientes se desbloquean al completar el módulo anterior
- Se registra timestamp de inicio del curso

### Flujo 5: Visualización de Lección

```
1. Usuario en /course/:courseId/lesson/:moduleId/:lessonId
   ↓
2. Video se carga (YouTube embed)
   ↓
3. Usuario puede:
   - Ver video completo
   - Navegar a lección anterior/siguiente
   - Ver lista de lecciones en sidebar
   - Marcar como completada
   ↓
4. Al marcar "Completada":
   - Se registra en progreso
   - Se actualiza lastAccessedAt
   - Se actualiza streak (si aplica)
   - Modal de celebración aparece
   ↓
5. Navegación a siguiente lección o quiz
```

**Reglas de Negocio:**
- Lección se puede marcar como completada en cualquier momento
- No es necesario ver video completo para marcar como completada
- Al completar, se actualiza progreso inmediatamente
- Streak se actualiza si es nuevo día de estudio
- Si es día consecutivo → streak aumenta
- Si no es día consecutivo → streak se reinicia a 1

### Flujo 6: Sistema de Streak (Racha)

```
Reglas de Cálculo:
1. Si es primer día de estudio:
   - streak = 1
   - lastStudyDate = hoy
   
2. Si estudia en día consecutivo:
   - streak = streak anterior + 1
   - lastStudyDate = hoy
   
3. Si estudia pero NO es día consecutivo:
   - streak = 1 (reinicio)
   - lastStudyDate = hoy
   
4. Si NO estudia:
   - streak se mantiene
   - lastStudyDate no cambia
```

**Reglas de Negocio:**
- Streak se calcula por día (no por hora)
- Un día = 24 horas desde medianoche
- Completar cualquier lección cuenta como estudio
- Streak se muestra en dashboard como motivación

### Flujo 7: Completar Módulo y Acceso a Quiz

```
1. Usuario completa todas las lecciones de un módulo
   ↓
2. Módulo muestra estado "Completado" (todas las lecciones)
   ↓
3. Quiz del módulo se desbloquea
   ↓
4. Usuario puede acceder al quiz:
   - Desde lista de módulos
   - Desde sidebar de lecciones
   ↓
5. Navegación a /course/:courseId/quiz/:moduleId
```

**Reglas de Negocio:**
- Quiz solo disponible si todas las lecciones están completadas
- No es obligatorio completar lecciones para acceder al quiz (pero se recomienda)
- Quiz puede intentarse múltiples veces

### Flujo 8: Realizar Quiz

```
1. Usuario en /course/:courseId/quiz/:moduleId
   ↓
2. Ve información del quiz:
   - Número de preguntas
   - Puntaje mínimo para aprobar (70%)
   ↓
3. Responde preguntas una por una
   ↓
4. Puede navegar entre preguntas
   ↓
5. Debe responder todas antes de enviar
   ↓
6. Al enviar:
   - Se calcula puntuación
   - Se determina si aprobó (≥70%)
   - Se guarda resultado en progreso
   ↓
7. Si aprobó:
   - Se genera certificado automáticamente
   - Se muestra página de éxito
   - Opción de ver certificado
   ↓
8. Si no aprobó:
   - Se muestra página de resultado
   - Opción de intentar de nuevo
```

**Reglas de Negocio:**
- Puntaje mínimo para aprobar: 70%
- Cálculo: (respuestas correctas / total preguntas) × 100
- Certificado solo se genera si aprueba
- Si ya tiene certificado, no se genera duplicado
- Quiz puede intentarse múltiples veces
- Cada intento sobrescribe el resultado anterior

### Flujo 9: Generación de Certificado

```
1. Usuario aprueba quiz (≥70%)
   ↓
2. Sistema verifica si ya tiene certificado para este módulo
   ↓
3a. Si NO tiene certificado:
    - Se genera nuevo certificado
    - ID único: cert_{courseId}_{moduleId}_{timestamp}
    - Número de certificado: LOGEVITY-{timestamp base36}
    - Se guarda en progreso.certificates[]
    - Se marca módulo como certificado
   
3b. Si YA tiene certificado:
    - No se genera duplicado
    - Se muestra certificado existente
   ↓
4. Redirección a página de resultados
   ↓
5. Opción de ver certificado completo
```

**Reglas de Negocio:**
- Un certificado por módulo por usuario
- Certificado tiene ID único e irrepetible
- Número de certificado es único y verificable
- Certificado incluye:
  - Nombre del usuario
  - Nombre del módulo
  - Nombre del curso
  - Fecha de emisión
  - Número de certificado
- Certificado se puede descargar como imagen PNG
- Certificado se puede compartir

### Flujo 10: Desbloqueo de Módulos

```
Regla de Desbloqueo:
- Módulo 1: Siempre desbloqueado
- Módulo N (N > 1): 
  - Requiere que módulo (N-1) esté completo
  - Módulo completo = todas las lecciones completadas + quiz aprobado
```

**Ejemplo:**
```
Módulo 1: ✅ Desbloqueado (siempre)
  ↓ (completar todas las lecciones + aprobar quiz)
Módulo 2: 🔓 Se desbloquea
  ↓ (completar todas las lecciones + aprobar quiz)
Módulo 3: 🔓 Se desbloquea
  ...
```

**Reglas de Negocio:**
- Progreso secuencial garantiza aprendizaje ordenado
- No se puede saltar módulos
- Módulos bloqueados muestran icono de candado
- Módulos bloqueados no son clickeables

### Flujo 11: Visualización de Certificados

```
1. Usuario en /certificates
   ↓
2. Ve grid de todos sus certificados
   ↓
3. Cada certificado muestra:
   - Preview visual
   - Nombre del módulo
   - Nombre del curso
   - Fecha de emisión
   ↓
4. Click en certificado → Modal con certificado completo
   ↓
5. En modal puede:
   - Ver certificado completo
   - Descargar como PNG
   - Compartir (si navegador soporta)
```

**Reglas de Negocio:**
- Solo se muestran certificados obtenidos
- Certificados ordenados por fecha (más reciente primero)
- Certificado descargable es imagen PNG de alta calidad
- Certificado incluye toda la información verificable

---

## 📊 REGLAS DE PROGRESO

### Cálculo de Progreso de Curso

```javascript
Progreso = (Lecciones Completadas / Total Lecciones) × 100

Ejemplo:
- Curso tiene 15 lecciones
- Usuario completó 8 lecciones
- Progreso = (8 / 15) × 100 = 53.33% ≈ 53%
```

**Reglas:**
- Solo cuenta lecciones completadas
- Quizzes NO cuentan para progreso de lecciones
- Progreso se actualiza en tiempo real
- Progreso se muestra en:
  - Dashboard (tarjeta de curso)
  - CourseView (header del curso)
  - ProgressBar visual

### Cálculo de Progreso de Módulo

```javascript
Progreso Módulo = (Lecciones Completadas del Módulo / Total Lecciones del Módulo) × 100

Ejemplo:
- Módulo tiene 4 lecciones
- Usuario completó 3 lecciones
- Progreso = (3 / 4) × 100 = 75%
```

**Reglas:**
- Progreso por módulo es independiente
- Se muestra barra de progreso debajo del header del módulo
- Progreso se actualiza al completar cada lección

### Módulo Completo

**Definición:**
Un módulo se considera completo cuando:
1. ✅ Todas las lecciones del módulo están completadas
2. ✅ El quiz del módulo fue aprobado (≥70%)

**Indicadores Visuales:**
- Badge "Completado" en el módulo
- Icono de check verde
- Progreso al 100%
- Certificado disponible (si aprobó quiz)

### Curso Completo

**Definición:**
Un curso se considera completo cuando:
- ✅ Todos los módulos están completos
- ✅ Todos los módulos tienen certificado (quiz aprobado)

**Indicadores Visuales:**
- Progreso al 100%
- Badge "Completado" en dashboard
- Todos los módulos muestran check verde

---

## 🏆 SISTEMA DE CERTIFICADOS

### Estructura de Certificado

```javascript
{
  id: "cert_{courseId}_{moduleId}_{timestamp}",
  courseId: number,
  courseTitle: string,
  moduleId: number,
  moduleTitle: string,
  userName: string,
  issuedAt: "ISO 8601 timestamp",
  certificateNumber: "LOGEVITY-{base36 timestamp}"
}
```

### Generación de Certificado

**Condiciones:**
1. Usuario debe aprobar quiz del módulo (≥70%)
2. No debe tener certificado previo para ese módulo
3. Todas las lecciones del módulo deben estar completadas (recomendado, no obligatorio)

**Proceso:**
1. Verificar aprobación de quiz
2. Verificar que no existe certificado previo
3. Generar ID único
4. Generar número de certificado único
5. Crear objeto de certificado
6. Guardar en `progress.certificates[]`
7. Marcar módulo como certificado

### Número de Certificado

**Formato:** `LOGEVITY-{timestamp base36}`

**Ejemplo:** `LOGEVITY-K2X9M3P`

**Características:**
- Único e irrepetible
- Verificable
- Legible
- Corto pero único

### Verificación de Certificado

**Método Actual:**
- Certificado guardado en localStorage del usuario
- Número de certificado único
- Fecha de emisión registrada

**Método Recomendado (Futuro):**
- Base de datos centralizada
- API de verificación pública
- QR code en certificado
- Blockchain para inmutabilidad

### Descarga de Certificado

**Formato:** PNG (imagen)

**Proceso:**
1. Usuario click en "Descargar"
2. Sistema genera canvas con diseño del certificado
3. Canvas se convierte a imagen PNG
4. Descarga automática del archivo
5. Nombre de archivo: `certificado-{certificateNumber}.png`

**Características del Certificado Descargado:**
- Resolución: 1200x800px
- Formato: PNG de alta calidad
- Diseño: Elegante con bordes dorados
- Información completa: Nombre, módulo, curso, fecha, número

---

## 👤 GESTIÓN DE USUARIOS

### Registro de Usuario

**Datos Requeridos:**
- Nombre completo (string, requerido)
- Email (string, formato válido, único)
- Contraseña (string, mínimo 6 caracteres)

**Datos Generados Automáticamente:**
- ID (timestamp)
- Avatar (generado con iniciales)
- createdAt (timestamp ISO 8601)
- Progreso inicial (vacío)

**Validaciones:**
- Email único (no puede estar registrado)
- Email formato válido (regex)
- Contraseña mínimo 6 caracteres
- Confirmación de contraseña debe coincidir

### Perfil de Usuario

**Datos Almacenados:**
```javascript
{
  id: number,
  name: string,
  email: string,
  avatar: string (URL),
  createdAt: string (ISO 8601)
}
```

**Edición:**
- Nombre editable
- Email editable (debe verificar unicidad)
- Avatar generado automáticamente (basado en nombre)

### Sesión de Usuario

**Persistencia:**
- Usuario actual guardado en `localStorage` como `logevityUser`
- Sesión persiste entre recargas de página
- Sesión se mantiene hasta logout explícito

**Seguridad:**
- ⚠️ Contraseña NO se guarda en sesión
- ⚠️ Contraseña en texto plano en registro (mejorar con hash)

---

## 💾 PERSISTENCIA DE DATOS

### Almacenamiento Local (localStorage)

**Claves Utilizadas:**

1. **`logevityUser`**
   - Tipo: JSON string
   - Contenido: Usuario actual (sin contraseña)
   - Vida: Persiste hasta logout

2. **`logevityUsers`**
   - Tipo: JSON string
   - Contenido: Array de todos los usuarios registrados
   - Vida: Persiste permanentemente

3. **`logevityProgress_{userId}`**
   - Tipo: JSON string
   - Contenido: Progreso completo del usuario
   - Vida: Persiste permanentemente
   - Formato: `logevityProgress_1234567890`

4. **`logevityTheme`**
   - Tipo: String
   - Contenido: "light" | "dark"
   - Vida: Persiste permanentemente

### Estructura de Datos de Progreso

```javascript
{
  courses: {
    [courseId]: {
      modules: {
        [moduleId]: {
          completedLessons: [lessonId, ...],
          quizPassed: boolean,
          quizScore: number | null
        }
      },
      startedAt: "ISO 8601",
      lastAccessedAt: "ISO 8601"
    }
  },
  certificates: [
    {
      id: string,
      courseId: number,
      courseTitle: string,
      moduleId: number,
      moduleTitle: string,
      userName: string,
      issuedAt: "ISO 8601",
      certificateNumber: string
    }
  ],
  totalStudyTime: number (segundos),
  streak: number,
  lastStudyDate: string | null (YYYY-MM-DD)
}
```

### Sincronización

**Estado Actual:**
- ❌ No hay sincronización entre dispositivos
- ❌ No hay backup automático
- ❌ Datos solo en navegador local

**Recomendaciones Futuras:**
- Backend con base de datos
- Sincronización en tiempo real
- Backup automático
- Multi-dispositivo

---

## 🔐 REGLAS DE SEGURIDAD

### Autenticación

**Actual:**
- Validación de credenciales en frontend
- Contraseñas en texto plano (⚠️ inseguro)
- Sesión en localStorage

**Recomendado:**
- Backend con hash de contraseñas (bcrypt)
- JWT tokens para sesión
- Refresh tokens
- Expiración de sesión

### Rutas Protegidas

**Implementación:**
- Componente `ProtectedRoute` verifica autenticación
- Si no autenticado → redirección a `/`
- Loading state durante verificación

**Rutas Protegidas:**
- `/dashboard`
- `/courses`
- `/course/:courseId`
- `/course/:courseId/lesson/:moduleId/:lessonId`
- `/course/:courseId/quiz/:moduleId`
- `/certificates`
- `/profile`

**Rutas Públicas:**
- `/` (Auth)

---

## 📱 USABILIDAD

### Principios de Usabilidad Aplicados

1. **Claridad:**
   - Textos claros y directos
   - Iconos descriptivos
   - Feedback visual inmediato

2. **Consistencia:**
   - Mismos patrones en toda la app
   - Colores y estilos coherentes
   - Navegación predecible

3. **Feedback:**
   - Animaciones de transición
   - Estados de carga
   - Mensajes de éxito/error
   - Confirmaciones visuales

4. **Eficiencia:**
   - Navegación rápida
   - Accesos directos
   - Atajos de teclado (preparado)

5. **Prevención de Errores:**
   - Validación en tiempo real
   - Confirmaciones para acciones críticas
   - Deshabilitar botones cuando no aplica

### Flujos Optimizados

**Flujo de Aprendizaje:**
1. Ver información del curso
2. Comenzar curso
3. Ver lecciones en orden
4. Completar lecciones
5. Realizar quiz
6. Obtener certificado
7. Continuar con siguiente módulo

**Flujo de Navegación:**
- Siempre visible: Navbar con acceso a secciones principales
- Breadcrumbs: Contexto de ubicación actual
- Botones de navegación: Anterior/Siguiente en lecciones

---

## 🎯 MÉTRICAS DE USABILIDAD

### Métricas a Monitorear

1. **Tasa de Finalización de Cursos:**
   - Objetivo: >60%
   - Actual: Por medir

2. **Tiempo Promedio por Lección:**
   - Objetivo: 15-20 minutos
   - Actual: Por medir

3. **Tasa de Aprobación de Quizzes:**
   - Objetivo: >70% en primer intento
   - Actual: Por medir

4. **Tasa de Obtención de Certificados:**
   - Objetivo: >50% de módulos iniciados
   - Actual: Por medir

5. **Tiempo de Sesión:**
   - Objetivo: 30-60 minutos promedio
   - Actual: Por medir

---

**Documento preparado para:** Product Managers, Desarrolladores, QA  
**Fecha:** Enero 2026  
**Versión:** 1.0  
**Mantenido por:** Equipo LOGEVITY
