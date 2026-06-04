export type ServiceData = {
  slug: string;
  iconKey: string;
  title: string;
  tagline: string;
  description: string;
  accent: string;
  accentLight: string;
  benefits: { iconKey: string; title: string; desc: string }[];
  steps: { number: string; title: string; desc: string }[];
  included: { title: string; items: string[] }[];
  faqs: { q: string; a: string }[];
};

export const servicesData: Record<string, ServiceData> = {
  taxes: {
    slug: "taxes",
    iconKey: "FileText",
    title: "Preparación de Taxes",
    tagline: "Maximiza tu reembolso con expertos",
    description:
      "Preparamos tu declaración federal y estatal con precisión, asegurándonos de reclamar todos los créditos y deducciones a los que tienes derecho. Más de 8 años ayudando a familias latinas en Houston.",
    accent: "#0033CC",
    accentLight: "#3b82f6",
    benefits: [
      { iconKey: "Zap",        title: "Reembolso Máximo", desc: "Identificamos cada deducción y crédito aplicable para maximizar tu retorno." },
      { iconKey: "BadgeCheck", title: "IRS Authorized",   desc: "Somos proveedores autorizados de e-file por el IRS. Tu declaración está en manos seguras." },
      { iconKey: "Clock",      title: "Proceso Rápido",   desc: "Tu declaración lista en 24-48 horas. Depósito directo en 10-21 días hábiles." },
      { iconKey: "Lock",       title: "100% Seguro",       desc: "Toda tu información se maneja bajo estrictos protocolos de privacidad y cifrado." },
    ],
    steps: [
      { number: "01", title: "Reúne tus documentos", desc: "W-2, 1099, ID oficial, ITIN o SSN, y cartas del IRS si las tienes." },
      { number: "02", title: "Consulta inicial",      desc: "Revisamos tu situación fiscal y te explicamos qué beneficios aplican en tu caso." },
      { number: "03", title: "Preparación",           desc: "Preparamos tu declaración y la revisamos contigo antes de enviarla al IRS." },
      { number: "04", title: "Confirmación",          desc: "Recibes confirmación de aceptación y seguimiento de tu reembolso en tiempo real." },
    ],
    included: [
      {
        title: "Declaraciones Personales",
        items: ["Federal & Estatal (W-2, 1099)", "Head of Household", "Crédito por hijos (ACTC/CTC)", "Earned Income Credit (EITC)", "Crédito de educación"],
      },
      {
        title: "Negocios & Autónomos",
        items: ["Schedule C (Self-Employed)", "LLC & Small Business", "Deducción de gastos de negocio", "Depreciación de activos", "Impuestos de trabajo propio"],
      },
      {
        title: "Situaciones Especiales",
        items: ["Solicitud de ITIN (W-7)", "Años anteriores (Back Taxes)", "Enmiendas (1040-X)", "Planes de pago con el IRS", "Cartas de respuesta al IRS"],
      },
    ],
    faqs: [
      { q: "¿Qué documentos necesito?",                  a: "ID oficial, SSN o ITIN, formularios W-2 o 1099, y cualquier carta del IRS." },
      { q: "¿Cuánto tarda mi reembolso?",                a: "Con e-file y depósito directo, entre 10 y 21 días hábiles tras la aceptación del IRS." },
      { q: "¿Preparan taxes de años anteriores?",         a: "Sí, preparamos declaraciones de hasta 3 años atrás y podemos recuperar reembolsos pendientes." },
      { q: "¿Cuánto cobran por la preparación?",         a: "Nuestra tarifa depende de la complejidad de tu caso. Contáctanos para una cotización sin costo." },
    ],
  },

  "seguros-medicos": {
    slug: "seguros-medicos",
    iconKey: "Shield",
    title: "Seguros Médicos",
    tagline: "El plan perfecto para tu familia",
    description:
      "Te ayudamos a navegar el Marketplace (ACA/Obamacare) para encontrar el seguro médico que mejor se adapta a tus necesidades y presupuesto, aprovechando todos los subsidios disponibles.",
    accent: "#4f46e5",
    accentLight: "#818cf8",
    benefits: [
      { iconKey: "Users",      title: "Cobertura Familiar", desc: "Planes individuales y familiares con cobertura para todos los miembros del hogar." },
      { iconKey: "BadgeCheck", title: "Subsidios ACA",      desc: "Muchas familias califican para subsidios que reducen la prima mensual hasta $0." },
      { iconKey: "Clock",      title: "Inscripción Rápida", desc: "Te inscribimos en el mismo día. Cobertura activa desde el primer día del mes siguiente." },
      { iconKey: "Zap",        title: "Sin Complicaciones", desc: "Comparamos todos los planes disponibles y te explicamos cada uno en español." },
    ],
    steps: [
      { number: "01", title: "Evaluación de elegibilidad", desc: "Revisamos tus ingresos y situación familiar para determinar qué subsidios calificas." },
      { number: "02", title: "Comparación de planes",      desc: "Te presentamos las mejores opciones con deducibles, primas y redes de médicos." },
      { number: "03", title: "Inscripción",                desc: "Completamos tu inscripción en el Marketplace de forma segura y rápida." },
      { number: "04", title: "Seguimiento anual",          desc: "Te contactamos cada año en período de inscripción para revisar y actualizar tu plan." },
    ],
    included: [
      {
        title: "Planes Disponibles",
        items: ["Marketplace / ACA (Obamacare)", "Planes Bronze, Silver, Gold, Platinum", "Medicaid y CHIP (niños)", "Planes dentales y de visión", "Short-term health plans"],
      },
      {
        title: "Beneficios",
        items: ["Subsidios de prima (APTC)", "Cost-sharing reductions", "Preventive care sin costo", "Hospitalización y cirugía", "Medicamentos recetados"],
      },
      {
        title: "Períodos de Inscripción",
        items: ["Open Enrollment (Nov–Ene)", "Special Enrollment Period", "Cambio de trabajo o pérdida de cobertura", "Nacimiento o adopción", "Mudanza a otro estado"],
      },
    ],
    faqs: [
      { q: "¿Puedo aplicar sin documentos de residencia?", a: "Depende del plan. Para ACA se requiere estatus migratorio calificado, pero hay otras opciones disponibles." },
      { q: "¿Cuándo empieza mi cobertura?",               a: "Si te inscribes antes del día 15 del mes, tu cobertura inicia el 1 del mes siguiente." },
      { q: "¿Cuánto cuesta el seguro?",                   a: "Muchas familias pagan $0 o muy poco al mes gracias a los subsidios del ACA según sus ingresos." },
      { q: "¿Qué médicos puedo ver?",                     a: "Depende del plan. Te ayudamos a elegir uno con médicos y hospitales cerca de tu área en Houston." },
    ],
  },

  notaria: {
    slug: "notaria",
    iconKey: "CheckCircle2",
    title: "Servicios de Notaría",
    tagline: "Documentos legales certificados el mismo día",
    description:
      "Ofrecemos servicios notariales completos para la comunidad latina en Houston. Notarizamos documentos legales con rapidez, profesionalismo y en tu idioma.",
    accent: "#22d3ee",
    accentLight: "#67e8f9",
    benefits: [
      { iconKey: "Clock",      title: "Mismo Día",           desc: "La mayoría de notarizaciones se completan en el mismo día de tu cita." },
      { iconKey: "BadgeCheck", title: "Notario Certificado", desc: "Notario público certificado por el Estado de Texas con años de experiencia." },
      { iconKey: "Lock",       title: "Discreción Total",     desc: "Manejamos tus documentos personales con absoluta confidencialidad y cuidado." },
      { iconKey: "PhoneCall",  title: "Servicio a Domicilio", desc: "Para casos especiales podemos ir a tu ubicación en el área de Houston." },
    ],
    steps: [
      { number: "01", title: "Agenda tu cita",         desc: "Contáctanos por WhatsApp o teléfono para programar tu cita presencial o virtual." },
      { number: "02", title: "Prepara los documentos", desc: "Trae el documento original y tu identificación oficial vigente." },
      { number: "03", title: "Revisión y firma",       desc: "Revisamos el documento, verificamos tu identidad y aplicamos el sello notarial." },
      { number: "04", title: "Entrega inmediata",      desc: "Recibes tu documento notarizado en el momento, listo para usar." },
    ],
    included: [
      {
        title: "Documentos Comunes",
        items: ["Poderes notariales (General & Limited)", "Cartas de permiso para menores", "Affidavits y declaraciones juradas", "Contratos y acuerdos", "Títulos de vehículos"],
      },
      {
        title: "Documentos Legales",
        items: ["Documentos de bienes raíces", "Escrituras (Deeds)", "Trust documents", "Certificación de copias", "Actas de nacimiento extranjeras"],
      },
      {
        title: "Servicios Adicionales",
        items: ["Apostillas (State of Texas)", "Traducción de documentos", "Shipping de documentos urgentes", "Notarización virtual (RON)", "Documentos para consulados"],
      },
    ],
    faqs: [
      { q: "¿Qué ID acepta el notario?",  a: "Pasaporte, matrícula consular, licencia de conducir, o cualquier ID con foto emitido por gobierno." },
      { q: "¿Cuánto cuesta notarizar?",   a: "Las tarifas varían según el tipo de documento. Contáctanos para una cotización sin compromiso." },
      { q: "¿Pueden notarizar en español?", a: "Sí, todos nuestros servicios se ofrecen completamente en español." },
      { q: "¿Hacen apostillas?",           a: "Sí, gestionamos apostillas emitidas por el Estado de Texas para documentos a usar en el extranjero." },
    ],
  },

  inmigracion: {
    slug: "inmigracion",
    iconKey: "Globe",
    title: "Servicios de Inmigración",
    tagline: "Tu futuro en Estados Unidos con apoyo experto",
    description:
      "Te acompañamos en cada paso de tu proceso migratorio con profesionalismo, discreción y en tu idioma. Desde el ITIN hasta orientación sobre opciones migratorias disponibles.",
    accent: "#059669",
    accentLight: "#34d399",
    benefits: [
      { iconKey: "Lock",       title: "100% Confidencial",  desc: "Tu información migratoria se maneja con absoluta discreción y privacidad." },
      { iconKey: "BadgeCheck", title: "Equipo Capacitado",  desc: "Personal capacitado en trámites migratorios y actualizado en cambios de ley." },
      { iconKey: "Users",      title: "Comunidad Latina",   desc: "Entendemos tu situación porque somos parte de la misma comunidad." },
      { iconKey: "PhoneCall",  title: "Consulta Gratuita",  desc: "Primera consulta sin costo para evaluar tu caso y orientarte sobre las mejores opciones." },
    ],
    steps: [
      { number: "01", title: "Consulta inicial",     desc: "Evaluamos tu situación migratoria y te explicamos todas las opciones disponibles." },
      { number: "02", title: "Plan de acción",       desc: "Diseñamos un plan específico para tu caso con los pasos y tiempos estimados." },
      { number: "03", title: "Preparación de forms", desc: "Llenamos y revisamos todos los formularios requeridos con precisión." },
      { number: "04", title: "Seguimiento",          desc: "Te mantenemos informado en cada etapa del proceso hasta su resolución." },
    ],
    included: [
      {
        title: "Identificación Fiscal",
        items: ["Solicitud de ITIN (Form W-7)", "Renovación de ITIN vencido", "ITIN para dependientes", "Verificación de ITIN", "Cartas de explicación al IRS"],
      },
      {
        title: "Trámites Migratorios",
        items: ["Orientación sobre DACA", "Renovación de DACA (I-821D)", "Consultas sobre TPS", "Peticiones familiares (I-130)", "Solicitud de Advance Parole"],
      },
      {
        title: "Documentación",
        items: ["Preparación de cartas de soporte", "Organización de expedientes", "Traducción de documentos", "Notarización de declaraciones", "Envío a autoridades"],
      },
    ],
    faqs: [
      { q: "¿Son abogados de inmigración?",     a: "Ofrecemos orientación y preparación de documentos. Para representación legal, te referimos a abogados de nuestra red." },
      { q: "¿Qué necesito para el ITIN?",       a: "Pasaporte original o certificado de nacimiento + ID con foto, y evidencia de tu razón para necesitar el ITIN." },
      { q: "¿Cuánto tarda el proceso de ITIN?", a: "El IRS tarda entre 7 y 11 semanas. Nosotros te orientamos para que la solicitud sea correcta desde el inicio." },
      { q: "¿Pueden ayudar con DACA?",           a: "Sí, ayudamos con la preparación de la solicitud de renovación de DACA (I-821D) y los documentos de soporte." },
    ],
  },
};
