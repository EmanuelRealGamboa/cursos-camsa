// Datos de cursos de medicina regenerativa para LOGEVITY
export const coursesData = [
  {
    id: 1,
    title: "Fundamentos de Medicina Regenerativa",
    description: "Introducción completa a los principios básicos de la medicina regenerativa, células madre y terapias avanzadas.",
    category: "Fundamentos",
    thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop&q=80",
    instructor: "Dr. María García",
    duration: "8 horas",
    totalLessons: 15,
    level: "Principiante",
    rating: 4.9,
    students: 2150,
    modules: [
      {
        id: 1,
        title: "Módulo 1: Introducción a la Medicina Regenerativa",
        description: "Conceptos básicos y fundamentos científicos",
        lessons: [
          {
            id: 1,
            title: "¿Qué es la medicina regenerativa?",
            duration: "12:30",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Definición, historia y alcance de la medicina regenerativa",
            completed: false
          },
          {
            id: 2,
            title: "Células madre: tipos y características",
            duration: "18:45",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Clasificación de células madre y sus propiedades únicas",
            completed: false
          },
          {
            id: 3,
            title: "Mecanismos de regeneración celular",
            duration: "15:20",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Cómo funcionan los procesos de regeneración en el organismo",
            completed: false
          },
          {
            id: 4,
            title: "Aplicaciones clínicas actuales",
            duration: "20:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Casos de uso reales en la práctica médica",
            completed: false
          }
        ],
        quiz: {
          id: 1,
          title: "Quiz: Introducción a la Medicina Regenerativa",
          questions: [
            {
              id: 1,
              question: "¿Cuál es la principal característica de las células madre?",
              options: [
                "Su capacidad de diferenciación",
                "Su tamaño microscópico",
                "Su resistencia a enfermedades",
                "Su velocidad de división"
              ],
              correctAnswer: 0
            },
            {
              id: 2,
              question: "¿Qué tipo de células madre tiene mayor potencial terapéutico?",
              options: [
                "Células madre adultas",
                "Células madre embrionarias",
                "Células madre pluripotentes inducidas",
                "Todas tienen el mismo potencial"
              ],
              correctAnswer: 2
            },
            {
              id: 3,
              question: "¿En qué área la medicina regenerativa ha mostrado más avances?",
              options: [
                "Cardiología",
                "Ortopedia y traumatología",
                "Dermatología",
                "Neurología"
              ],
              correctAnswer: 1
            }
          ],
          passingScore: 70
        }
      },
      {
        id: 2,
        title: "Módulo 2: Terapias con Células Madre",
        description: "Aplicaciones prácticas y técnicas de administración",
        lessons: [
          {
            id: 5,
            title: "Preparación de células madre para terapia",
            duration: "22:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Procesos de cultivo, expansión y preparación",
            completed: false
          },
          {
            id: 6,
            title: "Vías de administración",
            duration: "16:30",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Métodos de aplicación: intravenosa, local, intralesional",
            completed: false
          },
          {
            id: 7,
            title: "Dosificación y protocolos",
            duration: "19:15",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Cálculo de dosis y esquemas de tratamiento",
            completed: false
          },
          {
            id: 8,
            title: "Monitoreo y seguimiento post-tratamiento",
            duration: "14:45",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Evaluación de resultados y control de efectos",
            completed: false
          }
        ],
        quiz: {
          id: 2,
          title: "Quiz: Terapias con Células Madre",
          questions: [
            {
              id: 1,
              question: "¿Cuál es la vía de administración más común para células madre?",
              options: [
                "Intravenosa",
                "Intramuscular",
                "Intralesional",
                "Subcutánea"
              ],
              correctAnswer: 2
            },
            {
              id: 2,
              question: "¿Qué factor es más importante al determinar la dosis?",
              options: [
                "Edad del paciente",
                "Tipo de lesión",
                "Peso corporal",
                "Todas las anteriores"
              ],
              correctAnswer: 3
            },
            {
              id: 3,
              question: "¿Cuánto tiempo típicamente se requiere para ver resultados iniciales?",
              options: [
                "1-2 semanas",
                "4-6 semanas",
                "3-4 meses",
                "6-12 meses"
              ],
              correctAnswer: 1
            }
          ],
          passingScore: 70
        }
      },
      {
        id: 3,
        title: "Módulo 3: Medicina Regenerativa en Ortopedia",
        description: "Aplicaciones específicas en lesiones musculoesqueléticas",
        lessons: [
          {
            id: 9,
            title: "Tratamiento de lesiones de cartílago",
            duration: "25:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Técnicas para regeneración de cartílago articular",
            completed: false
          },
          {
            id: 10,
            title: "Terapia para tendinopatías",
            duration: "21:30",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Aplicación en tendones y ligamentos",
            completed: false
          },
          {
            id: 11,
            title: "Fracturas y consolidación ósea",
            duration: "18:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Aceleración de la cicatrización ósea",
            completed: false
          },
          {
            id: 12,
            title: "Artrosis y degeneración articular",
            duration: "23:15",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Enfoques regenerativos para artrosis",
            completed: false
          }
        ],
        quiz: {
          id: 3,
          title: "Quiz: Medicina Regenerativa en Ortopedia",
          questions: [
            {
              id: 1,
              question: "¿Qué tipo de células son más efectivas para regeneración de cartílago?",
              options: [
                "Células madre mesenquimales",
                "Condrocitos",
                "Osteoblastos",
                "Fibroblastos"
              ],
              correctAnswer: 0
            },
            {
              id: 2,
              question: "¿Cuál es la tasa de éxito típica en regeneración de cartílago?",
              options: [
                "40-50%",
                "60-70%",
                "75-85%",
                "90-95%"
              ],
              correctAnswer: 2
            },
            {
              id: 3,
              question: "¿En qué tipo de lesión ortopédica la medicina regenerativa muestra mejores resultados?",
              options: [
                "Fracturas complejas",
                "Lesiones de cartílago",
                "Tendinopatías crónicas",
                "Todas las anteriores"
              ],
              correctAnswer: 3
            }
          ],
          passingScore: 70
        }
      }
    ]
  },
  {
    id: 2,
    title: "Plasma Rico en Plaquetas (PRP) Avanzado",
    description: "Dominio completo de las técnicas de PRP, preparación, aplicación y protocolos avanzados para diferentes patologías.",
    category: "Técnicas Avanzadas",
    thumbnail: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=500&fit=crop&q=80",
    instructor: "Dr. Carlos Rodríguez",
    duration: "10 horas",
    totalLessons: 18,
    level: "Intermedio",
    rating: 4.8,
    students: 1680,
    modules: [
      {
        id: 1,
        title: "Módulo 1: Fundamentos del PRP",
        description: "Bases científicas y preparación del PRP",
        lessons: [
          {
            id: 1,
            title: "Biología de las plaquetas y factores de crecimiento",
            duration: "15:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Composición y función de los factores de crecimiento",
            completed: false
          },
          {
            id: 2,
            title: "Sistemas de centrifugación",
            duration: "20:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Equipos y técnicas de centrifugación",
            completed: false
          },
          {
            id: 3,
            title: "Preparación de PRP de alta calidad",
            duration: "25:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Protocolos paso a paso para obtener PRP óptimo",
            completed: false
          },
          {
            id: 4,
            title: "Control de calidad y validación",
            duration: "18:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Cómo verificar la calidad del PRP preparado",
            completed: false
          },
          {
            id: 5,
            title: "Almacenamiento y conservación",
            duration: "12:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Mejores prácticas para preservar el PRP",
            completed: false
          }
        ],
        quiz: {
          id: 1,
          title: "Quiz: Fundamentos del PRP",
          questions: [
            {
              id: 1,
              question: "¿Cuál es el factor de crecimiento más importante en PRP?",
              options: [
                "PDGF",
                "VEGF",
                "TGF-β",
                "Todos son igualmente importantes"
              ],
              correctAnswer: 3
            },
            {
              id: 2,
              question: "¿Cuál es la concentración óptima de plaquetas en PRP?",
              options: [
                "2-3x la concentración basal",
                "4-5x la concentración basal",
                "6-8x la concentración basal",
                "10x o más la concentración basal"
              ],
              correctAnswer: 2
            },
            {
              id: 3,
              question: "¿Cuánto tiempo puede almacenarse el PRP activado?",
              options: [
                "Inmediatamente",
                "Hasta 2 horas",
                "Hasta 6 horas",
                "Hasta 24 horas"
              ],
              correctAnswer: 0
            }
          ],
          passingScore: 70
        }
      },
      {
        id: 2,
        title: "Módulo 2: Aplicaciones Clínicas del PRP",
        description: "Protocolos específicos por especialidad médica",
        lessons: [
          {
            id: 6,
            title: "PRP en dermatología estética",
            duration: "22:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Aplicaciones faciales y corporales",
            completed: false
          },
          {
            id: 7,
            title: "PRP en medicina deportiva",
            duration: "28:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Lesiones deportivas y recuperación",
            completed: false
          },
          {
            id: 8,
            title: "PRP en alopecia y regeneración capilar",
            duration: "24:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Tratamiento de pérdida de cabello",
            completed: false
          },
          {
            id: 9,
            title: "PRP en ginecología",
            duration: "20:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Aplicaciones en salud íntima femenina",
            completed: false
          },
          {
            id: 10,
            title: "PRP en odontología",
            duration: "19:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Regeneración ósea y periodontal",
            completed: false
          }
        ],
        quiz: {
          id: 2,
          title: "Quiz: Aplicaciones Clínicas del PRP",
          questions: [
            {
              id: 1,
              question: "¿Cuál es la frecuencia típica de sesiones de PRP facial?",
              options: [
                "Semanal",
                "Mensual",
                "Cada 3-4 semanas",
                "Anual"
              ],
              correctAnswer: 2
            },
            {
              id: 2,
              question: "¿En qué tipo de lesión deportiva el PRP muestra mejores resultados?",
              options: [
                "Lesiones agudas",
                "Lesiones crónicas",
                "Ambas",
                "Ninguna"
              ],
              correctAnswer: 1
            },
            {
              id: 3,
              question: "¿Cuántas sesiones típicamente se requieren para alopecia?",
              options: [
                "1-2 sesiones",
                "3-4 sesiones",
                "6-8 sesiones",
                "10-12 sesiones"
              ],
              correctAnswer: 2
            }
          ],
          passingScore: 70
        }
      },
      {
        id: 3,
        title: "Módulo 3: Técnicas Avanzadas y Combinaciones",
        description: "Protocolos combinados y técnicas innovadoras",
        lessons: [
          {
            id: 11,
            title: "PRP combinado con células madre",
            duration: "26:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Sinergia entre PRP y células madre",
            completed: false
          },
          {
            id: 12,
            title: "PRP con ácido hialurónico",
            duration: "18:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Combinaciones en medicina estética",
            completed: false
          },
          {
            id: 13,
            title: "PRP microneedling",
            duration: "20:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Técnica de aplicación con microagujas",
            completed: false
          },
          {
            id: 14,
            title: "PRP en cirugía",
            duration: "22:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Uso intraoperatorio de PRP",
            completed: false
          },
          {
            id: 15,
            title: "Casos clínicos complejos",
            duration: "30:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Análisis de casos reales y resultados",
            completed: false
          }
        ],
        quiz: {
          id: 3,
          title: "Quiz: Técnicas Avanzadas",
          questions: [
            {
              id: 1,
              question: "¿Por qué se combina PRP con células madre?",
              options: [
                "Para reducir costos",
                "Para potenciar efectos regenerativos",
                "Para simplificar el procedimiento",
                "No se combinan"
              ],
              correctAnswer: 1
            },
            {
              id: 2,
              question: "¿Cuál es la profundidad recomendada para microneedling con PRP?",
              options: [
                "0.5-1mm",
                "1-2mm",
                "2-3mm",
                "3-4mm"
              ],
              correctAnswer: 1
            },
            {
              id: 3,
              question: "¿En qué tipo de cirugía el PRP muestra más beneficios?",
              options: [
                "Cirugía plástica",
                "Cirugía ortopédica",
                "Cirugía dental",
                "Todas las anteriores"
              ],
              correctAnswer: 3
            }
          ],
          passingScore: 70
        }
      }
    ]
  },
  {
    id: 3,
    title: "Medicina Regenerativa en Estética y Antiaging",
    description: "Aplicaciones estéticas avanzadas, rejuvenecimiento facial, regeneración cutánea y técnicas anti-envejecimiento.",
    category: "Estética",
    thumbnail: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=500&fit=crop&q=80",
    instructor: "Dra. Ana Martínez",
    duration: "12 horas",
    totalLessons: 20,
    level: "Avanzado",
    rating: 4.9,
    students: 2340,
    modules: [
      {
        id: 1,
        title: "Módulo 1: Rejuvenecimiento Facial",
        description: "Técnicas regenerativas para el rostro",
        lessons: [
          {
            id: 1,
            title: "Anatomía facial y envejecimiento",
            duration: "20:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Comprensión del proceso de envejecimiento",
            completed: false
          },
          {
            id: 2,
            title: "PRP facial: técnica y protocolos",
            duration: "25:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Aplicación de PRP en diferentes zonas faciales",
            completed: false
          },
          {
            id: 3,
            title: "Células madre en estética facial",
            duration: "28:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Uso de células madre para rejuvenecimiento",
            completed: false
          },
          {
            id: 4,
            title: "Combinación con otros tratamientos",
            duration: "22:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Sinergia con láser, hilos y otros procedimientos",
            completed: false
          }
        ],
        quiz: {
          id: 1,
          title: "Quiz: Rejuvenecimiento Facial",
          questions: [
            {
              id: 1,
              question: "¿Cuál es el principal mecanismo de acción del PRP facial?",
              options: [
                "Relleno inmediato",
                "Estimulación de colágeno",
                "Exfoliación",
                "Despigmentación"
              ],
              correctAnswer: 1
            },
            {
              id: 2,
              question: "¿Cuánto tiempo típicamente se requieren para ver resultados en PRP facial?",
              options: [
                "Inmediato",
                "2-4 semanas",
                "3-4 meses",
                "6-12 meses"
              ],
              correctAnswer: 2
            },
            {
              id: 3,
              question: "¿Cuál es la frecuencia recomendada de sesiones?",
              options: [
                "Semanal",
                "Mensual",
                "Cada 3-4 semanas",
                "Anual"
              ],
              correctAnswer: 2
            }
          ],
          passingScore: 70
        }
      },
      {
        id: 2,
        title: "Módulo 2: Regeneración Corporal",
        description: "Aplicaciones en cuerpo y extremidades",
        lessons: [
          {
            id: 5,
            title: "Tratamiento de estrías",
            duration: "24:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Protocolos para atenuación de estrías",
            completed: false
          },
          {
            id: 6,
            title: "Regeneración de cicatrices",
            duration: "26:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Mejora de cicatrices quirúrgicas y traumáticas",
            completed: false
          },
          {
            id: 7,
            title: "Rejuvenecimiento de manos y cuello",
            duration: "20:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Técnicas específicas para estas áreas",
            completed: false
          },
          {
            id: 8,
            title: "Tratamiento de flacidez",
            duration: "22:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Aplicaciones para mejorar la firmeza cutánea",
            completed: false
          }
        ],
        quiz: {
          id: 2,
          title: "Quiz: Regeneración Corporal",
          questions: [
            {
              id: 1,
              question: "¿Qué tipo de estrías responde mejor al tratamiento?",
              options: [
                "Estrías rojas",
                "Estrías blancas",
                "Ambas igualmente",
                "Ninguna responde"
              ],
              correctAnswer: 0
            },
            {
              id: 2,
              question: "¿Cuántas sesiones típicamente se requieren para cicatrices?",
              options: [
                "1-2 sesiones",
                "3-5 sesiones",
                "6-8 sesiones",
                "10-12 sesiones"
              ],
              correctAnswer: 2
            },
            {
              id: 3,
              question: "¿Cuál es el mejor momento para tratar cicatrices quirúrgicas?",
              options: [
                "Inmediatamente después",
                "2-4 semanas post-cirugía",
                "3-6 meses después",
                "Solo cicatrices antiguas"
              ],
              correctAnswer: 1
            }
          ],
          passingScore: 70
        }
      },
      {
        id: 3,
        title: "Módulo 3: Protocolos Antiaging Integrales",
        description: "Enfoques holísticos de medicina regenerativa",
        lessons: [
          {
            id: 9,
            title: "Medicina antiaging sistémica",
            duration: "28:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Enfoque integral del envejecimiento",
            completed: false
          },
          {
            id: 10,
            title: "Terapias combinadas",
            duration: "30:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Protocolos multimodales",
            completed: false
          },
          {
            id: 11,
            title: "Nutrición y suplementación",
            duration: "25:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Apoyo nutricional para regeneración",
            completed: false
          },
          {
            id: 12,
            title: "Seguimiento y mantenimiento",
            duration: "18:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Protocolos de seguimiento a largo plazo",
            completed: false
          }
        ],
        quiz: {
          id: 3,
          title: "Quiz: Protocolos Antiaging",
          questions: [
            {
              id: 1,
              question: "¿Cuál es el enfoque más efectivo en medicina antiaging?",
              options: [
                "Solo tratamientos tópicos",
                "Solo tratamientos sistémicos",
                "Enfoque integral",
                "Solo cirugía"
              ],
              correctAnswer: 2
            },
            {
              id: 2,
              question: "¿Qué suplemento es más importante para regeneración?",
              options: [
                "Vitamina C",
                "Colágeno",
                "Ácido hialurónico",
                "Todos son importantes"
              ],
              correctAnswer: 3
            },
            {
              id: 3,
              question: "¿Con qué frecuencia se recomienda mantenimiento?",
              options: [
                "Mensual",
                "Cada 3-6 meses",
                "Anual",
                "Solo una vez"
              ],
              correctAnswer: 1
            }
          ],
          passingScore: 70
        }
      }
    ]
  },
  {
    id: 4,
    title: "Terapia con Células Madre Mesenquimales",
    description: "Aprende las técnicas avanzadas de obtención, cultivo y aplicación de células madre mesenquimales en diferentes patologías.",
    category: "Técnicas Avanzadas",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop&q=80",
    instructor: "Dr. Roberto Sánchez",
    duration: "14 horas",
    totalLessons: 22,
    level: "Avanzado",
    rating: 4.9,
    students: 1890,
    modules: [
      {
        id: 1,
        title: "Módulo 1: Biología de Células Madre Mesenquimales",
        description: "Fundamentos biológicos y características",
        lessons: [
          {
            id: 1,
            title: "Origen y características de células mesenquimales",
            duration: "20:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Fuentes de obtención y propiedades únicas",
            completed: false
          },
          {
            id: 2,
            title: "Marcadores celulares y caracterización",
            duration: "25:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Identificación y validación de células",
            completed: false
          },
          {
            id: 3,
            title: "Diferenciación y plasticidad",
            duration: "22:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Capacidades de diferenciación celular",
            completed: false
          }
        ],
        quiz: {
          id: 1,
          title: "Quiz: Biología de Células Mesenquimales",
          questions: [
            {
              id: 1,
              question: "¿Cuál es la principal fuente de células mesenquimales?",
              options: [
                "Médula ósea",
                "Tejido adiposo",
                "Cordón umbilical",
                "Todas las anteriores"
              ],
              correctAnswer: 3
            }
          ],
          passingScore: 70
        }
      }
    ]
  },
  {
    id: 5,
    title: "Medicina Regenerativa en Neurología",
    description: "Aplicaciones de medicina regenerativa en enfermedades neurológicas, lesiones medulares y trastornos neurodegenerativos.",
    category: "Especialidades",
    thumbnail: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=500&fit=crop&q=80",
    instructor: "Dra. Laura Fernández",
    duration: "10 horas",
    totalLessons: 16,
    level: "Avanzado",
    rating: 4.8,
    students: 1450,
    modules: [
      {
        id: 1,
        title: "Módulo 1: Neuroregeneración y Plasticidad",
        description: "Mecanismos de regeneración del sistema nervioso",
        lessons: [
          {
            id: 1,
            title: "Neurogénesis y células madre neurales",
            duration: "24:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Regeneración del tejido nervioso",
            completed: false
          },
          {
            id: 2,
            title: "Terapias para lesiones medulares",
            duration: "28:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Aplicaciones en trauma medular",
            completed: false
          }
        ],
        quiz: {
          id: 1,
          title: "Quiz: Neuroregeneración",
          questions: [
            {
              id: 1,
              question: "¿Qué tipo de células se usan principalmente en neuroregeneración?",
              options: [
                "Células madre embrionarias",
                "Células madre mesenquimales",
                "Neuronas maduras",
                "Oligodendrocitos"
              ],
              correctAnswer: 1
            }
          ],
          passingScore: 70
        }
      }
    ]
  },
  {
    id: 6,
    title: "Terapia Regenerativa en Cardiología",
    description: "Aplicaciones de células madre y medicina regenerativa en enfermedades cardiovasculares y regeneración cardíaca.",
    category: "Especialidades",
    thumbnail: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=500&fit=crop&q=80",
    instructor: "Dr. Carlos Méndez",
    duration: "12 horas",
    totalLessons: 18,
    level: "Intermedio",
    rating: 4.7,
    students: 1680,
    modules: [
      {
        id: 1,
        title: "Módulo 1: Regeneración Cardíaca",
        description: "Técnicas para regenerar tejido cardíaco",
        lessons: [
          {
            id: 1,
            title: "Células madre en infarto de miocardio",
            duration: "26:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Aplicaciones post-infarto",
            completed: false
          },
          {
            id: 2,
            title: "Regeneración de válvulas cardíacas",
            duration: "22:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Técnicas regenerativas valvulares",
            completed: false
          }
        ],
        quiz: {
          id: 1,
          title: "Quiz: Regeneración Cardíaca",
          questions: [
            {
              id: 1,
              question: "¿Cuál es el principal desafío en regeneración cardíaca?",
              options: [
                "Obtención de células",
                "Baja capacidad regenerativa del corazón",
                "Costo del tratamiento",
                "Tiempo de recuperación"
              ],
              correctAnswer: 1
            }
          ],
          passingScore: 70
        }
      }
    ]
  },
  {
    id: 7,
    title: "Ozonoterapia y Medicina Regenerativa",
    description: "Combina ozonoterapia con técnicas regenerativas para potenciar resultados en diferentes patologías.",
    category: "Técnicas Avanzadas",
    thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop&q=80",
    instructor: "Dra. Patricia Ramírez",
    duration: "9 horas",
    totalLessons: 14,
    level: "Intermedio",
    rating: 4.6,
    students: 1320,
    modules: [
      {
        id: 1,
        title: "Módulo 1: Fundamentos de Ozonoterapia",
        description: "Bases científicas y aplicaciones",
        lessons: [
          {
            id: 1,
            title: "Mecanismos de acción del ozono",
            duration: "20:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Cómo actúa el ozono en el organismo",
            completed: false
          },
          {
            id: 2,
            title: "Protocolos de aplicación",
            duration: "18:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Técnicas de administración segura",
            completed: false
          }
        ],
        quiz: {
          id: 1,
          title: "Quiz: Ozonoterapia",
          questions: [
            {
              id: 1,
              question: "¿Cuál es la concentración segura de ozono para uso médico?",
              options: [
                "1-5%",
                "5-10%",
                "10-20%",
                "20-30%"
              ],
              correctAnswer: 0
            }
          ],
          passingScore: 70
        }
      }
    ]
  },
  {
    id: 8,
    title: "Medicina Regenerativa en Traumatología",
    description: "Aplicaciones específicas en lesiones traumáticas, fracturas complejas y regeneración ósea acelerada.",
    category: "Especialidades",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop&q=80",
    instructor: "Dr. Fernando Torres",
    duration: "11 horas",
    totalLessons: 17,
    level: "Intermedio",
    rating: 4.8,
    students: 1560,
    modules: [
      {
        id: 1,
        title: "Módulo 1: Regeneración Ósea",
        description: "Técnicas para acelerar la consolidación",
        lessons: [
          {
            id: 1,
            title: "Fracturas complejas y no consolidadas",
            duration: "25:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Tratamiento de pseudoartrosis",
            completed: false
          },
          {
            id: 2,
            title: "Regeneración de defectos óseos",
            duration: "23:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Técnicas para grandes defectos",
            completed: false
          }
        ],
        quiz: {
          id: 1,
          title: "Quiz: Regeneración Ósea",
          questions: [
            {
              id: 1,
              question: "¿Qué factor es más importante en regeneración ósea?",
              options: [
                "Tipo de células",
                "Andamiaje (scaffold)",
                "Factores de crecimiento",
                "Todos son importantes"
              ],
              correctAnswer: 3
            }
          ],
          passingScore: 70
        }
      }
    ]
  },
  {
    id: 9,
    title: "Medicina Regenerativa en Dermatología",
    description: "Aplicaciones estéticas y terapéuticas en dermatología: cicatrices, quemaduras, alopecia y rejuvenecimiento.",
    category: "Estética",
    thumbnail: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=500&fit=crop&q=80",
    instructor: "Dra. Sofía Martínez",
    duration: "10 horas",
    totalLessons: 15,
    level: "Intermedio",
    rating: 4.9,
    students: 2100,
    modules: [
      {
        id: 1,
        title: "Módulo 1: Regeneración Cutánea",
        description: "Técnicas para regenerar la piel",
        lessons: [
          {
            id: 1,
            title: "Tratamiento de cicatrices y quemaduras",
            duration: "24:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Protocolos regenerativos",
            completed: false
          },
          {
            id: 2,
            title: "Alopecia y regeneración capilar",
            duration: "22:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Técnicas con células madre",
            completed: false
          }
        ],
        quiz: {
          id: 1,
          title: "Quiz: Regeneración Cutánea",
          questions: [
            {
              id: 1,
              question: "¿Cuál es la mejor técnica para cicatrices antiguas?",
              options: [
                "Solo PRP",
                "Células madre + PRP",
                "Solo células madre",
                "Láser exclusivamente"
              ],
              correctAnswer: 1
            }
          ],
          passingScore: 70
        }
      }
    ]
  },
  {
    id: 10,
    title: "Longevidad y Medicina Antiaging",
    description: "Protocolos integrales de medicina regenerativa para optimizar la longevidad y calidad de vida.",
    category: "Fundamentos",
    thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop&q=80",
    instructor: "Dr. Alejandro Vargas",
    duration: "13 horas",
    totalLessons: 20,
    level: "Avanzado",
    rating: 4.9,
    students: 2450,
    modules: [
      {
        id: 1,
        title: "Módulo 1: Fundamentos de Longevidad",
        description: "Ciencia del envejecimiento",
        lessons: [
          {
            id: 1,
            title: "Biología del envejecimiento",
            duration: "28:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Mecanismos celulares del envejecimiento",
            completed: false
          },
          {
            id: 2,
            title: "Terapias regenerativas sistémicas",
            duration: "26:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Protocolos antiaging integrales",
            completed: false
          }
        ],
        quiz: {
          id: 1,
          title: "Quiz: Longevidad",
          questions: [
            {
              id: 1,
              question: "¿Qué factor es más importante para la longevidad?",
              options: [
                "Genética",
                "Estilo de vida",
                "Medicina regenerativa",
                "Combinación de todos"
              ],
              correctAnswer: 3
            }
          ],
          passingScore: 70
        }
      }
    ]
  },
  {
    id: 11,
    title: "Medicina Regenerativa en Ginecología",
    description: "Aplicaciones en salud íntima femenina, regeneración vaginal, incontinencia y rejuvenecimiento íntimo.",
    category: "Especialidades",
    thumbnail: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=500&fit=crop&q=80",
    instructor: "Dra. Carmen López",
    duration: "8 horas",
    totalLessons: 12,
    level: "Intermedio",
    rating: 4.7,
    students: 1180,
    modules: [
      {
        id: 1,
        title: "Módulo 1: Regeneración Ginecológica",
        description: "Técnicas regenerativas en ginecología",
        lessons: [
          {
            id: 1,
            title: "PRP en atrofia vaginal",
            duration: "20:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Protocolos de aplicación",
            completed: false
          },
          {
            id: 2,
            title: "Regeneración del suelo pélvico",
            duration: "22:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Técnicas para incontinencia",
            completed: false
          }
        ],
        quiz: {
          id: 1,
          title: "Quiz: Regeneración Ginecológica",
          questions: [
            {
              id: 1,
              question: "¿Cuántas sesiones típicamente se requieren?",
              options: [
                "1-2 sesiones",
                "3-4 sesiones",
                "5-6 sesiones",
                "8-10 sesiones"
              ],
              correctAnswer: 1
            }
          ],
          passingScore: 70
        }
      }
    ]
  },
  {
    id: 12,
    title: "Medicina Regenerativa en Oftalmología",
    description: "Aplicaciones en enfermedades oculares, regeneración corneal y tratamiento de patologías retinianas.",
    category: "Especialidades",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop&q=80",
    instructor: "Dr. Miguel Ángel Ruiz",
    duration: "9 horas",
    totalLessons: 13,
    level: "Avanzado",
    rating: 4.8,
    students: 980,
    modules: [
      {
        id: 1,
        title: "Módulo 1: Regeneración Ocular",
        description: "Técnicas para regenerar tejido ocular",
        lessons: [
          {
            id: 1,
            title: "Células madre en degeneración macular",
            duration: "24:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Aplicaciones en retina",
            completed: false
          },
          {
            id: 2,
            title: "Regeneración corneal",
            duration: "20:00",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            description: "Técnicas para córnea",
            completed: false
          }
        ],
        quiz: {
          id: 1,
          title: "Quiz: Regeneración Ocular",
          questions: [
            {
              id: 1,
              question: "¿Qué tipo de células se usan en oftalmología regenerativa?",
              options: [
                "Células madre embrionarias",
                "Células madre mesenquimales",
                "Células madre del limbo",
                "Todas las anteriores"
              ],
              correctAnswer: 3
            }
          ],
          passingScore: 70
        }
      }
    ]
  }
];

export default coursesData;
