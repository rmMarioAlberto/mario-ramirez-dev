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
import { translations, type Lang, type Translations } from "./i18n"

/* ------------------------------------------------------------------ */
/* ESTRUCTURA NO TRADUCIBLE (iconos, estados, enlaces)                 */
/* ------------------------------------------------------------------ */

const STAT_ICONS = [Radio, Activity, TerminalSquare, Lock, GraduationCap]
const PROJECT_STATUS: Array<"prod" | "dev"> = [
  "prod",
  "dev",
  "dev",
  "prod",
  "prod",
  "prod",
  "prod",
  "dev",
  "dev",
  "dev",
]
const CONTACT_ICONS = [Mail, Code2, Globe, MapPin]
const CONTACT_HREFS: Array<string | undefined> = [
  "mailto:rmmarioalberto08@gmail.com",
  "https://github.com/rmMarioAlberto",
  "https://linkedin.com/in/mario-alberto-ramirez-martinez-12215b34a",
  undefined,
]
const CONTACT_VALUES = [
  "rmmarioalberto08@gmail.com",
  "github.com/rmMarioAlberto",
  "linkedin.com/in/mario-alberto-ramirez",
  "Querétaro, México",
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

function Hero({ t }: { t: Translations }) {
  return (
    <section className="relative border border-border bg-card overflow-hidden">
      <CornerAccents />
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 p-8 md:p-14 min-h-[70vh]">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/50 bg-primary/5 font-mono text-xs tracking-widest text-primary">
            <span className="relative flex w-2 h-2">
              <span className="pulse-dot absolute inline-flex w-2 h-2 rounded-full bg-primary" />
            </span>
            {t.ui.openToWork}
          </div>
          <div>
            <p className="font-mono text-sm text-muted-foreground mb-3">
              {"> "}
              {t.hero.identity}
            </p>
            <h1 className="glitch text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[0.95]">
              {t.hero.firstName}
              <br />
              <span className="text-primary">{t.hero.lastName}</span>
            </h1>
            <p className="font-mono text-sm md:text-base text-muted-foreground mt-4">
              {t.hero.tagline}
            </p>
          </div>
          <p className="font-mono max-w-md text-sm md:text-base leading-relaxed border-l-2 border-primary pl-4 text-foreground/80">
            {t.hero.blurb}
          </p>
          <div className="flex flex-wrap gap-4 font-mono text-sm">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-2"
            >
              <TerminalSquare size={16} /> {t.ui.ctaConnect}
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-primary/60 text-primary uppercase tracking-widest hover:bg-primary/10 transition-colors flex items-center gap-2"
            >
              <Crosshair size={16} /> {t.ui.ctaSignal}
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
              {t.ui.scanLabel}
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

function Telemetry({ t }: { t: Translations }) {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 font-mono">
      {t.stats.map((stat, i) => {
        const Icon = STAT_ICONS[i]
        return (
          <div
            key={stat.label}
            className="group relative border border-border bg-card p-5 h-32 flex flex-col justify-between overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <span className="text-[10px] tracking-widest text-muted-foreground">
                {stat.label}
              </span>
              <Icon size={16} className="text-primary/60" />
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
        )
      })}
    </section>
  )
}

function Stack({ t }: { t: Translations }) {
  return (
    <section className="relative border border-border bg-card p-8 md:p-12">
      <CornerAccents />
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 border-b border-border pb-4">
        <div className="flex items-center gap-4">
          <Cpu className="text-primary" size={22} />
          <h2 className="font-bold text-2xl uppercase tracking-widest">
            {t.sectionTitles.stack}
          </h2>
        </div>
        <span className="font-mono text-xs text-muted-foreground">
          {t.sectionTags.stack}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {t.stack.map((col) => (
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
              {col.tech.map((tech) => (
                <li
                  key={tech}
                  className="border border-primary/40 text-primary font-mono text-xs px-2 py-1 hover:bg-primary/10 transition-colors"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects({ t }: { t: Translations }) {
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
            {t.sectionTitles.projects}
          </h2>
        </div>
        <span className="font-mono text-xs text-muted-foreground">
          {t.sectionTags.projects}
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
        {t.projects.map((p, i) => (
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
                    PROJECT_STATUS[i] === "prod" ? "bg-primary" : "bg-accent"
                  } rounded-full`}
                >
                  <span
                    className={`pulse-dot absolute inline-flex w-full h-full rounded-full ${
                      PROJECT_STATUS[i] === "prod" ? "bg-primary" : "bg-accent"
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

function Experience({ t }: { t: Translations }) {
  return (
    <section className="relative border border-border bg-card p-8 md:p-12">
      <CornerAccents />
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 border-b border-border pb-4">
        <div className="flex items-center gap-4">
          <Activity className="text-primary" size={22} />
          <h2 className="font-bold text-2xl uppercase tracking-widest">
            {t.sectionTitles.experience}
          </h2>
        </div>
        <span className="font-mono text-xs text-muted-foreground">
          {t.sectionTags.experience}
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
          {t.experience.map((job) => (
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

function Achievements({ t }: { t: Translations }) {
  return (
    <section className="relative border border-border bg-card p-8 md:p-12">
      <CornerAccents />
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 border-b border-border pb-4">
        <div className="flex items-center gap-4">
          <Trophy className="text-primary" size={22} />
          <h2 className="font-bold text-2xl uppercase tracking-widest">
            {t.sectionTitles.achievements}
          </h2>
        </div>
        <span className="font-mono text-xs text-muted-foreground">
          {t.sectionTags.achievements}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {t.achievements.map((a) => (
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

function Education({ t }: { t: Translations }) {
  return (
    <section className="relative border border-border bg-card p-8 md:p-12">
      <CornerAccents />
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 border-b border-border pb-4">
        <div className="flex items-center gap-4">
          <GraduationCap className="text-primary" size={22} />
          <h2 className="font-bold text-2xl uppercase tracking-widest">
            {t.sectionTitles.education}
          </h2>
        </div>
        <span className="font-mono text-xs text-muted-foreground">
          {t.sectionTags.education}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {t.education.map((e) => (
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

function Contact({ t }: { t: Translations }) {
  const [visible, setVisible] = useState(0)
  const [typed, setTyped] = useState("")

  useEffect(() => {
    let i = 0
    const typeTimer = setInterval(() => {
      i += 1
      setTyped(t.terminal.command.slice(0, i))
      if (i >= t.terminal.command.length) {
        clearInterval(typeTimer)
        setTimeout(() => {
          const reveal = setInterval(() => {
            setVisible((v) => {
              if (v >= CONTACT_VALUES.length) {
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
  }, [t])

  const labels = Object.values(t.contactLabels)

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
              {t.sectionTitles.contact}
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            {t.sectionTags.contact}
          </span>
        </div>

        <div className="border border-border bg-background/60 font-mono text-sm">
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary text-muted-foreground text-xs border-b border-border">
            <span className="w-2 h-2 rounded-full bg-accent/80" />
            <span className="w-2 h-2 rounded-full bg-amber-200/40" />
            <span className="w-2 h-2 rounded-full bg-primary/60" />
            <span className="ml-2">{t.terminal.label}</span>
          </div>
          <div className="p-6 min-h-[16rem] space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-primary">{">"}</span>
              <span>
                {t.terminal.label}$ {typed}
                <span className="term-cursor inline-block w-2 h-4 bg-primary ml-0.5 align-middle" />
              </span>
            </div>
            {Array.from({ length: visible }).map((_, i) => {
              const Icon = CONTACT_ICONS[i]
              const href = CONTACT_HREFS[i]
              return (
                <div
                  key={labels[i]}
                  className="flex items-center gap-3 text-foreground/85"
                >
                  <Icon size={13} className="text-primary/70" />
                  <span className="text-muted-foreground text-xs w-12">
                    {labels[i]}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-primary hover:text-accent transition-colors underline decoration-primary/30 underline-offset-4"
                    >
                      {CONTACT_VALUES[i]}
                    </a>
                  ) : (
                    <span>{CONTACT_VALUES[i]}</span>
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
            <Zap size={16} /> {t.terminal.cta}
          </a>
          <p className="font-mono text-xs text-muted-foreground mt-4">
            {t.terminal.note}
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
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang")
    return saved === "en" ? "en" : "es"
  })
  const [time, setTime] = useState(new Date().toISOString())
  const t = translations[lang]

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toISOString()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute("content", t.meta.description)
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute("content", t.meta.ogTitle)
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute("content", t.meta.ogDescription)
    localStorage.setItem("lang", lang)
  }, [lang, t])

  return (
    <div className="min-h-screen relative flex flex-col">
      <a
        href="#main"
        className="skip-link bg-primary text-primary-foreground font-mono text-sm px-4 py-2 uppercase tracking-widest"
      >
        Saltar al contenido
      </a>
      <div className="crt-overlay" />

      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm px-4 py-3 flex items-center justify-between font-mono text-xs md:text-sm uppercase tracking-wider">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="relative flex w-2 h-2">
              <span className="pulse-ring relative flex w-2 h-2 rounded-full bg-primary" />
            </span>
            <span>{t.ui.sysOnline}</span>
          </div>
          <span className="hidden md:inline-block text-muted-foreground border-l border-border pl-4">
            {t.ui.signalRoom}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="hidden sm:inline-block text-muted-foreground">
            {time}
          </span>
          <div className="flex gap-4">
            <span className="flex items-center gap-2">
              <Zap size={14} className="text-primary" /> {t.ui.uptime}
            </span>
            <span className="flex items-center gap-2 text-accent">
              <ShieldAlert size={14} /> {t.ui.secTag}
            </span>
          </div>
          <div
            className="flex items-center border border-border font-mono text-xs"
            role="group"
            aria-label="Idioma"
          >
            {(["es", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 transition-colors ${
                  lang === l
                    ? "bg-primary text-primary-foreground font-bold"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main
        id="main"
        className="flex-1 p-4 md:p-8 flex flex-col gap-8 md:gap-16 max-w-7xl mx-auto w-full relative z-10"
      >
        <Hero t={t} />
        <Telemetry t={t} />
        <Stack t={t} />
        <Projects t={t} />
        <Experience t={t} />
        <Achievements t={t} />
        <Education t={t} />
        <Contact t={t} />
      </main>

      <footer className="border-t border-border mt-16 p-4 text-center font-mono text-xs text-muted-foreground z-10 bg-background relative">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-8">
          <span>{t.ui.footerStart}</span>
          <span>
            {t.ui.footerEnd} {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </div>
  )
}
