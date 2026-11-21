// ============================================================================
//  CONFIGURACIÓN DEL PORFOLIO — este es el único fichero que necesitas editar
// ============================================================================
export const config = {
  // --- Identidad -------------------------------------------------------------
  name: "Marco Antonio Bazo Gutiérrez",
  role: "Fotógrafo profesional",
  tagline: "Fotografía immobiliaria y de arquitectura.",
  location: "Sevilla · Andalucía occidental",

  // --- Repositorio de GitHub -------------------------------------------------
  // En GitHub Pages (usuario.github.io/repo) se detectan solos. Rellénalos si
  // usas un dominio propio o quieres forzarlos. En local se usan siempre estos.
  github: {
    owner: "Milo-Fotografia",
    repo: "portfolio",
    branch: "main",
  },

  // Carpeta del repo que contiene una subcarpeta por categoría.
  photosDir: "photos",

  // --- Sobre mí --------------------------------------------------------------
  about: {
    image: "assets/img/about.jpg",
    text: [
      "Desde 2011 ayudo a propietarios, agencias y arquitectos en Sevilla y Andalucía Occidental a destacar sus espacios. Especializado en fotografía inmobiliaria, arquitectura, apartamentos turísticos, propiedades rurales y fotografía aérea con dron, trabajo para capturar la luz y el carácter real de cada inmueble para que marque la diferencia desde el primer vistazo.",
      "Trabajo con particulares, marcas y medios, tanto en estudio como en exteriores.",
    ],
    stats: [
      { value: "15+", label: "años de experiencia" },
      { value: "1000+", label: "proyectos entregados" },
      { value: "100", label: "Reportajes al año" },
    ],
  },

  // --- Contacto --------------------------------------------------------------
  contact: {
    email: "milofyv@gmail.com",
    phone: "+34 603 710 146",
    // GitHub Pages no tiene backend. Crea un formulario gratis en
    // https://formspree.io y pega aquí su ID (p. ej. "xyzabcde").
    // Si lo dejas vacío, el formulario abrirá el cliente de correo (mailto).
    formspreeId: "",
    availability: "Agenda abierta para 2027",
  },

  social: [
    { label: "Instagram", url: "https://instagram.com/milo_fotografia" },
    { label: "Facebook", url: "https://facebook.com/milo.videofotografia" }
  ],

  // Minutos que se cachea en el navegador el listado del repositorio
  // (la API pública de GitHub permite 60 peticiones/hora por visitante).
  cacheMinutes: 15,
};
