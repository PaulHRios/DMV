# Simulador del Examen de Manejo de Colorado

Aplicación web estática que simula el examen escrito para la licencia de
conducir estándar del estado de Colorado. Está pensada como herramienta de
estudio: presenta preguntas reales basadas en el [Manual del Conductor de
Colorado (DR 2337)](https://dmv.colorado.gov/sites/dmv/files/documents/DR_2337SP_Jan2025_Spanish.pdf)
y muestra una calificación al final con la revisión de cada respuesta.

**Aviso:** Este es un proyecto educativo independiente. **No** es un examen
oficial del DMV ni está afiliado al gobierno del estado de Colorado.

## Características

- 100% estático (HTML, CSS y JavaScript vanilla). No necesita backend ni
  dependencias de Node.
- 190 preguntas bilingües (español / inglés) cubriendo señales, semáforos,
  derecho de paso, velocidad, distancia, DUI/DWAI, peatones y ciclistas,
  buses escolares, manejo en invierno, autopistas, estacionamiento, luces,
  adelantamiento, emergencias, documentos/seguro, reglas generales y
  rotondas.
- Cada examen toma 25 preguntas aleatorias **sin repetir** y mezcla el orden
  de las opciones para evitar memorización.
- Modo "Estudiar por categoría" con explicación inmediata.
- Selector de idioma español / inglés (inicia en español).
- Diseño responsivo (iPhone, iPad, escritorio).
- Despliegue automático a GitHub Pages mediante GitHub Actions desde la
  rama `main`.

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
├── index.html              # Estructura HTML de todas las vistas
├── css/styles.css          # Estilos
├── js/
│   ├── questions.js        # Banco de preguntas (bilingüe)
│   ├── i18n.js             # Textos de interfaz ES/EN
│   └── app.js              # Lógica del examen y modo estudio
├── .github/workflows/
│   └── deploy.yml          # Workflow de despliegue a GitHub Pages
└── .nojekyll               # Evita procesamiento Jekyll en Pages
```

## Cómo agregar más preguntas

Edita `js/questions.js` y añade un objeto al arreglo `window.QUESTIONS`. Cada
pregunta debe tener este formato:

```js
{
  id: 191,                          // ID único, entero
  category: 'signs',                // ver lista de categorías más abajo
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
  correctAnswer: 1,                 // índice 0-based de la respuesta correcta
  explanation: {
    es: 'Explicación breve en español.',
    en: 'Short explanation in English.'
  },
  sourceReference: {
    es: 'Manual del Conductor de Colorado · sección',
    en: 'Colorado Driver Handbook · section'
  }
}
```

Categorías disponibles (deben coincidir con `window.QUESTION_CATEGORIES` en
el mismo archivo y con las claves `cat.<nombre>` en `js/i18n.js`):

`signs`, `signals`, `rightOfWay`, `speed`, `following`, `alcohol`,
`pedestrians`, `schoolBus`, `winter`, `highway`, `parking`, `lights`,
`passing`, `emergency`, `documents`, `general`, `roundabout`.

Si quieres una **nueva categoría**, agrégala al arreglo
`window.QUESTION_CATEGORIES` y crea las traducciones `cat.miNuevaCategoria`
para `es` y `en` en `js/i18n.js`.

## Cómo cambiar la cantidad de preguntas y el porcentaje mínimo para aprobar

Edita `js/app.js`, al inicio del archivo:

```js
const CONFIG = {
  QUESTIONS_PER_EXAM: 25,   // número de preguntas que tomará cada examen
  PASSING_PERCENT: 80,      // porcentaje mínimo para aprobar
};
```

Cambia esos valores y guarda. El indicador del home y la lógica de
aprobación se actualizan automáticamente.

## Despliegue a GitHub Pages

El workflow `.github/workflows/deploy.yml` publica automáticamente el sitio
en GitHub Pages cada vez que se hace push a `main`.

Para activarlo en tu repositorio:

1. Ve a **Settings → Pages**.
2. En "Build and deployment" → "Source" elige **GitHub Actions**.
3. Haz push a `main` (o ejecuta el workflow manualmente desde la pestaña
   Actions).
4. La URL pública aparecerá en la pestaña Actions tras finalizar el deploy
   y también en Settings → Pages.

No hay que configurar nada más: el workflow sube la carpeta raíz tal cual
(archivos estáticos).

## Notas de privacidad

La app guarda únicamente el idioma seleccionado en `localStorage`
(`dmv.lang`). No envía datos a ningún servidor ni usa cookies.

## Licencia

Proyecto educativo independiente, distribuido sin garantías. Las leyes,
multas y reglas pueden cambiar; consulta siempre el manual oficial vigente
del DMV de Colorado antes de tomar el examen real.
