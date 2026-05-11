/* ============================================================================
   Simulador del Examen de Manejo de Colorado
   App principal (vanilla JS)

   Funcionalidades:
   - Examen aleatorio con imágenes inline (SVG)
   - Modo estudio por categoría con feedback inmediato
   - Tema claro/oscuro con detección del sistema
   - Estadísticas en localStorage (historial, mejor, promedio, % aprobado)
   - Configuración persistente (preguntas, % aprobación, cronómetro, tema)
   - Banderín para marcar preguntas y revisarlas
   - Desglose de resultados por categoría con barras
   - Filtro "solo incorrectas" en la revisión
   - PWA via manifest.webmanifest + sw.js
   ============================================================================ */
(function () {
  'use strict';

  /* ---------- Configuración default ---------- */

  const DEFAULTS = {
    QUESTIONS_PER_EXAM: 25,
    PASSING_PERCENT: 80,
    SHOW_TIMER: true,
    THEME: 'auto', // auto | light | dark
  };

  const STORAGE = {
    SETTINGS: 'dmv.settings',
    STATS: 'dmv.stats',
    LANG: 'dmv.lang',
    THEME: 'dmv.theme',
  };

  /* ---------- Helpers ---------- */

  const QUESTIONS = window.QUESTIONS || [];
  const CATEGORIES = window.QUESTION_CATEGORIES || [];
  const getIcon = window.getIcon || function () { return null; };

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
  function sample(arr, n) { return shuffle(arr).slice(0, Math.min(n, arr.length)); }

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

  function tCategory(cat) { return window.I18N.t('cat.' + cat); }
  function optionLetter(i) { return String.fromCharCode(65 + i); }

  function clamp(n, min, max) { return Math.min(max, Math.max(min, n)); }

  /* ---------- Configuración persistente ---------- */

  let CONFIG = Object.assign({}, DEFAULTS);

  function loadSettings() {
    try {
      const raw = localStorage.getItem(STORAGE.SETTINGS);
      if (!raw) return;
      const obj = JSON.parse(raw);
      if (typeof obj.QUESTIONS_PER_EXAM === 'number') CONFIG.QUESTIONS_PER_EXAM = clamp(obj.QUESTIONS_PER_EXAM, 5, 50);
      if (typeof obj.PASSING_PERCENT === 'number') CONFIG.PASSING_PERCENT = clamp(obj.PASSING_PERCENT, 50, 100);
      if (typeof obj.SHOW_TIMER === 'boolean') CONFIG.SHOW_TIMER = obj.SHOW_TIMER;
      if (typeof obj.THEME === 'string') CONFIG.THEME = obj.THEME;
    } catch (_) {}
  }

  function saveSettings() {
    try { localStorage.setItem(STORAGE.SETTINGS, JSON.stringify(CONFIG)); } catch (_) {}
  }

  /* ---------- Tema ---------- */

  function applyTheme() {
    const mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : { matches: false };
    let effective = CONFIG.THEME;
    if (effective === 'auto') effective = mq.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', effective);
    const meta = document.getElementById('theme-color-meta');
    if (meta) meta.setAttribute('content', effective === 'dark' ? '#0a1424' : '#0b2545');
  }

  function watchSystemTheme() {
    if (!window.matchMedia) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => { if (CONFIG.THEME === 'auto') applyTheme(); };
    if (mq.addEventListener) mq.addEventListener('change', handler);
    else if (mq.addListener) mq.addListener(handler);
  }

  function cycleTheme() {
    CONFIG.THEME = CONFIG.THEME === 'dark' ? 'light' : CONFIG.THEME === 'light' ? 'auto' : 'dark';
    saveSettings();
    applyTheme();
    syncSettingsUI();
  }

  /* ---------- Estadísticas ---------- */

  function loadStats() {
    try {
      const raw = localStorage.getItem(STORAGE.STATS);
      return raw ? JSON.parse(raw) : { exams: [] };
    } catch (_) { return { exams: [] }; }
  }
  function saveStats(stats) {
    try { localStorage.setItem(STORAGE.STATS, JSON.stringify(stats)); } catch (_) {}
  }
  function recordExam(result) {
    const stats = loadStats();
    stats.exams = stats.exams || [];
    stats.exams.push({
      date: Date.now(),
      total: result.total,
      correct: result.correctCount,
      percent: result.percent,
      passed: result.passed,
      thresholdPercent: CONFIG.PASSING_PERCENT,
      durationMs: result.durationMs,
    });
    if (stats.exams.length > 200) stats.exams = stats.exams.slice(-200);
    saveStats(stats);
  }
  function renderStats() {
    const stats = loadStats();
    const ex = stats.exams || [];
    $('#stat-taken').textContent = String(ex.length);
    if (ex.length === 0) {
      $('#stat-best').textContent = '—';
      $('#stat-avg').textContent = '—';
      $('#stat-passrate').textContent = '—';
      return;
    }
    const best = ex.reduce((m, e) => Math.max(m, e.percent), 0);
    const avg = Math.round(ex.reduce((s, e) => s + e.percent, 0) / ex.length);
    const passed = ex.filter((e) => e.passed).length;
    const passRate = Math.round((passed / ex.length) * 100);
    $('#stat-best').textContent = best + '%';
    $('#stat-avg').textContent = avg + '%';
    $('#stat-passrate').textContent = passRate + '%';
  }

  /* ---------- Estado del examen ---------- */

  const state = {
    exam: null,
    study: null,
    onlyWrong: false,
  };

  function buildExam() {
    const picked = sample(QUESTIONS, CONFIG.QUESTIONS_PER_EXAM);
    return {
      questions: picked,
      optionOrders: picked.map((q) => shuffle(q.options.map((_, i) => i))),
      answers: new Array(picked.length).fill(null),
      flags: new Array(picked.length).fill(false),
      index: 0,
      startedAt: Date.now(),
      finishedAt: null,
    };
  }

  function startExam() {
    state.exam = buildExam();
    state.onlyWrong = false;
    renderExam();
    showView('view-exam');
    startTimer();
  }

  /* ---------- Render del examen ---------- */

  function setImage(container, key) {
    if (!container) return;
    const svg = key ? getIcon(key) : null;
    if (!svg) {
      container.hidden = true;
      container.innerHTML = '';
      return;
    }
    container.hidden = false;
    container.innerHTML = svg;
    // Wide images (lane markings, signal lanes) get a wider class
    const wide = key.indexOf('lane.') === 0 || key === 'signal.laneGreenArrow' || key === 'signal.laneRedX' || key === 'sign.noPassing' || key === 'sign.oneWay' || key === 'sign.guide' || key === 'sign.wrongWay' || key.indexOf('park.') === 0 || key.indexOf('hand.') === 0;
    container.classList.toggle('is-wide', wide);
  }

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
    setImage($('#exam-image'), q.image);
    $('#exam-question').textContent = q.question[lang];

    // Flag button
    const flagBtn = $('#btn-flag');
    const flagged = !!exam.flags[exam.index];
    flagBtn.setAttribute('aria-pressed', flagged ? 'true' : 'false');
    flagBtn.querySelector('.btn-flag-label').textContent = window.I18N.t(flagged ? 'exam.unflag' : 'exam.flag');

    // Options
    const optionsRoot = $('#exam-options');
    optionsRoot.innerHTML = '';
    const order = exam.optionOrders[exam.index];
    const selected = exam.answers[exam.index];

    order.forEach((origIdx, displayIdx) => {
      const opt = q.options[origIdx];
      const label = document.createElement('label');
      label.className = 'option' + (selected === displayIdx ? ' is-selected' : '');
      const mark = document.createElement('span');
      mark.className = 'option-mark';
      mark.textContent = optionLetter(displayIdx);
      const text = document.createElement('span');
      text.className = 'option-text';
      text.textContent = opt[lang];
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'exam-opt';
      input.value = String(displayIdx);
      if (selected === displayIdx) input.checked = true;
      label.appendChild(mark); label.appendChild(text); label.appendChild(input);
      label.addEventListener('click', (e) => {
        e.preventDefault();
        exam.answers[exam.index] = displayIdx;
        renderExam();
      });
      optionsRoot.appendChild(label);
    });

    // Nav buttons — en la última pregunta el botón "Siguiente" se
    // convierte en "Finalizar examen" (mismo botón, ya con estilo success).
    $('#btn-prev').disabled = exam.index === 0;
    const isLast = exam.index === exam.questions.length - 1;
    const nextBtn = $('#btn-next');
    nextBtn.hidden = false;
    $('#btn-finish').hidden = true;
    if (isLast) {
      nextBtn.textContent = window.I18N.t('exam.finish');
      nextBtn.classList.remove('btn-primary');
      nextBtn.classList.add('btn-success');
      nextBtn.dataset.role = 'finish';
    } else {
      nextBtn.textContent = window.I18N.t('exam.next');
      nextBtn.classList.remove('btn-success');
      nextBtn.classList.add('btn-primary');
      nextBtn.dataset.role = 'next';
    }

    // Timer visibility
    $('#exam-timer').classList.toggle('is-hidden', !CONFIG.SHOW_TIMER);

    renderAnswerGrid();
  }

  function renderAnswerGrid() {
    const exam = state.exam;
    const root = $('#exam-grid');
    root.innerHTML = '';
    exam.questions.forEach((_, i) => {
      const cell = document.createElement('button');
      cell.type = 'button';
      let cls = 'grid-cell';
      if (exam.answers[i] !== null) cls += ' is-answered';
      if (exam.flags[i]) cls += ' is-flagged';
      if (i === exam.index) cls += ' is-current';
      cell.className = cls;
      cell.textContent = String(i + 1);
      cell.title = 'Pregunta ' + (i + 1);
      cell.addEventListener('click', () => {
        exam.index = i;
        renderExam();
      });
      root.appendChild(cell);
    });
  }

  function toggleFlag() {
    const exam = state.exam;
    if (!exam) return;
    exam.flags[exam.index] = !exam.flags[exam.index];
    renderExam();
  }

  /* ---------- Cronómetro ---------- */

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
    const result = computeResults();
    recordExam(result);
    renderResults(result);
    showView('view-results');
    renderStats(); // home stats refresh
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
    const durationMs = (exam.finishedAt || Date.now()) - exam.startedAt;
    return { details, correctCount, incorrectCount: total - correctCount, total, percent, passed, durationMs };
  }

  function renderResults(r) {
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
    $('#result-time').textContent = window.I18N.t('results.time', { t: formatTime(r.durationMs) });

    renderCategoryBreakdown(r);
    renderReviewList(r);

    // Reset review visibility
    state._lastResult = r;
    $('#review').hidden = true;
    $('#review-controls').hidden = true;
    $('#btn-review-toggle').textContent = window.I18N.t('results.reviewToggle');
  }

  function renderCategoryBreakdown(r) {
    const root = $('#category-breakdown');
    root.innerHTML = '';
    const totals = {};
    r.details.forEach((d) => {
      const cat = d.question.category;
      if (!totals[cat]) totals[cat] = { c: 0, t: 0 };
      totals[cat].t += 1;
      if (d.correct) totals[cat].c += 1;
    });
    Object.keys(totals).sort((a, b) => totals[a].c / totals[a].t - totals[b].c / totals[b].t).forEach((cat) => {
      const v = totals[cat];
      const pct = v.t === 0 ? 0 : Math.round((v.c / v.t) * 100);
      const row = document.createElement('div');
      row.className = 'cat-row';
      const name = document.createElement('div');
      name.className = 'cat-name';
      name.textContent = tCategory(cat);
      const barWrap = document.createElement('div');
      barWrap.className = 'cat-bar-wrap';
      const bar = document.createElement('div');
      bar.className = 'cat-bar' + (pct < 50 ? ' is-low' : pct < 80 ? ' is-mid' : '');
      bar.style.width = pct + '%';
      barWrap.appendChild(bar);
      const score = document.createElement('div');
      score.className = 'cat-score';
      score.textContent = v.c + ' / ' + v.t + ' · ' + pct + '%';
      row.appendChild(name); row.appendChild(barWrap); row.appendChild(score);
      root.appendChild(row);
    });
  }

  function renderReviewList(r) {
    const lang = window.I18N.lang;
    const reviewRoot = $('#review');
    reviewRoot.innerHTML = '';
    r.details.forEach((d, i) => {
      if (state.onlyWrong && d.correct) return;
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

      if (d.question.image) {
        const img = document.createElement('div');
        img.className = 'review-image';
        const svg = getIcon(d.question.image);
        if (svg) img.innerHTML = svg;
        item.appendChild(img);
      }

      const q = document.createElement('p');
      q.className = 'review-question';
      q.textContent = d.question.question[lang];
      item.appendChild(q);

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

      if (!d.correct) {
        const corr = document.createElement('p');
        corr.className = 'review-answer';
        const corrLabel = document.createElement('strong');
        corrLabel.textContent = window.I18N.t('results.correctAnswer') + ': ';
        corr.appendChild(corrLabel);
        corr.appendChild(document.createTextNode(d.question.options[d.correctOriginal][lang]));
        item.appendChild(corr);
      }

      const explanation = document.createElement('div');
      explanation.className = 'review-explanation';
      explanation.textContent = d.question.explanation[lang];
      item.appendChild(explanation);

      const src = document.createElement('div');
      src.className = 'review-source';
      src.textContent = d.question.sourceReference[lang];
      item.appendChild(src);

      reviewRoot.appendChild(item);
    });
  }

  function toggleReview() {
    const review = $('#review');
    const controls = $('#review-controls');
    const btn = $('#btn-review-toggle');
    const shown = !review.hidden;
    review.hidden = shown;
    controls.hidden = shown;
    btn.textContent = window.I18N.t(shown ? 'results.reviewToggle' : 'results.reviewHide');
  }

  /* ---------- Modo estudio ---------- */

  function renderStudyCategories() {
    const root = $('#study-categories');
    root.innerHTML = '';

    function makeCard(title, count, onClick) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'category-card';
      const t = document.createElement('div');
      t.className = 'category-card-title';
      t.textContent = title;
      const c = document.createElement('div');
      c.className = 'category-card-count';
      c.textContent = count + ' ' + window.I18N.t('study.questions');
      btn.appendChild(t); btn.appendChild(c);
      btn.addEventListener('click', onClick);
      return btn;
    }

    root.appendChild(makeCard(window.I18N.t('study.allCategory'), QUESTIONS.length, () => startStudy(null)));
    CATEGORIES.forEach((cat) => {
      const count = QUESTIONS.filter((q) => q.category === cat).length;
      if (count === 0) return;
      root.appendChild(makeCard(tCategory(cat), count, () => startStudy(cat)));
    });
  }

  function startStudy(category) {
    const pool = category ? QUESTIONS.filter((q) => q.category === category) : QUESTIONS.slice();
    const shuffled = shuffle(pool);
    state.study = {
      category: category,
      questions: shuffled,
      optionOrders: shuffled.map((q) => shuffle(q.options.map((_, j) => j))),
      answers: new Array(shuffled.length).fill(null),
      index: 0,
    };
    $('#study-card').hidden = false;
    renderStudy();
    $('#study-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderStudy() {
    const s = state.study;
    if (!s) return;
    const lang = window.I18N.lang;
    const q = s.questions[s.index];

    $('#study-category').textContent = tCategory(q.category);
    $('#study-current').textContent = String(s.index + 1);
    $('#study-total').textContent = String(s.questions.length);
    setImage($('#study-image'), q.image);
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
      } else if (isChosen) cls += ' is-selected';
      label.className = cls;
      const mark = document.createElement('span');
      mark.className = 'option-mark';
      mark.textContent = optionLetter(displayIdx);
      const text = document.createElement('span');
      text.className = 'option-text';
      text.textContent = opt[lang];
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'study-opt';
      input.value = String(displayIdx);
      label.appendChild(mark); label.appendChild(text); label.appendChild(input);
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

  /* ---------- Modal de configuración ---------- */

  function openSettings() {
    syncSettingsUI();
    $('#settings-modal').hidden = false;
    setTimeout(() => $('#setting-questions').focus(), 50);
  }
  function closeSettings(id) {
    document.getElementById(id || 'settings-modal').hidden = true;
  }
  function syncSettingsUI() {
    $('#setting-questions').value = CONFIG.QUESTIONS_PER_EXAM;
    $('#setting-pass').value = CONFIG.PASSING_PERCENT;
    $('#setting-timer').checked = !!CONFIG.SHOW_TIMER;
    $('#setting-theme').value = CONFIG.THEME;
  }
  function saveSettingsFromUI() {
    CONFIG.QUESTIONS_PER_EXAM = clamp(parseInt($('#setting-questions').value, 10) || DEFAULTS.QUESTIONS_PER_EXAM, 5, 50);
    CONFIG.PASSING_PERCENT = clamp(parseInt($('#setting-pass').value, 10) || DEFAULTS.PASSING_PERCENT, 50, 100);
    CONFIG.SHOW_TIMER = !!$('#setting-timer').checked;
    CONFIG.THEME = $('#setting-theme').value;
    saveSettings();
    applyConfigToHome();
    applyTheme();
    closeSettings();
  }
  function resetSettings() {
    Object.assign(CONFIG, DEFAULTS);
    saveSettings();
    syncSettingsUI();
    applyConfigToHome();
    applyTheme();
  }

  /* ---------- Eventos ---------- */

  function bindEvents() {
    $$('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        window.I18N.setLang(lang);
        $$('.lang-btn').forEach((b) => b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'));
      });
    });

    window.I18N.onChange(() => {
      if (state.exam && !$('#view-exam').hidden) renderExam();
      if (state._lastResult && !$('#view-results').hidden) renderResults(state._lastResult);
      if (state.study && !$('#view-study').hidden) renderStudy();
      if (!$('#view-study').hidden && !state.study) renderStudyCategories();
    });

    $('#btn-start-exam').addEventListener('click', startExam);
    $('#btn-study-mode').addEventListener('click', () => {
      state.study = null;
      $('#study-card').hidden = true;
      renderStudyCategories();
      showView('view-study');
    });

    $('#btn-prev').addEventListener('click', () => {
      if (state.exam.index > 0) { state.exam.index--; renderExam(); }
    });
    $('#btn-next').addEventListener('click', () => {
      const e = state.exam; if (!e) return;
      if (e.index < e.questions.length - 1) {
        e.index++;
        renderExam();
      } else {
        finishExam(false);
      }
    });
    $('#btn-finish').addEventListener('click', () => finishExam(false));
    $('#btn-cancel-exam').addEventListener('click', cancelExam);
    $('#btn-flag').addEventListener('click', toggleFlag);

    $('#btn-restart').addEventListener('click', startExam);
    $('#btn-review-toggle').addEventListener('click', toggleReview);
    $('#btn-home').addEventListener('click', () => {
      state.exam = null;
      showView('view-home');
    });
    $('#review-only-wrong').addEventListener('change', (e) => {
      state.onlyWrong = !!e.target.checked;
      if (state._lastResult) renderReviewList(state._lastResult);
    });

    $('#btn-study-prev').addEventListener('click', () => {
      if (state.study && state.study.index > 0) { state.study.index--; renderStudy(); }
    });
    $('#btn-study-next').addEventListener('click', () => {
      if (state.study && state.study.index < state.study.questions.length - 1) { state.study.index++; renderStudy(); }
    });
    $('#btn-study-exit').addEventListener('click', exitStudy);
    $('#btn-study-home').addEventListener('click', () => showView('view-home'));

    $('#btn-theme').addEventListener('click', cycleTheme);
    $('#btn-settings').addEventListener('click', openSettings);
    $('#btn-settings-save').addEventListener('click', saveSettingsFromUI);
    $('#btn-settings-reset').addEventListener('click', resetSettings);
    $$('[data-close-modal]').forEach((el) => {
      el.addEventListener('click', () => closeSettings(el.getAttribute('data-close-modal')));
    });

    $('#btn-clear-stats').addEventListener('click', () => {
      if (window.confirm(window.I18N.t('home.statsClearConfirm'))) {
        try { localStorage.removeItem(STORAGE.STATS); } catch (_) {}
        renderStats();
      }
    });

    document.addEventListener('keydown', (e) => {
      // Escape closes modals
      if (e.key === 'Escape') {
        const m = $('#settings-modal');
        if (m && !m.hidden) { closeSettings(); return; }
      }
      // Flag with F key during exam
      if (!$('#view-exam').hidden && state.exam) {
        if (e.key === 'ArrowRight') {
          if (state.exam.index < state.exam.questions.length - 1) {
            state.exam.index++;
            renderExam();
          } else {
            finishExam(false);
          }
        } else if (e.key === 'ArrowLeft') {
          if (state.exam.index > 0) { state.exam.index--; renderExam(); }
        } else if (e.key === 'f' || e.key === 'F') {
          toggleFlag();
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
    loadSettings();
    applyTheme();
    watchSystemTheme();
    window.I18N.init();
    $$('.lang-btn').forEach((b) => {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === window.I18N.lang ? 'true' : 'false');
    });
    window.I18N.applyToDom();
    applyConfigToHome();
    renderStats();
    bindEvents();
    showView('view-home');
  }

  window.DMV_CONFIG = CONFIG;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
