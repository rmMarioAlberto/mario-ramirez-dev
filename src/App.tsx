import React, { useEffect, useState } from "react"
import {
  Activity,
  Code2,
  Cpu,
  Crosshair,
  Globe,
  GraduationCap,
  Lock,
  Mail,
  MapPin,
  Network,
  Radio,
  ShieldAlert,
  Sparkles,
  TerminalSquare,
  Trophy,
  Zap,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/* DATOS DEL PORTFOLIO — editar solo aquí                              */
/* ------------------------------------------------------------------ */

const STATS = [
  {
    label: "DISPOSITIVOS IoT",
    value: "50+",
    suffix: "concurrentes",
    icon: Radio,
  },
  {
    label: "CODE COVERAGE",
    value: ">80%",
    suffix: "constante",
    icon: Activity,
  },
  {
    label: "TESTS BACKEND",
    value: "243+",
    suffix: "passing",
    icon: TerminalSquare,
  },
  { label: "SEGURIDAD", value: "ISO 27001", suffix: "certificado", icon: Lock },
  { label: "GPA", value: "9.54", suffix: "UTEQ", icon: GraduationCap },
]

const STACK = [
  {
    cat: "BACKEND & FRAMEWORK",
    tech: [
      "NestJS",
      "Node.js",
      "Express",
      "Spring Boot",
      "FastAPI",
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
      "LoRaWAN",
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
      "shadcn/ui",
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
      "scikit-learn",
      "LSTM / CNN",
      "Pandas",
      "Gemini",
      "Groq",
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
      "Kotlin",
    ],
  },
]

type Project = {
  name: string
  domain: string
  role: string
  desc: string
  stack: string[]
  metric: string
  status: "prod" | "dev"
}

const PROJECTS: Project[] = [
  {
    name: "IMOX Cloud",
    domain: "IoT · Telemetría",
    role: "Backend Lead · Yex Acoustics",
    desc: "Plataforma de monitoreo de calidad eléctrica en tiempo real. ESP32-S3 con display AMOLED, telemetría MQTT para 50+ dispositivos, OTA remoto y app móvil.",
    stack: ["NestJS", "MQTT", "ESP32", "Docker"],
    metric: "50+ devices · 1.5s ping",
    status: "prod",
  },
  {
    name: "CEQ Marketplace",
    domain: "Enterprise · B2B",
    role: "Full Stack · Clúster Energético Qro",
    desc: "Marketplace privado Triple Hélice: empresas publican ofertas, demanda insumos y recibe matches. 565+ tests, mutación, contratos Pact y k6.",
    stack: ["NestJS", "React 19", "PostgreSQL", "Redis"],
    metric: "565+ tests · CI/CD",
    status: "dev",
  },
  {
    name: "Estudio 43",
    domain: "Enterprise · SaaS",
    role: "Scrum Master · 11 microservicios",
    desc: "SaaS de gestión para clínica de belleza: citas, inventario, ventas y reportes sobre 11 microservicios Spring con gateway y SSO.",
    stack: ["Spring Boot", "React", "PostgreSQL", "Flyway"],
    metric: "11 micros · 58 tests + 12 E2E",
    status: "dev",
  },
  {
    name: "Fitness Gym",
    domain: "Web · Gestión",
    role: "Full Stack · Team Lead",
    desc: "Sistema integral de gimnasio: membresías, acceso por QR, facturación recurrente, inventario y dashboards en vivo con notificaciones WhatsApp.",
    stack: ["Angular 20", "NestJS", "PostgreSQL", "WebSockets"],
    metric: "150+ miembros · 80+ visitas/día",
    status: "prod",
  },
  {
    name: "Lettucecurity",
    domain: "AI · Agricultura",
    role: "Full Stack · Clean Architecture",
    desc: "Videovigilancia agrícola inteligente: CNN que detecta plagas y LSTM que predice variables ambientales, con backend en capas y llaves de seguridad.",
    stack: ["NestJS", "TensorFlow", "React", "MQTT"],
    metric: "85% CNN · 97% LSTM",
    status: "prod",
  },
  {
    name: "VozRural",
    domain: "AI · Salud",
    role: "Backend · Hackathon Troyano",
    desc: "Telemedicina multi-agente por voz/WhatsApp para zonas rurales: triage remoto con dos LLMs en pipeline y wearable GPS de prueba de concepto.",
    stack: ["FastAPI", "Gemini", "Groq", "ESP32"],
    metric: "2 LLMs · <1.5s latencia",
    status: "prod",
  },
  {
    name: "Linkore Solutions",
    domain: "Web · Agencia",
    role: "Founder · Full Stack",
    desc: "Agencia de webs locales + Meta Ads con pipeline de 9 fases. Clientes: ISMI, Barbacoa San Juanita, Chihuahua Mark y sector inmobiliario.",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    metric: "9 fases · 4 clientes",
    status: "prod",
  },
  {
    name: "Roblox Factory",
    domain: "AI · Agentes",
    role: "Orquestador · opencode",
    desc: "Fábrica de agentes que opera una empresa simulada de 21 roles creando juegos Roblox 24/7, con revisión en capas y escalado a Telegram.",
    stack: ["Python", "opencode", "DeepSeek", "SSE"],
    metric: "21 roles · 18/18 self-test",
    status: "dev",
  },
  {
    name: "85dias",
    domain: "Personal · Dev",
    role: "Full Stack · solo para Nicole",
    desc: "Video-diario de los 86 días que estuve en Alemania: prompts diarios generados por IA, grabación MP4 con marca de agua y cuenta regresiva.",
    stack: ["Next.js", "Prisma", "NextAuth", "Cloudinary"],
    metric: "86 días · 1 historia",
    status: "dev",
  },
  {
    name: "Croquetero",
    domain: "IoT · Impacto social",
    role: "Embedded · Hardware",
    desc: "Dispensador automático de croquetas que acepta monedas mexicanas ($1–$10) como donación para los perros de la comunidad universitaria.",
    stack: ["Arduino", "C++", "Stepper", "Web QR"],
    metric: "Donaciones · monedas MXN",
    status: "dev",
  },
]

const EXPERIENCE = [
  {
    role: "Full Stack Developer — Team Lead",
    company: "Fitness Gym",
    period: "Ene 2026 — Presente",
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
]

const ACHIEVEMENTS = [
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
    desc: "Certificación en gestión de seguridad de la información — prácticas aplicadas en proyectos de producción.",
  },
]

const EDUCATION = [
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
]

const CONTACT = [
  {
    icon: Mail,
    label: "email",
    value: "rmmarioalberto08@gmail.com",
    href: "mailto:rmmarioalberto08@gmail.com",
  },
  {
    icon: Code2,
    label: "github",
    value: "github.com/rmMarioAlberto",
    href: "https://github.com/rmMarioAlberto",
  },
  {
    icon: Globe,
    label: "linkedin",
    value: "linkedin.com/in/mario-alberto-ramirez",
    href: "https://linkedin.com/in/mario-alberto-ramirez-martinez-12215b34a",
  },
  {
    icon: MapPin,
    label: "location",
    value: "Querétaro, México",
    href: undefined,
  },
]

/* ------------------------------------------------------------------ */
/* COMPONENTES                                                         */
/* ------------------------------------------------------------------ */

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 font-mono text-xs md:text-sm text-primary tracking-widest">
      <span className="w-8 h-[2px] bg-primary" />
      <span>{children}</span>
    </div>
  )
}

function CornerAccents() {
  return (
    <>
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/60" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/60" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/60" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/60" />
    </>
  )
}

function Hero() {
  return (
    <section className="relative border border-border bg-card overflow-hidden">
      <CornerAccents />
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 p-8 md:p-14 min-h-[70vh]">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/50 bg-primary/5 font-mono text-xs tracking-widest text-primary">
            <span className="relative flex w-2 h-2">
              <span className="pulse-dot absolute inline-flex w-2 h-2 rounded-full bg-primary" />
            </span>
            OPEN TO WORK
          </div>
          <div>
            <p className="font-mono text-sm text-muted-foreground mb-3">
              {"> "}identidad.conf
            </p>
            <h1 className="glitch text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[0.95]">
              Alberto
              <br />
              <span className="text-primary">Ramírez</span>
            </h1>
            <p className="font-mono text-sm md:text-base text-muted-foreground mt-4">
              Backend Developer · IoT Engineer · Querétaro, MX
            </p>
          </div>
          <p className="font-mono max-w-md text-sm md:text-base leading-relaxed border-l-2 border-primary pl-4 text-foreground/80">
            Sistemas que nunca duermen: telemetría MQTT en producción, clean
            architecture, ISO 27001 y cobertura de pruebas {">"}80%. De la
            electrónica del ESP32 al despliegue en Docker.
          </p>
          <div className="flex flex-wrap gap-4 font-mono text-sm">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-2"
            >
              <TerminalSquare size={16} /> conectar
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-primary/60 text-primary uppercase tracking-widest hover:bg-primary/10 transition-colors flex items-center gap-2"
            >
              <Crosshair size={16} /> ver señal ↓
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center relative">
          <div className="relative w-64 h-64 md:w-[26rem] md:h-[26rem] rounded-full border border-primary/30 flex items-center justify-center bg-background/40">
            <div className="radar-ring absolute inset-4 rounded-full border border-primary/20" />
            <div className="absolute inset-12 rounded-full border border-primary/10" />
            <div className="absolute inset-[6.5rem] rounded-full border border-primary/5" />
            <div className="absolute w-full h-[1px] bg-primary/20" />
            <div className="absolute h-full w-[1px] bg-primary/20" />
            <div className="absolute w-full h-[1px] bg-primary/10 rotate-45" />
            <div className="absolute h-full w-[1px] bg-primary/10 rotate-45" />
            <div className="radar-sweep" />
            <div className="absolute top-[22%] left-[28%] w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#39ff88] pulse-dot" />
            <div className="absolute bottom-[28%] right-[18%] w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#4dd8e9]" />
            <div className="absolute top-[58%] left-[68%] w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#39ff88]" />
            <div className="absolute bottom-[20%] left-[22%] w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_#ffb454]" />
            <Crosshair className="absolute text-primary/50" size={36} />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-muted-foreground tracking-widest whitespace-nowrap">
              SCAN: QUERÉTARO · MX
            </div>
          </div>
        </div>
      </div>

      <svg
        className="w-full h-16 md:h-24 opacity-70"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <polyline
          className="oscilloscope"
          fill="none"
          stroke="#39ff88"
          strokeWidth="2"
          points="0,50 40,50 60,20 80,80 100,50 140,50 160,30 180,70 200,50 240,50 260,15 280,85 300,50 340,50 360,25 380,75 400,50 440,50 460,35 480,65 500,50 540,50 560,20 580,80 600,50 640,50 660,30 680,70 700,50 740,50 760,15 780,85 800,50 840,50 860,25 880,75 900,50 940,50 960,35 980,65 1000,50 1040,50 1060,20 1080,80 1100,50 1140,50 1160,30 1180,70 1200,50"
        />
      </svg>
    </section>
  )
}

function Telemetry() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 font-mono">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="group relative border border-border bg-card p-5 h-32 flex flex-col justify-between overflow-hidden"
        >
          <div className="flex justify-between items-start">
            <span className="text-[10px] tracking-widest text-muted-foreground">
              {stat.label}
            </span>
            <stat.icon size={16} className="text-primary/60" />
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-primary">
              {stat.value}
            </div>
            <div className="text-[10px] text-muted-foreground mt-1">
              {stat.suffix}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 h-[2px] bg-primary w-0 group-hover:w-full transition-all duration-500" />
        </div>
      ))}
    </section>
  )
}

function Stack() {
  return (
    <section className="relative border border-border bg-card p-8 md:p-12">
      <CornerAccents />
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 border-b border-border pb-4">
        <div className="flex items-center gap-4">
          <Cpu className="text-primary" size={22} />
          <h2 className="font-bold text-2xl uppercase tracking-widest">
            Stack
          </h2>
        </div>
        <span className="font-mono text-xs text-muted-foreground">
          // PANEL DE INSTRUMENTOS
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {STACK.map((col) => (
          <div
            key={col.cat}
            className="border border-border/70 p-5 bg-background/40"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary pulse-dot" />
              <h3 className="font-mono text-[11px] tracking-widest text-primary">
                {col.cat}
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {col.tech.map((t) => (
                <li
                  key={t}
                  className="border border-primary/40 text-primary font-mono text-xs px-2 py-1 hover:bg-primary/10 transition-colors"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section
      id="projects"
      className="relative border border-border bg-card p-8 md:p-12"
    >
      <CornerAccents />
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 border-b border-border pb-4">
        <div className="flex items-center gap-4">
          <Network className="text-primary" size={22} />
          <h2 className="font-bold text-2xl uppercase tracking-widest">
            Mapa de señal
          </h2>
        </div>
        <span className="font-mono text-xs text-muted-foreground">
          // PROYECTOS · DEPLOYMENTS ACTIVOS
        </span>
      </div>

      <svg
        className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
        viewBox="0 0 1200 1600"
        preserveAspectRatio="none"
      >
        <path
          className="signal-flow"
          fill="none"
          stroke="#39ff88"
          strokeWidth="1"
          d="M80,60 C 300,200 400,300 560,340"
        />
        <path
          className="signal-flow"
          fill="none"
          stroke="#4dd8e9"
          strokeWidth="1"
          d="M80,120 C 300,260 420,380 560,520"
        />
        <path
          className="signal-flow"
          fill="none"
          stroke="#39ff88"
          strokeWidth="1"
          d="M80,180 C 320,320 460,500 600,680"
        />
      </svg>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <div
            key={p.name}
            className={`group relative border border-border bg-background/50 p-6 transition-all duration-300 hover:shadow-[0_0_24px_rgba(57,255,136,0.25)] hover:scale-[1.02] hover:border-primary/50 ${
              i === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span
                  className={`relative flex w-2 h-2 ${
                    p.status === "prod" ? "bg-primary" : "bg-accent"
                  } rounded-full`}
                >
                  <span
                    className={`pulse-dot absolute inline-flex w-full h-full rounded-full ${
                      p.status === "prod" ? "bg-primary" : "bg-accent"
                    }`}
                  />
                </span>
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                  {p.domain}
                </span>
              </div>
              <span className="font-mono text-[10px] text-primary/70">
                NODE-{String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="font-bold text-xl md:text-2xl uppercase tracking-tight group-hover:text-primary transition-colors">
              {p.name}
            </h3>
            <p className="font-mono text-[11px] text-muted-foreground mb-3">
              {p.role}
            </p>
            <p className="font-mono text-sm text-foreground/70 leading-relaxed mb-5">
              {p.desc}
            </p>
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="border border-border px-2 py-1 text-foreground/70 hover:border-primary/60 hover:text-primary transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-border/60 flex items-center gap-2 font-mono text-xs">
              <Zap size={13} className="text-accent" />
              <span className="text-primary">{p.metric}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="relative border border-border bg-card p-8 md:p-12">
      <CornerAccents />
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 border-b border-border pb-4">
        <div className="flex items-center gap-4">
          <Activity className="text-primary" size={22} />
          <h2 className="font-bold text-2xl uppercase tracking-widest">
            Trayectoria
          </h2>
        </div>
        <span className="font-mono text-xs text-muted-foreground">
          // ECG · 2025 — PRESENTE
        </span>
      </div>

      <div className="relative">
        <svg
          className="absolute left-2 md:left-6 top-0 bottom-0 h-full w-12 md:w-20 opacity-50 pointer-events-none"
          viewBox="0 0 80 600"
          preserveAspectRatio="none"
        >
          <polyline
            className="ecg-line"
            fill="none"
            stroke="#39ff88"
            strokeWidth="2"
            points="40,0 40,50 40,100 50,120 30,140 40,160 40,220 55,240 25,260 40,280 40,340 50,360 30,380 40,400 40,460 55,480 25,500 40,520 40,600"
          />
        </svg>

        <div className="space-y-10 md:pl-24">
          {EXPERIENCE.map((job) => (
            <div key={job.company} className="relative group">
              <div className="absolute -left-[27px] md:left-0 top-1.5 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_#39ff88] pulse-dot" />
              <div className="border border-border bg-background/50 p-6 transition-all duration-300 hover:border-primary/40 group-hover:shadow-[0_0_20px_rgba(57,255,136,0.15)]">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-bold text-lg md:text-xl uppercase tracking-tight group-hover:text-primary transition-colors">
                    {job.company}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {job.period}
                  </span>
                </div>
                <p className="font-mono text-xs text-primary mb-4">
                  {job.role}
                </p>
                <ul className="space-y-2">
                  {job.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-sm text-foreground/75 leading-relaxed"
                    >
                      <span className="text-primary font-mono shrink-0">
                        {">"}
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Achievements() {
  return (
    <section className="relative border border-border bg-card p-8 md:p-12">
      <CornerAccents />
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 border-b border-border pb-4">
        <div className="flex items-center gap-4">
          <Trophy className="text-primary" size={22} />
          <h2 className="font-bold text-2xl uppercase tracking-widest">
            Señales captadas
          </h2>
        </div>
        <span className="font-mono text-xs text-muted-foreground">
          // LOGROS
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {ACHIEVEMENTS.map((a) => (
          <div
            key={a.title}
            className="border-l-2 border-primary bg-background/40 p-5 hover:bg-primary/5 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={14} className="text-primary" />
              <h3 className="font-mono text-sm font-bold tracking-wide text-primary">
                {a.title}
              </h3>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              {a.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="relative border border-border bg-card p-8 md:p-12">
      <CornerAccents />
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 border-b border-border pb-4">
        <div className="flex items-center gap-4">
          <GraduationCap className="text-primary" size={22} />
          <h2 className="font-bold text-2xl uppercase tracking-widest">
            Educación
          </h2>
        </div>
        <span className="font-mono text-xs text-muted-foreground">
          // UTEQ · QUERÉTARO
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EDUCATION.map((e) => (
          <div
            key={e.degree}
            className="border border-border bg-background/50 overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary font-mono text-xs text-primary border-b border-border">
              <TerminalSquare size={13} /> // TERMINAL · {e.school}
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg uppercase tracking-tight mb-1">
                {e.degree}
              </h3>
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-muted-foreground">
                <span>{e.period}</span>
                <span className="text-primary">{e.note} · GPA 9.54</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [visible, setVisible] = useState(0)
  const [typed, setTyped] = useState("")

  useEffect(() => {
    const command = "contact --connect"
    let i = 0
    const typeTimer = setInterval(() => {
      i += 1
      setTyped(command.slice(0, i))
      if (i >= command.length) {
        clearInterval(typeTimer)
        setTimeout(() => {
          const reveal = setInterval(() => {
            setVisible((v) => {
              if (v >= CONTACT.length) {
                clearInterval(reveal)
                return v
              }
              return v + 1
            })
          }, 350)
        }, 300)
      }
    }, 60)
    return () => clearInterval(typeTimer)
  }, [])

  return (
    <section
      id="contact"
      className="relative border border-border bg-card overflow-hidden"
    >
      <CornerAccents />
      <div className="p-8 md:p-14">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 border-b border-border pb-4">
          <div className="flex items-center gap-4">
            <TerminalSquare className="text-primary" size={22} />
            <h2 className="font-bold text-2xl uppercase tracking-widest">
              Contacto
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            // CANAL ABIERTO
          </span>
        </div>

        <div className="border border-border bg-background/60 font-mono text-sm">
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary text-muted-foreground text-xs border-b border-border">
            <span className="w-2 h-2 rounded-full bg-accent/80" />
            <span className="w-2 h-2 rounded-full bg-amber-200/40" />
            <span className="w-2 h-2 rounded-full bg-primary/60" />
            <span className="ml-2">alberto@dev:~</span>
          </div>
          <div className="p-6 min-h-[16rem] space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-primary">{">"}</span>
              <span>
                alberto@dev:~$ {typed}
                <span className="term-cursor inline-block w-2 h-4 bg-primary ml-0.5 align-middle" />
              </span>
            </div>
            {Array.from({ length: visible }).map((_, i) => {
              const c = CONTACT[i]
              return (
                <div
                  key={c.label}
                  className="flex items-center gap-3 text-foreground/85"
                >
                  <span className="text-muted-foreground text-xs w-10">
                    {c.label}
                  </span>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-primary hover:text-accent transition-colors underline decoration-primary/30 underline-offset-4"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span>{c.value}</span>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="mailto:rmmarioalberto08@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-mono font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(255,180,84,0.4)] transition-all"
          >
            <Zap size={16} /> iniciar transmisión
          </a>
          <p className="font-mono text-xs text-muted-foreground mt-4">
            Respuesta en menos de 24h · Querétaro, México (CST)
          </p>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* APP                                                                 */
/* ------------------------------------------------------------------ */

export default function App() {
  const [time, setTime] = useState(new Date().toISOString())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toISOString()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen relative flex flex-col">
      <div className="crt-overlay" />

      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm px-4 py-3 flex items-center justify-between font-mono text-xs md:text-sm uppercase tracking-wider">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="relative flex w-2 h-2">
              <span className="pulse-ring relative flex w-2 h-2 rounded-full bg-primary" />
            </span>
            <span>SYS_ONLINE</span>
          </div>
          <span className="hidden md:inline-block text-muted-foreground border-l border-border pl-4">
            SIGNAL ROOM · a.ramírez
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="hidden sm:inline-block text-muted-foreground">
            {time}
          </span>
          <div className="flex gap-4">
            <span className="flex items-center gap-2">
              <Zap size={14} className="text-primary" /> 99.9%
            </span>
            <span className="flex items-center gap-2 text-accent">
              <ShieldAlert size={14} /> SEC:27001
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-8 flex flex-col gap-8 md:gap-16 max-w-7xl mx-auto w-full relative z-10">
        <Hero />
        <Telemetry />
        <Stack />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <Contact />
      </main>

      <footer className="border-t border-border mt-16 p-4 text-center font-mono text-xs text-muted-foreground z-10 bg-background relative">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-8">
          <span>{"// FIN DE TRANSMISIÓN"}</span>
          <span>ALBERTO RAMÍREZ · {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  )
}
