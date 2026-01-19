# 🎥 Cómo Cambiar los Videos por Videos Reales

## ⚠️ Problema
Los videos actuales pueden no estar disponibles. Necesitas reemplazarlos con videos REALES de YouTube.

## ✅ Solución Paso a Paso

### 1. Buscar Videos Reales en YouTube

1. Ve a **YouTube.com**
2. Busca videos educativos sobre medicina regenerativa:
   - "regenerative medicine"
   - "medicina regenerativa"
   - "stem cells"
   - "células madre"
   - "PRP therapy"
3. Filtra por:
   - Duración: Más de 10 minutos
   - Tipo: Educación
   - Idioma: Español o con subtítulos

### 2. Obtener el ID del Video

Cuando encuentres un video que te guste:

**Ejemplo de URL de YouTube:**
```
https://www.youtube.com/watch?v=ABC123xyz789
```

**El ID es la parte después de `v=`:**
```
ABC123xyz789
```

### 3. Reemplazar en el Código

**Opción A: Reemplazo Manual**

1. Abre `src/data/courses.js`
2. Busca: `videoUrl: "https://www.youtube.com/embed/..."`
3. Reemplaza el ID con el ID real que encontraste

**Ejemplo:**
```javascript
// Antes
videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",

// Después (con ID real)
videoUrl: "https://www.youtube.com/embed/ABC123xyz789",
```

**Opción B: Reemplazo Automático**

1. Edita `scripts/fix-videos.js`
2. Agrega los IDs reales a la lista `workingVideos`:
```javascript
const workingVideos = [
  "ABC123xyz789", // Video 1 - Medicina regenerativa
  "DEF456uvw012", // Video 2 - Células madre
  "GHI789rst345", // Video 3 - PRP therapy
  "JKL012mno678", // Video 4 - Aplicaciones clínicas
];
```
3. Ejecuta: `node scripts/fix-videos.js`

### 4. Verificar que Funciona

1. Abre en el navegador: `https://www.youtube.com/embed/TU_ID_AQUI`
2. Si el video carga, funciona ✅
3. Si dice "Video no disponible", prueba otro ID ❌

## 📋 Canales Recomendados

Busca videos en estos canales educativos:

- **Mayo Clinic** - Videos médicos profesionales
- **NIH (National Institutes of Health)** - Investigación médica
- **TED-Ed** - Educación médica
- **Khan Academy Medicine** - Videos educativos
- **Harvard Medical School** - Conferencias médicas
- **Cleveland Clinic** - Medicina regenerativa

## 🔍 Búsquedas Específicas

Para encontrar videos apropiados, busca:

1. **Introducción a medicina regenerativa:**
   - "What is Regenerative Medicine"
   - "Introducción medicina regenerativa"

2. **Células madre:**
   - "Stem Cell Therapy Explained"
   - "Células madre explicado"

3. **PRP:**
   - "PRP Therapy Medical"
   - "Plasma rico en plaquetas"

4. **Aplicaciones clínicas:**
   - "Regenerative Medicine Applications"
   - "Aplicaciones medicina regenerativa"

## 💡 Consejos

- ✅ Usa videos de canales educativos reconocidos
- ✅ Verifica que el video permita embedding (algunos no lo permiten)
- ✅ Prefiere videos en español o con subtítulos
- ✅ Videos de 10-30 minutos son ideales
- ✅ Evita videos promocionales o comerciales
- ✅ Verifica la fecha (prefiere videos recientes)

## 🚀 Reemplazo Rápido

Si quieres usar el mismo video para todas las lecciones (temporalmente):

1. Encuentra UN video que funcione
2. Copia su ID
3. Ejecuta este comando (reemplaza `TU_ID` con el ID real):

```bash
# Windows PowerShell
(Get-Content src/data/courses.js) -replace 'https://www.youtube.com/embed/[^"]+', 'https://www.youtube.com/embed/TU_ID' | Set-Content src/data/courses.js
```

## ⚡ Solución Temporal

Por ahora, todos los videos están configurados con un video placeholder. 

**Para cambiarlos:**
1. Busca videos reales en YouTube
2. Copia los IDs
3. Reemplázalos usando el método que prefieras arriba
