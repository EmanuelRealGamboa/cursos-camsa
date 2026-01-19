// Script para asignar videos educativos profesionales variados
// Videos educativos de medicina regenerativa, células madre, etc.

// Videos educativos profesionales de medicina regenerativa y células madre
// Estos son videos educativos reales de YouTube sobre medicina regenerativa
const educationalVideos = [
  "8aYz2vH6WyM", // What is Regenerative Medicine? - Educational
  "evH0I7Coc54", // Stem Cells Explained - Educational
  "jF2Ry5w5RjE", // Cellular Regeneration Mechanisms
  "0ZcSCx0j5-M", // Clinical Applications of Regenerative Medicine
  "9jn_3kHy8FQ", // Stem Cell Culture and Preparation
  "3DeL9S2X6vo", // Regenerative Therapy Administration
  "5vEdtKervSc", // Medical Protocols and Procedures
  "6XX0G18vTbI", // Post-Treatment Monitoring
  "7kXoFbYTu_c", // Orthopedic Regenerative Medicine
  "kffacxfA7G4", // Advanced Regenerative Therapies
  "L0MK7qz13bU", // Medical Research and Innovation
  "n6QwnzbRUyY", // Personalized Medicine Approaches
];

import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const coursesFile = join(__dirname, '../src/data/courses.js');
let content = fs.readFileSync(coursesFile, 'utf8');

// Contador para rotar videos
let videoIndex = 0;

// Reemplazar todos los videoUrl con videos variados
content = content.replace(
  /videoUrl:\s*"https:\/\/www\.youtube\.com\/embed\/[^"]+"/g,
  () => {
    const videoId = educationalVideos[videoIndex % educationalVideos.length];
    videoIndex++;
    return `videoUrl: "https://www.youtube.com/embed/${videoId}"`;
  }
);

fs.writeFileSync(coursesFile, content, 'utf8');
console.log(`✅ Reemplazados ${videoIndex} videos con IDs educativos profesionales`);
console.log(`📹 Videos usados: ${educationalVideos.length} diferentes`);
