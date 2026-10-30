export type Lang = "es" | "en"

const es = {
  meta: {
    title: "Alberto Ramírez — Backend & IoT Developer | Querétaro, MX",
    description:
      "Desarrollador backend e IoT en Querétaro. Experiencia con NestJS, MQTT, servidores físicos, despliegues en VPS y MIOTY. Disponible para estadía profesional de enero a abril de 2027.",
    ogTitle: "Alberto Ramírez — Backend & IoT Developer",
    ogDescription:
      "SIGNAL ROOM: proyectos de backend e IoT, despliegues con NestJS, MQTT, Docker y MIOTY.",
  },
  ui: {
    sysOnline: "SYS_ONLINE",
    signalRoom: "SIGNAL ROOM · a.ramírez",
    availability: "ESTADÍA · ENE–ABR 2027",
    secTag: "SEC:27001",
    openToWork: "DISPONIBLE · ESTADÍA PROFESIONAL",
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
    tagline: "Backend & IoT Developer · Querétaro, MX",
    blurb:
      "Desarrollo backend y sistemas conectados, desde APIs hasta telemetría MQTT en dispositivos IoT. Busco una estadía profesional de enero a abril de 2027.",
  },
  sectionTitles: {
    stack: "Stack",
    projects: "Mapa de señal",
    experience: "Trayectoria",
    achievements: "Certificación",
    education: "Educación",
    contact: "Contacto",
  },
  sectionTags: {
    stack: "// PANEL DE INSTRUMENTOS",
    projects: "// PROYECTOS SELECCIONADOS",
    experience: "// EXPERIENCIA · 2025 — PRESENTE",
    achievements: "// CREDENCIALES",
    education: "// UTEQ · MIOTY · QUERÉTARO",
    contact: "// CANAL ABIERTO",
  },
  stats: [
    { label: "MIEMBROS", value: "150+", suffix: "sistema · Fitness Gym" },
    { label: "EQUIPO", value: "4", suffix: "personas · CEQ Marketplace" },
    { label: "INTERVALO MQTT", value: "1.5 s", suffix: "telemetría · Imox Cloud" },
    { label: "PROMEDIO UTEQ", value: "9.54", suffix: "sobre 10.0" },
  ],
  stack: [
    { cat: "BACKEND", tech: ["TypeScript", "Node.js", "NestJS", "Java", "Spring Boot"] },
    { cat: "IOT & HARDWARE", tech: ["MIOTY", "MQTT", "ESP32", "OTA", "KiCad"] },
    { cat: "DATA", tech: ["PostgreSQL", "PostGIS", "Redis", "SQL"] },
    { cat: "FRONTEND", tech: ["React", "React Native", "Angular"] },
    { cat: "DELIVERY & QUALITY", tech: ["Docker", "GitHub Actions", "Git", "Jest"] },
  ],
  projects: [
    {
      name: "CEQ Marketplace",
      domain: "Producción · B2B",
      role: "Líder técnico · contrato vía Linkore Solutions",
      desc: "Marketplace B2B para el Clúster Energético de Querétaro. Lideré un equipo de cuatro y desarrollé módulos full stack en una plataforma desplegada en VPS. La landing es pública; las funciones del marketplace requieren autenticación.",
      stack: ["NestJS", "React", "PostgreSQL", "Redis", "VPS"],
      metric: "equipo de 4 · despliegue en VPS",
      url: "https://ceqmarketplace.mx/",
    },
    {
      name: "IMOX Cloud",
      domain: "Producción · IoT",
      role: "Backend · Yex Acoustics",
      desc: "Backend de telemetría MQTT para calidad eléctrica, desplegado con Docker en un servidor físico de recursos limitados. Atendió más de 50 dispositivos concurrentes con intervalos de 1.5 segundos; la validación de timestamps ayudó a evitar falsas desconexiones.",
      stack: ["NestJS", "MQTT", "Redis", "Docker", "OTA"],
      metric: "validación de timestamps · OTA",
    },
    {
      name: "Fitness Gym",
      domain: "Producción · Serverless",
      role: "Desarrollador full stack · freelance",
      desc: "Sistema de gestión para un gimnasio de más de 150 miembros: membresías, acceso con QR, inventario y reportes de ingresos.",
      stack: ["Angular", "NestJS", "PostgreSQL", "Serverless"],
      metric: "150+ miembros",
      url: "https://www.fitnessgymqro.com/",
    },
    {
      name: "GeoCESAR",
      domain: "En desarrollo · respuesta rural",
      role: "Proyecto personal · en desarrollo",
      desc: "Plataforma en desarrollo para emergencias rurales que busca conectar solicitudes de ayuda con equipos de respuesta, compartir la ubicación de las personas y facilitar el seguimiento de cada incidente.",
      stack: ["Java", "Spring Boot", "React", "React Native", "MIOTY", "PostGIS"],
      metric: "alertas · ubicación · seguimiento",
    },
  ],
  experience: [
    {
      role: "Líder técnico · Desarrollador full stack",
      company: "CEQ · Clúster Energético de Querétaro",
      period: "May 2026 — Presente",
      bullets: [
        "Contrato vía Linkore Solutions; lideré un equipo de cuatro personas para desarrollar y desplegar el marketplace B2B en VPS.",
        "Desarrollé frontend y backend, establecí controles de calidad en GitHub y negocié el alcance técnico con el cliente.",
      ],
    },
    {
      role: "Desarrollador full stack · freelance",
      company: "Fitness Gym",
      period: "Ene 2026 — Jun 2026",
      bullets: [
        "Desarrollé y desplegué un sistema serverless con membresías, acceso QR, inventario y reportes para 150+ miembros.",
      ],
    },
    {
      role: "Desarrollador backend · freelance",
      company: "Yex Acoustics · Imox Cloud",
      period: "Dic 2025 — Abr 2026",
      bullets: [
        "Desplegué NestJS, MQTT y Redis con Docker en servidor físico para telemetría de calidad eléctrica.",
        "Corregí falsas alertas de desconexión validando timestamps e implementé actualizaciones OTA y caché Redis.",
      ],
    },
    {
      role: "Practicante de bases de datos y Power Platform",
      company: "Atlas Copco Mexicana",
      period: "Mar 2025 — Mar 2026",
      bullets: [
        "Digitalicé reportes de mantenimiento con aprobaciones manuales de 30 min en más de 10 operaciones diarias.",
        "Construí servicios Node.js para sincronizar datos entre Microsoft Power Platform y sistemas heredados.",
      ],
    },
  ],
  achievements: [
    {
      title: "ISO/IEC 27001",
      desc: "Certificación profesional en seguridad de la información · Abr 2026.",
    },
  ],
  education: [
    {
      degree: "Ingeniería en Desarrollo y Gestión de Software",
      school: "Universidad Tecnológica de Querétaro (UTEQ)",
      period: "Sep 2023 — Presente",
      note: "Graduación prevista · Abr 2027 · GPA 9.54/10",
    },
    {
      degree: "TSU en TI — Desarrollo de Software Multiplataforma",
      school: "Universidad Tecnológica de Querétaro (UTEQ)",
      period: "Sep 2021 — Sep 2023",
      note: "Concluido",
    },
    {
      degree: "Intercambio académico · MIOTY y endpoints de bajo consumo",
      school: "Fraunhofer IIS · Núremberg, Alemania",
      period: "Sep 2026 — Dic 2026",
      note: "Diseño de PCB con KiCad",
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
    note: "Querétaro, México · Disponible para estadía ene–abr 2027",
  },
}

const en: typeof es = {
  meta: {
    title: "Alberto Ramírez — Backend & IoT Developer | Querétaro, MX",
    description:
      "Backend and IoT developer in Querétaro, Mexico. Experience with NestJS, MQTT, physical servers, VPS deployments and MIOTY. Available for a professional internship from January to April 2027.",
    ogTitle: "Alberto Ramírez — Backend & IoT Developer",
    ogDescription:
      "SIGNAL ROOM: backend and IoT projects deployed with NestJS, MQTT, Docker and MIOTY.",
  },
  ui: {
    sysOnline: "SYS_ONLINE",
    signalRoom: "SIGNAL ROOM · a.ramírez",
    availability: "INTERNSHIP · JAN–APR 2027",
    secTag: "SEC:27001",
    openToWork: "AVAILABLE · INTERNSHIP JAN–APR 2027",
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
    tagline: "Backend & IoT Developer · Querétaro, MX",
    blurb:
      "I build backend services and connected systems, from APIs to MQTT telemetry on IoT devices. Seeking a professional internship from January to April 2027.",
  },
  sectionTitles: {
    stack: "Stack",
    projects: "Signal map",
    experience: "Track record",
    achievements: "Certification",
    education: "Education",
    contact: "Contact",
  },
  sectionTags: {
    stack: "// INSTRUMENT PANEL",
    projects: "// SELECTED PROJECTS",
    experience: "// EXPERIENCE · 2025 — PRESENT",
    achievements: "// CREDENTIAL",
    education: "// UTEQ · MIOTY · QUERÉTARO",
    contact: "// OPEN CHANNEL",
  },
  stats: [
    { label: "MEMBERS", value: "150+", suffix: "system · Fitness Gym" },
    { label: "TEAM", value: "4", suffix: "people · CEQ Marketplace" },
    { label: "MQTT INTERVAL", value: "1.5 s", suffix: "telemetry · Imox Cloud" },
    { label: "UTEQ GPA", value: "9.54", suffix: "out of 10.0" },
  ],
  stack: [
    { cat: "BACKEND", tech: ["TypeScript", "Node.js", "NestJS", "Java", "Spring Boot"] },
    { cat: "IOT & HARDWARE", tech: ["MIOTY", "MQTT", "ESP32", "OTA", "KiCad"] },
    { cat: "DATA", tech: ["PostgreSQL", "PostGIS", "Redis", "SQL"] },
    { cat: "FRONTEND", tech: ["React", "React Native", "Angular"] },
    { cat: "DELIVERY & QUALITY", tech: ["Docker", "GitHub Actions", "Git", "Jest"] },
  ],
  projects: [
    {
      name: "CEQ Marketplace",
      domain: "Production · B2B",
      role: "Technical Lead · contract via Linkore Solutions",
      desc: "B2B marketplace for the Querétaro Energy Cluster. Led a four-person team and built full-stack modules for a VPS-deployed platform. The landing page is public; marketplace features require authentication.",
      stack: ["NestJS", "React", "PostgreSQL", "Redis", "VPS"],
      metric: "four-person team · VPS deployment",
      url: "https://ceqmarketplace.mx/",
    },
    {
      name: "IMOX Cloud",
      domain: "Production · IoT",
      role: "Backend · Yex Acoustics",
      desc: "MQTT telemetry backend for electrical power quality, deployed with Docker on a resource-constrained physical server. Supported 50+ concurrent devices at 1.5-second intervals; timestamp validation helped prevent false disconnect alerts.",
      stack: ["NestJS", "MQTT", "Redis", "Docker", "OTA"],
      metric: "timestamp validation · OTA",
    },
    {
      name: "Fitness Gym",
      domain: "Production · Serverless",
      role: "Full-Stack Developer · freelance",
      desc: "Management system for a 150+ member gym: memberships, QR access, inventory, and revenue reports.",
      stack: ["Angular", "NestJS", "PostgreSQL", "Serverless"],
      metric: "150+ members",
      url: "https://www.fitnessgymqro.com/",
    },
    {
      name: "GeoCESAR",
      domain: "In Development · Rural Response",
      role: "Personal project · in development",
      desc: "Rural emergency-response platform designed to connect requests for help with response teams, share people’s locations, and support follow-up on each incident.",
      stack: ["Java", "Spring Boot", "React", "React Native", "MIOTY", "PostGIS"],
      metric: "alerts · location · follow-up",
    },
  ],
  experience: [
    {
      role: "Technical Lead & Full-Stack Developer",
      company: "CEQ · Querétaro Energy Cluster",
      period: "May 2026 — Present",
      bullets: [
        "Contracted through Linkore Solutions; led a four-person team building and deploying the B2B marketplace on a VPS.",
        "Built frontend and backend modules, introduced GitHub quality controls, and negotiated technical scope with the client.",
      ],
    },
    {
      role: "Full-Stack Developer · freelance",
      company: "Fitness Gym",
      period: "Jan 2026 — Jun 2026",
      bullets: [
        "Developed and deployed a serverless system for memberships, QR access, inventory, and reports for 150+ members.",
      ],
    },
    {
      role: "Backend Developer · freelance",
      company: "Yex Acoustics · Imox Cloud",
      period: "Dec 2025 — Apr 2026",
      bullets: [
        "Deployed NestJS, MQTT, and Redis with Docker on a physical server for electrical power-quality telemetry.",
        "Fixed false disconnect alerts with timestamp validation and implemented OTA updates and Redis caching.",
      ],
    },
    {
      role: "Database & Power Platform Intern",
      company: "Atlas Copco Mexicana",
      period: "Mar 2025 — Mar 2026",
      bullets: [
        "Digitized maintenance reports with 30-minute manual approvals across 10+ daily operations.",
        "Built Node.js services to synchronize data between Microsoft Power Platform and legacy systems.",
      ],
    },
  ],
  achievements: [
    {
      title: "ISO/IEC 27001",
      desc: "Professional information-security certification · Apr 2026.",
    },
  ],
  education: [
    {
      degree: "B.Eng. Software Development & Management",
      school: "Universidad Tecnológica de Querétaro (UTEQ)",
      period: "Sep 2023 — Apr 2027",
      note: "Expected graduation · GPA 9.54/10",
    },
    {
      degree: "TSU in IT — Cross-Platform Software Development",
      school: "Universidad Tecnológica de Querétaro (UTEQ)",
      period: "Sep 2021 — Sep 2023",
      note: "Completed",
    },
    {
      degree: "Academic exchange · MIOTY and low-power endpoints",
      school: "Fraunhofer IIS · Nuremberg, Germany",
      period: "Sep 2026 — Dec 2026",
      note: "PCB design with KiCad",
    },
  ],
  contactLabels: {
    email: "email",
    github: "github",
    linkedin: "linkedin",
    cv: "resume",
    location: "location",
  },
  terminal: {
    label: "alberto@dev:~",
    command: "contact --connect",
    cta: "start transmission",
    note: "Querétaro, Mexico · Available Jan–Apr 2027",
  },
}

export type Translations = typeof es
export const translations: Record<Lang, Translations> = { es, en }
