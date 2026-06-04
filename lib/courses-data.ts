export type Course = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  instructor: string;
  instructorRole: string;
  instructorPhoto: string;
  department: string;
  price: number;
  currency: string;
  duration: string;
  level: "Principiante" | "Intermedio" | "Avanzado";
  format: "Video" | "Mentoría 1:1" | "Grupal" | "Híbrido";
  modules: string[];
  includes: string[];
  badge: string;
  featured: boolean;
  stripePriceId: string;
  thumbnail: string;
};

export const COURSES: Course[] = [
  {
    id: "taxes-personal-basico",
    slug: "como-preparar-tus-taxes",
    title: "Cómo Preparar Tus Taxes: Guía Completa",
    subtitle: "Aprende a declarar tus impuestos correctamente desde cero",
    description:
      "En este curso aprenderás todo lo que necesitas saber para preparar tus impuestos personales en EE.UU. Desde qué formularios usar, hasta cómo maximizar tus deducciones. Ideal para empleados, freelancers y dueños de pequeños negocios.",
    instructor: "Eduardo Martinez",
    instructorRole: "Especialista en Impuestos y Finanzas",
    instructorPhoto: "/team/eduardo-martinez.jpg",
    department: "Impuestos y Finanzas",
    price: 97,
    currency: "USD",
    duration: "4 horas",
    level: "Principiante",
    format: "Video",
    modules: [
      "Introducción al sistema de impuestos en EE.UU.",
      "Formularios W-2, 1099 y qué significan",
      "Deducciones estándar vs. itemizadas",
      "Créditos fiscales que no debes perderte",
      "Cómo evitar errores comunes",
      "Qué hacer si debes dinero al IRS",
    ],
    includes: [
      "Acceso de por vida al contenido",
      "Material descargable en PDF",
      "Calculadora de deducciones",
      "Soporte por email por 30 días",
    ],
    badge: "Más Popular",
    featured: true,
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_TAXES_BASICO || "",
    thumbnail: "/courses/taxes-basico.jpg",
  },
  {
    id: "credito-reparacion",
    slug: "reparar-tu-credito-paso-a-paso",
    title: "Repara Tu Crédito Paso a Paso",
    subtitle: "De score bajo a calificar para tu casa o carro en 6 meses",
    description:
      "Aprende las estrategias profesionales que usan los expertos de Mastercredit Group para limpiar historiales y construir crédito sólido. Un programa práctico con plantillas de cartas y plan de acción personalizado.",
    instructor: "Jonatan Marrero",
    instructorRole: "Especialista en Crédito y Financiamiento",
    instructorPhoto: "/team/jonatan-marrero.jpg",
    department: "Crédito y Financiamiento",
    price: 147,
    currency: "USD",
    duration: "6 horas",
    level: "Principiante",
    format: "Video",
    modules: [
      "Cómo leer tu reporte de crédito",
      "Identificar errores que te están bajando el score",
      "Redactar cartas de disputa efectivas",
      "Estrategias para eliminar colecciones",
      "Cómo construir crédito desde cero",
      "Prepararte para calificar para financiamiento",
    ],
    includes: [
      "Acceso de por vida al contenido",
      "Plantillas de cartas de disputa listas para usar",
      "Plan de acción de 6 meses",
      "Tracker de progreso en Excel",
      "Consulta inicial gratuita de 30 min",
    ],
    badge: "Recomendado",
    featured: true,
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_CREDITO || "",
    thumbnail: "/courses/credito.jpg",
  },
  {
    id: "mentoria-negocio",
    slug: "mentoria-crea-tu-negocio",
    title: "Mentoría: Crea y Registra Tu Negocio",
    subtitle: "Sesión 1:1 con Eduardo Martinez — LLC, EIN y estrategia fiscal",
    description:
      "Sesión privada de mentoría donde Eduardo te guía paso a paso en el proceso de crear tu compañía: elegir la estructura correcta, registrarla, obtener tu EIN y diseñar una estrategia fiscal desde el día uno.",
    instructor: "Eduardo Martinez",
    instructorRole: "Especialista en Impuestos y Finanzas",
    instructorPhoto: "/team/eduardo-martinez.jpg",
    department: "Impuestos y Finanzas",
    price: 249,
    currency: "USD",
    duration: "90 minutos",
    level: "Principiante",
    format: "Mentoría 1:1",
    modules: [
      "Análisis de tu situación actual",
      "LLC vs S-Corp vs Sole Proprietor — ¿qué te conviene?",
      "Proceso de registro en Texas",
      "Obtención del EIN con el IRS",
      "Cuenta bancaria de negocio y separación de finanzas",
      "Plan fiscal para el primer año",
    ],
    includes: [
      "90 minutos de mentoría 1:1 por Zoom",
      "Grabación de la sesión",
      "Checklist completo para el registro",
      "Seguimiento por email 30 días",
    ],
    badge: "Sesión Privada",
    featured: false,
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_MENTORIA || "",
    thumbnail: "/courses/mentoria.jpg",
  },
];
