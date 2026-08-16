# Plan: SIGNAL ROOM — Portfolio IoT de Alberto Ramírez

## Context

Construir una landing page de portfolio completa estilo "centro de control IoT" para Alberto Ramírez, sustituyendo el placeholder actual de App.tsx (un dot-grid interactivo vacío). La página debe sentirse como un dashboard de telemetría industrial real: osciloscópico, denso en datos, oscuro y sofisticado.

---

## Archivos a modificar

| Archivo | Acción |
|---|---|
| `src/index.css` | Añadir `@import` Google Fonts (Space Grotesk + JetBrains Mono) antes del import de Tailwind; añadir tokens CSS y estilos globales (cursor crosshair, scrollbar oculta, animaciones radar/glitch/pulse) |
| `src/App.tsx` | Reemplazar completamente con los 8 secciones del portfolio |

No se crean archivos nuevos; todo en App.tsx (componente único largo con secciones como funciones internas o JSX inline).

---

## Tokens de color (en `src/index.css`)

```css
:root {
  --bg-deep:      #050807;
  --bg-panel:     #0B0F0E;
  --signal:       #39FF88;   /* verde fosforito principal */
  --signal-dim:   #1FA36B;   /* verde esmeralda apagado */
  --cyan:         #4DD8E9;   /* telemetría secundaria */
  --amber:        #FFB454;   /* SOLO badge estado y botón contacto */
  --text-primary: #E8F0EC;   /* blanco hueso */
  --text-muted:   #8A9490;   /* grafito */
}
```

---

## Fuentes (Google Fonts en `src/index.css`)

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');
@import 'tailwindcss';
```

Body: `font-family: 'Space Grotesk', sans-serif`. Mono labels/código: `font-family: 'JetBrains Mono', monospace`.

---

## Animaciones CSS globales (en `src/index.css`)

- `@keyframes radar-sweep` — rotación continua de la línea de barrido (360deg, 4s linear infinite)
- `@keyframes pulse-dot` — parpadeo del badge verde (opacity 1 → 0.3, 1.2s ease-in-out infinite)
- `@keyframes glitch` — desplazamiento horizontal sutil del nombre (translateX ±2px con clip-path, 3s)
- `@keyframes oscilloscope` — animación SVG de la onda senoidal (stroke-dashoffset scroll)
- `@keyframes signal-flow` — partículas moviéndose por las líneas de nodo (stroke-dashoffset 0→100, 2s linear infinite)
- Cursor crosshair: `body { cursor: crosshair; }`
- Scrollbar: `body::-webkit-scrollbar { display: none; }`

---

## Estructura de `App.tsx`

### 1. HeroSection
- `<canvas>` o SVG de radar: círculos concéntricos con `stroke: var(--signal)` a baja opacidad + línea de barrido animada (CSS rotate en un elemento `::after` tipo conic-gradient).
- Nombre con clase `glitch` + subtítulo en JetBrains Mono.
- Badge ámbar: `● OPEN TO WORK` con `pulse-dot`.
- Onda osciloscopio: SVG `<polyline>` con path senoidal y `stroke-dashoffset` animado.
- CTAs: `> conectar` (estilo terminal, hover glow ámbar) y `ver señal ↓` (ghost verde).

### 2. TelemetríaSection (QuickStats)
- Row de 5 tarjetas `bg-[#0B0F0E] border border-[#1FA36B]/30`.
- Cada una: etiqueta mono en `--text-muted`, valor grande en `--signal`, mini sparkline SVG inline.
- Stats: "50+ IoT Devices", ">80% Coverage", "243+ Tests", "ISO/IEC 27001", "GPA 9.54".

### 3. StackSection (Panel de Instrumentos)
- Grid 2→4 columnas (responsive).
- Cada categoría: tarjeta oscura con LED puntito verde, título mono con prefijo `//`, chips de tecnología en `border border-[#39FF88]/40 text-[#39FF88] font-mono text-xs`.
- 7 categorías: Backend & Framework, Cloud & DevOps, IoT & Hardware, Frontend, Databases, AI/ML, Languages.
- Tecnologías reales del brief (NestJS, MQTT, ESP32, LoRaWAN, etc.).

### 4. ProyectosSection (Mapa de Señal)
- SVG de fondo con líneas Bezier entre nodos, animación `signal-flow` en `stroke-dashoffset`.
- Layout asimétrico con CSS Grid custom (`grid-template-areas`): IMOX Cloud ocupa 2 columnas, resto distribuido en tamaños variados.
- 10 tarjetas de proyecto con:
  - Dot de estado: verde=producción, ámbar=en curso.
  - Badges de stack en mono.
  - Métrica destacada en `--signal`.
  - Hover: `box-shadow: 0 0 20px var(--signal)/30%` + escala 1.02.

### 5. ExperienciaSection (Timeline-Señal)
- SVG lateral tipo ECG/onda con picos en cada puesto.
- 3 puestos: Fitness Gym App, Yex Acoustics "Imox Cloud", Atlas Copco.
- Cada pico: círculo relleno `--signal` + card con fecha, título, 2-3 logros cuantificados.

### 6. LogrosSection (Boosts)
- Grid de tarjetas `border-l-2 border-[#39FF88]` estilo "señal captada".
- 5 logros: Fraunhofer IIS, NASA Space Apps, Fin 4 All Hackathon, IEEE Vicepresidente, ISO/IEC 27001.

### 7. EducaciónSection
- 2 tarjetas tipo terminal: `bg-[#0B0F0E]` con cabecera `// TERMINAL` en mono verde.
- UTEQ Ingeniería (en curso) + TSU, con fechas y GPA.

### 8. ContactoSection (Terminal Live)
- Prompt animado: `alberto@dev:~$ contact --connect` con efecto de cursor parpadeante.
- Líneas de output que aparecen secuencialmente (useState + setTimeout en mount).
- Links a GitHub, LinkedIn, email, ubicación.
- Botón ámbar `--amber` como único CTA cálido.

---

## Responsive

- Mobile: grid de 1 columna, hero centrado, nodos de proyecto en lista vertical.
- Desktop (≥1024px): grid 12 col, layout asimétrico completo.
- Breakpoint principal: `md:` (768px) y `lg:` (1024px) de Tailwind.

---

## Verificación

1. El dev server ya corre en `$PORT` con hot reload — los cambios se ven inmediatamente en el preview.
2. Verificar en mobile (375px) y desktop (1440px).
3. Confirmar que las animaciones (radar, glitch, pulso, signal-flow) corren fluidamente.
4. Revisar contraste AA de texto body sobre fondos oscuros.
