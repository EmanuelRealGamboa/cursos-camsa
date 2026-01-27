import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Clock,
  Award,
  TrendingUp,
  Play,
  ChevronRight,
  Flame,
  Star,
  Users,
  ExternalLink,
  Video
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { Card, ProgressBar, Badge, Modal } from '../components/ui';
import coursesData from '../data/courses';
import { instructorsData, getInstructorByName } from '../data/instructors';

const Dashboard = () => {
  const { user } = useAuth();
  const { progress, getCourseProgress } = useProgress();
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  // Calcular estadísticas
  const stats = useMemo(() => {
    const coursesStarted = Object.keys(progress.courses || {}).length;
    const totalCertificates = progress.certificates?.length || 0;

    // Calcular cursos completados
    let coursesCompleted = 0;
    coursesData.forEach(course => {
      const lessonsPerModule = {};
      course.modules.forEach(m => {
        lessonsPerModule[m.id] = m.lessons.length;
      });
      const courseProgress = getCourseProgress(course.id, course.modules.length, lessonsPerModule);
      if (courseProgress.completedModules === course.modules.length) {
        coursesCompleted++;
      }
    });

    return {
      coursesStarted,
      coursesCompleted,
      totalCertificates,
      streak: progress.streak || 0
    };
  }, [progress, getCourseProgress]);

  // Obtener cursos en progreso
  const coursesInProgress = useMemo(() => {
    return coursesData.filter(course => {
      const courseProgress = progress.courses?.[course.id];
      if (!courseProgress) return false;

      const lessonsPerModule = {};
      course.modules.forEach(m => {
        lessonsPerModule[m.id] = m.lessons.length;
      });
      const progressData = getCourseProgress(course.id, course.modules.length, lessonsPerModule);
      return progressData.percentage > 0 && progressData.percentage < 100;
    }).map(course => {
      const lessonsPerModule = {};
      course.modules.forEach(m => {
        lessonsPerModule[m.id] = m.lessons.length;
      });
      return {
        ...course,
        progress: getCourseProgress(course.id, course.modules.length, lessonsPerModule)
      };
    });
  }, [progress, getCourseProgress]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Buenos días';
    if (hour < 18) return 'Buenas tardes';
    return 'Buenas noches';
  };

  const statCards = [
    {
      icon: BookOpen,
      label: 'Cursos iniciados',
      value: stats.coursesStarted,
      color: 'bg-blue-500',
      lightColor: 'bg-blue-100'
    },
    {
      icon: Award,
      label: 'Certificados',
      value: stats.totalCertificates,
      color: 'bg-yellow-500',
      lightColor: 'bg-yellow-100'
    },
    {
      icon: TrendingUp,
      label: 'Completados',
      value: stats.coursesCompleted,
      color: 'bg-green-500',
      lightColor: 'bg-green-100'
    },
    {
      icon: Flame,
      label: 'Racha de días',
      value: stats.streak,
      color: 'bg-orange-500',
      lightColor: 'bg-orange-100'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-12">
      {/* Header con saludo */}
      <div className="bg-gradient-to-br from-logevity via-logevity to-logevity-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-2xl sm:text-3xl font-heading font-bold">
              {getGreeting()}, {user?.name?.split(' ')[0]}!
            </h1>
            <p className="text-white/80 mt-2">
              Continúa tu aprendizaje donde lo dejaste
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Stats cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8"
        >
          {statCards.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="relative overflow-hidden p-3 sm:p-4">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className={`p-2 sm:p-3 rounded-xl ${stat.lightColor} flex-shrink-0`}>
                    <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color.replace('bg-', 'text-')}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xl sm:text-2xl font-heading font-bold text-gray-900 dark:text-gray-100 truncate">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">{stat.label}</p>
                  </div>
                </div>
                <div className={`absolute -right-4 -bottom-4 w-20 h-20 ${stat.color} opacity-5 rounded-full hidden sm:block`} />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Columna principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Cursos en progreso */}
            {coursesInProgress.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-heading font-semibold text-gray-900 dark:text-gray-100">
                    Continuar aprendiendo
                  </h2>
                  <Link
                    to="/courses"
                    className="text-logevity hover:text-logevity-dark text-sm font-medium flex items-center gap-1"
                  >
                    Ver todos
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="space-y-4">
                  {coursesInProgress.slice(0, 2).map((course) => (
                    <Link key={course.id} to={`/course/${course.id}`}>
                      <Card hover className="flex gap-4">
                        <img
                          src={course.thumbnail}
                          alt={course.title}
                          className="w-32 h-24 object-cover rounded-xl"
                        />
                        <div className="flex-1 min-w-0">
                          <Badge variant="primary" size="sm" className="mb-2">
                            {course.level}
                          </Badge>
                          <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                            {course.title}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                            Módulo {course.progress.completedModules + 1} de {course.progress.totalModules}
                          </p>
                          <div className="mt-3">
                            <ProgressBar
                              value={course.progress.percentage}
                              showLabel={false}
                              size="sm"
                            />
                          </div>
                        </div>
                        <button className="self-center p-3 bg-logevity text-white rounded-full hover:bg-logevity-dark transition-colors">
                          <Play className="w-5 h-5" />
                        </button>
                      </Card>
                    </Link>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Todos los cursos */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-heading font-semibold text-gray-900 dark:text-white">
                  Explora nuestros cursos
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {coursesData.map((course, index) => {
                  const lessonsPerModule = {};
                  course.modules.forEach(m => {
                    lessonsPerModule[m.id] = m.lessons.length;
                  });
                  const courseProgress = getCourseProgress(course.id, course.modules.length, lessonsPerModule);

                  return (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Link to={`/course/${course.id}`}>
                        <Card hover padding={false} className="overflow-hidden">
                          <div className="relative">
                            <img
                              src={course.thumbnail}
                              alt={course.title}
                              className="w-full h-40 object-cover"
                              onError={(e) => {
                                if (e.target.src.includes('placeholder')) return;
                                e.target.onerror = null;
                                e.target.src = `https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop&q=80`;
                              }}
                              loading="lazy"
                            />
                            {courseProgress.percentage > 0 && (
                              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                                <div
                                  className="h-full bg-logevity transition-all"
                                  style={{ width: `${courseProgress.percentage}%` }}
                                />
                              </div>
                            )}
                            <div className="absolute top-3 left-3">
                              <Badge
                                variant={course.level === 'Principiante' ? 'success' : course.level === 'Intermedio' ? 'warning' : 'danger'}
                                size="sm"
                              >
                                {course.level}
                              </Badge>
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-1">
                              {course.title}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-300 mt-1 line-clamp-2">
                              {course.description}
                            </p>
                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {course.duration}
                                </span>
                                <span className="flex items-center gap-1">
                                  <BookOpen className="w-4 h-4" />
                                  {course.totalLessons} lecciones
                                </span>
                              </div>
                              <div className="flex items-center gap-1 text-yellow-500">
                                <Star className="w-4 h-4 fill-current" />
                                <span className="text-sm font-medium">{course.rating}</span>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tu progreso */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card>
                <h3 className="font-heading font-semibold text-gray-900 dark:text-white mb-4">Tu progreso general</h3>
                <div className="space-y-4">
                  <div className="text-center p-6 bg-gradient-to-br from-logevity-light to-white dark:from-logevity/20 dark:to-gray-800 rounded-xl">
                    <div className="relative w-24 h-24 mx-auto mb-3">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          fill="none"
                          stroke="#E2E8F0"
                          className="dark:stroke-gray-700"
                          strokeWidth="8"
                        />
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          fill="none"
                          stroke="#4A90A4"
                          className="dark:stroke-logevity-accent"
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeDasharray={`${(stats.coursesStarted > 0 ? (stats.coursesCompleted / coursesData.length) : 0) * 251.2} 251.2`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-logevity dark:text-logevity-accent">
                          {Math.round((stats.coursesCompleted / coursesData.length) * 100)}%
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-body">
                      {stats.coursesCompleted} de {coursesData.length} cursos completados
                    </p>
                  </div>

                  {stats.streak > 0 && (
                    <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                      <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                        <Flame className="w-5 h-5 text-orange-500 dark:text-orange-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">{stats.streak} días seguidos</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300">¡Sigue así!</p>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>

            {/* Certificados recientes */}
            {progress.certificates?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Card>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading font-semibold text-gray-900 dark:text-white">Certificados recientes</h3>
                    <Link to="/certificates" className="text-logevity text-sm hover:text-logevity-dark">
                      Ver todos
                    </Link>
                  </div>
                  <div className="space-y-3">
                    {progress.certificates.slice(-3).reverse().map((cert, index) => (
                      <div
                        key={cert.id}
                        className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl"
                      >
                        <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                          <Award className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                            {cert.moduleTitle}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-300">{cert.courseTitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Instructores */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Card>
                <h3 className="font-heading font-semibold text-gray-900 dark:text-white mb-4">Nuestros instructores</h3>
                <div className="space-y-3">
                  {[...new Set(coursesData.map(c => c.instructor))].map((instructorName, index) => {
                    const instructor = getInstructorByName(instructorName);
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedInstructor(instructor)}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                      >
                        <img
                          src={instructor?.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(instructorName)}&background=4A90A4&color=fff`}
                          alt={instructorName}
                          className="w-12 h-12 rounded-full object-cover border-2 border-logevity/20"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(instructorName)}&background=4A90A4&color=fff`;
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{instructorName}</p>
                            {instructor?.country && (
                              <span className="text-lg" title={instructor.countryName}>
                                {instructor.country}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-300 truncate">
                            {instructor?.specialty || 'Instructor certificado'}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      </motion.div>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modal de Instructor */}
      <Modal
        isOpen={!!selectedInstructor}
        onClose={() => setSelectedInstructor(null)}
        size="xl"
        title=""
      >
        {selectedInstructor && (
          <div className="space-y-6">
            {/* Header con imagen y nombre */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-4 border-b border-gray-200 dark:border-gray-700">
              <img
                src={selectedInstructor.image}
                alt={selectedInstructor.name}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-logevity/20 shadow-lg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedInstructor.name)}&background=4A90A4&color=fff&size=128`;
                }}
              />
              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center gap-3 justify-center sm:justify-start mb-2">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                    {selectedInstructor.name}
                  </h2>
                  {selectedInstructor.country && (
                    <span className="text-3xl" title={selectedInstructor.countryName}>
                      {selectedInstructor.country}
                    </span>
                  )}
                </div>
                <p className="text-logevity dark:text-logevity-accent font-semibold mb-3">
                  {selectedInstructor.specialty}
                </p>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {selectedInstructor.credentials.map((cred, idx) => (
                    <Badge key={idx} variant="primary" size="sm">
                      {cred}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Descripción */}
            <div>
              <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-2">
                Sobre el instructor
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {selectedInstructor.description}
              </p>
            </div>

            {/* Cursos que imparte */}
            <div>
              <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-logevity" />
                Cursos que imparte
              </h3>
              <div className="space-y-2">
                {selectedInstructor.courses.map((courseId) => {
                  const course = coursesData.find(c => c.id === courseId);
                  if (!course) return null;
                  return (
                    <Link
                      key={courseId}
                      to={`/course/${courseId}`}
                      onClick={() => setSelectedInstructor(null)}
                      className="block p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 dark:text-white group-hover:text-logevity transition-colors truncate">
                            {course.title}
                          </p>
                          <div className="flex items-center gap-3 mt-1 text-xs text-gray-500 dark:text-gray-400">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {course.duration}
                            </span>
                            <Badge
                              variant={course.level === 'Principiante' ? 'success' : course.level === 'Intermedio' ? 'warning' : 'danger'}
                              size="sm"
                            >
                              {course.level}
                            </Badge>
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-logevity transition-colors flex-shrink-0 ml-2" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Videos de medicina */}
            <div>
              <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Video className="w-5 h-5 text-logevity" />
                Videos de medicina
              </h3>
              <div className="space-y-4">
                {selectedInstructor.videos.map((video, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                      {video.title}
                    </h4>
                    <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
                      <iframe
                        src={video.embedUrl}
                        title={video.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-sm text-logevity hover:text-logevity-dark transition-colors"
                    >
                      Ver en YouTube
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Dashboard;
