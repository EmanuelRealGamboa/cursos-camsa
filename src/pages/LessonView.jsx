import { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize,
  Clock,
  BookOpen,
  MessageSquare,
  ThumbsUp,
  Share2,
  ChevronRight,
  Check,
  X
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { Card, Button, Badge } from '../components/ui';
import coursesData from '../data/courses';

const LessonView = () => {
  const { courseId, moduleId, lessonId } = useParams();
  const navigate = useNavigate();
  const { completeLesson, isLessonComplete } = useProgress();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const course = useMemo(() => {
    return coursesData.find(c => c.id === parseInt(courseId));
  }, [courseId]);

  const module = useMemo(() => {
    return course?.modules.find(m => m.id === parseInt(moduleId));
  }, [course, moduleId]);

  const lesson = useMemo(() => {
    return module?.lessons.find(l => l.id === parseInt(lessonId));
  }, [module, lessonId]);

  // Obtener índices para navegación
  const { prevLesson, nextLesson, currentIndex, totalLessons } = useMemo(() => {
    if (!module) return { prevLesson: null, nextLesson: null, currentIndex: 0, totalLessons: 0 };

    const currentIdx = module.lessons.findIndex(l => l.id === parseInt(lessonId));
    const prev = currentIdx > 0 ? module.lessons[currentIdx - 1] : null;
    const next = currentIdx < module.lessons.length - 1 ? module.lessons[currentIdx + 1] : null;

    return {
      prevLesson: prev,
      nextLesson: next,
      currentIndex: currentIdx + 1,
      totalLessons: module.lessons.length
    };
  }, [module, lessonId]);

  // Verificar si la lección ya está completada
  useEffect(() => {
    if (course && module && lesson) {
      const completed = isLessonComplete(course.id, module.id, lesson.id);
      setLessonCompleted(completed);
    }
  }, [course, module, lesson, isLessonComplete]);

  if (!course || !module || !lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Lección no encontrada</h2>
          <Button onClick={() => navigate('/dashboard')}>Volver al inicio</Button>
        </div>
      </div>
    );
  }

  const handleMarkComplete = () => {
    completeLesson(course.id, module.id, lesson.id);
    setLessonCompleted(true);
    setShowCompletionModal(true);

    // Auto-cerrar modal después de 2 segundos
    setTimeout(() => {
      setShowCompletionModal(false);
    }, 2500);
  };

  const handleNextLesson = () => {
    if (nextLesson) {
      navigate(`/course/${course.id}/lesson/${module.id}/${nextLesson.id}`);
    } else {
      // Si no hay más lecciones, ir al quiz
      navigate(`/course/${course.id}/quiz/${module.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate(`/course/${course.id}`)}
            className="flex items-center gap-2 text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Volver al curso</span>
          </button>

          <div className="hidden md:flex items-center gap-2 text-gray-300 dark:text-gray-200 flex-1 justify-center px-4">
            <span className="text-sm text-white dark:text-white truncate max-w-xs">{course.title}</span>
            <ChevronRight className="w-4 h-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
            <span className="text-sm text-white dark:text-white truncate max-w-xs">{module.title.replace(/Módulo \d+: /, '')}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-gray-400 dark:text-gray-300 text-sm hidden sm:block">
              {currentIndex} / {totalLessons}
            </div>
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="lg:hidden p-2 text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors"
            >
              <BookOpen className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-0 relative">
          {/* Video player */}
          <div className="lg:col-span-2">
            {/* Video container */}
            <div className="relative aspect-video bg-black">
              <iframe
                src={`${lesson.videoUrl}?autoplay=0`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              {/* Overlay de completado */}
              <AnimatePresence>
                {showCompletionModal && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/80 flex items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                        className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <Check className="w-10 h-10 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        ¡Lección completada!
                      </h3>
                      <p className="text-gray-400 dark:text-gray-300">
                        Continúa con la siguiente lección
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Controles del video */}
            <div className="bg-gray-800 px-2 sm:px-4 py-3 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 sm:gap-4">
                <button
                  onClick={() => prevLesson && navigate(`/course/${course.id}/lesson/${module.id}/${prevLesson.id}`)}
                  disabled={!prevLesson}
                  className="p-2 text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  aria-label="Lección anterior"
                >
                  <SkipBack className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 sm:p-3 bg-logevity text-white rounded-full hover:bg-logevity-dark transition-colors"
                  aria-label={isPlaying ? "Pausar" : "Reproducir"}
                >
                  {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5" />}
                </button>
                <button
                  onClick={handleNextLesson}
                  className="p-2 text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors"
                  aria-label="Siguiente lección"
                >
                  <SkipForward className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              <div className="flex items-center gap-2 sm:gap-4">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors hidden sm:block"
                  aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <button className="p-2 text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors hidden sm:block" aria-label="Pantalla completa">
                  <Maximize className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Información de la lección */}
            <div className="bg-gray-800 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex-1 min-w-0">
                  <Badge variant="primary" className="mb-2">
                    Lección {currentIndex}
                  </Badge>
                  <h1 className="text-xl sm:text-2xl font-bold text-white">
                    {lesson.title}
                  </h1>
                </div>
                <div className="flex-shrink-0">
                  {!lessonCompleted ? (
                    <Button
                      onClick={handleMarkComplete}
                      variant="accent"
                      icon={CheckCircle}
                      size="sm"
                      className="w-full sm:w-auto"
                    >
                      <span className="hidden sm:inline">Marcar completa</span>
                      <span className="sm:hidden">Completar</span>
                    </Button>
                  ) : (
                    <Badge variant="success" size="lg" icon={CheckCircle}>
                      <span className="hidden sm:inline">Completada</span>
                      <span className="sm:hidden">✓</span>
                    </Badge>
                  )}
                </div>
              </div>

              <p className="text-gray-400 dark:text-gray-300 mb-6 text-sm sm:text-base">
                {lesson.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-400 dark:text-gray-300 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{lesson.duration}</span>
                </div>
                <button className="flex items-center gap-2 text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="hidden sm:inline">Me gusta</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Compartir</span>
                </button>
              </div>

              {/* Navegación */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-6 sm:mt-8 pt-6 border-t border-gray-700">
                {prevLesson ? (
                  <button
                    onClick={() => navigate(`/course/${course.id}/lesson/${module.id}/${prevLesson.id}`)}
                    className="flex items-center gap-2 text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors text-left"
                  >
                    <ArrowLeft className="w-5 h-5 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-gray-500 dark:text-gray-400">Anterior</p>
                      <p className="text-sm text-white dark:text-white truncate">{prevLesson.title}</p>
                    </div>
                  </button>
                ) : (
                  <div />
                )}

                <Button
                  onClick={handleNextLesson}
                  icon={ArrowRight}
                  iconPosition="right"
                  className="w-full sm:w-auto"
                  size="sm"
                >
                  <span className="hidden sm:inline">{nextLesson ? 'Siguiente lección' : 'Ir al Quiz'}</span>
                  <span className="sm:hidden">{nextLesson ? 'Siguiente' : 'Quiz'}</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar - Lista de lecciones */}
          <AnimatePresence>
            {showSidebar && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                  onClick={() => setShowSidebar(false)}
                />
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'tween', duration: 0.3 }}
                  className="fixed right-0 top-16 bottom-0 w-80 bg-gray-800 border-l border-gray-700 overflow-y-auto z-50 lg:hidden"
                >
                  <div className="p-4 border-b border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">{module.title}</h3>
                      <button
                        onClick={() => setShowSidebar(false)}
                        className="p-1 text-gray-400 hover:text-white"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-400 dark:text-gray-300">
                      {module.lessons.filter(l => isLessonComplete(course.id, module.id, l.id)).length} de {module.lessons.length} completadas
                    </p>
                  </div>
                  <div className="divide-y divide-gray-700">
                    {module.lessons.map((l, index) => {
                      const isCurrentLesson = l.id === lesson.id;
                      const isComplete = isLessonComplete(course.id, module.id, l.id);
                      return (
                        <button
                          key={l.id}
                          onClick={() => {
                            navigate(`/course/${course.id}/lesson/${module.id}/${l.id}`);
                            setShowSidebar(false);
                          }}
                          className={`w-full p-4 text-left hover:bg-gray-700 transition-colors ${
                            isCurrentLesson ? 'bg-gray-700' : ''
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                              isComplete
                                ? 'bg-green-500 text-white'
                                : isCurrentLesson
                                  ? 'bg-logevity text-white'
                                  : 'bg-gray-600 text-gray-300'
                            }`}>
                              {isComplete ? (
                                <CheckCircle className="w-4 h-4" />
                              ) : (
                                <span className="text-sm font-medium">{index + 1}</span>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className={`text-sm ${isCurrentLesson ? 'text-white font-semibold' : 'text-gray-300'} truncate`}>
                                {l.title}
                              </p>
                              <p className="text-xs text-gray-500 mt-0.5">{l.duration}</p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
          
          {/* Sidebar Desktop */}
          <div className="hidden lg:block bg-gray-800 border-l border-gray-700 overflow-y-auto max-h-[calc(100vh-64px)]">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-semibold text-white">{module.title}</h3>
              <p className="text-sm text-gray-400 dark:text-gray-300 mt-1">
                {module.lessons.filter(l => isLessonComplete(course.id, module.id, l.id)).length} de {module.lessons.length} completadas
              </p>
            </div>

            <div className="divide-y divide-gray-700">
              {module.lessons.map((l, index) => {
                const isCurrentLesson = l.id === lesson.id;
                const isComplete = isLessonComplete(course.id, module.id, l.id);

                return (
                  <button
                    key={l.id}
                    onClick={() => navigate(`/course/${course.id}/lesson/${module.id}/${l.id}`)}
                    className={`
                      w-full p-4 flex items-start gap-3 text-left transition-colors
                      ${isCurrentLesson
                        ? 'bg-logevity/20 border-l-2 border-logevity'
                        : 'hover:bg-gray-700/50 dark:hover:bg-gray-700/50'
                      }
                    `}
                  >
                    <div className={`
                      w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5
                      ${isComplete
                        ? 'bg-green-500 text-white'
                        : isCurrentLesson
                          ? 'bg-logevity text-white'
                          : 'bg-gray-600 dark:bg-gray-600 text-gray-400 dark:text-gray-300'
                      }
                    `}>
                      {isComplete ? (
                        <Check className="w-3 h-3" />
                      ) : isCurrentLesson ? (
                        <Play className="w-3 h-3" />
                      ) : (
                        <span className="text-xs">{index + 1}</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`
                        text-sm font-medium truncate
                        ${isCurrentLesson ? 'text-white' : isComplete ? 'text-gray-400 dark:text-gray-400' : 'text-gray-300 dark:text-gray-200'}
                      `}>
                        {l.title}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{l.duration}</p>
                    </div>
                  </button>
                );
              })}

              {/* Quiz button */}
              <button
                onClick={() => navigate(`/course/${course.id}/quiz/${module.id}`)}
                className="w-full p-4 flex items-center gap-3 bg-logevity/10 hover:bg-logevity/20 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-logevity text-white flex items-center justify-center">
                  <BookOpen className="w-3 h-3" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-logevity dark:text-logevity">Quiz del módulo</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{module.quiz.questions.length} preguntas</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonView;
