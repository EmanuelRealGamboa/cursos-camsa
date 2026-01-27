import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  User,
  Newspaper,
  Filter
} from 'lucide-react';
import { Card, Badge, Modal } from '../components/ui';
import { blogArticles } from '../data/blog';

const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  // Obtener categorías únicas
  const categories = useMemo(() => {
    const cats = ['Todas', ...new Set(blogArticles.map(article => article.category))];
    return cats;
  }, []);

  // Filtrar artículos por categoría
  const filteredArticles = useMemo(() => {
    const sorted = [...blogArticles].sort((a, b) => new Date(b.date) - new Date(a.date));
    if (selectedCategory === 'Todas') {
      return sorted;
    }
    return sorted.filter(article => article.category === selectedCategory);
  }, [selectedCategory]);

  const getCategoryBadgeVariant = (category) => {
    switch (category) {
      case 'Descubrimientos':
        return 'success';
      case 'Investigación':
        return 'warning';
      case 'Artículos':
        return 'danger';
      case 'Noticias':
        return 'primary';
      default:
        return 'primary';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-logevity/10 dark:bg-logevity/20 rounded-xl">
              <Newspaper className="w-6 h-6 text-logevity" />
            </div>
            <div>
              <h1 className="text-3xl font-heading font-bold text-gray-900 dark:text-white">
                Blog Médico
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Noticias, descubrimientos y artículos de medicina regenerativa
              </p>
            </div>
          </div>

          {/* Filtros por categoría */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-gray-400" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-logevity text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Feed de posts estilo Instagram */}
        <div className="space-y-6">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden p-0">
                {/* Imagen del post */}
                {article.image && (
                  <div className="w-full aspect-video overflow-hidden bg-gray-200 dark:bg-gray-800">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}

                {/* Contenido del post */}
                <div className="p-4 sm:p-6">
                  {/* Header: Autor y fecha */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-logevity/10 dark:bg-logevity/20 flex items-center justify-center">
                        <User className="w-5 h-5 text-logevity" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {article.author || 'Equipo Editorial'}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(article.date)}</span>
                        </div>
                      </div>
                    </div>
                    <Badge
                      variant={getCategoryBadgeVariant(article.category)}
                      size="sm"
                    >
                      {article.category}
                    </Badge>
                  </div>

                  {/* Título */}
                  <h2 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 dark:text-white mb-3">
                    {article.title}
                  </h2>

                  {/* Contenido */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 line-clamp-4">
                    {article.content || article.excerpt}
                  </p>

                  {/* Footer: Metadata */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime} de lectura
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {article.featured && (
                        <Badge variant="warning" size="sm">
                          Destacado
                        </Badge>
                      )}
                      <button
                        onClick={() => setSelectedArticle(article)}
                        className="text-logevity hover:text-logevity-dark text-sm font-medium"
                      >
                        Leer más
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mensaje si no hay artículos */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <Newspaper className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              No hay artículos en esta categoría
            </p>
          </div>
        )}
      </div>

      {/* Modal de artículo completo */}
      <Modal
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
        size="xl"
        title=""
      >
        {selectedArticle && (
          <div className="space-y-6">
            {/* Header con imagen y categoría */}
            {selectedArticle.image && (
              <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden mb-4">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant={getCategoryBadgeVariant(selectedArticle.category)}
                    size="sm"
                  >
                    {selectedArticle.category}
                  </Badge>
                  {selectedArticle.featured && (
                    <Badge variant="warning" size="sm" className="ml-2">
                      Destacado
                    </Badge>
                  )}
                </div>
              </div>
            )}

            {/* Título */}
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 dark:text-white">
              {selectedArticle.title}
            </h2>

            {/* Meta información */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 pb-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{selectedArticle.author || 'Equipo Editorial'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(selectedArticle.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{selectedArticle.readTime} de lectura</span>
              </div>
            </div>

            {/* Contenido completo */}
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base whitespace-pre-line">
                {selectedArticle.content || selectedArticle.excerpt}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Blog;
