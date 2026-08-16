# mario-ramirez-dev

Portfolio personal de Alberto Ramírez — Backend Developer & IoT Engineer.
Concepto de diseño: **SIGNAL ROOM** (centro de control de telemetría IoT en dark mode).

Stack: React 19 + Vite 8 + Tailwind CSS v4 + TypeScript. Toolchain con mise (node 22, pnpm).

## Comandos

- `mise install` — instala node + pnpm del `.mise.toml`
- `pnpm dev` — dev server en `http://localhost:8443`
- `pnpm build` — typecheck (`tsc --noEmit`) + build de producción
- `pnpm preview` — sirve el build de producción
- `pnpm format` — formatea con oxfmt

## Estructura

- `src/App.tsx` — componente principal: las 8 secciones del portfolio (Hero/radar, Telemetría, Stack, Proyectos, Experiencia, Logros, Educación, Contacto)
- `src/index.css` — import de Tailwind v4, tokens de color, fuentes (Space Grotesk + JetBrains Mono) y animaciones (radar, glitch, pulso, osciloscopio)
- `src/main.tsx` — entrypoint React
- `plans/signal-room.md` — plan de diseño original del concepto

## Tokens de color

```css
--bg-deep:      #050807;
--bg-panel:     #0B0F0E;
--signal:       #39FF88;  /* verde fosforito principal */
--signal-dim:   #1FA36B;
--cyan:         #4DD8E9;
--amber:        #FFB454;  /* SOLO badge estado y CTA contacto */
```

## Datos del portfolio

Los datos (proyectos, experiencia, logros, contacto) viven como constantes tipadas al inicio de `src/App.tsx`. Para actualizar tu info solo se edita ahí.
