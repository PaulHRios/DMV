/* Internacionalización: ES (default) + EN */
(function (global) {
  'use strict';

  const STRINGS = {
    es: {
      'brand.title': 'Simulador del Examen de Manejo',
      'brand.sub': 'Estado de Colorado · Práctica no oficial',
      'home.badge': 'Examen de práctica',
      'home.title': 'Simulador del Examen de Manejo de Colorado',
      'home.lede': 'Una práctica realista del examen escrito para la licencia de conducir estándar del estado de Colorado. Las preguntas están basadas en el Manual del Conductor oficial e incluyen imágenes de señales reales.',
      'home.noticeStrong': 'Aviso:',
      'home.noticeText': 'Este es un simulador educativo independiente. No es un examen oficial del DMV ni está afiliado al gobierno del estado de Colorado.',
      'home.metaQuestions': 'Preguntas',
      'home.metaPass': 'Aprobación',
      'home.metaBank': 'Banco',
      'home.start': 'Iniciar examen',
      'home.startHard': 'Examen difícil',
      'home.startHardSub': 'Modo difícil · 100 preguntas avanzadas',
      'home.hardConfirm': 'El modo DIFÍCIL incluye preguntas con números exactos, leyes específicas (CRS) y escenarios hipotéticos. La aprobación se eleva a 90%. ¿Continuar?',
      'home.study': 'Modo estudio por categoría',
      'home.footnote': 'Cada examen genera 25 preguntas aleatorias del banco. Para aprobar el examen real del DMV de Colorado se requiere un mínimo del 80%.',
      'home.howTitle': 'Cómo funciona',
      'home.how1': 'Una pregunta por pantalla, con imagen cuando aplica.',
      'home.how2': 'Puedes navegar entre preguntas y marcarlas con bandera.',
      'home.how3': 'No se muestra la respuesta correcta durante el examen.',
      'home.how4': 'Al finalizar verás tu calificación, desglose por categoría y revisión.',
      'home.statsTitle': 'Tu progreso',
      'home.statsTaken': 'Exámenes',
      'home.statsBest': 'Mejor',
      'home.statsAvg': 'Promedio',
      'home.statsPassRate': 'Aprobados',
      'home.statsClear': 'Borrar estadísticas',
      'home.statsClearConfirm': '¿Borrar tu historial de exámenes?',

      'exam.eyebrow': 'Examen escrito · Colorado',
      'exam.eyebrowHard': 'Examen avanzado · Colorado',
      'exam.hardBadge': 'DIFÍCIL',
      'exam.questionLabel': 'Pregunta',
      'exam.of': 'de',
      'exam.prev': 'Anterior',
      'exam.next': 'Siguiente',
      'exam.finish': 'Finalizar examen',
      'exam.cancel': 'Cancelar y volver al inicio',
      'exam.confirmFinish': '¿Estás seguro de finalizar el examen?',
      'exam.unanswered': 'Tienes {n} pregunta(s) sin responder. ¿Finalizar de todos modos?',
      'exam.cancelConfirm': 'Si sales ahora se perderá el progreso del examen. ¿Continuar?',
      'exam.flag': 'Marcar',
      'exam.unflag': 'Marcada',
      'exam.legendCurrent': 'Actual',
      'exam.legendAnswered': 'Respondida',
      'exam.legendFlagged': 'Marcada',

      'results.correct': 'correctas',
      'results.incorrect': 'incorrectas',
      'results.totalQ': 'preguntas',
      'results.pass': 'Aprobado',
      'results.fail': 'No aprobado',
      'results.restart': 'Reiniciar examen',
      'results.reviewToggle': 'Mostrar revisión',
      'results.reviewHide': 'Ocultar revisión',
      'results.home': 'Volver al inicio',
      'results.time': 'Tiempo total: {t}',
      'results.yourAnswer': 'Tu respuesta',
      'results.correctAnswer': 'Respuesta correcta',
      'results.noAnswer': '(sin responder)',
      'results.questionN': 'Pregunta {n}',
      'results.breakdownTitle': 'Desempeño por categoría',
      'results.onlyWrong': 'Mostrar solo respuestas incorrectas',

      'study.title': 'Modo estudio por categoría',
      'study.lede': 'Selecciona una categoría para estudiar. En este modo se muestra la respuesta correcta y la explicación inmediatamente después de responder.',
      'study.questionLabel': 'Pregunta',
      'study.of': 'de',
      'study.prev': 'Anterior',
      'study.next': 'Siguiente',
      'study.exit': 'Cambiar categoría',
      'study.home': 'Volver al inicio',
      'study.correct': '✓ Correcto',
      'study.incorrect': '✗ Incorrecto',
      'study.allCategory': 'Todas las categorías',
      'study.questions': 'preguntas',

      'settings.title': 'Configuración',
      'settings.questions': 'Preguntas por examen',
      'settings.passing': 'Porcentaje mínimo para aprobar',
      'settings.timer': 'Mostrar cronómetro',
      'settings.theme': 'Tema',
      'settings.themeAuto': 'Automático (sistema)',
      'settings.themeLight': 'Claro',
      'settings.themeDark': 'Oscuro',
      'settings.save': 'Guardar',
      'settings.reset': 'Restablecer',

      'footer.text': 'Proyecto educativo independiente · Sin afiliación con el Departamento de Vehículos de Motor de Colorado · Uso bajo tu propia responsabilidad.',

      'cat.signs': 'Señales de tránsito',
      'cat.signals': 'Semáforos y marcas viales',
      'cat.rightOfWay': 'Derecho de paso e intersecciones',
      'cat.speed': 'Límites de velocidad',
      'cat.following': 'Distancia y frenado',
      'cat.alcohol': 'Alcohol y drogas',
      'cat.pedestrians': 'Peatones y ciclistas',
      'cat.schoolBus': 'Buses escolares y zonas escolares',
      'cat.winter': 'Manejo en invierno',
      'cat.highway': 'Autopistas e interestatales',
      'cat.parking': 'Estacionamiento',
      'cat.lights': 'Luces y visibilidad',
      'cat.passing': 'Adelantamiento y carriles',
      'cat.emergency': 'Emergencias y accidentes',
      'cat.documents': 'Documentos, licencia y seguro',
      'cat.general': 'Reglas generales y seguridad',
      'cat.roundabout': 'Rotondas y giros',
    },

    en: {
      'brand.title': 'Driver License Exam Simulator',
      'brand.sub': 'State of Colorado · Unofficial practice',
      'home.badge': 'Practice exam',
      'home.title': 'Colorado Driver License Exam Simulator',
      'home.lede': 'A realistic practice of the written exam for the standard Colorado driver license. Questions are based on the official Driver Handbook and include images of real signs.',
      'home.noticeStrong': 'Notice:',
      'home.noticeText': 'This is an independent educational simulator. It is not an official DMV exam and is not affiliated with the Colorado state government.',
      'home.metaQuestions': 'Questions',
      'home.metaPass': 'Passing',
      'home.metaBank': 'Bank',
      'home.start': 'Start exam',
      'home.startHard': 'Hard exam',
      'home.startHardSub': 'Hard mode · 100 advanced questions',
      'home.hardConfirm': 'HARD mode includes exact numbers, specific statutes (CRS) and hypothetical scenarios. Passing threshold rises to 90%. Continue?',
      'home.study': 'Study by category',
      'home.footnote': 'Each exam generates 25 random questions from the bank. The real Colorado DMV exam requires a minimum of 80% to pass.',
      'home.howTitle': 'How it works',
      'home.how1': 'One question per screen, with image when applicable.',
      'home.how2': 'You can navigate between questions and flag them for review.',
      'home.how3': 'The correct answer is not shown during the exam.',
      'home.how4': 'When finished you will see your score, category breakdown and review.',
      'home.statsTitle': 'Your progress',
      'home.statsTaken': 'Exams',
      'home.statsBest': 'Best',
      'home.statsAvg': 'Average',
      'home.statsPassRate': 'Pass rate',
      'home.statsClear': 'Clear stats',
      'home.statsClearConfirm': 'Clear your exam history?',

      'exam.eyebrow': 'Written exam · Colorado',
      'exam.eyebrowHard': 'Advanced exam · Colorado',
      'exam.hardBadge': 'HARD',
      'exam.questionLabel': 'Question',
      'exam.of': 'of',
      'exam.prev': 'Previous',
      'exam.next': 'Next',
      'exam.finish': 'Finish exam',
      'exam.cancel': 'Cancel and return home',
      'exam.confirmFinish': 'Are you sure you want to finish the exam?',
      'exam.unanswered': 'You have {n} unanswered question(s). Finish anyway?',
      'exam.cancelConfirm': 'If you leave now your exam progress will be lost. Continue?',
      'exam.flag': 'Flag',
      'exam.unflag': 'Flagged',
      'exam.legendCurrent': 'Current',
      'exam.legendAnswered': 'Answered',
      'exam.legendFlagged': 'Flagged',

      'results.correct': 'correct',
      'results.incorrect': 'incorrect',
      'results.totalQ': 'questions',
      'results.pass': 'Passed',
      'results.fail': 'Not passed',
      'results.restart': 'Restart exam',
      'results.reviewToggle': 'Show review',
      'results.reviewHide': 'Hide review',
      'results.home': 'Return home',
      'results.time': 'Total time: {t}',
      'results.yourAnswer': 'Your answer',
      'results.correctAnswer': 'Correct answer',
      'results.noAnswer': '(no answer)',
      'results.questionN': 'Question {n}',
      'results.breakdownTitle': 'Performance by category',
      'results.onlyWrong': 'Show only incorrect answers',

      'study.title': 'Study by category',
      'study.lede': 'Pick a category to study. In this mode the correct answer and explanation appear immediately after you answer.',
      'study.questionLabel': 'Question',
      'study.of': 'of',
      'study.prev': 'Previous',
      'study.next': 'Next',
      'study.exit': 'Change category',
      'study.home': 'Return home',
      'study.correct': '✓ Correct',
      'study.incorrect': '✗ Incorrect',
      'study.allCategory': 'All categories',
      'study.questions': 'questions',

      'settings.title': 'Settings',
      'settings.questions': 'Questions per exam',
      'settings.passing': 'Minimum passing percentage',
      'settings.timer': 'Show timer',
      'settings.theme': 'Theme',
      'settings.themeAuto': 'Automatic (system)',
      'settings.themeLight': 'Light',
      'settings.themeDark': 'Dark',
      'settings.save': 'Save',
      'settings.reset': 'Reset',

      'footer.text': 'Independent educational project · Not affiliated with the Colorado Division of Motor Vehicles · Use at your own discretion.',

      'cat.signs': 'Traffic signs',
      'cat.signals': 'Signals and pavement markings',
      'cat.rightOfWay': 'Right of way and intersections',
      'cat.speed': 'Speed limits',
      'cat.following': 'Following distance and braking',
      'cat.alcohol': 'Alcohol and drugs',
      'cat.pedestrians': 'Pedestrians and cyclists',
      'cat.schoolBus': 'School buses and school zones',
      'cat.winter': 'Winter driving',
      'cat.highway': 'Highways and interstates',
      'cat.parking': 'Parking',
      'cat.lights': 'Headlights and visibility',
      'cat.passing': 'Passing and lane use',
      'cat.emergency': 'Emergencies and crashes',
      'cat.documents': 'License, documents and insurance',
      'cat.general': 'General rules and safety',
      'cat.roundabout': 'Roundabouts and turns',
    },
  };

  const I18N = {
    lang: 'es',
    listeners: [],
    init() {
      const saved = localStorage.getItem('dmv.lang');
      if (saved === 'es' || saved === 'en') this.lang = saved;
      document.documentElement.lang = this.lang;
    },
    setLang(lang) {
      if (lang !== 'es' && lang !== 'en') return;
      this.lang = lang;
      localStorage.setItem('dmv.lang', lang);
      document.documentElement.lang = lang;
      this.applyToDom();
      this.listeners.forEach((fn) => fn(lang));
    },
    onChange(fn) { this.listeners.push(fn); },
    t(key, vars) {
      const dict = STRINGS[this.lang] || STRINGS.es;
      let str = dict[key] || STRINGS.es[key] || key;
      if (vars) {
        Object.keys(vars).forEach((k) => {
          str = str.replace(new RegExp('{' + k + '}', 'g'), vars[k]);
        });
      }
      return str;
    },
    applyToDom() {
      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        el.textContent = this.t(key);
      });
      document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
        const pairs = el.getAttribute('data-i18n-attr').split(';');
        pairs.forEach((pair) => {
          const [attr, key] = pair.split(':').map((s) => s.trim());
          if (attr && key) el.setAttribute(attr, this.t(key));
        });
      });
    },
  };

  global.I18N = I18N;
})(window);
