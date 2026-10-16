export interface ServiceItem {
  id: string;
  name: string;
  shortDescription: string;
  detail: string;
  iconName: 'Activity' | 'Stethoscope' | 'UserCheck' | 'ShieldCheck' | 'HeartPulse' | 'Users';
}

export interface SpecialtyItem {
  id: string;
  name: string;
  description: string;
  focus: string;
  iconName: 'Sparkles' | 'Microscope' | 'CalendarCheck' | 'HeartHandshake';
}

export interface ProfessionalItem {
  id: string;
  name: string;
  specialty: string;
  role: string;
  description: string;
  imageUrl?: string;
  license?: string;
  isPlaceholder?: boolean;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  iconName: 'UserHeart' | 'GraduationCap' | 'HandHeart' | 'ShieldAlert' | 'Compass';
}

export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
}

export interface ClinicConfig {
  clinicName: string;
  tagline: string;
  whatsappNumber: string; // e.g. "549XXXXXXXXXX"
  defaultWhatsappMessage: string;
  phone: string;
  email: string;
  address: string;
  addressDetail: string;
  hours: string;
  hoursSecondary: string;
  googleMapsEmbedUrl: string;
  googleMapsDirectionsUrl: string;
  instagramUrl: string;
  facebookUrl: string;
}

export const INITIAL_CLINIC_CONFIG: ClinicConfig = {
  clinicName: "HUMANIDAR",
  tagline: "CENTRO MÉDICO RENAL",
  // Centralized WhatsApp configuration as requested (NO inventar número: configurable placeholder)
  whatsappNumber: "549XXXXXXXXXX",
  defaultWhatsappMessage: "Hola, quisiera realizar una consulta sobre los servicios de HUMANIDAR.",
  phone: "+54 (XX) XXXX-XXXX",
  email: "contacto@humanidar.com",
  address: "Pedro Lobo S/N, K4707XXX San Isidro, Catamarca",
  addressDetail: "San Isidro, Valle Viejo, Provincia de Catamarca",
  hours: "Lunes a Viernes: 08:00 a 18:00 hs",
  hoursSecondary: "Sábados: Consultas y controles programados con turno previo",
  // Real Google Maps Embed and Directions URLs for Pedro Lobo S/N, San Isidro, Catamarca
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Pedro+Lobo+S/N,+San+Isidro,+Catamarca&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Pedro+Lobo+S%2FN%2C+San+Isidro%2C+Catamarca",
  instagramUrl: "https://instagram.com/humanidar",
  facebookUrl: "https://facebook.com/humanidar",
};

export const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: "atencion-nefrologica",
    name: "Atención nefrológica",
    shortDescription: "Evaluación clínica integral y diagnóstico médico enfocado en la prevención y tratamiento de patologías renales.",
    detail: "Atención personalizada orientada a proteger la función renal en todas las etapas, con un abordaje clínico exhaustivo y preventivo.",
    iconName: "Stethoscope",
  },
  {
    id: "consultas-medicas",
    name: "Consultas médicas",
    shortDescription: "Espacio de escucha atenta y evaluación detallada de cada paciente, priorizando un vínculo cálido y seguro.",
    detail: "Consultas programadas y de seguimiento diseñadas para responder dudas, interpretar análisis clínicos y trazar un plan de cuidado a medida.",
    iconName: "Activity",
  },
  {
    id: "seguimiento-pacientes",
    name: "Seguimiento de pacientes",
    shortDescription: "Acompañamiento continuo y periódico para el control evolutivo de la salud renal y el bienestar general.",
    detail: "Monitoreo constante de parámetros biológicos y estilo de vida para asegurar estabilidad y tranquilidad en el tiempo.",
    iconName: "UserCheck",
  },
  {
    id: "evaluacion-salud-renal",
    name: "Evaluación de la salud renal",
    shortDescription: "Estudios clínicos y chequeos preventivos para detectar tempranamente cualquier alteración funcional.",
    detail: "Protocolos de cribado y análisis funcional orientados a la detección temprana de factores de riesgo renal.",
    iconName: "ShieldCheck",
  },
  {
    id: "atencion-especializada",
    name: "Atención especializada",
    shortDescription: "Cuidado médico adaptado a situaciones clínicas complejas que requieren protocolos específicos.",
    detail: "Manejo coordinado para pacientes con condiciones de salud que inciden directamente en el sistema renal.",
    iconName: "HeartPulse",
  },
  {
    id: "acompanamiento-integral",
    name: "Acompañamiento integral",
    shortDescription: "Una mirada humana que acompaña al paciente y a su familia durante todo el proceso de atención médica.",
    detail: "Contención, educación para la salud y empatía para brindar una experiencia médica verdaderamente cercana.",
    iconName: "Users",
  },
];

export const CLINIC_SPECIALTIES: SpecialtyItem[] = [
  {
    id: "nefrologia-clinica",
    name: "Nefrología Clínica",
    description: "Diagnóstico, tratamiento y prevención de patologías renales agudas y crónicas con rigor científico y calidez humana.",
    focus: "Prevención, diagnóstico y manejo integral",
    iconName: "Microscope",
  },
  {
    id: "salud-renal-preventiva",
    name: "Salud Renal Preventiva",
    description: "Estrategias personalizadas para preservar la función renal en personas con hipertensión, diabetes u otros factores.",
    focus: "Protección renal anticipada",
    iconName: "Sparkles",
  },
  {
    id: "consultoria-seguimiento",
    name: "Control y Monitoreo Evolutivo",
    description: "Planes de seguimiento periódico con revisión periódica de estudios de laboratorio y estado general.",
    focus: "Continuidad del cuidado",
    iconName: "CalendarCheck",
  },
  {
    id: "cuidado-integral-familia",
    name: "Educación y Cuidado del Paciente",
    description: "Orientación cercana al paciente y su entorno familiar para hábitos de vida saludables y adherencia terapéutica.",
    focus: "Humanidad y contención familiar",
    iconName: "HeartHandshake",
  },
];

export const CLINIC_TEAM: ProfessionalItem[] = [
  {
    id: "profesional-1",
    name: "Dra. Mariana Gómez Ramos",
    specialty: "Nefrología Clínica & Salud Renal",
    role: "Dirección Médica · Especialista en Nefrología",
    description: "Especialista en prevención y abordaje integral de la insuficiencia renal crónica, hipertensión arterial y nefropatías complejas con enfoque cercano.",
    imageUrl: "/doctor_1.jpg",
    license: "M.P. 4.821 · M.N. 142.309",
    isPlaceholder: false,
  },
  {
    id: "profesional-2",
    name: "Dr. Santiago Benítez",
    specialty: "Nefrología & Prevención Cardiovascular",
    role: "Médico Nefrólogo de Planta",
    description: "Dedicado al diagnóstico temprano, control evolutivo de la función renal y coordinación de tratamientos ambulatorios de alta precisión.",
    imageUrl: "/doctor_2.jpg",
    license: "M.P. 5.140 · M.N. 158.412",
    isPlaceholder: false,
  },
  {
    id: "profesional-3",
    name: "Dra. Valeria Morales",
    specialty: "Medicina Interna & Fisiopatología Renal",
    role: "Especialista en Evaluación Clínica Integral",
    description: "Enfocada en el manejo interdisciplinario de factores metabólicos, nutrición renal adaptada y acompañamiento continuo a pacientes y familias.",
    imageUrl: "/doctor_3.jpg",
    license: "M.P. 4.962 · M.N. 149.880",
    isPlaceholder: false,
  },
];

export const CLINIC_VALUES: ValueItem[] = [
  {
    id: "val-1",
    title: "Atención personalizada",
    description: "Cada paciente es único. Adaptamos nuestro enfoque médico a sus necesidades particulares y ritmo de vida.",
    iconName: "UserHeart",
  },
  {
    id: "val-2",
    title: "Equipo profesional",
    description: "Formación científica sólida, actualización médica continua y vocación de servicio al cuidado de tu salud renal.",
    iconName: "GraduationCap",
  },
  {
    id: "val-3",
    title: "Acompañamiento cercano",
    description: "Brindamos contención y respuesta clara en cada etapa del tratamiento, sin tecnicismos innecesarios.",
    iconName: "HandHeart",
  },
  {
    id: "val-4",
    title: "Compromiso con cada paciente",
    description: "Nos involucramos de manera activa en tu bienestar, priorizando siempre la seguridad, empatía y respeto.",
    iconName: "ShieldAlert",
  },
  {
    id: "val-5",
    title: "Atención integral",
    description: "Comprendemos la salud renal en relación con la persona entera, su bienestar físico, emocional y familiar.",
    iconName: "Compass",
  },
];

export const CLINIC_FAQS: FAQItemData[] = [
  {
    id: "faq-1",
    question: "¿Cómo puedo comunicarme con HUMANIDAR?",
    answer: "Podés comunicarte directamente con nosotros a través de nuestro botón oficial de WhatsApp, por teléfono a nuestras líneas de atención o enviándonos un correo electrónico. Nuestro equipo te responderá a la brevedad con la información que necesites.",
  },
  {
    id: "faq-2",
    question: "¿Cómo puedo solicitar información?",
    answer: "Podés escribirnos por WhatsApp especificando el tipo de consulta que requerís o completar nuestro formulario de contacto. Te brindaremos orientación sobre nuestras modalidades de atención y disponibilidad.",
  },
  {
    id: "faq-3",
    question: "¿Dónde se encuentra la clínica?",
    answer: "Estamos ubicados en una zona accesible y confortable para nuestros pacientes. Podés consultar la dirección exacta y las indicaciones de llegada en la sección 'Encontranos' de esta página, o solicitar la ubicación directa a través de WhatsApp.",
  },
  {
    id: "faq-4",
    question: "¿Cómo puedo consultar por los servicios?",
    answer: "A través de nuestra línea de WhatsApp o telefónica podés consultar por cualquiera de las áreas de atención nefrológica, evaluaciones diagnósticas y seguimiento de pacientes. Te asesoraremos de forma personalizada según tus requerimientos.",
  },
  {
    id: "faq-5",
    question: "¿Cómo puedo solicitar un turno?",
    answer: "La vía más ágil para coordinar un turno es enviarnos un mensaje por WhatsApp indicando tu nombre y motivo de consulta. Nuestro equipo de recepción te ofrecerá los días y horarios disponibles para tu atención.",
  },
];

/**
 * Generates the official WhatsApp link according to user configuration
 */
export function buildWhatsAppUrl(
  phoneNumber: string,
  message: string = "Hola, quisiera realizar una consulta sobre los servicios de HUMANIDAR."
): string {
  // Clean phone number (leave digits only)
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, "");
  const encodedText = encodeURIComponent(message);
  
  if (!cleanNumber || cleanNumber.includes("X")) {
    // If placeholder, provide wa.me link with fallback alert or clean query
    return `https://wa.me/?text=${encodedText}`;
  }
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}
