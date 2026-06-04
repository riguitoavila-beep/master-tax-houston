export type Specialist = {
  name: string;
  role: string;
  company?: string;
  photo: string;
  bio: string;
};

export type Service = {
  name: string;
  description: string;
  icon: string;
};

export type Department = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  color: string;
  accentColor: string;
  bgGradient: string;
  icon: string;
  specialists: Specialist[];
  services: Service[];
  cta: string;
};

export const DEPARTMENTS: Department[] = [
  {
    id: "impuestos",
    slug: "impuestos-finanzas",
    name: "Impuestos y Finanzas",
    shortName: "Impuestos",
    tagline: "Maximiza tu reembolso. Protege tu negocio.",
    description:
      "Preparamos tus impuestos personales y corporativos con precisión y experiencia. Te asesoramos para que pagues lo justo y aproveches cada deducción disponible.",
    color: "#0033CC",
    accentColor: "#22d3ee",
    bgGradient: "from-[#0033CC]/10 to-[#22d3ee]/5",
    icon: "calculator",
    specialists: [
      {
        name: "Eduardo Martinez",
        role: "Especialista en Impuestos y Finanzas",
        photo: "/team/eduardo-martinez.jpg",
        bio: "Con años de experiencia en preparación de impuestos personales y corporativos, Eduardo ayuda a cientos de familias e individuos a maximizar su reembolso cada temporada.",
      },
    ],
    services: [
      {
        name: "Preparación de Taxes Personales",
        description:
          "Declaración de impuestos para individuos, familias y trabajadores independientes. Maximizamos tus deducciones legalmente.",
        icon: "file-text",
      },
      {
        name: "Taxes Corporativos",
        description:
          "Declaraciones fiscales para LLCs, S-Corps, C-Corps y partnerships. Cumplimiento total con el IRS.",
        icon: "building-2",
      },
      {
        name: "Asesoría Fiscal",
        description:
          "Planificación fiscal estratégica para reducir tu carga tributaria y prepararte para el futuro.",
        icon: "bar-chart-3",
      },
      {
        name: "Creación de Compañía",
        description:
          "Registramos tu LLC, S-Corp o negocio. Te orientamos para elegir la estructura que más te beneficia.",
        icon: "briefcase",
      },
      {
        name: "Contabilidad para Negocios",
        description:
          "Bookkeeping mensual, estados financieros y reportes para que tomes decisiones con información real.",
        icon: "book-open",
      },
    ],
    cta: "Consultar con Eduardo",
  },
  {
    id: "migracion",
    slug: "formas-migratorias",
    name: "Preparación de Formas Migratorias",
    shortName: "Migración",
    tagline: "Tu futuro en EE.UU. comienza aquí.",
    description:
      "Te acompañamos en cada paso de tu proceso migratorio. Preparamos tus formularios con exactitud y te ayudamos a entender cada etapa del proceso.",
    color: "#7c3aed",
    accentColor: "#a78bfa",
    bgGradient: "from-[#7c3aed]/10 to-[#a78bfa]/5",
    icon: "globe",
    specialists: [
      {
        name: "Erika Martinez",
        role: "Especialista en Formas Migratorias",
        photo: "/team/erika-martinez.jpg",
        bio: "Erika guía a familias e individuos a través del complejo proceso migratorio, preparando formularios con precisión y brindando orientación en cada etapa.",
      },
    ],
    services: [
      {
        name: "Preparación de Formas Migratorias",
        description:
          "Preparación precisa de formularios USCIS: I-130, I-485, I-765, I-131, N-400 y más.",
        icon: "file-check",
      },
      {
        name: "Traducción de Documentos",
        description:
          "Traducción certificada de documentos personales, legales y oficiales al inglés o español.",
        icon: "languages",
      },
      {
        name: "Notarización",
        description:
          "Notarización de documentos personales, contratos y declaraciones juradas.",
        icon: "stamp",
      },
      {
        name: "Poderes Notariales",
        description:
          "Redacción y notarización de poderes generales, especiales y limitados.",
        icon: "scroll",
      },
      {
        name: "Oficiantes de Boda",
        description:
          "Ceremonia de matrimonio civil profesional en español o inglés.",
        icon: "heart",
      },
    ],
    cta: "Consultar con Erika",
  },
  {
    id: "seguros",
    slug: "aseguradoras",
    name: "Aseguradoras",
    shortName: "Seguros",
    tagline: "Protege lo que más amas.",
    description:
      "Dos expertos en seguros trabajando para encontrarte la cobertura perfecta al mejor precio. Salud, vida, autos, casas y negocios — lo tenemos todo.",
    color: "#059669",
    accentColor: "#34d399",
    bgGradient: "from-[#059669]/10 to-[#34d399]/5",
    icon: "shield",
    specialists: [
      {
        name: "Alfredo Rojas",
        role: "Especialista en Seguros",
        company: "Health First",
        photo: "/team/alfredo-rojas.jpg",
        bio: "Alfredo se especializa en seguros de salud y vida, ayudando a familias a encontrar la cobertura que necesitan dentro de su presupuesto.",
      },
      {
        name: "Rafael Sanchez",
        role: "Especialista en Seguros",
        company: "Royal Insurance LLC",
        photo: "/team/rafael-sanchez.jpg",
        bio: "Rafael es experto en seguros de propiedades, vehículos y negocios. Con años de experiencia protegiendo los activos de la comunidad hispana en Houston.",
      },
    ],
    services: [
      {
        name: "Seguro de Salud",
        description:
          "Planes de salud individuales y familiares. Obamacare, Marketplace y planes privados.",
        icon: "heart-pulse",
      },
      {
        name: "Seguro de Vida",
        description:
          "Term life, whole life y universal life. Protege el futuro financiero de tu familia.",
        icon: "umbrella",
      },
      {
        name: "Seguro de Autos",
        description:
          "Cobertura completa o liability para tu vehículo personal. Precios competitivos.",
        icon: "car",
      },
      {
        name: "Seguros de Vehículos Comerciales",
        description:
          "Cobertura especializada para flotas, camiones, taxis y vehículos de negocio.",
        icon: "truck",
      },
      {
        name: "Seguro de Casa",
        description:
          "Homeowners e inquilinos. Protege tu hogar contra daños, robo y desastres naturales.",
        icon: "home",
      },
      {
        name: "Seguro de Negocios",
        description:
          "General liability, workers comp y cobertura comercial para tu empresa.",
        icon: "shield-check",
      },
    ],
    cta: "Cotizar mi Seguro",
  },
  {
    id: "credito",
    slug: "credito-financiamiento",
    name: "Reparación de Crédito y Financiamiento",
    shortName: "Crédito",
    tagline: "Reconstruye tu crédito. Abre nuevas puertas.",
    description:
      "El equipo de Mastercredit Group trabaja contigo para limpiar tu historial, mejorar tu puntaje y prepararte para los financiamientos que necesitas.",
    color: "#d97706",
    accentColor: "#fbbf24",
    bgGradient: "from-[#d97706]/10 to-[#fbbf24]/5",
    icon: "trending-up",
    specialists: [
      {
        name: "Jonatan Marrero",
        role: "Especialista en Crédito y Financiamiento",
        company: "Mastercredit Group",
        photo: "/team/jonatan-marrero.jpg",
        bio: "Jonatan ayuda a cientos de personas a reconstruir su historial crediticio y acceder a financiamientos que antes creían imposibles.",
      },
      {
        name: "Aristides Martinez",
        role: "Especialista en Crédito y Financiamiento",
        company: "Mastercredit Group",
        photo: "/team/aristides-martinez.jpg",
        bio: "Aristides se especializa en estrategias avanzadas de crédito empresarial y preparación para financiamientos de alto valor.",
      },
    ],
    services: [
      {
        name: "Revisión de Reporte de Crédito",
        description:
          "Análisis completo de los 3 burós: Equifax, Experian y TransUnion. Identificamos todo lo que te afecta.",
        icon: "search",
      },
      {
        name: "Disputas de Errores en Burós",
        description:
          "Enviamos cartas de disputa profesionales para eliminar errores e información incorrecta.",
        icon: "file-x",
      },
      {
        name: "Eliminación de Cuentas Negativas",
        description:
          "Trabajamos legalmente para eliminar cobros, tardanzas y cuentas en colección.",
        icon: "trash-2",
      },
      {
        name: "Ayuda con Cuentas en Colección",
        description:
          "Te asesoramos y representamos ante agencias de cobro para resolver deudas pendientes.",
        icon: "message-square",
      },
      {
        name: "Negociación de Deudas y Settlements",
        description:
          "Negociamos directamente con acreedores para reducir o liquidar deudas por menos del total.",
        icon: "handshake",
      },
      {
        name: "Construcción de Puntaje de Crédito",
        description:
          "Estrategias probadas para subir tu score rápidamente de forma sostenible.",
        icon: "trending-up",
      },
      {
        name: "Monitoreo de Crédito",
        description:
          "Seguimiento mensual de tu progreso con reportes detallados de mejora.",
        icon: "activity",
      },
      {
        name: "Preparación para Financiamientos",
        description:
          "Te preparamos para calificar para carros, casas, tarjetas personales y de negocio.",
        icon: "credit-card",
      },
      {
        name: "Crédito Empresarial",
        description:
          "Construimos el perfil de crédito de tu negocio separado de tu crédito personal.",
        icon: "building",
      },
    ],
    cta: "Analizar mi Crédito",
  },
];
