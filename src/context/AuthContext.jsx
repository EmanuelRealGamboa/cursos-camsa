import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar si hay un usuario guardado en localStorage
    const savedUser = localStorage.getItem('logevityUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (email, password) => {
    // Simulación de login - en producción esto sería una llamada al backend
    const users = JSON.parse(localStorage.getItem('logevityUsers') || '[]');
    const foundUser = users.find(u => u.email === email && u.password === password);

    if (foundUser) {
      const userData = { ...foundUser, password: undefined };
      setUser(userData);
      localStorage.setItem('logevityUser', JSON.stringify(userData));
      return { success: true };
    }
    return { success: false, error: 'Credenciales incorrectas' };
  };

  const register = (userData) => {
    const users = JSON.parse(localStorage.getItem('logevityUsers') || '[]');

    // Verificar si el email ya existe
    if (users.find(u => u.email === userData.email)) {
      return { success: false, error: 'El correo ya está registrado' };
    }

    const newUser = {
      id: Date.now(),
      ...userData,
      createdAt: new Date().toISOString(),
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.name)}&background=FFD700&color=000`
    };

    users.push(newUser);
    localStorage.setItem('logevityUsers', JSON.stringify(users));

    // Auto login después del registro
    const userDataClean = { ...newUser, password: undefined };
    setUser(userDataClean);
    localStorage.setItem('logevityUser', JSON.stringify(userDataClean));

    // Inicializar progreso vacío para el nuevo usuario
    localStorage.setItem(`logevityProgress_${newUser.id}`, JSON.stringify({
      courses: {},
      certificates: [],
      totalStudyTime: 0,
      streak: 0,
      lastStudyDate: null
    }));

    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('logevityUser');
  };

  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('logevityUser', JSON.stringify(updatedUser));

    // También actualizar en la lista de usuarios
    const users = JSON.parse(localStorage.getItem('logevityUsers') || '[]');
    const userIndex = users.findIndex(u => u.id === user.id);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...updates };
      localStorage.setItem('logevityUsers', JSON.stringify(users));
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      isAuthenticated: !!user,
      login,
      register,
      logout,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
