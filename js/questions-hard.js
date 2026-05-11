/* ============================================================================
   Banco de preguntas — MODO DIFÍCIL
   100 preguntas con números exactos, leyes específicas (CRS) y
   escenarios hipotéticos. Mismo formato que el banco normal.
   Pensadas para una práctica más exigente que el examen real promedio,
   pero todas dentro del marco del Manual del Conductor de Colorado y
   las leyes de tránsito de Colorado.
   ============================================================================ */

window.QUESTIONS_HARD = [

  /* ===== DISTANCIAS Y NÚMEROS EXACTOS ===== */
  {
    id: 1001, category: 'parking',
    question: {
      es: 'En Colorado está prohibido estacionar dentro de cuántos pies de la entrada de una estación de bomberos en el lado opuesto de la calle:',
      en: 'In Colorado, you may not park within how many feet of a fire-station driveway entrance on the opposite side of the street:'
    },
    options: [
      { es: '20 pies', en: '20 feet' },
      { es: '50 pies', en: '50 feet' },
      { es: '75 pies', en: '75 feet' },
      { es: '100 pies', en: '100 feet' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'CRS 42-4-1204 prohíbe estacionar dentro de 20 pies de una estación de bomberos y dentro de 75 pies de la entrada del lado opuesto cuando está señalizado.',
      en: 'CRS 42-4-1204 forbids parking within 20 feet of a fire station and within 75 feet of the entrance on the opposite side when signed.'
    },
    sourceReference: { es: 'CRS 42-4-1204(g)', en: 'CRS 42-4-1204(g)' }
  },
  {
    id: 1002, category: 'parking',
    question: {
      es: 'Está prohibido estacionar dentro de cuántos pies del extremo más lejano del cruce peatonal en una intersección:',
      en: 'You may not park within how many feet of the far side of a crosswalk at an intersection:'
    },
    options: [
      { es: '10 pies', en: '10 feet' },
      { es: '15 pies', en: '15 feet' },
      { es: '20 pies', en: '20 feet' },
      { es: '30 pies', en: '30 feet' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'En Colorado no puede estacionarse dentro de 20 pies del cruce peatonal en una intersección. Bloquear el cruce pone en peligro a los peatones.',
      en: 'In Colorado you may not park within 20 feet of a crosswalk at an intersection. Blocking it endangers pedestrians.'
    },
    sourceReference: { es: 'CRS 42-4-1204(c)', en: 'CRS 42-4-1204(c)' }
  },
  {
    id: 1003, category: 'lights',
    question: {
      es: 'En Colorado, los faros bajos deben iluminar la vía al menos a qué distancia:',
      en: 'In Colorado, low-beam headlights must illuminate the road at least how far:'
    },
    options: [
      { es: '100 pies', en: '100 feet' },
      { es: '200 pies', en: '200 feet' },
      { es: '350 pies', en: '350 feet' },
      { es: '500 pies', en: '500 feet' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Las luces bajas deben permitir ver a una persona o vehículo a por lo menos 200 pies. Las altas deben alcanzar 350 pies.',
      en: 'Low beams must reveal a person or vehicle at no less than 200 feet. High beams must reach 350 feet.'
    },
    sourceReference: { es: 'CRS 42-4-217', en: 'CRS 42-4-217' }
  },
  {
    id: 1004, category: 'documents',
    question: {
      es: 'La cobertura mínima de responsabilidad civil por daños a la propiedad en Colorado es:',
      en: 'Colorado\'s minimum liability coverage for property damage is:'
    },
    options: [
      { es: '$10,000', en: '$10,000' },
      { es: '$15,000', en: '$15,000' },
      { es: '$25,000', en: '$25,000' },
      { es: '$50,000', en: '$50,000' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'La cobertura mínima es 25/50/15: $25,000 lesión por persona, $50,000 por accidente y $15,000 por daños a la propiedad.',
      en: 'Minimum coverage is 25/50/15: $25,000 per-person bodily injury, $50,000 per accident and $15,000 property damage.'
    },
    sourceReference: { es: 'CRS 10-4-619', en: 'CRS 10-4-619' }
  },
  {
    id: 1005, category: 'winter',
    question: {
      es: 'Bajo la Traction Law (Código 15) de Colorado, la profundidad mínima del dibujo de la llanta es:',
      en: 'Under Colorado\'s Traction Law (Code 15), the minimum tire tread depth is:'
    },
    options: [
      { es: '1/16"', en: '1/16"' },
      { es: '1/8"', en: '1/8"' },
      { es: '3/16"', en: '3/16"' },
      { es: '1/4"', en: '1/4"' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'CDOT exige al menos 3/16" (4.8 mm) de dibujo, llantas M+S o 3PMSF, AWD/4WD o cadenas durante el Código 15.',
      en: 'CDOT requires at least 3/16" (4.8 mm) tread, M+S or 3PMSF tires, AWD/4WD or chains during Code 15.'
    },
    sourceReference: { es: 'CDOT · Traction Law', en: 'CDOT · Traction Law' }
  },
  {
    id: 1006, category: 'parking',
    question: {
      es: 'Está prohibido estacionar a menos de cuántos pies de una rampa de acceso para sillas de ruedas:',
      en: 'You may not park within how many feet of a curb ramp for wheelchairs:'
    },
    options: [
      { es: '5 pies', en: '5 feet' },
      { es: '10 pies', en: '10 feet' },
      { es: '15 pies', en: '15 feet' },
      { es: '20 pies', en: '20 feet' }
    ],
    correctAnswer: 0,
    explanation: {
      es: 'En Colorado debe mantener libre la rampa de accesibilidad: prohibido estacionar dentro de 5 pies de una rampa para sillas de ruedas.',
      en: 'In Colorado you must keep accessibility ramps clear: no parking within 5 feet of a wheelchair ramp.'
    },
    sourceReference: { es: 'CRS 42-4-1204', en: 'CRS 42-4-1204' }
  },
  {
    id: 1007, category: 'general',
    question: {
      es: 'En Colorado, los faros deben encenderse desde:',
      en: 'In Colorado, headlights must be on from:'
    },
    options: [
      { es: 'La puesta de sol al amanecer', en: 'Sunset to sunrise' },
      { es: '30 minutos después de la puesta hasta 30 minutos antes del amanecer', en: '30 minutes after sunset to 30 minutes before sunrise' },
      { es: '1 hora antes de la puesta hasta el amanecer', en: '1 hour before sunset to sunrise' },
      { es: 'Sólo cuando esté oscuro', en: 'Only when it is dark' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'La ley exige luces desde media hora después de la puesta del sol hasta media hora antes del amanecer, y siempre que la visibilidad sea menor de 1000 pies.',
      en: 'The law requires headlights from a half hour after sunset to a half hour before sunrise, and whenever visibility is less than 1000 feet.'
    },
    sourceReference: { es: 'CRS 42-4-204', en: 'CRS 42-4-204' }
  },

  /* ===== BAC Y DUI ESCENARIOS COMPLEJOS ===== */
  {
    id: 1008, category: 'alcohol',
    question: {
      es: 'Un conductor adulto en Colorado con BAC de 0.06 es presuntamente:',
      en: 'An adult Colorado driver with a BAC of 0.06 is presumptively:'
    },
    options: [
      { es: 'Sobrio', en: 'Sober' },
      { es: 'Culpable de DWAI', en: 'Guilty of DWAI' },
      { es: 'Culpable de DUI per se', en: 'Guilty of DUI per se' },
      { es: 'Culpable de Express Consent', en: 'Guilty under Express Consent only' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'BAC entre 0.05 y 0.079 establece presunción de DWAI (manejar con capacidad disminuida). DUI per se requiere 0.08+.',
      en: 'A BAC between 0.05 and 0.079 raises a presumption of DWAI. DUI per se requires 0.08+.'
    },
    sourceReference: { es: 'CRS 42-4-1301(6)', en: 'CRS 42-4-1301(6)' }
  },
  {
    id: 1009, category: 'alcohol',
    question: {
      es: 'En Colorado, después de un segundo DUI, el conductor debe instalar un dispositivo de bloqueo de encendido (ignition interlock) durante al menos:',
      en: 'After a second DUI in Colorado, the driver must use an ignition interlock device for at least:'
    },
    options: [
      { es: '6 meses', en: '6 months' },
      { es: '1 año', en: '1 year' },
      { es: '2 años', en: '2 years' },
      { es: '5 años', en: '5 years' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'Tras un segundo DUI/DWAI o alcohol con un BAC alto, Colorado requiere ignition interlock por al menos 2 años antes de recuperar la licencia plena.',
      en: 'After a second DUI/DWAI or high-BAC alcohol offense, Colorado requires an ignition interlock for at least 2 years before full license restoration.'
    },
    sourceReference: { es: 'CRS 42-2-132.5', en: 'CRS 42-2-132.5' }
  },
  {
    id: 1010, category: 'alcohol',
    question: {
      es: 'En Colorado se establece presunción de DUI por uso de marihuana cuando los niveles de THC activo en sangre superan:',
      en: 'In Colorado, presumptive DUI for marijuana is established when active blood THC exceeds:'
    },
    options: [
      { es: '1 ng/mL', en: '1 ng/mL' },
      { es: '3 ng/mL', en: '3 ng/mL' },
      { es: '5 ng/mL', en: '5 ng/mL' },
      { es: '10 ng/mL', en: '10 ng/mL' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'CRS 42-4-1301(6)(a)(IV) establece presunción rebatible de DUI con 5 ng/mL o más de delta-9-THC activo en sangre completa.',
      en: 'CRS 42-4-1301(6)(a)(IV) establishes a rebuttable presumption of DUI at 5 ng/mL or more of active delta-9-THC in whole blood.'
    },
    sourceReference: { es: 'CRS 42-4-1301(6)(a)(IV)', en: 'CRS 42-4-1301(6)(a)(IV)' }
  },
  {
    id: 1011, category: 'alcohol',
    question: {
      es: 'Si un conductor menor de 21 años da positivo con BAC entre 0.02 y 0.05, las sanciones bajo "Underage Drinking and Driving" incluyen una primera revocación de licencia por:',
      en: 'For a driver under 21 testing between 0.02 and 0.05 BAC, "Underage Drinking and Driving" first-offense license revocation is:'
    },
    options: [
      { es: '30 días', en: '30 days' },
      { es: '3 meses', en: '3 months' },
      { es: '6 meses', en: '6 months' },
      { es: '1 año', en: '1 year' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'La primera ofensa de Underage Drinking and Driving (UDD) en Colorado conlleva 3 meses de revocación, 24 horas de servicio comunitario y posible educación sobre alcohol.',
      en: 'A first UDD offense in Colorado is a 3-month revocation, 24 hours of community service and possible alcohol education.'
    },
    sourceReference: { es: 'CRS 42-2-126', en: 'CRS 42-2-126' }
  },
  {
    id: 1012, category: 'alcohol',
    question: {
      es: 'Un conductor con CDL detenido en su vehículo personal y con BAC de 0.05 se considera:',
      en: 'A CDL holder stopped in their personal vehicle with a 0.05 BAC is considered:'
    },
    options: [
      { es: 'No es violación porque no estaba en un comercial', en: 'No violation since not in a commercial vehicle' },
      { es: 'DWAI bajo la regla general de adultos', en: 'DWAI under the adult presumption' },
      { es: 'DUI per se de CDL', en: 'CDL DUI per se' },
      { es: 'Solo sujeto a sanciones de pasajero', en: 'Subject only to passenger-vehicle penalties' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'En un vehículo personal aplica la presunción adulta: DWAI 0.05-0.079 / DUI per se 0.08+. La regla de 0.04 CDL aplica solo al manejar un vehículo comercial.',
      en: 'In a personal vehicle, the adult thresholds apply: DWAI at 0.05-0.079 / DUI per se at 0.08+. The CDL 0.04 rule applies only while operating a commercial vehicle.'
    },
    sourceReference: { es: '49 CFR 383 + CRS 42-4-1301', en: '49 CFR 383 + CRS 42-4-1301' }
  },
  {
    id: 1013, category: 'alcohol',
    question: {
      es: 'En Colorado, una persona "habitual offender" en materia de DUI/DWAI/conducción imprudente se define como quien acumula:',
      en: 'In Colorado, a "habitual traffic offender" for DUI / DWAI / reckless driving is defined as someone with:'
    },
    options: [
      { es: '2 condenas en 5 años', en: '2 convictions in 5 years' },
      { es: '3 condenas mayores dentro de 7 años', en: '3 major convictions within 7 years' },
      { es: '5 condenas en 10 años', en: '5 convictions in 10 years' },
      { es: '10 puntos en la licencia', en: '10 points on the license' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'CRS 42-2-202 designa "habitual offender" a quien acumule 3 condenas mayores (incluyendo DUI, DWAI, hit-and-run) dentro de 7 años: 5 años sin licencia.',
      en: 'CRS 42-2-202 designates as a "habitual offender" anyone with 3 major convictions (including DUI, DWAI, hit-and-run) within 7 years: 5-year license loss.'
    },
    sourceReference: { es: 'CRS 42-2-202', en: 'CRS 42-2-202' }
  },

  /* ===== ESCENARIOS HIPOTÉTICOS ===== */
  {
    id: 1014, category: 'emergency',
    question: {
      es: 'Conduciendo por I-70 a 65 mph, una llanta delantera revienta súbitamente. ¿Cuál es la respuesta correcta?',
      en: 'Driving on I-70 at 65 mph, a front tire suddenly blows out. The correct response is:'
    },
    options: [
      { es: 'Frenar bruscamente y orillarse', en: 'Brake hard and pull over' },
      { es: 'Sujetar firme el volante, soltar gradualmente el acelerador y dirigirse al acotamiento', en: 'Grip the wheel firmly, gradually release the gas and steer to the shoulder' },
      { es: 'Acelerar para no perder el control', en: 'Accelerate to keep control' },
      { es: 'Soltar el volante y dejar que el vehículo se enderece solo', en: 'Let go of the wheel and let it straighten itself' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'En una reventadura, frenar bruscamente puede provocar trompo. Mantenga el volante firme, suelte el acelerador, conserve la línea y oríllese cuando baje la velocidad.',
      en: 'Hard braking after a blowout can cause a spin. Keep the wheel firm, release the gas, hold your line, and pull over as you slow.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Emergencias', en: 'Colorado Driver Handbook · Emergencies' }
  },
  {
    id: 1015, category: 'emergency',
    question: {
      es: 'Bajando un paso de montaña, sus frenos pierden potencia y nota que se calientan. La acción correcta es:',
      en: 'Descending a mountain pass, your brakes fade and you notice they overheat. The correct action is:'
    },
    options: [
      { es: 'Bombearlos rápidamente y continuar', en: 'Pump them quickly and continue' },
      { es: 'Cambiar a marcha baja, usar el freno motor y buscar una rampa de emergencia si la pérdida es total', en: 'Shift to a lower gear, use engine braking, and look for a runaway ramp if total brake loss' },
      { es: 'Apagar el motor para frenar más rápido', en: 'Turn off the engine to slow faster' },
      { es: 'Poner el cambio en neutral', en: 'Shift to neutral' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Use marcha baja para frenado motor, evite el uso continuo de frenos. En Colorado las pendientes largas tienen rampas de escape ("runaway truck ramps") señalizadas.',
      en: 'Use a low gear for engine braking; avoid continuous brake use. Colorado mountain grades have signed runaway truck ramps for total brake loss.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Manejo en montaña', en: 'Colorado Driver Handbook · Mountain driving' }
  },
  {
    id: 1016, category: 'emergency',
    question: {
      es: 'Su vehículo se detiene en un cruce ferroviario y el motor no enciende. ¿Qué hace?',
      en: 'Your vehicle stalls on a railroad crossing and the engine won\'t start. What do you do?'
    },
    options: [
      { es: 'Permanecer dentro intentando arrancar', en: 'Stay inside trying to start it' },
      { es: 'Salir inmediatamente, alejarse en dirección al tren que se aproxima en un ángulo de 45° y llamar al 911', en: 'Get out immediately, walk toward the approaching train at a 45° angle and call 911' },
      { es: 'Empujar el vehículo hacia adelante', en: 'Push the vehicle forward' },
      { es: 'Esperar a que pase el tren', en: 'Wait for the train to pass' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Salga del auto y aléjese en sentido del tren entrante (en un ángulo, por si choca pueden volar fragmentos hacia atrás). Llame al número de emergencia (placa azul del cruce).',
      en: 'Get out and move toward the approaching train at an angle (debris from a strike scatters back). Call the railroad emergency number on the blue placard at the crossing.'
    },
    sourceReference: { es: 'Operation Lifesaver / FRA', en: 'Operation Lifesaver / FRA' }
  },
  {
    id: 1017, category: 'pedestrians',
    question: {
      es: 'Una pelota rueda hacia la calle desde entre dos autos estacionados. La respuesta más segura es:',
      en: 'A ball rolls into the street from between two parked cars. The safest response is:'
    },
    options: [
      { es: 'Acelerar para pasar antes', en: 'Speed up to pass first' },
      { es: 'Reducir la velocidad y prepararse a frenar; un niño puede correr tras la pelota', en: 'Slow down and prepare to brake; a child may run after the ball' },
      { es: 'Tocar el claxon', en: 'Honk' },
      { es: 'Cambiar de carril a la izquierda sin mirar', en: 'Change to the left lane without looking' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Una pelota suele anticipar a un niño persiguiéndola. Reduzca la velocidad y prepárese a detenerse antes de cruzar el punto.',
      en: 'A ball often precedes a child chasing after it. Slow down and be ready to stop before reaching that point.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Manejo defensivo', en: 'Colorado Driver Handbook · Defensive driving' }
  },
  {
    id: 1018, category: 'winter',
    question: {
      es: 'Cruzando un puente sombreado a las 6 AM en febrero, su auto pierde tracción y empieza a deslizarse lateralmente. ¿Qué hace?',
      en: 'Crossing a shaded bridge at 6 AM in February, the car loses traction and starts sliding sideways. What do you do?'
    },
    options: [
      { es: 'Frenar con fuerza', en: 'Brake hard' },
      { es: 'Soltar el acelerador, no frenar bruscamente y dirigir el volante hacia el sentido en el que se desliza la parte trasera', en: 'Release the gas, avoid hard braking, and steer in the direction the rear is sliding' },
      { es: 'Acelerar para recuperar tracción', en: 'Accelerate to regain traction' },
      { es: 'Girar bruscamente el volante en sentido contrario', en: 'Sharply steer the opposite way' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Los puentes se congelan primero. Si patina, suelte el acelerador y dirija el volante a donde va la parte trasera (steer into the skid) sin frenar bruscamente.',
      en: 'Bridges freeze first. If you skid, release the gas and steer in the direction the rear is sliding ("steer into the skid"), without hard braking.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Patinaje', en: 'Colorado Driver Handbook · Skidding' }
  },
  {
    id: 1019, category: 'emergency',
    question: {
      es: 'Es testigo de un accidente con lesionados. La acción legalmente requerida en Colorado es:',
      en: 'You witness a crash with injuries. The action legally required in Colorado is:'
    },
    options: [
      { es: 'Continuar; no es su responsabilidad', en: 'Keep going; not your responsibility' },
      { es: 'Detenerse, ofrecer asistencia razonable y llamar al 911 si es necesario', en: 'Stop, render reasonable assistance and call 911 if needed' },
      { es: 'Tomar fotos y seguir', en: 'Take photos and drive on' },
      { es: 'Tocar el claxon para advertir', en: 'Honk to warn others' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Cualquier conductor involucrado o testigo de un accidente con lesiones debe parar y ayudar razonablemente sin exponerse. Llame al 911 si hay heridos.',
      en: 'Any driver involved in or witnessing a crash with injuries must stop and render reasonable aid without endangering themselves. Call 911 for injuries.'
    },
    sourceReference: { es: 'CRS 42-4-1601 / 1602 / 1603', en: 'CRS 42-4-1601 / 1602 / 1603' }
  },
  {
    id: 1020, category: 'rightOfWay',
    question: {
      es: 'En una intersección con 4 PARE, llega un vehículo de bomberos con sirena y luces, y usted ya inició el cruce. ¿Qué hace?',
      en: 'At a 4-way stop, a fire truck arrives with siren and lights while you have already entered the intersection. What do you do?'
    },
    options: [
      { es: 'Detenerse de inmediato en medio del cruce', en: 'Stop immediately in the middle of the intersection' },
      { es: 'Despejar la intersección con seguridad y luego orillarse a la derecha para dejarlo pasar', en: 'Clear the intersection safely and then pull to the right to let it pass' },
      { es: 'Acelerar y huir', en: 'Speed up and flee' },
      { es: 'Bloquearle el paso', en: 'Block its path' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Nunca pare dentro de una intersección. Termine el cruce y oríllese a la derecha después para ceder el paso al vehículo de emergencia.',
      en: 'Never stop inside an intersection. Clear it safely first, then pull to the right to yield to the emergency vehicle.'
    },
    sourceReference: { es: 'CRS 42-4-705 / Manual', en: 'CRS 42-4-705 / Manual' }
  },
  {
    id: 1021, category: 'highway',
    question: {
      es: 'Está en el carril izquierdo de I-25 con tráfico fluyendo a 70 mph cuando ve un quitanieves a 200 yardas adelante con luces ámbar parpadeando. ¿Qué hace?',
      en: 'You\'re in the left lane of I-25 with traffic at 70 mph when you spot a snow plow 200 yards ahead with amber lights flashing. What should you do?'
    },
    options: [
      { es: 'Rebasarlo por la derecha rápido', en: 'Pass it on the right quickly' },
      { es: 'Reducir velocidad, mantener al menos 200 pies de distancia y rebasar por la izquierda con cuidado si tiene espacio', en: 'Slow down, stay at least 200 ft back, and pass on the left carefully if there is room' },
      { es: 'Pegarse atrás para ver mejor', en: 'Tailgate to see better' },
      { es: 'Tocar el claxon hasta que se aparte', en: 'Honk until it moves' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Mantenga distancia (la cuchilla puede arrojar nieve, hielo y piedras). Si la vía lo permite, rebase por la izquierda — nunca por la derecha donde está la cuchilla.',
      en: 'Stay back (the plow throws snow, ice and rocks). If safe and the road allows, pass on the left — never on the right where the blade is.'
    },
    sourceReference: { es: 'CDOT · Snow Plow Safety', en: 'CDOT · Snow Plow Safety' }
  },
  {
    id: 1022, category: 'rightOfWay',
    question: {
      es: 'Un autobús escolar se detiene en una carretera de cuatro carriles SIN mediana central, en el carril opuesto, con sus luces rojas parpadeando. Usted va en sentido contrario. ¿Debe detenerse?',
      en: 'A school bus stops in the opposite lane of a 4-lane road with NO median, red lights flashing. You are going the other way. Must you stop?'
    },
    options: [
      { es: 'No, porque hay dos carriles entre ambos', en: 'No, because there are two lanes between you' },
      { es: 'Sí; sin mediana o barrera física debe detenerse aunque sean 4 carriles', en: 'Yes; without a median or physical barrier you must stop even on a 4-lane road' },
      { es: 'Sólo si hay niños visibles', en: 'Only if children are visible' },
      { es: 'Sólo si va a girar', en: 'Only if turning' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'En carreteras NO divididas por mediana o barrera física, todos los vehículos en ambos sentidos deben detenerse, sin importar el número de carriles.',
      en: 'On roads NOT divided by a median or physical barrier, all vehicles in both directions must stop, regardless of the number of lanes.'
    },
    sourceReference: { es: 'CRS 42-4-1903', en: 'CRS 42-4-1903' }
  },
  {
    id: 1023, category: 'emergency',
    question: {
      es: 'Conduciendo, su capó (cofre) se abre de pronto bloqueándole la vista. ¿Qué hace?',
      en: 'While driving, your hood suddenly flies open and blocks your view. What do you do?'
    },
    options: [
      { es: 'Frenar bruscamente', en: 'Slam the brakes' },
      { es: 'Reducir velocidad, mirar por la ventana lateral o por la rendija inferior y orillarse a la derecha', en: 'Slow down, look through the side window or the gap below and pull to the right' },
      { es: 'Acelerar para cerrarlo con el viento', en: 'Speed up to let wind close it' },
      { es: 'Cerrar los ojos hasta que pare', en: 'Close your eyes until you stop' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Use la rendija debajo del cofre o la ventana lateral para guiarse, reduzca y oríllese con seguridad. No frene bruscamente: provocaría una colisión trasera.',
      en: 'Use the gap under the hood or the side window to see, slow down and pull over safely. Avoid hard braking — it could cause a rear-end collision.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Emergencias', en: 'Colorado Driver Handbook · Emergencies' }
  },

  /* ===== MULTAS, SANCIONES Y PUNTOS ===== */
  {
    id: 1024, category: 'documents',
    question: {
      es: 'Pasar ilegalmente a un autobús escolar detenido con luces rojas en Colorado suma cuántos puntos a la licencia:',
      en: 'Illegally passing a stopped school bus with red lights flashing in Colorado adds how many license points:'
    },
    options: [
      { es: '2 puntos', en: '2 points' },
      { es: '4 puntos', en: '4 points' },
      { es: '6 puntos', en: '6 points' },
      { es: '12 puntos', en: '12 points' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'Esta infracción acumula 6 puntos en la licencia, con multas que pueden superar los $300 y posible suspensión.',
      en: 'This violation adds 6 points to your license, with fines that can exceed $300 and possible suspension.'
    },
    sourceReference: { es: 'CRS 42-2-127 / 42-4-1903', en: 'CRS 42-2-127 / 42-4-1903' }
  },
  {
    id: 1025, category: 'documents',
    question: {
      es: 'Un conductor adulto con licencia regular puede ser suspendido cuando acumule cuántos puntos en 12 meses:',
      en: 'An adult licensed driver may have their license suspended when accumulating how many points in 12 months:'
    },
    options: [
      { es: '6 puntos', en: '6 points' },
      { es: '8 puntos', en: '8 points' },
      { es: '12 puntos', en: '12 points' },
      { es: '18 puntos', en: '18 points' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'Para adultos (21+), la suspensión es posible al acumular 12 puntos en 12 meses o 18 puntos en 24 meses.',
      en: 'For adult drivers (21+), suspension applies at 12 points in 12 months or 18 in 24 months.'
    },
    sourceReference: { es: 'CRS 42-2-127', en: 'CRS 42-2-127' }
  },
  {
    id: 1026, category: 'documents',
    question: {
      es: 'Un conductor menor de 18 años puede ser suspendido al acumular:',
      en: 'A driver under 18 may be suspended after accumulating:'
    },
    options: [
      { es: '4 puntos en 12 meses', en: '4 points in 12 months' },
      { es: '6 puntos en 12 meses (o 7 en período de licencia provisional)', en: '6 points in 12 months (or 7 across the provisional license period)' },
      { es: '12 puntos en 12 meses', en: '12 points in 12 months' },
      { es: 'Cualquier cantidad', en: 'Any amount' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Para menores de 18: 6 puntos en 12 meses, o 7 puntos acumulados durante toda su licencia provisional bastan para suspender.',
      en: 'For drivers under 18: 6 points in 12 months, or 7 points total during the provisional license period, triggers suspension.'
    },
    sourceReference: { es: 'CRS 42-2-127(5)', en: 'CRS 42-2-127(5)' }
  },
  {
    id: 1027, category: 'documents',
    question: {
      es: 'Conducir sin seguro válido en Colorado por primera vez conlleva multa mínima de:',
      en: 'Driving without valid insurance in Colorado on a first offense carries a minimum fine of:'
    },
    options: [
      { es: '$100', en: '$100' },
      { es: '$500', en: '$500' },
      { es: '$1,000', en: '$1,000' },
      { es: '$2,500', en: '$2,500' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Primera ofensa: $500 mínimo, 4 puntos, y suspensión de licencia hasta probar seguro vigente. Reincidencias aumentan considerablemente.',
      en: 'First offense: minimum $500, 4 points, and license suspension until proof of insurance is shown. Repeat offenses escalate significantly.'
    },
    sourceReference: { es: 'CRS 42-4-1409', en: 'CRS 42-4-1409' }
  },
  {
    id: 1028, category: 'alcohol',
    question: {
      es: 'Primera condena por DUI en Colorado (sin lesiones) acarrea estos puntos en la licencia:',
      en: 'A first DUI conviction in Colorado (no injuries) adds these license points:'
    },
    options: [
      { es: '4 puntos', en: '4 points' },
      { es: '8 puntos', en: '8 points' },
      { es: '12 puntos', en: '12 points' },
      { es: '20 puntos', en: '20 points' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'DUI acumula 12 puntos. Junto con la revocación administrativa (express consent) y consecuencias penales (multas, posible cárcel).',
      en: 'DUI adds 12 points. Plus administrative revocation (express consent) and criminal consequences (fines, possible jail).'
    },
    sourceReference: { es: 'CRS 42-2-127', en: 'CRS 42-2-127' }
  },
  {
    id: 1029, category: 'speed',
    question: {
      es: 'Conducir entre 5 y 9 mph por encima del límite agrega cuántos puntos:',
      en: 'Driving 5 to 9 mph over the limit adds how many points:'
    },
    options: [
      { es: '0 puntos', en: '0 points' },
      { es: '1 punto', en: '1 point' },
      { es: '4 puntos', en: '4 points' },
      { es: '6 puntos', en: '6 points' }
    ],
    correctAnswer: 1,
    explanation: {
      es: '5-9 sobre = 1 punto. 10-19 sobre = 4. 20-39 sobre = 6. 40+ sobre = 12 y posible cargo penal por imprudencia (reckless).',
      en: '5-9 over = 1 point. 10-19 over = 4. 20-39 over = 6. 40+ over = 12 plus possible reckless driving charge.'
    },
    sourceReference: { es: 'CRS 42-2-127 / 42-4-1101', en: 'CRS 42-2-127 / 42-4-1101' }
  },

  /* ===== EQUIPAMIENTO DEL VEHÍCULO ===== */
  {
    id: 1030, category: 'general',
    question: {
      es: 'El porcentaje mínimo de transmisión de luz visible (VLT) para las ventanas delanteras laterales en Colorado es:',
      en: 'The minimum visible light transmission (VLT) for front side windows in Colorado is:'
    },
    options: [
      { es: '10%', en: '10%' },
      { es: '27%', en: '27%' },
      { es: '50%', en: '50%' },
      { es: '70%', en: '70%' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'CRS 42-4-227 exige al menos 27% de VLT en las ventanas delanteras laterales. La ventana trasera puede tener cualquier porcentaje si los espejos están bien.',
      en: 'CRS 42-4-227 requires at least 27% VLT on front side windows. Rear windows can be any % if mirrors are functional.'
    },
    sourceReference: { es: 'CRS 42-4-227', en: 'CRS 42-4-227' }
  },
  {
    id: 1031, category: 'general',
    question: {
      es: 'Su vehículo debe tener cuántas luces de freno funcionando:',
      en: 'Your vehicle must have how many working brake lights:'
    },
    options: [
      { es: '1', en: '1' },
      { es: 'Al menos 2 (3 si el modelo viene con tres)', en: 'At least 2 (3 if the model originally has three)' },
      { es: 'Cualquier número', en: 'Any number' },
      { es: 'Solo aplica para vehículos comerciales', en: 'Only applies to commercial vehicles' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Cada vehículo debe tener al menos dos luces de freno operativas (y si fue equipado con tres, las tres deben funcionar).',
      en: 'Every vehicle must have at least two working brake lights (and if originally equipped with three, all three must work).'
    },
    sourceReference: { es: 'CRS 42-4-213', en: 'CRS 42-4-213' }
  },
  {
    id: 1032, category: 'general',
    question: {
      es: 'En Colorado, las llantas de su vehículo deben tener una profundidad de banda mínima en general de:',
      en: 'In Colorado, your vehicle\'s tires must have a minimum general tread depth of:'
    },
    options: [
      { es: '1/32"', en: '1/32"' },
      { es: '2/32"', en: '2/32"' },
      { es: '4/32"', en: '4/32"' },
      { es: '8/32"', en: '8/32"' }
    ],
    correctAnswer: 1,
    explanation: {
      es: '2/32" (1.6 mm) es el mínimo federal y de Colorado para llantas en carretera. La Traction Law exige más (3/16" = 6/32") en condiciones invernales.',
      en: '2/32" (1.6 mm) is the federal and Colorado minimum for road tires. The Traction Law requires more (3/16" = 6/32") in winter conditions.'
    },
    sourceReference: { es: '49 CFR 393.75 / CRS 42-4', en: '49 CFR 393.75 / CRS 42-4' }
  },
  {
    id: 1033, category: 'general',
    question: {
      es: 'En Colorado, ¿se permiten neumáticos con clavos (studded tires) en las vías públicas?',
      en: 'In Colorado, are studded tires permitted on public roads?'
    },
    options: [
      { es: 'Sí, sin restricción de fecha', en: 'Yes, with no date restriction' },
      { es: 'No están permitidos en absoluto', en: 'They are not permitted at all' },
      { es: 'Sólo entre el 15 de septiembre y el 15 de mayo en Vail Pass', en: 'Only between September 15 and May 15 on Vail Pass' },
      { es: 'Sólo en vías privadas', en: 'Only on private roads' }
    ],
    correctAnswer: 0,
    explanation: {
      es: 'Colorado no tiene una restricción estatal por fechas para clavos. Algunas zonas locales pueden tener restricciones (por ejemplo el túnel Eisenhower).',
      en: 'Colorado has no statewide date restriction for studs. Some local areas may restrict them (e.g., the Eisenhower Tunnel).'
    },
    sourceReference: { es: 'CRS 42-4-225', en: 'CRS 42-4-225' }
  },

  /* ===== INTERSECCIONES COMPLEJAS ===== */
  {
    id: 1034, category: 'rightOfWay',
    question: {
      es: 'En una rotonda de varios carriles, va a tomar la tercera salida (giro a la izquierda equivalente). ¿Qué carril debe usar al entrar?',
      en: 'In a multi-lane roundabout, you plan to take the third exit (equivalent to a left turn). Which lane should you use entering?'
    },
    options: [
      { es: 'Carril exterior (derecho)', en: 'Outer lane (right)' },
      { es: 'Carril interior (izquierdo)', en: 'Inner lane (left)' },
      { es: 'Cualquiera', en: 'Either' },
      { es: 'Sólo el carril del medio', en: 'Only the middle lane' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Para giros a la izquierda o U use el carril interior; para giros a la derecha y la primera salida, el carril exterior. Recto puede usar cualquiera de los dos según la señalización.',
      en: 'Use the inner lane for left turns or U-turns; outer lane for right turns and the first exit. Going straight can use either, per signage.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Rotondas', en: 'Colorado Driver Handbook · Roundabouts' }
  },
  {
    id: 1035, category: 'rightOfWay',
    question: {
      es: 'Llega a una intersección con luz amarilla intermitente en su sentido y roja intermitente en el sentido transversal. ¿Quién tiene la prioridad?',
      en: 'You arrive at an intersection with flashing yellow in your direction and flashing red on the cross street. Who has priority?'
    },
    options: [
      { es: 'El sentido transversal porque debe parar', en: 'The cross street, because they stop' },
      { es: 'Su sentido tiene la prioridad pero debe pasar con precaución', en: 'Your direction has priority but you proceed with caution' },
      { es: 'Ambos deben parar', en: 'Both must stop' },
      { es: 'El que tenga vehículo más grande', en: 'Whoever has the bigger vehicle' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Amarilla intermitente = precaución, su tráfico tiene prioridad. Roja intermitente = parar (como un STOP). Pase con cuidado.',
      en: 'Flashing yellow = caution, your traffic has priority. Flashing red = stop (treat as STOP). Proceed with care.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Semáforos intermitentes', en: 'Colorado Driver Handbook · Flashing signals' }
  },
  {
    id: 1036, category: 'rightOfWay',
    question: {
      es: 'En una intersección controlada por un policía, hay además luz verde para usted, pero el policía le indica con la mano que se detenga. ¿Qué hace?',
      en: 'At an intersection controlled by a police officer, you have a green light, but the officer signals with the hand for you to stop. What do you do?'
    },
    options: [
      { es: 'Obedecer la luz verde', en: 'Obey the green light' },
      { es: 'Obedecer al policía', en: 'Obey the officer' },
      { es: 'Llamar a 911', en: 'Call 911' },
      { es: 'Tocar el claxon', en: 'Honk' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Las indicaciones de un oficial siempre prevalecen sobre semáforos, señales pintadas y marcas viales.',
      en: 'Officer directions always override traffic lights, signs and pavement markings.'
    },
    sourceReference: { es: 'CRS 42-4-104', en: 'CRS 42-4-104' }
  },
  {
    id: 1037, category: 'rightOfWay',
    question: {
      es: 'Va a girar a la derecha en una intersección con flecha verde fija a la derecha. Hay un peatón cruzando legalmente la calle de su giro. ¿Qué hace?',
      en: 'You are turning right at an intersection with a steady green right-turn arrow. A pedestrian is lawfully crossing your turning street. What do you do?'
    },
    options: [
      { es: 'La flecha protege su giro; siga sin detenerse', en: 'The arrow protects your turn; continue without stopping' },
      { es: 'Cede el paso al peatón antes de girar; la flecha verde no anula los derechos del peatón', en: 'Yield to the pedestrian before turning; the green arrow does not override pedestrian rights' },
      { es: 'Toca el claxon', en: 'Honk' },
      { es: 'Acelera para pasar antes', en: 'Accelerate to pass first' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'La flecha verde da paso protegido respecto a vehículos, pero el peatón en el cruce siempre tiene derecho de paso.',
      en: 'A green arrow gives a protected turn vs. vehicles, but a pedestrian lawfully in the crosswalk always has the right of way.'
    },
    sourceReference: { es: 'CRS 42-4-802', en: 'CRS 42-4-802' }
  },

  /* ===== CONDUCTORES JÓVENES Y GDL ===== */
  {
    id: 1038, category: 'documents',
    question: {
      es: 'Un conductor de 16 años con permiso de instrucción debe sumar cuántas horas de práctica supervisada antes de poder obtener la licencia provisional:',
      en: 'A 16-year-old with an instruction permit must log how many supervised driving hours before applying for the provisional license:'
    },
    options: [
      { es: '20 horas, 5 nocturnas', en: '20 hours, 5 at night' },
      { es: '50 horas, 10 nocturnas', en: '50 hours, 10 at night' },
      { es: '100 horas, 25 nocturnas', en: '100 hours, 25 at night' },
      { es: 'Sin requisito específico', en: 'No specific requirement' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Mínimo 50 horas con un licenciado mayor de 21, incluyendo 10 horas en la oscuridad. La bitácora se entrega al solicitar la provisional.',
      en: 'Minimum 50 hours with a 21+ licensed driver, including 10 hours after dark. The log is submitted when applying for the provisional.'
    },
    sourceReference: { es: 'CRS 42-2-106(2)(b)', en: 'CRS 42-2-106(2)(b)' }
  },
  {
    id: 1039, category: 'documents',
    question: {
      es: 'Entre los 7 y 12 meses con licencia provisional, un conductor menor de 18 puede llevar como pasajero:',
      en: 'Between 7 and 12 months with a provisional license, an under-18 driver may carry:'
    },
    options: [
      { es: 'Ningún pasajero', en: 'No passengers at all' },
      { es: 'Un solo pasajero menor de 21 (que no sea familia inmediata)', en: 'Only one passenger under 21 (not immediate family)' },
      { es: 'Hasta dos pasajeros menores de 21', en: 'Up to two passengers under 21' },
      { es: 'Cualquier número de pasajeros', en: 'Any number of passengers' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Primeros 6 meses: 0 pasajeros menores de 21 (ajenos a la familia inmediata). Meses 7-12: máximo 1 menor de 21. Excepciones: familia inmediata o emergencia médica.',
      en: 'First 6 months: 0 passengers under 21 outside immediate family. Months 7-12: maximum one under 21. Exceptions: immediate family or medical emergency.'
    },
    sourceReference: { es: 'CRS 42-2-106', en: 'CRS 42-2-106' }
  },
  {
    id: 1040, category: 'documents',
    question: {
      es: 'Un conductor menor de 18 con licencia provisional puede ser pasajero de cualquier conductor, pero como conductor sólo puede manejar entre las:',
      en: 'A provisional-license holder under 18 may ride with anyone, but may only DRIVE between:'
    },
    options: [
      { es: '5 AM y 9 PM', en: '5 AM and 9 PM' },
      { es: '5 AM y la medianoche', en: '5 AM and midnight' },
      { es: '6 AM y 11 PM sin excepciones', en: '6 AM and 11 PM with no exceptions' },
      { es: 'Las 24 horas sin restricción', en: '24 hours with no restriction' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Hay toque de queda entre la medianoche y las 5 AM, con excepciones (trabajo, escuela, emergencia, acompañado por padre/tutor).',
      en: 'Curfew applies midnight–5 AM, with exceptions (work, school, emergency, accompanied by parent/guardian).'
    },
    sourceReference: { es: 'CRS 42-2-106(8)', en: 'CRS 42-2-106(8)' }
  },
  {
    id: 1041, category: 'documents',
    question: {
      es: 'Un conductor menor de 18 puede usar teléfono celular al conducir sólo cuando:',
      en: 'A driver under 18 may use a cell phone while driving only when:'
    },
    options: [
      { es: 'Siempre, usando manos libres', en: 'Anytime, hands-free' },
      { es: 'Sólo en una emergencia para llamar a la policía, bomberos, ambulancia o pidiendo ayuda', en: 'Only in an emergency to call police, fire, ambulance or for help' },
      { es: 'Sólo en luces rojas', en: 'Only at red lights' },
      { es: 'Cualquier momento', en: 'Anytime' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Para menores de 18 está prohibido cualquier uso del teléfono — incluso manos libres — salvo emergencia. Para adultos sólo está prohibido enviar mensajes.',
      en: 'For under-18 drivers any phone use is banned — even hands-free — except in an emergency. Adults are banned only from texting.'
    },
    sourceReference: { es: 'CRS 42-4-239(2)', en: 'CRS 42-4-239(2)' }
  },

  /* ===== MAS DUI / TIEMPOS Y LÍMITES ===== */
  {
    id: 1042, category: 'alcohol',
    question: {
      es: 'Una persona adulta promedio metaboliza aproximadamente cuánto alcohol por hora:',
      en: 'An average adult metabolizes about how much alcohol per hour:'
    },
    options: [
      { es: '0.01% BAC por hora', en: '0.01% BAC per hour' },
      { es: '0.015% BAC por hora', en: '0.015% BAC per hour' },
      { es: '0.05% BAC por hora', en: '0.05% BAC per hour' },
      { es: '0.10% BAC por hora', en: '0.10% BAC per hour' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'El cuerpo metaboliza alcohol a un ritmo promedio de aproximadamente 0.015% BAC por hora. No hay forma de acelerarlo (café, comida, ducha no funcionan).',
      en: 'The body metabolizes alcohol at roughly 0.015% BAC per hour on average. Nothing speeds this up (coffee, food, showers don\'t help).'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Alcohol', en: 'Colorado Driver Handbook · Alcohol' }
  },
  {
    id: 1043, category: 'alcohol',
    question: {
      es: 'Después de una primera condena por DUI con BAC menor a 0.15, el período de revocación administrativa de licencia es:',
      en: 'After a first DUI conviction with BAC below 0.15, the administrative license revocation period is:'
    },
    options: [
      { es: '3 meses', en: '3 months' },
      { es: '9 meses', en: '9 months' },
      { es: '1 año', en: '1 year' },
      { es: '2 años', en: '2 years' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Primer DUI con BAC < 0.15: revocación administrativa de 9 meses. Con BAC ≥ 0.15 ("Persistent Drunk Driver"): 2 años con ignition interlock.',
      en: 'First DUI with BAC < 0.15: 9-month administrative revocation. With BAC ≥ 0.15 ("Persistent Drunk Driver"): 2 years with ignition interlock.'
    },
    sourceReference: { es: 'CRS 42-2-126', en: 'CRS 42-2-126' }
  },
  {
    id: 1044, category: 'alcohol',
    question: {
      es: 'Un BAC de 0.17 o superior califica al conductor como "Persistent Drunk Driver" en Colorado. Una consecuencia adicional es:',
      en: 'A BAC of 0.17 or higher classifies the driver as a "Persistent Drunk Driver" in Colorado. An added consequence is:'
    },
    options: [
      { es: 'Sólo multa adicional', en: 'Additional fine only' },
      { es: 'Ignition interlock obligatorio mínimo 2 años y reforzamiento educativo', en: 'Mandatory ignition interlock for at least 2 years plus enhanced education' },
      { es: 'Confiscación inmediata del vehículo', en: 'Immediate vehicle seizure' },
      { es: 'Multa de $50,000', en: '$50,000 fine' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'CRS 42-1-102(68.5) clasifica como Persistent Drunk Driver a quien sople 0.17+, rechace la prueba o tenga DUI previo: 2 años de interlock y Level II Alcohol Education.',
      en: 'CRS 42-1-102(68.5) tags as a Persistent Drunk Driver anyone with 0.17+, a refusal, or a prior DUI: 2-year interlock and Level II Alcohol Education.'
    },
    sourceReference: { es: 'CRS 42-1-102(68.5)', en: 'CRS 42-1-102(68.5)' }
  },

  /* ===== CARRILES Y AUTOPISTAS DETALLADOS ===== */
  {
    id: 1045, category: 'highway',
    question: {
      es: 'En I-70 al cruzar el túnel Eisenhower-Johnson, ¿cuál es la restricción específica vigente?',
      en: 'On I-70 through the Eisenhower-Johnson Tunnel, what specific restriction applies?'
    },
    options: [
      { es: 'Sólo vehículos con AWD', en: 'AWD only' },
      { es: 'Prohibidos materiales peligrosos, ciertos vehículos comerciales y la velocidad reducida', en: 'No hazardous materials, certain commercial vehicles, and reduced speed' },
      { es: 'Sólo emergencias', en: 'Emergencies only' },
      { es: 'Sin restricciones', en: 'No restrictions' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'El túnel prohíbe materiales peligrosos (HAZMAT). Hay rutas alternas obligatorias para esos cargamentos. La velocidad dentro suele ser menor que en la autopista abierta.',
      en: 'The tunnel bans hazardous materials (HAZMAT). Alternate routes are mandatory for those loads. In-tunnel speed is generally lower than the open interstate.'
    },
    sourceReference: { es: 'CDOT · Eisenhower-Johnson Tunnel', en: 'CDOT · Eisenhower-Johnson Tunnel' }
  },
  {
    id: 1046, category: 'highway',
    question: {
      es: 'En una autopista con carriles exprés HOV / ExpressToll separados por línea blanca doble continua, cruzar esa línea:',
      en: 'On a highway with HOV/ExpressToll lanes separated by a solid double white line, crossing that line is:'
    },
    options: [
      { es: 'Permitido en cualquier momento', en: 'Permitted any time' },
      { es: 'Una infracción de tránsito', en: 'A traffic violation' },
      { es: 'Permitido si las luces de emergencia están encendidas', en: 'Allowed with hazards on' },
      { es: 'Permitido sólo por las mañanas', en: 'Allowed only in the morning' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'La línea blanca doble continua es una división legal. Cruzarla para entrar o salir del carril exprés conlleva multa.',
      en: 'A solid double white line is a legal division. Crossing it to enter or exit the express lane is a violation with a fine.'
    },
    sourceReference: { es: 'CDOT · Express Lanes Rules', en: 'CDOT · Express Lanes Rules' }
  },
  {
    id: 1047, category: 'highway',
    question: {
      es: 'En el carril izquierdo de una autopista de 4 carriles, viaja a la velocidad límite. Detrás se acumulan vehículos. La acción correcta es:',
      en: 'In the left lane of a 4-lane highway, you\'re at the speed limit. Vehicles pile up behind you. The correct action is:'
    },
    options: [
      { es: 'Mantenerse en el carril; ya va al límite', en: 'Stay in the lane; you\'re at the limit' },
      { es: 'Pasar al carril derecho cuando sea seguro; el carril izquierdo es para rebasar', en: 'Move to the right lane when safe; the left lane is for passing' },
      { es: 'Acelerar a 10 sobre el límite', en: 'Accelerate to 10 over the limit' },
      { es: 'Frenar para forzarlos a alejarse', en: 'Brake to force them back' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'La "Slowpoke Law" prohíbe ocupar el carril izquierdo si no está rebasando, aunque vaya al límite. Es infracción no apartarse al derecho.',
      en: 'The "Slowpoke Law" forbids using the left lane unless passing, even at the speed limit. Failing to move right is a violation.'
    },
    sourceReference: { es: 'CRS 42-4-1013', en: 'CRS 42-4-1013' }
  },

  /* ===== SEÑALES ESPECÍFICAS Y MARCAS ===== */
  {
    id: 1048, category: 'signs',
    question: {
      es: 'Un cartel naranja rectangular con texto negro indica:',
      en: 'A rectangular orange sign with black text indicates:'
    },
    options: [
      { es: 'Servicios al conductor', en: 'Driver services' },
      { es: 'Información temporal sobre construcción o trabajo en la vía', en: 'Temporary information about construction or roadwork' },
      { es: 'Información histórica', en: 'Historic information' },
      { es: 'Zona escolar', en: 'School zone' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'El naranja (rectangular o diamante) siempre indica zona de obras o información temporal de construcción.',
      en: 'Orange (rectangular or diamond) always indicates construction or temporary roadwork information.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Señales de obra', en: 'Colorado Driver Handbook · Work zone signs' }
  },
  {
    id: 1049, category: 'signs',
    question: {
      es: 'Un diamante amarillo con símbolo de bicicleta indica:',
      en: 'A yellow diamond with a bicycle symbol indicates:'
    },
    options: [
      { es: 'Sólo bicicletas pueden pasar', en: 'Bicycles only' },
      { es: 'Cruce o tráfico de bicicletas más adelante', en: 'Bicycle crossing or traffic ahead' },
      { es: 'Prohibido bicicletas', en: 'No bicycles' },
      { es: 'Estacionamiento de bicicletas', en: 'Bicycle parking' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Como cualquier diamante amarillo, es advertencia: ciclistas pueden cruzar o estar presentes en la vía. Reduzca y manténgase atento.',
      en: 'Like any yellow diamond, it\'s a warning: cyclists may cross or be on the road. Slow down and watch carefully.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Señales de advertencia', en: 'Colorado Driver Handbook · Warning signs' }
  },
  {
    id: 1050, category: 'signals',
    question: {
      es: 'Una "X" amarilla intermitente sobre un carril significa:',
      en: 'A flashing yellow "X" over a lane means:'
    },
    options: [
      { es: 'Carril cerrado completamente', en: 'Lane completely closed' },
      { es: 'Carril central de doble sentido para giros, o cambio de uso del carril; precaución', en: 'Center two-way left-turn lane, or changing lane use; proceed with caution' },
      { es: 'Sólo motocicletas', en: 'Motorcycles only' },
      { es: 'Sólo vehículos de emergencia', en: 'Emergency vehicles only' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'X amarilla intermitente: el carril cambiará de uso o es de giro central. Salga del carril cuando sea seguro.',
      en: 'Flashing yellow X: lane use is about to change or is a center turn lane. Move out of the lane when safe.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Carriles reversibles', en: 'Colorado Driver Handbook · Reversible lanes' }
  },

  /* ===== ESCENARIOS DE TRÁFICO ===== */
  {
    id: 1051, category: 'passing',
    question: {
      es: 'En una vía de dos carriles, intenta rebasar a un camión cargado. La distancia mínima visible al frente debe ser de aproximadamente:',
      en: 'On a two-lane road you intend to pass a loaded truck. The minimum visibility ahead should be approximately:'
    },
    options: [
      { es: '100 pies', en: '100 feet' },
      { es: '500 pies', en: '500 feet' },
      { es: '1,000 pies (cerca de 1/5 de milla)', en: '1,000 feet (about 1/5 mile)' },
      { es: 'No importa la distancia', en: 'Distance doesn\'t matter' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'Necesita al menos 1,000 pies (alrededor de 1/5 de milla) libres en sentido contrario para rebasar a un camión con seguridad a velocidad de autopista.',
      en: 'You need at least 1,000 feet (about 1/5 mile) clear in the oncoming lane to safely pass a truck at highway speed.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Adelantamiento', en: 'Colorado Driver Handbook · Passing' }
  },
  {
    id: 1052, category: 'passing',
    question: {
      es: 'En una vía rural con doble línea amarilla sólida, puede cruzar para rebasar a un ciclista bajo qué condición:',
      en: 'On a rural road with double solid yellow lines, you may cross to pass a bicyclist when:'
    },
    options: [
      { es: 'Nunca, las líneas dobles prohíben absolutamente cruzar', en: 'Never; double solid lines absolutely prohibit crossing' },
      { es: 'Sólo cuando es seguro y se necesita para mantener la distancia mínima de 3 pies de la bicicleta', en: 'Only when safe and needed to maintain the 3-ft minimum from the bicycle' },
      { es: 'En cualquier momento', en: 'Anytime' },
      { es: 'Solamente si la bicicleta consiente', en: 'Only with the cyclist\'s consent' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'CRS 42-4-1003 permite cruzar la doble línea amarilla para rebasar a un ciclista respetando los 3 pies mínimos, siempre que el carril opuesto esté despejado.',
      en: 'CRS 42-4-1003 allows crossing the double yellow line to pass a cyclist while keeping the 3-ft minimum, only if the oncoming lane is clear.'
    },
    sourceReference: { es: 'CRS 42-4-1003(1)(b)', en: 'CRS 42-4-1003(1)(b)' }
  },
  {
    id: 1053, category: 'pedestrians',
    question: {
      es: 'Bajo el "Safety Stop" de Colorado (HB 22-1028), un ciclista de 16 años puede tratar una luz roja como:',
      en: 'Under Colorado\'s "Safety Stop" (HB 22-1028), a 16-year-old cyclist may treat a red light as:'
    },
    options: [
      { es: 'Una luz verde', en: 'A green light' },
      { es: 'Una señal de PARE: detenerse completamente y proceder cuando sea seguro', en: 'A STOP sign: come to a full stop and proceed when safe' },
      { es: 'Una luz amarilla intermitente', en: 'A flashing yellow' },
      { es: 'Ignorarla', en: 'Ignored' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Ciclistas ≥15 años pueden tratar un PARE como ceda y un rojo como PARE (detenerse y avanzar si está libre). Las normas del peatón se respetan siempre.',
      en: 'Cyclists 15+ may treat a STOP as a yield, and a red light as a STOP (stop and proceed when clear). Pedestrian rights always apply.'
    },
    sourceReference: { es: 'CRS 42-4-1412.5', en: 'CRS 42-4-1412.5' }
  },

  /* ===== ANIMALES, OBSTÁCULOS, CONDICIONES ESPECIALES ===== */
  {
    id: 1054, category: 'winter',
    question: {
      es: 'Si pierde el control en hielo y se dirige hacia un objeto fijo (por ejemplo un poste), la mejor acción es:',
      en: 'If you lose control on ice heading toward a fixed object (like a pole), the best action is:'
    },
    options: [
      { es: 'Cerrar los ojos', en: 'Close your eyes' },
      { es: 'Dirigirse hacia algo que ceda (arbustos, banco de nieve) y soltar el acelerador, sin frenar bruscamente', en: 'Steer toward something that yields (bushes, snow bank) and release the gas without hard braking' },
      { es: 'Acelerar', en: 'Accelerate' },
      { es: 'Saltar del auto', en: 'Jump out of the car' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Es preferible chocar contra algo blando que contra un objeto fijo. Suelte el acelerador y dirija el auto a una zona que pueda absorber el impacto.',
      en: 'Hitting something soft beats hitting a fixed object. Release the gas and steer toward something that will absorb the impact.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Emergencias', en: 'Colorado Driver Handbook · Emergencies' }
  },
  {
    id: 1055, category: 'winter',
    question: {
      es: 'En una bajada con nieve compactada, ¿cuál combinación es mejor para mantener tracción?',
      en: 'On a snow-packed downhill, which combination best maintains traction?'
    },
    options: [
      { es: 'Marcha alta, freno suave constante', en: 'High gear, constant light braking' },
      { es: 'Marcha baja, frenado motor, evitar frenadas continuas', en: 'Low gear, engine braking, avoid continuous braking' },
      { es: 'Punto muerto y embrague', en: 'Neutral and clutch' },
      { es: 'Marcha alta y embrague pisado', en: 'High gear and clutch in' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Use una marcha baja para que el motor frene en lugar de las pastillas; el frenado continuo recalienta y reduce la tracción.',
      en: 'Use a low gear so the engine slows the vehicle instead of the pads; continuous braking overheats them and reduces traction.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Manejo en montaña', en: 'Colorado Driver Handbook · Mountain driving' }
  },
  {
    id: 1056, category: 'general',
    question: {
      es: 'Está en una vía de dos carriles cuando aparece un alce (moose) cruzando. La acción más segura es:',
      en: 'On a two-lane road, a moose appears crossing. The safest action is:'
    },
    options: [
      { es: 'Acelerar para pasar antes', en: 'Speed up to pass first' },
      { es: 'Frenar firme manteniendo el carril; nunca virar bruscamente', en: 'Brake firmly in your lane; never swerve sharply' },
      { es: 'Apartarse al acotamiento opuesto', en: 'Swerve into the opposing shoulder' },
      { es: 'Tocar el claxon repetidamente', en: 'Honk repeatedly' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Los alces son altos: virar a alta velocidad provoca volcaduras. Frene manteniendo el carril. Si choca, intente que el animal pase por arriba del frente y no por el parabrisas.',
      en: 'Moose are tall; swerving at speed causes rollovers. Brake in your lane. If impact is unavoidable, aim so the animal goes over the front, not through the windshield.'
    },
    sourceReference: { es: 'CDOT · Wildlife Safety', en: 'CDOT · Wildlife Safety' }
  },

  /* ===== MAS ESCENARIOS ===== */
  {
    id: 1057, category: 'emergency',
    question: {
      es: 'En un accidente sin lesionados pero con daño superior a $1,000, el reporte oficial debe presentarse al Colorado Department of Revenue en cuántos días:',
      en: 'In a crash with no injuries but property damage over $1,000, the official report must be filed with the Colorado DOR within how many days:'
    },
    options: [
      { es: '5 días', en: '5 days' },
      { es: '10 días', en: '10 days' },
      { es: '30 días', en: '30 days' },
      { es: 'Inmediatamente', en: 'Immediately' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'Si no acude un oficial al lugar del accidente, el conductor tiene 10 días para presentar un reporte. Sin embargo, la regla general administrativa establece presentarlo lo antes posible, dentro de 30 días.',
      en: 'If no officer comes to the scene, the driver has 10 days to file a report. Administratively, file as soon as possible, within 30 days.'
    },
    sourceReference: { es: 'CRS 42-4-1606', en: 'CRS 42-4-1606' }
  },
  {
    id: 1058, category: 'emergency',
    question: {
      es: 'Si hay una persona inconsciente atrapada en un vehículo accidentado, lo más seguro es:',
      en: 'If a person is unconscious and trapped in a crashed vehicle, the safest action is:'
    },
    options: [
      { es: 'Sacarla inmediatamente del auto', en: 'Pull them out immediately' },
      { es: 'No moverla salvo riesgo inminente (fuego), llamar al 911 y esperar profesionales', en: 'Do not move them unless imminent risk (fire), call 911 and wait for professionals' },
      { es: 'Levantarla y darle agua', en: 'Lift them and give water' },
      { es: 'Cerrar las puertas y esperar', en: 'Close the doors and wait' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Movimiento incorrecto puede agravar lesiones espinales. Sólo extraer si hay peligro inminente (fuego, sumergimiento).',
      en: 'Improper movement can worsen spinal injuries. Only extract if there\'s imminent danger (fire, submersion).'
    },
    sourceReference: { es: 'Red Cross / CO First Aid', en: 'Red Cross / CO First Aid' }
  },
  {
    id: 1059, category: 'general',
    question: {
      es: 'Para girar a la izquierda en un cruce ferroviario sin barreras pero con señales de PARE, debe:',
      en: 'To make a left turn across a railroad crossing without gates but with STOP signs, you must:'
    },
    options: [
      { es: 'Detenerse, mirar y escuchar; comenzar a cruzar sólo cuando ambos sentidos estén libres', en: 'Stop, look and listen; cross only when both directions are clear' },
      { es: 'Cruzar rápido sin parar', en: 'Cross fast without stopping' },
      { es: 'Sólo mirar a la izquierda', en: 'Only look left' },
      { es: 'Esperar a que pase un tren', en: 'Wait for a train to pass' }
    ],
    correctAnswer: 0,
    explanation: {
      es: 'En todo cruce ferroviario, baje volumen, abra ventana, mire en ambos sentidos y escuche. Sólo cruce cuando esté seguro de que no se aproxima ningún tren.',
      en: 'At every railroad crossing, lower the volume, open a window, look both ways and listen. Cross only when sure no train is coming.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Cruces ferroviarios', en: 'Colorado Driver Handbook · Railroad crossings' }
  },

  /* ===== TRANSPORTE PÚBLICO / RTD / BUS ===== */
  {
    id: 1060, category: 'rightOfWay',
    question: {
      es: 'Bus RTD en su parada con direccional encendida lista para salir. Usted se aproxima en el mismo sentido por el carril adyacente. La regla en Colorado es:',
      en: 'An RTD bus at its stop with the turn signal on, ready to merge. You\'re approaching in the same direction in the adjacent lane. The Colorado rule is:'
    },
    options: [
      { es: 'Mantenerse a la velocidad y no ceder', en: 'Maintain speed and don\'t yield' },
      { es: 'Reducir y permitir que el bus se incorpore cuando sea seguro', en: 'Slow down and allow the bus to merge when safe' },
      { es: 'Tocar el claxon', en: 'Honk' },
      { es: 'Acelerar para pasar antes', en: 'Speed up to pass first' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'CRS 42-4-707 obliga a ceder el paso a un bus público que sale de una parada con direccional encendida, siempre que sea seguro.',
      en: 'CRS 42-4-707 requires yielding to a public transit bus pulling away from a stop with its signal on, when safe.'
    },
    sourceReference: { es: 'CRS 42-4-707', en: 'CRS 42-4-707' }
  },

  /* ===== MEDIDAS LEGALES Y PERMISO ===== */
  {
    id: 1061, category: 'documents',
    question: {
      es: 'Después de mudarse dentro de Colorado, ¿cuánto tiempo tiene para actualizar la dirección de su licencia?',
      en: 'After moving within Colorado, how long do you have to update your license address?'
    },
    options: [
      { es: '7 días', en: '7 days' },
      { es: '30 días', en: '30 days' },
      { es: '60 días', en: '60 days' },
      { es: '1 año', en: '1 year' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'CRS 42-2-119 obliga a notificar cambios de domicilio al DMV dentro de 30 días. La actualización puede hacerse en línea.',
      en: 'CRS 42-2-119 requires notifying the DMV of address changes within 30 days. The update can be made online.'
    },
    sourceReference: { es: 'CRS 42-2-119', en: 'CRS 42-2-119' }
  },
  {
    id: 1062, category: 'documents',
    question: {
      es: 'Una persona que se muda a Colorado desde otro estado debe transferir su licencia en cuántos días después de establecer residencia:',
      en: 'Someone moving to Colorado from another state must transfer their license within how many days of establishing residency:'
    },
    options: [
      { es: '7 días', en: '7 days' },
      { es: '30 días', en: '30 days' },
      { es: '90 días', en: '90 days' },
      { es: '1 año', en: '1 year' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Tras establecer residencia (dirección permanente, empleo o registro electoral) se cuentan 30 días para tramitar la licencia y la placa de Colorado.',
      en: 'After establishing residency (permanent address, employment or voter registration), you have 30 days to get a Colorado license and plates.'
    },
    sourceReference: { es: 'CRS 42-2-101', en: 'CRS 42-2-101' }
  },

  /* ===== MAS HIPOTÉTICOS COMPLEJOS ===== */
  {
    id: 1063, category: 'rightOfWay',
    question: {
      es: 'En una intersección con luz verde, ve un ambulancia con sirenas avanzando perpendicularmente con luz roja. ¿Qué hace?',
      en: 'You have a green light at an intersection. An ambulance with sirens advances perpendicular to you running its red light. What do you do?'
    },
    options: [
      { es: 'Acelerar para cruzar antes', en: 'Speed up to cross first' },
      { es: 'Detenerse en su carril si no puede salir despejando con seguridad; ceder paso al vehículo de emergencia', en: 'Stop in your lane if you cannot clear safely; yield to the emergency vehicle' },
      { es: 'Continuar con la luz verde sin importar', en: 'Continue with the green regardless' },
      { es: 'Cambiar de carril abruptamente', en: 'Sharply change lanes' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Aunque tenga verde, debe ceder a vehículos de emergencia. Detenga el avance o despeje la intersección a la derecha si ya entró.',
      en: 'Even with a green light, you must yield to emergency vehicles. Stop or clear to the right if already in the intersection.'
    },
    sourceReference: { es: 'CRS 42-4-705', en: 'CRS 42-4-705' }
  },
  {
    id: 1064, category: 'speed',
    question: {
      es: 'Conducir 21 mph sobre el límite acumula cuántos puntos en la licencia:',
      en: 'Driving 21 mph over the limit adds how many license points:'
    },
    options: [
      { es: '2 puntos', en: '2 points' },
      { es: '4 puntos', en: '4 points' },
      { es: '6 puntos', en: '6 points' },
      { es: '12 puntos', en: '12 points' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'Tabla de puntos: 5-9 = 1, 10-19 = 4, 20-39 = 6, 40+ = 12. 21 sobre el límite cae en 20-39.',
      en: 'Points table: 5-9 = 1, 10-19 = 4, 20-39 = 6, 40+ = 12. 21 over falls in the 20-39 bracket.'
    },
    sourceReference: { es: 'CRS 42-2-127', en: 'CRS 42-2-127' }
  },
  {
    id: 1065, category: 'speed',
    question: {
      es: 'Conducir 41 mph sobre el límite (por ejemplo 95 mph en zona de 55 mph) constituye:',
      en: 'Driving 41 mph over the limit (e.g., 95 mph in a 55-mph zone) constitutes:'
    },
    options: [
      { es: 'Infracción simple de velocidad', en: 'Simple speeding ticket' },
      { es: 'Conducción imprudente (reckless driving) o speed contest, con 12 puntos y posible cárcel', en: 'Reckless driving or speed contest, with 12 points and possible jail' },
      { es: 'Sólo advertencia', en: 'Just a warning' },
      { es: 'Multa fija de $50', en: 'Flat $50 fine' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Más de 25 mph sobre límite ya califica como conducción imprudente. A 41+ es casi seguro reckless o exhibition driving — 12 puntos y posible jail.',
      en: 'More than 25 mph over already qualifies as reckless. At 41+ it is almost certainly reckless or exhibition driving — 12 points and possible jail.'
    },
    sourceReference: { es: 'CRS 42-4-1101 / 42-4-1401', en: 'CRS 42-4-1101 / 42-4-1401' }
  },

  /* ===== SEÑALES / DIRECCIONES ===== */
  {
    id: 1066, category: 'signs',
    question: {
      es: 'Una señal verde rectangular grande con números blancos como "I-25 NORTH" indica:',
      en: 'A large green rectangular sign with white numbers like "I-25 NORTH" indicates:'
    },
    options: [
      { es: 'Una zona escolar', en: 'A school zone' },
      { es: 'Una ruta específica y su dirección', en: 'A specific route and its direction' },
      { es: 'Un cruce ferroviario', en: 'A railroad crossing' },
      { es: 'Velocidad máxima', en: 'Maximum speed' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Las señales verdes son de guía/dirección: número de carretera, dirección, distancias y destinos.',
      en: 'Green signs are guide/direction signs: route number, direction, distances, and destinations.'
    },
    sourceReference: { es: 'MUTCD / Manual del Conductor', en: 'MUTCD / Driver Handbook' }
  },
  {
    id: 1067, category: 'signs',
    question: {
      es: 'En el oeste de Colorado verá señales que muestran un pictograma de avalancha. Estas indican:',
      en: 'Western Colorado has signs showing an avalanche pictogram. These indicate:'
    },
    options: [
      { es: 'Zona donde no se debe detener el vehículo y mantener velocidad', en: 'Zone where you must not stop and must maintain speed' },
      { es: 'Carretera cerrada', en: 'Road closed' },
      { es: 'Estacionamiento permitido', en: 'Parking allowed' },
      { es: 'Zona de fotografía', en: 'Photography zone' }
    ],
    correctAnswer: 0,
    explanation: {
      es: 'Las señales advierten zona de avalancha: no se detenga, no se estacione, mantenga su velocidad y aléjese lo antes posible.',
      en: 'These warn of avalanche zones: do not stop, do not park, maintain speed and clear the area as fast as possible.'
    },
    sourceReference: { es: 'CDOT · Avalanche Safety', en: 'CDOT · Avalanche Safety' }
  },

  /* ===== CAR SEATS / NIÑOS DETALLE ===== */
  {
    id: 1068, category: 'general',
    question: {
      es: 'Un niño de 2 años debe viajar en un asiento de seguridad:',
      en: 'A 2-year-old child must travel in a safety seat that is:'
    },
    options: [
      { es: 'Mirando hacia adelante en el asiento delantero', en: 'Forward-facing in the front seat' },
      { es: 'Mirando hacia atrás hasta los 2 años o el límite del fabricante; preferentemente en asiento trasero', en: 'Rear-facing until age 2 or manufacturer\'s limit; preferably in the back seat' },
      { es: 'Cinturón estándar en cualquier asiento', en: 'Standard seat belt in any seat' },
      { es: 'Sin restricción especial', en: 'No special restraint' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'En Colorado, niños menores de 1 año (o ≤20 lb) deben ir mirando atrás. La AAP recomienda mirar atrás hasta los 2 años o lo que el fabricante permita.',
      en: 'In Colorado, children under 1 (or ≤20 lb) must face rearward. AAP recommends rear-facing until 2 or the seat\'s maximum.'
    },
    sourceReference: { es: 'CRS 42-4-236', en: 'CRS 42-4-236' }
  },
  {
    id: 1069, category: 'general',
    question: {
      es: 'Un niño de 7 años que pesa 65 lb debe viajar:',
      en: 'A 7-year-old child weighing 65 lb must travel in:'
    },
    options: [
      { es: 'Sólo con cinturón de seguridad estándar', en: 'Standard seat belt only' },
      { es: 'Asiento elevador (booster) con cinturón de tres puntos hasta los 8 años o 4\'9"', en: 'Booster seat with three-point seat belt until age 8 or 4\'9"' },
      { es: 'En el regazo de un adulto', en: 'On an adult\'s lap' },
      { es: 'Sin restricciones', en: 'No restrictions' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Niños de 4-7 años (o que aún no llegan a 4 pies 9 pulgadas) deben usar booster con cinturón de tres puntos.',
      en: 'Children 4-7 (or under 4\'9") must use a booster seat with a three-point belt.'
    },
    sourceReference: { es: 'CRS 42-4-236', en: 'CRS 42-4-236' }
  },

  /* ===== COMPARTIR CON CAMIONES Y BLIND SPOTS ===== */
  {
    id: 1070, category: 'following',
    question: {
      es: 'En un tractocamión (18 wheeler) la zona ciega más grande está:',
      en: 'On a tractor-trailer (18-wheeler), the largest blind spot is:'
    },
    options: [
      { es: 'Justo en frente', en: 'Directly in front' },
      { es: 'Al lado derecho, hasta varios carriles atrás', en: 'On the right side, extending several lanes back' },
      { es: 'Inmediatamente detrás de las ruedas delanteras', en: 'Right behind the front wheels' },
      { es: 'No hay zona ciega', en: 'There is no blind spot' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'El "no-zone" más grande es la derecha del trailer — el conductor no lo ve aunque tenga espejos. También hay zonas ciegas en frente, atrás e izquierda.',
      en: 'The largest "no-zone" is the right side of the trailer — invisible even with mirrors. There are also blind spots in front, behind and on the left.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Camiones', en: 'Colorado Driver Handbook · Trucks' }
  },
  {
    id: 1071, category: 'following',
    question: {
      es: 'Un camión grande necesita aproximadamente cuántos pies para detenerse completamente desde 65 mph en pavimento seco:',
      en: 'A large truck needs approximately how many feet to come to a complete stop from 65 mph on dry pavement:'
    },
    options: [
      { es: '100 pies', en: '100 feet' },
      { es: '200 pies', en: '200 feet' },
      { es: '400 pies', en: '400 feet' },
      { es: 'Más de 525 pies (casi 2 campos de fútbol)', en: 'Over 525 feet (almost 2 football fields)' }
    ],
    correctAnswer: 3,
    explanation: {
      es: 'A 65 mph un tractor-remolque cargado necesita más de 525 pies para detenerse. Por eso no se les debe cortar el paso.',
      en: 'At 65 mph a loaded tractor-trailer needs over 525 feet to stop. That\'s why you must never cut in front of one.'
    },
    sourceReference: { es: 'FMCSA · Stopping Distances', en: 'FMCSA · Stopping Distances' }
  },

  /* ===== CONDICIONES ATMOSFÉRICAS Y SALUD ===== */
  {
    id: 1072, category: 'general',
    question: {
      es: 'Conducir somnoliento puede ser tan peligroso como con BAC de aproximadamente:',
      en: 'Driving while drowsy can be as dangerous as driving with a BAC of about:'
    },
    options: [
      { es: '0.02', en: '0.02' },
      { es: '0.05', en: '0.05' },
      { es: '0.08', en: '0.08' },
      { es: '0.15', en: '0.15' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'Estudios (CDC, NHTSA) muestran que 18+ horas sin dormir equivale a BAC ≈ 0.05, y 24 horas a BAC ≈ 0.10. Estar somnoliento se compara con DUI.',
      en: 'Studies (CDC, NHTSA) show 18+ hours awake ≈ 0.05 BAC, 24 hours ≈ 0.10 BAC. Drowsy driving is comparable to DUI.'
    },
    sourceReference: { es: 'NHTSA / CDC · Drowsy Driving', en: 'NHTSA / CDC · Drowsy Driving' }
  },
  {
    id: 1073, category: 'general',
    question: {
      es: 'Si está tomando un medicamento de venta libre con advertencia "puede causar somnolencia", la regla más segura es:',
      en: 'If you\'re taking an OTC medication labeled "may cause drowsiness," the safest rule is:'
    },
    options: [
      { es: 'Tomar doble dosis para que pase rápido', en: 'Take a double dose to get it over with' },
      { es: 'No conducir; pedir transporte alterno', en: 'Do not drive; arrange alternate transport' },
      { es: 'Conducir igual; los OTC no afectan', en: 'Drive anyway; OTC won\'t affect you' },
      { es: 'Tomar café antes', en: 'Drink coffee first' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Medicamentos OTC con advertencia pueden causar DUI si afectan su capacidad. No conduzca; use taxi/rideshare o pase la dosis a la noche.',
      en: 'OTC drugs with that warning can lead to DUI if they impair you. Do not drive; use taxi/rideshare or take the dose at bedtime.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Medicamentos', en: 'Colorado Driver Handbook · Medications' }
  },

  /* ===== MAS DETALLES DE TRÁFICO ===== */
  {
    id: 1074, category: 'highway',
    question: {
      es: 'En un carril HOV 2+ de Colorado, ¿cuál combinación es válida para circular en él?',
      en: 'In a Colorado HOV 2+ lane, which combination is valid to use it?'
    },
    options: [
      { es: 'Un conductor solo en su vehículo', en: 'A solo driver in their vehicle' },
      { es: 'Un conductor con un pasajero (o más), motocicletas, o vehículos eléctricos aprobados con pase', en: 'A driver with one (or more) passenger, motorcycles, or approved electric vehicles with a pass' },
      { es: 'Cualquier vehículo en cualquier momento', en: 'Any vehicle anytime' },
      { es: 'Sólo vehículos de emergencia', en: 'Emergency vehicles only' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'HOV 2+: dos o más ocupantes, motocicletas, vehículos eléctricos certificados con pase. Algunos carriles permiten un solo conductor pagando peaje.',
      en: 'HOV 2+: two or more occupants, motorcycles, certified EVs with pass. Some lanes allow solo drivers if they pay toll.'
    },
    sourceReference: { es: 'CDOT · HOV Rules', en: 'CDOT · HOV Rules' }
  },
  {
    id: 1075, category: 'highway',
    question: {
      es: 'En carreteras de Colorado, los camiones cargados con materiales peligrosos (HazMat) están obligados a detenerse antes de cruzar:',
      en: 'On Colorado roads, trucks loaded with hazardous materials must stop before crossing:'
    },
    options: [
      { es: 'Cualquier intersección', en: 'Any intersection' },
      { es: 'Cruces ferroviarios sin barreras, incluso si no hay tren cerca', en: 'Railroad crossings without gates, even if no train is near' },
      { es: 'Sólo si hay luces rojas activadas', en: 'Only if red lights are activated' },
      { es: 'No tienen obligación de detenerse', en: 'They have no duty to stop' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Federal y estatalmente, camiones HazMat deben detenerse entre 15 y 50 pies antes del riel más cercano, mirar y escuchar, antes de cruzar.',
      en: 'Federal and state law: HazMat trucks must stop between 15 and 50 feet before the nearest rail, look and listen, before crossing.'
    },
    sourceReference: { es: '49 CFR 392.10 / Manual', en: '49 CFR 392.10 / Manual' }
  },
  {
    id: 1076, category: 'rightOfWay',
    question: {
      es: 'En una rotonda con dos carriles, va a tomar la primera salida (giro a la derecha). ¿Qué carril debe usar?',
      en: 'In a two-lane roundabout, you plan to take the first exit (right turn). Which lane should you use?'
    },
    options: [
      { es: 'Carril interior', en: 'Inner lane' },
      { es: 'Carril exterior (derecho)', en: 'Outer lane (right)' },
      { es: 'No importa', en: 'Doesn\'t matter' },
      { es: 'Acotamiento', en: 'Shoulder' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Para la primera salida (giro a la derecha), use el carril exterior. El interior es para giros largos o U-turns.',
      en: 'Use the outer (right) lane for the first exit (right turn). The inner lane is for longer turns or U-turns.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Rotondas', en: 'Colorado Driver Handbook · Roundabouts' }
  },

  /* ===== SEÑALES MANUALES / COMUNICACIÓN ===== */
  {
    id: 1077, category: 'general',
    question: {
      es: 'Su luz direccional izquierda falla en plena autopista y va a salir por la próxima rampa a la izquierda. ¿Qué señal manual hace?',
      en: 'Your left turn signal fails on the highway and you plan to exit via the next left ramp. Which hand signal do you use?'
    },
    options: [
      { es: 'Brazo doblado hacia arriba 90°', en: 'Arm bent up at 90°' },
      { es: 'Brazo extendido recto hacia afuera del lado del conductor', en: 'Arm extended straight out the driver-side window' },
      { es: 'Brazo doblado hacia abajo 90°', en: 'Arm bent down at 90°' },
      { es: 'Agitar el brazo', en: 'Wave the arm' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Brazo izquierdo recto fuera de la ventana = giro a la izquierda o cambio a la izquierda.',
      en: 'Left arm straight out the window = left turn or left lane change.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Señales manuales', en: 'Colorado Driver Handbook · Hand signals' }
  },

  /* ===== MAS HIPOTÉTICOS ===== */
  {
    id: 1078, category: 'emergency',
    question: {
      es: 'Aproximación a un semáforo con luz verde, pero ve que un peatón sigue cruzando. La acción correcta es:',
      en: 'Approaching a green light, you see a pedestrian still crossing. The correct action is:'
    },
    options: [
      { es: 'Acelerar y pasar antes del cruce', en: 'Accelerate to pass before the crosswalk' },
      { es: 'Reducir o detenerse hasta que el peatón termine de cruzar; el peatón conserva el derecho de paso', en: 'Slow or stop until the pedestrian finishes; the pedestrian still has right of way' },
      { es: 'Tocar el claxon', en: 'Honk' },
      { es: 'Cambiar de carril sin mirar', en: 'Change lanes without looking' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Aún con luz verde a su favor, el peatón que ya está cruzando tiene la prioridad. Espere hasta que termine.',
      en: 'Even with your green light, a pedestrian already crossing has the right of way. Wait until they finish.'
    },
    sourceReference: { es: 'CRS 42-4-802', en: 'CRS 42-4-802' }
  },
  {
    id: 1079, category: 'rightOfWay',
    question: {
      es: 'En una intersección con señal de "PARE" en su lado y vía principal sin alto, llega un vehículo desde su izquierda a la vía principal. Usted debe:',
      en: 'You face a STOP sign at a T-intersection on the side road; the main road has no stop. A vehicle approaches from the left on the main road. You must:'
    },
    options: [
      { es: 'Detenerse, ceder el paso al vehículo principal y avanzar cuando esté seguro', en: 'Stop, yield to the main road traffic and proceed when safe' },
      { es: 'Pasar primero porque está girando', en: 'Go first because you\'re turning' },
      { es: 'Acelerar para cruzar', en: 'Speed up to cross' },
      { es: 'Tocar el claxon', en: 'Honk' }
    ],
    correctAnswer: 0,
    explanation: {
      es: 'En el lado controlado por PARE siempre cede el paso a la vía principal. Espere a que esté libre y avance.',
      en: 'On the stop-controlled side, always yield to traffic on the main road. Wait until it\'s clear, then proceed.'
    },
    sourceReference: { es: 'CRS 42-4-703', en: 'CRS 42-4-703' }
  },
  {
    id: 1080, category: 'rightOfWay',
    question: {
      es: 'Va a girar a la izquierda en un semáforo con flecha verde fija, pero un peatón comienza a cruzar la calle a la que entra. Usted debe:',
      en: 'You\'re turning left on a steady green arrow when a pedestrian begins crossing the street you\'re entering. You must:'
    },
    options: [
      { es: 'Continuar el giro; la flecha verde da prioridad absoluta', en: 'Continue the turn; the green arrow gives absolute priority' },
      { es: 'Ceder el paso al peatón y luego completar el giro', en: 'Yield to the pedestrian, then complete the turn' },
      { es: 'Tocar el claxon', en: 'Honk' },
      { es: 'Acelerar', en: 'Accelerate' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'La flecha verde da prioridad sobre tráfico vehicular opuesto, no anula los derechos del peatón en el cruce.',
      en: 'A green arrow gives priority vs. opposing vehicles, not over a pedestrian lawfully in the crosswalk.'
    },
    sourceReference: { es: 'CRS 42-4-802', en: 'CRS 42-4-802' }
  },

  /* ===== SEÑALES Y EQUIPO ESPECÍFICOS ===== */
  {
    id: 1081, category: 'signs',
    question: {
      es: 'Una señal triangular naranja-roja reflectante en la parte trasera de un vehículo agrícola advierte que el vehículo no supera:',
      en: 'A reflective orange-red triangle on the rear of a farm vehicle warns the vehicle does not exceed:'
    },
    options: [
      { es: '10 mph', en: '10 mph' },
      { es: '25 mph', en: '25 mph' },
      { es: '35 mph', en: '35 mph' },
      { es: '45 mph', en: '45 mph' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'El "Slow Moving Vehicle" (SMV) emblem indica que el vehículo no supera 25 mph: equipo agrícola, buggies, etc.',
      en: 'The SMV emblem marks a vehicle that doesn\'t exceed 25 mph: farm equipment, buggies, etc.'
    },
    sourceReference: { es: 'CRS 42-4-228', en: 'CRS 42-4-228' }
  },
  {
    id: 1082, category: 'general',
    question: {
      es: 'En Colorado, las cadenas de remolque (chains) en remolques de más de 3,000 lb deben ser:',
      en: 'In Colorado, safety chains on trailers over 3,000 lb must be:'
    },
    options: [
      { es: 'Opcionales', en: 'Optional' },
      { es: 'Dos cadenas cruzadas debajo de la lengua para retener el remolque si se separa', en: 'Two chains crossed under the tongue to retain the trailer if it separates' },
      { es: 'Una cadena simple', en: 'A single chain' },
      { es: 'Necesarias sólo en autopista', en: 'Only needed on highways' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Las cadenas de seguridad se cruzan debajo del enganche para que, si el remolque se desprende, la lengua no caiga al pavimento.',
      en: 'Safety chains are crossed under the hitch so that, if the trailer detaches, the tongue doesn\'t hit the ground.'
    },
    sourceReference: { es: 'CRS 42-4-218', en: 'CRS 42-4-218' }
  },
  {
    id: 1083, category: 'general',
    question: {
      es: 'Su placa trasera debe estar iluminada por la noche con luz blanca y ser legible a una distancia mínima de:',
      en: 'Your rear license plate must be illuminated with white light at night and be readable from at least:'
    },
    options: [
      { es: '10 pies', en: '10 feet' },
      { es: '25 pies', en: '25 feet' },
      { es: '50 pies', en: '50 feet' },
      { es: '100 pies', en: '100 feet' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'La placa debe ser legible a 50 pies. Si la luz de placa está fundida, la infracción es de equipamiento ($75-$100 aprox.).',
      en: 'The plate must be readable at 50 feet. A burned-out plate light is an equipment violation (≈ $75-$100).'
    },
    sourceReference: { es: 'CRS 42-4-204', en: 'CRS 42-4-204' }
  },

  /* ===== CAMIONES, GRÚAS Y ZONAS ===== */
  {
    id: 1084, category: 'highway',
    question: {
      es: 'Bajo la "Move Over Law" de Colorado (ampliada en 2023), debe moverse o reducir cuando pasa junto a:',
      en: 'Under Colorado\'s "Move Over Law" (expanded in 2023), you must move over or slow when passing:'
    },
    options: [
      { es: 'Solo vehículos de policía', en: 'Police vehicles only' },
      { es: 'Vehículos de emergencia, mantenimiento, grúa, asistencia y cualquier vehículo con luces de emergencia o señalización', en: 'Emergency, maintenance, tow, service and any vehicle showing emergency or hazard lights' },
      { es: 'Solo ambulancias', en: 'Ambulances only' },
      { es: 'Cualquier vehículo amarillo', en: 'Any yellow vehicle' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'CRS 42-4-705 fue ampliada: incluye policía, bomberos, ambulancias, grúas, mantenimiento, vehículos civiles con luces de emergencia (intermitentes / flares / triángulo).',
      en: 'CRS 42-4-705 was expanded to include police, fire, ambulance, tow, maintenance, and civilian vehicles displaying hazard lights, flares or a warning triangle.'
    },
    sourceReference: { es: 'CRS 42-4-705 (HB 23-1123)', en: 'CRS 42-4-705 (HB 23-1123)' }
  },

  /* ===== SITUACIONES DE PARQUEO ===== */
  {
    id: 1085, category: 'parking',
    question: {
      es: 'En un estacionamiento privado abierto al público, las reglas de tráfico de Colorado:',
      en: 'In a privately-owned parking lot open to the public, Colorado traffic rules:'
    },
    options: [
      { es: 'No aplican', en: 'Do not apply' },
      { es: 'Aplican igual que en vía pública (DUI, conducción imprudente, etc.)', en: 'Apply the same as on public roads (DUI, reckless driving, etc.)' },
      { es: 'Aplican solo de día', en: 'Apply only during the day' },
      { es: 'Sólo aplican a vehículos comerciales', en: 'Apply only to commercial vehicles' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'En un parking abierto al público, las leyes de tránsito de Colorado se aplican igual: DUI, hit-and-run, conducción imprudente, etc.',
      en: 'In parking lots open to the public, Colorado traffic laws apply equally: DUI, hit-and-run, reckless driving, etc.'
    },
    sourceReference: { es: 'CRS 42-4-104', en: 'CRS 42-4-104' }
  },

  /* ===== MAS COMUNES DE EXAMEN ===== */
  {
    id: 1086, category: 'general',
    question: {
      es: 'En Colorado, la edad mínima legal absoluta para obtener una licencia provisional es:',
      en: 'In Colorado, the absolute minimum legal age for a provisional license is:'
    },
    options: [
      { es: '15 años', en: '15 years' },
      { es: '15 años y 6 meses', en: '15 years 6 months' },
      { es: '16 años', en: '16 years' },
      { es: '17 años', en: '17 years' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'La provisional sólo está disponible a partir de 16 años, después de mantener el permiso de instrucción al menos 12 meses y cumplir 50 horas / 10 nocturnas.',
      en: 'A provisional license is only available at 16, after holding the instruction permit at least 12 months and completing 50 hours / 10 nighttime.'
    },
    sourceReference: { es: 'CRS 42-2-106', en: 'CRS 42-2-106' }
  },
  {
    id: 1087, category: 'general',
    question: {
      es: 'La cantidad estándar de alcohol que define "una bebida" para fines de BAC es:',
      en: 'The standard amount of alcohol that defines "one drink" for BAC purposes is:'
    },
    options: [
      { es: 'Cualquier vaso lleno', en: 'Any full glass' },
      { es: '12 oz de cerveza, 5 oz de vino, o 1.5 oz de licor 80-proof', en: '12 oz beer, 5 oz wine, or 1.5 oz 80-proof liquor' },
      { es: 'Una botella entera de cerveza', en: 'A full bottle of beer' },
      { es: '8 oz de vino', en: '8 oz wine' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Una "bebida estándar" = 12 oz cerveza (5%), 5 oz vino (12%), 1.5 oz licor 80-proof — cada una con ≈ 0.6 oz de etanol puro.',
      en: 'A "standard drink" = 12 oz beer (5%), 5 oz wine (12%), 1.5 oz 80-proof liquor — each ≈ 0.6 oz pure ethanol.'
    },
    sourceReference: { es: 'NIAAA / Manual del Conductor', en: 'NIAAA / Driver Handbook' }
  },
  {
    id: 1088, category: 'general',
    question: {
      es: 'Conducir sin cinturón en Colorado para un adulto se considera infracción:',
      en: 'Driving without a seat belt as an adult in Colorado is considered:'
    },
    options: [
      { es: 'Primaria — la policía puede detenerlo solo por eso', en: 'Primary — police may stop you for that alone' },
      { es: 'Secundaria — solo se multa si lo detienen por otra causa', en: 'Secondary — cited only if stopped for another reason' },
      { es: 'No es infracción', en: 'Not an offense' },
      { es: 'Solo si causa accidente', en: 'Only if it causes a crash' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Para adultos (18+) es ofensa secundaria. Para menores de 16, primaria.',
      en: 'For adults (18+) it\'s a secondary offense. For under-16, primary.'
    },
    sourceReference: { es: 'CRS 42-4-237', en: 'CRS 42-4-237' }
  },
  {
    id: 1089, category: 'general',
    question: {
      es: 'La multa estándar por texteo al volante en Colorado (primera ofensa) es de aproximadamente:',
      en: 'The standard fine for texting while driving in Colorado (first offense) is approximately:'
    },
    options: [
      { es: '$50', en: '$50' },
      { es: '$100', en: '$100' },
      { es: '$300 más puntos en la licencia', en: '$300 plus license points' },
      { es: '$1,000', en: '$1,000' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'La multa por texting and driving en Colorado es $300 más 4 puntos en la licencia (CRS 42-4-239).',
      en: 'The fine for texting and driving in Colorado is $300 plus 4 license points (CRS 42-4-239).'
    },
    sourceReference: { es: 'CRS 42-4-239', en: 'CRS 42-4-239' }
  },
  {
    id: 1090, category: 'speed',
    question: {
      es: 'En carreteras estatales de Colorado de superficie ("surface state highway"), el límite por defecto cuando no hay señalización es:',
      en: 'On a Colorado surface state highway, the default limit when not posted is:'
    },
    options: [
      { es: '45 mph', en: '45 mph' },
      { es: '55 mph', en: '55 mph' },
      { es: '65 mph', en: '65 mph' },
      { es: '75 mph', en: '75 mph' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'Por defecto en una carretera estatal de superficie sin señalización: 65 mph. En interestatales rurales: 75 mph. En vías abiertas estatales: 55 mph.',
      en: 'Default on an unposted surface state highway: 65 mph. Rural interstate: 75 mph. Open state road: 55 mph.'
    },
    sourceReference: { es: 'CRS 42-4-1101(2)', en: 'CRS 42-4-1101(2)' }
  },

  /* ===== MAS COMPLEJOS / EDGE CASES ===== */
  {
    id: 1091, category: 'emergency',
    question: {
      es: 'Está atrapado en una inundación repentina, el agua sube hasta media puerta. Lo correcto es:',
      en: 'You\'re trapped in a flash flood, water reaches halfway up the doors. The correct action is:'
    },
    options: [
      { es: 'Quedarse dentro y esperar ayuda', en: 'Stay inside and wait for help' },
      { es: 'Salir del auto por la ventana hacia un lugar alto antes de que el agua suba más', en: 'Exit through the window to higher ground before water rises further' },
      { es: 'Intentar continuar a través del agua', en: 'Try driving through the water' },
      { es: 'Llamar y permanecer en su asiento', en: 'Call and stay in your seat' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Las puertas no abren contra presión de agua. Bajar la ventana (o romperla) y salir hacia un lugar elevado salva más vidas que quedarse.',
      en: 'Doors can\'t open against water pressure. Open (or break) the window and exit to high ground — that saves the most lives.'
    },
    sourceReference: { es: 'NWS / FEMA · Turn Around Don\'t Drown', en: 'NWS / FEMA · Turn Around Don\'t Drown' }
  },
  {
    id: 1092, category: 'emergency',
    question: {
      es: 'A 65 mph en pavimento húmedo nota que su vehículo empieza a hidroplanear. Hace lo siguiente:',
      en: 'At 65 mph on wet pavement you notice the vehicle hydroplanes. You do the following:'
    },
    options: [
      { es: 'Frenar fuerte', en: 'Brake hard' },
      { es: 'Soltar el acelerador y dirigir recto hasta recuperar tracción', en: 'Release the gas and steer straight until tires regain traction' },
      { es: 'Acelerar', en: 'Accelerate' },
      { es: 'Tirar del freno de mano', en: 'Pull the parking brake' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Quitar pie del acelerador, no frenar bruscamente, mantener la dirección recta y dejar que las llantas vuelvan a contactar el pavimento.',
      en: 'Remove your foot from the gas, do not brake hard, keep the wheel straight and let the tires regain contact with the road.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Hidroplaneo', en: 'Colorado Driver Handbook · Hydroplaning' }
  },

  /* ===== CICLISTAS Y MOTOS ===== */
  {
    id: 1093, category: 'pedestrians',
    question: {
      es: 'Los motociclistas en Colorado pueden practicar "lane splitting" (circular entre carriles entre vehículos):',
      en: 'Motorcyclists in Colorado may practice "lane splitting" (riding between lanes between vehicles):'
    },
    options: [
      { es: 'Sí, en cualquier momento', en: 'Yes, anytime' },
      { es: 'No, está prohibido en Colorado', en: 'No, it is prohibited in Colorado' },
      { es: 'Sólo en tráfico detenido', en: 'Only in stopped traffic' },
      { es: 'Sólo en autopistas', en: 'Only on highways' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Lane splitting es ilegal en Colorado. Sin embargo, en 2024 se permitió "lane filtering": adelantar entre carriles cuando el tráfico está completamente detenido, hasta 15 mph (HB 24-1235).',
      en: 'Lane splitting is illegal in Colorado. However, since 2024, "lane filtering" is allowed when traffic is fully stopped, up to 15 mph (HB 24-1235).'
    },
    sourceReference: { es: 'CRS 42-4-1503 / HB 24-1235', en: 'CRS 42-4-1503 / HB 24-1235' }
  },
  {
    id: 1094, category: 'pedestrians',
    question: {
      es: 'En Colorado, un motociclista mayor de 18 años:',
      en: 'In Colorado, a motorcyclist over 18:'
    },
    options: [
      { es: 'Debe usar casco aprobado por DOT', en: 'Must wear a DOT-approved helmet' },
      { es: 'Puede elegir no usar casco; protección ocular sí es obligatoria', en: 'May choose not to wear a helmet; eye protection is mandatory' },
      { es: 'Debe usar casco solo en autopista', en: 'Must wear a helmet only on highways' },
      { es: 'No tiene restricciones', en: 'Has no requirements' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'Mayores de 18 pueden optar; protección ocular siempre es obligatoria. Para menores de 18 (conductor o pasajero) el casco DOT es obligatorio.',
      en: 'Over-18 riders may choose; eye protection is always required. For under-18 (rider or passenger) DOT helmet is mandatory.'
    },
    sourceReference: { es: 'CRS 42-4-1502', en: 'CRS 42-4-1502' }
  },

  /* ===== CONOCIMIENTOS GENERALES DETALLE ===== */
  {
    id: 1095, category: 'general',
    question: {
      es: 'Si un policía le solicita salir del vehículo durante una detención de tránsito, usted:',
      en: 'If a police officer asks you to exit the vehicle during a traffic stop, you:'
    },
    options: [
      { es: 'Puede negarse', en: 'May refuse' },
      { es: 'Debe obedecer; negarse puede ser delito de obstrucción', en: 'Must comply; refusal can be an obstruction offense' },
      { es: 'Solo si trae abogado', en: 'Only with an attorney present' },
      { es: 'Sólo si tiene CDL', en: 'Only if you hold a CDL' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'La Corte Suprema (Pennsylvania v. Mimms) permite a la policía ordenar al conductor y a los pasajeros que salgan del vehículo. Negarse puede ser obstrucción.',
      en: 'The Supreme Court (Pennsylvania v. Mimms) allows police to order driver and passengers out of the vehicle. Refusal can be obstruction.'
    },
    sourceReference: { es: 'Pennsylvania v. Mimms (US 1977)', en: 'Pennsylvania v. Mimms (US 1977)' }
  },
  {
    id: 1096, category: 'rightOfWay',
    question: {
      es: 'En Colorado, cuando una procesión funeraria está pasando, el comportamiento esperado es:',
      en: 'In Colorado, when a funeral procession is passing, the expected behavior is:'
    },
    options: [
      { es: 'Cruzar entre los vehículos del cortejo', en: 'Cut between the procession vehicles' },
      { es: 'Cederles el paso aunque tenga verde; no romper la línea del cortejo', en: 'Yield even on green; do not break the procession line' },
      { es: 'Acelerar para adelantarlos', en: 'Speed up to pass them' },
      { es: 'Tocar el claxon repetidamente', en: 'Honk repeatedly' }
    ],
    correctAnswer: 1,
    explanation: {
      es: 'La procesión funeraria tiene derecho de paso. No corte entre vehículos del cortejo aunque tenga luz verde.',
      en: 'A funeral procession has the right of way. Do not cut between vehicles even on green.'
    },
    sourceReference: { es: 'CRS 42-4-705 / Costumbre', en: 'CRS 42-4-705 / Custom' }
  },

  /* ===== CONTROL DE VEHÍCULO ===== */
  {
    id: 1097, category: 'following',
    question: {
      es: 'Cuando va en autopista a 75 mph, los espacios de seguridad recomendados (regla de 4 segundos) equivalen aproximadamente a:',
      en: 'On a highway at 75 mph, the recommended 4-second following distance equals approximately:'
    },
    options: [
      { es: '50 pies', en: '50 feet' },
      { es: '150 pies', en: '150 feet' },
      { es: '440 pies (1.5 campos de fútbol americano)', en: '440 feet (about 1.5 football fields)' },
      { es: '1 milla', en: '1 mile' }
    ],
    correctAnswer: 2,
    explanation: {
      es: '75 mph ≈ 110 pies/segundo. 4 segundos ≈ 440 pies, casi 1.5 campos de fútbol americano.',
      en: '75 mph ≈ 110 ft/sec. 4 seconds ≈ 440 ft — about 1.5 football fields.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Distancia', en: 'Colorado Driver Handbook · Following distance' }
  },
  {
    id: 1098, category: 'following',
    question: {
      es: 'En condiciones de neblina densa, la distancia mínima de seguimiento recomendable es:',
      en: 'In dense fog, recommended minimum following distance is:'
    },
    options: [
      { es: '2 segundos', en: '2 seconds' },
      { es: '4 segundos', en: '4 seconds' },
      { es: '6-8 segundos o más', en: '6-8 seconds or more' },
      { es: 'No es necesario aumentar', en: 'No need to increase' }
    ],
    correctAnswer: 2,
    explanation: {
      es: 'En neblina, lluvia, nieve o hielo, doble (o más) su distancia. 6-8 segundos brindan margen para detenerse.',
      en: 'In fog, rain, snow or ice, double (or more) your distance. 6-8 seconds provide stopping margin.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Visibilidad reducida', en: 'Colorado Driver Handbook · Low visibility' }
  },

  /* ===== CASO MUY ESPECÍFICO ===== */
  {
    id: 1099, category: 'documents',
    question: {
      es: 'Su licencia caduca durante un viaje fuera de Colorado. Puede conducir legalmente con la licencia vencida por:',
      en: 'Your license expires during a trip outside Colorado. You may legally drive with the expired license for:'
    },
    options: [
      { es: 'Indefinidamente', en: 'Indefinitely' },
      { es: 'Hasta 30 días después de la expiración para regresar a renovar', en: 'Up to 30 days past expiration to return and renew' },
      { es: 'Sólo 1 día', en: 'Only 1 day' },
      { es: 'No puede conducir si está vencida', en: 'You cannot drive at all if expired' }
    ],
    correctAnswer: 3,
    explanation: {
      es: 'Una licencia vencida no es válida. Si va a viajar y su vencimiento se aproxima, renueve antes (puede hacerlo en línea hasta un año antes).',
      en: 'An expired license is not valid. If your trip approaches expiration, renew before going (you can renew online up to a year early).'
    },
    sourceReference: { es: 'CRS 42-2-118', en: 'CRS 42-2-118' }
  },
  {
    id: 1100, category: 'rightOfWay',
    question: {
      es: 'En una vía pública, dos vehículos de emergencia llegan a la misma intersección desde direcciones diferentes con sirenas. ¿Cuál pasa primero?',
      en: 'On a public road, two emergency vehicles arrive at the same intersection from different directions with sirens. Who proceeds first?'
    },
    options: [
      { es: 'El que llegó primero o el que está a la derecha si llegan simultáneamente', en: 'Whoever arrived first, or the one on the right if simultaneous' },
      { es: 'Ambos pasan al mismo tiempo', en: 'Both proceed at the same time' },
      { es: 'El más grande tiene prioridad', en: 'The bigger one wins' },
      { es: 'El más rápido', en: 'The fastest one' }
    ],
    correctAnswer: 0,
    explanation: {
      es: 'Aunque ambos tienen prioridad sobre el resto del tráfico, entre sí siguen reglas de intersección. Usted, conductor común, debe ceder a ambos.',
      en: 'Although both have priority over other traffic, between themselves they follow normal intersection rules. You, the regular driver, must yield to both.'
    },
    sourceReference: { es: 'Manual del Conductor de Colorado · Vehículos de emergencia', en: 'Colorado Driver Handbook · Emergency vehicles' }
  }

];
