# Guía: Cómo Cambiar Videos e Imágenes Manualmente

Esta guía te explica cómo cambiar los videos e imágenes que se muestran en la aplicación.

## 📁 Ubicación de Archivos

Los datos se encuentran en estos archivos:
- **Instructores**: `src/data/instructors.js`
- **Cursos y Lecciones**: `src/data/courses.js`
- **Imágenes locales**: `public/` (para imágenes que subas tú)

---

## 🖼️ Cambiar Imágenes de Instructores

### Opción 1: Usar URL de Internet
Edita el archivo `src/data/instructors.js` y cambia el campo `image`:

```javascript
{
  id: "maria-garcia",
  name: "Dr. María García",
  image: "https://tu-url-de-imagen.com/foto.jpg",  // ← Cambia esta URL
  // ... resto de datos
}
```

### Opción 2: Usar Imagen Local
1. Coloca tu imagen en `public/instructors/` (crea la carpeta si no existe)
2. Usa la ruta relativa:

```javascript
{
  id: "maria-garcia",
  name: "Dr. María García",
  image: "/instructors/maria-garcia.jpg",  // ← Ruta desde public/
  // ... resto de datos
}
```

**Ejemplo de estructura:**
```
public/
  └── instructors/
      ├── maria-garcia.jpg
      ├── carlos-rodriguez.jpg
      └── ana-martinez.jpg
```

---

## 🎥 Cambiar Videos de Instructores

Edita el archivo `src/data/instructors.js` en la sección `videos`:

```javascript
{
  id: "maria-garcia",
  name: "Dr. María García",
  videos: [
    {
      title: "Título del Video",  // ← Cambia el título
      url: "https://www.youtube.com/watch?v=TU_VIDEO_ID",  // ← URL completa de YouTube
      embedUrl: "https://www.youtube.com/embed/TU_VIDEO_ID"  // ← URL para embebido
    },
    // Puedes agregar más videos aquí
    {
      title: "Otro Video",
      url: "https://www.youtube.com/watch?v=OTRO_VIDEO_ID",
      embedUrl: "https://www.youtube.com/embed/OTRO_VIDEO_ID"
    }
  ]
}
```

### Cómo obtener el ID de un video de YouTube:
1. Ve a YouTube y copia la URL del video
2. La URL se ve así: `https://www.youtube.com/watch?v=ABC123xyz`
3. El ID es: `ABC123xyz`
4. Usa ese ID en:
   - `url`: `https://www.youtube.com/watch?v=ABC123xyz`
   - `embedUrl`: `https://www.youtube.com/embed/ABC123xyz`

---

## 🎬 Cambiar Videos de Lecciones

Edita el archivo `src/data/courses.js` y busca la lección que quieres cambiar:

```javascript
{
  id: 1,
  title: "¿Qué es la medicina regenerativa?",
  duration: "12:30",
  videoUrl: "https://www.youtube.com/embed/TU_VIDEO_ID",  // ← Cambia esta URL
  description: "Definición, historia y alcance de la medicina regenerativa",
  completed: false
}
```

**Nota:** Para lecciones, usa directamente la URL de embed: `https://www.youtube.com/embed/VIDEO_ID`

---

## 🖼️ Cambiar Imágenes de Cursos (Thumbnails)

Edita el archivo `src/data/courses.js` y cambia el campo `thumbnail`:

```javascript
{
  id: 1,
  title: "Fundamentos de Medicina Regenerativa",
  thumbnail: "https://tu-url-de-imagen.com/curso.jpg",  // ← Cambia esta URL
  // ... resto de datos
}
```

### Usar Imagen Local:
1. Coloca tu imagen en `public/courses/`
2. Usa la ruta:

```javascript
{
  id: 1,
  title: "Fundamentos de Medicina Regenerativa",
  thumbnail: "/courses/fundamentos.jpg",  // ← Ruta desde public/
  // ... resto de datos
}
```

---

## 📝 Ejemplo Completo: Cambiar Todo de un Instructor

```javascript
{
  id: "maria-garcia",
  name: "Dr. María García",
  specialty: "Medicina Regenerativa y Terapia Celular",
  country: "🇲🇽",
  countryName: "México",
  description: "Tu descripción aquí...",
  
  // IMAGEN: URL de internet o ruta local
  image: "/instructors/maria-garcia.jpg",  // ← Imagen local
  // O
  image: "https://ejemplo.com/foto.jpg",   // ← URL de internet
  
  courses: getInstructorCourses("Dr. María García"),
  
  // VIDEOS: Agrega o modifica los videos
  videos: [
    {
      title: "Mi Primer Video",
      url: "https://www.youtube.com/watch?v=ABC123",
      embedUrl: "https://www.youtube.com/embed/ABC123"
    },
    {
      title: "Mi Segundo Video",
      url: "https://www.youtube.com/watch?v=XYZ789",
      embedUrl: "https://www.youtube.com/embed/XYZ789"
    }
  ],
  
  credentials: ["MD", "PhD", "Certificado"]
}
```

---

## 🔧 Pasos Rápidos

### Para cambiar una imagen de instructor:
1. Abre `src/data/instructors.js`
2. Busca el instructor por nombre
3. Cambia el campo `image: "..."` con tu URL o ruta local
4. Guarda el archivo

### Para cambiar un video de instructor:
1. Abre `src/data/instructors.js`
2. Busca el instructor
3. En la sección `videos`, cambia `url` y `embedUrl`
4. Guarda el archivo

### Para cambiar un video de lección:
1. Abre `src/data/courses.js`
2. Busca el curso y módulo
3. En la lección, cambia `videoUrl`
4. Guarda el archivo

---

## 💡 Tips Importantes

1. **Formato de URLs de YouTube:**
   - URL normal: `https://www.youtube.com/watch?v=VIDEO_ID`
   - URL embed: `https://www.youtube.com/embed/VIDEO_ID`

2. **Imágenes locales:**
   - Deben estar en la carpeta `public/`
   - Usa rutas que empiecen con `/` (ej: `/instructors/foto.jpg`)
   - Formatos recomendados: JPG, PNG, WebP

3. **Tamaños recomendados:**
   - Imágenes de instructores: 400x400px o más
   - Thumbnails de cursos: 800x500px o más

4. **Después de hacer cambios:**
   - Guarda el archivo
   - El servidor de desarrollo se recargará automáticamente
   - Si no ves los cambios, recarga la página en el navegador (F5)

---

## 🚀 Ejemplo: Agregar Tu Propia Imagen

1. Crea la carpeta: `public/instructors/`
2. Coloca tu imagen: `public/instructors/maria-garcia.jpg`
3. En `src/data/instructors.js`:
   ```javascript
   image: "/instructors/maria-garcia.jpg"
   ```
4. ¡Listo! La imagen se mostrará en la aplicación.

---

## ❓ Preguntas Frecuentes

**P: ¿Puedo usar videos de otras plataformas además de YouTube?**
R: Actualmente la aplicación está configurada para YouTube. Para otras plataformas necesitarías modificar el código del componente.

**P: ¿Qué pasa si la URL de la imagen no funciona?**
R: La aplicación tiene un fallback automático que mostrará un avatar generado si la imagen falla.

**P: ¿Puedo agregar más videos a un instructor?**
R: Sí, simplemente agrega más objetos al array `videos` en el formato mostrado arriba.

**P: ¿Cómo sé si mis cambios funcionaron?**
R: Guarda el archivo y revisa la aplicación en el navegador. Si no ves cambios, recarga la página (F5).
