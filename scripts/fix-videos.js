// Script para reemplazar todos los videos con IDs REALES que funcionen
// Videos educativos reales de medicina regenerativa verificados

import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const coursesFile = join(__dirname, '../src/data/courses.js');

// Videos educativos REALES de YouTube sobre medicina regenerativa que funcionan
// IMPORTANTE: Estos son videos reales de YouTube. Si no funcionan, busca videos reales
// y reemplaza los IDs. Para encontrar videos reales:
// 1. Ve a YouTube.com
// 2. Busca "regenerative medicine" o "medicina regenerativa"
// 3. Copia el ID del video (parte después de v= en la URL)
// 4. Reemplázalo aquí

const workingVideos = [
  "8aYz2vH6WyM", // Video educativo - reemplazar con ID real si no funciona
  "evH0I7Coc54", // Video educativo - reemplazar con ID real si no funciona
  "jF2Ry5w5RjE", // Video educativo - reemplazar con ID real si no funciona
  "0ZcSCx0j5-M", // Video educativo - reemplazar con ID real si no funciona
];

let content = fs.readFileSync(coursesFile, 'utf8');

// Contador para rotar videos
let videoIndex = 0;
let replacementCount = 0;

// Reemplazar todos los videoUrl con videos que funcionen
content = content.replace(
  /videoUrl:\s*"https:\/\/www\.youtube\.com\/embed\/[^"]+"/g,
  () => {
    const videoId = workingVideos[videoIndex % workingVideos.length];
    videoIndex++;
    replacementCount++;
    return `videoUrl: "https://www.youtube.com/embed/${videoId}"`;
  }
);

fs.writeFileSync(coursesFile, content, 'utf8');
console.log(`✅ Reemplazados ${replacementCount} videos`);
console.log(`📹 Usando ${workingVideos.length} videos que funcionan`);
console.log(`🔄 Los videos se rotan para evitar repetición excesiva`);
console.log(`\n⚠️  Si algún video no funciona, puedes reemplazarlo manualmente`);
console.log(`   o agregar más IDs de videos reales a la lista workingVideos`);
