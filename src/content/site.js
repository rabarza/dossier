// Contenido del sitio como datos: los textos viven aquí, separados de la
// presentación. Crecer (blogs, nuevos servicios, charlas) es agregar datos.
// Convención del proyecto: código e identificadores en inglés; textos
// visibles, comentarios y documentación en español.
export const contact = {
  email: "rolo.abarza99@gmail.com",
  phone: "+56 9 4289 1663",
  whatsapp: "https://wa.me/56942891663?text=Hola%20Rolando%2C%20vi%20tu%20sitio%20web%20y%20me%20gustar%C3%ADa%20conversar",
  linkedin: "https://www.linkedin.com/in/rabarza/",
  github: "https://github.com/rabarza",
  city: "Santiago, Chile",
};

export const navigation = [
  { label: "En qué ayudo", anchor: "#que-hago" },
  { label: "Podemos construir", anchor: "#construir" },
  { label: "Datos", anchor: "#datos" },
  { label: "Docencia", anchor: "#docencia" },
  { label: "Contacto", anchor: "#contacto" },
];

export const hero = {
  chip: "Ingeniero civil industrial e informático · Magíster en investigación de operaciones",
  paragraph:
    "Entiendo el problema de negocio, lo modelo, lo implemento y lo dejo funcionando en producción. Desarrollo soluciones de ciencia de datos, optimización y aplicaciones web — y disfruto el trabajo con personas tanto como el técnico.",
};

export const marqueeItems = [
  "Ciencia de datos", "Optimización", "Desarrollo web", "APIs",
  "Paneles de datos", "Automatización", "Docencia",
];

export const whatIDo = [
  {
    title: "Desarrollo web y aplicaciones",
    text: "Ecommerce, portales, sitios institucionales, blogs y paneles — autoadministrables y hechos a medida, del diseño a la publicación.",
    anchor: "#construir",
  },
  {
    title: "Ciencia de datos y optimización",
    text: "Análisis, modelos predictivos y optimización aplicados al problema que tengas: convertir tus datos en decisiones, del prototipo a producción.",
    anchor: "#datos",
  },
  {
    title: "Automatización e IA aplicada",
    text: "Tareas repetitivas que corren solas y herramientas de IA para problemas concretos: clasificar, resumir, priorizar, responder.",
    anchor: "#datos",
  },
  {
    title: "Docencia y tutorías",
    text: "Clases de matemáticas, probabilidad y estadística, y programación en Python, a estudiantes de ingeniería y otras carreras.",
    anchor: "#docencia",
  },
];

// ---------- Lo que puedo construir (fichas de servicio expandibles) ----------
export const services = [
  {
    title: "Ecommerce autoadministrable",
    summary: "Una tienda completa que el dueño administra desde el propio sitio, sin saber programar. Pasa el cursor por la lista y mira cada pieza.",
    sceneSet: "ecommerce",
    showcaseDomain: "mitienda.cl",
    showcase: [
      { label: "Se administra desde el propio sitio", scene: "admin" },
      { label: "Carrito y cuentas de clientes", scene: "cart" },
      { label: "Lista de deseos", scene: "wishlist" },
      { label: "Boletín de novedades", scene: "newsletter" },
      { label: "Cupones y descuentos", scene: "coupons" },
      { label: "Reseñas de producto", scene: "reviews" },
      { label: "Blog integrado", scene: "blog" },
      { label: "Buscador con filtros", scene: "search" },
      { label: "Pagos: Webpay, Mercado Pago", scene: "payments" },
      { label: "Tu marca, no una plantilla", scene: "whitelabel" },
      { label: "Componentes con versiones", scene: "variants" },
    ],
    evidence: "Cada pieza de esta lista ya está construida y funcionando; las ilustraciones solo muestran la idea, sin amarrarla a un diseño.",
  },
  {
    title: "Sitios institucionales y de figuras públicas",
    summary: "La cara pública de una autoridad u organización: biografía, proyectos de ley, prensa y atención ciudadana. Recorre la lista y mira cada pieza.",
    sceneSet: "institutional",
    showcaseDomain: "diputadaejemplo.cl",
    showcase: [
      { label: "Biografía y trayectoria", scenes: ["bio", "bioBanner"] },
      { label: "Proyectos de ley con su tramitación", scene: "bills" },
      { label: "Indicadores de gestión", scene: "management" },
      { label: "Prensa: notas y videos", scene: "press" },
      { label: "Agenda pública", scene: "agenda" },
      { label: "Noticias, columnas y opinión", scenes: ["newsPhoto", "newsList"] },
      { label: "Boletín a la ciudadanía", scene: "newsletter" },
      { label: "Atención ciudadana con seguimiento", scene: "citizen" },
      { label: "Buzón de iniciativas populares", scene: "initiatives" },
      { label: "Redes y sitios integrados", scene: "social" },
    ],
    demo: true,
    evidence: "Hay una demostración navegable completa, con formulario funcionando. Y un dato: de 28 sitios parlamentarios chilenos revisados en julio de 2026, más de la mitad estaba caído o desactualizado — un sitio bien mantenido es ventaja inmediata.",
  },
  {
    title: "Portales con buscador",
    summary: "Propiedades, vehículos, catálogos: cualquier inventario grande que la gente necesita filtrar. Recorre la lista y mira cada pieza.",
    sceneSet: "portal",
    showcaseDomain: "portalpropiedades.cl",
    showcase: [
      { label: "Filtros combinados: comuna, tipo, precio", scene: "filters" },
      { label: "Mapa con las propiedades", scene: "map" },
      { label: "Ficha con galería de fotos", scene: "detail" },
      { label: "Etiquetas: nueva, oportunidad, vendida", scene: "tags" },
      { label: "Agendar visita desde la ficha", scene: "visit" },
      { label: "Favoritos para comparar", scene: "favorites" },
      { label: "Orden y paginación", scene: "sort" },
      { label: "Pensado para el teléfono", scene: "mobile" },
    ],
    evidence: "Las piezas centrales están construidas en un portal de demostración; el resto es trabajo estándar de este tipo de proyecto.",
  },
  {
    title: "Blogs y sitios de contenido",
    summary: "Publicar columnas, documentación o material educativo en un sitio rápido y ordenado. Recorre la lista y mira cada pieza.",
    sceneSet: "blog",
    showcaseDomain: "miblog.cl",
    showcase: [
      { label: "Editor tan simple como un correo", scene: "editor" },
      { label: "Categorías, etiquetas y destacados", scene: "taxonomy" },
      { label: "Buscador dentro del contenido", scene: "search" },
      { label: "Modo claro y oscuro", scene: "darkmode" },
      { label: "Fórmulas y diagramas de verdad", scene: "math" },
      { label: "Suscripción para lectores", scene: "subscribe" },
      { label: "Liviano, y medido antes de entregar", scene: "speed" },
    ],
    evidence: "Tengo uno propio en uso a diario — y este mismo sitio pronto publicará mi blog.",
  },
  {
    title: "Paneles de datos e indicadores",
    summary: "Convertir datos en decisiones: tableros con gráficos que se actualizan solos. Recorre la lista y mira cada pieza.",
    sceneSet: "dashboard",
    showcaseDomain: "panelinterno.cl",
    showcase: [
      { label: "Indicadores clave de un vistazo", scenes: ["kpis", "kpisBars"] },
      { label: "Gráficos que se actualizan solos", scenes: ["trend", "live"] },
      { label: "Filtros por período y categoría", scene: "filters" },
      { label: "Alertas cuando algo se sale de rango", scene: "alerts" },
      { label: "Detalle al hacer clic", scene: "drill" },
      { label: "Exportar a Excel o PDF", scene: "export" },
      { label: "Acceso por roles", scene: "roles" },
      { label: "Conectado a tus fuentes de datos", scene: "sources" },
    ],
    evidence: "Uso un panel propio a diario para mis finanzas, y construyo tableros de este tipo en mi trabajo con datos de empresas reales.",
  },
  {
    title: "Observatorio de datos",
    summary: "Para fundaciones, universidades y políticas públicas: indicadores vivos, mapas y publicaciones en un solo lugar. Recorre la lista y mira cada pieza.",
    sceneSet: "observatory",
    showcaseDomain: "observatorioejemplo.cl",
    showcase: [
      { label: "Ejes temáticos con sus indicadores", scene: "themes" },
      { label: "Indicadores destacados y comparados", scene: "indicators" },
      { label: "Gráficos interactivos", scene: "charts" },
      { label: "Mapa por región", scene: "map" },
      { label: "Comparador entre regiones", scene: "compare" },
      { label: "Datos abiertos: CSV, Excel, API", scene: "downloads" },
      { label: "Informes y publicaciones", scene: "reports" },
      { label: "Normativas y políticas", scene: "policies" },
      { label: "Boletín del observatorio", scene: "newsletter" },
    ],
    evidence: "Formato tomado de observatorios reales (OIG-CEPAL, OCEC-UDP, ComunidadMujer) — y por dentro, la misma ingeniería de datos que construyo a diario para empresas.",
  },
  {
    title: "APIs y sistemas a medida",
    summary: "El motor detrás de las aplicaciones: servicios que procesan datos y toman decisiones.",
    features: [
      "Backends robustos (FastAPI, Django) con documentación automática",
      "Integración con planillas, bases de datos y grandes volúmenes (BigQuery)",
      "Tareas asíncronas y procesos programados",
      "Despliegue profesional: Docker, pruebas y publicación automatizada",
    ],
    evidence: "Es lo que construyo a diario para empresas: sistemas de este tipo están hoy en producción.",
  },
];

// ---------- Ciencia de datos y optimización (trabajo profesional) ----------
export const dataScience = [
  {
    stat: "¿Cuánto se venderá?",
    title: "Predicción de demanda",
    text: "Sistemas que pronostican las ventas para planificar inventario — más de 20.000 combinaciones de producto y tienda por cliente — combinando modelos estadísticos y de aprendizaje automático.",
  },
  {
    stat: "¿Qué comprar?",
    title: "Optimización de compras e inventario",
    text: "Planificación completa de órdenes de compra —qué, cuánto y cuándo comprar a cada proveedor— y distribución entre bodegas y tiendas, respetando presupuesto, capacidad y niveles de servicio.",
  },
  {
    stat: "IA aplicada",
    title: "Automatización con criterio",
    text: "Tareas repetitivas que corren solas y herramientas de IA usadas donde aportan: clasificar solicitudes, resumir documentos extensos, preparar borradores.",
  },
];

export const credentials = [
  {
    stat: "Hoy",
    title: "Software en producción para empresas",
    text: "Científico de datos e ingeniero en Datawalt: los sistemas de esta sección los usan a diario empresas de retail y distribución para operar.",
  },
  {
    stat: "2 ingenierías + magíster",
    title: "Formación con distinción máxima",
    text: "Ingeniería Civil Industrial e Ingeniería Civil Informática (UAI), y Magíster en Ingeniería Industrial e Investigación de Operaciones — tesis aprobada con nota 7,0.",
  },
  {
    stat: "Mejor ingeniería",
    title: "Premio en el AI CodeFest de Globant",
    text: "Premio al proyecto con mejor ingeniería en la hackatón de inteligencia artificial de Globant, empresa global de software (2023).",
  },
];

export const teaching = {
  title: "Docencia y tutorías",
  text: "He sido ayudante universitario de investigación de operaciones, análisis de datos y cálculo, y hago clases particulares. Explicar bien es parte del oficio: la misma claridad que uso con estudiantes la aplico con clientes.",
  topics: [
    "Probabilidad y estadística",
    "Matemáticas para ingeniería",
    "Programación en Python (todos los niveles)",
    "1 a 1 y sesiones grupales, presencial u online",
  ],
};

export const process = [
  {
    title: "Conversación inicial",
    text: "Entender qué se necesita: alcance, contenidos, referencias y plazos. Sale un presupuesto cerrado por escrito.",
  },
  {
    title: "Propuesta de diseño",
    text: "Presento una versión navegable en un enlace privado. Se itera sobre algo concreto, no sobre promesas.",
  },
  {
    title: "Construcción y revisión",
    text: "Desarrollo con revisiones periódicas: el avance se ve en línea y se comenta directamente sobre el producto.",
  },
  {
    title: "Publicación y entrega",
    text: "Publicación en el dominio propio, capacitación para actualizar contenidos y un período de garantía para ajustes.",
  },
];

export const faqs = [
  {
    question: "¿Quién actualiza el sitio después de la entrega?",
    answer: "El equipo de ustedes, desde un panel tan simple como escribir un correo. Incluyo capacitación y un manual breve. El dominio y todos sus datos son siempre de ustedes — sin amarras: si mañana cambian de proveedor, se van con lo suyo. Y si necesitan también la propiedad del código, se acuerda en el presupuesto.",
  },
  {
    question: "¿Cuánto demora y cuánto cuesta?",
    answer: "Un sitio institucional típico toma entre 4 y 8 semanas, según el alcance. Antes de partir entrego un presupuesto cerrado por escrito; el costo mensual de mantenerlo en línea es bajo y se paga directo al proveedor.",
  },
  {
    question: "¿Qué pasa con los datos de las personas?",
    answer: "Los formularios guardan solo lo necesario, con acceso restringido y conexión cifrada, conforme a la ley chilena de protección de datos personales. Nada se comparte con terceros.",
  },
  {
    question: "¿Se verá bien en cualquier teléfono?",
    answer: "Sí: se diseña primero para pantalla chica, se prueba en dispositivos reales y queda legible también para personas mayores o con baja visión.",
  },
];
