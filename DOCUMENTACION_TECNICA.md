# 🔧 DOCUMENTACIÓN TÉCNICA - LOGEVITY
## Arquitectura y Especificaciones del Sistema

---

## 📐 ARQUITECTURA DEL SISTEMA

### Arquitectura General

LOGEVITY está construida como una **Single Page Application (SPA)** moderna utilizando React, siguiendo principios de arquitectura modular y escalable.

```
┌─────────────────────────────────────────────────────────┐
│                    CLIENTE (Browser)                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   React App  │  │   Contexts  │  │   Components │  │
│  │   (Vite)     │  │   (State)    │  │   (UI)       │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│           │                │                │            │
│           └────────────────┴────────────────┘            │
│                          │                                │
│                    ┌─────▼─────┐                         │
│                    │ localStorage│                         │
│                    │  (Persistence)                       │
│                    └───────────┘                         │
└─────────────────────────────────────────────────────────┘
```

### Patrón de Arquitectura

**Arquitectura:** Component-Based Architecture con Context API para gestión de estado global

**Patrones de Diseño Implementados:**
- **Provider Pattern:** Para gestión de estado global (Auth, Progress, Theme)
- **Container/Presentational Pattern:** Separación de lógica y presentación
- **HOC Pattern:** Para rutas protegidas
- **Custom Hooks:** Para lógica reutilizable

---

## 🛠️ STACK TECNOLÓGICO DETALLADO

### Frontend Core

#### React 19.2.0
- **Versión:** 19.2.0
- **Propósito:** Framework principal de UI
- **Características utilizadas:**
  - Functional Components con Hooks
  - Context API para estado global
  - React Router para navegación
  - React 19 features (mejoras de performance)

#### Vite 5.4.2
- **Versión:** 5.4.2
- **Propósito:** Build tool y dev server
- **Ventajas:**
  - Hot Module Replacement (HMR) ultra-rápido
  - Build optimizado para producción
  - Soporte nativo para ES modules
  - Configuración mínima

### Estilos y UI

#### Tailwind CSS 3.4.1
- **Versión:** 3.4.1
- **Propósito:** Framework de utilidades CSS
- **Configuración:**
  - Dark mode con clase `dark:`
  - Colores personalizados LOGEVITY
  - Tipografías personalizadas (Montserrat, Open Sans)
  - Animaciones personalizadas

#### Framer Motion 12.26.2
- **Versión:** 12.26.2
- **Propósito:** Animaciones y transiciones
- **Uso:**
  - Transiciones de página
  - Animaciones de componentes
  - Gestos y interacciones
  - AnimatePresence para transiciones

### Navegación

#### React Router DOM 7.12.0
- **Versión:** 7.12.0
- **Propósito:** Enrutamiento de la aplicación
- **Características:**
  - Rutas protegidas
  - Rutas públicas
  - Navegación programática
  - Parámetros dinámicos

### Utilidades

#### Lucide React 0.562.0
- **Versión:** 0.562.0
- **Propósito:** Librería de iconos
- **Ventajas:**
  - Iconos SVG optimizados
  - Tree-shaking automático
  - Personalización de tamaño y color

#### React PDF Renderer 4.3.2
- **Versión:** 4.3.2
- **Propósito:** Generación de PDFs (certificados)
- **Estado:** Instalado pero no implementado completamente

#### html2canvas 1.4.1
- **Versión:** 1.4.1
- **Propósito:** Captura de pantalla para certificados
- **Uso:** Generación de imágenes de certificados

#### jsPDF 4.0.0
- **Versión:** 4.0.0
- **Propósito:** Generación de PDFs
- **Estado:** Instalado para futuras implementaciones

### Desarrollo

#### ESLint 9.39.1
- **Versión:** 9.39.1
- **Propósito:** Linting de código
- **Plugins:**
  - @eslint/js
  - eslint-plugin-react-hooks
  - eslint-plugin-react-refresh

#### PostCSS 8.5.6
- **Versión:** 8.5.6
- **Propósito:** Procesamiento de CSS
- **Plugins:** Autoprefixer

---

## 📁 ESTRUCTURA DE CÓDIGO

### Estructura de Directorios

```
cursos-camsa/
├── public/
│   ├── logos/              # Logos de la marca
│   └── vite.svg
├── src/
│   ├── assets/             # Recursos estáticos
│   ├── components/         # Componentes reutilizables
│   │   ├── layout/         # Componentes de layout
│   │   │   ├── MainLayout.jsx
│   │   │   └── Navbar.jsx
│   │   └── ui/            # Componentes UI base
│   │       ├── Badge.jsx
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── Input.jsx
│   │       ├── Modal.jsx
│   │       └── ProgressBar.jsx
│   ├── context/            # Context API providers
│   │   ├── AuthContext.jsx
│   │   ├── ProgressContext.jsx
│   │   └── ThemeContext.jsx
│   ├── data/              # Datos estáticos
│   │   └── courses.js
│   ├── pages/             # Páginas de la aplicación
│   │   ├── Auth.jsx
│   │   ├── Dashboard.jsx
│   │   ├── CoursesList.jsx
│   │   ├── CourseView.jsx
│   │   ├── LessonView.jsx
│   │   ├── QuizView.jsx
│   │   ├── Certificates.jsx
│   │   └── Profile.jsx
│   ├── App.jsx            # Componente raíz
│   ├── main.jsx          # Punto de entrada
│   └── index.css         # Estilos globales
├── scripts/              # Scripts de utilidad
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

### Organización de Componentes

#### Componentes UI Base (`src/components/ui/`)
Componentes fundamentales reutilizables:

- **Badge:** Etiquetas de estado y categorías
- **Button:** Botones con variantes y estados
- **Card:** Contenedores con sombras y hover
- **Input:** Campos de formulario con validación
- **Modal:** Ventanas modales
- **ProgressBar:** Barras de progreso animadas

#### Componentes de Layout (`src/components/layout/`)
Componentes estructurales:

- **MainLayout:** Layout principal con Navbar
- **Navbar:** Barra de navegación con menú responsive

#### Páginas (`src/pages/`)
Vistas principales de la aplicación:

- **Auth:** Autenticación (login/registro)
- **Dashboard:** Panel principal del usuario
- **CoursesList:** Lista de todos los cursos
- **CourseView:** Vista detallada de un curso
- **LessonView:** Reproductor de lecciones
- **QuizView:** Sistema de quizzes
- **Certificates:** Galería de certificados
- **Profile:** Perfil de usuario

---

## 🔌 APIs Y CONTEXTOS

### Context API Providers

#### 1. AuthContext (`src/context/AuthContext.jsx`)

**Propósito:** Gestión de autenticación y usuarios

**Estado:**
```javascript
{
  user: User | null,
  isLoading: boolean,
  isAuthenticated: boolean
}
```

**Métodos:**
- `login(email, password)` - Autenticación de usuario
- `register(userData)` - Registro de nuevo usuario
- `logout()` - Cerrar sesión
- `updateProfile(updates)` - Actualizar perfil

**Persistencia:** localStorage (`logevityUser`, `logevityUsers`)

#### 2. ProgressContext (`src/context/ProgressContext.jsx`)

**Propósito:** Gestión de progreso de aprendizaje

**Estado:**
```javascript
{
  courses: {
    [courseId]: {
      modules: {
        [moduleId]: {
          completedLessons: number[],
          quizPassed: boolean,
          quizScore: number | null
        }
      },
      startedAt: string,
      lastAccessedAt: string
    }
  },
  certificates: Certificate[],
  totalStudyTime: number,
  streak: number,
  lastStudyDate: string | null
}
```

**Métodos:**
- `completeLesson(courseId, moduleId, lessonId)` - Marcar lección como completada
- `completeQuiz(courseId, moduleId, score, passed)` - Registrar resultado de quiz
- `generateCertificate(...)` - Generar certificado
- `getCourseProgress(...)` - Obtener progreso de curso
- `isModuleComplete(...)` - Verificar si módulo está completo
- `isLessonComplete(...)` - Verificar si lección está completa
- `hasCertificate(...)` - Verificar si tiene certificado

**Persistencia:** localStorage (`logevityProgress_${userId}`)

#### 3. ThemeContext (`src/context/ThemeContext.jsx`)

**Propósito:** Gestión de tema (dark/light mode)

**Estado:**
```javascript
{
  isDark: boolean
}
```

**Métodos:**
- `toggleTheme()` - Alternar entre dark/light mode

**Persistencia:** localStorage (`logevityTheme`)

### Rutas Protegidas

**ProtectedRoute:** Componente HOC que verifica autenticación antes de renderizar
**PublicRoute:** Componente que redirige si el usuario ya está autenticado

---

## 💾 BASE DE DATOS (localStorage)

### Esquema de Datos

#### Usuarios (`logevityUsers`)
```javascript
[
  {
    id: number,
    name: string,
    email: string,
    password: string, // ⚠️ En producción debe estar hasheado
    createdAt: string,
    avatar: string
  }
]
```

#### Usuario Actual (`logevityUser`)
```javascript
{
  id: number,
  name: string,
  email: string,
  avatar: string
  // password NO se guarda aquí
}
```

#### Progreso (`logevityProgress_${userId}`)
```javascript
{
  courses: {
    [courseId]: {
      modules: {
        [moduleId]: {
          completedLessons: number[],
          quizPassed: boolean,
          quizScore: number | null
        }
      },
      startedAt: string,
      lastAccessedAt: string
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
      issuedAt: string,
      certificateNumber: string
    }
  ],
  totalStudyTime: number,
  streak: number,
  lastStudyDate: string | null
}
```

#### Tema (`logevityTheme`)
```javascript
"light" | "dark"
```

### Limitaciones de localStorage

- **Capacidad:** ~5-10MB por dominio
- **Persistencia:** Solo en el navegador del usuario
- **Sincronización:** No hay sincronización entre dispositivos
- **Seguridad:** Datos visibles en DevTools

### Migración Futura a Backend

Para producción, se recomienda migrar a:
- **Base de datos:** PostgreSQL o MongoDB
- **Backend:** Node.js/Express o Python/Django
- **Autenticación:** JWT tokens
- **API REST:** Para todas las operaciones

---

## 🔒 SEGURIDAD

### Implementaciones Actuales

#### 1. Autenticación
- ✅ Validación de formularios
- ✅ Verificación de credenciales
- ✅ Sesión persistente en localStorage
- ⚠️ **Pendiente:** Hash de contraseñas (actualmente en texto plano)

#### 2. Rutas Protegidas
- ✅ Verificación de autenticación antes de acceder
- ✅ Redirección automática si no está autenticado
- ✅ Loading states durante verificación

#### 3. Validación de Datos
- ✅ Validación de email con regex
- ✅ Validación de longitud de contraseña
- ✅ Verificación de coincidencia de contraseñas

### Mejoras Recomendadas para Producción

#### 1. Seguridad de Contraseñas
```javascript
// Implementar bcrypt o similar
import bcrypt from 'bcryptjs';

// Al registrar
const hashedPassword = await bcrypt.hash(password, 10);

// Al verificar
const isValid = await bcrypt.compare(password, user.hashedPassword);
```

#### 2. JWT Tokens
- Implementar tokens JWT para autenticación
- Refresh tokens para sesiones largas
- Expiración de tokens

#### 3. HTTPS
- Forzar conexiones HTTPS en producción
- Certificados SSL válidos

#### 4. CORS
- Configurar CORS apropiadamente en backend
- Whitelist de dominios permitidos

#### 5. Rate Limiting
- Limitar intentos de login
- Protección contra brute force

#### 6. Sanitización de Inputs
- Sanitizar todos los inputs del usuario
- Prevenir XSS attacks

---

## ⚡ PERFORMANCE Y OPTIMIZACIONES

### Optimizaciones Implementadas

#### 1. Code Splitting
- React Router lazy loading (preparado)
- Componentes cargados bajo demanda

#### 2. Lazy Loading de Imágenes
```jsx
<img loading="lazy" ... />
```

#### 3. Memoización
- `useMemo` para cálculos costosos
- `useCallback` para funciones estables

#### 4. Optimización de Re-renders
- Context API con providers específicos
- Evitar re-renders innecesarios

### Optimizaciones Recomendadas

#### 1. React.lazy y Suspense
```javascript
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

<Suspense fallback={<Loading />}>
  <Dashboard />
</Suspense>
```

#### 2. Virtualización de Listas
- Para listas largas de cursos
- Usar `react-window` o `react-virtualized`

#### 3. Service Workers
- Cache de assets estáticos
- Offline functionality

#### 4. Image Optimization
- WebP format
- Responsive images con srcset
- CDN para imágenes

#### 5. Bundle Analysis
```bash
npm run build -- --analyze
```

### Métricas de Performance

**Objetivos:**
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.5s
- Cumulative Layout Shift (CLS): < 0.1

---

## 🚀 DEPLOYMENT

### Build de Producción

```bash
npm run build
```

**Output:** `dist/` directory con assets optimizados

### Configuración de Vite

```javascript
// vite.config.js
export default {
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          motion: ['framer-motion']
        }
      }
    }
  }
}
```

### Hosting Recomendado

1. **Vercel** - Optimizado para React/Vite
2. **Netlify** - Deploy automático desde Git
3. **AWS S3 + CloudFront** - Escalabilidad máxima
4. **Firebase Hosting** - Integración con servicios Firebase

### Variables de Entorno

```env
VITE_API_URL=https://api.logevity.com
VITE_ENVIRONMENT=production
```

---

## 📊 MONITOREO Y LOGGING

### Recomendaciones

#### 1. Error Tracking
- **Sentry** para tracking de errores
- Logs estructurados

#### 2. Analytics
- **Google Analytics** o **Plausible**
- Eventos personalizados para acciones importantes

#### 3. Performance Monitoring
- **Web Vitals** tracking
- Real User Monitoring (RUM)

---

## 🔄 VERSIONAMIENTO

### Estrategia de Versionado

**Semantic Versioning (SemVer):** `MAJOR.MINOR.PATCH`

- **MAJOR:** Cambios incompatibles
- **MINOR:** Nuevas funcionalidades compatibles
- **PATCH:** Correcciones de bugs

**Versión Actual:** 0.0.0 (desarrollo)

---

## 📝 NOTAS TÉCNICAS

### Dependencias Críticas

- **React 19.2.0:** Framework principal
- **Vite 5.4.2:** Build tool
- **React Router 7.12.0:** Navegación
- **Tailwind CSS 3.4.1:** Estilos

### Compatibilidad de Navegadores

- Chrome/Edge: Últimas 2 versiones
- Firefox: Últimas 2 versiones
- Safari: Últimas 2 versiones
- Mobile: iOS Safari, Chrome Mobile

### Requisitos del Sistema

- **Node.js:** >= 18.0.0
- **npm:** >= 9.0.0
- **Navegador:** Moderno con soporte ES6+

---

**Documento preparado para:** Desarrolladores, Arquitectos de Software  
**Fecha:** Enero 2026  
**Versión:** 1.0  
**Mantenido por:** Equipo de Desarrollo LOGEVITY
