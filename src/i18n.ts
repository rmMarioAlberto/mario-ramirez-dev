export type Lang = "es" | "en"

const es = {
  meta: {
    title: "Alberto Ramírez — Backend & IoT Developer | Querétaro, MX",
    description:
      "Backend Developer e Ingeniero IoT en Querétaro, México. Sistemas de telemetría en producción con NestJS, Node.js, Docker, MQTT y ESP32. ISO/IEC 27001 y cobertura >80%.",
    ogTitle: "Alberto Ramírez — Backend & IoT Developer",
    ogDescription:
      "Centro de control SIGNAL ROOM: telemetría IoT, clean architecture y seguridad. NestJS · MQTT · Docker · ESP32 · LoRaWAN · MIOTY.",
  },
  ui: {
    sysOnline: "SYS_ONLINE",
    signalRoom: "SIGNAL ROOM · a.ramírez",
    uptime: "99.9%",
    secTag: "SEC:27001",
    openToWork: "OPEN TO WORK",
    ctaConnect: "> conectar",
    ctaSignal: "ver señal ↓",
    footerStart: "// FIN DE TRANSMISIÓN",
    footerEnd: "ALBERTO RAMÍREZ ·",
    scanLabel: "SCAN: QUERÉTARO · MX",
  },
  hero: {
    identity: "> identidad.conf",
    firstName: "Alberto",
    lastName: "Ramírez",
    tagline: "Backend Developer · IoT Engineer · Querétaro, MX",
    blurb:
      "Sistemas que nunca duermen: telemetría MQTT en producción, clean architecture, ISO 27001 y cobertura de pruebas >80%. De la electrónica del ESP32 al despliegue en Docker.",
  },
  sectionTitles: {
    stack: "Stack",
    projects: "Mapa de señal",
    experience: "Trayectoria",
    achievements: "Señales captadas",
    education: "Educación",
    contact: "Contacto",
  },
  sectionTags: {
    stack: "// PANEL DE INSTRUMENTOS",
    projects: "// PROYECTOS · DEPLOYMENTS ACTIVOS",
    experience: "// ECG · 2025 — PRESENTE",
    achievements: "// LOGROS",
    education: "// UTEQ · QUERÉTARO",
    contact: "// CANAL ABIERTO",
  },
  stats: [
    { label: "TESTS BACKEND", value: "565+", suffix: "tests · CI/CD" },
    { label: "DISPOSITIVOS IoT", value: "50+", suffix: "en producción" },
    { label: "LATENCIA", value: "<1.5s", suffix: "ping telemetría" },
    { label: "SEGURIDAD", value: "ISO 27001", suffix: "certificado" },
    { label: "SEGURIDAD · APP", value: "OWASP ZAP", suffix: "+ SonarQube" },
  ],
  stack: [
    {
      cat: "BACKEND & FRAMEWORK",
      tech: [
        "NestJS",
        "Node.js",
        "Express",
        "Spring Boot",
                "Clean Architecture",
      ],
    },
    {
      cat: "CLOUD & DEVOPS",
      tech: [
        "Docker",
        "GitHub Actions",
        "SonarQube",
        "OWASP ZAP",
        "Redis",
        "Nginx",
        "Vercel",
      ],
    },
    {
      cat: "IOT & HARDWARE",
      tech: [
        "MQTT",
        "ESP32",
                "MIOTY",
        "Arduino",
        "Raspberry Pi",
        "OTA",
      ],
    },
    {
      cat: "FRONTEND",
      tech: [
        "React 19",
        "Next.js",
        "Angular 20",
        "React Native",
        "Tailwind v4",
              ],
    },
    {
      cat: "DATABASES",
      tech: ["PostgreSQL", "MySQL", "MariaDB", "MongoDB", "InfluxDB", "SQL"],
    },
    {
      cat: "AI / ML",
      tech: [
        "TensorFlow",
        "Keras",
                "LSTM / CNN",
        "Pandas",
                      ],
    },
    {
      cat: "LANGUAGES",
      tech: [
        "TypeScript",
        "JavaScript",
        "Python",
        "SQL",
        "Java",
        "Luau",
              ],
    },
  ],
  projects: [    {
      name: "GeoCESAR",
      domain: "IoT · Emergencias",
      role: "Full Stack · Founder",
      desc: "Plataforma unificada de respuesta a emergencias para la Sierra Queretana. Integra pulseras MIOTY, sensores ambientales y datos externos en un centro de mando (SOC). Propuesta IEEE Response Quest 2026.",
      stack: ["JHipster", "Spring Boot 3", "React SOC", "Flutter", "PostGIS"],
      metric: "IEEE Response Quest 2026 · en progreso",
    },    {
      name: "CEQ Marketplace",
      domain: "Enterprise · B2B",
      role: "Full Stack · Clúster Energético Qro",
      desc: "Marketplace privado Triple Hélice: empresas publican ofertas, demandan insumos y reciben matches. 565+ tests, mutación, contratos Pact y k6.",
      stack: ["NestJS", "React 19", "PostgreSQL", "Redis"],
      metric: "565+ tests · CI/CD",
    },    {
      name: "Linkore Solutions",
      domain: "Empresa · Software, IoT & Marketing",
      role: "Founder · Proyecto personal",
      desc: "Mi proyecto personal de empresa desarrolladora de software, IoT y marketing. Pipeline de 9 fases con clientes como ISMI, Barbacoa San Juanita, Chihuahua Mark y el sector inmobiliario.",
      stack: ["Next.js", "Tailwind", "Framer Motion", "Meta Ads"],
      metric: "9 fases · 4 clientes",
      url: "https://www.linkoresolutions.com/",
    },    {
      name: "IMOX Cloud",
      domain: "IoT · Telemetría",
      role: "Backend Lead · Yex Acoustics",
      desc: "Plataforma de monitoreo de calidad eléctrica en tiempo real. ESP32-S3 con display AMOLED, telemetría MQTT para 50+ dispositivos, OTA remoto y app móvil.",
      stack: ["NestJS", "MQTT", "ESP32", "Docker"],
      metric: "50+ devices · 1.5s ping",
    },    {
      name: "Fitness Gym",
      domain: "Web · Gestión",
      role: "Full Stack · Team Lead",
      desc: "Sistema integral de gimnasio: membresías, acceso por QR, facturación recurrente, inventario y dashboards en vivo con notificaciones WhatsApp.",
      stack: ["Angular 20", "NestJS", "PostgreSQL", "WebSockets"],
      metric: "150+ miembros · 80+ visitas/día",
    },    {
      name: "VozRural",
      domain: "AI · Salud",
      role: "Backend · Hackathon Troyano",
      desc: "Telemedicina multi-agente por voz/WhatsApp para zonas rurales: triage remoto con dos LLMs en pipeline y wearable GPS de prueba de concepto.",
      stack: ["Node.js", "ESP32", "WhatsApp"],
      metric: "2 LLMs · <1.5s latencia",
    },    {
      name: "Lettucecurity",
      domain: "AI · Agricultura",
      role: "Full Stack · Clean Architecture",
      desc: "Videovigilancia agrícola inteligente: CNN que detecta plagas y LSTM que predice variables ambientales, con backend en capas y llaves de seguridad.",
      stack: ["NestJS", "TensorFlow", "React", "MQTT"],
      metric: "85% CNN · 97% LSTM",
    },
  ],
  experience: [
    {
      role: "Full Stack Developer",
      company: "CEQ · Clúster Energético de Querétaro",
      period: "May 2026 — Presente",
      bullets: [
        "Marketplace/directorio B2B privado para los afiliados del clúster (Triple Hélice).",
        "Motor de búsqueda híbrido con Elasticsearch, chat encriptado y trazabilidad de vinculaciones.",
        "Bolsa de trabajo pública y reportes trimestrales de actividad.",
      ],
    },
    {
      role: "Full Stack Developer — Team Lead",
      company: "Fitness Gym",
      period: "Ene 2026 — Jun 2026",
      bullets: [
        "Sistema integral de gestión: membresías, acceso QR y reportes de ingresos diarios.",
        "Integración continua con unit testing y métricas de calidad >80% coverage.",
        "Prácticas de seguridad ISO/IEC 27001 en toda la arquitectura.",
      ],
    },
    {
      role: "Backend Developer — Team Lead",
      company: "Yex Acoustics · Imox Cloud",
      period: "Dic 2025 — Abr 2026",
      bullets: [
        "Liderazgo técnico de 5 devs en ciclo completo del sistema IoT Imox Cloud.",
        "Telemetría MQTT estable para 50+ dispositivos con pings de 1.5s.",
        "OWASP ZAP + SonarQube: hotspots críticos erradicados, coverage >80%.",
        "Caché Redis y canal de OTA remoto para firmware.",
      ],
    },
    {
      role: "Database & Power Platform Intern",
      company: "Atlas Copco Mexicana",
      period: "Mar 2025 — Mar 2026",
      bullets: [
        "Power Apps que sustituyeron papel: reportes de 30 min a aprobación casi instantánea.",
        "Arquitecturas sobre SharePoint con 5,000+ registros operativos.",
        "Microservicios Node.js con sincronización bidireccional con sistemas heredados.",
      ],
    },
  ],
  achievements: [
    {
      title: "Fraunhofer IIS — Alemania",
      desc: "Beca académica By Excellence. Estudio y aplicación de MIOTY (LPWAN) en el instituto de investigación IoT líder de Europa.",
    },
    {
      title: "NASA Space Apps Challenge",
      desc: "Participación destacada: red neuronal experimental en JavaScript plano para clasificar exoplanetas.",
    },
    {
      title: "Fin 4 All Hackathon",
      desc: "Participación destacada: backend con protocolos estandarizados de control de errores para flujos financieros.",
    },
    {
      title: "IEEE Student Branch UTEQ",
      desc: "Vicepresidente: gestión de recursos, estrategia de equipo y ejecución técnica de conferencias.",
    },
    {
      title: "ISO/IEC 27001",
      desc: "Certificación en gestión de seguridad de la información — aplicada en proyectos de producción.",
    },
  ],
  education: [
    {
      degree: "Ingeniería en Desarrollo y Gestión de Software",
      school: "Universidad Tecnológica de Querétaro (UTEQ)",
      period: "Sep 2023 — Presente",
      note: "En curso · 8° cuatrimestre",
    },
    {
      degree: "TSU en TI — Desarrollo de Software Multiplataforma",
      school: "Universidad Tecnológica de Querétaro (UTEQ)",
      period: "Sep 2021 — Sep 2023",
      note: "Concluido",
    },
  ],
  contactLabels: {
    email: "email",
    github: "github",
    linkedin: "linkedin",
    cv: "cv",
    location: "location",
  },
  terminal: {
    label: "alberto@dev:~",
    command: "contact --connect",
    cta: "iniciar transmisión",
    note: "Respuesta en menos de 24h · Querétaro, México (CST)",
  },
}

const en: typeof es = {
  meta: {
    title: "Alberto Ramírez — Backend & IoT Developer | Querétaro, MX",
    description:
      "Backend Developer and IoT Engineer in Querétaro, Mexico. Production telemetry systems with NestJS, Node.js, Docker, MQTT and ESP32. ISO/IEC 27001 and >80% test coverage.",
    ogTitle: "Alberto Ramírez — Backend & IoT Developer",
    ogDescription:
      "SIGNAL ROOM control center: IoT telemetry, clean architecture and security. NestJS · MQTT · Docker · ESP32 · LoRaWAN · MIOTY.",
  },
  ui: {
    sysOnline: "SYS_ONLINE",
    signalRoom: "SIGNAL ROOM · a.ramírez",
    uptime: "99.9%",
    secTag: "SEC:27001",
    openToWork: "OPEN TO WORK",
    ctaConnect: "> connect",
    ctaSignal: "view signal ↓",
    footerStart: "// END OF TRANSMISSION",
    footerEnd: "ALBERTO RAMÍREZ ·",
    scanLabel: "SCAN: QUERÉTARO · MX",
  },
  hero: {
    identity: "> identity.conf",
    firstName: "Alberto",
    lastName: "Ramírez",
    tagline: "Backend Developer · IoT Engineer · Querétaro, MX",
    blurb:
      "Systems that never sleep: production MQTT telemetry, clean architecture, ISO 27001 and >80% test coverage. From ESP32 electronics to Docker deployment.",
  },
  sectionTitles: {
    stack: "Stack",
    projects: "Signal map",
    experience: "Track record",
    achievements: "Signals captured",
    education: "Education",
    contact: "Contact",
  },
  sectionTags: {
    stack: "// INSTRUMENT PANEL",
    projects: "// PROJECTS · ACTIVE DEPLOYMENTS",
    experience: "// ECG · 2025 — PRESENT",
    achievements: "// ACHIEVEMENTS",
    education: "// UTEQ · QUERÉTARO",
    contact: "// OPEN CHANNEL",
  },
  stats: [
    { label: "BACKEND TESTS", value: "565+", suffix: "tests · CI/CD" },
    { label: "IOT DEVICES", value: "50+", suffix: "in production" },
    { label: "LATENCY", value: "<1.5s", suffix: "telemetry ping" },
    { label: "SECURITY", value: "ISO 27001", suffix: "certified" },
    { label: "SECURITY · APP", value: "OWASP ZAP", suffix: "+ SonarQube" },
  ],
  stack: [
    {
      cat: "BACKEND & FRAMEWORK",
      tech: [
        "NestJS",
        "Node.js",
        "Express",
        "Spring Boot",
                "Clean Architecture",
      ],
    },
    {
      cat: "CLOUD & DEVOPS",
      tech: [
        "Docker",
        "GitHub Actions",
        "SonarQube",
        "OWASP ZAP",
        "Redis",
        "Nginx",
        "Vercel",
      ],
    },
    {
      cat: "IOT & HARDWARE",
      tech: [
        "MQTT",
        "ESP32",
                "MIOTY",
        "Arduino",
        "Raspberry Pi",
        "OTA",
      ],
    },
    {
      cat: "FRONTEND",
      tech: [
        "React 19",
        "Next.js",
        "Angular 20",
        "React Native",
        "Tailwind v4",
              ],
    },
    {
      cat: "DATABASES",
      tech: ["PostgreSQL", "MySQL", "MariaDB", "MongoDB", "InfluxDB", "SQL"],
    },
    {
      cat: "AI / ML",
      tech: [
        "TensorFlow",
        "Keras",
                "LSTM / CNN",
        "Pandas",
                      ],
    },
    {
      cat: "LANGUAGES",
      tech: [
        "TypeScript",
        "JavaScript",
        "Python",
        "SQL",
        "Java",
        "Luau",
              ],
    },
  ],
  projects: [    {
      name: "GeoCESAR",
      domain: "IoT · Emergency",
      role: "Full Stack · Founder",
      desc: "Unified emergency response platform for the Sierra Queretana. Integrates MIOTY bracelets, environmental sensors and external data into a command center (SOC). IEEE Response Quest 2026 proposal.",
      stack: ["JHipster", "Spring Boot 3", "React SOC", "Flutter", "PostGIS"],
      metric: "IEEE Response Quest 2026 · in progress",
    },    {
      name: "CEQ Marketplace",
      domain: "Enterprise · B2B",
      role: "Full Stack · Querétaro Energy Cluster",
      desc: "Private Triple Helix marketplace: companies publish offers, source supplies and get matched. 565+ tests, mutation testing, Pact contracts and k6.",
      stack: ["NestJS", "React 19", "PostgreSQL", "Redis"],
      metric: "565+ tests · CI/CD",
    },    {
      name: "Linkore Solutions",
      domain: "Company · Software, IoT & Marketing",
      role: "Founder · Personal project",
      desc: "My personal company building software, IoT and marketing solutions. 9-phase pipeline with clients like ISMI, Barbacoa San Juanita, Chihuahua Mark and real estate.",
      stack: ["Next.js", "Tailwind", "Framer Motion", "Meta Ads"],
      metric: "9 phases · 4 clients",
      url: "https://www.linkoresolutions.com/",
    },    {
      name: "IMOX Cloud",
      domain: "IoT · Telemetry",
      role: "Backend Lead · Yex Acoustics",
      desc: "Real-time electrical power-quality monitoring platform. ESP32-S3 with AMOLED display, MQTT telemetry for 50+ devices, remote OTA and mobile app.",
      stack: ["NestJS", "MQTT", "ESP32", "Docker"],
      metric: "50+ devices · 1.5s ping",
    },    {
      name: "Fitness Gym",
      domain: "Web · Management",
      role: "Full Stack · Team Lead",
      desc: "Complete gym management system: memberships, QR access, recurring billing, inventory and live dashboards with WhatsApp notifications.",
      stack: ["Angular 20", "NestJS", "PostgreSQL", "WebSockets"],
      metric: "150+ members · 80+ visits/day",
    },    {
      name: "VozRural",
      domain: "AI · Health",
      role: "Backend · Troyano Hackathon",
      desc: "Multi-agent telemedicine by voice/WhatsApp for rural areas: remote triage with two LLMs in pipeline and GPS wearable PoC.",
      stack: ["Node.js", "ESP32", "WhatsApp"],
      metric: "2 LLMs · <1.5s latency",
    },    {
      name: "Lettucecurity",
      domain: "AI · Agriculture",
      role: "Full Stack · Clean Architecture",
      desc: "Intelligent agricultural video surveillance: CNN detecting pests and LSTM forecasting environmental variables, with layered backend and key exchange.",
      stack: ["NestJS", "TensorFlow", "React", "MQTT"],
      metric: "85% CNN · 97% LSTM",
    },
  ],
  experience: [
    {
      role: "Full Stack Developer",
      company: "CEQ · Querétaro Energy Cluster",
      period: "May 2026 — Present",
      bullets: [
        "Private B2B marketplace/directory for cluster members (Triple Helix).",
        "Hybrid search engine with Elasticsearch, encrypted chat and link traceability.",
        "Public job board and quarterly activity reports.",
      ],
    },
    {
      role: "Full Stack Developer — Team Lead",
      company: "Fitness Gym",
      period: "Jan 2026 — Jun 2026",
      bullets: [
        "Complete management system: memberships, QR access and daily revenue reports.",
        "Continuous integration with unit testing and >80% code coverage.",
        "ISO/IEC 27001 security practices across the whole architecture.",
      ],
    },
    {
      role: "Backend Developer — Team Lead",
      company: "Yex Acoustics · Imox Cloud",
      period: "Dec 2025 — Apr 2026",
      bullets: [
        "Technical leadership of 5 devs across the full Imox Cloud IoT lifecycle.",
        "Stable MQTT telemetry for 50+ devices with 1.5s pings.",
        "OWASP ZAP + SonarQube: critical security hotspots removed, >80% coverage.",
        "Redis caching and remote OTA channel for firmware.",
      ],
    },
    {
      role: "Database & Power Platform Intern",
      company: "Atlas Copco Mexicana",
      period: "Mar 2025 — Mar 2026",
      bullets: [
        "Power Apps that replaced paper: reports from 30 min to near-instant approval.",
        "SharePoint data architectures handling 5,000+ operational records.",
        "Modular Node.js microservices with bidirectional sync with legacy systems.",
      ],
    },
  ],
  achievements: [
    {
      title: "Fraunhofer IIS — Germany",
      desc: "By Excellence academic scholarship. Studying and applying MIOTY (LPWAN) at Europe's leading IoT research institute.",
    },
    {
      title: "NASA Space Apps Challenge",
      desc: "Outstanding participation: experimental neural network in plain JavaScript to classify exoplanets.",
    },
    {
      title: "Fin 4 All Hackathon",
      desc: "Outstanding participation: backend with standardized error-control protocols for financial flows.",
    },
    {
      title: "IEEE Student Branch UTEQ",
      desc: "Vice President: resource management, team strategy and technical execution of conferences.",
    },
    {
      title: "ISO/IEC 27001",
      desc: "Information security management certification — applied in production projects.",
    },
  ],
  education: [
    {
      degree: "B.Eng. Software Development & Management",
      school: "Universidad Tecnológica de Querétaro (UTEQ)",
      period: "Sep 2023 — Present",
      note: "In progress · 8th term",
    },
    {
      degree: "TSU in IT — Cross-Platform Software Development",
      school: "Universidad Tecnológica de Querétaro (UTEQ)",
      period: "Sep 2021 — Sep 2023",
      note: "Completed",
    },
  ],
  contactLabels: {
    email: "email",
    github: "github",
    linkedin: "linkedin",
    cv: "cv",
    location: "location",
  },
  terminal: {
    label: "alberto@dev:~",
    command: "contact --connect",
    cta: "start transmission",
    note: "Replies within 24h · Querétaro, Mexico (CST)",
  },
}

export type Translations = typeof es
export const translations: Record<Lang, Translations> = { es, en }
