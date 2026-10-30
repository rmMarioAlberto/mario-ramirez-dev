# SIGNAL ROOM — Portfolio de Alberto Ramírez

Portafolio bilingüe (español e inglés) con estética de sala de control para mostrar trabajo en backend, IoT y sistemas conectados.

**Sitio:** [mario-ramirez.dev](https://mario-ramirez.dev) · **GitHub:** [rmMarioAlberto](https://github.com/rmMarioAlberto)

## Perfil

Desarrollador de software enfocado en backend y sistemas conectados, desde servicios web hasta telemetría MQTT. Estudiante de Ingeniería en Desarrollo y Gestión de Software en UTEQ, con graduación prevista para abril de 2027. Disponible para estadía profesional de enero a abril de 2027.

## Trabajo seleccionado

| Proyecto | Evidencia y estado |
|---|---|
| CEQ Marketplace | Liderazgo técnico de un equipo de cuatro; marketplace B2B desplegado en VPS. La landing es pública; las funciones requieren autenticación. |
| IMOX Cloud | Telemetría MQTT para 50+ dispositivos concurrentes a intervalos de 1.5 s, desplegada con Docker en servidor físico de recursos limitados; la validación de timestamps ayudó a evitar falsas desconexiones. |
| Fitness Gym | Sistema serverless de membresías, acceso QR, inventario y reportes para 150+ miembros. |
| GeoCESAR | Plataforma en desarrollo para emergencias rurales que conecta solicitudes de ayuda con equipos de respuesta, comparte ubicación y facilita el seguimiento de incidentes. |

## ES — Sobre el sitio

SIGNAL ROOM organiza el perfil en ocho secciones: identidad, métricas contextualizadas, stack, proyectos, experiencia, certificación, educación y contacto. La sección de proyectos distingue sistemas desplegados de prototipos.

## EN — About the site

SIGNAL ROOM presents the profile in eight sections: identity, contextualized metrics, stack, projects, experience, certification, education, and contact. Project cards distinguish deployed systems from prototypes.

## Implementación

| Capa | Tecnologías |
|---|---|
| Frontend | React, TypeScript, Vite, Tailwind CSS |
| Portfolio data | `src/i18n.ts` — traducciones y contenido ES/EN |
| Layout and sections | `src/App.tsx` |
| Styles and motion | `src/index.css` |
| Metadata | `index.html` — Open Graph, Twitter Cards y JSON-LD |
| CV downloads | `public/cv-es.pdf` and `public/cv-en.pdf` |

## Desarrollo local

```bash
mise install
pnpm install
pnpm dev
```

Otros comandos disponibles: `pnpm build`, `pnpm preview` y `pnpm format`.

El sitio respeta `prefers-reduced-motion`, incluye skip-link y foco visible. El despliegue existente usa Vercel con el dominio `mario-ramirez.dev`.
