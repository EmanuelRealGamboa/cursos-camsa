# 🎥 Instrucciones para Videos Educativos

## ⚠️ Problema Actual
Algunos videos pueden no estar disponibles. Esto puede deberse a:
- Restricciones geográficas
- Videos eliminados
- Restricciones de privacidad

## ✅ Solución: Usar Videos Reales de YouTube

### Opción 1: Buscar Videos Reales Manualmente

1. **Busca videos educativos en YouTube:**
   - Ve a YouTube.com
   - Busca: "regenerative medicine", "stem cells", "medicina regenerativa"
   - Filtra por: "Educación" y "Más de 20 minutos"

2. **Obtén el ID del video:**
   - URL ejemplo: `https://www.youtube.com/watch?v=ABC123xyz`
   - El ID es: `ABC123xyz`
   - Para embed: `https://www.youtube.com/embed/ABC123xyz`

3. **Reemplaza en el código:**
   - Edita `src/data/courses.js`
   - Busca `videoUrl: "https://www.youtube.com/embed/..."`
   - Reemplaza con el ID real

### Opción 2: Usar el Script Automático

```bash
# Edita scripts/fix-videos.js
# Agrega IDs reales de videos a la lista workingVideos
# Ejecuta:
node scripts/fix-videos.js
```

### Opción 3: Videos Recomendados (Buscar en YouTube)

**Canales educativos recomendados:**
- Mayo Clinic
- NIH (National Institutes of Health)
- TED-Ed
- Khan Academy Medicine
- Harvard Medical School

**Búsquedas sugeridas:**
- "What is Regenerative Medicine"
- "Stem Cell Therapy Explained"
- "PRP Therapy Medical"
- "Cellular Regeneration"
- "Regenerative Medicine Applications"

## 🔍 Cómo Verificar que un Video Funciona

1. Abre: `https://www.youtube.com/embed/VIDEO_ID`
2. Si carga correctamente, el ID funciona
3. Si dice "Video no disponible", usa otro ID

## 📝 Ejemplo de Reemplazo

**Antes:**
```javascript
videoUrl: "https://www.youtube.com/embed/8aYz2vH6WyM",
```

**Después (con ID real):**
```javascript
videoUrl: "https://www.youtube.com/embed/ABC123xyz",
```

## 💡 Consejos

- Usa videos de canales educativos reconocidos
- Verifica que el video permita embedding
- Prefiere videos en español o con subtítulos
- Videos de 10-30 minutos son ideales para lecciones
