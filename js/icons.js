/* ============================================================================
   Iconos SVG inline para preguntas.
   Diseñados para parecerse a las señales reales del MUTCD (Manual on
   Uniform Traffic Control Devices), que están en dominio público.
   Todo se mantiene local — sin CDN, sin red.
   ============================================================================ */
(function (global) {
  'use strict';

  function s(content, opts) {
    opts = opts || {};
    const vb = opts.viewBox || '0 0 100 100';
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + vb + '" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid meet">' + content + '</svg>';
  }

  const ICONS = {

    /* ======================================================================
       SEÑALES REGLAMENTARIAS (R-series)
       ====================================================================== */

    /* R1-1 STOP */
    'sign.stop': s(
      '<polygon points="30,4 70,4 96,30 96,70 70,96 30,96 4,70 4,30" fill="#c8202a" stroke="#fff" stroke-width="2"/>' +
      '<polygon points="34,12 66,12 88,34 88,66 66,88 34,88 12,66 12,34" fill="none" stroke="#fff" stroke-width="2.5"/>' +
      '<text x="50" y="61" font-family="Arial Black, Impact, sans-serif" font-size="24" font-weight="900" fill="#fff" text-anchor="middle" letter-spacing="0.5">STOP</text>'
    ),

    /* R1-2 YIELD */
    'sign.yield': s(
      '<polygon points="50,94 4,8 96,8" fill="#c8202a"/>' +
      '<polygon points="50,82 16,16 84,16" fill="#fff" stroke="#c8202a" stroke-width="2"/>' +
      '<text x="50" y="46" font-family="Arial Black, Impact, sans-serif" font-size="14" font-weight="900" fill="#c8202a" text-anchor="middle" letter-spacing="0.5">YIELD</text>'
    ),

    /* R5-1 DO NOT ENTER */
    'sign.doNotEnter': s(
      '<rect x="6" y="6" width="88" height="88" rx="4" fill="#fff" stroke="#c8202a" stroke-width="2"/>' +
      '<circle cx="50" cy="42" r="28" fill="#c8202a"/>' +
      '<rect x="26" y="38" width="48" height="8" fill="#fff"/>' +
      '<text x="50" y="82" font-family="Arial Black, sans-serif" font-size="11" font-weight="900" fill="#222" text-anchor="middle">DO NOT</text>' +
      '<text x="50" y="92" font-family="Arial Black, sans-serif" font-size="9" font-weight="900" fill="#222" text-anchor="middle">ENTER</text>'
    ),

    /* R5-1a WRONG WAY */
    'sign.wrongWay': s(
      '<rect x="6" y="22" width="88" height="56" rx="2" fill="#c8202a" stroke="#fff" stroke-width="2"/>' +
      '<text x="50" y="45" font-family="Arial Black, sans-serif" font-size="13" font-weight="900" fill="#fff" text-anchor="middle">WRONG</text>' +
      '<text x="50" y="64" font-family="Arial Black, sans-serif" font-size="13" font-weight="900" fill="#fff" text-anchor="middle">WAY</text>'
    ),

    /* R4-7 KEEP RIGHT */
    'sign.keepRight': s(
      '<rect x="14" y="6" width="72" height="88" rx="4" fill="#fff" stroke="#222" stroke-width="2.5"/>' +
      '<text x="50" y="22" font-family="Arial Black, sans-serif" font-size="9" font-weight="900" fill="#222" text-anchor="middle">KEEP</text>' +
      '<text x="50" y="34" font-family="Arial Black, sans-serif" font-size="9" font-weight="900" fill="#222" text-anchor="middle">RIGHT</text>' +
      /* Flecha grande hacia abajo-derecha */
      '<path d="M32 50 L60 50 L60 42 L82 60 L60 78 L60 70 L32 70 Z" fill="#222"/>'
    ),

    /* R6-1 ONE WAY */
    'sign.oneWay': s(
      '<rect x="4" y="36" width="92" height="28" fill="#222"/>' +
      '<text x="22" y="56" font-family="Arial Black, sans-serif" font-size="10" font-weight="900" fill="#fff">ONE WAY</text>' +
      '<polygon points="64,42 84,50 64,58" fill="#fff"/>'
    ),

    /* R3-1 NO TURN (representando "no right turn") */
    'sign.noTurn': s(
      '<rect x="6" y="6" width="88" height="88" rx="4" fill="#fff" stroke="#222" stroke-width="2"/>' +
      '<circle cx="50" cy="50" r="34" fill="none" stroke="#c8202a" stroke-width="6"/>' +
      /* Flecha de giro */
      '<path d="M32 70 Q32 40 60 40 L56 32 L72 44 L56 56 L60 48 Q40 48 40 70 Z" fill="#222"/>' +
      '<line x1="20" y1="20" x2="80" y2="80" stroke="#c8202a" stroke-width="7" stroke-linecap="round"/>'
    ),

    /* R2-1 SPEED LIMIT (genérico) */
    'sign.speedLimit': s(
      '<rect x="14" y="4" width="72" height="92" rx="3" fill="#fff" stroke="#222" stroke-width="3"/>' +
      '<text x="50" y="22" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#222" text-anchor="middle">SPEED</text>' +
      '<text x="50" y="36" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#222" text-anchor="middle">LIMIT</text>' +
      '<text x="50" y="80" font-family="Arial Black, sans-serif" font-size="40" font-weight="900" fill="#222" text-anchor="middle">25</text>'
    ),

    /* W14-3 NO PASSING ZONE (pendón) */
    'sign.noPassing': s(
      '<polygon points="6,40 94,8 94,72 6,40" fill="#f7c948" stroke="#222" stroke-width="2.5"/>' +
      '<text x="46" y="40" font-family="Arial Black, sans-serif" font-size="8" font-weight="900" fill="#222" text-anchor="middle">NO PASSING</text>' +
      '<text x="46" y="50" font-family="Arial Black, sans-serif" font-size="7" font-weight="900" fill="#222" text-anchor="middle">ZONE</text>'
    ),

    /* ======================================================================
       SEÑALES DE ADVERTENCIA (W-series, diamantes amarillos)
       ====================================================================== */

    /* W-blank: diamante amarillo genérico */
    'sign.warningBlank': s(
      '<polygon points="50,6 94,50 50,94 6,50" fill="#f7c948" stroke="#222" stroke-width="3"/>' +
      '<polygon points="50,14 86,50 50,86 14,50" fill="none" stroke="#222" stroke-width="1"/>'
    ),

    /* W8-5 SLIPPERY WHEN WET (coche con marcas de deslizamiento) */
    'sign.slippery': s(
      '<polygon points="50,6 94,50 50,94 6,50" fill="#f7c948" stroke="#222" stroke-width="3"/>' +
      /* Cuerpo del auto en vista 3/4 */
      '<path d="M26 50 Q26 42 32 42 L40 42 L46 32 L62 32 L66 42 L74 42 Q76 42 76 50 L76 58 L24 58 Z" fill="#222"/>' +
      /* Ventanas (huecos amarillos) */
      '<path d="M44 36 L60 36 L64 42 L42 42 Z" fill="#f7c948"/>' +
      /* Ruedas */
      '<circle cx="34" cy="60" r="5" fill="#222"/>' +
      '<circle cx="66" cy="60" r="5" fill="#222"/>' +
      /* Marcas zigzag de patinaje atrás del auto */
      '<path d="M14 74 Q24 66 34 74 T54 74 T74 74 T86 70" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<path d="M14 82 Q24 74 34 82 T54 82 T74 82 T86 78" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>'
    ),

    /* W6-3 TWO-WAY TRAFFIC AHEAD */
    'sign.twoWay': s(
      '<polygon points="50,6 94,50 50,94 6,50" fill="#f7c948" stroke="#222" stroke-width="3"/>' +
      /* Flecha izquierda apuntando ARRIBA */
      '<polygon points="32,72 32,34 24,34 38,18 52,34 44,34 44,72" fill="#222"/>' +
      /* Flecha derecha apuntando ABAJO */
      '<polygon points="56,28 56,66 48,66 62,82 76,66 68,66 68,28" fill="#222"/>'
    ),

    /* W11-3 DEER CROSSING (venado) */
    'sign.deer': s(
      '<polygon points="50,6 94,50 50,94 6,50" fill="#f7c948" stroke="#222" stroke-width="3"/>' +
      /* Venado saltando hacia la derecha */
      '<g fill="#222">' +
      /* Cuerpo */
      '<path d="M28 56 Q24 52 26 48 L34 46 L46 46 L54 48 L64 46 Q68 44 70 40 L72 38 L74 42 L72 48 L74 50 L72 52 L70 50 L66 54 L60 58 L52 60 L36 60 Z"/>' +
      /* Cuello + cabeza */
      '<path d="M68 38 L72 30 L76 30 L78 34 L76 40 L72 42 Z"/>' +
      /* Patas delanteras (saltando) */
      '<path d="M58 58 L60 70 L62 78 L58 78 L56 70 Z"/>' +
      '<path d="M50 58 L52 72 L54 80 L50 80 L48 72 Z"/>' +
      /* Patas traseras */
      '<path d="M34 58 L34 72 L36 80 L32 80 L30 72 Z"/>' +
      '<path d="M40 58 L40 70 L42 78 L38 78 L36 70 Z"/>' +
      /* Cola */
      '<path d="M28 50 L24 48 L26 54 Z"/>' +
      '</g>' +
      /* Astas */
      '<g stroke="#222" stroke-width="1.8" fill="none" stroke-linecap="round">' +
      '<line x1="74" y1="32" x2="70" y2="22"/>' +
      '<line x1="76" y1="30" x2="80" y2="22"/>' +
      '<line x1="72" y1="28" x2="68" y2="24"/>' +
      '<line x1="78" y1="26" x2="82" y2="24"/>' +
      '</g>'
    ),

    /* W4-1 MERGE */
    'sign.merge': s(
      '<polygon points="50,6 94,50 50,94 6,50" fill="#f7c948" stroke="#222" stroke-width="3"/>' +
      /* Flecha principal recta hacia arriba */
      '<polygon points="44,82 44,28 36,28 50,12 64,28 56,28 56,82" fill="#222"/>' +
      /* Línea que se incorpora desde la derecha */
      '<path d="M78 78 Q66 60 56 50" stroke="#222" stroke-width="6" fill="none" stroke-linecap="round"/>'
    ),

    /* W1-2 CURVE (curva a la derecha) */
    'sign.curve': s(
      '<polygon points="50,6 94,50 50,94 6,50" fill="#f7c948" stroke="#222" stroke-width="3"/>' +
      /* Flecha curva */
      '<path d="M40 86 L40 64 Q40 44 60 44 L72 44" stroke="#222" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<polygon points="80,44 64,34 64,54" fill="#222"/>'
    ),

    /* W2-4 T INTERSECTION */
    'sign.tIntersection': s(
      '<polygon points="50,6 94,50 50,94 6,50" fill="#f7c948" stroke="#222" stroke-width="3"/>' +
      /* Camino vertical (el que viene) */
      '<rect x="46" y="48" width="10" height="36" fill="#222"/>' +
      /* Camino horizontal (intersección) */
      '<rect x="18" y="40" width="66" height="10" fill="#222"/>' +
      /* Flechas en los extremos del horizontal */
      '<polygon points="14,45 24,38 24,52" fill="#222"/>' +
      '<polygon points="88,45 78,38 78,52" fill="#222"/>'
    ),

    /* W21-1 ROAD WORK (trabajador con pala) — diamante naranja */
    'sign.construction': s(
      '<polygon points="50,6 94,50 50,94 6,50" fill="#f06a16" stroke="#222" stroke-width="3"/>' +
      /* Casco */
      '<path d="M36 32 Q36 26 44 26 Q52 26 52 32 L52 36 L36 36 Z" fill="#222"/>' +
      '<rect x="34" y="36" width="20" height="3" fill="#222"/>' +
      /* Cara/cuello */
      '<rect x="42" y="39" width="4" height="3" fill="#222"/>' +
      /* Torso inclinado */
      '<path d="M40 42 L36 58 L46 58 L48 42 Z" fill="#222"/>' +
      /* Brazo extendido (sostiene mango) */
      '<path d="M46 46 L66 38 L68 42 L48 50 Z" fill="#222"/>' +
      /* Piernas separadas */
      '<path d="M36 58 L32 76 L38 76 L42 62 L44 62 L48 76 L54 76 L50 58 Z" fill="#222"/>' +
      /* Mango y pala */
      '<line x1="66" y1="40" x2="82" y2="22" stroke="#222" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M80 20 L86 16 L90 22 L84 26 Z" fill="#222"/>' +
      /* Montículo de tierra */
      '<path d="M16 84 Q34 74 50 80 Q68 86 84 80" stroke="#222" stroke-width="2.5" fill="none" stroke-linecap="round"/>'
    ),

    /* S1-1 SCHOOL CROSSING (pentágono amarillo-verde) */
    'sign.school': s(
      '<polygon points="50,4 94,30 86,92 14,92 6,30" fill="#cee443" stroke="#222" stroke-width="3"/>' +
      '<g fill="#222">' +
      /* Figura adulta (izquierda) */
      '<circle cx="38" cy="34" r="5"/>' +
      '<path d="M34 40 L34 58 L38 58 L38 48 L42 48 L42 58 L46 58 L46 40 Z"/>' +
      /* Brazos */
      '<path d="M34 42 L28 50 L31 52 L37 44 Z"/>' +
      '<path d="M46 42 L52 50 L49 52 L43 44 Z"/>' +
      /* Figura niño (derecha, más pequeño) */
      '<circle cx="62" cy="40" r="4"/>' +
      '<path d="M59 45 L59 60 L62 60 L62 52 L65 52 L65 60 L68 60 L68 45 Z"/>' +
      /* Brazos */
      '<path d="M59 47 L54 53 L56 55 L61 49 Z"/>' +
      '<path d="M68 47 L72 53 L70 55 L66 49 Z"/>' +
      '</g>' +
      /* Línea del suelo */
      '<line x1="16" y1="74" x2="84" y2="74" stroke="#222" stroke-width="2.5"/>'
    ),

    /* W10-1 RAILROAD ADVANCE WARNING */
    'sign.railroad': s(
      '<circle cx="50" cy="50" r="44" fill="#f7c948" stroke="#222" stroke-width="3"/>' +
      '<line x1="10" y1="50" x2="90" y2="50" stroke="#222" stroke-width="4"/>' +
      '<line x1="50" y1="10" x2="50" y2="90" stroke="#222" stroke-width="4"/>' +
      '<text x="34" y="42" font-family="Arial Black, sans-serif" font-size="16" font-weight="900" fill="#222">R</text>' +
      '<text x="56" y="70" font-family="Arial Black, sans-serif" font-size="16" font-weight="900" fill="#222">R</text>'
    ),

    /* R15-1 CROSSBUCK + barreras y luces */
    'sign.railroadCrossbuck': s(
      /* Postes de barreras (lado oscuro) */
      '<rect x="4" y="40" width="6" height="40" fill="#222"/>' +
      '<rect x="90" y="40" width="6" height="40" fill="#222"/>' +
      /* Barreras horizontales (rayas blancas y rojas) */
      '<g>' +
      '<rect x="10" y="48" width="10" height="6" fill="#fff" stroke="#222" stroke-width="1"/>' +
      '<rect x="20" y="48" width="10" height="6" fill="#c8202a" stroke="#222" stroke-width="1"/>' +
      '<rect x="30" y="48" width="10" height="6" fill="#fff" stroke="#222" stroke-width="1"/>' +
      '<rect x="40" y="48" width="10" height="6" fill="#c8202a" stroke="#222" stroke-width="1"/>' +
      '<rect x="50" y="48" width="10" height="6" fill="#fff" stroke="#222" stroke-width="1"/>' +
      '<rect x="60" y="48" width="10" height="6" fill="#c8202a" stroke="#222" stroke-width="1"/>' +
      '<rect x="70" y="48" width="10" height="6" fill="#fff" stroke="#222" stroke-width="1"/>' +
      '<rect x="80" y="48" width="10" height="6" fill="#c8202a" stroke="#222" stroke-width="1"/>' +
      '</g>' +
      /* Crossbuck (X blanco encima) */
      '<g transform="translate(0 -4)">' +
      '<rect x="32" y="14" width="36" height="8" fill="#fff" stroke="#222" stroke-width="2" transform="rotate(45 50 18)"/>' +
      '<rect x="32" y="14" width="36" height="8" fill="#fff" stroke="#222" stroke-width="2" transform="rotate(-45 50 18)"/>' +
      '</g>' +
      /* Luces rojas parpadeando */
      '<circle cx="22" cy="36" r="5" fill="#d63b3b"/>' +
      '<circle cx="78" cy="36" r="5" fill="#3a3a3a"/>'
    ),

    /* S3-1 SCHOOL BUS STOP AHEAD */
    'sign.schoolBusStop': s(
      '<polygon points="50,6 94,50 50,94 6,50" fill="#f7c948" stroke="#222" stroke-width="3"/>' +
      /* Carrocería del bus */
      '<rect x="22" y="40" width="52" height="20" rx="2" fill="#222"/>' +
      /* Cabina/frente */
      '<rect x="74" y="46" width="8" height="14" rx="2" fill="#222"/>' +
      /* Ventanas */
      '<rect x="26" y="44" width="6" height="6" fill="#f7c948"/>' +
      '<rect x="36" y="44" width="6" height="6" fill="#f7c948"/>' +
      '<rect x="46" y="44" width="6" height="6" fill="#f7c948"/>' +
      '<rect x="56" y="44" width="6" height="6" fill="#f7c948"/>' +
      '<rect x="66" y="44" width="6" height="6" fill="#f7c948"/>' +
      '<rect x="75" y="48" width="5" height="6" fill="#f7c948"/>' +
      /* Ruedas */
      '<circle cx="32" cy="62" r="4" fill="#222"/>' +
      '<circle cx="64" cy="62" r="4" fill="#222"/>' +
      /* "SCHOOL BUS" texto */
      '<text x="50" y="78" font-family="Arial Black, sans-serif" font-size="8" font-weight="900" fill="#222" text-anchor="middle">SCHOOL BUS</text>'
    ),

    /* ======================================================================
       SEÑALES DE GUÍA Y SERVICIOS
       ====================================================================== */

    /* Servicios (azul) */
    'sign.service': s(
      '<rect x="10" y="14" width="80" height="72" rx="3" fill="#0a5fa1" stroke="#fff" stroke-width="2.5"/>' +
      /* Símbolo de cuchillo y tenedor */
      '<rect x="38" y="32" width="3" height="32" fill="#fff"/>' +
      '<path d="M38 32 L38 42 Q34 42 34 38 L34 32 Z" fill="#fff"/>' +
      '<rect x="58" y="32" width="3" height="32" fill="#fff"/>' +
      '<rect x="55" y="32" width="3" height="14" fill="#fff"/>' +
      '<rect x="63" y="32" width="3" height="14" fill="#fff"/>' +
      '<text x="50" y="80" font-family="Arial Black, sans-serif" font-size="8" font-weight="900" fill="#fff" text-anchor="middle">FOOD</text>'
    ),

    /* Recreación (marrón) */
    'sign.recreation': s(
      '<rect x="10" y="14" width="80" height="72" rx="3" fill="#6b3a1e" stroke="#fff" stroke-width="2.5"/>' +
      /* Carpa/montaña */
      '<polygon points="30,68 50,30 70,68" fill="#fff"/>' +
      '<polygon points="40,68 50,46 60,68" fill="#6b3a1e"/>' +
      '<text x="50" y="80" font-family="Arial Black, sans-serif" font-size="7" font-weight="900" fill="#fff" text-anchor="middle">PARK</text>'
    ),

    /* Guía (verde) */
    'sign.guide': s(
      '<rect x="4" y="20" width="92" height="60" rx="2" fill="#0e7a3e" stroke="#fff" stroke-width="2.5"/>' +
      '<text x="50" y="44" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">Denver</text>' +
      '<text x="50" y="62" font-family="Arial, sans-serif" font-size="10" font-weight="600" fill="#fff" text-anchor="middle">22 MILES</text>' +
      '<polygon points="78,70 88,64 88,76" fill="#fff"/>'
    ),

    /* Vehículo lento (triángulo naranja reflectante) */
    'sign.slowVehicleTriangle': s(
      '<polygon points="50,12 14,82 86,82" fill="#f06a16" stroke="#c8202a" stroke-width="5"/>' +
      '<polygon points="50,28 26,72 74,72" fill="#f06a16" stroke="#c8202a" stroke-width="2"/>' +
      '<text x="50" y="64" font-family="Arial Black, sans-serif" font-size="11" font-weight="900" fill="#c8202a" text-anchor="middle">SMV</text>'
    ),

    /* ======================================================================
       SEMÁFOROS DE TRES LUCES (vista frontal)
       ====================================================================== */

    'signal.red': s(
      '<rect x="30" y="4" width="40" height="92" rx="6" fill="#1a1a1a" stroke="#444" stroke-width="1"/>' +
      '<circle cx="50" cy="22" r="11" fill="#e64545"/>' +
      '<circle cx="50" cy="22" r="6" fill="#ff8a8a" opacity="0.65"/>' +
      '<circle cx="50" cy="50" r="11" fill="#3a3a3a"/>' +
      '<circle cx="50" cy="78" r="11" fill="#3a3a3a"/>'
    ),

    'signal.yellow': s(
      '<rect x="30" y="4" width="40" height="92" rx="6" fill="#1a1a1a" stroke="#444" stroke-width="1"/>' +
      '<circle cx="50" cy="22" r="11" fill="#3a3a3a"/>' +
      '<circle cx="50" cy="50" r="11" fill="#f4c542"/>' +
      '<circle cx="50" cy="50" r="6" fill="#fff2b0" opacity="0.65"/>' +
      '<circle cx="50" cy="78" r="11" fill="#3a3a3a"/>'
    ),

    'signal.green': s(
      '<rect x="30" y="4" width="40" height="92" rx="6" fill="#1a1a1a" stroke="#444" stroke-width="1"/>' +
      '<circle cx="50" cy="22" r="11" fill="#3a3a3a"/>' +
      '<circle cx="50" cy="50" r="11" fill="#3a3a3a"/>' +
      '<circle cx="50" cy="78" r="11" fill="#34c759"/>' +
      '<circle cx="50" cy="78" r="6" fill="#b6ecb9" opacity="0.65"/>'
    ),

    'signal.flashingRed': s(
      '<rect x="30" y="4" width="40" height="92" rx="6" fill="#1a1a1a" stroke="#444" stroke-width="1"/>' +
      '<circle cx="50" cy="22" r="11" fill="#e64545"/>' +
      /* Rayos de parpadeo */
      '<g stroke="#e64545" stroke-width="2" fill="none" stroke-linecap="round">' +
      '<line x1="50" y1="6" x2="50" y2="1"/>' +
      '<line x1="78" y1="22" x2="84" y2="22"/>' +
      '<line x1="22" y1="22" x2="16" y2="22"/>' +
      '<line x1="68" y1="6" x2="74" y2="2"/>' +
      '<line x1="32" y1="6" x2="26" y2="2"/>' +
      '</g>' +
      '<circle cx="50" cy="50" r="11" fill="#3a3a3a"/>' +
      '<circle cx="50" cy="78" r="11" fill="#3a3a3a"/>'
    ),

    'signal.flashingYellow': s(
      '<rect x="30" y="4" width="40" height="92" rx="6" fill="#1a1a1a" stroke="#444" stroke-width="1"/>' +
      '<circle cx="50" cy="22" r="11" fill="#3a3a3a"/>' +
      '<circle cx="50" cy="50" r="11" fill="#f4c542"/>' +
      '<g stroke="#f4c542" stroke-width="2" fill="none" stroke-linecap="round">' +
      '<line x1="50" y1="34" x2="50" y2="40"/>' +
      '<line x1="78" y1="50" x2="84" y2="50"/>' +
      '<line x1="22" y1="50" x2="16" y2="50"/>' +
      '</g>' +
      '<circle cx="50" cy="78" r="11" fill="#3a3a3a"/>'
    ),

    /* Flecha verde de giro protegido (apunta a la izquierda — el caso más común) */
    'signal.greenArrow': s(
      '<rect x="30" y="4" width="40" height="92" rx="6" fill="#1a1a1a" stroke="#444" stroke-width="1"/>' +
      '<circle cx="50" cy="22" r="11" fill="#3a3a3a"/>' +
      '<circle cx="50" cy="50" r="11" fill="#3a3a3a"/>' +
      /* Flecha verde a la izquierda en la lámpara inferior */
      '<polygon points="60,86 60,74 48,74 48,68 36,80 48,92 48,86" fill="#34c759"/>'
    ),

    /* Flecha amarilla intermitente de giro permitido */
    'signal.flashingYellowArrow': s(
      '<rect x="30" y="4" width="40" height="92" rx="6" fill="#1a1a1a" stroke="#444" stroke-width="1"/>' +
      '<circle cx="50" cy="22" r="11" fill="#3a3a3a"/>' +
      '<polygon points="60,58 60,46 48,46 48,40 36,52 48,64 48,58" fill="#f4c542"/>' +
      '<g stroke="#f4c542" stroke-width="2" fill="none" stroke-linecap="round">' +
      '<line x1="68" y1="52" x2="74" y2="52"/>' +
      '<line x1="58" y1="36" x2="62" y2="32"/>' +
      '<line x1="58" y1="68" x2="62" y2="72"/>' +
      '</g>' +
      '<circle cx="50" cy="78" r="11" fill="#3a3a3a"/>'
    ),

    /* Control de carril: flecha verde HACIA ABAJO (carril abierto) */
    'signal.laneGreenArrow': s(
      '<rect x="4" y="8" width="92" height="84" rx="6" fill="#1a1a1a" stroke="#444" stroke-width="1"/>' +
      '<polygon points="50,82 24,52 38,52 38,22 62,22 62,52 76,52" fill="#34c759"/>' +
      '<polygon points="50,82 24,52 38,52 38,22 62,22 62,52 76,52" fill="#b6ecb9" opacity="0.3"/>'
    ),

    /* Control de carril: X roja (carril cerrado) */
    'signal.laneRedX': s(
      '<rect x="4" y="8" width="92" height="84" rx="6" fill="#1a1a1a" stroke="#444" stroke-width="1"/>' +
      '<line x1="24" y1="22" x2="76" y2="78" stroke="#e64545" stroke-width="12" stroke-linecap="round"/>' +
      '<line x1="76" y1="22" x2="24" y2="78" stroke="#e64545" stroke-width="12" stroke-linecap="round"/>'
    ),

    /* Semáforo peatonal — mano detente */
    'signal.pedHand': s(
      '<rect x="20" y="6" width="60" height="88" rx="4" fill="#1a1a1a" stroke="#444" stroke-width="1"/>' +
      /* Mano levantada */
      '<g fill="#f97316">' +
      /* Palma */
      '<rect x="36" y="38" width="28" height="34" rx="4"/>' +
      /* Dedos */
      '<rect x="38" y="22" width="5" height="20" rx="2"/>' +
      '<rect x="45" y="18" width="5" height="24" rx="2"/>' +
      '<rect x="52" y="20" width="5" height="22" rx="2"/>' +
      '<rect x="59" y="24" width="5" height="18" rx="2"/>' +
      /* Pulgar */
      '<rect x="32" y="46" width="6" height="14" rx="2"/>' +
      '</g>'
    ),

    /* Semáforo peatonal — figura caminando */
    'signal.pedWalk': s(
      '<rect x="20" y="6" width="60" height="88" rx="4" fill="#1a1a1a" stroke="#444" stroke-width="1"/>' +
      '<g fill="#fff">' +
      /* Cabeza */
      '<circle cx="48" cy="22" r="5"/>' +
      /* Torso */
      '<path d="M44 28 L42 50 L50 50 L52 28 Z"/>' +
      /* Brazo adelante */
      '<path d="M48 32 L60 40 L62 36 L50 28 Z"/>' +
      /* Brazo atrás */
      '<path d="M44 32 L34 40 L36 44 L46 36 Z"/>' +
      /* Pierna adelante */
      '<path d="M48 48 L58 68 L62 72 L52 50 Z"/>' +
      /* Pierna atrás */
      '<path d="M44 48 L36 66 L40 72 L46 50 Z"/>' +
      '</g>'
    ),

    /* ======================================================================
       MARCAS VIALES (vista plano del pavimento)
       ====================================================================== */

    'lane.solidYellow': s(
      '<rect x="0" y="0" width="100" height="100" fill="#3b3b3b"/>' +
      '<line x1="50" y1="2" x2="50" y2="98" stroke="#f4c542" stroke-width="5"/>'
    ),

    'lane.doubleYellow': s(
      '<rect x="0" y="0" width="100" height="100" fill="#3b3b3b"/>' +
      '<line x1="44" y1="2" x2="44" y2="98" stroke="#f4c542" stroke-width="5"/>' +
      '<line x1="56" y1="2" x2="56" y2="98" stroke="#f4c542" stroke-width="5"/>'
    ),

    'lane.brokenYellow': s(
      '<rect x="0" y="0" width="100" height="100" fill="#3b3b3b"/>' +
      '<g stroke="#f4c542" stroke-width="5">' +
      '<line x1="50" y1="4" x2="50" y2="20"/>' +
      '<line x1="50" y1="32" x2="50" y2="48"/>' +
      '<line x1="50" y1="60" x2="50" y2="76"/>' +
      '<line x1="50" y1="88" x2="50" y2="100"/>' +
      '</g>'
    ),

    'lane.solidWhite': s(
      '<rect x="0" y="0" width="100" height="100" fill="#3b3b3b"/>' +
      '<line x1="50" y1="2" x2="50" y2="98" stroke="#fff" stroke-width="5"/>'
    ),

    'lane.brokenWhite': s(
      '<rect x="0" y="0" width="100" height="100" fill="#3b3b3b"/>' +
      '<g stroke="#fff" stroke-width="5">' +
      '<line x1="50" y1="4" x2="50" y2="20"/>' +
      '<line x1="50" y1="32" x2="50" y2="48"/>' +
      '<line x1="50" y1="60" x2="50" y2="76"/>' +
      '<line x1="50" y1="88" x2="50" y2="100"/>' +
      '</g>'
    ),

    /* Carril central de dos sentidos para girar a la izquierda */
    'lane.twoWayLeft': s(
      '<rect x="0" y="0" width="100" height="100" fill="#3b3b3b"/>' +
      /* Líneas exteriores blancas (carriles normales) */
      '<line x1="14" y1="2" x2="14" y2="98" stroke="#fff" stroke-width="3"/>' +
      '<line x1="86" y1="2" x2="86" y2="98" stroke="#fff" stroke-width="3"/>' +
      /* Carril central con líneas amarillas: sólida exterior + discontinua interior */
      '<line x1="32" y1="2" x2="32" y2="98" stroke="#f4c542" stroke-width="3"/>' +
      '<line x1="68" y1="2" x2="68" y2="98" stroke="#f4c542" stroke-width="3"/>' +
      '<g stroke="#f4c542" stroke-width="3">' +
      '<line x1="38" y1="6" x2="38" y2="20"/>' +
      '<line x1="38" y1="34" x2="38" y2="48"/>' +
      '<line x1="38" y1="62" x2="38" y2="76"/>' +
      '<line x1="38" y1="90" x2="38" y2="100"/>' +
      '<line x1="62" y1="6" x2="62" y2="20"/>' +
      '<line x1="62" y1="34" x2="62" y2="48"/>' +
      '<line x1="62" y1="62" x2="62" y2="76"/>' +
      '<line x1="62" y1="90" x2="62" y2="100"/>' +
      '</g>' +
      /* Flechas de giro a la izquierda en el carril central */
      '<polygon points="50,30 50,22 42,22 42,18 34,26 42,34 42,30" fill="#fff"/>' +
      '<polygon points="50,70 50,78 58,78 58,82 66,74 58,66 58,70" fill="#fff"/>'
    ),

    /* ======================================================================
       SEÑALES MANUALES DEL BRAZO
       (vista lateral del conductor sacando el brazo izquierdo)
       ====================================================================== */

    'hand.left': s(
      /* Puerta del auto */
      '<rect x="4" y="38" width="58" height="36" rx="3" fill="#1d3a6a"/>' +
      '<rect x="54" y="42" width="10" height="16" fill="#0b2545"/>' +
      /* Brazo extendido recto hacia la izquierda (en realidad sale a la derecha del auto en SVG, hacia afuera del conductor) */
      '<rect x="62" y="52" width="26" height="8" rx="3" fill="#f3c699"/>' +
      '<circle cx="90" cy="56" r="6" fill="#f3c699"/>' +
      '<text x="50" y="92" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="currentColor" text-anchor="middle">GIRO IZQ / LEFT TURN</text>'
    ),

    'hand.right': s(
      /* Puerta */
      '<rect x="4" y="38" width="58" height="36" rx="3" fill="#1d3a6a"/>' +
      '<rect x="54" y="42" width="10" height="16" fill="#0b2545"/>' +
      /* Brazo doblado hacia arriba (90°) */
      '<rect x="62" y="50" width="10" height="10" rx="3" fill="#f3c699"/>' +
      '<rect x="62" y="18" width="10" height="34" rx="3" fill="#f3c699"/>' +
      '<circle cx="67" cy="16" r="6" fill="#f3c699"/>' +
      '<text x="50" y="92" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="currentColor" text-anchor="middle">GIRO DER / RIGHT TURN</text>'
    ),

    'hand.stop': s(
      /* Puerta */
      '<rect x="4" y="38" width="58" height="36" rx="3" fill="#1d3a6a"/>' +
      '<rect x="54" y="42" width="10" height="16" fill="#0b2545"/>' +
      /* Brazo doblado hacia abajo (90°) */
      '<rect x="62" y="50" width="10" height="10" rx="3" fill="#f3c699"/>' +
      '<rect x="62" y="58" width="10" height="28" rx="3" fill="#f3c699"/>' +
      '<circle cx="67" cy="88" r="6" fill="#f3c699"/>' +
      '<text x="50" y="98" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="currentColor" text-anchor="middle">PARAR / STOP</text>'
    ),

    /* ======================================================================
       ESTACIONAMIENTO EN PENDIENTE
       ====================================================================== */

    'park.downhillCurb': s(
      '<rect x="0" y="0" width="100" height="100" fill="none"/>' +
      /* Pendiente bajando */
      '<polygon points="0,30 100,75 100,100 0,100" fill="#a3b1c2"/>' +
      /* Banqueta (curb) */
      '<rect x="0" y="76" width="100" height="6" fill="#1d3a6a"/>' +
      /* Auto */
      '<g transform="translate(30 42) rotate(20)">' +
      '<rect x="0" y="0" width="50" height="18" rx="4" fill="#0b2545"/>' +
      '<rect x="6" y="-12" width="38" height="16" rx="4" fill="#0b2545"/>' +
      '<rect x="10" y="-8" width="14" height="10" fill="#88c3ff" opacity="0.7"/>' +
      '<rect x="26" y="-8" width="14" height="10" fill="#88c3ff" opacity="0.7"/>' +
      '<circle cx="10" cy="20" r="6" fill="#222"/>' +
      '<circle cx="40" cy="20" r="6" fill="#222"/>' +
      /* Ruedas giradas hacia la banqueta (abajo cuesta abajo) */
      '<line x1="6" y1="24" x2="14" y2="32" stroke="#c8a951" stroke-width="3"/>' +
      '<line x1="36" y1="24" x2="44" y2="32" stroke="#c8a951" stroke-width="3"/>' +
      '</g>' +
      '<text x="50" y="14" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="currentColor" text-anchor="middle">Cuesta abajo · ruedas hacia banqueta</text>'
    ),

    'park.uphillCurb': s(
      '<rect x="0" y="0" width="100" height="100" fill="none"/>' +
      '<polygon points="0,75 100,30 100,100 0,100" fill="#a3b1c2"/>' +
      '<rect x="0" y="76" width="100" height="6" fill="#1d3a6a"/>' +
      '<g transform="translate(30 42) rotate(-20)">' +
      '<rect x="0" y="0" width="50" height="18" rx="4" fill="#0b2545"/>' +
      '<rect x="6" y="-12" width="38" height="16" rx="4" fill="#0b2545"/>' +
      '<rect x="10" y="-8" width="14" height="10" fill="#88c3ff" opacity="0.7"/>' +
      '<rect x="26" y="-8" width="14" height="10" fill="#88c3ff" opacity="0.7"/>' +
      '<circle cx="10" cy="20" r="6" fill="#222"/>' +
      '<circle cx="40" cy="20" r="6" fill="#222"/>' +
      /* Ruedas giradas LEJOS de la banqueta (cuesta arriba) */
      '<line x1="14" y1="24" x2="6" y2="32" stroke="#c8a951" stroke-width="3"/>' +
      '<line x1="44" y1="24" x2="36" y2="32" stroke="#c8a951" stroke-width="3"/>' +
      '</g>' +
      '<text x="50" y="14" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="currentColor" text-anchor="middle">Cuesta arriba · ruedas hacia afuera</text>'
    ),

    'park.noCurb': s(
      '<rect x="0" y="0" width="100" height="100" fill="none"/>' +
      '<polygon points="0,30 100,75 100,100 0,100" fill="#7a8a98"/>' +
      /* Sin banqueta — borde del camino oscuro */
      '<rect x="0" y="84" width="100" height="14" fill="#3b3b3b"/>' +
      '<g transform="translate(30 42) rotate(20)">' +
      '<rect x="0" y="0" width="50" height="18" rx="4" fill="#0b2545"/>' +
      '<rect x="6" y="-12" width="38" height="16" rx="4" fill="#0b2545"/>' +
      '<rect x="10" y="-8" width="14" height="10" fill="#88c3ff" opacity="0.7"/>' +
      '<rect x="26" y="-8" width="14" height="10" fill="#88c3ff" opacity="0.7"/>' +
      '<circle cx="10" cy="20" r="6" fill="#222"/>' +
      '<circle cx="40" cy="20" r="6" fill="#222"/>' +
      /* Ruedas hacia el borde del camino */
      '<line x1="6" y1="24" x2="14" y2="32" stroke="#c8a951" stroke-width="3"/>' +
      '<line x1="36" y1="24" x2="44" y2="32" stroke="#c8a951" stroke-width="3"/>' +
      '</g>' +
      '<text x="50" y="14" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="currentColor" text-anchor="middle">Sin banqueta · ruedas hacia el borde</text>'
    ),

    /* ======================================================================
       INTERSECCIONES Y DIAGRAMAS
       ====================================================================== */

    'inter.fourWay': s(
      '<rect x="0" y="0" width="100" height="100" fill="#a3b1c2"/>' +
      /* Calles */
      '<rect x="30" y="0" width="40" height="100" fill="#3b3b3b"/>' +
      '<rect x="0" y="30" width="100" height="40" fill="#3b3b3b"/>' +
      /* Líneas amarillas en el centro de cada calle */
      '<g stroke="#f4c542" stroke-width="2">' +
      '<line x1="50" y1="0" x2="50" y2="26"/>' +
      '<line x1="50" y1="74" x2="50" y2="100"/>' +
      '<line x1="0" y1="50" x2="26" y2="50"/>' +
      '<line x1="74" y1="50" x2="100" y2="50"/>' +
      '</g>' +
      /* Cuatro señales STOP en las esquinas */
      '<g fill="#c8202a" stroke="#fff" stroke-width="0.8">' +
      '<polygon points="22,22 30,22 36,28 36,36 30,42 22,42 16,36 16,28"/>' +
      '<polygon points="68,22 78,22 84,28 84,36 78,42 68,42 62,36 62,28"/>' +
      '<polygon points="22,64 30,64 36,70 36,78 30,84 22,84 16,78 16,70"/>' +
      '<polygon points="68,64 78,64 84,70 84,78 78,84 68,84 62,78 62,70"/>' +
      '</g>'
    ),

    /* ======================================================================
       VEHÍCULOS (para preguntas que los referencian)
       ====================================================================== */

    /* Autobús escolar con brazo de PARE extendido y luces rojas */
    'vehicle.schoolBusWithStop': s(
      /* Carrocería del bus (amarillo) */
      '<rect x="14" y="34" width="60" height="36" rx="4" fill="#f4c542" stroke="#222" stroke-width="2"/>' +
      /* Cabina del frente */
      '<path d="M74 40 L86 50 L86 70 L74 70 Z" fill="#f4c542" stroke="#222" stroke-width="2"/>' +
      /* Ventanas */
      '<rect x="18" y="38" width="10" height="14" fill="#88c3ff"/>' +
      '<rect x="30" y="38" width="10" height="14" fill="#88c3ff"/>' +
      '<rect x="42" y="38" width="10" height="14" fill="#88c3ff"/>' +
      '<rect x="54" y="38" width="10" height="14" fill="#88c3ff"/>' +
      '<rect x="74" y="42" width="10" height="14" fill="#88c3ff"/>' +
      /* Línea negra característica */
      '<line x1="14" y1="56" x2="86" y2="56" stroke="#222" stroke-width="1.5"/>' +
      /* Ruedas */
      '<circle cx="28" cy="74" r="6" fill="#222"/>' +
      '<circle cx="64" cy="74" r="6" fill="#222"/>' +
      '<circle cx="28" cy="74" r="2.5" fill="#888"/>' +
      '<circle cx="64" cy="74" r="2.5" fill="#888"/>' +
      /* Brazo de PARE extendido (lado conductor) */
      '<rect x="2" y="46" width="14" height="14" fill="#c8202a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="9" y="56" font-family="Arial Black, sans-serif" font-size="6" font-weight="900" fill="#fff" text-anchor="middle">STOP</text>' +
      /* Luces rojas parpadeantes arriba */
      '<circle cx="20" cy="30" r="3.5" fill="#e64545"/>' +
      '<circle cx="68" cy="30" r="3.5" fill="#e64545"/>' +
      '<g stroke="#e64545" stroke-width="1.5" fill="none">' +
      '<line x1="20" y1="22" x2="20" y2="18"/>' +
      '<line x1="68" y1="22" x2="68" y2="18"/>' +
      '</g>' +
      /* "SCHOOL BUS" texto */
      '<text x="50" y="64" font-family="Arial Black, sans-serif" font-size="7" font-weight="900" fill="#222" text-anchor="middle">SCHOOL BUS</text>'
    ),

    /* Tren ligero (light rail) */
    'vehicle.lightRail': s(
      /* Cuerpo del vagón */
      '<rect x="6" y="32" width="88" height="44" rx="3" fill="#3a4659" stroke="#222" stroke-width="2"/>' +
      /* Ventanas */
      '<rect x="10" y="38" width="14" height="14" fill="#88c3ff"/>' +
      '<rect x="28" y="38" width="14" height="14" fill="#88c3ff"/>' +
      '<rect x="46" y="38" width="14" height="14" fill="#88c3ff"/>' +
      '<rect x="64" y="38" width="14" height="14" fill="#88c3ff"/>' +
      '<rect x="82" y="40" width="8" height="10" fill="#88c3ff"/>' +
      /* Puerta */
      '<rect x="20" y="56" width="8" height="18" fill="#222"/>' +
      '<rect x="52" y="56" width="8" height="18" fill="#222"/>' +
      /* Faro frontal */
      '<circle cx="6" cy="58" r="3" fill="#fffd80"/>' +
      /* Pantógrafo arriba */
      '<line x1="40" y1="24" x2="50" y2="32" stroke="#222" stroke-width="2"/>' +
      '<line x1="60" y1="24" x2="50" y2="32" stroke="#222" stroke-width="2"/>' +
      '<line x1="40" y1="24" x2="60" y2="24" stroke="#222" stroke-width="2"/>' +
      /* Cable aéreo */
      '<line x1="0" y1="20" x2="100" y2="20" stroke="#888" stroke-width="1.5"/>' +
      /* Rieles */
      '<line x1="0" y1="84" x2="100" y2="84" stroke="#888" stroke-width="1.5"/>' +
      '<line x1="0" y1="90" x2="100" y2="90" stroke="#888" stroke-width="1.5"/>'
    ),

    /* Quitanieves (snow plow) */
    'vehicle.snowPlow': s(
      /* Camión */
      '<rect x="20" y="44" width="40" height="28" rx="2" fill="#f06a16" stroke="#222" stroke-width="2"/>' +
      /* Cabina */
      '<rect x="60" y="38" width="20" height="34" rx="2" fill="#f06a16" stroke="#222" stroke-width="2"/>' +
      /* Ventana cabina */
      '<rect x="64" y="42" width="14" height="14" fill="#88c3ff"/>' +
      /* Pala enorme adelante */
      '<polygon points="84,40 96,32 96,76 84,74" fill="#c8202a" stroke="#222" stroke-width="2"/>' +
      /* Líneas en la pala */
      '<line x1="86" y1="50" x2="94" y2="46" stroke="#222" stroke-width="1"/>' +
      '<line x1="86" y1="62" x2="94" y2="58" stroke="#222" stroke-width="1"/>' +
      /* Ruedas */
      '<circle cx="30" cy="76" r="6" fill="#222"/>' +
      '<circle cx="50" cy="76" r="6" fill="#222"/>' +
      '<circle cx="70" cy="76" r="6" fill="#222"/>' +
      /* Luces ámbar parpadeantes arriba */
      '<rect x="34" y="34" width="22" height="6" rx="2" fill="#f4c542" stroke="#222" stroke-width="1"/>' +
      '<g stroke="#f4c542" stroke-width="1.5" fill="none">' +
      '<line x1="34" y1="30" x2="32" y2="26"/>' +
      '<line x1="56" y1="30" x2="58" y2="26"/>' +
      '</g>' +
      /* Nieve siendo apartada (acumulada delante de la pala) */
      '<path d="M96 76 Q92 70 96 64 Q94 58 96 50" stroke="#fff" stroke-width="2" fill="none" opacity="0.7"/>'
    ),

  };

  global.ICONS = ICONS;
  global.getIcon = function (key) {
    return ICONS[key] || null;
  };

})(window);
