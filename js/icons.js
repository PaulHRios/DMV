/* ============================================================================
   Iconos SVG inline para preguntas (señales, marcas viales, semáforos,
   señales manuales, estacionamiento en pendiente).
   Todos los iconos viven en este archivo para mantener la app 100%
   estática y autosuficiente — sin CDN.
   ============================================================================ */
(function (global) {
  'use strict';

  function s(content, opts) {
    opts = opts || {};
    const vb = opts.viewBox || '0 0 100 100';
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + vb + '" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid meet">' + content + '</svg>';
  }

  const ICONS = {

    /* ---------- Señales reglamentarias ---------- */

    'sign.stop': s(
      '<polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" fill="#c8202a" stroke="#fff" stroke-width="3"/>' +
      '<polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" fill="none" stroke="#fff" stroke-width="2" transform="scale(0.85) translate(9 9)"/>' +
      '<text x="50" y="62" font-family="Arial Black, Impact, sans-serif" font-size="26" font-weight="900" fill="#fff" text-anchor="middle">STOP</text>'
    ),

    'sign.yield': s(
      '<polygon points="50,92 5,12 95,12" fill="#c8202a" stroke="#fff" stroke-width="1"/>' +
      '<polygon points="50,82 16,20 84,20" fill="#fff" stroke="#c8202a" stroke-width="2"/>' +
      '<text x="50" y="48" font-family="Arial Black, Impact, sans-serif" font-size="14" font-weight="900" fill="#c8202a" text-anchor="middle">YIELD</text>'
    ),

    'sign.doNotEnter': s(
      '<circle cx="50" cy="50" r="42" fill="#c8202a" stroke="#fff" stroke-width="4"/>' +
      '<rect x="20" y="44" width="60" height="12" fill="#fff"/>' +
      '<text x="50" y="82" font-family="Arial Black, sans-serif" font-size="9" font-weight="900" fill="#fff" text-anchor="middle">DO NOT ENTER</text>'
    ),

    'sign.wrongWay': s(
      '<rect x="8" y="22" width="84" height="56" fill="#c8202a" stroke="#fff" stroke-width="2"/>' +
      '<text x="50" y="47" font-family="Arial Black, sans-serif" font-size="14" font-weight="900" fill="#fff" text-anchor="middle">WRONG</text>' +
      '<text x="50" y="67" font-family="Arial Black, sans-serif" font-size="14" font-weight="900" fill="#fff" text-anchor="middle">WAY</text>'
    ),

    'sign.keepRight': s(
      '<rect x="14" y="10" width="72" height="80" rx="4" fill="#fff" stroke="#222" stroke-width="3"/>' +
      '<text x="50" y="28" font-family="Arial Black, sans-serif" font-size="11" font-weight="900" fill="#222" text-anchor="middle">KEEP</text>' +
      '<text x="50" y="44" font-family="Arial Black, sans-serif" font-size="11" font-weight="900" fill="#222" text-anchor="middle">RIGHT</text>' +
      '<path d="M30 70 L70 70 L70 60 L86 75 L70 90 L70 80 L30 80 Z" fill="#222"/>'
    ),

    'sign.oneWay': s(
      '<rect x="6" y="34" width="88" height="32" fill="#000"/>' +
      '<text x="22" y="58" font-family="Arial Black, sans-serif" font-size="11" font-weight="900" fill="#fff">ONE WAY</text>' +
      '<polygon points="68,40 84,50 68,60" fill="#fff"/>'
    ),

    'sign.noPassing': s(
      '<polygon points="6,40 94,12 94,68 6,68" fill="#fff" stroke="#c8202a" stroke-width="3"/>' +
      '<text x="50" y="56" font-family="Arial Black, sans-serif" font-size="10" font-weight="900" fill="#222" text-anchor="middle">NO PASSING</text>' +
      '<text x="50" y="66" font-family="Arial Black, sans-serif" font-size="7" font-weight="900" fill="#222" text-anchor="middle">ZONE</text>'
    ),

    'sign.noTurn': s(
      '<circle cx="50" cy="50" r="40" fill="#fff" stroke="#222" stroke-width="3"/>' +
      '<path d="M30 70 Q30 38 64 38 L60 30 L80 42 L60 54 L64 46 Q38 46 38 70 Z" fill="#222"/>' +
      '<line x1="20" y1="20" x2="80" y2="80" stroke="#c8202a" stroke-width="8" stroke-linecap="round"/>'
    ),

    /* ---------- Señales de advertencia (diamante amarillo) ---------- */

    'sign.warningBlank': s(
      '<polygon points="50,6 94,50 50,94 6,50" fill="#f7c948" stroke="#222" stroke-width="3"/>' +
      '<polygon points="50,12 88,50 50,88 12,50" fill="none" stroke="#222" stroke-width="1.5"/>'
    ),

    'sign.slippery': s(
      '<polygon points="50,6 94,50 50,94 6,50" fill="#f7c948" stroke="#222" stroke-width="3"/>' +
      '<rect x="32" y="40" width="36" height="16" rx="3" fill="#222"/>' +
      '<circle cx="38" cy="58" r="4" fill="#222"/>' +
      '<circle cx="62" cy="58" r="4" fill="#222"/>' +
      '<path d="M20 70 Q35 58 50 70 T80 70" stroke="#222" stroke-width="2.5" fill="none" stroke-linecap="round"/>' +
      '<path d="M22 76 Q37 64 52 76 T82 76" stroke="#222" stroke-width="2.5" fill="none" stroke-linecap="round"/>'
    ),

    'sign.twoWay': s(
      '<polygon points="50,6 94,50 50,94 6,50" fill="#f7c948" stroke="#222" stroke-width="3"/>' +
      /* Flecha izquierda apuntando ARRIBA */
      '<path d="M40 70 L40 38 L34 38 L42 26 L50 38 L44 38 L44 70 Z" fill="#222"/>' +
      /* Flecha derecha apuntando ABAJO */
      '<path d="M60 30 L60 62 L54 62 L62 74 L70 62 L64 62 L64 30 Z" fill="#222"/>'
    ),

    'sign.deer': s(
      '<polygon points="50,6 94,50 50,94 6,50" fill="#f7c948" stroke="#222" stroke-width="3"/>' +
      /* Cuerpo + cuello + cabeza */
      '<path d="M28 64 L28 56 Q28 50 34 48 L52 48 Q60 48 64 42 L70 32 L72 36 L68 44 L70 52 L72 56 L70 60 L68 56 L64 58 L64 64 L60 64 L60 58 L40 58 L40 64 L36 64 L36 58 L34 58 L32 64 Z" fill="#222"/>' +
      /* Astas */
      '<path d="M70 32 L66 24 M70 32 L74 22 M68 28 L72 24 M70 26 L66 22" stroke="#222" stroke-width="1.8" fill="none" stroke-linecap="round"/>'
    ),

    'sign.merge': s(
      '<polygon points="50,6 94,50 50,94 6,50" fill="#f7c948" stroke="#222" stroke-width="3"/>' +
      /* Carril principal recto */
      '<path d="M44 80 L44 32 L40 32 L48 22 L56 32 L52 32 L52 80 Z" fill="#222"/>' +
      /* Carril que se incorpora desde la derecha */
      '<path d="M76 70 Q60 56 56 44" stroke="#222" stroke-width="5" fill="none" stroke-linecap="round"/>'
    ),

    /* Cruce ferroviario con crossbuck */
    'sign.railroadCrossbuck': s(
      '<g transform="rotate(45 50 50)">' +
      '<rect x="20" y="42" width="60" height="16" rx="2" fill="#fff" stroke="#222" stroke-width="3"/>' +
      '<rect x="42" y="20" width="16" height="60" rx="2" fill="#fff" stroke="#222" stroke-width="3"/>' +
      '<text x="50" y="55" font-family="Arial Black, sans-serif" font-size="9" font-weight="900" fill="#222" text-anchor="middle" transform="rotate(-45 50 50)">RAIL</text>' +
      '<text x="50" y="55" font-family="Arial Black, sans-serif" font-size="9" font-weight="900" fill="#222" text-anchor="middle" transform="rotate(45 50 50)">ROAD</text>' +
      '</g>' +
      '<circle cx="20" cy="50" r="8" fill="#d63b3b"/>' +
      '<circle cx="80" cy="50" r="8" fill="#3a3a3a"/>'
    ),

    /* "School Bus Stop Ahead" — diamante amarillo con bus */
    'sign.schoolBusStop': s(
      '<polygon points="50,6 94,50 50,94 6,50" fill="#f7c948" stroke="#222" stroke-width="3"/>' +
      '<rect x="28" y="38" width="44" height="22" rx="3" fill="#222"/>' +
      '<rect x="32" y="42" width="8" height="8" fill="#f7c948"/>' +
      '<rect x="44" y="42" width="8" height="8" fill="#f7c948"/>' +
      '<rect x="56" y="42" width="8" height="8" fill="#f7c948"/>' +
      '<circle cx="36" cy="64" r="3" fill="#222"/>' +
      '<circle cx="64" cy="64" r="3" fill="#222"/>' +
      '<text x="50" y="78" font-family="Arial Black, sans-serif" font-size="8" font-weight="900" fill="#222" text-anchor="middle">SCHOOL BUS</text>'
    ),

    'sign.curve': s(
      '<polygon points="50,6 94,50 50,94 6,50" fill="#f7c948" stroke="#222" stroke-width="3"/>' +
      '<path d="M40 82 Q40 60 60 50 Q80 40 60 22" stroke="#222" stroke-width="5" fill="none" stroke-linecap="round"/>' +
      '<polygon points="60,18 54,26 66,26" fill="#222"/>'
    ),

    'sign.tIntersection': s(
      '<polygon points="50,6 94,50 50,94 6,50" fill="#f7c948" stroke="#222" stroke-width="3"/>' +
      '<path d="M46 80 L46 50 L74 50 L74 46 L26 46 L26 50 L46 50" fill="#222" stroke="#222" stroke-width="3"/>'
    ),

    /* ---------- Construcción (naranja) ---------- */

    'sign.construction': s(
      '<polygon points="50,6 94,50 50,94 6,50" fill="#f06a16" stroke="#222" stroke-width="3"/>' +
      '<path d="M44 64 L40 80 L60 80 L56 64 Z" fill="#222"/>' +
      '<path d="M44 64 L56 64 L60 50 L40 50 Z" fill="#222"/>' +
      '<circle cx="50" cy="42" r="6" fill="#222"/>' +
      '<rect x="35" y="78" width="30" height="4" fill="#222"/>'
    ),

    /* ---------- Pentagonal escolar (verde-amarillo) ---------- */

    'sign.school': s(
      '<polygon points="50,4 94,30 88,92 12,92 6,30" fill="#cee443" stroke="#222" stroke-width="3"/>' +
      '<circle cx="40" cy="48" r="6" fill="#222"/>' +
      '<path d="M35 56 L35 76 L45 76 L45 64 L55 64 L55 76 L65 76 L65 48" fill="#222"/>' +
      '<circle cx="58" cy="44" r="5" fill="#222"/>'
    ),

    /* ---------- RR Crossing (redondo amarillo) ---------- */

    'sign.railroad': s(
      '<circle cx="50" cy="50" r="44" fill="#f7c948" stroke="#222" stroke-width="3"/>' +
      '<line x1="10" y1="50" x2="90" y2="50" stroke="#222" stroke-width="3"/>' +
      '<line x1="50" y1="10" x2="50" y2="90" stroke="#222" stroke-width="3"/>' +
      '<text x="38" y="44" font-family="Arial Black, sans-serif" font-size="14" font-weight="900" fill="#222">R</text>' +
      '<text x="56" y="68" font-family="Arial Black, sans-serif" font-size="14" font-weight="900" fill="#222">R</text>'
    ),

    /* ---------- Servicios (azul) ---------- */

    'sign.service': s(
      '<rect x="10" y="14" width="80" height="72" rx="3" fill="#0a5fa1" stroke="#fff" stroke-width="3"/>' +
      '<path d="M40 32 L60 32 L60 52 L50 60 L40 52 Z" fill="#fff"/>' +
      '<text x="50" y="78" font-family="Arial Black, sans-serif" font-size="10" font-weight="900" fill="#fff" text-anchor="middle">FOOD</text>'
    ),

    /* ---------- Recreación (marrón) ---------- */

    'sign.recreation': s(
      '<rect x="10" y="14" width="80" height="72" rx="3" fill="#6b3a1e" stroke="#fff" stroke-width="3"/>' +
      '<path d="M30 70 L50 30 L70 70 Z" fill="#fff"/>' +
      '<path d="M40 70 L50 50 L60 70" fill="#6b3a1e"/>'
    ),

    /* ---------- Guía (verde) ---------- */

    'sign.guide': s(
      '<rect x="6" y="22" width="88" height="56" rx="2" fill="#0e7a3e" stroke="#fff" stroke-width="3"/>' +
      '<text x="50" y="48" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">Denver</text>' +
      '<text x="50" y="64" font-family="Arial, sans-serif" font-size="10" font-weight="600" fill="#fff" text-anchor="middle">22 MILES</text>'
    ),

    /* ---------- Semáforos ---------- */

    'signal.red': s(
      '<rect x="32" y="6" width="36" height="88" rx="6" fill="#1a1a1a"/>' +
      '<circle cx="50" cy="24" r="11" fill="#d63b3b" stroke="#fff" stroke-width="0.5"/>' +
      '<circle cx="50" cy="24" r="6" fill="#ff6363" opacity="0.7"/>' +
      '<circle cx="50" cy="50" r="11" fill="#3a3a3a"/>' +
      '<circle cx="50" cy="76" r="11" fill="#3a3a3a"/>'
    ),

    'signal.yellow': s(
      '<rect x="32" y="6" width="36" height="88" rx="6" fill="#1a1a1a"/>' +
      '<circle cx="50" cy="24" r="11" fill="#3a3a3a"/>' +
      '<circle cx="50" cy="50" r="11" fill="#f4c542"/>' +
      '<circle cx="50" cy="50" r="6" fill="#fff2b0" opacity="0.7"/>' +
      '<circle cx="50" cy="76" r="11" fill="#3a3a3a"/>'
    ),

    'signal.green': s(
      '<rect x="32" y="6" width="36" height="88" rx="6" fill="#1a1a1a"/>' +
      '<circle cx="50" cy="24" r="11" fill="#3a3a3a"/>' +
      '<circle cx="50" cy="50" r="11" fill="#3a3a3a"/>' +
      '<circle cx="50" cy="76" r="11" fill="#34c759"/>' +
      '<circle cx="50" cy="76" r="6" fill="#b6ecb9" opacity="0.7"/>'
    ),

    'signal.flashingRed': s(
      '<rect x="32" y="6" width="36" height="88" rx="6" fill="#1a1a1a"/>' +
      '<circle cx="50" cy="24" r="11" fill="#d63b3b"/>' +
      '<g stroke="#d63b3b" stroke-width="2" fill="none">' +
      '<line x1="50" y1="6" x2="50" y2="0"/>' +
      '<line x1="78" y1="24" x2="86" y2="24"/>' +
      '<line x1="22" y1="24" x2="14" y2="24"/>' +
      '<line x1="68" y1="6" x2="74" y2="0"/>' +
      '<line x1="32" y1="6" x2="26" y2="0"/>' +
      '</g>' +
      '<circle cx="50" cy="50" r="11" fill="#3a3a3a"/>' +
      '<circle cx="50" cy="76" r="11" fill="#3a3a3a"/>'
    ),

    'signal.flashingYellow': s(
      '<rect x="32" y="6" width="36" height="88" rx="6" fill="#1a1a1a"/>' +
      '<circle cx="50" cy="24" r="11" fill="#3a3a3a"/>' +
      '<circle cx="50" cy="50" r="11" fill="#f4c542"/>' +
      '<g stroke="#f4c542" stroke-width="2" fill="none">' +
      '<line x1="50" y1="34" x2="50" y2="40"/>' +
      '<line x1="78" y1="50" x2="86" y2="50"/>' +
      '<line x1="22" y1="50" x2="14" y2="50"/>' +
      '</g>' +
      '<circle cx="50" cy="76" r="11" fill="#3a3a3a"/>'
    ),

    'signal.greenArrow': s(
      '<rect x="32" y="6" width="36" height="88" rx="6" fill="#1a1a1a"/>' +
      '<circle cx="50" cy="24" r="11" fill="#3a3a3a"/>' +
      '<circle cx="50" cy="50" r="11" fill="#3a3a3a"/>' +
      '<polygon points="40,82 40,70 52,70 52,64 64,76 52,88 52,82" fill="#34c759"/>'
    ),

    'signal.flashingYellowArrow': s(
      '<rect x="32" y="6" width="36" height="88" rx="6" fill="#1a1a1a"/>' +
      '<circle cx="50" cy="24" r="11" fill="#3a3a3a"/>' +
      '<polygon points="40,56 40,44 52,44 52,38 64,50 52,62 52,56" fill="#f4c542"/>' +
      '<g stroke="#f4c542" stroke-width="2" fill="none">' +
      '<line x1="68" y1="50" x2="74" y2="50"/>' +
      '</g>' +
      '<circle cx="50" cy="76" r="11" fill="#3a3a3a"/>'
    ),

    'signal.laneGreenArrow': s(
      '<rect x="6" y="10" width="88" height="80" rx="4" fill="#1a1a1a"/>' +
      '<polygon points="50,82 28,52 40,52 40,22 60,22 60,52 72,52" fill="#34c759"/>' +
      '<polygon points="50,82 28,52 40,52 40,22 60,22 60,52 72,52" fill="#a4eab8" opacity="0.4"/>'
    ),

    'signal.laneRedX': s(
      '<rect x="6" y="10" width="88" height="80" rx="4" fill="#1a1a1a"/>' +
      '<line x1="26" y1="26" x2="74" y2="74" stroke="#d63b3b" stroke-width="11" stroke-linecap="round"/>' +
      '<line x1="74" y1="26" x2="26" y2="74" stroke="#d63b3b" stroke-width="11" stroke-linecap="round"/>'
    ),

    /* ---------- Marcas viales ---------- */

    'lane.solidYellow': s(
      '<rect x="0" y="0" width="100" height="100" fill="#3b3b3b"/>' +
      '<line x1="50" y1="6" x2="50" y2="94" stroke="#f4c542" stroke-width="4"/>'
    ),

    'lane.doubleYellow': s(
      '<rect x="0" y="0" width="100" height="100" fill="#3b3b3b"/>' +
      '<line x1="44" y1="6" x2="44" y2="94" stroke="#f4c542" stroke-width="4"/>' +
      '<line x1="56" y1="6" x2="56" y2="94" stroke="#f4c542" stroke-width="4"/>'
    ),

    'lane.brokenYellow': s(
      '<rect x="0" y="0" width="100" height="100" fill="#3b3b3b"/>' +
      '<g stroke="#f4c542" stroke-width="4">' +
      '<line x1="50" y1="8" x2="50" y2="22"/>' +
      '<line x1="50" y1="34" x2="50" y2="48"/>' +
      '<line x1="50" y1="60" x2="50" y2="74"/>' +
      '<line x1="50" y1="86" x2="50" y2="100"/>' +
      '</g>'
    ),

    'lane.solidWhite': s(
      '<rect x="0" y="0" width="100" height="100" fill="#3b3b3b"/>' +
      '<line x1="50" y1="6" x2="50" y2="94" stroke="#fff" stroke-width="4"/>'
    ),

    'lane.brokenWhite': s(
      '<rect x="0" y="0" width="100" height="100" fill="#3b3b3b"/>' +
      '<g stroke="#fff" stroke-width="4">' +
      '<line x1="50" y1="8" x2="50" y2="22"/>' +
      '<line x1="50" y1="34" x2="50" y2="48"/>' +
      '<line x1="50" y1="60" x2="50" y2="74"/>' +
      '<line x1="50" y1="86" x2="50" y2="100"/>' +
      '</g>'
    ),

    'lane.twoWayLeft': s(
      '<rect x="0" y="0" width="100" height="100" fill="#3b3b3b"/>' +
      '<line x1="32" y1="6" x2="32" y2="94" stroke="#f4c542" stroke-width="3"/>' +
      '<g stroke="#f4c542" stroke-width="3">' +
      '<line x1="40" y1="8" x2="40" y2="22"/>' +
      '<line x1="40" y1="34" x2="40" y2="48"/>' +
      '<line x1="40" y1="60" x2="40" y2="74"/>' +
      '<line x1="40" y1="86" x2="40" y2="100"/>' +
      '</g>' +
      '<polygon points="50,30 60,30 60,24 72,32 60,40 60,34 50,34" fill="#fff"/>' +
      '<polygon points="50,72 60,72 60,66 48,58 36,66 50,66 50,72" fill="#fff" transform="rotate(180 50 65)"/>' +
      '<polygon points="55,55 45,55 45,49 33,57 45,65 45,59 55,59" fill="#fff"/>' +
      '<line x1="80" y1="6" x2="80" y2="94" stroke="#f4c542" stroke-width="3"/>' +
      '<g stroke="#f4c542" stroke-width="3">' +
      '<line x1="72" y1="8" x2="72" y2="22"/>' +
      '<line x1="72" y1="34" x2="72" y2="48"/>' +
      '<line x1="72" y1="60" x2="72" y2="74"/>' +
      '<line x1="72" y1="86" x2="72" y2="100"/>' +
      '</g>'
    ),

    /* ---------- Señales manuales del brazo ---------- */

    'hand.left': s(
      '<rect x="6" y="40" width="60" height="32" rx="4" fill="#1d3a6a"/>' +
      '<rect x="56" y="44" width="10" height="14" fill="#0b2545"/>' +
      '<circle cx="86" cy="56" r="6" fill="#f3c699"/>' +
      '<rect x="66" y="52" width="22" height="8" rx="3" fill="#f3c699"/>' +
      '<text x="50" y="92" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="currentColor" text-anchor="middle">Left turn</text>',
      { viewBox: '0 0 100 100' }
    ),

    'hand.right': s(
      '<rect x="6" y="40" width="60" height="32" rx="4" fill="#1d3a6a"/>' +
      '<rect x="56" y="44" width="10" height="14" fill="#0b2545"/>' +
      '<rect x="64" y="46" width="10" height="20" rx="3" fill="#f3c699"/>' +
      '<rect x="64" y="20" width="10" height="28" rx="3" fill="#f3c699"/>' +
      '<circle cx="69" cy="18" r="6" fill="#f3c699"/>' +
      '<text x="50" y="92" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="currentColor" text-anchor="middle">Right turn</text>'
    ),

    'hand.stop': s(
      '<rect x="6" y="40" width="60" height="32" rx="4" fill="#1d3a6a"/>' +
      '<rect x="56" y="44" width="10" height="14" fill="#0b2545"/>' +
      '<rect x="64" y="52" width="10" height="20" rx="3" fill="#f3c699"/>' +
      '<rect x="64" y="72" width="10" height="14" rx="3" fill="#f3c699"/>' +
      '<circle cx="69" cy="88" r="6" fill="#f3c699"/>' +
      '<text x="50" y="98" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="currentColor" text-anchor="middle">Stop / slow</text>'
    ),

    /* ---------- Estacionamiento en pendiente ---------- */

    'park.downhillCurb': s(
      '<rect x="0" y="0" width="100" height="100" fill="none"/>' +
      '<polygon points="0,30 100,75 100,100 0,100" fill="#a3b1c2"/>' +
      '<rect x="0" y="76" width="100" height="6" fill="#1d3a6a"/>' +
      '<g transform="translate(30 45) rotate(20)">' +
      '<rect x="0" y="0" width="50" height="18" rx="4" fill="#0b2545"/>' +
      '<rect x="4" y="-10" width="38" height="14" rx="4" fill="#0b2545"/>' +
      '<circle cx="10" cy="20" r="6" fill="#222"/>' +
      '<circle cx="40" cy="20" r="6" fill="#222"/>' +
      '<line x1="10" y1="20" x2="2" y2="28" stroke="#c8a951" stroke-width="2.5"/>' +
      '<line x1="40" y1="20" x2="32" y2="28" stroke="#c8a951" stroke-width="2.5"/>' +
      '</g>' +
      '<text x="50" y="14" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="currentColor" text-anchor="middle">Downhill · wheels toward curb</text>'
    ),

    'park.uphillCurb': s(
      '<rect x="0" y="0" width="100" height="100" fill="none"/>' +
      '<polygon points="0,75 100,30 100,100 0,100" fill="#a3b1c2"/>' +
      '<rect x="0" y="76" width="100" height="6" fill="#1d3a6a"/>' +
      '<g transform="translate(30 45) rotate(-20)">' +
      '<rect x="0" y="0" width="50" height="18" rx="4" fill="#0b2545"/>' +
      '<rect x="4" y="-10" width="38" height="14" rx="4" fill="#0b2545"/>' +
      '<circle cx="10" cy="20" r="6" fill="#222"/>' +
      '<circle cx="40" cy="20" r="6" fill="#222"/>' +
      '<line x1="10" y1="20" x2="18" y2="28" stroke="#c8a951" stroke-width="2.5"/>' +
      '<line x1="40" y1="20" x2="48" y2="28" stroke="#c8a951" stroke-width="2.5"/>' +
      '</g>' +
      '<text x="50" y="14" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="currentColor" text-anchor="middle">Uphill · wheels away from curb</text>'
    ),

    'park.noCurb': s(
      '<rect x="0" y="0" width="100" height="100" fill="none"/>' +
      '<polygon points="0,30 100,75 100,100 0,100" fill="#7a8a98"/>' +
      '<rect x="0" y="84" width="100" height="14" fill="#3b3b3b"/>' +
      '<g transform="translate(30 45) rotate(20)">' +
      '<rect x="0" y="0" width="50" height="18" rx="4" fill="#0b2545"/>' +
      '<rect x="4" y="-10" width="38" height="14" rx="4" fill="#0b2545"/>' +
      '<circle cx="10" cy="20" r="6" fill="#222"/>' +
      '<circle cx="40" cy="20" r="6" fill="#222"/>' +
      '<line x1="10" y1="20" x2="2" y2="28" stroke="#c8a951" stroke-width="2.5"/>' +
      '<line x1="40" y1="20" x2="32" y2="28" stroke="#c8a951" stroke-width="2.5"/>' +
      '</g>' +
      '<text x="50" y="14" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="currentColor" text-anchor="middle">No curb · wheels toward edge</text>'
    ),

    /* ---------- Intersección de 4 vías ---------- */

    'inter.fourWay': s(
      '<rect x="0" y="0" width="100" height="100" fill="#a3b1c2"/>' +
      '<rect x="30" y="0" width="40" height="100" fill="#3b3b3b"/>' +
      '<rect x="0" y="30" width="100" height="40" fill="#3b3b3b"/>' +
      '<g stroke="#f4c542" stroke-width="2">' +
      '<line x1="50" y1="0" x2="50" y2="26"/>' +
      '<line x1="50" y1="74" x2="50" y2="100"/>' +
      '<line x1="0" y1="50" x2="26" y2="50"/>' +
      '<line x1="74" y1="50" x2="100" y2="50"/>' +
      '</g>' +
      '<g fill="#c8202a">' +
      '<polygon points="22,22 32,22 36,26 36,36 32,40 22,40 18,36 18,26" />' +
      '<polygon points="68,22 78,22 82,26 82,36 78,40 68,40 64,36 64,26" />' +
      '<polygon points="22,64 32,64 36,68 36,78 32,82 22,82 18,78 18,68" />' +
      '<polygon points="68,64 78,64 82,68 82,78 78,82 68,82 64,78 64,68" />' +
      '</g>'
    ),

  };

  global.ICONS = ICONS;
  global.getIcon = function (key) {
    return ICONS[key] || null;
  };

})(window);
