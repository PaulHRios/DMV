/* ============================================================================
   Banco de preguntas - Examen de Manejo de Colorado
   Basado en el Manual del Conductor de Colorado (DR 2337) y leyes estatales.
   Cada pregunta es bilingüe (es / en).

   Estructura:
   {
     id: number,
     category: string,
     question: { es, en },
     options: [{ es, en }, ...],
     correctAnswer: number,    // índice 0-based
     explanation: { es, en },
     sourceReference: { es, en }
   }
   ============================================================================ */

window.QUESTIONS = [

  /* ===== SEÑALES DE TRÁNSITO ===== */
  {
    id: 1, category: 'signs',
    image: 'sign.stop',
    question: {
      es: '¿Qué forma tiene exclusivamente una señal de "PARE" (STOP)?',
      en: 'What shape is exclusively used for a STOP sign?'
    },
    options: [
      { es: 'Octágono (ocho lados)', en: 'Octagon (eight sides)' },
      { es: 'Triángulo invertido', en: 'Upside-down triangle' },
      { es: 'Diamante', en: 'Diamond' },
      { es: 'Círculo', en: 'Circle' }
    ],
    correctAnswer: 0,
    explanation: {
      es: 'La señal octogonal roja se usa únicamente para "PARE". Su forma permite identificarla incluso por detrás o cubierta de nieve.',
      en: 'The red octagonal sign is used only for STOP. Its shape lets you identify it even from behind or when covered with snow.'
    },
    sourceReference: {
      es: 'Manual del Conductor de Colorado · Señales de tránsito',
      en: 'Colorado Driver Handbook · Traffic signs'
    }
  },
  {
    id: 2, category: 'signs',
    image: 'sign.yield',
    question: {
      es: 'Una señal triangular invertida (punta hacia abajo) significa:',
      en: 'A downward-pointing triangle sign means:'
    },
    options: [
      { es: 'Pare', en: 'Stop' },
      { es: 'Ceda el paso', en: 'Yield' },
      { es: 'Cruce escolar', en: 'School crossing' },
      { es: 'No entre', en: 'Do not enter' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'El triángulo invertido rojo y blanco indica CEDA EL PASO. Reduzca la velocidad y deténgase si es necesario para ceder el derecho de paso.',
      en: 'The red-and-white inverted triangle means YIELD. Slow down and stop if necessary to give right of way.'
    },
    sourceReference: {
      es: 'Manual del Conductor de Colorado · Señales de tránsito',
      en: 'Colorado Driver Handbook · Traffic signs'
    }
  },
  {
    id: 3, category: 'signs',
    image: 'sign.warningBlank',
    question: {
      es: 'Las señales en forma de diamante (rombo) generalmente son de color amarillo y sirven para:',
      en: 'Diamond-shaped signs are usually yellow and are used to:'
    },
    options: [
      { es: 'Indicar servicios disponibles', en: 'Indicate available services' },
      { es: 'Advertir sobre condiciones del camino o peligros', en: 'Warn about road conditions or hazards' },
      { es: 'Marcar sitios turísticos', en: 'Mark tourist sites' },
      { es: 'Prohibir maniobras', en: 'Prohibit maneuvers' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Las señales amarillas en forma de diamante son señales de advertencia: curva peligrosa, cruce de fauna, intersección, etc.',
      en: 'Yellow diamond-shaped signs are warning signs: sharp curve, animal crossing, intersection ahead, etc.'
    },
    sourceReference: {
      es: 'Manual del Conductor de Colorado · Señales de advertencia',
      en: 'Colorado Driver Handbook · Warning signs'
    }
  },
  {
    id: 4, category: 'signs',
    image: 'sign.construction',
    question: {
      es: 'El color naranja en una señal de tránsito generalmente indica:',
      en: 'The color orange on a traffic sign generally indicates:'
    },
    options: [
      { es: 'Zona de construcción o trabajos en la vía', en: 'Construction or road-work zone' },
      { es: 'Servicios al conductor', en: 'Driver services' },
      { es: 'Área recreativa', en: 'Recreational area' },
      { es: 'Cruce escolar', en: 'School crossing' }
    ],
    correctAnswer: 0,
    explanation: {
      es: 'El naranja se reserva para señales temporales de construcción y mantenimiento. En estas zonas las multas pueden duplicarse.',
      en: 'Orange is reserved for temporary construction and maintenance signs. Fines may be doubled in these zones.'
    },
    sourceReference: {
      es: 'Manual del Conductor de Colorado · Señales de construcción',
      en: 'Colorado Driver Handbook · Work zone signs'
    }
  },
  {
    id: 5, category: 'signs',
    image: 'sign.service',
    question: {
      es: 'Una señal azul rectangular usualmente indica:',
      en: 'A blue rectangular sign usually indicates:'
    },
    options: [
      { es: 'Advertencia de peligro', en: 'Hazard warning' },
      { es: 'Servicios al conductor (gasolina, hospital, hotel)', en: 'Driver services (gas, hospital, lodging)' },
      { es: 'Información histórica', en: 'Historic information' },
      { es: 'Zona escolar', en: 'School zone' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Las señales azules orientan al conductor hacia servicios: gasolineras, alimentos, hospedaje, hospitales y áreas de descanso.',
      en: 'Blue signs guide drivers to services: gas, food, lodging, hospitals and rest areas.'
    },
    sourceReference: {
      es: 'Manual del Conductor de Colorado · Señales de servicios',
      en: 'Colorado Driver Handbook · Service signs'
    }
  },
  {
    id: 6, category: 'signs',
    image: 'sign.recreation',
    question: {
      es: 'Una señal marrón generalmente indica:',
      en: 'A brown sign generally indicates:'
    },
    options: [
      { es: 'Zona de obras', en: 'Work zone' },
      { es: 'Áreas recreativas, parques o sitios históricos', en: 'Recreational areas, parks or historic sites' },
      { es: 'Cruce ferroviario', en: 'Railroad crossing' },
      { es: 'Prohibición', en: 'Prohibition' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'El marrón se utiliza para guiar a parques nacionales y estatales, áreas recreativas y sitios de interés histórico o cultural.',
      en: 'Brown is used to direct drivers to national and state parks, recreational areas and historic or cultural sites.'
    },
    sourceReference: {
      es: 'Manual del Conductor de Colorado · Colores de señales',
      en: 'Colorado Driver Handbook · Sign colors'
    }
  },
  {
    id: 7, category: 'signs',
    image: 'sign.school',
    question: {
      es: 'Una señal pentagonal (cinco lados, punta hacia arriba) de color amarillo o amarillo-verde fluorescente significa:',
      en: 'A five-sided pentagonal sign (point up) in yellow or fluorescent yellow-green means:'
    },
    options: [
      { es: 'Cruce ferroviario', en: 'Railroad crossing' },
      { es: 'Zona escolar o cruce escolar', en: 'School zone or school crossing' },
      { es: 'Curva peligrosa', en: 'Sharp curve' },
      { es: 'Prohibido pasar', en: 'No passing zone' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'La señal pentagonal indica zona escolar o cruce de niños. Reduzca la velocidad y esté atento a peatones.',
      en: 'The pentagon sign indicates a school zone or school crossing. Slow down and watch for pedestrians.'
    },
    sourceReference: {
      es: 'Manual del Conductor de Colorado · Señales escolares',
      en: 'Colorado Driver Handbook · School signs'
    }
  },
  {
    id: 8, category: 'signs',
    image: 'sign.railroad',
    question: {
      es: 'Una señal redonda amarilla con una "X" negra y las letras "RR" indica:',
      en: 'A round yellow sign with a black "X" and letters "RR" indicates:'
    },
    options: [
      { es: 'Zona escolar', en: 'School zone' },
      { es: 'Cruce ferroviario adelante', en: 'Railroad crossing ahead' },
      { es: 'Cruce de animales', en: 'Animal crossing' },
      { es: 'Carril de bicicletas', en: 'Bike lane' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'La señal circular amarilla con X negra y "RR" advierte que más adelante hay un cruce de tren. Esté preparado para detenerse.',
      en: 'The round yellow sign with black X and "RR" warns of an upcoming railroad crossing. Be prepared to stop.'
    },
    sourceReference: {
      es: 'Manual del Conductor de Colorado · Cruce de ferrocarril',
      en: 'Colorado Driver Handbook · Railroad crossing'
    }
  },
  {
    id: 9, category: 'signs',
    image: 'sign.noPassing',
    question: {
      es: 'Una señal vertical, rectangular y con forma de pendón horizontal a la izquierda del camino significa:',
      en: 'A pennant-shaped sign on the left side of the road means:'
    },
    options: [
      { es: 'Inicio de carril de aceleración', en: 'Start of an acceleration lane' },
      { es: 'Inicio de zona donde no se permite rebasar', en: 'Start of a no-passing zone' },
      { es: 'Fin de la autopista', en: 'End of highway' },
      { es: 'Cruce de bicicletas', en: 'Bicycle crossing' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'La señal en forma de pendón amarillo a la izquierda marca el inicio de una zona donde está prohibido rebasar.',
      en: 'The yellow pennant on the left side marks the beginning of a no-passing zone.'
    },
    sourceReference: {
      es: 'Manual del Conductor de Colorado · Marcas de no rebasar',
      en: 'Colorado Driver Handbook · No-passing markings'
    }
  },
  {
    id: 10, category: 'signs',
    question: {
      es: 'Una señal blanca rectangular con texto negro o rojo es:',
      en: 'A white rectangular sign with black or red text is:'
    },
    options: [
      { es: 'Una señal informativa de servicios', en: 'A service information sign' },
      { es: 'Una señal reglamentaria', en: 'A regulatory sign' },
      { es: 'Una señal turística', en: 'A tourist sign' },
      { es: 'Una señal de advertencia', en: 'A warning sign' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Las señales blancas rectangulares son reglamentarias e indican leyes o normas de tránsito que debe obedecer (límites de velocidad, no estacionar, etc.).',
      en: 'White rectangular signs are regulatory and indicate traffic laws or rules you must obey (speed limits, no parking, etc.).'
    },
    sourceReference: {
      es: 'Manual del Conductor de Colorado · Señales reglamentarias',
      en: 'Colorado Driver Handbook · Regulatory signs'
    }
  },
  {
    id: 11, category: 'signs',
    image: 'sign.noTurn',
    question: {
      es: 'Una señal redonda blanca con un círculo rojo y una línea roja diagonal indica:',
      en: 'A white round sign with a red circle and red diagonal line indicates:'
    },
    options: [
      { es: 'Acción permitida', en: 'Permitted action' },
      { es: 'Acción prohibida', en: 'Prohibited action' },
      { es: 'Advertencia', en: 'Warning' },
      { es: 'Servicio disponible', en: 'Available service' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'El círculo rojo con línea diagonal sobre un símbolo significa que esa acción está prohibida (no girar a la derecha, no U-turn, etc.).',
      en: 'A red circle with a diagonal line over a symbol means that action is prohibited (no right turn, no U-turn, etc.).'
    },
    sourceReference: {
      es: 'Manual del Conductor de Colorado · Símbolos prohibitivos',
      en: 'Colorado Driver Handbook · Prohibitive symbols'
    }
  },
  {
    id: 12, category: 'signs',
    question: {
      es: 'Una señal cuadrada blanca con flecha curva indica:',
      en: 'A white square sign with a curved arrow indicates:'
    },
    options: [
      { es: 'Una rotonda más adelante', en: 'A roundabout ahead' },
      { es: 'El sentido obligatorio del tráfico (one way / curva)', en: 'Mandatory traffic direction (one way / curve)' },
      { es: 'Cruce escolar', en: 'School crossing' },
      { es: 'Construcción', en: 'Construction' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Las flechas reglamentarias indican el sentido obligatorio que debe seguir; pueden estar en intersecciones de un solo sentido o curvas obligatorias.',
      en: 'Regulatory arrows show the mandatory direction you must follow; they may be at one-way intersections or required curves.'
    },
    sourceReference: {
      es: 'Manual del Conductor de Colorado · Señales reglamentarias',
      en: 'Colorado Driver Handbook · Regulatory signs'
    }
  },
  {
    id: 13, category: 'signs',
    image: 'sign.doNotEnter',
    question: {
      es: 'Si encuentra una señal "DO NOT ENTER" / "NO ENTRE" debe:',
      en: 'If you encounter a "DO NOT ENTER" sign you must:'
    },
    options: [
      { es: 'Avanzar con precaución', en: 'Proceed with caution' },
      { es: 'Detenerse y luego seguir', en: 'Stop and then continue' },
      { es: 'No entrar al carril o vía indicada por ningún motivo', en: 'Not enter the indicated lane or road for any reason' },
      { es: 'Continuar solo si no viene tráfico', en: 'Continue only if there is no traffic' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'La señal "NO ENTRE" indica que la vía es de un solo sentido en dirección opuesta o que el acceso está prohibido. Entrar puede provocar un choque frontal.',
      en: 'A DO NOT ENTER sign means the road is one-way in the opposite direction or access is forbidden. Entering can cause a head-on crash.'
    },
    sourceReference: {
      es: 'Manual del Conductor de Colorado · Señales reglamentarias',
      en: 'Colorado Driver Handbook · Regulatory signs'
    }
  },
  {
    id: 14, category: 'signs',
    image: 'sign.deer',
    question: {
      es: 'Una señal amarilla que muestra la silueta de un ciervo significa:',
      en: 'A yellow sign showing the silhouette of a deer means:'
    },
    options: [
      { es: 'Zona de caza', en: 'Hunting zone' },
      { es: 'Cruce frecuente de animales (ciervos)', en: 'Frequent animal (deer) crossing' },
      { es: 'Parque nacional', en: 'National park' },
      { es: 'Reserva indígena', en: 'Indigenous reserve' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Es una señal de advertencia: ciervos cruzan con frecuencia. Reduzca la velocidad, especialmente al amanecer y al atardecer.',
      en: 'It is a warning sign: deer cross frequently. Slow down, especially at dawn and dusk.'
    },
    sourceReference: {
      es: 'Manual del Conductor de Colorado · Señales de advertencia',
      en: 'Colorado Driver Handbook · Warning signs'
    }
  },
  {
    id: 15, category: 'signs',
    image: 'sign.curve',
    question: {
      es: 'Una flecha amarilla curva con un número (por ejemplo "35") debajo significa:',
      en: 'A yellow curved arrow with a number (e.g., "35") below it means:'
    },
    options: [
      { es: 'Velocidad mínima en la curva', en: 'Minimum speed in the curve' },
      { es: 'Velocidad máxima recomendada para tomar la curva con seguridad', en: 'Recommended safe speed to take the curve' },
      { es: 'Distancia hasta la próxima ciudad', en: 'Distance to the next town' },
      { es: 'Nuevo límite de velocidad de la vía', en: 'New speed limit for the road' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'El número en una placa amarilla bajo una señal de curva es la velocidad recomendada (advisory) para tomarla con seguridad, no un límite legal.',
      en: 'The number on a yellow plate below a curve sign is the advisory safe speed for the curve, not a legal limit.'
    },
    sourceReference: {
      es: 'Manual del Conductor de Colorado · Señales de advertencia',
      en: 'Colorado Driver Handbook · Warning signs'
    }
  },
  {
    id: 16, category: 'signs',
    image: 'sign.wrongWay',
    question: {
      es: 'Una señal de "WRONG WAY" / "VÍA EQUIVOCADA" significa que usted:',
      en: 'A "WRONG WAY" sign means you are:'
    },
    options: [
      { es: 'Está cerca de una zona escolar', en: 'Near a school zone' },
      { es: 'Está conduciendo en sentido contrario; salga inmediatamente con seguridad', en: 'Driving against traffic; leave the road safely immediately' },
      { es: 'Debe reducir la velocidad', en: 'Must slow down' },
      { es: 'Está cerca de un cruce ferroviario', en: 'Near a railroad crossing' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Va en sentido contrario al tráfico. Detenga el vehículo, oríllese cuando sea seguro y dé la vuelta. Encienda las intermitentes.',
      en: 'You are going against traffic. Pull over safely when possible and turn around. Use hazard lights.'
    },
    sourceReference: {
      es: 'Manual del Conductor de Colorado · Señales reglamentarias',
      en: 'Colorado Driver Handbook · Regulatory signs'
    }
  },
  {
    id: 17, category: 'signs',
    image: 'sign.guide',
    question: {
      es: 'Las señales de color verde se usan principalmente para:',
      en: 'Green-colored signs are mainly used to:'
    },
    options: [
      { es: 'Advertir peligros', en: 'Warn of hazards' },
      { es: 'Dar información de dirección, distancias o salidas', en: 'Give direction, distance or exit information' },
      { es: 'Indicar zona escolar', en: 'Indicate school zones' },
      { es: 'Indicar prohibición', en: 'Indicate prohibition' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Las señales verdes son guías: indican direcciones, salidas, distancias y nombres de calles.',
      en: 'Green signs are guide signs: they show directions, exits, distances and street names.'
    },
    sourceReference: {
      es: 'Manual del Conductor de Colorado · Colores de señales',
      en: 'Colorado Driver Handbook · Sign colors'
    }
  },
  {
    id: 18, category: 'signs',
    image: 'sign.twoWay',
    question: {
      es: 'Una señal cuadrada amarilla con dos flechas en sentido contrario indica:',
      en: 'A yellow square sign with two arrows pointing in opposite directions means:'
    },
    options: [
      { es: 'Camino de un solo sentido', en: 'One-way road' },
      { es: 'Tráfico en dos sentidos adelante', en: 'Two-way traffic ahead' },
      { es: 'Curva en S', en: 'S-curve' },
      { es: 'Calle sin salida', en: 'Dead end' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Advierte que termina una calle de un solo sentido y comienza tráfico en ambos sentidos. Manténgase en su carril.',
      en: 'It warns that a one-way street ends and two-way traffic begins. Stay in your lane.'
    },
    sourceReference: {
      es: 'Manual del Conductor de Colorado · Señales de advertencia',
      en: 'Colorado Driver Handbook · Warning signs'
    }
  },
  {
    id: 19, category: 'signs',
    image: 'sign.slippery',
    question: {
      es: 'Una señal amarilla con dos flechas verticales (arriba y abajo) en una flecha doble curva significa:',
      en: 'A yellow sign showing one wavy arrow indicates:'
    },
    options: [
      { es: 'Curva en S adelante', en: 'S-curve ahead' },
      { es: 'Pavimento resbaladizo cuando está mojado', en: 'Slippery when wet' },
      { es: 'Construcción', en: 'Construction' },
      { es: 'Cambio de carril obligatorio', en: 'Mandatory lane change' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'La señal con un automóvil deslizándose o con marcas de zigzag indica pavimento resbaladizo cuando llueve. Reduzca la velocidad.',
      en: 'A sign with a sliding car or wavy tracks means the pavement is slippery when wet. Slow down.'
    },
    sourceReference: {
      es: 'Manual del Conductor de Colorado · Señales de advertencia',
      en: 'Colorado Driver Handbook · Warning signs'
    }
  },
  {
    id: 20, category: 'signs',
    image: 'signal.laneGreenArrow',
    question: {
      es: 'En Colorado, una señal de carril reversible con una flecha verde encima del carril significa:',
      en: 'A reversible-lane signal with a green arrow above the lane means:'
    },
    options: [
      { es: 'No circule en ese carril', en: 'Do not use that lane' },
      { es: 'El carril está disponible para que usted lo use', en: 'The lane is open for you to use' },
      { es: 'El carril está cerrado por construcción', en: 'The lane is closed for construction' },
      { es: 'Solo para vehículos de emergencia', en: 'Emergency vehicles only' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'La flecha verde indica que el carril está abierto para circular en su dirección. Una "X" roja significa que está cerrado.',
      en: 'A green arrow means the lane is open in your direction. A red "X" means the lane is closed.'
    },
    sourceReference: {
      es: 'Manual del Conductor de Colorado · Carriles reversibles',
      en: 'Colorado Driver Handbook · Reversible lanes'
    }
  },
  {
    id: 21, category: 'signs',
    image: 'signal.laneRedX',
    question: {
      es: 'Una "X" roja sobre un carril significa:',
      en: 'A red "X" over a lane means:'
    },
    options: [
      { es: 'El carril es solo para girar', en: 'The lane is for turning only' },
      { es: 'No use ese carril', en: 'Do not use that lane' },
      { es: 'Carril de alta ocupación', en: 'High-occupancy lane' },
      { es: 'Salida próxima', en: 'Exit ahead' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'La "X" roja indica que el carril está cerrado al tráfico en esa dirección. Cambie de carril cuando sea seguro.',
      en: 'A red "X" means the lane is closed to traffic in that direction. Change lanes safely.'
    },
    sourceReference: {
      es: 'Manual del Conductor de Colorado · Carriles reversibles',
      en: 'Colorado Driver Handbook · Reversible lanes'
    }
  },
  {
    id: 22, category: 'signs',
    image: 'sign.stop',
    question: {
      es: 'Si llega a una señal de "PARE" sin línea de alto pintada, debe detenerse:',
      en: 'If you reach a STOP sign with no painted stop line, you must stop:'
    },
    options: [
      { es: 'En la mitad de la intersección', en: 'In the middle of the intersection' },
      { es: 'Antes del paso de peatones; si no hay, antes de entrar a la intersección', en: 'Before the crosswalk; if none, before entering the intersection' },
      { es: 'A 50 pies de la intersección', en: '50 feet before the intersection' },
      { es: 'Solo si viene tráfico', en: 'Only if other traffic is coming' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'En toda señal de PARE deténgase completamente: primero antes de la línea de alto, luego antes del paso de peatones; si no existen, deténgase antes de entrar al cruce.',
      en: 'At every STOP sign make a complete stop: first behind the stop line, then behind the crosswalk; if none, stop before entering the intersection.'
    },
    sourceReference: {
      es: 'Manual del Conductor de Colorado · Señal de Pare',
      en: 'Colorado Driver Handbook · Stop sign'
    }
  },
  {
    id: 23, category: 'signs',
    image: 'sign.school',
    question: {
      es: 'Las señales de color amarillo verde fluorescente se usan principalmente para:',
      en: 'Fluorescent yellow-green signs are mainly used for:'
    },
    options: [
      { es: 'Construcción', en: 'Construction' },
      { es: 'Cruces de peatones, ciclistas y zonas escolares', en: 'Pedestrian, bicycle and school crossings' },
      { es: 'Servicios al conductor', en: 'Driver services' },
      { es: 'Información histórica', en: 'Historic information' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'El amarillo verde fluorescente está reservado para cruces de peatones, ciclistas, niños y zonas escolares por su alta visibilidad.',
      en: 'Fluorescent yellow-green is reserved for pedestrian, bicycle, child and school crossings due to its high visibility.'
    },
    sourceReference: {
      es: 'Manual del Conductor de Colorado · Colores de señales',
      en: 'Colorado Driver Handbook · Sign colors'
    }
  },
  {
    id: 24, category: 'signs',
    image: 'sign.keepRight',
    question: {
      es: 'Una señal cuadrada blanca que dice "KEEP RIGHT" significa:',
      en: 'A white square sign that says "KEEP RIGHT" means:'
    },
    options: [
      { es: 'Sólo gire a la derecha', en: 'Right turn only' },
      { es: 'Manténgase a la derecha del objeto u obstáculo señalado', en: 'Keep to the right of the marked object or obstacle' },
      { es: 'Carril exclusivo de buses', en: 'Bus-only lane' },
      { es: 'No rebase por la derecha', en: 'No passing on the right' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'La señal "KEEP RIGHT" indica que debe pasar por el lado derecho de la isla, divisor u obstrucción señalada.',
      en: 'KEEP RIGHT tells you to pass on the right side of the marked island, divider or obstruction.'
    },
    sourceReference: {
      es: 'Manual del Conductor de Colorado · Señales reglamentarias',
      en: 'Colorado Driver Handbook · Regulatory signs'
    }
  },
  {
    id: 25, category: 'signs',
    question: {
      es: 'Una señal triangular amarilla con la palabra "YIELD" debajo de la palabra "TO" y un símbolo de bicicleta significa:',
      en: 'A "YIELD TO" sign with a bicycle symbol means:'
    },
    options: [
      { es: 'Las bicicletas deben cederle el paso', en: 'Bicycles must yield to you' },
      { es: 'Usted debe ceder el paso a las bicicletas', en: 'You must yield to bicycles' },
      { es: 'Sólo para bicicletas', en: 'Bicycles only' },
      { es: 'Carril compartido', en: 'Shared lane' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Indica que los vehículos motorizados deben ceder el paso a los ciclistas en ese punto.',
      en: 'It tells motor vehicles to yield the right of way to cyclists at that point.'
    },
    sourceReference: {
      es: 'Manual del Conductor de Colorado · Compartir el camino',
      en: 'Colorado Driver Handbook · Sharing the road'
    }
  },

  /* ===== SEMÁFOROS Y MARCAS VIALES ===== */
  {
    id: 26, category: 'signals',
    image: 'signal.red',
    question: {
      es: 'Una luz roja fija en un semáforo significa:',
      en: 'A steady red traffic light means:'
    },
    options: [
      { es: 'Reduzca y pase con precaución', en: 'Slow down and proceed with caution' },
      { es: 'Detenerse completamente antes de la línea de alto', en: 'Come to a full stop before the stop line' },
      { es: 'Pare sólo si viene tráfico', en: 'Stop only if there is cross traffic' },
      { es: 'Avance sin detenerse', en: 'Continue without stopping' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Detenga el vehículo completamente antes de la línea de alto, paso de peatones o intersección. Si gira a la derecha, puede hacerlo después de detenerse, salvo que haya señal "No Turn on Red".',
      en: 'Come to a complete stop before the stop line, crosswalk or intersection. You may turn right after stopping unless a "No Turn on Red" sign is posted.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Semáforos', en: 'Colorado Driver Handbook · Traffic signals' }
  },
  {
    id: 27, category: 'signals',
    image: 'signal.yellow',
    question: {
      es: 'Una luz amarilla fija significa:',
      en: 'A steady yellow light means:'
    },
    options: [
      { es: 'La luz cambiará a roja; deténgase si puede hacerlo con seguridad', en: 'The light is about to turn red; stop if you can do so safely' },
      { es: 'Acelere para cruzar antes del rojo', en: 'Speed up to cross before the red' },
      { es: 'Reduzca y siga sin detenerse', en: 'Slow down and continue without stopping' },
      { es: 'Pare siempre, sin excepción', en: 'Always stop, no exception' }
    ],
    correctAnswer: 0,
    explanation: {
      es: 'La luz amarilla advierte que pronto cambiará a rojo. Si puede detenerse con seguridad debe hacerlo; nunca acelere para "ganarle" al rojo.',
      en: 'A yellow light warns that the signal is about to turn red. Stop if you can do so safely; never speed up to beat the red.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Semáforos', en: 'Colorado Driver Handbook · Traffic signals' }
  },
  {
    id: 28, category: 'signals',
    image: 'signal.flashingRed',
    question: {
      es: 'Una luz roja intermitente equivale a:',
      en: 'A flashing red light is equivalent to:'
    },
    options: [
      { es: 'Una señal de "Ceda el paso"', en: 'A yield sign' },
      { es: 'Una señal de "PARE"', en: 'A STOP sign' },
      { es: 'Una luz amarilla', en: 'A yellow light' },
      { es: 'Continuar normalmente', en: 'Proceed normally' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Trate la luz roja intermitente como una señal de PARE: deténgase completamente y avance cuando sea seguro.',
      en: 'Treat a flashing red light like a STOP sign: come to a full stop and go when it is safe.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Semáforos intermitentes', en: 'Colorado Driver Handbook · Flashing signals' }
  },
  {
    id: 29, category: 'signals',
    image: 'signal.flashingYellow',
    question: {
      es: 'Una luz amarilla intermitente significa:',
      en: 'A flashing yellow light means:'
    },
    options: [
      { es: 'Pare completamente', en: 'Come to a full stop' },
      { es: 'Reduzca la velocidad y pase con precaución', en: 'Slow down and proceed with caution' },
      { es: 'Aumente la velocidad', en: 'Speed up' },
      { es: 'Carril cerrado', en: 'Lane closed' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Significa precaución: reduzca la velocidad y observe a otros usuarios; usted no tiene que detenerse pero debe estar alerta.',
      en: 'It means caution: slow down and watch for others; you do not have to stop but must be alert.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Semáforos intermitentes', en: 'Colorado Driver Handbook · Flashing signals' }
  },
  {
    id: 30, category: 'signals',
    image: 'signal.greenArrow',
    question: {
      es: 'Una flecha verde fija indica:',
      en: 'A steady green arrow means:'
    },
    options: [
      { es: 'Puede girar en la dirección de la flecha sin esperar; el tráfico opuesto está detenido', en: 'You may turn in the arrow direction without waiting; oncoming traffic is stopped' },
      { es: 'Pare antes de girar', en: 'Stop before turning' },
      { es: 'Sólo para vehículos de emergencia', en: 'Emergency vehicles only' },
      { es: 'Carril cerrado', en: 'Lane closed' }
    ],
    correctAnswer: 0,
    explanation: {
      es: 'La flecha verde fija ofrece un giro protegido: el tráfico opuesto y los peatones tienen luz roja. Aún así, ceda el paso a peatones legalmente en el cruce.',
      en: 'A steady green arrow gives a protected turn: oncoming traffic and pedestrians have a red. Still yield to any pedestrians lawfully in the crosswalk.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Semáforos', en: 'Colorado Driver Handbook · Traffic signals' }
  },
  {
    id: 31, category: 'signals',
    image: 'lane.solidYellow',
    question: {
      es: 'Una línea amarilla sólida en su lado del camino significa:',
      en: 'A solid yellow line on your side of the road means:'
    },
    options: [
      { es: 'Puede rebasar si el camino está despejado', en: 'You may pass if the road is clear' },
      { es: 'No puede cruzar la línea para rebasar', en: 'You may not cross to pass' },
      { es: 'Carril compartido', en: 'Shared lane' },
      { es: 'Borde del pavimento', en: 'Edge of the pavement' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'La línea amarilla sólida indica que está prohibido cruzarla para rebasar. Las líneas amarillas separan tráfico en sentidos opuestos.',
      en: 'A solid yellow line means you may not cross to pass. Yellow lines separate traffic moving in opposite directions.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Marcas en el pavimento', en: 'Colorado Driver Handbook · Pavement markings' }
  },
  {
    id: 32, category: 'signals',
    image: 'lane.brokenWhite',
    question: {
      es: 'Una línea blanca discontinua entre carriles significa:',
      en: 'A broken white line between lanes means:'
    },
    options: [
      { es: 'Está prohibido cambiar de carril', en: 'Lane changes are prohibited' },
      { es: 'Puede cambiar de carril cuando sea seguro', en: 'You may change lanes when safe' },
      { es: 'Carril sólo para giro', en: 'Turn-only lane' },
      { es: 'Carril de bicicletas', en: 'Bike lane' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Las líneas blancas separan carriles que van en la misma dirección. Si son discontinuas, puede cambiar de carril cuando sea seguro.',
      en: 'White lines separate lanes traveling in the same direction. Broken white lines mean you may change lanes when safe.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Marcas en el pavimento', en: 'Colorado Driver Handbook · Pavement markings' }
  },
  {
    id: 33, category: 'signals',
    image: 'lane.solidWhite',
    question: {
      es: 'Una línea blanca sólida entre carriles indica:',
      en: 'A solid white line between lanes indicates:'
    },
    options: [
      { es: 'Cambio de carril prohibido o desaconsejado', en: 'Lane change is prohibited or discouraged' },
      { es: 'Puede rebasar libremente', en: 'You may freely pass' },
      { es: 'Sólo para vehículos de emergencia', en: 'Emergency vehicles only' },
      { es: 'Carril de tránsito en sentido contrario', en: 'Lane for opposite-direction traffic' }
    ],
    correctAnswer: 0,
    explanation: {
      es: 'La línea blanca sólida desalienta o prohíbe el cambio de carril. Es común antes de las intersecciones y zonas de salida.',
      en: 'A solid white line discourages or prohibits lane changes. It is common before intersections and exit zones.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Marcas en el pavimento', en: 'Colorado Driver Handbook · Pavement markings' }
  },
  {
    id: 34, category: 'signals',
    image: 'lane.doubleYellow',
    question: {
      es: 'Dos líneas amarillas sólidas (doble línea amarilla) significan:',
      en: 'A double solid yellow line means:'
    },
    options: [
      { es: 'Puede rebasar con cuidado', en: 'You may pass with care' },
      { es: 'Ningún vehículo puede cruzarlas para rebasar', en: 'No vehicle may cross them to pass' },
      { es: 'Es un carril reversible', en: 'It is a reversible lane' },
      { es: 'Indica un carril de bicicletas', en: 'It marks a bike lane' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Las dos líneas amarillas sólidas prohíben rebasar a vehículos en ambos sentidos. Sí puede cruzarlas para entrar o salir de un acceso privado.',
      en: 'Double solid yellow lines prohibit passing in both directions. You may cross them only to enter or leave a private driveway.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Marcas en el pavimento', en: 'Colorado Driver Handbook · Pavement markings' }
  },
  {
    id: 35, category: 'signals',
    image: 'inter.fourWay',
    question: {
      es: 'Si su semáforo está apagado por completo (no funciona), debe:',
      en: 'If a traffic signal is completely dark (out), you should:'
    },
    options: [
      { es: 'Pasar sin detenerse', en: 'Continue without stopping' },
      { es: 'Tratarlo como una intersección con señal de PARE en todos los sentidos', en: 'Treat it as an all-way STOP intersection' },
      { es: 'Esperar a que vuelva la luz', en: 'Wait for the light to come back on' },
      { es: 'Seguir al vehículo de adelante', en: 'Follow the car in front of you' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Cuando un semáforo no funciona, trátelo como una intersección con PARE en todos los sentidos: deténgase y ceda el paso al vehículo que llegó primero o al de la derecha.',
      en: 'When a traffic signal is not working, treat the intersection as an all-way stop: stop and yield to the vehicle that arrived first or to the one on your right.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Semáforos', en: 'Colorado Driver Handbook · Traffic signals' }
  },
  {
    id: 36, category: 'signals',
    image: 'signal.flashingYellowArrow',
    question: {
      es: 'Una flecha amarilla intermitente en un semáforo de giro significa:',
      en: 'A flashing yellow arrow at a turn signal means:'
    },
    options: [
      { es: 'Puede girar; pero ceda el paso al tráfico opuesto y peatones', en: 'You may turn, but yield to oncoming traffic and pedestrians' },
      { es: 'Pare por completo', en: 'Come to a full stop' },
      { es: 'Giro prohibido', en: 'No turn allowed' },
      { es: 'Sólo emergencia', en: 'Emergency only' }
    ],
    correctAnswer: 0,
    explanation: {
      es: 'La flecha amarilla intermitente indica giro permitido sin protección: ceda el paso al tráfico opuesto y a los peatones antes de girar.',
      en: 'A flashing yellow arrow indicates an unprotected turn: yield to oncoming traffic and pedestrians before turning.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Semáforos', en: 'Colorado Driver Handbook · Traffic signals' }
  },
  {
    id: 37, category: 'signals',
    image: 'lane.brokenYellow',
    question: {
      es: 'Una línea amarilla discontinua a su lado del camino significa:',
      en: 'A broken yellow line on your side of the road means:'
    },
    options: [
      { es: 'Puede rebasar si el camino está despejado', en: 'You may pass when the road is clear' },
      { es: 'Está prohibido rebasar', en: 'Passing is prohibited' },
      { es: 'Es un carril de salida', en: 'It is an exit lane' },
      { es: 'Es un carril de bicicletas', en: 'It is a bike lane' }
    ],
    correctAnswer: 0,
    explanation: {
      es: 'Cuando hay una línea amarilla discontinua de su lado, puede cruzarla para rebasar siempre que el carril opuesto esté despejado.',
      en: 'When the yellow line on your side is broken, you may cross to pass as long as the opposite lane is clear.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Marcas en el pavimento', en: 'Colorado Driver Handbook · Pavement markings' }
  },
  {
    id: 38, category: 'signals',
    image: 'inter.fourWay',
    question: {
      es: 'En una intersección, si tiene luz verde pero hay vehículos atravesados que no le permiten pasar, debe:',
      en: 'At an intersection with a green light but blocked by other vehicles, you must:'
    },
    options: [
      { es: 'Entrar a la intersección de todos modos', en: 'Enter the intersection anyway' },
      { es: 'Esperar antes de la intersección hasta que pueda pasar sin bloquearla', en: 'Wait before the intersection until you can clear it without blocking' },
      { es: 'Tocar el claxon repetidamente', en: 'Honk repeatedly' },
      { es: 'Acelerar para forzar el paso', en: 'Speed through' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'No entre a una intersección si no puede salir antes de que cambie la luz; bloquear la intersección es ilegal y causa congestión y choques.',
      en: 'Do not enter an intersection if you cannot clear it before the light changes; blocking it is illegal and causes congestion and crashes.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Intersecciones', en: 'Colorado Driver Handbook · Intersections' }
  },
  {
    id: 39, category: 'signals',
    question: {
      es: 'Las líneas blancas en el pavimento separan:',
      en: 'White lines on the pavement separate:'
    },
    options: [
      { es: 'Tráfico que viaja en sentidos opuestos', en: 'Traffic moving in opposite directions' },
      { es: 'Carriles de tráfico que viajan en la misma dirección', en: 'Lanes of traffic moving in the same direction' },
      { es: 'Sólo carriles de bicicletas', en: 'Bike lanes only' },
      { es: 'Sólo zonas de estacionamiento', en: 'Parking zones only' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Las líneas blancas separan carriles que viajan en la misma dirección; las amarillas separan carriles en sentidos opuestos.',
      en: 'White lines separate lanes traveling in the same direction; yellow lines separate lanes traveling in opposite directions.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Marcas en el pavimento', en: 'Colorado Driver Handbook · Pavement markings' }
  },
  {
    id: 40, category: 'signals',
    image: 'signal.green',
    question: {
      es: 'Si la luz verde acaba de cambiar y va a cruzar la intersección, debe:',
      en: 'If the light just turned green and you are about to cross the intersection, you should:'
    },
    options: [
      { es: 'Avanzar de inmediato sin mirar', en: 'Go immediately without looking' },
      { es: 'Verificar que la intersección esté despejada antes de avanzar', en: 'Make sure the intersection is clear before going' },
      { es: 'Tocar el claxon para avisar', en: 'Honk to warn others' },
      { es: 'Esperar a que pase un vehículo', en: 'Wait for one vehicle to pass' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Aunque tenga la luz verde, antes de avanzar revise que peatones y vehículos hayan despejado la intersección. La luz verde no garantiza el paso seguro.',
      en: 'Even with a green light, check that pedestrians and vehicles have cleared the intersection before proceeding. A green light does not guarantee a safe pass.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Intersecciones', en: 'Colorado Driver Handbook · Intersections' }
  },

  /* ===== DERECHO DE PASO E INTERSECCIONES ===== */
  {
    id: 41, category: 'rightOfWay',
    image: 'inter.fourWay',
    question: {
      es: 'En una intersección con señal de PARE en los cuatro sentidos (4-way stop), si dos vehículos llegan al mismo tiempo:',
      en: 'At a four-way stop, when two vehicles arrive at the same time:'
    },
    options: [
      { es: 'Pasa primero el más grande', en: 'The bigger vehicle goes first' },
      { es: 'Pasa primero el vehículo a la derecha', en: 'The vehicle on the right goes first' },
      { es: 'Pasa primero el que vaya a girar a la izquierda', en: 'The one turning left goes first' },
      { es: 'Pasan ambos al mismo tiempo', en: 'Both go at the same time' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Cuando dos vehículos llegan a un PARE de cuatro vías al mismo tiempo, el conductor de la izquierda debe ceder el paso al de la derecha.',
      en: 'When two vehicles reach a four-way stop simultaneously, the driver on the left must yield to the driver on the right.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Derecho de paso', en: 'Colorado Driver Handbook · Right of way' }
  },
  {
    id: 42, category: 'rightOfWay',
    question: {
      es: 'Cuando va a girar a la izquierda y viene tráfico en sentido contrario, usted debe:',
      en: 'When turning left and oncoming traffic is approaching, you must:'
    },
    options: [
      { es: 'Tener prioridad porque va a girar', en: 'Have priority because you are turning' },
      { es: 'Ceder el paso al tráfico que viene en sentido contrario', en: 'Yield to oncoming traffic' },
      { es: 'Tocar el claxon y girar', en: 'Honk and turn' },
      { es: 'Esperar la luz roja', en: 'Wait for the red light' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Quien gira a la izquierda siempre cede el paso al tráfico que viene de frente y a los peatones que cruzan.',
      en: 'A left-turning driver must always yield to oncoming traffic and to pedestrians in the crosswalk.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Derecho de paso', en: 'Colorado Driver Handbook · Right of way' }
  },
  {
    id: 43, category: 'rightOfWay',
    question: {
      es: 'Cuando un vehículo de emergencia se acerca con sirena y luces, usted debe:',
      en: 'When an emergency vehicle approaches with siren and lights, you must:'
    },
    options: [
      { es: 'Acelerar y alejarse', en: 'Speed up and move away' },
      { es: 'Frenar bruscamente en su carril', en: 'Brake hard in your lane' },
      { es: 'Orillar a la derecha y detenerse hasta que pase', en: 'Pull to the right and stop until it passes' },
      { es: 'Continuar normalmente', en: 'Continue normally' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'Diríjase con seguridad al borde derecho de la vía y deténgase hasta que el vehículo de emergencia haya pasado. No bloquee intersecciones.',
      en: 'Move safely to the right edge of the road and stop until the emergency vehicle has passed. Do not block intersections.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Vehículos de emergencia', en: 'Colorado Driver Handbook · Emergency vehicles' }
  },
  {
    id: 44, category: 'rightOfWay',
    question: {
      es: 'Al entrar a una autopista por una rampa, usted debe:',
      en: 'When entering a highway from an on-ramp, you must:'
    },
    options: [
      { es: 'Tener prioridad sobre el tráfico de la autopista', en: 'Have priority over highway traffic' },
      { es: 'Ceder el paso al tráfico que ya circula y acelerar para igualar la velocidad', en: 'Yield to existing traffic and accelerate to match its speed' },
      { es: 'Detenerse al final de la rampa', en: 'Stop at the end of the ramp' },
      { es: 'Cruzar varios carriles inmediatamente', en: 'Immediately cross several lanes' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'El tráfico de la autopista tiene la prioridad. Use la rampa para acelerar a la velocidad del tráfico y entrar en un espacio seguro.',
      en: 'Highway traffic has the right of way. Use the ramp to accelerate to traffic speed and merge into a safe gap.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Autopistas', en: 'Colorado Driver Handbook · Highways' }
  },
  {
    id: 45, category: 'rightOfWay',
    question: {
      es: 'En cualquier intersección, los peatones que cruzan legalmente:',
      en: 'At any intersection, pedestrians lawfully crossing:'
    },
    options: [
      { es: 'Deben ceder el paso a los vehículos', en: 'Must yield to vehicles' },
      { es: 'Tienen siempre el derecho de paso', en: 'Always have the right of way' },
      { es: 'Tienen derecho de paso solo en horarios escolares', en: 'Have right of way only during school hours' },
      { es: 'Solo tienen derecho de paso en zonas marcadas', en: 'Only have right of way in marked zones' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Los peatones tienen el derecho de paso en pasos marcados y no marcados de cualquier intersección. Reduzca y deténgase si es necesario.',
      en: 'Pedestrians have the right of way in marked and unmarked crosswalks at any intersection. Slow down and stop if needed.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Peatones', en: 'Colorado Driver Handbook · Pedestrians' }
  },
  {
    id: 46, category: 'rightOfWay',
    question: {
      es: 'Si un vehículo de emergencia se acerca por detrás cuando usted está en una intersección con luz roja, debe:',
      en: 'If an emergency vehicle approaches from behind while you are stopped at a red light at an intersection, you should:'
    },
    options: [
      { es: 'Cruzar la intersección con luz roja para apartarse', en: 'Cross the red light to get out of the way' },
      { es: 'Permanecer detenido hasta que pueda apartarse con seguridad después', en: 'Stay stopped until you can safely move aside afterward' },
      { es: 'Salir del carril marcha atrás', en: 'Back out of the lane' },
      { es: 'Apagar el motor', en: 'Turn off the engine' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Nunca cruce un semáforo en rojo aunque venga una emergencia detrás; permanezca detenido y permita que el vehículo encuentre otra ruta o ábrase paso cuando sea seguro.',
      en: 'Never run a red light even if an emergency vehicle is behind you; stay stopped and let it find another path, or move aside when safe.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Vehículos de emergencia', en: 'Colorado Driver Handbook · Emergency vehicles' }
  },
  {
    id: 47, category: 'rightOfWay',
    question: {
      es: 'En una intersección sin señales ni semáforos, si dos vehículos llegan al mismo tiempo desde direcciones diferentes:',
      en: 'At an uncontrolled intersection (no signs or signals), if two vehicles arrive at the same time from different directions:'
    },
    options: [
      { es: 'El que va más rápido tiene prioridad', en: 'The faster one has priority' },
      { es: 'El que está a la derecha tiene prioridad', en: 'The vehicle on the right has priority' },
      { es: 'El más grande tiene prioridad', en: 'The bigger one has priority' },
      { es: 'Ambos deben acelerar', en: 'Both should accelerate' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'En intersecciones sin control, ceda el paso al vehículo que llegue primero; si llegan al mismo tiempo, ceda al de la derecha.',
      en: 'At uncontrolled intersections, yield to the vehicle that arrives first; if simultaneous, yield to the one on the right.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Derecho de paso', en: 'Colorado Driver Handbook · Right of way' }
  },
  {
    id: 48, category: 'rightOfWay',
    question: {
      es: 'En la "Move Over Law" de Colorado, cuando hay un vehículo de emergencia, grúa o mantenimiento detenido con luces en el acotamiento, usted debe:',
      en: 'Under Colorado\'s Move Over Law, when an emergency, tow or maintenance vehicle is stopped on the shoulder with lights flashing, you must:'
    },
    options: [
      { es: 'Acelerar para pasar pronto', en: 'Speed up to pass quickly' },
      { es: 'Cambiar al carril contiguo si es seguro; si no, reducir la velocidad', en: 'Move to the adjacent lane if safe; if not, slow down' },
      { es: 'Tocar el claxon', en: 'Honk' },
      { es: 'Detenerse en el carril', en: 'Stop in your lane' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'En Colorado, debe cambiar al carril contiguo cuando sea seguro al pasar junto a vehículos de emergencia, grúas o mantenimiento detenidos con luces; si no puede, reduzca la velocidad por debajo del límite.',
      en: 'In Colorado, you must move to the adjacent lane when safe when passing stopped emergency, tow or maintenance vehicles with flashing lights; if you cannot, slow below the posted limit.'
    },
    sourceReference: { es: 'Ley estatal de Colorado · Move Over Law (CRS 42-4-705)', en: 'Colorado Move Over Law (CRS 42-4-705)' }
  },
  {
    id: 49, category: 'rightOfWay',
    question: {
      es: 'Si va a salir de un acceso privado o estacionamiento a la calle, debe:',
      en: 'When leaving a driveway or parking lot onto a street, you must:'
    },
    options: [
      { es: 'Tener prioridad sobre la calle', en: 'Have priority over the street' },
      { es: 'Ceder el paso a peatones, ciclistas y vehículos de la calle', en: 'Yield to pedestrians, cyclists and street traffic' },
      { es: 'Tocar el claxon y salir', en: 'Honk and pull out' },
      { es: 'Parar a media calle', en: 'Stop in the middle of the road' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Quien sale de una entrada privada o estacionamiento debe ceder el paso a quienes ya circulan por la calle, banqueta o carril de bicicletas.',
      en: 'When leaving a driveway or parking lot, you must yield to anyone already on the street, sidewalk or bike lane.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Derecho de paso', en: 'Colorado Driver Handbook · Right of way' }
  },
  {
    id: 50, category: 'rightOfWay',
    question: {
      es: 'En montañas estrechas de un solo carril, ¿quién tiene el derecho de paso entre un vehículo que sube y otro que baja?',
      en: 'On narrow mountain roads, who has the right of way between an uphill and a downhill vehicle?'
    },
    options: [
      { es: 'El que baja, porque es más difícil detenerlo', en: 'The downhill vehicle, because it is harder to stop' },
      { es: 'El que sube tiene el derecho de paso; el que baja debe orillarse o retroceder', en: 'The uphill vehicle has right of way; the downhill must pull over or back up' },
      { es: 'El más grande', en: 'The larger vehicle' },
      { es: 'Quien tenga la luz alta encendida', en: 'Whoever has high beams on' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'En carreteras de montaña estrechas, el vehículo que sube tiene el derecho de paso. El que baja debe encontrar un sitio para orillarse o retroceder.',
      en: 'On narrow mountain roads, the uphill vehicle has the right of way. The downhill driver must find a spot to pull over or back up.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Manejo en montaña', en: 'Colorado Driver Handbook · Mountain driving' }
  },
  {
    id: 51, category: 'rightOfWay',
    question: {
      es: 'Cuando un autobús escolar enciende sus luces rojas intermitentes y extiende el brazo de PARE en una calle de dos sentidos, usted debe:',
      en: 'When a school bus shows flashing red lights and extends its STOP arm on a two-way road, you must:'
    },
    options: [
      { es: 'Reducir y pasar lentamente', en: 'Slow down and pass carefully' },
      { es: 'Detenerse completamente, ya sea que viaje en la misma dirección o en dirección opuesta', en: 'Come to a full stop, whether you are going the same direction or the opposite' },
      { es: 'Sólo detenerse si va detrás del bus', en: 'Only stop if you are behind the bus' },
      { es: 'Tocar el claxon y rebasar', en: 'Honk and pass' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'En una calle no dividida (incluyendo carriles centrales pintados), todos los vehículos en ambos sentidos deben detenerse hasta que las luces rojas se apaguen y el brazo se retraiga.',
      en: 'On an undivided road, all vehicles in both directions must stop until the red lights are off and the stop arm is retracted.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Buses escolares', en: 'Colorado Driver Handbook · School buses' }
  },
  {
    id: 52, category: 'rightOfWay',
    question: {
      es: 'Si va a girar a la derecha en una luz roja, debe:',
      en: 'When turning right on a red light, you must:'
    },
    options: [
      { es: 'Girar sin detenerse si no hay tráfico', en: 'Turn without stopping if there is no traffic' },
      { es: 'Detenerse completamente, ceder el paso y girar si no hay señal de "No Turn on Red"', en: 'Come to a complete stop, yield, and turn if there is no "No Turn on Red" sign' },
      { es: 'Acelerar para no obstaculizar el tráfico', en: 'Accelerate to avoid blocking traffic' },
      { es: 'Esperar la luz verde siempre', en: 'Always wait for the green light' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'En Colorado se permite girar a la derecha en rojo después de detenerse completamente y ceder el paso, salvo que un letrero lo prohíba.',
      en: 'Colorado allows right turns on red after a complete stop and yielding, unless a sign prohibits it.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Giros a la derecha', en: 'Colorado Driver Handbook · Right turns' }
  },
  {
    id: 53, category: 'rightOfWay',
    question: {
      es: 'En Colorado, ¿se permite girar a la izquierda en una luz roja?',
      en: 'In Colorado, may you turn left on a red light?'
    },
    options: [
      { es: 'Nunca', en: 'Never' },
      { es: 'Sólo cuando se gira de una calle de un solo sentido a otra calle de un solo sentido y después de detenerse completamente', en: 'Only when turning from a one-way street onto another one-way street, after coming to a complete stop' },
      { es: 'Siempre que no haya tráfico', en: 'Anytime if there is no traffic' },
      { es: 'Sólo si maneja un vehículo de emergencia', en: 'Only if driving an emergency vehicle' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'En Colorado, está permitido girar a la izquierda en rojo de calle de un solo sentido a otra calle de un solo sentido, después de detenerse completamente y ceder el paso.',
      en: 'In Colorado, a left turn on red is allowed only from a one-way street onto another one-way street, after a complete stop and yielding.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Giros', en: 'Colorado Driver Handbook · Turns' }
  },
  {
    id: 54, category: 'rightOfWay',
    question: {
      es: 'En una intersección con un policía dirigiendo el tráfico, usted debe:',
      en: 'At an intersection with a police officer directing traffic, you must:'
    },
    options: [
      { es: 'Obedecer únicamente los semáforos', en: 'Obey only the traffic signals' },
      { es: 'Obedecer al policía aunque las señales digan lo contrario', en: 'Obey the officer even if signals say otherwise' },
      { es: 'Esperar a otro conductor', en: 'Wait for another driver' },
      { es: 'Tocar el claxon', en: 'Honk' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Las indicaciones de un oficial de policía siempre prevalecen sobre los semáforos y señales de tránsito.',
      en: 'A police officer\'s directions always take precedence over signals and signs.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Reglas generales', en: 'Colorado Driver Handbook · General rules' }
  },
  {
    id: 55, category: 'rightOfWay',
    question: {
      es: 'Cuando entra a una vía desde un acotamiento o vía sin asfalto, usted:',
      en: 'When entering a road from the shoulder or an unpaved road, you:'
    },
    options: [
      { es: 'Tiene preferencia', en: 'Have the right of way' },
      { es: 'Debe ceder el paso al tráfico de la vía principal', en: 'Must yield to traffic on the main road' },
      { es: 'Puede entrar sin precaución', en: 'Can enter without caution' },
      { es: 'Tiene preferencia si hay luz verde', en: 'Have priority if the light is green' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Quien entra a una vía pavimentada desde un acceso privado, acotamiento o vía sin pavimentar debe ceder el paso a los vehículos en la vía principal.',
      en: 'Anyone entering a paved road from a driveway, shoulder or unpaved road must yield to traffic on the main road.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Derecho de paso', en: 'Colorado Driver Handbook · Right of way' }
  },

  /* ===== LÍMITES DE VELOCIDAD ===== */
  {
    id: 56, category: 'speed',
    question: {
      es: 'En Colorado, ¿cuál es el límite de velocidad por defecto en una zona residencial sin señalamiento?',
      en: 'In Colorado, what is the default speed limit in a residential area without posted signs?'
    },
    options: [
      { es: '15 mph', en: '15 mph' },
      { es: '25 mph', en: '25 mph' },
      { es: '35 mph', en: '35 mph' },
      { es: '40 mph', en: '40 mph' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'El límite por defecto en zonas residenciales de Colorado es de 25 mph cuando no hay señales que indiquen otra velocidad.',
      en: 'The default speed limit in Colorado residential areas is 25 mph when no signs indicate otherwise.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Límites de velocidad', en: 'Colorado Driver Handbook · Speed limits' }
  },
  {
    id: 57, category: 'speed',
    question: {
      es: 'En Colorado, en zonas comerciales urbanas (business district) sin señalización, el límite por defecto es:',
      en: 'In Colorado, the default speed limit in an urban business district without signs is:'
    },
    options: [
      { es: '15 mph', en: '15 mph' },
      { es: '20 mph', en: '20 mph' },
      { es: '30 mph', en: '30 mph' },
      { es: '40 mph', en: '40 mph' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'En las zonas comerciales el límite por defecto es 20 mph; en callejones es de 15 mph.',
      en: 'In business districts the default is 20 mph; in alleys it is 15 mph.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Límites de velocidad', en: 'Colorado Driver Handbook · Speed limits' }
  },
  {
    id: 58, category: 'speed',
    question: {
      es: 'En carreteras abiertas de montaña en Colorado, cuando no hay señalización, el límite por defecto es:',
      en: 'On open mountain highways in Colorado without posted signs, the default limit is:'
    },
    options: [
      { es: '30 mph', en: '30 mph' },
      { es: '40 mph', en: '40 mph' },
      { es: '55 mph', en: '55 mph' },
      { es: '65 mph', en: '65 mph' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'El límite por defecto en una carretera abierta de montaña es de 40 mph en Colorado, salvo que se indique otra velocidad.',
      en: 'The default limit on an open mountain highway in Colorado is 40 mph, unless otherwise posted.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Límites de velocidad', en: 'Colorado Driver Handbook · Speed limits' }
  },
  {
    id: 59, category: 'speed',
    question: {
      es: 'El límite máximo de velocidad en una autopista interestatal rural en Colorado es:',
      en: 'The maximum speed on a rural interstate highway in Colorado is:'
    },
    options: [
      { es: '55 mph', en: '55 mph' },
      { es: '65 mph', en: '65 mph' },
      { es: '75 mph', en: '75 mph' },
      { es: '85 mph', en: '85 mph' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'En las autopistas interestatales rurales de Colorado, el límite máximo es de 75 mph (puede ser menor en tramos urbanos o de montaña).',
      en: 'On rural interstates in Colorado the maximum speed is 75 mph (may be lower in urban or mountain sections).'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Límites de velocidad', en: 'Colorado Driver Handbook · Speed limits' }
  },
  {
    id: 60, category: 'speed',
    question: {
      es: 'En una zona escolar con luces ámbar intermitentes, el límite de velocidad usualmente es:',
      en: 'In a school zone with flashing amber lights, the speed limit is usually:'
    },
    options: [
      { es: '15 mph', en: '15 mph' },
      { es: '20 mph', en: '20 mph' },
      { es: '30 mph', en: '30 mph' },
      { es: '35 mph', en: '35 mph' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Cuando las luces de la zona escolar están intermitentes, el límite usualmente es 20 mph (o lo señalado). Las multas suelen ser dobles.',
      en: 'When school zone lights are flashing, the limit is usually 20 mph (or as posted). Fines may be doubled.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Zonas escolares', en: 'Colorado Driver Handbook · School zones' }
  },
  {
    id: 61, category: 'speed',
    question: {
      es: 'Cuando llueve, hay neblina o el pavimento está mojado, debe:',
      en: 'When it is raining, foggy or the pavement is wet, you should:'
    },
    options: [
      { es: 'Manejar al límite máximo de velocidad', en: 'Drive at the maximum speed limit' },
      { es: 'Reducir la velocidad por debajo del límite', en: 'Reduce your speed below the posted limit' },
      { es: 'Encender las luces de emergencia y seguir', en: 'Turn on hazard lights and continue' },
      { es: 'Manejar a 5 mph', en: 'Drive at 5 mph' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'El límite es la velocidad máxima en condiciones ideales. Cuando hay lluvia, neblina, hielo o nieve, debe reducir la velocidad a la que sea segura.',
      en: 'The posted limit is the maximum for ideal conditions. In rain, fog, ice or snow you must reduce speed to a safe level.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Velocidad y condiciones', en: 'Colorado Driver Handbook · Speed and conditions' }
  },
  {
    id: 62, category: 'speed',
    question: {
      es: 'En las zonas de construcción de Colorado, las multas por exceso de velocidad:',
      en: 'In Colorado construction zones, speeding fines are:'
    },
    options: [
      { es: 'Son las mismas que en otras vías', en: 'The same as on other roads' },
      { es: 'Pueden ser duplicadas', en: 'May be doubled' },
      { es: 'Sólo aplican de noche', en: 'Apply only at night' },
      { es: 'No aplican si no hay trabajadores', en: 'Do not apply if no workers are present' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Las multas en zonas de construcción pueden duplicarse, estén o no presentes los trabajadores.',
      en: 'Fines in construction zones may be doubled whether or not workers are present.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Zonas de construcción', en: 'Colorado Driver Handbook · Work zones' }
  },
  {
    id: 63, category: 'speed',
    question: {
      es: 'En Colorado, conducir significativamente más lento que el flujo de tráfico en el carril izquierdo de una autopista:',
      en: 'In Colorado, driving significantly slower than traffic in the left lane of a highway:'
    },
    options: [
      { es: 'Es legal en todo momento', en: 'Is legal at all times' },
      { es: 'Es ilegal salvo que esté rebasando o se esté preparando para girar a la izquierda', en: 'Is illegal unless passing or preparing to turn left' },
      { es: 'Es legal sólo en autopistas interestatales', en: 'Is legal only on interstates' },
      { es: 'Está permitido siempre con luces intermitentes', en: 'Is allowed if hazard lights are on' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'La "Slowpoke Law" (CRS 42-4-1013) prohíbe ocupar el carril izquierdo a velocidad menor a la del tráfico salvo cuando rebasa, gira a la izquierda o está en tráfico congestionado.',
      en: 'Colorado\'s Slowpoke Law (CRS 42-4-1013) prohibits driving in the left lane slower than traffic except when passing, turning left or in heavy traffic.'
    },
    sourceReference: { es: 'Ley estatal de Colorado · Slowpoke Law (CRS 42-4-1013)', en: 'Colorado Slowpoke Law (CRS 42-4-1013)' }
  },
  {
    id: 64, category: 'speed',
    question: {
      es: 'Conducir más despacio que el flujo del tráfico:',
      en: 'Driving slower than the flow of traffic:'
    },
    options: [
      { es: 'Es siempre seguro', en: 'Is always safe' },
      { es: 'Puede ser peligroso y bloquear el tráfico', en: 'Can be dangerous and impede traffic' },
      { es: 'Es ilegal sólo en zonas escolares', en: 'Is illegal only in school zones' },
      { es: 'Es la mejor manera de ahorrar gasolina', en: 'Is the best way to save fuel' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Manejar mucho más lento que el flujo provoca embotellamientos y choques traseros. Mantenga la velocidad del tráfico cuando sea seguro.',
      en: 'Driving much slower than traffic causes congestion and rear-end crashes. Keep up with the flow when safe.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Reglas de velocidad', en: 'Colorado Driver Handbook · Speed rules' }
  },
  {
    id: 65, category: 'speed',
    question: {
      es: 'Si lo aprueban como "exceso temerario" (reckless driving) por ir más de 25 mph sobre el límite, las consecuencias incluyen:',
      en: 'If you are charged with reckless driving for going more than 25 mph over the limit, consequences include:'
    },
    options: [
      { es: 'Sólo una advertencia', en: 'Just a warning' },
      { es: 'Puntos en la licencia, multa elevada y posible suspensión', en: 'Points on your license, a high fine and possible suspension' },
      { es: 'Pérdida del registro vehicular para siempre', en: 'Permanent vehicle registration loss' },
      { es: 'Confiscación inmediata del vehículo', en: 'Immediate vehicle seizure' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Las infracciones por exceso temerario en Colorado conllevan puntos, multas, posibles arrestos y suspensión. Conducir más de 25 mph sobre el límite es una violación grave.',
      en: 'Reckless driving in Colorado leads to points, fines, possible arrest and license suspension. Going more than 25 mph over the limit is a serious violation.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Sanciones', en: 'Colorado Driver Handbook · Penalties' }
  },

  /* ===== DISTANCIA Y FRENADO ===== */
  {
    id: 66, category: 'following',
    question: {
      es: 'La regla recomendada en el manual de Colorado para mantener distancia con el vehículo de adelante es:',
      en: 'The recommended rule in the Colorado manual for following distance is:'
    },
    options: [
      { es: 'Regla de 1 segundo', en: '1-second rule' },
      { es: 'Regla de 2 segundos', en: '2-second rule' },
      { es: 'Regla de 4 segundos como mínimo', en: 'At least 4-second rule' },
      { es: 'Regla de 10 metros', en: '10-meter rule' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'Colorado recomienda mantener al menos 4 segundos entre su vehículo y el de adelante. Aumente el tiempo en condiciones adversas o con vehículos pesados.',
      en: 'Colorado recommends at least a 4-second following distance. Increase it in poor conditions or behind heavy vehicles.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Distancia de seguimiento', en: 'Colorado Driver Handbook · Following distance' }
  },
  {
    id: 67, category: 'following',
    question: {
      es: 'En condiciones adversas (lluvia, nieve, hielo o niebla) la distancia con el vehículo de adelante debe:',
      en: 'In poor conditions (rain, snow, ice, fog) following distance should:'
    },
    options: [
      { es: 'Reducirse', en: 'Be reduced' },
      { es: 'Mantenerse igual', en: 'Stay the same' },
      { es: 'Aumentarse considerablemente (8 a 10 segundos o más)', en: 'Be increased considerably (8 to 10 seconds or more)' },
      { es: 'No es necesario calcularla', en: 'Does not need to be calculated' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'En lluvia, nieve, hielo o niebla la distancia de frenado se duplica o más. Aumente la distancia a por lo menos 8-10 segundos.',
      en: 'In rain, snow, ice or fog stopping distance doubles or more. Increase your following distance to at least 8-10 seconds.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Manejo defensivo', en: 'Colorado Driver Handbook · Defensive driving' }
  },
  {
    id: 68, category: 'following',
    question: {
      es: 'Si un vehículo le sigue muy de cerca (tailgating), la mejor reacción es:',
      en: 'If a vehicle is tailgating you, the best reaction is:'
    },
    options: [
      { es: 'Acelerar', en: 'Speed up' },
      { es: 'Frenar bruscamente para asustar al otro conductor', en: 'Brake hard to scare the other driver' },
      { es: 'Reducir suavemente la velocidad y permitirle rebasar', en: 'Slow down gently and let them pass' },
      { es: 'Encender las luces altas', en: 'Turn on high beams' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'Reduzca la velocidad gradualmente para permitir que el vehículo le rebase con seguridad y aumente su propia distancia con el de adelante.',
      en: 'Gradually reduce speed to let the tailgater pass safely and increase your own distance from the vehicle ahead.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Manejo defensivo', en: 'Colorado Driver Handbook · Defensive driving' }
  },
  {
    id: 69, category: 'following',
    question: {
      es: 'La distancia total para detener el vehículo se compone principalmente de:',
      en: 'The total stopping distance is mainly made up of:'
    },
    options: [
      { es: 'Sólo la distancia que recorren los frenos', en: 'Only the distance the brakes travel' },
      { es: 'Distancia de percepción, distancia de reacción y distancia de frenado', en: 'Perception distance, reaction distance and braking distance' },
      { es: 'Sólo la velocidad', en: 'Only the speed' },
      { es: 'La presión de los neumáticos', en: 'Tire pressure' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'La distancia total de parada incluye lo que recorre el vehículo mientras usted percibe el peligro, reacciona y los frenos detienen el auto.',
      en: 'Total stopping distance includes how far the vehicle travels while you perceive the hazard, react, and the brakes stop the car.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Distancia de frenado', en: 'Colorado Driver Handbook · Braking distance' }
  },
  {
    id: 70, category: 'following',
    question: {
      es: 'Si su vehículo tiene frenos antibloqueo (ABS) y necesita frenar de emergencia, debe:',
      en: 'If your vehicle has ABS and you need to brake in an emergency, you should:'
    },
    options: [
      { es: 'Bombear los frenos', en: 'Pump the brakes' },
      { es: 'Aplicar presión firme y constante manteniendo el pedal pisado', en: 'Apply firm, steady pressure and keep the pedal depressed' },
      { es: 'Pisar el embrague y soltar los frenos', en: 'Push the clutch and release the brakes' },
      { es: 'Apagar el motor', en: 'Turn off the engine' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Con ABS aplique presión firme y constante; el sistema bombea automáticamente. Sentirá vibración en el pedal: es normal.',
      en: 'With ABS apply firm, steady pressure; the system pumps automatically. Pedal vibration is normal.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Frenos ABS', en: 'Colorado Driver Handbook · ABS brakes' }
  },
  {
    id: 71, category: 'following',
    question: {
      es: 'Detrás de un camión grande o de un autobús debe mantener mayor distancia porque:',
      en: 'You must keep extra distance behind a large truck or bus because:'
    },
    options: [
      { es: 'Su visibilidad hacia adelante es limitada y los camiones tienen ángulos ciegos', en: 'Your forward visibility is limited and trucks have blind spots' },
      { es: 'Sus luces traseras son débiles', en: 'Their tail lights are dim' },
      { es: 'Tienen prioridad en autopistas', en: 'They have priority on highways' },
      { es: 'Son más rápidos', en: 'They are faster' }
    ],
    correctAnswer: 0,
    explanation: {
      es: 'Detrás de un camión o autobús se reduce su visión hacia adelante. Además, si usted está justo detrás, el conductor del camión no puede verlo en sus espejos.',
      en: 'Behind a truck or bus your forward visibility is reduced. Also, if you are right behind, the driver cannot see you in the mirrors.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Compartir el camino con camiones', en: 'Colorado Driver Handbook · Sharing the road with trucks' }
  },
  {
    id: 72, category: 'following',
    question: {
      es: 'A 60 mph, con buenas condiciones de pavimento, la distancia aproximada para detenerse es similar a:',
      en: 'At 60 mph in good road conditions, the approximate stopping distance is similar to:'
    },
    options: [
      { es: '20 pies', en: '20 feet' },
      { es: '60 pies', en: '60 feet' },
      { es: 'La longitud de un campo de fútbol americano (más de 250 pies)', en: 'The length of a football field (over 250 feet)' },
      { es: '1 milla', en: '1 mile' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'A 60 mph la distancia total para detenerse fácilmente supera los 250 pies con un conductor alerta y pavimento seco.',
      en: 'At 60 mph total stopping distance easily exceeds 250 feet with an alert driver on dry pavement.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Distancia de frenado', en: 'Colorado Driver Handbook · Braking distance' }
  },

  /* ===== ALCOHOL Y DROGAS ===== */
  {
    id: 73, category: 'alcohol',
    question: {
      es: 'En Colorado, una persona de 21 años o más comete DUI cuando su BAC (alcohol en sangre) es igual o mayor a:',
      en: 'In Colorado, a person 21 or older commits DUI when their BAC is at or above:'
    },
    options: [
      { es: '0.02', en: '0.02' },
      { es: '0.05', en: '0.05' },
      { es: '0.08', en: '0.08' },
      { es: '0.15', en: '0.15' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'En Colorado, conducir con un BAC de 0.08 o más constituye DUI. Con BAC entre 0.05 y 0.079 se considera DWAI.',
      en: 'In Colorado, driving with a BAC of 0.08 or more is DUI. A BAC between 0.05 and 0.079 is DWAI.'
    },
    sourceReference: { es: 'Ley estatal de Colorado · CRS 42-4-1301', en: 'Colorado law · CRS 42-4-1301' }
  },
  {
    id: 74, category: 'alcohol',
    question: {
      es: 'En Colorado, "DWAI" (Driving While Ability Impaired) se aplica con un BAC de:',
      en: 'In Colorado, DWAI (Driving While Ability Impaired) applies with a BAC of:'
    },
    options: [
      { es: '0.02 o más', en: '0.02 or more' },
      { es: '0.05 a 0.079', en: '0.05 to 0.079' },
      { es: '0.08 o más', en: '0.08 or more' },
      { es: '0.10 o más', en: '0.10 or more' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'DWAI aplica con un BAC entre 0.05 y 0.079; conlleva multas, puntos en la licencia y posible cárcel aunque sea menor que DUI.',
      en: 'DWAI applies with a BAC between 0.05 and 0.079; it carries fines, points and possible jail though it is less than DUI.'
    },
    sourceReference: { es: 'Ley estatal de Colorado · CRS 42-4-1301', en: 'Colorado law · CRS 42-4-1301' }
  },
  {
    id: 75, category: 'alcohol',
    question: {
      es: 'En Colorado, la "tolerancia cero" para conductores menores de 21 años aplica con un BAC de:',
      en: 'In Colorado, "zero tolerance" for drivers under 21 applies with a BAC of:'
    },
    options: [
      { es: '0.00', en: '0.00' },
      { es: '0.02 o más', en: '0.02 or more' },
      { es: '0.05 o más', en: '0.05 or more' },
      { es: '0.08 o más', en: '0.08 or more' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Para menores de 21, conducir con un BAC de 0.02 o más es ilegal en Colorado y resulta en suspensión inmediata de la licencia.',
      en: 'For drivers under 21, driving with a BAC of 0.02 or more is illegal in Colorado and results in immediate license suspension.'
    },
    sourceReference: { es: 'Ley estatal de Colorado · UDD (Underage Drinking and Driving)', en: 'Colorado UDD (Underage Drinking and Driving) law' }
  },
  {
    id: 76, category: 'alcohol',
    question: {
      es: 'Los conductores con licencia comercial (CDL) cometen DUI con un BAC de:',
      en: 'Commercial driver license (CDL) holders commit DUI with a BAC of:'
    },
    options: [
      { es: '0.02', en: '0.02' },
      { es: '0.04 o más', en: '0.04 or more' },
      { es: '0.05 o más', en: '0.05 or more' },
      { es: '0.08 o más', en: '0.08 or more' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Los conductores con CDL al volante de un vehículo comercial están en DUI con BAC de 0.04 o mayor.',
      en: 'CDL holders driving a commercial vehicle are DUI at a BAC of 0.04 or higher.'
    },
    sourceReference: { es: 'Federal CDL · 49 CFR 383', en: 'Federal CDL · 49 CFR 383' }
  },
  {
    id: 77, category: 'alcohol',
    question: {
      es: 'La ley de "Express Consent" de Colorado significa que al obtener una licencia de conducir usted acepta:',
      en: 'Colorado\'s Express Consent Law means that by obtaining a driver license you agree to:'
    },
    options: [
      { es: 'Realizar pruebas de aliento o sangre cuando sospechen DUI/DWAI', en: 'Take a breath or blood test when DUI/DWAI is suspected' },
      { es: 'Pagar todas las multas en efectivo', en: 'Pay all fines in cash' },
      { es: 'Renunciar a un abogado', en: 'Waive your right to an attorney' },
      { es: 'Donar órganos', en: 'Donate organs' }
    ],
    correctAnswer: 0,
    explanation: {
      es: 'Bajo la "Express Consent Law" de Colorado, al obtener su licencia consiente realizar pruebas químicas si la policía tiene causa probable. Negarse provoca revocación de un año (primera vez).',
      en: 'Under Colorado\'s Express Consent Law, getting a license means consenting to chemical tests if officers have probable cause. Refusing causes a one-year revocation (first time).'
    },
    sourceReference: { es: 'Ley estatal de Colorado · CRS 42-4-1301.1', en: 'Colorado law · CRS 42-4-1301.1' }
  },
  {
    id: 78, category: 'alcohol',
    question: {
      es: 'Si rechaza la prueba de aliento o sangre en Colorado por primera vez, su licencia será revocada por:',
      en: 'If you refuse a breath or blood test in Colorado for the first time, your license will be revoked for:'
    },
    options: [
      { es: '30 días', en: '30 days' },
      { es: '6 meses', en: '6 months' },
      { es: '1 año', en: '1 year' },
      { es: '5 años', en: '5 years' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'Una primera negativa a la prueba química resulta en revocación automática de la licencia por 1 año, además de las consecuencias del DUI.',
      en: 'A first refusal of the chemical test results in automatic license revocation for 1 year, in addition to DUI consequences.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Express Consent', en: 'Colorado Driver Handbook · Express Consent' }
  },
  {
    id: 79, category: 'alcohol',
    question: {
      es: 'El alcohol afecta principalmente:',
      en: 'Alcohol mainly affects:'
    },
    options: [
      { es: 'La presión de los neumáticos', en: 'Tire pressure' },
      { es: 'El juicio, la coordinación, la visión y el tiempo de reacción', en: 'Judgment, coordination, vision and reaction time' },
      { es: 'Sólo el sentido del olfato', en: 'Only the sense of smell' },
      { es: 'Sólo el oído', en: 'Only hearing' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Incluso pequeñas cantidades de alcohol deterioran el juicio, la coordinación, la visión periférica y el tiempo de reacción.',
      en: 'Even small amounts of alcohol impair judgment, coordination, peripheral vision and reaction time.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Efectos del alcohol', en: 'Colorado Driver Handbook · Effects of alcohol' }
  },
  {
    id: 80, category: 'alcohol',
    question: {
      es: '¿Qué puede hacer para reducir el alcohol en sangre rápidamente antes de manejar?',
      en: 'What can you do to lower your blood alcohol level quickly before driving?'
    },
    options: [
      { es: 'Tomar café cargado', en: 'Drink strong coffee' },
      { es: 'Tomar una ducha fría', en: 'Take a cold shower' },
      { es: 'Comer mucho', en: 'Eat a big meal' },
      { es: 'Sólo el tiempo elimina el alcohol del cuerpo', en: 'Only time removes alcohol from the body' }
    ],
    correctAnswer: 3,
    explanation: {
      es: 'Sólo el tiempo elimina el alcohol del organismo (aproximadamente una bebida estándar por hora). Café, comida o duchas no aceleran el proceso.',
      en: 'Only time removes alcohol from the body (about one standard drink per hour). Coffee, food or showers do not speed it up.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Mitos del alcohol', en: 'Colorado Driver Handbook · Alcohol myths' }
  },
  {
    id: 81, category: 'alcohol',
    question: {
      es: 'Conducir bajo la influencia de marihuana en Colorado:',
      en: 'Driving under the influence of marijuana in Colorado:'
    },
    options: [
      { es: 'Es legal porque la marihuana es legal en el estado', en: 'Is legal because marijuana is legal in the state' },
      { es: 'Es ilegal y se castiga como DUI o DUID', en: 'Is illegal and is punished as DUI or DUID' },
      { es: 'Sólo es ilegal con CDL', en: 'Is only illegal with a CDL' },
      { es: 'Sólo es ilegal de noche', en: 'Is only illegal at night' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Aunque la marihuana es legal para mayores de 21 años, conducir bajo su influencia es ilegal. Se considera DUI con 5 ng/mL de THC en sangre como referencia presuntiva.',
      en: 'Although marijuana is legal for adults 21+, driving under its influence is illegal. 5 ng/mL of active THC is a presumptive DUI level.'
    },
    sourceReference: { es: 'Ley estatal de Colorado · DUID', en: 'Colorado law · DUID' }
  },
  {
    id: 82, category: 'alcohol',
    question: {
      es: 'Una primera condena por DUI en Colorado puede resultar en:',
      en: 'A first DUI conviction in Colorado may result in:'
    },
    options: [
      { es: 'Sólo una advertencia', en: 'Just a warning' },
      { es: 'Multa, suspensión de licencia, servicio comunitario y posible cárcel', en: 'Fine, license suspension, community service and possible jail' },
      { es: 'Pérdida del seguro de gastos médicos', en: 'Loss of medical insurance' },
      { es: 'Suspensión por 10 años', en: '10-year suspension' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'La primera condena por DUI conlleva multas (alrededor de $600-$1000), 9 meses de suspensión, hasta 1 año de cárcel, servicio comunitario y educación sobre alcohol.',
      en: 'A first DUI brings fines (around $600-$1000), 9-month suspension, up to 1 year jail, community service and alcohol education.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Sanciones DUI', en: 'Colorado Driver Handbook · DUI penalties' }
  },
  {
    id: 83, category: 'alcohol',
    question: {
      es: 'Los medicamentos de venta libre o recetados:',
      en: 'Over-the-counter or prescription medications:'
    },
    options: [
      { es: 'Nunca afectan la conducción', en: 'Never affect driving' },
      { es: 'Pueden afectar la conducción y dar lugar a un cargo de DUI', en: 'Can impair driving and lead to a DUI charge' },
      { es: 'Sólo afectan a personas mayores', en: 'Only affect older people' },
      { es: 'Sólo afectan si se mezclan con café', en: 'Only affect when mixed with coffee' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Muchos medicamentos causan somnolencia, mareo o visión borrosa. Conducir bajo su efecto puede ser DUI, incluso si la receta es legal.',
      en: 'Many medications cause drowsiness, dizziness or blurred vision. Driving while affected can be DUI, even with a legal prescription.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Drogas y conducción', en: 'Colorado Driver Handbook · Drugs and driving' }
  },
  {
    id: 84, category: 'alcohol',
    question: {
      es: 'En Colorado, conducir con un envase abierto de alcohol en el área de pasajeros:',
      en: 'In Colorado, driving with an open container of alcohol in the passenger area:'
    },
    options: [
      { es: 'Es legal', en: 'Is legal' },
      { es: 'Es una infracción de tránsito ("open container")', en: 'Is a traffic violation ("open container")' },
      { es: 'Solo es ilegal en autopistas', en: 'Is only illegal on highways' },
      { es: 'Solo es ilegal después de medianoche', en: 'Is only illegal after midnight' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Es ilegal tener un envase abierto de alcohol en el área de pasajeros del vehículo, incluso si nadie está bebiendo.',
      en: 'It is illegal to have an open container of alcohol in the passenger area of the vehicle, even if no one is drinking.'
    },
    sourceReference: { es: 'Ley estatal de Colorado · CRS 42-4-1305', en: 'Colorado law · CRS 42-4-1305' }
  },
  {
    id: 85, category: 'alcohol',
    question: {
      es: 'Una manera segura de evitar conducir bajo influencia es:',
      en: 'A safe way to avoid driving under the influence is:'
    },
    options: [
      { es: 'Esperar 10 minutos después de beber', en: 'Wait 10 minutes after drinking' },
      { es: 'Designar un conductor sobrio o usar transporte alterno', en: 'Designate a sober driver or use alternate transportation' },
      { es: 'Conducir más lento', en: 'Drive more slowly' },
      { es: 'Tomar un vaso de agua antes de manejar', en: 'Drink a glass of water before driving' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Designar un conductor sobrio, usar taxi/rideshare o transporte público es la única manera segura de evitar conducir bajo la influencia.',
      en: 'Using a designated sober driver, taxi/rideshare or public transit is the only safe way to avoid impaired driving.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Prevención DUI', en: 'Colorado Driver Handbook · DUI prevention' }
  },

  /* ===== PEATONES Y CICLISTAS ===== */
  {
    id: 86, category: 'pedestrians',
    question: {
      es: 'En Colorado, al rebasar a un ciclista, debe dejar una distancia mínima lateral de:',
      en: 'In Colorado, when passing a bicyclist you must leave a minimum lateral distance of:'
    },
    options: [
      { es: '1 pie (30 cm)', en: '1 foot (30 cm)' },
      { es: '2 pies (60 cm)', en: '2 feet (60 cm)' },
      { es: '3 pies (90 cm)', en: '3 feet (90 cm)' },
      { es: '6 pies (180 cm)', en: '6 feet (180 cm)' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'La ley de Colorado exige al menos 3 pies de distancia lateral al rebasar una bicicleta. Puede cruzar líneas amarillas dobles si es seguro para mantener la distancia.',
      en: 'Colorado law requires at least 3 feet of lateral distance when passing a bicycle. You may cross a double yellow line if safe to maintain that distance.'
    },
    sourceReference: { es: 'Ley estatal de Colorado · CRS 42-4-1003', en: 'Colorado law · CRS 42-4-1003' }
  },
  {
    id: 87, category: 'pedestrians',
    question: {
      es: 'Al ver a una persona ciega cruzando con un bastón blanco o perro guía, usted debe:',
      en: 'When you see a blind person crossing with a white cane or guide dog, you must:'
    },
    options: [
      { es: 'Tocar el claxon', en: 'Honk' },
      { es: 'Detenerse y cederle el paso siempre', en: 'Stop and yield the right of way at all times' },
      { es: 'Acelerar para pasar antes', en: 'Speed up to pass first' },
      { es: 'Seguir si la persona no escucha', en: 'Continue if the person can\'t hear' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Las personas ciegas que usan bastón blanco o perro guía siempre tienen derecho de paso. Detenga el vehículo y espere a que crucen.',
      en: 'Blind pedestrians using a white cane or guide dog always have the right of way. Stop and wait for them to cross.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Peatones', en: 'Colorado Driver Handbook · Pedestrians' }
  },
  {
    id: 88, category: 'pedestrians',
    question: {
      es: 'Las bicicletas en Colorado en una vía pública:',
      en: 'Bicycles on a public road in Colorado:'
    },
    options: [
      { es: 'Tienen los mismos derechos y responsabilidades que los vehículos motorizados', en: 'Have the same rights and responsibilities as motor vehicles' },
      { es: 'Sólo pueden circular por la banqueta', en: 'May only ride on the sidewalk' },
      { es: 'No tienen que obedecer semáforos', en: 'Do not have to obey traffic signals' },
      { es: 'No pueden usar el carril de tráfico normal', en: 'Cannot use the regular traffic lane' }
    ],
    correctAnswer: 0,
    explanation: {
      es: 'Los ciclistas tienen los mismos derechos y obligaciones que los conductores: deben obedecer señales, semáforos y reglas de tránsito.',
      en: 'Cyclists have the same rights and duties as drivers: they must obey signs, signals and traffic rules.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Compartir el camino', en: 'Colorado Driver Handbook · Sharing the road' }
  },
  {
    id: 89, category: 'pedestrians',
    question: {
      es: 'Cuando un peatón cruza por un paso peatonal sin semáforo, usted debe:',
      en: 'When a pedestrian is crossing in an uncontrolled crosswalk, you must:'
    },
    options: [
      { es: 'Tocar el claxon para que se apure', en: 'Honk so they hurry' },
      { es: 'Cederle el paso y detenerse si es necesario', en: 'Yield and stop if necessary' },
      { es: 'Seguir, ya que tiene prioridad', en: 'Continue, since you have priority' },
      { es: 'Encender las luces altas', en: 'Turn on high beams' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Los peatones tienen el derecho de paso en pasos peatonales marcados o no marcados. Reduzca la velocidad y deténgase para permitir el cruce.',
      en: 'Pedestrians have the right of way at marked and unmarked crosswalks. Slow down and stop to let them cross.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Peatones', en: 'Colorado Driver Handbook · Pedestrians' }
  },
  {
    id: 90, category: 'pedestrians',
    question: {
      es: 'Una motocicleta en una autopista:',
      en: 'A motorcycle on a highway:'
    },
    options: [
      { es: 'Debe compartir un carril con un automóvil', en: 'Must share a lane with a car' },
      { es: 'Tiene derecho a usar todo el carril igual que un automóvil', en: 'Is entitled to a full lane just like a car' },
      { es: 'Sólo puede circular en el acotamiento', en: 'May only ride on the shoulder' },
      { es: 'No puede circular en autopistas', en: 'May not ride on highways' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Una motocicleta tiene derecho al uso completo de un carril. No intente compartirlo con ella.',
      en: 'A motorcycle is entitled to a full lane. Do not try to share the lane with one.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Motocicletas', en: 'Colorado Driver Handbook · Motorcycles' }
  },
  {
    id: 91, category: 'pedestrians',
    question: {
      es: 'Antes de abrir la puerta del lado del conductor en una calle, debe:',
      en: 'Before opening the driver-side door on a street, you must:'
    },
    options: [
      { es: 'Abrir la puerta sin mirar', en: 'Open the door without looking' },
      { es: 'Verificar el espejo y mirar por encima del hombro para evitar ciclistas y vehículos', en: 'Check the mirror and over your shoulder to avoid cyclists and vehicles' },
      { es: 'Tocar el claxon', en: 'Honk first' },
      { es: 'Acelerar antes de abrir', en: 'Accelerate before opening' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Conocido como "dooring", abrir la puerta sin mirar puede provocar choques con ciclistas. Use la "técnica holandesa" abriendo con la mano más alejada para forzarse a mirar.',
      en: 'Known as "dooring", opening the door without looking can cause crashes with cyclists. Use the Dutch reach—open with the far hand to force yourself to look.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Compartir el camino', en: 'Colorado Driver Handbook · Sharing the road' }
  },
  {
    id: 92, category: 'pedestrians',
    question: {
      es: 'En Colorado, los ciclistas pueden tratar una señal de PARE como una señal de "Ceda el paso" en algunos municipios. Esto se conoce como:',
      en: 'In Colorado, cyclists may treat a STOP sign as a YIELD in some municipalities. This is known as:'
    },
    options: [
      { es: '"Idaho stop" o "Safety stop"', en: '"Idaho stop" or "Safety stop"' },
      { es: 'Marcha libre', en: 'Free run' },
      { es: 'Vía rápida', en: 'Fast lane' },
      { es: 'Carril alterno', en: 'Alternate lane' }
    ],
    correctAnswer: 0,
    explanation: {
      es: 'En 2022 Colorado aprobó la "Safety Stop": un ciclista mayor de 15 años puede tratar un PARE como ceda y un semáforo en rojo como un PARE, después de detenerse.',
      en: 'In 2022 Colorado adopted the Safety Stop: cyclists 15+ may treat a STOP as a yield and a red signal as a STOP, after slowing.'
    },
    sourceReference: { es: 'Ley estatal de Colorado · Safety Stop (HB 22-1028)', en: 'Colorado Safety Stop (HB 22-1028)' }
  },
  {
    id: 93, category: 'pedestrians',
    question: {
      es: 'Si un peatón cruza fuera de la zona marcada (jaywalking) en frente de su vehículo, usted debe:',
      en: 'If a pedestrian jaywalks in front of your vehicle, you must:'
    },
    options: [
      { es: 'Continuar; no tiene la razón', en: 'Continue; they don\'t have the right of way' },
      { es: 'Hacer todo lo posible por evitar atropellarlos', en: 'Do everything possible to avoid hitting them' },
      { es: 'Acelerar para asustarlos', en: 'Speed up to scare them' },
      { es: 'Tocar el claxon y seguir', en: 'Honk and keep going' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Aunque el peatón no tenga la razón legal, usted está obligado a hacer lo posible por evitar el atropello.',
      en: 'Even if the pedestrian is in the wrong, you are required to take every reasonable action to avoid hitting them.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Peatones', en: 'Colorado Driver Handbook · Pedestrians' }
  },
  {
    id: 94, category: 'pedestrians',
    question: {
      es: 'Para girar a la derecha en una intersección con carril de bicicletas a la derecha, usted debe:',
      en: 'To turn right at an intersection with a bike lane on your right, you must:'
    },
    options: [
      { es: 'Cruzar el carril de bicicletas sin ceder', en: 'Cross the bike lane without yielding' },
      { es: 'Ceder a los ciclistas, mirar por encima del hombro y hacer el giro cuando esté libre', en: 'Yield to cyclists, look over your shoulder and turn when clear' },
      { es: 'Adelantarlos por la derecha y luego girar', en: 'Pass them on the right and then turn' },
      { es: 'No mirar atrás', en: 'Not check behind' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Antes de girar a la derecha, ceda a los ciclistas que vienen por la derecha del carril, mire por encima del hombro y gire cuando sea seguro.',
      en: 'Before turning right, yield to cyclists in the bike lane, check over your shoulder and turn when safe.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Compartir el camino', en: 'Colorado Driver Handbook · Sharing the road' }
  },
  {
    id: 95, category: 'pedestrians',
    question: {
      es: 'Las motocicletas son menos visibles en el tráfico porque:',
      en: 'Motorcycles are less visible in traffic because:'
    },
    options: [
      { es: 'Tienen luces más débiles', en: 'They have dim lights' },
      { es: 'Su perfil es más pequeño y se pierden fácilmente en los puntos ciegos', en: 'They have a smaller profile and easily disappear into blind spots' },
      { es: 'Sólo circulan de noche', en: 'They only ride at night' },
      { es: 'Son más altas', en: 'They are taller' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'El tamaño reducido de una motocicleta hace difícil estimar su velocidad y distancia. Revise dos veces sus puntos ciegos antes de cambiar de carril.',
      en: 'A motorcycle\'s smaller size makes it hard to judge its speed and distance. Double-check your blind spots before changing lanes.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Motocicletas', en: 'Colorado Driver Handbook · Motorcycles' }
  },

  /* ===== BUSES ESCOLARES Y ZONAS ESCOLARES ===== */
  {
    id: 96, category: 'schoolBus',
    question: {
      es: 'Si un autobús escolar muestra luces ámbar (amarillas) intermitentes, usted debe:',
      en: 'If a school bus shows flashing amber (yellow) lights, you should:'
    },
    options: [
      { es: 'Detenerse de inmediato', en: 'Stop immediately' },
      { es: 'Reducir la velocidad y prepararse para detenerse', en: 'Slow down and prepare to stop' },
      { es: 'Acelerar para rebasarlo', en: 'Speed up to pass' },
      { es: 'Tocar el claxon', en: 'Honk' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Las luces ámbar intermitentes advierten que el bus pronto se detendrá y se encenderán las luces rojas. Reduzca la velocidad y prepárese para detenerse.',
      en: 'Flashing amber lights warn that the bus is about to stop and the red lights will come on. Slow down and prepare to stop.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Autobuses escolares', en: 'Colorado Driver Handbook · School buses' }
  },
  {
    id: 97, category: 'schoolBus',
    question: {
      es: 'En una autopista dividida por una mediana o barrera física, si un autobús escolar se detiene en el lado opuesto con luces rojas intermitentes:',
      en: 'On a highway divided by a median or barrier, if a school bus stops on the opposite side with flashing red lights:'
    },
    options: [
      { es: 'Debe detenerse aunque vaya en sentido opuesto', en: 'You must stop even when traveling in the opposite direction' },
      { es: 'No tiene que detenerse', en: 'You do not have to stop' },
      { es: 'Debe tocar el claxon y pasar', en: 'You must honk and pass' },
      { es: 'Debe orillarse a la derecha', en: 'You must pull to the right' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'En una vía dividida por una mediana o barrera física, los conductores en sentido opuesto NO están obligados a detenerse. En vías sin división deben detenerse todos.',
      en: 'On a road divided by a median or physical barrier, drivers in the opposite direction do NOT have to stop. On undivided roads, all must stop.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Autobuses escolares', en: 'Colorado Driver Handbook · School buses' }
  },
  {
    id: 98, category: 'schoolBus',
    question: {
      es: 'Cuando se detiene detrás de un autobús escolar con luces rojas intermitentes, debe permanecer detenido hasta que:',
      en: 'When stopped behind a school bus with red lights flashing, you must remain stopped until:'
    },
    options: [
      { es: 'El conductor del bus le haga señas', en: 'The bus driver waves you on' },
      { es: 'Las luces dejen de parpadear y el brazo de PARE se retraiga', en: 'The lights stop flashing and the stop arm retracts' },
      { es: 'Pase un policía', en: 'A police officer drives by' },
      { es: 'Se baje el último niño', en: 'The last child gets off' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Permanezca detenido hasta que se apaguen las luces rojas, se retraiga el brazo de PARE y el bus reanude la marcha.',
      en: 'Stay stopped until the red lights are off, the stop arm retracts and the bus resumes motion.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Autobuses escolares', en: 'Colorado Driver Handbook · School buses' }
  },
  {
    id: 99, category: 'schoolBus',
    question: {
      es: 'En las zonas escolares marcadas, debe tener especial cuidado:',
      en: 'In marked school zones you must be especially careful:'
    },
    options: [
      { es: 'Únicamente entre clases', en: 'Only between classes' },
      { es: 'Cuando hay niños presentes y durante el horario escolar', en: 'When children are present and during school hours' },
      { es: 'Sólo después del mediodía', en: 'Only after noon' },
      { es: 'Únicamente los lunes', en: 'Only on Mondays' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Reduzca la velocidad cuando hay niños presentes o cuando las luces de la zona escolar parpadean. Vigile los cruces.',
      en: 'Slow down whenever children are present or when school zone lights are flashing. Watch crossings carefully.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Zonas escolares', en: 'Colorado Driver Handbook · School zones' }
  },
  {
    id: 100, category: 'schoolBus',
    question: {
      es: 'Pasar un autobús escolar detenido con luces rojas intermitentes puede resultar en:',
      en: 'Passing a stopped school bus with flashing red lights may result in:'
    },
    options: [
      { es: 'Una advertencia verbal', en: 'A verbal warning' },
      { es: 'Multas elevadas, puntos y posible suspensión de licencia', en: 'Heavy fines, points and possible license suspension' },
      { es: 'Ninguna sanción', en: 'No penalty' },
      { es: 'Pérdida de placa para siempre', en: 'Permanent plate loss' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'En Colorado, pasar ilegalmente un bus escolar detenido es una infracción grave: 6 puntos en la licencia y multas que pueden superar los $300.',
      en: 'In Colorado, illegally passing a stopped school bus is a serious offense: 6 license points and fines that can exceed $300.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Autobuses escolares', en: 'Colorado Driver Handbook · School buses' }
  },

  /* ===== MANEJO EN INVIERNO ===== */
  {
    id: 101, category: 'winter',
    question: {
      es: 'Cuando hay nieve o hielo en el camino, debe:',
      en: 'When there is snow or ice on the road you should:'
    },
    options: [
      { es: 'Conducir más rápido para no patinar', en: 'Drive faster to avoid sliding' },
      { es: 'Reducir la velocidad y aumentar la distancia con el vehículo de adelante', en: 'Slow down and increase your following distance' },
      { es: 'Mantener el límite de velocidad normal', en: 'Maintain the normal speed limit' },
      { es: 'Frenar bruscamente con frecuencia', en: 'Brake hard often' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'En nieve o hielo, la tracción es mucho menor. Reduzca la velocidad, frene suavemente y aumente la distancia a por lo menos 8 segundos.',
      en: 'In snow or ice, traction is greatly reduced. Slow down, brake gently and increase following distance to at least 8 seconds.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Manejo en invierno', en: 'Colorado Driver Handbook · Winter driving' }
  },
  {
    id: 102, category: 'winter',
    question: {
      es: 'En Colorado, durante el "Código 15" (Traction Law), los vehículos de pasajeros deben tener:',
      en: 'In Colorado, during a "Code 15" Traction Law, passenger vehicles must have:'
    },
    options: [
      { es: 'Llantas con dibujo mínimo de 1/8" o cadenas', en: 'Tires with at least 1/8" tread or chains' },
      { es: 'Llantas para nieve (M+S/3PMSF), tracción 4x4/AWD o cadenas con al menos 3/16" de dibujo', en: 'Snow tires (M+S/3PMSF), 4WD/AWD or chains with at least 3/16" tread' },
      { es: 'Cualquier tipo de llantas', en: 'Any tires' },
      { es: 'Llantas de verano', en: 'Summer tires' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'La Traction Law (Código 15) requiere llantas M+S o 3PMSF, AWD/4WD o cadenas, con al menos 3/16" de dibujo.',
      en: 'The Traction Law (Code 15) requires M+S or 3PMSF tires, AWD/4WD or chains, with at least 3/16" tread.'
    },
    sourceReference: { es: 'CDOT · Traction Law (Código 15)', en: 'CDOT · Traction Law (Code 15)' }
  },
  {
    id: 103, category: 'winter',
    question: {
      es: 'Si su vehículo empieza a patinar (skid) en hielo, debe:',
      en: 'If your vehicle starts to skid on ice you should:'
    },
    options: [
      { es: 'Frenar bruscamente', en: 'Slam the brakes' },
      { es: 'Soltar el acelerador y voltear el volante en la dirección a la que quiere ir', en: 'Release the gas and steer in the direction you want to go' },
      { es: 'Acelerar para recuperar control', en: 'Accelerate to regain control' },
      { es: 'Apagar el motor', en: 'Turn off the engine' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Suelte el acelerador, no frene de golpe y voltee suavemente el volante hacia donde quiere que vaya el frente del auto.',
      en: 'Release the gas, do not slam the brakes, and steer gently in the direction you want the front of the car to go.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Patinaje', en: 'Colorado Driver Handbook · Skidding' }
  },
  {
    id: 104, category: 'winter',
    question: {
      es: 'Los puentes y pasos elevados se congelan:',
      en: 'Bridges and overpasses freeze:'
    },
    options: [
      { es: 'Después que el resto del pavimento', en: 'After the rest of the road' },
      { es: 'Antes que el resto del pavimento porque están expuestos al aire por arriba y por abajo', en: 'Before the rest of the road because they are exposed to air on both sides' },
      { es: 'Al mismo tiempo que el resto del pavimento', en: 'At the same time as the rest of the road' },
      { es: 'Nunca se congelan', en: 'They never freeze' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Los puentes pierden calor por ambos lados, por lo que se congelan antes que el pavimento normal. Reduzca la velocidad al cruzarlos.',
      en: 'Bridges lose heat from both sides, so they freeze before regular pavement. Slow down when crossing them.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Manejo en invierno', en: 'Colorado Driver Handbook · Winter driving' }
  },
  {
    id: 105, category: 'winter',
    question: {
      es: 'El "hielo negro" (black ice) es peligroso porque:',
      en: 'Black ice is dangerous because:'
    },
    options: [
      { es: 'Es muy ruidoso', en: 'It is very noisy' },
      { es: 'Es transparente y casi invisible sobre el pavimento', en: 'It is transparent and nearly invisible on the road' },
      { es: 'Sólo aparece bajo luces rojas', en: 'Only appears under red lights' },
      { es: 'Sólo afecta motocicletas', en: 'Only affects motorcycles' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'El hielo negro forma una capa transparente sobre el pavimento que puede pasar desapercibida. Aparece sobre todo en sombras, puentes y temprano por la mañana.',
      en: 'Black ice forms a transparent layer on the pavement that is easy to miss. It appears mainly in shaded areas, bridges and early in the morning.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Manejo en invierno', en: 'Colorado Driver Handbook · Winter driving' }
  },
  {
    id: 106, category: 'winter',
    question: {
      es: 'Antes de salir a la carretera en invierno debería:',
      en: 'Before driving in winter you should:'
    },
    options: [
      { es: 'Dejar el parabrisas y los espejos congelados; se descongelan solos', en: 'Leave the windshield and mirrors frozen; they will defrost on their own' },
      { es: 'Limpiar todo el hielo y la nieve del parabrisas, ventanas, espejos, luces, techo y placas', en: 'Clear all ice and snow from windshield, windows, mirrors, lights, roof and plates' },
      { es: 'Limpiar sólo el lado del conductor', en: 'Only clear the driver side' },
      { es: 'Manejar con un solo limpiaparabrisas', en: 'Drive with only one wiper working' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Visibilidad completa es esencial. La nieve sobre el techo puede caer y obstruir su vista o la de otros conductores.',
      en: 'Full visibility is essential. Snow on the roof can fall and block your or other drivers\' view.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Manejo en invierno', en: 'Colorado Driver Handbook · Winter driving' }
  },
  {
    id: 107, category: 'winter',
    question: {
      es: 'El "hidroplaneo" puede ocurrir cuando:',
      en: 'Hydroplaning may happen when:'
    },
    options: [
      { es: 'Maneja sobre asfalto seco', en: 'You drive on dry asphalt' },
      { es: 'Las llantas pierden contacto con el pavimento al pasar por agua acumulada', en: 'Tires lose contact with the road when crossing standing water' },
      { es: 'Frena suavemente', en: 'You brake gently' },
      { es: 'Maneja en tierra', en: 'You drive on dirt' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'El hidroplaneo ocurre por agua acumulada que separa la llanta del pavimento. Puede iniciar a partir de 35 mph. Reduzca la velocidad y evite frenar bruscamente.',
      en: 'Hydroplaning occurs when standing water lifts the tire off the road. It can start at speeds of 35 mph. Slow down and avoid sudden braking.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Hidroplaneo', en: 'Colorado Driver Handbook · Hydroplaning' }
  },

  /* ===== AUTOPISTAS E INTERESTATALES ===== */
  {
    id: 108, category: 'highway',
    question: {
      es: 'En una autopista, el carril izquierdo se usa principalmente para:',
      en: 'On a highway, the left lane is mainly used for:'
    },
    options: [
      { es: 'Rebasar a otros vehículos', en: 'Passing other vehicles' },
      { es: 'Conducir lento', en: 'Slow driving' },
      { es: 'Estacionarse', en: 'Parking' },
      { es: 'Salidas', en: 'Exits' }
    ],
    correctAnswer: 0,
    explanation: {
      es: 'En Colorado el carril izquierdo se reserva para rebasar. Después de rebasar, regrese a la derecha.',
      en: 'In Colorado the left lane is reserved for passing. After passing, return to the right.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Autopistas', en: 'Colorado Driver Handbook · Highways' }
  },
  {
    id: 109, category: 'highway',
    question: {
      es: 'Al salir de una autopista debe:',
      en: 'When exiting a highway you should:'
    },
    options: [
      { es: 'Reducir la velocidad en el carril principal antes de salir', en: 'Slow down in the main lane before exiting' },
      { es: 'Reducir la velocidad sólo después de tomar la rampa de salida', en: 'Slow down only after taking the exit ramp' },
      { es: 'Continuar a la misma velocidad', en: 'Continue at the same speed' },
      { es: 'Detenerse al final de la salida', en: 'Stop at the end of the exit' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Mantenga la velocidad del tráfico hasta entrar en la rampa de salida y luego reduzca. Frenar en el carril principal genera congestión y choques.',
      en: 'Maintain traffic speed until you enter the exit ramp, then slow down. Braking in the main lane causes congestion and crashes.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Autopistas', en: 'Colorado Driver Handbook · Highways' }
  },
  {
    id: 110, category: 'highway',
    question: {
      es: 'Si pierde su salida en una autopista debe:',
      en: 'If you miss your exit on a highway you should:'
    },
    options: [
      { es: 'Dar marcha atrás', en: 'Back up' },
      { es: 'Continuar hasta la siguiente salida', en: 'Continue to the next exit' },
      { es: 'Cruzar la mediana', en: 'Cross the median' },
      { es: 'Detenerse en el acotamiento', en: 'Stop on the shoulder' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Nunca dé marcha atrás ni cruce la mediana en una autopista. Continúe hasta la siguiente salida y dé la vuelta.',
      en: 'Never back up or cross the median on a highway. Continue to the next exit and turn around.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Autopistas', en: 'Colorado Driver Handbook · Highways' }
  },
  {
    id: 111, category: 'highway',
    question: {
      es: 'Al incorporarse a una autopista, el carril de aceleración sirve para:',
      en: 'When merging onto a highway, the acceleration lane is for:'
    },
    options: [
      { es: 'Detenerse y esperar un hueco', en: 'Stopping and waiting for a gap' },
      { es: 'Igualar la velocidad del tráfico de la autopista', en: 'Matching the speed of highway traffic' },
      { es: 'Pasar a vehículos lentos', en: 'Passing slow vehicles' },
      { es: 'Estacionarse', en: 'Parking' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Use el carril de aceleración para alcanzar la velocidad del tráfico antes de incorporarse al carril principal.',
      en: 'Use the acceleration lane to reach traffic speed before merging into the main lane.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Incorporación', en: 'Colorado Driver Handbook · Merging' }
  },
  {
    id: 112, category: 'highway',
    question: {
      es: 'Si su vehículo se descompone en una autopista debe:',
      en: 'If your vehicle breaks down on a highway you should:'
    },
    options: [
      { es: 'Detenerse en el carril principal', en: 'Stop in the main lane' },
      { es: 'Orillarse lo más posible a la derecha, encender intermitentes y pedir ayuda', en: 'Pull off as far right as possible, turn on hazard lights and call for help' },
      { es: 'Bajarse y caminar entre los carriles', en: 'Get out and walk between lanes' },
      { es: 'Detenerse en la mediana', en: 'Stop in the median' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Salga del flujo de tráfico, encienda las luces intermitentes y permanezca dentro del vehículo si es seguro. Llame para asistencia.',
      en: 'Get out of traffic, turn on hazard lights and stay in the vehicle if safe. Call for assistance.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Emergencias', en: 'Colorado Driver Handbook · Emergencies' }
  },
  {
    id: 113, category: 'highway',
    question: {
      es: 'En autopistas con tres carriles o más, los vehículos pesados (camiones) generalmente:',
      en: 'On highways with three or more lanes, heavy trucks generally:'
    },
    options: [
      { es: 'Deben usar el carril izquierdo', en: 'Must use the left lane' },
      { es: 'Tienen prohibido el carril izquierdo y deben mantenerse en los carriles derechos', en: 'Are prohibited from the left lane and must stay in the right lanes' },
      { es: 'No tienen restricciones', en: 'Have no restrictions' },
      { es: 'Sólo pueden usar el carril central', en: 'Can only use the center lane' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Los vehículos pesados deben circular por los carriles de la derecha; el izquierdo es para rebasar.',
      en: 'Heavy vehicles must use the right lanes; the left lane is for passing.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Camiones', en: 'Colorado Driver Handbook · Trucks' }
  },
  {
    id: 114, category: 'highway',
    question: {
      es: 'El acotamiento (shoulder) de una autopista debe usarse:',
      en: 'The shoulder of a highway should be used:'
    },
    options: [
      { es: 'Como un carril adicional cuando hay tráfico', en: 'As an extra lane in traffic' },
      { es: 'Sólo en emergencias o como lo indique la ley', en: 'Only in emergencies or as the law specifies' },
      { es: 'Para rebasar por la derecha', en: 'For passing on the right' },
      { es: 'Como zona de juegos', en: 'As a play area' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'El acotamiento sólo se usa en emergencias o cuando una autoridad lo indique. Circular en él es ilegal.',
      en: 'The shoulder is for emergencies or as directed by authorities. Driving on it is illegal.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Autopistas', en: 'Colorado Driver Handbook · Highways' }
  },
  {
    id: 115, category: 'highway',
    question: {
      es: 'El "HOV lane" o carril de alta ocupación está reservado para:',
      en: 'The HOV lane (high-occupancy vehicle lane) is reserved for:'
    },
    options: [
      { es: 'Cualquier vehículo', en: 'Any vehicle' },
      { es: 'Vehículos con cierto número mínimo de ocupantes (y autorizados)', en: 'Vehicles with a minimum number of occupants (and approved vehicles)' },
      { es: 'Sólo camiones', en: 'Trucks only' },
      { es: 'Vehículos de emergencia exclusivamente', en: 'Emergency vehicles only' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'El carril HOV requiere un número mínimo de ocupantes (usualmente 2 o 3) o un permiso especial (ej. vehículos eléctricos certificados).',
      en: 'HOV lanes require a minimum number of occupants (usually 2 or 3) or special authorization (e.g. approved electric vehicles).'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Carriles especiales', en: 'Colorado Driver Handbook · Special lanes' }
  },

  /* ===== ESTACIONAMIENTO ===== */
  {
    id: 116, category: 'parking',
    question: {
      es: 'En Colorado, no se permite estacionarse a menos de cuántos pies de un hidrante de agua:',
      en: 'In Colorado, parking is not allowed within how many feet of a fire hydrant:'
    },
    options: [
      { es: '5 pies', en: '5 feet' },
      { es: '10 pies', en: '10 feet' },
      { es: '15 pies', en: '15 feet' },
      { es: '25 pies', en: '25 feet' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'Está prohibido estacionarse dentro de 15 pies de un hidrante en cualquier dirección.',
      en: 'It is prohibited to park within 15 feet of a fire hydrant in either direction.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Estacionamiento', en: 'Colorado Driver Handbook · Parking' }
  },
  {
    id: 117, category: 'parking',
    image: 'park.downhillCurb',
    question: {
      es: 'Al estacionar en una pendiente cuesta abajo con la banqueta, las ruedas delanteras deben quedar:',
      en: 'When parking downhill next to a curb, the front wheels must be turned:'
    },
    options: [
      { es: 'En línea recta', en: 'Straight ahead' },
      { es: 'Hacia la banqueta', en: 'Toward the curb' },
      { es: 'Hacia el centro de la calle', en: 'Toward the street' },
      { es: 'No importa', en: 'It does not matter' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Cuesta abajo con banqueta: gire el volante hacia la banqueta. Si el vehículo se mueve, la banqueta lo detiene.',
      en: 'Downhill with a curb: turn the wheels toward the curb. If the car rolls, the curb stops it.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Estacionamiento en pendiente', en: 'Colorado Driver Handbook · Hill parking' }
  },
  {
    id: 118, category: 'parking',
    image: 'park.uphillCurb',
    question: {
      es: 'Al estacionar cuesta arriba con banqueta, las ruedas delanteras deben quedar:',
      en: 'When parking uphill next to a curb, the front wheels must be turned:'
    },
    options: [
      { es: 'Hacia la banqueta', en: 'Toward the curb' },
      { es: 'Lejos de la banqueta (hacia la calle)', en: 'Away from the curb (toward the street)' },
      { es: 'Rectas', en: 'Straight' },
      { es: 'No importa', en: 'Doesn\'t matter' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Cuesta arriba con banqueta: gire las ruedas hacia afuera de la banqueta. Si rueda, la rueda trasera tocará la banqueta y lo detendrá.',
      en: 'Uphill with a curb: turn the wheels away from the curb. If it rolls, the rear wheel will catch the curb and stop the car.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Estacionamiento en pendiente', en: 'Colorado Driver Handbook · Hill parking' }
  },
  {
    id: 119, category: 'parking',
    image: 'park.noCurb',
    question: {
      es: 'Al estacionar en una pendiente sin banqueta (cuesta arriba o cuesta abajo), las ruedas deben quedar:',
      en: 'When parking on a hill with no curb (uphill or downhill), the wheels should be turned:'
    },
    options: [
      { es: 'Rectas', en: 'Straight' },
      { es: 'Hacia el borde del camino', en: 'Toward the edge of the road' },
      { es: 'Hacia el centro del camino', en: 'Toward the center of the road' },
      { es: 'No importa', en: 'Doesn\'t matter' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Sin banqueta, las ruedas se giran siempre hacia el borde del camino para que, si el auto rueda, se aleje del flujo de tráfico.',
      en: 'With no curb, always turn the wheels toward the edge of the road so the car rolls away from traffic if it moves.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Estacionamiento en pendiente', en: 'Colorado Driver Handbook · Hill parking' }
  },
  {
    id: 120, category: 'parking',
    question: {
      es: 'En Colorado, no se permite estacionarse a menos de cuántos pies de una señal de PARE o semáforo:',
      en: 'In Colorado, parking is not allowed within how many feet of a STOP sign or signal:'
    },
    options: [
      { es: '10 pies', en: '10 feet' },
      { es: '20 pies', en: '20 feet' },
      { es: '30 pies', en: '30 feet' },
      { es: '50 pies', en: '50 feet' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'No estacione dentro de 30 pies de una señal de PARE, "Ceda el paso" o semáforo: bloquea la visibilidad de otros conductores.',
      en: 'Do not park within 30 feet of a STOP, YIELD or traffic signal: it blocks the view of other drivers.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Estacionamiento', en: 'Colorado Driver Handbook · Parking' }
  },
  {
    id: 121, category: 'parking',
    question: {
      es: 'Está prohibido estacionarse a menos de cuántos pies de un cruce ferroviario:',
      en: 'You may not park within how many feet of a railroad crossing:'
    },
    options: [
      { es: '15 pies', en: '15 feet' },
      { es: '20 pies', en: '20 feet' },
      { es: '50 pies', en: '50 feet' },
      { es: '100 pies', en: '100 feet' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'No estacione dentro de 50 pies del riel más cercano de un cruce ferroviario.',
      en: 'Do not park within 50 feet of the nearest rail of a railroad crossing.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Estacionamiento', en: 'Colorado Driver Handbook · Parking' }
  },
  {
    id: 122, category: 'parking',
    question: {
      es: 'Está prohibido estacionarse:',
      en: 'You may not park:'
    },
    options: [
      { es: 'En una banqueta o frente a un acceso vehicular (driveway)', en: 'On a sidewalk or in front of a driveway' },
      { es: 'En una zona azul si tiene placa de discapacidad', en: 'In a blue zone if you have a disability plate' },
      { es: 'En su propio garaje', en: 'In your own garage' },
      { es: 'En un parquímetro pagado', en: 'At a paid meter' }
    ],
    correctAnswer: 0,
    explanation: {
      es: 'Nunca estacione sobre la banqueta, frente a un acceso vehicular, en un paso peatonal o en un carril de bicicleta. Los espacios azules son para personas con discapacidad autorizadas.',
      en: 'Never park on a sidewalk, in front of a driveway, in a crosswalk or in a bike lane. Blue spaces are for authorized disabled persons.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Estacionamiento', en: 'Colorado Driver Handbook · Parking' }
  },
  {
    id: 123, category: 'parking',
    question: {
      es: 'Al estacionar en paralelo a la banqueta, las ruedas deben quedar a no más de:',
      en: 'When parallel parking next to a curb, your wheels must be no more than:'
    },
    options: [
      { es: '6 pulgadas de la banqueta', en: '6 inches from the curb' },
      { es: '12 pulgadas de la banqueta', en: '12 inches from the curb' },
      { es: '24 pulgadas de la banqueta', en: '24 inches from the curb' },
      { es: '36 pulgadas de la banqueta', en: '36 inches from the curb' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Sus ruedas deben quedar a no más de 12 pulgadas (un pie) de la banqueta al estacionar en paralelo.',
      en: 'Your wheels must be no more than 12 inches (one foot) from the curb when parallel parking.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Estacionamiento paralelo', en: 'Colorado Driver Handbook · Parallel parking' }
  },

  /* ===== LUCES Y VISIBILIDAD ===== */
  {
    id: 124, category: 'lights',
    question: {
      es: 'En Colorado, las luces deben encenderse:',
      en: 'In Colorado, headlights must be on:'
    },
    options: [
      { es: 'Sólo durante la noche', en: 'Only at night' },
      { es: 'Desde el atardecer hasta el amanecer y cuando la visibilidad es menor a 1000 pies', en: 'From sunset to sunrise and when visibility is less than 1000 feet' },
      { es: 'Sólo en autopistas', en: 'Only on highways' },
      { es: 'Sólo si llueve', en: 'Only when it rains' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Use luces desde el atardecer hasta el amanecer y siempre que la visibilidad sea menor a 1000 pies (lluvia, neblina, nieve, humo).',
      en: 'Use headlights from sunset to sunrise and whenever visibility is less than 1000 feet (rain, fog, snow, smoke).'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Luces', en: 'Colorado Driver Handbook · Headlights' }
  },
  {
    id: 125, category: 'lights',
    question: {
      es: 'Las luces altas (high beams) deben bajarse al cruzarse con otro vehículo a una distancia de al menos:',
      en: 'High beams must be dimmed for an oncoming vehicle within a distance of at least:'
    },
    options: [
      { es: '100 pies', en: '100 feet' },
      { es: '200 pies', en: '200 feet' },
      { es: '500 pies', en: '500 feet' },
      { es: '1000 pies', en: '1000 feet' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'Cambie a luces bajas al menos 500 pies antes de cruzarse con otro vehículo para no encandilarlo.',
      en: 'Switch to low beams at least 500 feet before meeting another vehicle to avoid blinding the other driver.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Luces altas', en: 'Colorado Driver Handbook · High beams' }
  },
  {
    id: 126, category: 'lights',
    question: {
      es: 'Las luces altas también deben bajarse al seguir a otro vehículo dentro de:',
      en: 'High beams must also be dimmed when following another vehicle within:'
    },
    options: [
      { es: '100 pies', en: '100 feet' },
      { es: '200 pies', en: '200 feet' },
      { es: '500 pies', en: '500 feet' },
      { es: 'Nunca cuando se sigue a otro vehículo', en: 'Never when following another vehicle' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Cambie a luces bajas al estar a 200 pies o menos detrás de otro vehículo para no encandilarlo por los espejos.',
      en: 'Switch to low beams when within 200 feet of the vehicle ahead so you do not blind them through their mirrors.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Luces altas', en: 'Colorado Driver Handbook · High beams' }
  },
  {
    id: 127, category: 'lights',
    question: {
      es: 'En neblina densa, lo mejor es usar:',
      en: 'In dense fog, the best lights to use are:'
    },
    options: [
      { es: 'Luces altas', en: 'High beams' },
      { es: 'Luces bajas o de neblina', en: 'Low beams or fog lights' },
      { es: 'Luces interiores', en: 'Interior lights' },
      { es: 'Ninguna luz', en: 'No lights' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'En neblina, las luces altas reflejan en las gotas y reducen la visibilidad. Use luces bajas o luces de neblina.',
      en: 'In fog, high beams reflect off droplets and reduce visibility. Use low beams or fog lights.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Visibilidad reducida', en: 'Colorado Driver Handbook · Low visibility' }
  },
  {
    id: 128, category: 'lights',
    question: {
      es: 'Si otro vehículo se acerca de frente con luces altas, usted debe:',
      en: 'If another vehicle approaches with high beams on, you should:'
    },
    options: [
      { es: 'Mirar directamente sus luces', en: 'Look directly at their lights' },
      { es: 'Encender también sus luces altas', en: 'Turn on your high beams too' },
      { es: 'Mirar a la línea blanca derecha y reducir la velocidad', en: 'Look at the right white line and slow down' },
      { es: 'Acelerar', en: 'Speed up' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'Mire hacia la línea blanca derecha del pavimento y reduzca la velocidad. Nunca encienda sus luces altas como represalia.',
      en: 'Look at the white line on the right edge and slow down. Never use your high beams in retaliation.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Luces altas', en: 'Colorado Driver Handbook · High beams' }
  },
  {
    id: 129, category: 'lights',
    question: {
      es: 'Las luces de emergencia (intermitentes) deben usarse:',
      en: 'Hazard lights should be used:'
    },
    options: [
      { es: 'Mientras conduce normalmente', en: 'While driving normally' },
      { es: 'Cuando su vehículo es un peligro: averiado, detenido, en tráfico muy lento por niebla, etc.', en: 'When your vehicle is a hazard: broken down, stopped, in very slow traffic due to fog, etc.' },
      { es: 'En lugar de la luz direccional', en: 'Instead of turn signals' },
      { es: 'Para estacionarse temporalmente', en: 'For temporary parking' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Las intermitentes alertan a los demás de un peligro: vehículo averiado o detenido. No se usan en lugar de direccionales.',
      en: 'Hazard lights alert others of a danger: a broken-down or stopped vehicle. They are not a substitute for turn signals.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Luces de emergencia', en: 'Colorado Driver Handbook · Hazard lights' }
  },

  /* ===== ADELANTAMIENTO Y CARRILES ===== */
  {
    id: 130, category: 'passing',
    question: {
      es: 'No se permite rebasar:',
      en: 'You may not pass:'
    },
    options: [
      { es: 'En el carril izquierdo de una autopista', en: 'In the left lane of a highway' },
      { es: 'Cuando hay una línea amarilla sólida a su lado, en cruces, puentes, túneles o cerca de cruces ferroviarios', en: 'When there is a solid yellow line on your side, at intersections, bridges, tunnels or near railroad crossings' },
      { es: 'Cuando el otro vehículo va más lento que usted', en: 'When the other vehicle is slower' },
      { es: 'En el día', en: 'During daytime' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Rebasar está prohibido en líneas amarillas sólidas, intersecciones, cruces escolares, puentes, túneles y cuando la visibilidad es insuficiente.',
      en: 'Passing is prohibited at solid yellow lines, intersections, school crossings, bridges, tunnels and where visibility is poor.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Adelantamiento', en: 'Colorado Driver Handbook · Passing' }
  },
  {
    id: 131, category: 'passing',
    question: {
      es: 'Antes de cambiar de carril debe:',
      en: 'Before changing lanes you must:'
    },
    options: [
      { es: 'Tocar el claxon', en: 'Honk' },
      { es: 'Señalizar, revisar espejos y mirar por encima del hombro al punto ciego', en: 'Signal, check mirrors and look over your shoulder at the blind spot' },
      { es: 'Acelerar abruptamente', en: 'Abruptly accelerate' },
      { es: 'Cerrar las ventanas', en: 'Close the windows' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Use la direccional, revise el retrovisor y los espejos laterales y mire por encima del hombro hacia el punto ciego antes de cambiar de carril.',
      en: 'Use your signal, check the rearview and side mirrors and glance over your shoulder at the blind spot before changing lanes.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Cambios de carril', en: 'Colorado Driver Handbook · Lane changes' }
  },
  {
    id: 132, category: 'passing',
    question: {
      es: 'Cuando otro vehículo lo está rebasando, debe:',
      en: 'When another vehicle is passing you, you should:'
    },
    options: [
      { es: 'Acelerar para no dejarlo pasar', en: 'Speed up to prevent the pass' },
      { es: 'Mantener su velocidad o reducir ligeramente', en: 'Maintain your speed or slow down slightly' },
      { es: 'Tocar el claxon', en: 'Honk' },
      { es: 'Cambiar al carril izquierdo', en: 'Move to the left lane' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Permita que el otro vehículo complete el rebase con seguridad: mantenga su velocidad o reduzca ligeramente. Nunca acelere.',
      en: 'Let the other vehicle finish passing safely: maintain your speed or slow down slightly. Never accelerate.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Adelantamiento', en: 'Colorado Driver Handbook · Passing' }
  },
  {
    id: 133, category: 'passing',
    question: {
      es: 'Rebasar por la derecha:',
      en: 'Passing on the right:'
    },
    options: [
      { es: 'Está totalmente prohibido', en: 'Is completely prohibited' },
      { es: 'Se permite sólo en ciertas circunstancias: cuando el vehículo de adelante gira a la izquierda o en autopistas con varios carriles', en: 'Is allowed only in certain cases: when the vehicle ahead is turning left, or on multi-lane highways' },
      { es: 'Se permite siempre que sea más rápido', en: 'Is always allowed if faster' },
      { es: 'Solo se permite por motocicletas', en: 'Is only allowed for motorcycles' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Sólo se permite rebasar por la derecha cuando el vehículo de adelante va a girar a la izquierda o en vías con dos o más carriles en la misma dirección.',
      en: 'Passing on the right is only allowed when the vehicle ahead is turning left or on roads with two or more lanes going the same direction.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Adelantamiento', en: 'Colorado Driver Handbook · Passing' }
  },

  /* ===== EMERGENCIAS Y ACCIDENTES ===== */
  {
    id: 134, category: 'emergency',
    question: {
      es: 'Si está involucrado en un accidente debe:',
      en: 'If you are involved in a crash you must:'
    },
    options: [
      { es: 'Continuar conduciendo si no hay heridos', en: 'Keep driving if there are no injuries' },
      { es: 'Detenerse en el lugar (o lo más cercano y seguro), prestar ayuda y reportar a la policía si hay lesiones, muerte o daños', en: 'Stop at the scene (or as near and as safe as possible), help if needed and call police for injuries, death or damage' },
      { es: 'Esperar 24 horas para reportar', en: 'Wait 24 hours to report' },
      { es: 'Borrar las marcas del accidente', en: 'Erase the crash marks' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Detenerse y dar ayuda es obligatorio. En Colorado debe reportar a la policía si hay lesiones, muerte o daños considerables.',
      en: 'Stopping and rendering aid is required. In Colorado you must report to police if there are injuries, fatalities or significant damage.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Accidentes', en: 'Colorado Driver Handbook · Crashes' }
  },
  {
    id: 135, category: 'emergency',
    question: {
      es: 'Abandonar el lugar de un accidente con lesiones o daños sin reportar (hit and run) es:',
      en: 'Leaving the scene of a crash with injuries or damage without reporting (hit and run) is:'
    },
    options: [
      { es: 'Una infracción menor', en: 'A minor infraction' },
      { es: 'Un delito grave con penas severas', en: 'A serious crime with heavy penalties' },
      { es: 'Permitido si va a la policía después', en: 'Allowed if you go to the police later' },
      { es: 'Sólo problemático en autopistas', en: 'Only a problem on highways' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'En Colorado, "hit and run" es un delito que puede ser felonía si hay lesiones o muerte: pérdida de licencia, multas altas y cárcel.',
      en: 'In Colorado, hit and run is a crime—potentially a felony if injuries or death occur—leading to license loss, heavy fines and jail.'
    },
    sourceReference: { es: 'Ley estatal de Colorado · CRS 42-4-1601', en: 'Colorado law · CRS 42-4-1601' }
  },
  {
    id: 136, category: 'emergency',
    question: {
      es: 'Si su vehículo se incendia mientras conduce debe:',
      en: 'If your vehicle catches fire while driving you should:'
    },
    options: [
      { es: 'Detener el motor en una estación de gasolina', en: 'Stop at a gas station' },
      { es: 'Orillarse lejos de edificios y árboles, apagar el motor, salir y alejarse', en: 'Pull over away from buildings and trees, turn off the engine, get out and walk away' },
      { es: 'Acelerar para apagar las llamas con el viento', en: 'Speed up to put out the flames with wind' },
      { es: 'Abrir el capó inmediatamente', en: 'Open the hood immediately' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Aléjese de objetos inflamables, apague el motor, salga rápidamente y aléjese al menos 100 pies. Llame al 911.',
      en: 'Move away from flammable objects, turn off the engine, exit quickly and move at least 100 feet away. Call 911.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Emergencias', en: 'Colorado Driver Handbook · Emergencies' }
  },
  {
    id: 137, category: 'emergency',
    question: {
      es: 'Si revienta una llanta a alta velocidad debe:',
      en: 'If a tire blows out at high speed you should:'
    },
    options: [
      { es: 'Frenar bruscamente', en: 'Slam the brakes' },
      { es: 'Sujetar firme el volante, soltar el acelerador y orillarse poco a poco', en: 'Grip the wheel firmly, release the gas and gradually pull over' },
      { es: 'Acelerar para mantener el control', en: 'Accelerate to maintain control' },
      { es: 'Girar bruscamente para cambiar de carril', en: 'Steer sharply to change lanes' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Sujete firmemente el volante, no frene bruscamente y deje que el vehículo se desacelere. Cambie con cuidado al acotamiento.',
      en: 'Hold the wheel firmly, do not brake hard and let the vehicle slow down. Carefully steer to the shoulder.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Emergencias', en: 'Colorado Driver Handbook · Emergencies' }
  },
  {
    id: 138, category: 'emergency',
    question: {
      es: 'Si un animal grande aparece de pronto en su camino, debe:',
      en: 'If a large animal suddenly appears in your path you should:'
    },
    options: [
      { es: 'Acelerar para pasar primero', en: 'Speed up to pass first' },
      { es: 'Frenar, mantener su carril y no virar bruscamente', en: 'Brake, stay in your lane and avoid sharp steering' },
      { es: 'Salirse del camino bruscamente', en: 'Swerve off the road' },
      { es: 'Encender las luces altas y seguir', en: 'Turn on high beams and continue' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Mantener el carril y frenar es más seguro que virar bruscamente, que puede provocar volcadura o un choque con vehículos opuestos.',
      en: 'Staying in your lane and braking is safer than swerving, which can roll the car or cause a head-on with opposing traffic.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Animales en la vía', en: 'Colorado Driver Handbook · Animals on the road' }
  },

  /* ===== DOCUMENTOS, LICENCIA Y SEGURO ===== */
  {
    id: 139, category: 'documents',
    question: {
      es: 'En Colorado, la edad mínima para obtener un permiso de instrucción (instruction permit) con educación vial es:',
      en: 'In Colorado, the minimum age for an instruction permit with driver education is:'
    },
    options: [
      { es: '14 años', en: '14 years' },
      { es: '15 años', en: '15 years' },
      { es: '16 años', en: '16 years' },
      { es: '17 años', en: '17 years' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Con educación vial completa se puede obtener el permiso a los 15. A los 15.5 con un curso de concientización; a los 16 sin requisito de curso, pero con supervisión obligatoria.',
      en: 'With completed driver education you can get a permit at 15. At 15.5 with an awareness course; at 16 with no course requirement, but with mandatory supervision.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · GDL (Graduated Driver Licensing)', en: 'Colorado Driver Handbook · GDL' }
  },
  {
    id: 140, category: 'documents',
    question: {
      es: 'Un conductor con permiso de instrucción debe practicar al menos cuántas horas, incluyendo manejo nocturno:',
      en: 'A driver with an instruction permit must complete how many supervised driving hours, including night driving:'
    },
    options: [
      { es: '20 horas, 5 nocturnas', en: '20 hours, 5 at night' },
      { es: '30 horas, 5 nocturnas', en: '30 hours, 5 at night' },
      { es: '50 horas, 10 nocturnas', en: '50 hours, 10 at night' },
      { es: '100 horas, 25 nocturnas', en: '100 hours, 25 at night' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'Antes de obtener la licencia provisional debe registrar al menos 50 horas de práctica supervisada, incluyendo 10 horas en la oscuridad.',
      en: 'Before getting a provisional license you must log at least 50 hours of supervised practice, including 10 hours at night.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · GDL', en: 'Colorado Driver Handbook · GDL' }
  },
  {
    id: 141, category: 'documents',
    question: {
      es: 'Durante los primeros 6 meses con licencia provisional (menor de 18), no puede llevar como pasajeros:',
      en: 'During the first 6 months with a provisional license (under 18), you may not have as passengers:'
    },
    options: [
      { es: 'A nadie en absoluto', en: 'Anyone at all' },
      { es: 'A personas menores de 21 que no sean familiares directos', en: 'Anyone under 21 who is not an immediate family member' },
      { es: 'Sólo a mascotas', en: 'Only pets' },
      { es: 'A más de 4 personas', en: 'More than 4 people' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Durante los primeros 6 meses no puede transportar pasajeros menores de 21 años que no sean familiares directos.',
      en: 'During the first 6 months you cannot transport passengers under 21 who are not immediate family.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · GDL', en: 'Colorado Driver Handbook · GDL' }
  },
  {
    id: 142, category: 'documents',
    question: {
      es: 'En Colorado, los conductores menores de 18 años con licencia provisional no pueden conducir entre:',
      en: 'In Colorado, drivers under 18 with a provisional license may not drive between:'
    },
    options: [
      { es: '10 PM y 6 AM', en: '10 PM and 6 AM' },
      { es: 'Medianoche y 5 AM (salvo excepciones)', en: 'Midnight and 5 AM (with exceptions)' },
      { es: '8 PM y 8 AM', en: '8 PM and 8 AM' },
      { es: 'Toda la noche, sin excepción', en: 'Any time at night, no exceptions' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Hay toque de queda entre la medianoche y las 5 AM, salvo para trabajo, escuela, emergencia médica o si va con un padre/tutor.',
      en: 'There is a curfew from midnight to 5 AM, except for work, school, medical emergency or when accompanied by a parent/guardian.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · GDL', en: 'Colorado Driver Handbook · GDL' }
  },
  {
    id: 143, category: 'documents',
    question: {
      es: 'En Colorado, el seguro de auto obligatorio mínimo (cobertura de responsabilidad civil) es de:',
      en: 'Colorado\'s minimum mandatory liability insurance is:'
    },
    options: [
      { es: '$10,000 / $20,000 / $5,000', en: '$10,000 / $20,000 / $5,000' },
      { es: '$25,000 / $50,000 / $15,000', en: '$25,000 / $50,000 / $15,000' },
      { es: '$50,000 / $100,000 / $25,000', en: '$50,000 / $100,000 / $25,000' },
      { es: '$100,000 / $300,000 / $50,000', en: '$100,000 / $300,000 / $50,000' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'La cobertura mínima en Colorado es 25/50/15: $25,000 por lesión por persona, $50,000 por accidente y $15,000 por daños a la propiedad.',
      en: 'Colorado\'s minimum is 25/50/15: $25,000 bodily injury per person, $50,000 per accident and $15,000 property damage.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Seguro', en: 'Colorado Driver Handbook · Insurance' }
  },
  {
    id: 144, category: 'documents',
    question: {
      es: 'Si la policía le pide la licencia de conducir, registro y seguro, usted debe:',
      en: 'If the police ask for your driver license, registration and insurance, you must:'
    },
    options: [
      { es: 'Negar tener documentos', en: 'Deny having documents' },
      { es: 'Mostrarlos cuando le sean solicitados', en: 'Provide them when asked' },
      { es: 'Salir corriendo', en: 'Run away' },
      { es: 'Llamar a un amigo', en: 'Call a friend' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Usted debe llevar y mostrar a la policía cuando se lo soliciten: licencia, registro y prueba de seguro.',
      en: 'You must carry and present, when requested, your license, registration and proof of insurance.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Documentos', en: 'Colorado Driver Handbook · Documents' }
  },
  {
    id: 145, category: 'documents',
    question: {
      es: 'Si su licencia es suspendida, conducir igualmente puede resultar en:',
      en: 'If your license is suspended, driving anyway can result in:'
    },
    options: [
      { es: 'Sólo una advertencia', en: 'Only a warning' },
      { es: 'Cárcel, multas adicionales y prolongación de la suspensión', en: 'Jail, additional fines and extension of the suspension' },
      { es: 'Pérdida del seguro de gastos médicos', en: 'Loss of medical insurance' },
      { es: 'Nada, mientras conduzca con cuidado', en: 'Nothing if you drive carefully' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Conducir con licencia suspendida o revocada es delito en Colorado y resulta en multas, posible cárcel y suspensión adicional.',
      en: 'Driving with a suspended or revoked license is a crime in Colorado and results in fines, possible jail and added suspension time.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Sanciones', en: 'Colorado Driver Handbook · Penalties' }
  },
  {
    id: 146, category: 'documents',
    question: {
      es: 'En Colorado, una licencia regular debe renovarse cada:',
      en: 'In Colorado, a regular driver license must be renewed every:'
    },
    options: [
      { es: '1 año', en: '1 year' },
      { es: '3 años', en: '3 years' },
      { es: '5 años', en: '5 years' },
      { es: 'Sólo cuando cambia de domicilio', en: 'Only when you change address' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'La licencia de conducir estándar de Colorado se renueva cada 5 años; algunas categorías pueden tener vigencia menor.',
      en: 'A standard Colorado driver license is renewed every 5 years; some categories may be shorter.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Licencia', en: 'Colorado Driver Handbook · License' }
  },
  {
    id: 147, category: 'documents',
    question: {
      es: 'Después de un cambio de dirección debe notificar al DMV en un plazo de:',
      en: 'After moving you must notify the DMV within:'
    },
    options: [
      { es: '7 días', en: '7 days' },
      { es: '30 días', en: '30 days' },
      { es: '60 días', en: '60 days' },
      { es: 'No es necesario notificar', en: 'No need to notify' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Por ley estatal, debe notificar el cambio de dirección al DMV dentro de 30 días.',
      en: 'By state law, you must report your change of address to the DMV within 30 days.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Licencia', en: 'Colorado Driver Handbook · License' }
  },

  /* ===== REGLAS GENERALES Y SEGURIDAD ===== */
  {
    id: 148, category: 'general',
    question: {
      es: 'En Colorado, el uso del cinturón de seguridad para el conductor y el pasajero del frente es:',
      en: 'In Colorado, seat belts for the driver and front passenger are:'
    },
    options: [
      { es: 'Opcional', en: 'Optional' },
      { es: 'Obligatorio', en: 'Mandatory' },
      { es: 'Sólo requerido en autopistas', en: 'Required only on highways' },
      { es: 'Sólo requerido de noche', en: 'Required only at night' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'El cinturón es obligatorio para el conductor y los pasajeros del frente. Para menores de 18 es obligatorio en todos los asientos.',
      en: 'Seat belts are mandatory for the driver and front-seat passengers. For those under 18 belts are required in every seat.'
    },
    sourceReference: { es: 'Ley estatal de Colorado · Cinturón', en: 'Colorado seat belt law' }
  },
  {
    id: 149, category: 'general',
    question: {
      es: 'En Colorado, los niños menores de 1 año (o menores de 20 libras) deben viajar:',
      en: 'In Colorado, children under 1 year (or under 20 pounds) must travel:'
    },
    options: [
      { es: 'En el asiento del frente con cinturón', en: 'In the front seat with a seat belt' },
      { es: 'En un asiento infantil orientado hacia atrás, en el asiento trasero', en: 'In a rear-facing child seat in the back' },
      { es: 'Sentados en el regazo de un adulto', en: 'On an adult\'s lap' },
      { es: 'Sin restricción especial', en: 'With no special restraint' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Los bebés menores de 1 año o de 20 libras deben usar asiento infantil orientado hacia atrás en el asiento trasero.',
      en: 'Infants under 1 year or 20 pounds must be in a rear-facing child seat in the back.'
    },
    sourceReference: { es: 'Ley estatal de Colorado · Asientos infantiles', en: 'Colorado child passenger law' }
  },
  {
    id: 150, category: 'general',
    question: {
      es: 'En Colorado, enviar o leer mensajes de texto mientras se conduce es:',
      en: 'In Colorado, texting while driving is:'
    },
    options: [
      { es: 'Permitido', en: 'Allowed' },
      { es: 'Ilegal para todos los conductores', en: 'Illegal for all drivers' },
      { es: 'Sólo permitido en autopistas', en: 'Allowed only on highways' },
      { es: 'Permitido en luces rojas', en: 'Allowed at red lights' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Texto y mensajes (incluyendo email, redes sociales, etc.) están prohibidos mientras se conduce para todos los conductores.',
      en: 'Texting (including email, social media, etc.) is prohibited while driving for all drivers.'
    },
    sourceReference: { es: 'Ley estatal de Colorado · CRS 42-4-239', en: 'Colorado law · CRS 42-4-239' }
  },
  {
    id: 151, category: 'general',
    question: {
      es: 'En Colorado, los conductores menores de 18 años:',
      en: 'In Colorado, drivers under 18:'
    },
    options: [
      { es: 'Pueden usar el celular libremente', en: 'May use a cell phone freely' },
      { es: 'No pueden usar el celular mientras conducen (excepto emergencias)', en: 'May not use a cell phone while driving (except emergencies)' },
      { es: 'Sólo pueden usarlo manos libres', en: 'May only use hands-free' },
      { es: 'Pueden usarlo en luces rojas', en: 'May use it at red lights' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Los conductores menores de 18 años no pueden usar el celular mientras conducen, ni siquiera manos libres, salvo en emergencias.',
      en: 'Drivers under 18 may not use a cell phone while driving, not even hands-free, except in emergencies.'
    },
    sourceReference: { es: 'Ley estatal de Colorado · CRS 42-4-239', en: 'Colorado law · CRS 42-4-239' }
  },
  {
    id: 152, category: 'general',
    question: {
      es: 'Antes de poner el vehículo en marcha, debe:',
      en: 'Before starting your vehicle you should:'
    },
    options: [
      { es: 'Ajustar espejos y asiento, abrocharse el cinturón y revisar señales', en: 'Adjust mirrors and seat, fasten your seat belt and check signals' },
      { es: 'Encender la radio', en: 'Turn on the radio' },
      { es: 'Verificar la batería del teléfono', en: 'Check your phone battery' },
      { es: 'Llamar a un amigo', en: 'Call a friend' }
    ],
    correctAnswer: 0,
    explanation: {
      es: 'Antes de salir, ajuste asiento, espejos y volante, abróchese el cinturón y verifique luces y señales.',
      en: 'Before driving, adjust seat, mirrors and steering wheel, fasten your seat belt and check lights and signals.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Antes de conducir', en: 'Colorado Driver Handbook · Before you drive' }
  },
  {
    id: 153, category: 'general',
    question: {
      es: 'Cuando va a girar, debe indicar al menos:',
      en: 'When you intend to turn, you must signal at least:'
    },
    options: [
      { es: 'Al momento del giro', en: 'At the moment of turning' },
      { es: '100 pies antes en zona urbana', en: '100 feet before in town' },
      { es: 'Después del giro', en: 'After turning' },
      { es: 'Sólo si hay otros conductores cerca', en: 'Only if other drivers are near' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'En zona urbana indique al menos 100 pies antes de girar; en autopistas use al menos 200 pies de anticipación.',
      en: 'In town signal at least 100 feet before turning; on highways use at least 200 feet of advance notice.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Señales', en: 'Colorado Driver Handbook · Signals' }
  },
  {
    id: 154, category: 'general',
    image: 'hand.left',
    question: {
      es: 'La señal manual para "giro a la izquierda" es:',
      en: 'The hand signal for a left turn is:'
    },
    options: [
      { es: 'Brazo recto hacia afuera', en: 'Arm extended straight out' },
      { es: 'Brazo doblado hacia arriba en 90°', en: 'Arm bent up at 90 degrees' },
      { es: 'Brazo doblado hacia abajo en 90°', en: 'Arm bent down at 90 degrees' },
      { es: 'Brazo agitado', en: 'Arm waving' }
    ],
    correctAnswer: 0,
    explanation: {
      es: 'La señal manual para girar a la izquierda es el brazo extendido recto hacia afuera por la ventana.',
      en: 'The hand signal for a left turn is the arm extended straight out the window.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Señales manuales', en: 'Colorado Driver Handbook · Hand signals' }
  },
  {
    id: 155, category: 'general',
    image: 'hand.right',
    question: {
      es: 'La señal manual para "giro a la derecha" es:',
      en: 'The hand signal for a right turn is:'
    },
    options: [
      { es: 'Brazo recto hacia afuera', en: 'Arm extended straight out' },
      { es: 'Brazo doblado hacia arriba en 90°', en: 'Arm bent up at 90 degrees' },
      { es: 'Brazo doblado hacia abajo en 90°', en: 'Arm bent down at 90 degrees' },
      { es: 'Brazo dentro del vehículo', en: 'Arm inside the vehicle' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'La señal manual de giro a la derecha es el brazo izquierdo doblado hacia arriba (codo a 90°).',
      en: 'The hand signal for a right turn is the left arm bent upward (elbow at 90°).'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Señales manuales', en: 'Colorado Driver Handbook · Hand signals' }
  },
  {
    id: 156, category: 'general',
    image: 'hand.stop',
    question: {
      es: 'La señal manual para indicar que va a parar o reducir es:',
      en: 'The hand signal for stopping or slowing is:'
    },
    options: [
      { es: 'Brazo izquierdo recto hacia afuera', en: 'Left arm straight out' },
      { es: 'Brazo izquierdo doblado hacia abajo en 90°', en: 'Left arm bent downward at 90°' },
      { es: 'Brazo levantado en puño', en: 'Arm raised in a fist' },
      { es: 'Brazo agitado', en: 'Arm waving' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Para indicar parada o reducción, el brazo izquierdo se baja con la mano apuntando hacia abajo (codo a 90°).',
      en: 'For stopping or slowing, the left arm is bent downward with the hand pointing down (elbow at 90°).'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Señales manuales', en: 'Colorado Driver Handbook · Hand signals' }
  },
  {
    id: 157, category: 'general',
    question: {
      es: 'La fatiga al conducir es peligrosa porque:',
      en: 'Driver fatigue is dangerous because:'
    },
    options: [
      { es: 'Aumenta la velocidad', en: 'It increases speed' },
      { es: 'Disminuye la atención y el tiempo de reacción; puede equipararse al alcohol', en: 'It decreases attention and reaction time; can be similar to alcohol' },
      { es: 'Mejora la coordinación', en: 'It improves coordination' },
      { es: 'No afecta', en: 'It does not affect driving' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Estudios muestran que conducir con sueño puede ser tan peligroso como conducir con alcohol; reduce reacción, juicio y atención.',
      en: 'Studies show drowsy driving can be as dangerous as drinking and driving; it reduces reaction time, judgment and attention.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Fatiga', en: 'Colorado Driver Handbook · Fatigue' }
  },
  {
    id: 158, category: 'general',
    question: {
      es: 'El claxon (bocina) debe usarse:',
      en: 'The horn should be used:'
    },
    options: [
      { es: 'Para expresar enojo', en: 'To express anger' },
      { es: 'Para alertar a otros conductores o peatones de un peligro', en: 'To warn other drivers or pedestrians of danger' },
      { es: 'Cada vez que cambia de carril', en: 'Every time you change lanes' },
      { es: 'Para saludar a amigos', en: 'To greet friends' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'El claxon es un dispositivo de seguridad para advertir peligros; no es un instrumento para expresar frustración.',
      en: 'The horn is a safety device to warn of hazards; it is not an instrument for venting frustration.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Claxon', en: 'Colorado Driver Handbook · Horn' }
  },
  {
    id: 159, category: 'general',
    question: {
      es: 'Si percibe que está enojado o muy estresado al volante, debería:',
      en: 'If you feel angry or very stressed while driving you should:'
    },
    options: [
      { es: 'Conducir más rápido para llegar pronto', en: 'Drive faster to arrive sooner' },
      { es: 'Hacer una pausa segura o esperar a calmarse antes de conducir', en: 'Take a safe break or wait until you calm down before driving' },
      { es: 'Discutir con otros conductores', en: 'Argue with other drivers' },
      { es: 'Tocar el claxon repetidamente', en: 'Honk repeatedly' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'El enojo (road rage) deteriora el juicio. Salga de la situación, respire, llame a alguien o no conduzca hasta calmarse.',
      en: 'Road rage impairs judgment. Step away, breathe, call someone or wait to drive until you calm down.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Conducta del conductor', en: 'Colorado Driver Handbook · Driver behavior' }
  },

  /* ===== ROTONDAS Y GIROS ===== */
  {
    id: 160, category: 'roundabout',
    question: {
      es: 'Al entrar a una rotonda, debe:',
      en: 'When entering a roundabout, you must:'
    },
    options: [
      { es: 'Detenerse siempre', en: 'Always stop' },
      { es: 'Ceder el paso a los vehículos que ya están en la rotonda', en: 'Yield to vehicles already in the roundabout' },
      { es: 'Acelerar para entrar antes', en: 'Speed up to enter first' },
      { es: 'Tocar el claxon', en: 'Honk' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'En una rotonda, el tráfico que ya circula tiene prioridad. Ceda el paso y entre cuando haya un espacio seguro. En EE. UU. se circula en sentido contrario al reloj.',
      en: 'In a roundabout, traffic already circulating has the right of way. Yield and enter when there is a safe gap. In the U.S. you travel counter-clockwise.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Rotondas', en: 'Colorado Driver Handbook · Roundabouts' }
  },
  {
    id: 161, category: 'roundabout',
    question: {
      es: 'Dentro de una rotonda, ¿qué debe hacer si un vehículo de emergencia se aproxima con sirena?',
      en: 'Inside a roundabout, what should you do if an emergency vehicle approaches with siren?'
    },
    options: [
      { es: 'Detenerse de inmediato dentro de la rotonda', en: 'Stop immediately inside the roundabout' },
      { es: 'Salir de la rotonda y luego orillarse a la derecha', en: 'Exit the roundabout and then pull to the right' },
      { es: 'Ir en sentido contrario', en: 'Go the wrong way' },
      { es: 'Tocar el claxon', en: 'Honk' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'No se detenga dentro de la rotonda. Continúe hasta salir y entonces oríllese para ceder el paso.',
      en: 'Do not stop inside the roundabout. Continue until you exit and then pull over to yield.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Rotondas', en: 'Colorado Driver Handbook · Roundabouts' }
  },
  {
    id: 162, category: 'roundabout',
    question: {
      es: 'Para girar a la derecha desde un carril correcto:',
      en: 'To make a right turn from the proper lane:'
    },
    options: [
      { es: 'Use el carril derecho y ceda el paso a peatones', en: 'Use the right lane and yield to pedestrians' },
      { es: 'Use el carril izquierdo', en: 'Use the left lane' },
      { es: 'Cruce dos carriles a la vez', en: 'Cross two lanes at once' },
      { es: 'Detenga el tráfico opuesto', en: 'Stop opposing traffic' }
    ],
    correctAnswer: 0,
    explanation: {
      es: 'Acérquese desde el carril derecho, indique con anticipación, ceda a peatones y haga un giro cerrado a la derecha.',
      en: 'Approach from the right lane, signal early, yield to pedestrians and make a tight right turn.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Giros', en: 'Colorado Driver Handbook · Turns' }
  },
  {
    id: 163, category: 'roundabout',
    question: {
      es: 'Para girar a la izquierda en una intersección de dos sentidos:',
      en: 'To make a left turn at a two-way intersection:'
    },
    options: [
      { es: 'Use el carril izquierdo y gire hacia el carril izquierdo más cercano de la calle a la que entra', en: 'Use the left lane and turn into the nearest left lane of the street you enter' },
      { es: 'Use el carril derecho', en: 'Use the right lane' },
      { es: 'No use direccional', en: 'Skip the signal' },
      { es: 'Gire desde cualquier carril', en: 'Turn from any lane' }
    ],
    correctAnswer: 0,
    explanation: {
      es: 'Acérquese desde el carril izquierdo (o el destinado para giro), señale y entre al carril izquierdo más cercano de la vía nueva.',
      en: 'Approach from the left (or designated turn) lane, signal and turn into the closest left lane of the new road.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Giros', en: 'Colorado Driver Handbook · Turns' }
  },
  {
    id: 164, category: 'roundabout',
    question: {
      es: 'Una vuelta en U (U-turn):',
      en: 'A U-turn:'
    },
    options: [
      { es: 'Se permite en cualquier lugar', en: 'Is allowed anywhere' },
      { es: 'Está prohibida donde haya señalamiento, en curvas, cimas o cuando reduzca la visibilidad', en: 'Is prohibited where signs forbid it, on curves, hilltops or where visibility is poor' },
      { es: 'Sólo se hace en autopistas', en: 'Is only done on highways' },
      { es: 'No requiere señalización', en: 'Requires no signal' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Las vueltas en U están prohibidas donde un letrero lo indique, en curvas, cimas de colina o cuando no haya 200 pies de visibilidad en ambas direcciones.',
      en: 'U-turns are forbidden where signs prohibit them, on curves, hilltops, or where visibility is less than 200 feet in each direction.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Vueltas en U', en: 'Colorado Driver Handbook · U-turns' }
  },

  /* ===== PREGUNTAS ADICIONALES MIXTAS ===== */
  {
    id: 165, category: 'general',
    question: {
      es: 'En Colorado, los motociclistas menores de 18 años deben usar:',
      en: 'In Colorado, motorcyclists under 18 must wear:'
    },
    options: [
      { es: 'Sólo gafas', en: 'Only goggles' },
      { es: 'Casco aprobado por DOT', en: 'A DOT-approved helmet' },
      { es: 'Nada en particular', en: 'No specific gear' },
      { es: 'Sólo guantes', en: 'Only gloves' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'En Colorado, los conductores y pasajeros de motocicleta menores de 18 años deben usar casco aprobado por el DOT.',
      en: 'In Colorado, motorcycle operators and passengers under 18 must wear a DOT-approved helmet.'
    },
    sourceReference: { es: 'Ley estatal de Colorado · Motocicletas', en: 'Colorado motorcycle law' }
  },
  {
    id: 166, category: 'general',
    question: {
      es: 'Si una luz roja no cambia y usted ha esperado en su luz roja varias rondas, una bicicleta o motocicleta puede:',
      en: 'If a traffic light fails to detect your vehicle (especially a bike or motorcycle), Colorado allows you to:'
    },
    options: [
      { es: 'Pasarse el rojo sin precaución', en: 'Run the red without caution' },
      { es: 'Tratarlo como una señal de PARE después de esperar un ciclo razonable y proceder cuando sea seguro', en: 'Treat it as a STOP after waiting a reasonable cycle and proceed when safe' },
      { es: 'Esperar para siempre', en: 'Wait forever' },
      { es: 'Llamar al 911', en: 'Call 911' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'En Colorado, si un semáforo no detecta a su vehículo (motocicleta, bicicleta), puede tratarlo como un PARE después de un ciclo razonable y cruzar con seguridad.',
      en: 'In Colorado, if a signal does not detect your motorcycle or bike, you may treat it as a STOP after a reasonable wait and proceed safely.'
    },
    sourceReference: { es: 'Ley estatal de Colorado · CRS 42-4-612', en: 'Colorado law · CRS 42-4-612' }
  },
  {
    id: 167, category: 'speed',
    question: {
      es: 'El límite de velocidad por defecto en un callejón en Colorado es:',
      en: 'The default speed limit in an alley in Colorado is:'
    },
    options: [
      { es: '5 mph', en: '5 mph' },
      { es: '15 mph', en: '15 mph' },
      { es: '20 mph', en: '20 mph' },
      { es: '25 mph', en: '25 mph' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'En los callejones el límite por defecto es 15 mph, salvo que esté señalado otra cosa.',
      en: 'In alleys the default limit is 15 mph unless otherwise posted.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Límites de velocidad', en: 'Colorado Driver Handbook · Speed limits' }
  },
  {
    id: 168, category: 'rightOfWay',
    image: 'sign.railroad',
    question: {
      es: 'Cuando llega a un cruce ferroviario con barreras bajas y luces parpadeando:',
      en: 'When you reach a railroad crossing with the gates down and lights flashing:'
    },
    options: [
      { es: 'Cruce rápido', en: 'Cross quickly' },
      { es: 'Deténgase y no cruce hasta que las barreras suban y las luces se apaguen', en: 'Stop and do not cross until gates rise and lights stop flashing' },
      { es: 'Mire ambos lados y siga', en: 'Look both ways and continue' },
      { es: 'Tocar el claxon', en: 'Honk' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Nunca cruce un paso a nivel con luces o barreras activas. Espere a que las luces se apaguen y las barreras suban totalmente.',
      en: 'Never cross a railroad crossing with active lights or gates. Wait until the lights stop flashing and gates rise fully.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Cruces ferroviarios', en: 'Colorado Driver Handbook · Railroad crossings' }
  },
  {
    id: 169, category: 'signs',
    image: 'sign.school',
    question: {
      es: 'Una señal con la imagen de un camión escolar y el texto "SCHOOL BUS STOP AHEAD" indica:',
      en: 'A sign showing a school bus and the text "SCHOOL BUS STOP AHEAD" indicates:'
    },
    options: [
      { es: 'Carril exclusivo de buses', en: 'Bus-only lane' },
      { es: 'Adelante hay una parada frecuente de bus escolar; esté listo para detenerse', en: 'There is a frequent school bus stop ahead; be ready to stop' },
      { es: 'Prohibido pasar buses', en: 'No passing buses' },
      { es: 'Garaje de buses', en: 'Bus garage' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Es una señal de advertencia: hay una parada de bus escolar más adelante; reduzca la velocidad y prepárese para detenerse.',
      en: 'It is a warning sign: a school bus stop is ahead; slow down and be ready to stop.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Señales escolares', en: 'Colorado Driver Handbook · School signs' }
  },
  {
    id: 170, category: 'general',
    question: {
      es: 'En Colorado, un conductor adulto puede ser sancionado por no usar el cinturón con:',
      en: 'In Colorado, an adult driver can be cited for not wearing a seat belt as:'
    },
    options: [
      { es: 'Infracción primaria (la policía puede detenerlo sólo por eso)', en: 'A primary offense (police can stop you just for that)' },
      { es: 'Infracción secundaria (sólo si lo detienen por otra causa)', en: 'A secondary offense (only if stopped for another reason)' },
      { es: 'No es sancionable para adultos', en: 'Not punishable for adults' },
      { es: 'Sólo en autopistas', en: 'Only on highways' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'En Colorado, para adultos (18+) es infracción secundaria: lo pueden multar sólo si lo detienen por otra causa. Para menores de 18 es primaria.',
      en: 'In Colorado, for adults (18+) it is a secondary offense: you can be ticketed only if stopped for another reason. For minors under 18 it is primary.'
    },
    sourceReference: { es: 'Ley estatal de Colorado · Cinturón', en: 'Colorado seat belt law' }
  },
  {
    id: 171, category: 'winter',
    question: {
      es: 'En Colorado, durante el "Código 18" (Chain Law) en autopistas como I-70 en montaña, los vehículos de pasajeros:',
      en: 'In Colorado, during a "Code 18" (Chain Law) on mountain highways like I-70, passenger vehicles:'
    },
    options: [
      { es: 'No tienen restricciones', en: 'Have no restrictions' },
      { es: 'Deben tener cadenas o un dispositivo de tracción alterno aprobado', en: 'Must have chains or an approved alternative traction device' },
      { es: 'Sólo necesitan llantas de verano', en: 'Only need summer tires' },
      { es: 'Pueden circular sin nada', en: 'Can drive with anything' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Durante el Código 18, todos los vehículos deben llevar cadenas o un dispositivo de tracción alternativo (Auto Sock, etc.). Es la restricción más estricta.',
      en: 'During Code 18, all vehicles must have chains or an approved alternative traction device (Auto Sock, etc.). This is the strictest restriction.'
    },
    sourceReference: { es: 'CDOT · Chain Law (Código 18)', en: 'CDOT · Chain Law (Code 18)' }
  },
  {
    id: 172, category: 'documents',
    question: {
      es: 'Si va a transportar mercancía peligrosa o más de 16 pasajeros, normalmente requiere:',
      en: 'If you transport hazardous materials or more than 16 passengers, you usually need:'
    },
    options: [
      { es: 'Licencia normal', en: 'A regular license' },
      { es: 'Licencia comercial (CDL)', en: 'A Commercial Driver License (CDL)' },
      { es: 'Permiso temporal', en: 'A temporary permit' },
      { es: 'Nada especial', en: 'Nothing special' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Transportar más de 16 pasajeros, mercancías peligrosas o vehículos pesados requiere CDL con el endoso correspondiente.',
      en: 'Transporting more than 16 passengers, hazardous materials or heavy vehicles requires a CDL with the proper endorsement.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · CDL', en: 'Colorado Driver Handbook · CDL' }
  },
  {
    id: 173, category: 'rightOfWay',
    question: {
      es: 'En una intersección con cuatro señales de PARE, ¿quién pasa primero?',
      en: 'At an intersection with four-way STOP signs, who goes first?'
    },
    options: [
      { es: 'Quien tenga el auto más nuevo', en: 'Whoever has the newest car' },
      { es: 'El primero que llega y se detiene', en: 'The first vehicle to arrive and stop' },
      { es: 'El más rápido', en: 'The fastest one' },
      { es: 'El más grande', en: 'The largest vehicle' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'En un PARE de cuatro vías pasa primero quien llegó y se detuvo primero. Si llegan al mismo tiempo, cede el de la izquierda.',
      en: 'At a four-way stop, the vehicle that arrived and stopped first goes first. If simultaneous, the left vehicle yields.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Derecho de paso', en: 'Colorado Driver Handbook · Right of way' }
  },
  {
    id: 174, category: 'lights',
    question: {
      es: 'En Colorado, los vehículos deben tener luces traseras y de freno funcionando:',
      en: 'In Colorado, vehicles must have working tail and brake lights:'
    },
    options: [
      { es: 'Sólo de noche', en: 'Only at night' },
      { es: 'En todo momento (la circulación con luces defectuosas es ilegal)', en: 'At all times (driving with broken lights is illegal)' },
      { es: 'Sólo en invierno', en: 'Only in winter' },
      { es: 'Es opcional', en: 'It is optional' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Las luces traseras, de freno, direccionales y los faros deben estar en buen estado siempre. Conducir con luces dañadas es una infracción.',
      en: 'Tail, brake and turn signal lights as well as headlights must always be in good working order. Driving with broken lights is a violation.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Equipamiento', en: 'Colorado Driver Handbook · Equipment' }
  },
  {
    id: 175, category: 'general',
    question: {
      es: 'Conducir con audífonos en ambos oídos:',
      en: 'Driving with headphones in both ears:'
    },
    options: [
      { es: 'Es legal en cualquier momento', en: 'Is legal at all times' },
      { es: 'Es peligroso e ilegal en muchos casos porque bloquea sonidos importantes', en: 'Is dangerous and illegal in many cases because it blocks important sounds' },
      { es: 'Sólo es ilegal en autopistas', en: 'Is only illegal on highways' },
      { es: 'Sólo aplica a motocicletas', en: 'Only applies to motorcycles' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Bloquear ambos oídos impide escuchar sirenas, claxons y otros sonidos. En Colorado se desaconseja y puede ser infracción.',
      en: 'Blocking both ears prevents you from hearing sirens, horns and other sounds. In Colorado it is discouraged and may be a violation.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Distracciones', en: 'Colorado Driver Handbook · Distractions' }
  },
  {
    id: 176, category: 'emergency',
    question: {
      es: 'Después de un accidente menor sin lesiones, debe:',
      en: 'After a minor crash with no injuries you should:'
    },
    options: [
      { es: 'Dejar el auto en medio del tráfico', en: 'Leave the car in the middle of traffic' },
      { es: 'Mover los vehículos al acotamiento si es posible, intercambiar información y llamar a la policía si corresponde', en: 'Move vehicles to the shoulder if possible, exchange information and call police if required' },
      { es: 'Discutir con el otro conductor', en: 'Argue with the other driver' },
      { es: 'Ignorar el accidente', en: 'Ignore the crash' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Si los autos son operables y no hay lesiones, llévelos al acotamiento, encienda luces de emergencia, intercambie información (licencia, seguro, registro) y reporte si la ley lo exige.',
      en: 'If cars are drivable and no one is hurt, move to the shoulder, turn on hazard lights, exchange information (license, insurance, registration) and report if required.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Accidentes', en: 'Colorado Driver Handbook · Crashes' }
  },
  {
    id: 177, category: 'general',
    question: {
      es: 'Cuando una persona usa una silla de ruedas o algún dispositivo de movilidad, en un cruce, usted debe:',
      en: 'When a person uses a wheelchair or mobility device at a crossing, you must:'
    },
    options: [
      { es: 'No tener consideración especial', en: 'Show no special consideration' },
      { es: 'Cederle el paso como a cualquier peatón con vulnerabilidad adicional', en: 'Yield as to any pedestrian with extra care' },
      { es: 'Tocar el claxon', en: 'Honk' },
      { es: 'Acelerar', en: 'Speed up' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Las personas con sillas de ruedas, andadores u otros dispositivos son peatones; ceda el paso y dé tiempo extra para cruzar.',
      en: 'People using wheelchairs, walkers or other mobility devices are pedestrians; yield and allow extra time to cross.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Peatones', en: 'Colorado Driver Handbook · Pedestrians' }
  },
  {
    id: 178, category: 'signs',
    image: 'sign.merge',
    question: {
      es: 'Una señal de "MERGE" / "INCORPORACIÓN" significa:',
      en: 'A "MERGE" sign means:'
    },
    options: [
      { es: 'Carril termina, debe ceder el paso e incorporarse cuando sea seguro', en: 'Lanes are joining; yield and merge when safe' },
      { es: 'Carril cerrado por construcción', en: 'Lane closed for construction' },
      { es: 'Salida obligatoria', en: 'Mandatory exit' },
      { es: 'Carril compartido con bicicletas', en: 'Lane shared with bicycles' }
    ],
    correctAnswer: 0,
    explanation: {
      es: 'La señal advierte que dos carriles se unen; ceda el paso, ajuste velocidad e incorpórese de forma segura.',
      en: 'The sign warns that two lanes will merge; yield, adjust speed and merge safely.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Señales de advertencia', en: 'Colorado Driver Handbook · Warning signs' }
  },
  {
    id: 179, category: 'highway',
    question: {
      es: 'Si una "Variable Message Sign" (cartel electrónico) muestra una advertencia o cierre, usted debe:',
      en: 'If a variable message sign shows a warning or closure, you must:'
    },
    options: [
      { es: 'Ignorarla', en: 'Ignore it' },
      { es: 'Obedecerla; tiene la misma fuerza que un letrero normal', en: 'Obey it; it has the same authority as a regular sign' },
      { es: 'Sólo seguir el GPS', en: 'Only follow GPS' },
      { es: 'Esperar instrucciones por radio', en: 'Wait for radio instructions' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Los letreros electrónicos tienen la misma fuerza legal que las señales fijas. Obedezca cierres, desvíos y alertas.',
      en: 'Variable message signs carry the same legal weight as fixed signs. Obey closures, detours and alerts.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Señales', en: 'Colorado Driver Handbook · Signs' }
  },
  {
    id: 180, category: 'general',
    question: {
      es: 'En Colorado, un conductor adulto sin licencia válida puede:',
      en: 'In Colorado, an adult driver without a valid license may:'
    },
    options: [
      { es: 'Manejar libremente si lo acompaña otro adulto', en: 'Drive freely with another adult' },
      { es: 'Ser multado y su vehículo retenido', en: 'Be ticketed and their vehicle impounded' },
      { es: 'Conducir sólo de día', en: 'Drive only during the day' },
      { es: 'No tener consecuencias', en: 'Face no consequences' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Conducir sin licencia válida es ilegal: puede resultar en multa, retención del vehículo y dificultades para obtener una licencia futura.',
      en: 'Driving without a valid license is illegal: it can lead to a fine, vehicle impound and future trouble getting licensed.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Licencia', en: 'Colorado Driver Handbook · License' }
  },
  {
    id: 181, category: 'alcohol',
    question: {
      es: 'Un policía puede pedir una prueba de campo (caminar en línea, etc.) si:',
      en: 'A police officer may request field sobriety tests if:'
    },
    options: [
      { es: 'Únicamente con orden judicial', en: 'Only with a court order' },
      { es: 'Tiene sospecha razonable de que usted conduce bajo la influencia', en: 'They reasonably suspect you are driving impaired' },
      { es: 'Sólo después de un accidente grave', en: 'Only after a serious crash' },
      { es: 'Sólo si usted lo solicita', en: 'Only if you request it' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Si un oficial tiene sospecha razonable, puede solicitar pruebas de campo (FSTs). Negarse no impide su detención si hay otras causas probables.',
      en: 'If an officer has reasonable suspicion, they may request Field Sobriety Tests (FSTs). Refusing does not prevent arrest with other probable cause.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · DUI', en: 'Colorado Driver Handbook · DUI' }
  },
  {
    id: 182, category: 'rightOfWay',
    question: {
      es: 'Cuando otro conductor hace una maniobra peligrosa o agresiva, la mejor respuesta es:',
      en: 'When another driver makes an aggressive or dangerous maneuver, the best response is:'
    },
    options: [
      { es: 'Vengarse de inmediato', en: 'Retaliate immediately' },
      { es: 'Evitar el contacto visual, dar espacio y reportar al 911 si es necesario', en: 'Avoid eye contact, give space and call 911 if needed' },
      { es: 'Bloquearle el camino', en: 'Block their path' },
      { es: 'Tocar el claxon repetidamente', en: 'Honk repeatedly' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'No confronte ni reta. Mantenga distancia segura, evite mirar al conductor y reporte el comportamiento agresivo a las autoridades.',
      en: 'Do not confront or challenge. Keep safe distance, avoid eye contact and report aggressive behavior to authorities.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Conducción agresiva', en: 'Colorado Driver Handbook · Aggressive driving' }
  },
  {
    id: 183, category: 'general',
    question: {
      es: 'En Colorado, los conductores adultos pueden usar un teléfono celular para hablar mientras conducen:',
      en: 'In Colorado, adult drivers may talk on a cellphone while driving:'
    },
    options: [
      { es: 'Nunca', en: 'Never' },
      { es: 'Sí, pero se desaconseja; texto y mensajes están prohibidos', en: 'Yes, but it is discouraged; texting and messaging are prohibited' },
      { es: 'Sólo si la conversación dura menos de 1 minuto', en: 'Only if the call lasts less than 1 minute' },
      { es: 'Sólo en luces rojas', en: 'Only at red lights' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Los adultos pueden hablar al teléfono mientras conducen, pero está prohibido enviar mensajes. Se recomienda manos libres.',
      en: 'Adults may talk on a cellphone while driving, but texting is prohibited. Hands-free use is recommended.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Distracciones', en: 'Colorado Driver Handbook · Distractions' }
  },
  {
    id: 184, category: 'highway',
    question: {
      es: 'En las "express lanes" de Colorado (carriles exprés con peaje), entrar y salir:',
      en: 'On Colorado\'s express toll lanes, entering and exiting:'
    },
    options: [
      { es: 'Puede hacerse cruzando líneas dobles blancas en cualquier punto', en: 'Can be done by crossing double white lines at any point' },
      { es: 'Sólo se permite donde la línea es punteada', en: 'Is only allowed where the line is broken' },
      { es: 'No requiere usar la direccional', en: 'Does not require signaling' },
      { es: 'Está prohibido', en: 'Is forbidden' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Cruzar líneas blancas sólidas o dobles para entrar/salir del carril exprés está prohibido y se sanciona. Sólo se permite donde la línea es discontinua.',
      en: 'Crossing solid or double white lines to enter/exit an express lane is forbidden and ticketable. Only enter/exit where the line is broken.'
    },
    sourceReference: { es: 'CDOT · Carriles Express', en: 'CDOT · Express toll lanes' }
  },
  {
    id: 185, category: 'pedestrians',
    question: {
      es: 'En zonas con tráfico de ciclistas, antes de girar a la derecha sobre un carril de bicicletas:',
      en: 'In areas with bicycle traffic, before turning right across a bike lane:'
    },
    options: [
      { es: 'Cruce el carril sin mirar', en: 'Cross the lane without looking' },
      { es: 'Mire por el espejo y por encima del hombro derecho para detectar ciclistas', en: 'Check your mirror and look over your right shoulder for cyclists' },
      { es: 'Acelere para pasar primero', en: 'Speed up to go first' },
      { es: 'Toque el claxon', en: 'Honk' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Antes de cruzar un carril de bicicletas para girar, verifique el punto ciego y ceda a los ciclistas que vengan por la derecha.',
      en: 'Before crossing a bike lane to turn, check the blind spot and yield to cyclists coming from the right.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Compartir el camino', en: 'Colorado Driver Handbook · Sharing the road' }
  },
  {
    id: 186, category: 'following',
    question: {
      es: 'Detrás de una motocicleta, su distancia de seguimiento ideal es:',
      en: 'Behind a motorcycle, your ideal following distance is:'
    },
    options: [
      { es: 'Mayor que detrás de un auto: al menos 4 segundos', en: 'Greater than behind a car: at least 4 seconds' },
      { es: 'Menor porque la moto frena más rápido', en: 'Shorter because a motorcycle stops faster' },
      { es: 'No hace falta distancia', en: 'No distance needed' },
      { es: 'Pegado a su rueda', en: 'Right on their wheel' }
    ],
    correctAnswer: 0,
    explanation: {
      es: 'Aumente la distancia: las motos frenan más rápido que un auto y son más vulnerables. Use al menos 4 segundos.',
      en: 'Increase the distance: motorcycles can stop faster and are more vulnerable. Use at least a 4-second gap.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Motocicletas', en: 'Colorado Driver Handbook · Motorcycles' }
  },
  {
    id: 187, category: 'general',
    question: {
      es: 'Las luces direccionales (intermitentes de giro) deben:',
      en: 'Turn signals must:'
    },
    options: [
      { es: 'Usarse sólo en autopistas', en: 'Be used only on highways' },
      { es: 'Usarse antes de cada giro, cambio de carril o salida', en: 'Be used before every turn, lane change or exit' },
      { es: 'Usarse sólo si hay tráfico cercano', en: 'Be used only when traffic is near' },
      { es: 'Ser opcionales', en: 'Be optional' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Siempre debe señalizar antes de girar, cambiar de carril o tomar una salida, aun si parece no haber nadie. Es ley y costumbre defensiva.',
      en: 'Always signal before turning, changing lanes or exiting—even if no one seems to be there. It is the law and a defensive habit.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Señales', en: 'Colorado Driver Handbook · Signals' }
  },
  {
    id: 188, category: 'signals',
    image: 'lane.twoWayLeft',
    question: {
      es: 'Un carril central de tres flechas (carril de dos sentidos para giro a la izquierda) sirve para:',
      en: 'A center lane marked with arrows from both directions (two-way left-turn lane) is used to:'
    },
    options: [
      { es: 'Rebasar vehículos lentos', en: 'Pass slow vehicles' },
      { es: 'Sólo girar a la izquierda; no para circular ni rebasar', en: 'Only make left turns; not for driving or passing' },
      { es: 'Carril exclusivo para motocicletas', en: 'Motorcycle-only lane' },
      { es: 'Estacionar', en: 'Park' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'El carril central de doble sentido es exclusivo para girar a la izquierda. No se circula por él más de lo necesario.',
      en: 'A two-way left-turn lane is exclusively for left turns. Do not drive in it longer than needed.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Marcas viales', en: 'Colorado Driver Handbook · Pavement markings' }
  },
  {
    id: 189, category: 'parking',
    question: {
      es: 'Dejar un menor solo dentro del vehículo con el motor encendido:',
      en: 'Leaving a minor alone in a running vehicle:'
    },
    options: [
      { es: 'Es legal si es por poco tiempo', en: 'Is legal if brief' },
      { es: 'Es peligroso y, en Colorado, puede constituir negligencia', en: 'Is dangerous and in Colorado can be considered neglect' },
      { es: 'Es recomendable para mantener al niño cómodo', en: 'Is recommended to keep the child comfortable' },
      { es: 'No tiene consecuencias', en: 'Has no consequences' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Es peligroso por riesgo de calor, frío, robo o accidente. En Colorado puede acarrear cargos por negligencia infantil.',
      en: 'It is dangerous due to heat, cold, theft or crash risk. In Colorado it can result in child neglect charges.'
    },
    sourceReference: { es: 'Ley estatal de Colorado · Seguridad infantil', en: 'Colorado child safety law' }
  },
  {
    id: 190, category: 'rightOfWay',
    question: {
      es: 'Si un autobús de transporte público está saliendo de una parada con direccional encendida, usted debe:',
      en: 'If a public transit bus is leaving a stop with its turn signal on, you must:'
    },
    options: [
      { es: 'Acelerar para rebasar', en: 'Speed up to pass' },
      { es: 'Cederle el paso siempre que sea seguro', en: 'Yield to it when safe' },
      { es: 'Tocar el claxon', en: 'Honk' },
      { es: 'Ignorarlo', en: 'Ignore it' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'En Colorado, los buses de transporte público que salen de una parada con direccional tienen prioridad. Cédales el paso cuando sea seguro.',
      en: 'In Colorado, public transit buses leaving a stop with their signal on have right of way. Yield when it is safe to do so.'
    },
    sourceReference: { es: 'Ley estatal de Colorado · CRS 42-4-707', en: 'Colorado law · CRS 42-4-707' }
  }

];

window.QUESTION_CATEGORIES = [
  'signs', 'signals', 'rightOfWay', 'speed', 'following',
  'alcohol', 'pedestrians', 'schoolBus', 'winter', 'highway',
  'parking', 'lights', 'passing', 'emergency', 'documents',
  'general', 'roundabout'
];
