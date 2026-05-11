# Simulador del Examen de Manejo de Colorado

Aplicación web estática que simula el examen escrito para la licencia de
conducir estándar del estado de Colorado. Está pensada como herramienta de
estudio realista: presenta preguntas basadas en el [Manual del Conductor
de Colorado (DR 2337)](https://dmv.colorado.gov/sites/dmv/files/documents/DR_2337SP_Jan2025_Spanish.pdf)
con **imágenes inline de señales reales**, mide el tiempo, marca preguntas
para revisar y muestra calificación, desglose por categoría y revisión
completa al terminar.

**Aviso:** Este es un proyecto educativo independiente. **No** es un examen
oficial del DMV ni está afiliado al gobierno del estado de Colorado.

## Características

- **100% estático** (HTML, CSS y JavaScript vanilla). Sin backend, sin
  build, sin dependencias de Node.
- **Banco principal de 210 preguntas** bilingües (español / inglés) cubriendo
  señales, semáforos, derecho de paso, velocidad, distancia, DUI/DWAI,
  peatones y ciclistas, buses escolares, manejo en invierno, autopistas,
  estacionamiento, luces, adelantamiento, emergencias, documentos/seguro,
  reglas generales y rotondas.
- **Imágenes inline (SVG)** para ~48 preguntas con señales, marcas viales,
  semáforos, señales manuales del brazo y estacionamiento en pendiente.
  Las ilustraciones viven en `js/icons.js` y se generan localmente — sin
  CDN ni imágenes externas.
- **Banco difícil de 100 preguntas adicionales** (`questions-hard.js`)
  con números exactos, leyes específicas (CRS) y escenarios
  hipotéticos. Pensadas para una práctica muy exigente más allá del
  examen real promedio.
- **Examen aleatorio** de 25 preguntas sin repetir, con orden de opciones
  mezclado en cada intento. Existe un **botón "Examen difícil"** que
  toma 25 preguntas aleatorias del banco difícil y eleva la
  aprobación a 90%.
- **Banderín por pregunta** para marcarla y revisarla luego (tecla `F`).
- **Mapa de preguntas** con leyenda (actual, respondida, marcada).
- **Cronómetro** opcional.
- **Resultados detallados**: porcentaje, aprobado/no aprobado,
  conteo de aciertos, tiempo total, **desglose por categoría con
  barras de color**, revisión completa con filtro "Solo incorrectas".
- **Modo estudio por categoría** con explicación inmediata.
- **Tema claro / oscuro** con detección automática del sistema, toggle
  rápido y selector en configuración.
- **Panel de configuración** para cambiar # de preguntas, % de aprobación,
  cronómetro y tema. Persiste en `localStorage`.
- **Estadísticas locales**: exámenes hechos, mejor puntuación, promedio,
  porcentaje de aprobación. Se pueden borrar.
- **Selector de idioma** español / inglés (inicia en español).
- **PWA**: `manifest.webmanifest` + service worker → instalable y funciona
  sin conexión después de la primera carga.
- **Responsivo** (iPhone, iPad, escritorio) con accesibilidad cuidada:
  navegación con teclado (←/→ navegar, 1-4 elegir, `F` marcar, `Esc`
  cerrar modal), `aria-pressed`, focus visible, `prefers-reduced-motion`.
- **Despliegue automático** a GitHub Pages mediante GitHub Actions desde
  la rama `main`.

## Cómo correrlo localmente

Como no hay dependencias, basta con servir la carpeta:

```bash
# con Python 3
python3 -m http.server 8000

# con Node
npx serve .
```

Y abrir `http://localhost:8000` en el navegador.

## Estructura

```
.
├── index.html                  # Estructura HTML de todas las vistas
├── css/styles.css              # Estilos con temas claro/oscuro
├── js/
│   ├── icons.js                # Biblioteca de SVG inline (señales, etc.)
│   ├── questions.js            # Banco de preguntas (bilingüe + image keys)
│   ├── i18n.js                 # Textos de interfaz ES/EN
│   └── app.js                  # Lógica completa
├── manifest.webmanifest        # Manifiesto PWA
├── sw.js                       # Service worker (cache-first)
├── .github/workflows/
│   └── deploy.yml              # Workflow de despliegue a GitHub Pages
└── .nojekyll                   # Evita procesamiento Jekyll en Pages
```

## Cómo agregar más preguntas

Edita `js/questions.js` y añade un objeto al arreglo `window.QUESTIONS`:

```js
{
  id: 191,                              // ID único, entero
  category: 'signs',                    // ver lista de categorías abajo
  image: 'sign.stop',                   // opcional, ver iconos disponibles
  question: {
    es: '¿Pregunta en español?',
    en: 'Question in English?'
  },
  options: [
    { es: 'Opción A', en: 'Option A' },
    { es: 'Opción B', en: 'Option B' },
    { es: 'Opción C', en: 'Option C' },
    { es: 'Opción D', en: 'Option D' }
  ],
  correctAnswer: 1,                     // índice 0-based
  explanation: {
    es: 'Explicación breve.',
    en: 'Short explanation.'
  },
  sourceReference: {
    es: 'Manual del Conductor de Colorado · sección',
    en: 'Colorado Driver Handbook · section'
  }
}
```

**Categorías disponibles** (`window.QUESTION_CATEGORIES` en
`js/questions.js`, traducciones `cat.<nombre>` en `js/i18n.js`):
`signs`, `signals`, `rightOfWay`, `speed`, `following`, `alcohol`,
`pedestrians`, `schoolBus`, `winter`, `highway`, `parking`, `lights`,
`passing`, `emergency`, `documents`, `general`, `roundabout`.

## Cómo agregar una nueva imagen / icono

Edita `js/icons.js` y añade una entrada al objeto `ICONS` con una clave en
formato `categoria.nombre`. La función helper `s(content, opts)` envuelve
tu SVG en un `<svg>` con `viewBox` y `aria-hidden`. Después referencia la
clave desde el campo `image` de una pregunta.

Iconos ya disponibles:

- **Señales**: `sign.stop`, `sign.yield`, `sign.doNotEnter`,
  `sign.wrongWay`, `sign.keepRight`, `sign.oneWay`, `sign.noPassing`,
  `sign.noTurn`, `sign.warningBlank`, `sign.slippery`, `sign.twoWay`,
  `sign.deer`, `sign.merge`, `sign.curve`, `sign.tIntersection`,
  `sign.construction`, `sign.school`, `sign.railroad`, `sign.service`,
  `sign.recreation`, `sign.guide`
- **Semáforos**: `signal.red`, `signal.yellow`, `signal.green`,
  `signal.flashingRed`, `signal.flashingYellow`, `signal.greenArrow`,
  `signal.flashingYellowArrow`, `signal.laneGreenArrow`,
  `signal.laneRedX`
- **Marcas viales**: `lane.solidYellow`, `lane.doubleYellow`,
  `lane.brokenYellow`, `lane.solidWhite`, `lane.brokenWhite`,
  `lane.twoWayLeft`
- **Señales manuales**: `hand.left`, `hand.right`, `hand.stop`
- **Estacionamiento**: `park.uphillCurb`, `park.downhillCurb`,
  `park.noCurb`
- **Otros**: `inter.fourWay`

## Cómo cambiar la cantidad de preguntas y el porcentaje de aprobación

Dos opciones:

1. **Desde la app**: ícono de engranaje (esquina superior derecha) → ajusta
   *Preguntas por examen* y *Porcentaje mínimo para aprobar*. Se guarda en
   `localStorage` y aplica inmediatamente.
2. **Por código**: edita los valores `DEFAULTS` al inicio de `js/app.js`:

```js
const DEFAULTS = {
  QUESTIONS_PER_EXAM: 25,
  PASSING_PERCENT: 80,
  SHOW_TIMER: true,
  THEME: 'auto',
};
```

## Despliegue a GitHub Pages

El workflow `.github/workflows/deploy.yml` publica automáticamente el sitio
en GitHub Pages cada vez que se hace push a `main`.

Para activarlo:

1. **Settings → Pages**.
2. En *Build and deployment → Source* elige **GitHub Actions**.
3. Haz push a `main` (o ejecuta el workflow desde Actions).
4. La URL pública aparecerá en Actions y en Settings → Pages.

## Atajos de teclado

| Tecla | Acción |
|---|---|
| ← / → | Pregunta anterior / siguiente |
| 1 – 4 | Elegir opción A, B, C o D |
| F | Marcar / desmarcar pregunta con bandera |
| Esc | Cerrar modal de configuración |

## Privacidad

La app solo guarda en `localStorage` del navegador:
`dmv.lang` (idioma), `dmv.settings` (configuración) y `dmv.stats`
(historial de exámenes). No envía datos a ningún servidor ni usa cookies.

## Licencia

Proyecto educativo independiente, distribuido sin garantías. Las leyes,
multas y reglas pueden cambiar; consulta siempre el manual oficial vigente
del DMV de Colorado antes de tomar el examen real.
