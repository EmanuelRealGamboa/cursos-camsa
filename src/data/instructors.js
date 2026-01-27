// Datos detallados de instructores para Longevity 360
import { coursesData } from './courses.js';

// Función helper para obtener cursos de un instructor
const getInstructorCourses = (instructorName) => {
  return coursesData
    .filter(course => course.instructor === instructorName)
    .map(course => course.id);
};

export const instructorsData = [
  {
    id: "maria-garcia",
    name: "Dr. María García",
    specialty: "Medicina Regenerativa y Terapia Celular",
    country: "🇲🇽",
    countryName: "México",
    description: "Especialista en medicina regenerativa con más de 15 años de experiencia en terapia celular y aplicaciones clínicas. Doctora en Medicina por la Universidad Nacional, con especialización en Biología Celular y Molecular. Ha publicado más de 50 artículos científicos sobre células madre y medicina regenerativa. Su enfoque de enseñanza combina fundamentos teóricos sólidos con aplicaciones prácticas clínicas.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&q=80",
    courses: getInstructorCourses("Dr. María García"),
    videos: [
      {
        title: "Introducción a la Terapia Celular: Fundamentos Científicos",
        url: "https://www.youtube.com/watch?v=0aLRNt4tJv0",
        embedUrl: "https://www.youtube.com/embed/0aLRNt4tJv0"
      },
      {
        title: "Células Madre: Tipos y Aplicaciones Clínicas",
        url: "https://www.youtube.com/watch?v=dAl353YuTkI",
        embedUrl: "https://www.youtube.com/embed/dAl353YuTkI"
      },
      {
        title: "Medicina Regenerativa en la Práctica Clínica",
        url: "https://www.youtube.com/watch?v=dAl353YuTkI",
        embedUrl: "https://www.youtube.com/embed/dAl353YuTkI"
      }
    ],
    credentials: ["MD", "PhD en Biología Celular", "Certificado en Medicina Regenerativa", "Miembro de la Sociedad Internacional de Terapia Celular"]
  },
  {
    id: "carlos-rodriguez",
    name: "Dr. Carlos Rodríguez",
    specialty: "Plasma Rico en Plaquetas (PRP) y Terapias Regenerativas",
    country: "🇪🇸",
    countryName: "España",
    description: "Experto en técnicas de PRP con más de 12 años de experiencia clínica. Especialista en Medicina Deportiva y Ortopedia Regenerativa. Ha desarrollado protocolos innovadores de PRP para diferentes especialidades médicas. Su metodología de enseñanza se basa en casos clínicos reales y técnicas hands-on.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&q=80",
    courses: getInstructorCourses("Dr. Carlos Rodríguez"),
    videos: [
      {
        title: "Preparación de PRP de Alta Calidad: Protocolos Paso a Paso",
        url: "https://www.youtube.com/watch?v=evH0I7Coc54",
        embedUrl: "https://www.youtube.com/embed/evH0I7Coc54"
      },
      {
        title: "PRP en Medicina Deportiva: Casos Clínicos",
        url: "https://www.youtube.com/watch?v=evH0I7Coc54",
        embedUrl: "https://www.youtube.com/embed/evH0I7Coc54"
      },
      {
        title: "Técnicas Avanzadas de PRP: Combinaciones y Protocolos",
        url: "https://www.youtube.com/watch?v=evH0I7Coc54",
        embedUrl: "https://www.youtube.com/embed/evH0I7Coc54"
      }
    ],
    credentials: ["MD", "Especialista en Medicina Deportiva", "Certificado Internacional en PRP", "Instructor Certificado en Terapias Regenerativas"]
  },
  {
    id: "ana-martinez",
    name: "Dra. Ana Martínez",
    specialty: "Medicina Estética Regenerativa y Antiaging",
    country: "🇦🇷",
    countryName: "Argentina",
    description: "Pionera en medicina estética regenerativa con más de 18 años de experiencia. Especialista en Dermatología Estética y Medicina Antiaging. Ha combinado técnicas tradicionales con medicina regenerativa para crear protocolos innovadores de rejuvenecimiento. Su enfoque holístico integra tratamientos faciales, corporales y sistémicos.",
    image: "https://images.unsplash.com/photo-1594824476968-48df8b5ba7c0?w=400&h=400&fit=crop&q=80",
    courses: getInstructorCourses("Dra. Ana Martínez"),
    videos: [
      {
        title: "Rejuvenecimiento Facial con Medicina Regenerativa",
        url: "https://www.youtube.com/watch?v=0ZcSCx0j5-M",
        embedUrl: "https://www.youtube.com/embed/0ZcSCx0j5-M"
      },
      {
        title: "Protocolos Antiaging Integrales: Enfoque Holístico",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        title: "Regeneración Cutánea: Técnicas y Resultados",
        url: "https://www.youtube.com/watch?v=evH0I7Coc54",
        embedUrl: "https://www.youtube.com/embed/evH0I7Coc54"
      }
    ],
    credentials: ["MD", "Especialista en Dermatología", "Diplomado en Medicina Antiaging", "Certificado en Medicina Estética Regenerativa"]
  },
  {
    id: "roberto-sanchez",
    name: "Dr. Roberto Sánchez",
    specialty: "Terapia con Células Madre Mesenquimales",
    country: "🇨🇴",
    countryName: "Colombia",
    description: "Investigador y clínico especializado en células madre mesenquimales con más de 20 años de experiencia. Doctor en Ciencias Biomédicas, ha liderado múltiples proyectos de investigación sobre cultivo y aplicación de células mesenquimales. Su expertise abarca desde la biología celular básica hasta aplicaciones clínicas avanzadas.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&q=80",
    courses: getInstructorCourses("Dr. Roberto Sánchez"),
    videos: [
      {
        title: "Biología de Células Madre Mesenquimales: Fundamentos",
        url: "https://www.youtube.com/watch?v=0ZcSCx0j5-M",
        embedUrl: "https://www.youtube.com/embed/0ZcSCx0j5-M"
      },
      {
        title: "Cultivo y Expansión de Células Mesenquimales",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        title: "Aplicaciones Clínicas de Células Mesenquimales",
        url: "https://www.youtube.com/watch?v=evH0I7Coc54",
        embedUrl: "https://www.youtube.com/embed/evH0I7Coc54"
      }
    ],
    credentials: ["MD", "PhD en Ciencias Biomédicas", "Especialista en Biología Celular", "Investigador Principal en Terapia Celular"]
  },
  {
    id: "laura-fernandez",
    name: "Dra. Laura Fernández",
    specialty: "Medicina Regenerativa en Neurología",
    country: "🇺🇸",
    countryName: "Estados Unidos",
    description: "Neurocientífica y médica especializada en neuroregeneración con más de 14 años de experiencia. Su trabajo se centra en aplicaciones de medicina regenerativa para enfermedades neurológicas y lesiones del sistema nervioso. Ha desarrollado protocolos innovadores para lesiones medulares y trastornos neurodegenerativos.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop&q=80",
    courses: getInstructorCourses("Dra. Laura Fernández"),
    videos: [
      {
        title: "Neuroregeneración: Mecanismos y Aplicaciones",
        url: "https://www.youtube.com/watch?v=evH0I7Coc54",
        embedUrl: "https://www.youtube.com/embed/evH0I7Coc54"
      },
      {
        title: "Terapias Regenerativas para Lesiones Medulares",
        url: "https://www.youtube.com/watch?v=jF2Ry5w5RjE",
        embedUrl: "https://www.youtube.com/embed/jF2Ry5w5RjE"
      },
      {
        title: "Medicina Regenerativa en Enfermedades Neurodegenerativas",
        url: "https://www.youtube.com/watch?v=0ZcSCx0j5-M",
        embedUrl: "https://www.youtube.com/embed/0ZcSCx0j5-M"
      }
    ],
    credentials: ["MD", "PhD en Neurociencias", "Especialista en Neurología", "Certificado en Medicina Regenerativa Neurológica"]
  },
  {
    id: "carlos-mendez",
    name: "Dr. Carlos Méndez",
    specialty: "Medicina Regenerativa en Cardiología",
    country: "🇨🇱",
    countryName: "Chile",
    description: "Cardiólogo intervencionista especializado en regeneración cardíaca con más de 16 años de experiencia. Ha sido pionero en la aplicación de células madre para el tratamiento de enfermedades cardiovasculares. Su investigación se centra en regeneración de tejido cardíaco post-infarto y regeneración valvular.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&q=80",
    courses: getInstructorCourses("Dr. Carlos Méndez"),
    videos: [
      {
        title: "Regeneración Cardíaca: Estado Actual y Futuro",
        url: "https://www.youtube.com/watch?v=jF2Ry5w5RjE",
        embedUrl: "https://www.youtube.com/embed/jF2Ry5w5RjE"
      },
      {
        title: "Células Madre en Infarto de Miocardio: Protocolos Clínicos",
        url: "https://www.youtube.com/watch?v=evH0I7Coc54",
        embedUrl: "https://www.youtube.com/embed/evH0I7Coc54"
      },
      {
        title: "Regeneración de Válvulas Cardíacas con Medicina Regenerativa",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ],
    credentials: ["MD", "Especialista en Cardiología", "Subespecialista en Cardiología Intervencionista", "Certificado en Medicina Regenerativa Cardiovascular"]
  },
  {
    id: "patricia-ramirez",
    name: "Dra. Patricia Ramírez",
    specialty: "Ozonoterapia y Medicina Regenerativa",
    country: "🇵🇪",
    countryName: "Perú",
    description: "Experta en ozonoterapia y su combinación con técnicas regenerativas con más de 13 años de experiencia. Ha desarrollado protocolos innovadores que combinan ozonoterapia con PRP y células madre para potenciar resultados. Su enfoque integra medicina tradicional con terapias complementarias.",
    image: "https://images.unsplash.com/photo-1594824476968-48df8b5ba7c0?w=400&h=400&fit=crop&q=80",
    courses: getInstructorCourses("Dra. Patricia Ramírez"),
    videos: [
      {
        title: "Fundamentos de Ozonoterapia: Mecanismos de Acción",
        url: "https://www.youtube.com/watch?v=evH0I7Coc54",
        embedUrl: "https://www.youtube.com/embed/evH0I7Coc54"
      },
      {
        title: "Ozonoterapia Combinada con PRP: Protocolos y Resultados",
        url: "https://www.youtube.com/watch?v=jF2Ry5w5RjE",
        embedUrl: "https://www.youtube.com/embed/jF2Ry5w5RjE"
      },
      {
        title: "Aplicaciones Clínicas de Ozonoterapia Regenerativa",
        url: "https://www.youtube.com/watch?v=0ZcSCx0j5-M",
        embedUrl: "https://www.youtube.com/embed/0ZcSCx0j5-M"
      }
    ],
    credentials: ["MD", "Especialista en Medicina Integrativa", "Certificado Internacional en Ozonoterapia", "Diplomado en Medicina Regenerativa"]
  },
  {
    id: "fernando-torres",
    name: "Dr. Fernando Torres",
    specialty: "Medicina Regenerativa en Traumatología",
    country: "🇧🇷",
    countryName: "Brasil",
    description: "Traumatólogo y ortopedista especializado en medicina regenerativa aplicada a lesiones traumáticas con más de 17 años de experiencia. Ha desarrollado técnicas innovadoras para acelerar la consolidación ósea y regeneración de tejidos en fracturas complejas. Su trabajo combina cirugía ortopédica con terapias regenerativas.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&q=80",
    courses: getInstructorCourses("Dr. Fernando Torres"),
    videos: [
      {
        title: "Medicina Regenerativa en Fracturas Complejas",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        title: "Regeneración Ósea Acelerada: Técnicas y Protocolos",
        url: "https://www.youtube.com/watch?v=evH0I7Coc54",
        embedUrl: "https://www.youtube.com/embed/evH0I7Coc54"
      },
      {
        title: "Terapias Regenerativas en Lesiones Traumáticas",
        url: "https://www.youtube.com/watch?v=jF2Ry5w5RjE",
        embedUrl: "https://www.youtube.com/embed/jF2Ry5w5RjE"
      }
    ],
    credentials: ["MD", "Especialista en Traumatología y Ortopedia", "Subespecialista en Cirugía Ortopédica", "Certificado en Medicina Regenerativa Ortopédica"]
  },
  {
    id: "sofia-martinez",
    name: "Dra. Sofía Martínez",
    specialty: "Medicina Regenerativa en Ginecología",
    country: "🇻🇪",
    countryName: "Venezuela",
    description: "Ginecóloga especializada en medicina regenerativa aplicada a salud íntima femenina con más de 15 años de experiencia. Ha desarrollado protocolos innovadores para regeneración vaginal, tratamiento de atrofia y aplicaciones estéticas ginecológicas. Su enfoque combina técnicas tradicionales con medicina regenerativa.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&q=80",
    courses: getInstructorCourses("Dra. Sofía Martínez"),
    videos: [
      {
        title: "Medicina Regenerativa en Ginecología: Aplicaciones Clínicas",
        url: "https://www.youtube.com/watch?v=0ZcSCx0j5-M",
        embedUrl: "https://www.youtube.com/embed/0ZcSCx0j5-M"
      },
      {
        title: "PRP en Salud Íntima Femenina: Protocolos y Resultados",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        title: "Regeneración Vaginal con Medicina Regenerativa",
        url: "https://www.youtube.com/watch?v=evH0I7Coc54",
        embedUrl: "https://www.youtube.com/embed/evH0I7Coc54"
      }
    ],
    credentials: ["MD", "Especialista en Ginecología y Obstetricia", "Subespecialista en Ginecología Estética", "Certificado en Medicina Regenerativa Ginecológica"]
  },
  {
    id: "alejandro-vargas",
    name: "Dr. Alejandro Vargas",
    specialty: "Medicina Regenerativa en Dermatología",
    country: "🇬🇹",
    countryName: "Guatemala",
    description: "Dermatólogo especializado en medicina regenerativa aplicada a dermatología clínica y estética con más de 14 años de experiencia. Ha desarrollado protocolos innovadores para regeneración cutánea, tratamiento de cicatrices y aplicaciones estéticas. Su trabajo combina investigación clínica con práctica médica.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&q=80",
    courses: getInstructorCourses("Dr. Alejandro Vargas"),
    videos: [
      {
        title: "Regeneración Cutánea: Técnicas y Aplicaciones",
        url: "https://www.youtube.com/watch?v=jF2Ry5w5RjE",
        embedUrl: "https://www.youtube.com/embed/jF2Ry5w5RjE"
      },
      {
        title: "Tratamiento de Cicatrices con Medicina Regenerativa",
        url: "https://www.youtube.com/watch?v=evH0I7Coc54",
        embedUrl: "https://www.youtube.com/embed/evH0I7Coc54"
      },
      {
        title: "Medicina Regenerativa en Dermatología Estética",
        url: "https://www.youtube.com/watch?v=0ZcSCx0j5-M",
        embedUrl: "https://www.youtube.com/embed/0ZcSCx0j5-M"
      }
    ],
    credentials: ["MD", "Especialista en Dermatología", "Subespecialista en Dermatología Estética", "Certificado en Medicina Regenerativa Dermatológica"]
  },
  {
    id: "carmen-lopez",
    name: "Dra. Carmen López",
    specialty: "Medicina Regenerativa en Reumatología",
    country: "🇨🇷",
    countryName: "Costa Rica",
    description: "Reumatóloga especializada en medicina regenerativa para enfermedades reumáticas con más de 16 años de experiencia. Ha desarrollado protocolos innovadores para artritis, artrosis y enfermedades autoinmunes. Su enfoque integra medicina regenerativa con tratamientos convencionales para optimizar resultados.",
    image: "https://images.unsplash.com/photo-1594824476968-48df8b5ba7c0?w=400&h=400&fit=crop&q=80",
    courses: getInstructorCourses("Dra. Carmen López"),
    videos: [
      {
        title: "Medicina Regenerativa en Artritis y Artrosis",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        title: "Terapias Regenerativas para Enfermedades Reumáticas",
        url: "https://www.youtube.com/watch?v=evH0I7Coc54",
        embedUrl: "https://www.youtube.com/embed/evH0I7Coc54"
      },
      {
        title: "Protocolos Combinados en Reumatología Regenerativa",
        url: "https://www.youtube.com/watch?v=jF2Ry5w5RjE",
        embedUrl: "https://www.youtube.com/embed/jF2Ry5w5RjE"
      }
    ],
    credentials: ["MD", "Especialista en Reumatología", "Subespecialista en Medicina Regenerativa Reumatológica", "Certificado en Terapias Biológicas"]
  },
  {
    id: "miguel-angel-ruiz",
    name: "Dr. Miguel Ángel Ruiz",
    specialty: "Medicina Regenerativa en Urología",
    country: "🇵🇦",
    countryName: "Panamá",
    description: "Urólogo especializado en medicina regenerativa aplicada a urología con más de 13 años de experiencia. Ha desarrollado protocolos innovadores para disfunción eréctil, incontinencia urinaria y aplicaciones estéticas urológicas. Su trabajo combina técnicas mínimamente invasivas con medicina regenerativa.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&q=80",
    courses: getInstructorCourses("Dr. Miguel Ángel Ruiz"),
    videos: [
      {
        title: "Medicina Regenerativa en Urología: Aplicaciones Clínicas",
        url: "https://www.youtube.com/watch?v=0ZcSCx0j5-M",
        embedUrl: "https://www.youtube.com/embed/0ZcSCx0j5-M"
      },
      {
        title: "PRP en Disfunción Eréctil: Protocolos y Resultados",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        title: "Regeneración Uretral con Medicina Regenerativa",
        url: "https://www.youtube.com/watch?v=evH0I7Coc54",
        embedUrl: "https://www.youtube.com/embed/evH0I7Coc54"
      }
    ],
    credentials: ["MD", "Especialista en Urología", "Subespecialista en Urología Estética y Regenerativa", "Certificado en Medicina Regenerativa Urológica"]
  }
];

// Función helper para obtener instructor por nombre
export const getInstructorByName = (name) => {
  return instructorsData.find(instructor => instructor.name === name);
};

// Función helper para obtener instructor por ID
export const getInstructorById = (id) => {
  return instructorsData.find(instructor => instructor.id === id);
};

export default instructorsData;
