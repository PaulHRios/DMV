/* ============================================================================
   Simulador del Examen de Manejo de Colorado
   App principal (vanilla JS)
   ============================================================================ */
(function () {
  'use strict';

  /* ---------- Configuración ---------- */

  const CONFIG = {
    QUESTIONS_PER_EXAM: 25,
    PASSING_PERCENT: 80,
  };

  const QUESTIONS = window.QUESTIONS || [];
  const CATEGORIES = window.QUESTION_CATEGORIES || [];

  /* ---------- Utilidades ---------- */

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function sample(arr, n) {
    return shuffle(arr).slice(0, Math.min(n, arr.length));
  }

  function showView(id) {
    $$('.view').forEach((el) => {
      const active = el.id === id;
      el.classList.toggle('view-active', active);
      el.hidden = !active;
    });
    window.scrollTo({ top: 0, behavior: 'instant' });
    const main = document.getElementById('main');
    if (main) main.focus({ preventScroll: true });
  }

  function formatTime(ms) {
    const total = Math.max(0, Math.floor(ms / 1000));
    const m = Math.floor(total / 60);
    const s = total % 60;
    return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  }

  function tCategory(cat) {
    return window.I18N.t('cat.' + cat);
  }

  function optionLetter(i) {
    return String.fromCharCode(65 + i); // A, B, C, D
  }

  /* ---------- Estado ---------- */

  const state = {
    exam: null,    // { questions, optionOrders, answers, index, startedAt, finishedAt }
    study: null,   // { category, questions, answers, index }
  };

  /* ---------- Construcción del examen ---------- */

  function buildExam() {
    const picked = sample(QUESTIONS, CONFIG.QUESTIONS_PER_EXAM);
    const optionOrders = picked.map((q) => shuffle(q.options.map((_, i) => i)));
    return {
      questions: picked,
      optionOrders: optionOrders,
      answers: new Array(picked.length).fill(null), // índice de opción mostrado
      index: 0,
      startedAt: Date.now(),
      finishedAt: null,
    };
  }

  function startExam() {
    state.exam = buildExam();
    renderExam();
    showView('view-exam');
    startTimer();
  }

  /* ---------- Render del examen ---------- */

  function renderExam() {
    const exam = state.exam;
    if (!exam) return;

    const q = exam.questions[exam.index];
    const lang = window.I18N.lang;

    $('#exam-current').textContent = String(exam.index + 1);
    $('#exam-total').textContent = String(exam.questions.length);

    const progress = ((exam.index + 1) / exam.questions.length) * 100;
    const progressBar = $('#exam-progress');
    progressBar.style.width = progress + '%';
    progressBar.parentElement.setAttribute('aria-valuenow', String(Math.round(progress)));

    $('#exam-category').textContent = tCategory(q.category);
    $('#exam-question').textContent = q.question[lang];

    const optionsRoot = $('#exam-options');
    optionsRoot.innerHTML = '';
    const order = exam.optionOrders[exam.index];
    const selected = exam.answers[exam.index]; // display index

    order.forEach((origIdx, displayIdx) => {
      const opt = q.options[origIdx];
      const label = document.createElement('label');
      label.className = 'option' + (selected === displayIdx ? ' is-selected' : '');
      label.innerHTML = '<span class="option-mark">' + optionLetter(displayIdx) + '</span><span class="option-text"></span>';
      label.querySelector('.option-text').textContent = opt[lang];

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'exam-opt';
      input.value = String(displayIdx);
      if (selected === displayIdx) input.checked = true;
      label.appendChild(input);

      label.addEventListener('click', (e) => {
        e.preventDefault();
        exam.answers[exam.index] = displayIdx;
        renderExam();
      });
      optionsRoot.appendChild(label);
    });

    // Botones nav
    $('#btn-prev').disabled = exam.index === 0;
    const isLast = exam.index === exam.questions.length - 1;
    $('#btn-next').hidden = isLast;
    $('#btn-finish').hidden = !isLast;

    renderAnswerGrid();
  }

  function renderAnswerGrid() {
    const exam = state.exam;
    const root = $('#exam-grid');
    root.innerHTML = '';
    exam.questions.forEach((_, i) => {
      const cell = document.createElement('button');
      cell.type = 'button';
      cell.className = 'grid-cell' + (exam.answers[i] !== null ? ' is-answered' : '') + (i === exam.index ? ' is-current' : '');
      cell.textContent = String(i + 1);
      cell.title = 'Pregunta ' + (i + 1);
      cell.addEventListener('click', () => {
        exam.index = i;
        renderExam();
      });
      root.appendChild(cell);
    });
  }

  /* ---------- Temporizador ---------- */

  let timerHandle = null;
  function startTimer() {
    stopTimer();
    const tick = () => {
      if (!state.exam) return;
      const elapsed = Date.now() - state.exam.startedAt;
      $('#exam-timer').textContent = formatTime(elapsed);
    };
    tick();
    timerHandle = setInterval(tick, 1000);
  }
  function stopTimer() {
    if (timerHandle) { clearInterval(timerHandle); timerHandle = null; }
  }

  /* ---------- Finalización del examen ---------- */

  function finishExam(force) {
    const exam = state.exam;
    if (!exam) return;
    const unanswered = exam.answers.filter((a) => a === null).length;
    if (!force && unanswered > 0) {
      const msg = window.I18N.t('exam.unanswered', { n: unanswered });
      if (!window.confirm(msg)) return;
    } else if (!force) {
      if (!window.confirm(window.I18N.t('exam.confirmFinish'))) return;
    }
    exam.finishedAt = Date.now();
    stopTimer();
    renderResults();
    showView('view-results');
  }

  function cancelExam() {
    if (!state.exam) { showView('view-home'); return; }
    if (!window.confirm(window.I18N.t('exam.cancelConfirm'))) return;
    stopTimer();
    state.exam = null;
    showView('view-home');
  }

  /* ---------- Resultados ---------- */

  function computeResults() {
    const exam = state.exam;
    const lang = window.I18N.lang;
    const details = exam.questions.map((q, i) => {
      const displayed = exam.answers[i];
      const order = exam.optionOrders[i];
      const chosenOriginal = displayed !== null ? order[displayed] : null;
      const correct = chosenOriginal === q.correctAnswer;
      const correctDisplay = order.indexOf(q.correctAnswer);
      return {
        question: q,
        order: order,
        chosenDisplay: displayed,
        chosenOriginal: chosenOriginal,
        correctOriginal: q.correctAnswer,
        correctDisplay: correctDisplay,
        correct: correct,
      };
    });
    const correctCount = details.filter((d) => d.correct).length;
    const total = details.length;
    const percent = total === 0 ? 0 : Math.round((correctCount / total) * 100);
    const passed = percent >= CONFIG.PASSING_PERCENT;
    return { details, correctCount, incorrectCount: total - correctCount, total, percent, passed };
  }

  function renderResults() {
    const r = computeResults();
    const lang = window.I18N.lang;
    const banner = $('#result-banner');
    banner.classList.toggle('is-pass', r.passed);
    banner.classList.toggle('is-fail', !r.passed);

    const status = $('#result-status');
    status.textContent = window.I18N.t(r.passed ? 'results.pass' : 'results.fail');
    status.className = 'result-status ' + (r.passed ? 'is-pass' : 'is-fail');

    $('#result-score').textContent = r.percent + '%';
    $('#result-correct').textContent = String(r.correctCount);
    $('#result-incorrect').textContent = String(r.incorrectCount);
    $('#result-total').textContent = String(r.total);

    const totalMs = (state.exam.finishedAt || Date.now()) - state.exam.startedAt;
    $('#result-time').textContent = window.I18N.t('results.time', { t: formatTime(totalMs) });

    // Construir revisión
    const reviewRoot = $('#review');
    reviewRoot.innerHTML = '';
    r.details.forEach((d, i) => {
      const item = document.createElement('div');
      item.className = 'review-item ' + (d.correct ? 'is-correct' : 'is-incorrect');

      const head = document.createElement('div');
      head.className = 'review-head';
      const left = document.createElement('span');
      left.textContent = window.I18N.t('results.questionN', { n: i + 1 }) + ' · ' + tCategory(d.question.category);
      const right = document.createElement('span');
      right.textContent = d.correct ? '✓' : '✗';
      head.appendChild(left); head.appendChild(right);
      item.appendChild(head);

      const q = document.createElement('p');
      q.className = 'review-question';
      q.textContent = d.question.question[lang];
      item.appendChild(q);

      // Tu respuesta
      const yours = document.createElement('p');
      yours.className = 'review-answer';
      const yourLabel = document.createElement('strong');
      yourLabel.textContent = window.I18N.t('results.yourAnswer') + ': ';
      yours.appendChild(yourLabel);
      if (d.chosenOriginal === null) {
        const em = document.createElement('em');
        em.textContent = window.I18N.t('results.noAnswer');
        yours.appendChild(em);
      } else {
        yours.appendChild(document.createTextNode(d.question.options[d.chosenOriginal][lang]));
      }
      item.appendChild(yours);

      // Respuesta correcta
      if (!d.correct) {
        const corr = document.createElement('p');
        corr.className = 'review-answer';
        const corrLabel = document.createElement('strong');
        corrLabel.textContent = window.I18N.t('results.correctAnswer') + ': ';
        corr.appendChild(corrLabel);
        corr.appendChild(document.createTextNode(d.question.options[d.correctOriginal][lang]));
        item.appendChild(corr);
      }

      // Explicación
      const explanation = document.createElement('div');
      explanation.className = 'review-explanation';
      explanation.textContent = d.question.explanation[lang];
      item.appendChild(explanation);

      // Source
      const src = document.createElement('div');
      src.className = 'review-source';
      src.textContent = d.question.sourceReference[lang];
      item.appendChild(src);

      reviewRoot.appendChild(item);
    });
  }

  function toggleReview() {
    const review = $('#review');
    const btn = $('#btn-review-toggle');
    const shown = !review.hidden;
    review.hidden = shown;
    btn.textContent = window.I18N.t(shown ? 'results.reviewToggle' : 'results.reviewHide');
  }

  /* ---------- Modo estudio ---------- */

  function renderStudyCategories() {
    const root = $('#study-categories');
    root.innerHTML = '';
    const all = document.createElement('button');
    all.type = 'button';
    all.className = 'category-card';
    all.innerHTML = '<div class="category-card-title"></div><div class="category-card-count"></div>';
    all.querySelector('.category-card-title').textContent = window.I18N.t('study.allCategory');
    all.querySelector('.category-card-count').textContent = QUESTIONS.length + ' ' + window.I18N.t('study.questions');
    all.addEventListener('click', () => startStudy(null));
    root.appendChild(all);

    CATEGORIES.forEach((cat) => {
      const count = QUESTIONS.filter((q) => q.category === cat).length;
      if (count === 0) return;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'category-card';
      btn.innerHTML = '<div class="category-card-title"></div><div class="category-card-count"></div>';
      btn.querySelector('.category-card-title').textContent = tCategory(cat);
      btn.querySelector('.category-card-count').textContent = count + ' ' + window.I18N.t('study.questions');
      btn.addEventListener('click', () => startStudy(cat));
      root.appendChild(btn);
    });
  }

  function startStudy(category) {
    const pool = category ? QUESTIONS.filter((q) => q.category === category) : QUESTIONS.slice();
    state.study = {
      category: category,
      questions: shuffle(pool),
      optionOrders: pool.map((q) => shuffle(q.options.map((_, i) => i))),
      answers: new Array(pool.length).fill(null),
      index: 0,
    };
    // Re-shuffle orders to match new question order
    state.study.questions.forEach((q, i) => {
      state.study.optionOrders[i] = shuffle(q.options.map((_, j) => j));
    });
    $('#study-card').hidden = false;
    renderStudy();
  }

  function renderStudy() {
    const s = state.study;
    if (!s) return;
    const lang = window.I18N.lang;
    const q = s.questions[s.index];

    $('#study-category').textContent = tCategory(q.category);
    $('#study-current').textContent = String(s.index + 1);
    $('#study-total').textContent = String(s.questions.length);
    $('#study-question').textContent = q.question[lang];

    const optionsRoot = $('#study-options');
    optionsRoot.innerHTML = '';
    const order = s.optionOrders[s.index];
    const selected = s.answers[s.index];
    const answered = selected !== null;

    order.forEach((origIdx, displayIdx) => {
      const opt = q.options[origIdx];
      const label = document.createElement('label');
      const isCorrect = origIdx === q.correctAnswer;
      const isChosen = selected === displayIdx;
      let cls = 'option';
      if (answered) {
        cls += ' is-disabled';
        if (isCorrect) cls += ' is-correct';
        else if (isChosen) cls += ' is-incorrect';
      } else if (isChosen) {
        cls += ' is-selected';
      }
      label.className = cls;
      label.innerHTML = '<span class="option-mark">' + optionLetter(displayIdx) + '</span><span class="option-text"></span>';
      label.querySelector('.option-text').textContent = opt[lang];

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'study-opt';
      input.value = String(displayIdx);
      label.appendChild(input);

      if (!answered) {
        label.addEventListener('click', (e) => {
          e.preventDefault();
          s.answers[s.index] = displayIdx;
          renderStudy();
        });
      } else {
        label.addEventListener('click', (e) => e.preventDefault());
      }
      optionsRoot.appendChild(label);
    });

    const expl = $('#study-explanation');
    if (answered) {
      const chosenOriginal = order[selected];
      const correct = chosenOriginal === q.correctAnswer;
      expl.hidden = false;
      expl.classList.toggle('is-correct', correct);
      expl.classList.toggle('is-incorrect', !correct);
      $('#study-status').textContent = window.I18N.t(correct ? 'study.correct' : 'study.incorrect');
      $('#study-explanation-text').textContent = q.explanation[lang];
      $('#study-source').textContent = q.sourceReference[lang];
    } else {
      expl.hidden = true;
    }

    $('#btn-study-prev').disabled = s.index === 0;
    $('#btn-study-next').disabled = s.index === s.questions.length - 1;
  }

  function exitStudy() {
    state.study = null;
    $('#study-card').hidden = true;
    renderStudyCategories();
  }

  /* ---------- Inicialización y eventos ---------- */

  function bindEvents() {
    // Idioma
    $$('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        window.I18N.setLang(lang);
        $$('.lang-btn').forEach((b) => b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'));
      });
    });

    window.I18N.onChange(() => {
      // Volver a renderizar la vista activa con el nuevo idioma
      if (state.exam && !$('#view-exam').hidden) renderExam();
      if (state.exam && !$('#view-results').hidden) renderResults();
      if (state.study && !$('#view-study').hidden) renderStudy();
      if (!$('#view-study').hidden && !state.study) renderStudyCategories();
      // Botones que cambian texto dinámico
      const reviewBtn = $('#btn-review-toggle');
      if (reviewBtn) reviewBtn.textContent = window.I18N.t($('#review').hidden ? 'results.reviewToggle' : 'results.reviewHide');
    });

    // Home
    $('#btn-start-exam').addEventListener('click', startExam);
    $('#btn-study-mode').addEventListener('click', () => {
      state.study = null;
      $('#study-card').hidden = true;
      renderStudyCategories();
      showView('view-study');
    });

    // Exam
    $('#btn-prev').addEventListener('click', () => {
      if (state.exam.index > 0) { state.exam.index--; renderExam(); }
    });
    $('#btn-next').addEventListener('click', () => {
      if (state.exam.index < state.exam.questions.length - 1) {
        state.exam.index++; renderExam();
      }
    });
    $('#btn-finish').addEventListener('click', () => finishExam(false));
    $('#btn-cancel-exam').addEventListener('click', cancelExam);

    // Results
    $('#btn-restart').addEventListener('click', startExam);
    $('#btn-review-toggle').addEventListener('click', toggleReview);
    $('#btn-home').addEventListener('click', () => {
      state.exam = null;
      showView('view-home');
    });

    // Study
    $('#btn-study-prev').addEventListener('click', () => {
      if (state.study && state.study.index > 0) { state.study.index--; renderStudy(); }
    });
    $('#btn-study-next').addEventListener('click', () => {
      if (state.study && state.study.index < state.study.questions.length - 1) {
        state.study.index++; renderStudy();
      }
    });
    $('#btn-study-exit').addEventListener('click', exitStudy);
    $('#btn-study-home').addEventListener('click', () => showView('view-home'));

    // Teclado en examen
    document.addEventListener('keydown', (e) => {
      if (!$('#view-exam').hidden && state.exam) {
        if (e.key === 'ArrowRight') {
          if (state.exam.index < state.exam.questions.length - 1) { state.exam.index++; renderExam(); }
        } else if (e.key === 'ArrowLeft') {
          if (state.exam.index > 0) { state.exam.index--; renderExam(); }
        } else if (e.key >= '1' && e.key <= '4') {
          const q = state.exam.questions[state.exam.index];
          const idx = parseInt(e.key, 10) - 1;
          if (idx < q.options.length) {
            state.exam.answers[state.exam.index] = idx;
            renderExam();
          }
        }
      } else if (!$('#view-study').hidden && state.study) {
        if (e.key === 'ArrowRight') {
          if (state.study.index < state.study.questions.length - 1) { state.study.index++; renderStudy(); }
        } else if (e.key === 'ArrowLeft') {
          if (state.study.index > 0) { state.study.index--; renderStudy(); }
        }
      }
    });

    // Advertencia al salir con examen en progreso
    window.addEventListener('beforeunload', (e) => {
      if (state.exam && !state.exam.finishedAt) {
        e.preventDefault();
        e.returnValue = '';
      }
    });
  }

  function applyConfigToHome() {
    $('#meta-questions').textContent = String(CONFIG.QUESTIONS_PER_EXAM);
    $('#meta-pass').textContent = CONFIG.PASSING_PERCENT + '%';
    $('#meta-bank').textContent = String(QUESTIONS.length);
  }

  function init() {
    window.I18N.init();
    // Marcar el botón activo de idioma según preferencia guardada
    $$('.lang-btn').forEach((b) => {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === window.I18N.lang ? 'true' : 'false');
    });
    window.I18N.applyToDom();
    applyConfigToHome();
    bindEvents();
    showView('view-home');
  }

  // Exponer config para que pueda ajustarse fácilmente desde la consola.
  window.DMV_CONFIG = CONFIG;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
