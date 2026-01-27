# 🎨 DOCUMENTACIÓN DE DISEÑO Y UX - LOGEVITY
## Sistema de Diseño, Componentes y Justificaciones

---

## 🎨 SISTEMA DE DISEÑO

### Filosofía de Diseño

LOGEVITY utiliza un sistema de diseño moderno, limpio y profesional que refleja la seriedad y confiabilidad de la medicina regenerativa, mientras mantiene una experiencia de usuario accesible y agradable.

**Principios de Diseño:**
1. **Claridad:** Información clara y fácil de entender
2. **Consistencia:** Elementos visuales coherentes en toda la aplicación
3. **Accesibilidad:** Diseño inclusivo para todos los usuarios
4. **Profesionalismo:** Estética médica confiable
5. **Modernidad:** Tecnología de vanguardia

---

## 🎨 PALETA DE COLORES LOGEVITY

### Colores Principales

#### Color Primario: Dorado LOGEVITY
```css
--logevity: #D4AF37
--logevity-light: #FFF8E1
--logevity-dark: #B8860B
--logevity-accent: #F5C842
--logevity-intense: #FFD700
```

**Justificación:**
- **Dorado (#D4AF37):** Color premium que transmite calidad, excelencia y valor. Asociado con certificaciones y logros. En medicina, el dorado representa estándares altos y profesionalismo.
- **Por qué dorado:** 
  - Diferenciación en el mercado (la mayoría usa azul médico)
  - Asociación con certificaciones y logros
  - Transmite premium sin ser ostentoso
  - Funciona bien en modo claro y oscuro

#### Variantes del Color Primario

**Light (#FFF8E1):**
- Uso: Fondos sutiles, highlights
- Propósito: Crear contraste suave sin fatiga visual

**Dark (#B8860B):**
- Uso: Hover states, elementos activos
- Propósito: Profundidad y jerarquía visual

**Accent (#F5C842):**
- Uso: Elementos interactivos, CTAs secundarios
- Propósito: Llamar atención sin competir con el primario

**Intense (#FFD700):**
- Uso: Énfasis máximo, elementos críticos
- Propósito: Máxima visibilidad para acciones importantes

### Colores del Sistema

#### Colores de Estado

```css
/* Éxito */
--success: #22C55E (green-500)
--success-light: #D1FAE5 (green-100)

/* Advertencia */
--warning: #F59E0B (amber-500)
--warning-light: #FEF3C7 (amber-100)

/* Error */
--danger: #EF4444 (red-500)
--danger-light: #FEE2E2 (red-100)

/* Información */
--info: #3B82F6 (blue-500)
--info-light: #DBEAFE (blue-100)
```

**Justificación de Colores de Estado:**
- **Verde:** Universalmente reconocido como éxito/completado
- **Ámbar:** Advertencia sin ser alarmante
- **Rojo:** Error crítico, requiere atención
- **Azul:** Información neutral y confiable

### Modo Oscuro (Dark Mode)

#### Paleta Dark Mode

```css
/* Fondos */
--bg-dark: #111827 (gray-900)
--bg-dark-secondary: #1F2937 (gray-800)
--bg-dark-tertiary: #374151 (gray-700)

/* Textos */
--text-dark-primary: #F9FAFB (gray-50)
--text-dark-secondary: #D1D5DB (gray-300)
--text-dark-tertiary: #9CA3AF (gray-400)

/* Bordes */
--border-dark: #374151 (gray-700)
```

**Justificación del Dark Mode:**
- **Reducción de fatiga visual:** Especialmente importante para profesionales que estudian por largos períodos
- **Modernidad:** Estándar en aplicaciones profesionales
- **Ahorro de batería:** En dispositivos OLED
- **Preferencia del usuario:** Opción personalizable

### Aplicación de Colores

#### Jerarquía Visual

1. **Primario (Dorado):** CTAs principales, elementos activos, progreso
2. **Secundario (Grises):** Fondos, bordes, texto secundario
3. **Acento (Variantes doradas):** Hover states, highlights
4. **Estado (Verde/Rojo/Ámbar):** Feedback, badges, notificaciones

---

## 📝 TIPOGRAFÍA

### Familias de Fuentes

#### Montserrat (Headings)
```css
font-family: 'Montserrat', sans-serif;
```

**Pesos utilizados:**
- 300: Light (títulos grandes decorativos)
- 400: Regular (subtítulos)
- 500: Medium (títulos de sección)
- 600: Semibold (títulos principales) ⭐ Más usado
- 700: Bold (énfasis)
- 800: Extrabold (hero text)
- 900: Black (máximo énfasis)

**Justificación:**
- **Geométrica y moderna:** Transmite innovación y tecnología
- **Excelente legibilidad:** Funciona bien en tamaños grandes y pequeños
- **Versátil:** Múltiples pesos permiten jerarquía clara
- **Profesional:** Sin ser demasiado formal o rígida

**Aplicación:**
- Todos los títulos (h1, h2, h3, h4, h5, h6)
- Nombres de cursos
- Títulos de módulos
- Textos destacados

#### Open Sans (Body Text)
```css
font-family: 'Open Sans', sans-serif;
```

**Pesos utilizados:**
- 300: Light (texto secundario)
- 400: Regular (body text principal) ⭐ Más usado
- 500: Medium (énfasis en párrafos)
- 600: Semibold (texto importante)
- 700: Bold (énfasis fuerte)
- 800: Extrabold (máximo énfasis)

**Justificación:**
- **Optimizada para lectura:** Diseñada específicamente para pantallas
- **Neutral y clara:** No compite con el contenido
- **Excelente legibilidad:** En tamaños pequeños y grandes bloques de texto
- **Humanista:** Transmite accesibilidad y calidez

**Aplicación:**
- Párrafos y texto corrido
- Descripciones de cursos
- Contenido de lecciones
- Formularios
- Botones y CTAs

### Escala Tipográfica

```css
/* Headings */
h1: 2.25rem (36px) - Montserrat 600
h2: 1.875rem (30px) - Montserrat 600
h3: 1.5rem (24px) - Montserrat 600
h4: 1.25rem (20px) - Montserrat 600
h5: 1.125rem (18px) - Montserrat 600
h6: 1rem (16px) - Montserrat 600

/* Body */
body: 1rem (16px) - Open Sans 400
small: 0.875rem (14px) - Open Sans 400
xs: 0.75rem (12px) - Open Sans 400
```

**Justificación de la Escala:**
- **Ratio 1.25:** Proporción armoniosa y legible
- **Tamaños base 16px:** Óptimo para legibilidad en pantallas
- **Jerarquía clara:** Diferencia suficiente entre niveles

### Espaciado de Texto

```css
/* Letter Spacing */
headings: -0.02em (más compacto, moderno)
body: 0.01em (ligeramente espaciado para legibilidad)
```

---

## 📐 ESPACIADO Y GRID

### Sistema de Espaciado

**Base:** 4px (0.25rem)

```css
0: 0px
1: 4px (0.25rem)
2: 8px (0.5rem)
3: 12px (0.75rem)
4: 16px (1rem) ⭐ Base
6: 24px (1.5rem)
8: 32px (2rem)
12: 48px (3rem)
16: 64px (4rem)
```

**Justificación:**
- **Múltiplos de 4:** Consistencia visual
- **Escala armoniosa:** Relación matemática clara
- **Flexibilidad:** Permite espaciados precisos

### Grid System

**Breakpoints:**
```css
sm: 640px   (móvil grande)
md: 768px   (tablet)
lg: 1024px  (desktop)
xl: 1280px  (desktop grande)
2xl: 1536px (pantalla extra grande)
```

**Columnas:** 12 columnas en desktop, responsive

**Justificación:**
- **Mobile-first:** Diseño optimizado primero para móviles
- **Breakpoints estándar:** Compatibilidad con dispositivos comunes
- **Flexible:** Adaptación fluida entre tamaños

---

## 🧩 COMPONENTES UI

### Badge

**Variantes:**
- `primary` - Dorado LOGEVITY
- `success` - Verde (completado)
- `warning` - Ámbar (intermedio)
- `danger` - Rojo (error)
- `accent` - Dorado claro

**Tamaños:**
- `sm` - Pequeño (texto pequeño)
- `md` - Mediano (default)
- `lg` - Grande (destacado)

**Uso:**
- Niveles de curso (Principiante, Intermedio, Avanzado)
- Estados (Completado, En progreso)
- Categorías

**Justificación:**
- **Información rápida:** Estado visible de un vistazo
- **Color coding:** Asociación visual inmediata
- **Compacto:** No ocupa mucho espacio

### Button

**Variantes:**
- `primary` - Dorado LOGEVITY (acción principal)
- `secondary` - Gris (acción secundaria)
- `accent` - Dorado claro (énfasis)
- `ghost` - Transparente (acción terciaria)
- `success` - Verde (confirmación)
- `danger` - Rojo (destructivo)

**Tamaños:**
- `sm` - Pequeño
- `md` - Mediano (default)
- `lg` - Grande (CTAs principales)

**Estados:**
- Default
- Hover
- Active
- Disabled
- Loading

**Justificación:**
- **Jerarquía clara:** Variantes indican importancia
- **Estados visibles:** Feedback inmediato al usuario
- **Accesible:** Tamaños táctiles adecuados (mínimo 44x44px)

### Card

**Características:**
- Sombra suave
- Border radius: 12px (xl)
- Padding configurable
- Hover effect opcional
- Fondo blanco/gris claro

**Uso:**
- Tarjetas de cursos
- Contenedores de información
- Módulos de contenido

**Justificación:**
- **Separación visual:** Contenido claramente delimitado
- **Jerarquía:** Agrupa información relacionada
- **Interactividad:** Hover indica elementos clickeables

### Input

**Características:**
- Icono opcional
- Label flotante
- Validación visual
- Mensajes de error
- Estados: default, focus, error, disabled

**Justificación:**
- **Claridad:** Label siempre visible
- **Feedback:** Validación en tiempo real
- **Accesibilidad:** Iconos ayudan a identificar campos

### Modal

**Características:**
- Overlay oscuro
- Animación de entrada/salida
- Cierre con click fuera o ESC
- Tamaños configurables (sm, md, lg)
- Header, body, footer opcionales

**Uso:**
- Certificados
- Confirmaciones
- Información detallada

**Justificación:**
- **Foco:** Usuario se concentra en el contenido
- **No intrusivo:** Fácil de cerrar
- **Animación suave:** Transición profesional

### ProgressBar

**Características:**
- Animación suave
- Porcentaje visible
- Colores configurables
- Tamaños (sm, md, lg)

**Uso:**
- Progreso de curso
- Progreso de módulo
- Completitud de lecciones

**Justificación:**
- **Motivación:** Feedback visual del progreso
- **Claridad:** Porcentaje exacto visible
- **Animación:** Transición suave al actualizar

---

## 📱 PÁGINAS Y FUNCIONALIDADES

### 1. Auth (Login/Registro)

**Ruta:** `/`

**Características:**
- Panel izquierdo decorativo con branding
- Panel derecho con formulario
- Toggle entre Login y Registro
- Validación en tiempo real
- Integración con Google/GitHub (UI preparada)

**Elementos de Diseño:**
- **Gradiente dorado:** Fondo del panel izquierdo
- **Logo grande:** Presencia de marca
- **Features destacadas:** Iconos con beneficios
- **Formulario limpio:** Inputs con iconos

**Justificación:**
- **Primera impresión:** Panel izquierdo crea impacto visual
- **Claridad:** Formulario simple y directo
- **Branding:** Logo y colores refuerzan identidad
- **Responsive:** En móvil, solo formulario (panel izquierdo oculto)

### 2. Dashboard

**Ruta:** `/dashboard`

**Características:**
- Saludo personalizado según hora del día
- Tarjetas de estadísticas (cursos iniciados, completados, certificados, racha)
- Cursos en progreso destacados
- Grid de todos los cursos
- Sidebar con progreso general y certificados recientes

**Elementos de Diseño:**
- **Header con gradiente:** Fondo dorado con saludo
- **Cards de estadísticas:** Iconos coloridos con números grandes
- **Progreso circular:** Visualización del progreso general
- **Grid responsive:** Adaptación a diferentes pantallas

**Justificación:**
- **Overview completo:** Todo lo importante en una vista
- **Motivación:** Estadísticas positivas (racha, completados)
- **Navegación rápida:** Acceso directo a cursos en progreso
- **Jerarquía visual:** Elementos importantes más grandes

### 3. CoursesList

**Ruta:** `/courses`

**Características:**
- Grid de todos los cursos disponibles
- Filtros por categoría/nivel
- Búsqueda
- Información de cada curso (duración, lecciones, rating)

**Elementos de Diseño:**
- **Thumbnails:** Imágenes de cursos
- **Badges de nivel:** Color coding (Principiante/Intermedio/Avanzado)
- **Rating con estrellas:** Visualización de calidad
- **Progress bar:** Si el curso está en progreso

**Justificación:**
- **Scannable:** Información clave visible rápidamente
- **Comparación fácil:** Todos los cursos en una vista
- **Filtros:** Encuentra cursos relevantes fácilmente

### 4. CourseView

**Ruta:** `/course/:courseId`

**Características:**
- Header con información del curso
- Lista de módulos expandibles
- Progreso por módulo
- Sidebar con timeline de progreso
- Sistema de desbloqueo (módulos secuenciales)

**Elementos de Diseño:**
- **Header con gradiente:** Fondo dorado con información del curso
- **Módulos como cards:** Cada módulo es una card expandible
- **Indicadores visuales:** 
  - Número para módulo bloqueado
  - Check para módulo completado
  - Lock para módulo bloqueado
- **Timeline vertical:** Visualización del progreso en sidebar

**Justificación:**
- **Estructura clara:** Módulos y lecciones organizados
- **Progreso visible:** Siempre sabes dónde estás
- **Desbloqueo secuencial:** Asegura aprendizaje ordenado
- **Navegación fácil:** Acceso directo a cualquier lección desbloqueada

### 5. LessonView

**Ruta:** `/course/:courseId/lesson/:moduleId/:lessonId`

**Características:**
- Reproductor de video (YouTube embed)
- Información de la lección
- Navegación anterior/siguiente
- Sidebar con lista de lecciones del módulo
- Botón "Marcar como completada"
- Modal de celebración al completar

**Elementos de Diseño:**
- **Fondo oscuro:** Enfoque en el video
- **Controles de video:** Play, anterior, siguiente
- **Sidebar con lista:** Navegación rápida entre lecciones
- **Indicadores de estado:** 
  - Número para no vista
  - Play para actual
  - Check para completada

**Justificación:**
- **Inmersivo:** Fondo oscuro reduce distracciones
- **Navegación fluida:** Fácil pasar entre lecciones
- **Feedback inmediato:** Celebración al completar motiva
- **Responsive:** Sidebar colapsable en móvil

### 6. QuizView

**Ruta:** `/course/:courseId/quiz/:moduleId`

**Características:**
- Preguntas una por una
- Opciones de respuesta clickeables
- Barra de progreso superior
- Indicadores de preguntas respondidas
- Página de resultados con puntuación
- Generación automática de certificado si aprueba

**Elementos de Diseño:**
- **Pregunta destacada:** Tamaño grande, fácil de leer
- **Opciones como botones:** Fácil de clickear
- **Selección visual:** Borde dorado cuando está seleccionada
- **Resultados animados:** Círculo de progreso animado
- **Celebración:** Gradiente verde si aprueba, rojo si no

**Justificación:**
- **Una pregunta a la vez:** Reduce ansiedad
- **Feedback visual:** Selección clara
- **Progreso visible:** Barra superior muestra avance
- **Resultados claros:** Puntuación y estado muy visibles

### 7. Certificates

**Ruta:** `/certificates`

**Características:**
- Grid de certificados obtenidos
- Vista previa de cada certificado
- Modal con certificado completo
- Descarga como imagen PNG
- Compartir certificado

**Elementos de Diseño:**
- **Certificado elegante:** Diseño formal con bordes dorados
- **Grid de previews:** Vista rápida de todos los certificados
- **Modal grande:** Certificado completo en tamaño legible
- **Botones de acción:** Descargar y compartir prominentes

**Justificación:**
- **Orgullo del logro:** Certificados visualmente atractivos
- **Compartible:** Fácil compartir logros en redes sociales
- **Descargable:** Guardar para portafolio profesional

### 8. Profile

**Ruta:** `/profile`

**Características:**
- Información del usuario
- Edición de perfil
- Estadísticas de aprendizaje
- Historial de actividad

**Elementos de Diseño:**
- **Avatar grande:** Identidad visual del usuario
- **Formulario de edición:** Campos editables
- **Estadísticas visuales:** Gráficos y números

**Justificación:**
- **Personalización:** Usuario puede personalizar su perfil
- **Motivación:** Ver estadísticas de progreso

---

## 🎭 ANIMACIONES Y TRANSICIONES

### Framer Motion

**Animaciones Implementadas:**

1. **Fade In:** Entrada suave de elementos
2. **Slide Up:** Elementos aparecen desde abajo
3. **Slide Right:** Transiciones de página
4. **Stagger Children:** Elementos aparecen secuencialmente
5. **Scale:** Efectos de hover y click

**Justificación:**
- **Profesionalismo:** Animaciones suaves y refinadas
- **Feedback:** Transiciones indican cambios de estado
- **Engagement:** Animaciones mantienen interés
- **Performance:** Framer Motion optimizado para 60fps

### Transiciones de Página

- **Duración:** 300-500ms
- **Easing:** ease-out (natural)
- **Tipo:** Fade + Slide

**Justificación:**
- **No intrusivo:** Transiciones rápidas pero suaves
- **Consistente:** Misma transición en toda la app

---

## 📱 RESPONSIVE DESIGN

### Estrategia Mobile-First

**Breakpoints:**
- **Mobile:** < 640px (diseño base)
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

### Adaptaciones por Dispositivo

#### Mobile (< 640px)
- **Navbar:** Menú hamburguesa
- **Grids:** 1 columna
- **Sidebars:** Colapsables/overlay
- **Textos:** Tamaños ajustados
- **Botones:** Tamaño táctil (mínimo 44x44px)

#### Tablet (640px - 1024px)
- **Grids:** 2 columnas
- **Navbar:** Links visibles
- **Sidebars:** Colapsables

#### Desktop (> 1024px)
- **Grids:** 3-4 columnas
- **Sidebars:** Siempre visibles
- **Espaciado:** Más generoso

**Justificación:**
- **Accesibilidad:** Funciona en todos los dispositivos
- **UX optimizada:** Cada tamaño tiene diseño optimizado
- **Touch-friendly:** Botones y áreas táctiles adecuadas

---

## 🌙 DARK MODE

### Implementación

**Toggle:** Botón en navbar (sol/luna)

**Persistencia:** localStorage

**Aplicación:**
- Cambio instantáneo
- Sin parpadeo
- Colores adaptados

### Paleta Dark Mode

**Fondos:**
- Principal: `#111827` (gray-900)
- Secundario: `#1F2937` (gray-800)
- Terciario: `#374151` (gray-700)

**Textos:**
- Primario: `#F9FAFB` (gray-50)
- Secundario: `#D1D5DB` (gray-300)

**Colores LOGEVITY:**
- Mantienen su identidad
- Ajustados para contraste adecuado

**Justificación:**
- **Preferencia del usuario:** Opción personalizable
- **Fatiga visual:** Reduce cansancio en sesiones largas
- **Modernidad:** Estándar en apps profesionales

---

## ♿ ACCESIBILIDAD

### Implementaciones

1. **Contraste:** Ratios WCAG AA cumplidos
2. **Navegación por teclado:** Todos los elementos accesibles
3. **ARIA labels:** Etiquetas descriptivas
4. **Focus states:** Visibles y claros
5. **Tamaños táctiles:** Mínimo 44x44px

### Mejoras Recomendadas

1. **Screen readers:** Más etiquetas ARIA
2. **Skip links:** Navegación rápida
3. **Alt text:** Todas las imágenes
4. **Keyboard shortcuts:** Atajos de teclado

---

## 🎯 JUSTIFICACIÓN DE DECISIONES DE DISEÑO

### Por qué Dorado como Color Primario

1. **Diferenciación:** La mayoría de plataformas médicas usan azul
2. **Premium:** Asociado con calidad y certificaciones
3. **Versatilidad:** Funciona en modo claro y oscuro
4. **Emocional:** Transmite logro y excelencia

### Por qué Montserrat para Headings

1. **Modernidad:** Fuente geométrica contemporánea
2. **Legibilidad:** Excelente en tamaños grandes
3. **Versatilidad:** Múltiples pesos permiten jerarquía

### Por qué Open Sans para Body

1. **Optimizada para pantallas:** Diseñada específicamente para lectura digital
2. **Neutral:** No compite con el contenido
3. **Legible:** Excelente en bloques largos de texto

### Por qué Cards con Sombras

1. **Jerarquía:** Separa contenido del fondo
2. **Profundidad:** Crea sensación de capas
3. **Interactividad:** Hover indica elementos clickeables

### Por qué Animaciones Suaves

1. **Profesionalismo:** Transiciones refinadas
2. **Feedback:** Indican cambios de estado
3. **Engagement:** Mantienen interés del usuario

---

**Documento preparado para:** Diseñadores, Desarrolladores Frontend, Product Managers  
**Fecha:** Enero 2026  
**Versión:** 1.0  
**Mantenido por:** Equipo de Diseño LOGEVITY
