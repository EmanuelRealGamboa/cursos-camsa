import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Verificar preferencia guardada del usuario
    const saved = localStorage.getItem('logevityTheme');
    if (saved) {
      const isDarkMode = saved === 'dark';
      // Aplicar inmediatamente al leer del localStorage
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return isDarkMode;
    }
    // Por defecto, modo claro (light mode)
    document.documentElement.classList.remove('dark');
    return false;
  });

  // Actualizar tema cuando cambie isDark
  useEffect(() => {
    // Aplicar tema al documento
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Guardar preferencia
    localStorage.setItem('logevityTheme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => {
      const newValue = !prev;
      return newValue;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
