// FAQ data for different pages - SEO optimized content (Platform-focused)
// Bilingual: English + Spanish

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BilingualFAQItem {
  question: string;
  answer: string;
  questionEs: string;
  answerEs: string;
}

export const getLocalizedFAQs = (faqs: BilingualFAQItem[], lang: string): FAQItem[] => {
  return faqs.map(faq => ({
    question: lang === 'es' ? faq.questionEs : faq.question,
    answer: lang === 'es' ? faq.answerEs : faq.answer,
  }));
};

export const homepageFAQs: BilingualFAQItem[] = [
  {
    question: "What is COIREA and how does it help organizations?",
    answer: "COIREA is an Organizational Intelligence Platform that helps organizations achieve their goals in a less extractive and more regenerative way. It measures systemic health, aligns governance, and structures execution so organizations can reach strategic objectives without depleting people, culture, or long-term capacity.",
    questionEs: "¿Qué es COIREA y cómo ayuda a las organizaciones?",
    answerEs: "COIREA es una Plataforma de Inteligencia Organizacional que ayuda a las organizaciones a alcanzar sus objetivos de manera menos extractiva y más regenerativa. Mide la salud sistémica, alinea la gobernanza y estructura la ejecución para que las organizaciones logren objetivos estratégicos sin agotar a las personas, la cultura o la capacidad a largo plazo."
  },
  {
    question: "How does the COIREA platform work?",
    answer: "COIREA collects signals across 5 pillars — Purpose & Culture, Leadership, Collaboration, Well-Being, and Strategy. GiA, our trained organizational AI, interprets cross-pillar patterns within your own system data to surface structural tensions, execution blockers, and early risk indicators before they impact results.",
    questionEs: "¿Cómo funciona la plataforma COIREA?",
    answerEs: "COIREA recopila señales a través de 5 pilares — Propósito y Cultura, Liderazgo, Colaboración, Bienestar y Estrategia. GiA, nuestra IA organizacional entrenada, interpreta patrones entre pilares dentro de los datos de tu propio sistema para detectar tensiones estructurales, bloqueos de ejecución e indicadores de riesgo temprano antes de que impacten los resultados."
  },
  {
    question: "What types of organizations benefit most from COIREA?",
    answer: "COIREA is designed for founder-led or mission-driven organizations of 15–300 people experiencing growth complexity or structural tension. It's ideal for companies shifting from hierarchical management to distributed leadership, and NGOs transitioning from volunteer energy to structured stewardship.",
    questionEs: "¿Qué tipos de organizaciones se benefician más de COIREA?",
    answerEs: "COIREA está diseñada para organizaciones lideradas por fundadores o con propósito de 15 a 300 personas que experimentan complejidad de crecimiento o tensión estructural. Es ideal para empresas que pasan de gestión jerárquica a liderazgo distribuido, y ONGs que transitan de energía voluntaria a gestión estructurada."
  },
  {
    question: "What is GiA and how is it different from a chatbot?",
    answer: "GiA (Guided Intelligence for Alignment) is a trained organizational pattern-recognition engine — not a generative chatbot. It learns exclusively from your internal system data, detects cross-pillar tensions, surfaces recurring behavioral and structural patterns, and generates contextual suggestions tied to specific governance or execution spaces.",
    questionEs: "¿Qué es GiA y en qué se diferencia de un chatbot?",
    answerEs: "GiA (Inteligencia Guiada para la Alineación) es un motor de reconocimiento de patrones organizacionales entrenado — no un chatbot generativo. Aprende exclusivamente de los datos internos de tu sistema, detecta tensiones entre pilares, identifica patrones conductuales y estructurales recurrentes, y genera sugerencias contextuales vinculadas a espacios específicos de gobernanza o ejecución."
  },
  {
    question: "Can COIREA work with remote or hybrid teams?",
    answer: "Absolutely. COIREA is designed for modern distributed work. It collects signals digitally across locations and time zones, providing unified insights regardless of where your team members are based. The platform's real-time pulse system works seamlessly for hybrid and fully remote organizations.",
    questionEs: "¿Puede COIREA funcionar con equipos remotos o híbridos?",
    answerEs: "Absolutamente. COIREA está diseñada para el trabajo distribuido moderno. Recopila señales digitalmente a través de ubicaciones y zonas horarias, proporcionando insights unificados sin importar dónde se encuentren los miembros del equipo. El sistema de pulsos en tiempo real funciona perfectamente para organizaciones híbridas y completamente remotas."
  }
];

export const offeringsFAQs: BilingualFAQItem[] = [
  {
    question: "What features are included in the COIREA platform?",
    answer: "The platform includes the Organizational Health Dashboard for real-time visibility, AI-Powered Insights for intelligent analysis, Culture & Leadership Metrics for tracking effectiveness, Well-Being Signals for burnout prevention, Collaboration Network visualization, and SDGs Reporting to measure social impact.",
    questionEs: "¿Qué características incluye la plataforma COIREA?",
    answerEs: "La plataforma incluye el Dashboard de Salud Organizacional para visibilidad en tiempo real, Insights impulsados por IA para análisis inteligente, Métricas de Cultura y Liderazgo para rastrear efectividad, Señales de Bienestar para prevención de burnout, visualización de Red de Colaboración, y Reportes ODS para medir impacto social."
  },
  {
    question: "What is the COIREA AI Agent (GiA)?",
    answer: "GiA is the trained organizational AI layer of COIREA. It interprets signals across leadership, culture, collaboration, well-being, and strategy within your own system data. It surfaces structural tensions, execution blockers, and early risk indicators — it does not pull generic advice from external models.",
    questionEs: "¿Qué es el Agente de IA de COIREA (GiA)?",
    answerEs: "GiA es la capa de IA organizacional entrenada de COIREA. Interpreta señales a través de liderazgo, cultura, colaboración, bienestar y estrategia dentro de los datos de tu propio sistema. Detecta tensiones estructurales, bloqueos de ejecución e indicadores de riesgo temprano — no extrae consejos genéricos de modelos externos."
  },
  {
    question: "How does the Early Access program work?",
    answer: "Early Access members get priority onboarding, founding member benefits, and the opportunity to shape platform development. You'll work directly with our team to implement COIREA in your organization while providing feedback that influences our roadmap.",
    questionEs: "¿Cómo funciona el programa de Acceso Anticipado?",
    answerEs: "Los miembros de Acceso Anticipado obtienen onboarding prioritario, beneficios de miembro fundador y la oportunidad de dar forma al desarrollo de la plataforma. Trabajarás directamente con nuestro equipo para implementar COIREA en tu organización mientras proporcionas feedback que influye en nuestro roadmap."
  },
  {
    question: "What does 'regenerative' mean in COIREA?",
    answer: "Regenerative means the system strengthens its internal coherence over time. Learning loops are embedded, innovation capacity increases without depleting people, and burnout and strategic drift are detected early. Regeneration in COIREA is measurable — through OVI progression, adaptive capacity, and wellbeing signal stability.",
    questionEs: "¿Qué significa 'regenerativo' en COIREA?",
    answerEs: "Regenerativo significa que el sistema fortalece su coherencia interna con el tiempo. Los ciclos de aprendizaje están integrados, la capacidad de innovación aumenta sin agotar a las personas, y el burnout y la deriva estratégica se detectan temprano. La regeneración en COIREA es medible — a través de la progresión del OVI, la capacidad adaptativa y la estabilidad de señales de bienestar."
  },
  {
    question: "How does COIREA integrate with existing tools?",
    answer: "Our roadmap includes API integrations with HR systems, communication tools, and performance platforms. Currently, COIREA operates as a standalone intelligence layer that can complement your existing tech stack without requiring major changes to current workflows.",
    questionEs: "¿Cómo se integra COIREA con herramientas existentes?",
    answerEs: "Nuestro roadmap incluye integraciones API con sistemas de RR.HH., herramientas de comunicación y plataformas de rendimiento. Actualmente, COIREA opera como una capa de inteligencia independiente que complementa tu stack tecnológico existente sin requerir cambios importantes en los flujos de trabajo actuales."
  }
];

export const aboutFAQs: BilingualFAQItem[] = [
  {
    question: "What is COIREA's mission?",
    answer: "COIREA exists to help organizations achieve their goals in a less extractive and more regenerative way. We measure systemic health, align governance, and structure execution so organizations can reach strategic objectives without depleting people, culture, or long-term capacity.",
    questionEs: "¿Cuál es la misión de COIREA?",
    answerEs: "COIREA existe para ayudar a las organizaciones a alcanzar sus objetivos de manera menos extractiva y más regenerativa. Medimos la salud sistémica, alineamos la gobernanza y estructuramos la ejecución para que las organizaciones logren objetivos estratégicos sin agotar a las personas, la cultura o la capacidad a largo plazo."
  },
  {
    question: "What makes organizational intelligence different from people analytics?",
    answer: "People analytics focuses on workforce data. Organizational intelligence goes deeper — it interprets the interconnected signals of culture, leadership behavior, team dynamics, and well-being to understand how the entire organizational system functions and evolves.",
    questionEs: "¿Qué diferencia la inteligencia organizacional de la analítica de personas?",
    answerEs: "La analítica de personas se enfoca en datos de la fuerza laboral. La inteligencia organizacional va más profundo — interpreta las señales interconectadas de cultura, comportamiento de liderazgo, dinámicas de equipo y bienestar para entender cómo funciona y evoluciona todo el sistema organizacional."
  },
  {
    question: "What is COIREA's team background?",
    answer: "COIREA is led by experienced organizational transformation specialists who combine deep business expertise with human-centered design. Our team brings decades of experience in leadership development, culture change, and building technology for organizational health.",
    questionEs: "¿Cuál es la experiencia del equipo de COIREA?",
    answerEs: "COIREA está liderada por especialistas experimentados en transformación organizacional que combinan profunda experiencia empresarial con diseño centrado en el ser humano. Nuestro equipo aporta décadas de experiencia en desarrollo de liderazgo, cambio cultural y construcción de tecnología para la salud organizacional."
  },
  {
    question: "How does COIREA address burnout and well-being?",
    answer: "Well-Being is one of our 5 core pillars, not an afterthought. The platform includes a Burnout Early Warning Index that identifies risk signals before they impact performance and retention. We track energy levels, stress patterns, and resilience indicators in real-time.",
    questionEs: "¿Cómo aborda COIREA el burnout y el bienestar?",
    answerEs: "El Bienestar es uno de nuestros 5 pilares fundamentales, no algo secundario. La plataforma incluye un Índice de Alerta Temprana de Burnout que identifica señales de riesgo antes de que impacten el rendimiento y la retención. Rastreamos niveles de energía, patrones de estrés e indicadores de resiliencia en tiempo real."
  },
  {
    question: "What is COIREA's connection to Latin America?",
    answer: "Through Raíces Latinas, our social impact arm, COIREA enables companies to convert organizational improvements into community impact in Latin America. We support initiatives in community regeneration, women-led leadership, and organizational strengthening for NGOs and social enterprises.",
    questionEs: "¿Cuál es la conexión de COIREA con América Latina?",
    answerEs: "A través de Raíces Latinas, nuestro brazo de impacto social, COIREA permite a las empresas convertir mejoras organizacionales en impacto comunitario en América Latina. Apoyamos iniciativas de regeneración comunitaria, liderazgo femenino y fortalecimiento organizacional para ONGs y empresas sociales."
  }
];

export const toolsFAQs: BilingualFAQItem[] = [
  {
    question: "What is the Organizational Health Scanner?",
    answer: "The Organizational Health Scanner is a comprehensive assessment tool that evaluates your organization across COIREA's 5-pillar framework. It provides immediate insights into Purpose clarity, Leadership effectiveness, Collaboration health, Well-being indicators, and Strategic alignment.",
    questionEs: "¿Qué es el Scanner de Salud Organizacional?",
    answerEs: "El Scanner de Salud Organizacional es una herramienta de evaluación integral que evalúa tu organización a través del marco de 5 pilares de COIREA. Proporciona insights inmediatos sobre claridad de Propósito, efectividad de Liderazgo, salud de Colaboración, indicadores de Bienestar y alineación Estratégica."
  },
  {
    question: "How long does the assessment take and what do I get?",
    answer: "The complete assessment takes 15-20 minutes and provides immediate insights plus a detailed report. You'll receive scores for each pillar, specific recommendations for improvement, and guidance on next steps. The assessment is designed to give actionable insights, not just numbers.",
    questionEs: "¿Cuánto tiempo toma la evaluación y qué obtengo?",
    answerEs: "La evaluación completa toma 15-20 minutos y proporciona insights inmediatos más un reporte detallado. Recibirás puntuaciones para cada pilar, recomendaciones específicas de mejora y guía sobre los próximos pasos. La evaluación está diseñada para dar insights accionables, no solo números."
  },
  {
    question: "Is the Organizational Health Scanner free?",
    answer: "Yes, the basic assessment is completely free and provides valuable insights for any organization. It's our way of helping purpose-driven leaders understand their organizational health before committing to the full platform.",
    questionEs: "¿El Scanner de Salud Organizacional es gratuito?",
    answerEs: "Sí, la evaluación básica es completamente gratuita y proporciona insights valiosos para cualquier organización. Es nuestra forma de ayudar a líderes con propósito a entender su salud organizacional antes de comprometerse con la plataforma completa."
  },
  {
    question: "How accurate is the assessment for different organization sizes?",
    answer: "The assessment is calibrated for organizations from startup to enterprise level. Questions and scoring adjust for different contexts, whether you're a 5-person team or 500+ employee organization. The framework principles remain consistent while recommendations adapt to your scale.",
    questionEs: "¿Qué tan precisa es la evaluación para diferentes tamaños de organización?",
    answerEs: "La evaluación está calibrada para organizaciones desde startups hasta nivel empresarial. Las preguntas y puntuaciones se ajustan a diferentes contextos, ya sea un equipo de 5 personas o una organización de más de 500 empleados. Los principios del marco se mantienen consistentes mientras las recomendaciones se adaptan a tu escala."
  },
  {
    question: "How does the assessment connect to the full COIREA platform?",
    answer: "The assessment provides a snapshot of organizational health. The full COIREA platform offers continuous measurement, AI-powered insights, trend tracking, and predictive capabilities. Assessment results can serve as a baseline for tracking progress once you join the platform.",
    questionEs: "¿Cómo se conecta la evaluación con la plataforma completa de COIREA?",
    answerEs: "La evaluación proporciona una instantánea de la salud organizacional. La plataforma completa de COIREA ofrece medición continua, insights impulsados por IA, seguimiento de tendencias y capacidades predictivas. Los resultados de la evaluación pueden servir como línea base para rastrear el progreso una vez que te unes a la plataforma."
  }
];
