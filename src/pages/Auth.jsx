import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Heart, BookOpen, Award, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Button, Input } from '../components/ui';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [generalError, setGeneralError] = useState('');

  const { login, register } = useAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Correo inválido';
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Mínimo 6 caracteres';
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGeneralError('');

    if (!validateForm()) return;

    setIsLoading(true);

    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 800));

    if (isLogin) {
      const result = login(formData.email, formData.password);
      if (result.success) {
        navigate('/dashboard');
      } else {
        setGeneralError(result.error);
      }
    } else {
      const result = register({
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      if (result.success) {
        navigate('/dashboard');
      } else {
        setGeneralError(result.error);
      }
    }

    setIsLoading(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const features = [
    { icon: BookOpen, text: 'Cursos interactivos', color: 'text-blue-500' },
    { icon: Award, text: 'Certificados oficiales', color: 'text-yellow-500' },
    { icon: Sparkles, text: 'Contenido actualizado', color: 'text-purple-500' },
    { icon: Heart, text: 'Soporte continuo', color: 'text-red-500' }
  ];

  return (
    <div className="min-h-screen flex">
      {/* Panel izquierdo - Decorativo */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-logevity to-logevity-dark p-12 relative overflow-hidden">
        {/* Círculos decorativos */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col justify-center h-full text-white">
          {/* Logo Grande - solo letras blancas, sin cuadro */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center mb-12"
          >
            <img 
              src="/logos/Longevity360-03.png" 
              alt="Longevity 360" 
              className="w-48 h-auto max-h-36 object-contain object-center mb-8 brightness-0 invert"
            />
            <div className="text-center">
              <h1 className="text-5xl font-heading font-bold mb-3">Longevity 360</h1>
              <p className="text-white/90 text-xl font-medium">Medicina Regenerativa</p>
            </div>
          </motion.div>

          {/* Mensaje principal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 mt-8"
          >
            <h2 className="text-4xl font-heading font-bold leading-tight">
              Aprende medicina<br />
              regenerativa y<br />
              <span className="text-logevity-accent">transforma vidas</span>
            </h2>
            <p className="text-white/80 text-lg max-w-md">
              Cursos especializados diseñados para profesionales de la salud que buscan
              actualizarse en las últimas técnicas de medicina regenerativa.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3 bg-white/10 rounded-xl p-3 backdrop-blur-sm"
                >
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-white/60 text-sm"
          >
            © 2024 Longevity 360. Todos los derechos reservados.
          </motion.div>
        </div>
      </div>

      {/* Panel derecho - Formulario */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          {/* Logo móvil - solo letras blancas, sin cuadro */}
          <div className="lg:hidden flex items-center gap-3 mb-8 justify-center py-4 px-4 rounded-xl bg-slate-800 dark:bg-slate-900">
            <img 
              src="/logos/Longevity360-03.png" 
              alt="Longevity 360" 
              className="h-8 w-auto object-contain brightness-0 invert"
            />
            <div>
              <h1 className="text-xl font-heading font-bold text-white">Longevity 360</h1>
              <p className="text-white/80 text-xs">Medicina Regenerativa</p>
            </div>
          </div>

          {/* Título */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-gray-100">
              {isLogin ? 'Bienvenido de vuelta' : 'Crea tu cuenta'}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              {isLogin
                ? 'Ingresa tus credenciales para continuar'
                : 'Comienza tu viaje de aprendizaje'
              }
            </p>
          </div>

          {/* Tabs */}
          <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1 mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                isLogin
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Iniciar sesión
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                !isLogin
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Registrarse
            </button>
          </div>

          {/* Error general */}
          <AnimatePresence>
            {generalError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm"
              >
                {generalError}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  key="name"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <Input
                    label="Nombre completo"
                    name="name"
                    placeholder="Tu nombre"
                    icon={User}
                    value={formData.name}
                    onChange={handleInputChange}
                    error={errors.name}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <Input
              label="Correo electrónico"
              name="email"
              type="email"
              placeholder="tu@correo.com"
              icon={Mail}
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
            />

            <Input
              label="Contraseña"
              name="password"
              type="password"
              placeholder="••••••••"
              icon={Lock}
              value={formData.password}
              onChange={handleInputChange}
              error={errors.password}
            />

            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  key="confirmPassword"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <Input
                    label="Confirmar contraseña"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    icon={Lock}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    error={errors.confirmPassword}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {isLogin && (
              <div className="flex justify-end">
                <button type="button" className="text-sm text-logevity hover:text-logevity-dark">
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
            )}

            <Button
              type="submit"
              className="w-full"
              size="lg"
              loading={isLoading}
              icon={ArrowRight}
              iconPosition="right"
            >
              {isLogin ? 'Iniciar sesión' : 'Crear cuenta'}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">O continúa con</span>
            </div>
          </div>

          {/* Social buttons */}
          <div className="grid grid-cols-2 gap-4">
            <Button variant="secondary" className="w-full">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </Button>
            <Button variant="secondary" className="w-full">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Auth;
