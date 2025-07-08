const projects = [
   {
     id: 1,
     title: 'Gestor de Club Deportivo',
     shortDescription: 'Plataforma completa para clubes de baloncesto.',
     description: 'Aplicación fullstack con Node.js, Sequelize y Pug para gestionar entrenadores, equipos, horarios, partidos y estadísticas en tiempo real.',
     image: '/assets/proyectos/club.png',
     github: 'https://github.com/ibonmartin/club-manager',
     demo: 'https://club-manager.vercel.app',
     technologies: ['Node.js', 'Sequelize', 'Pug', 'Express']
   },
   {
     id: 2,
     title: 'Blog Markdown',
     shortDescription: 'Blog personal con soporte para Markdown.',
     description: 'Aplicación que permite escribir y guardar posts con sintaxis Markdown. Incluye modo oscuro, buscador y guardado local.',
     image: '/assets/proyectos/blog.png',
     github: 'https://github.com/ibonmartin/markdown-blog',
     demo: 'https://markdown-blog.vercel.app',
     technologies: ['React', 'CSS', 'Marked.js']
   },
   {
     id: 3,
     title: 'Buscador de Películas',
     shortDescription: 'Buscador con la API de TMDB.',
     description: 'Consume la API de TheMovieDB para buscar películas, obtener detalles y ver tráilers. Interfaz moderna y responsive.',
     image: '/assets/proyectos/movies.png',
     github: 'https://github.com/ibonmartin/movie-finder',
     demo: 'https://movie-finder.vercel.app',
     technologies: ['React', 'TMDB API', 'CSS']
   },
   {
     id: 4,
     title: 'Gestor de Tareas Avanzado',
     shortDescription: 'To-do app con subtareas y etiquetas.',
     description: 'Permite crear listas de tareas con etiquetas, subtareas y recordatorios. Sincroniza con LocalStorage.',
     image: '/assets/proyectos/tareas.png',
     github: 'https://github.com/ibonmartin/taskmaster',
     demo: 'https://taskmaster.vercel.app',
     technologies: ['React', 'CSS', 'Hooks']
   },
   {
     id: 5,
     title: 'Portfolio Interactivo',
     shortDescription: 'Este portfolio, hecho con React.',
     description: 'Portfolio responsive, con scroll suave, animaciones, y diseño artístico minimalista. Sección de proyectos, contacto y experiencia.',
     image: '/assets/proyectos/portfolio.png',
     github: 'https://github.com/ibonmartin/portfolio',
     demo: 'https://ibonmartin.dev',
     technologies: ['React', 'CSS Puro']
   },
   {
     id: 6,
     title: 'Generador de Contraseñas',
     shortDescription: 'Crea contraseñas seguras al instante.',
     description: 'Herramienta que genera contraseñas seguras con criterios personalizados (longitud, símbolos, números, etc).',
     image: '/assets/proyectos/password.png',
     github: 'https://github.com/ibonmartin/password-generator',
     demo: 'https://passwordgen.vercel.app',
     technologies: ['JavaScript', 'CSS', 'HTML']
   },
   {
     id: 7,
     title: 'App de Recetas Veggie',
     shortDescription: 'Buscador de recetas veganas y vegetarianas.',
     description: 'Consume la Spoonacular API para mostrar recetas vegetarianas, con filtros por ingredientes, tiempo y dificultad.',
     image: '/assets/proyectos/recetas.png',
     github: 'https://github.com/ibonmartin/veggie-recipes',
     demo: 'https://veggie-recipes.vercel.app',
     technologies: ['React', 'CSS', 'Spoonacular API']
   },
   {
     id: 8,
     title: 'Dashboard de KPIs',
     shortDescription: 'Visualización de datos con gráficos.',
     description: 'Dashboard responsive que consume datos en JSON y los muestra con gráficas (bar, pie, line) usando Chart.js.',
     image: '/assets/proyectos/dashboard.png',
     github: 'https://github.com/ibonmartin/kpi-dashboard',
     demo: 'https://kpi-dashboard.vercel.app',
     technologies: ['React', 'Chart.js', 'CSS']
   },
   {
     id: 9,
     title: 'Clon de Spotify',
     shortDescription: 'Interfaz de usuario inspirada en Spotify.',
     description: 'Frontend moderno que simula la UI de Spotify. Incluye sidebar, playlists, pantalla de reproducción, etc.',
     image: '/assets/proyectos/spotify.png',
     github: 'https://github.com/ibonmartin/spotify-clone',
     demo: 'https://spotify-clone.vercel.app',
     technologies: ['React', 'CSS Grid', 'Flexbox']
   }
 ];
 
 export default projects;
 