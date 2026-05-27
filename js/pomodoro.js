'use strict';
/**
 * NihongoZen — Pomodoro Timer Module
 */

const Pomodoro = (() => {
  const MODES = {
    focus: { label: 'Focus', labelJp: '集中', duration: 25 * 60, color: 'var(--primary)' },
    short: { label: 'Short Break', labelJp: '小休憩', duration: 5 * 60, color: 'var(--n5)' },
    long:  { label: 'Long Break',  labelJp: '長休憩', duration: 15 * 60, color: 'var(--n4)' },
  };

  let mode      = 'focus';
  let timeLeft  = MODES.focus.duration;
  let running   = false;
  let timer     = null;
  let sessions  = State.state.sessions;
  let abortCtrl = null;

  /* ---- Render ---- */
  const renderCard = (compact = false) => {
    const m   = MODES[mode];
    const pct = timeLeft / m.duration;
    const r   = 54;
    const c   = 2 * Math.PI * r;
    const off = c * pct;

    return `
<div class="pomo-card" id="pomo-card">
  <div class="pomo-head">
    <span class="pomo-title">${State.state.lang === 'jp' ? 'ポモドーロタイマー' : 'Pomodoro Timer'}</span>
    <div class="pomo-session-dots">
      ${[0,1,2,3].map(i => `<div class="pomo-dot" style="background:${i < sessions ? m.color : 'var(--card-elevated)'};border-color:${i < sessions ? m.color : 'var(--border)'}"></div>`).join('')}
    </div>
  </div>

  <div class="pomo-mode-tabs">
    ${Object.entries(MODES).map(([k, v]) => `
    <button class="pomo-mode-btn" id="pm-${k}" data-mode="${k}"
      style="background:${mode === k ? m.color + '22' : 'transparent'};color:${mode === k ? m.color : 'var(--fg-muted)'}">
      ${State.state.lang === 'jp' ? v.labelJp : v.label}
    </button>`).join('')}
  </div>

  <div class="pomo-ring-wrap">
    <div class="pomo-ring">
      <svg viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="${r}" fill="none" stroke="var(--card-elevated)" stroke-width="7"/>
        <circle id="pomo-circle" cx="60" cy="60" r="${r}" fill="none"
          stroke="${m.color}" stroke-width="7"
          stroke-linecap="round"
          stroke-dasharray="${c.toFixed(2)}"
          stroke-dashoffset="${off.toFixed(2)}"
          style="transition:stroke-dashoffset 1s linear;"/>
      </svg>
      <div class="pomo-ring-inner">
        <span class="pomo-time-display" id="pomo-display">${fmt.time(timeLeft)}</span>
        <span class="pomo-mode-label" id="pomo-mode-label">${State.state.lang === 'jp' ? m.labelJp : m.label}</span>
      </div>
    </div>

    <div class="pomo-btns">
      <button class="pomo-play-btn" id="pomo-play-btn"
        onclick="Pomodoro.toggle()"
        style="background:${m.color}">
        ${running ? '⏸ ' + (State.state.lang === 'jp' ? '一時停止' : 'Pause')
                  : '▶ '  + (State.state.lang === 'jp' ? 'スタート' : 'Start')}
      </button>
      <button class="pomo-reset-btn" onclick="Pomodoro.reset()" title="Reset">↺</button>
    </div>

    <div class="pomo-sessions-lbl" id="pomo-sessions-lbl">
      ${sessions} ${State.state.lang === 'jp' ? 'セッション完了' : 'sessions completed today'}
    </div>
  </div>
</div>`;
  };

  /* ---- Update UI without full re-render ---- */
  const updateUI = () => {
    const m   = MODES[mode];
    const pct = timeLeft / m.duration;
    const r   = 54;
    const c   = 2 * Math.PI * r;

    const disp    = document.getElementById('pomo-display');
    const circle  = document.getElementById('pomo-circle');
    const playBtn = document.getElementById('pomo-play-btn');
    const sessLbl = document.getElementById('pomo-sessions-lbl');
    const modeLbl = document.getElementById('pomo-mode-label');

    if (disp)    disp.textContent = fmt.time(timeLeft);
    if (circle)  circle.style.strokeDashoffset = (c * pct).toFixed(2);
    if (playBtn) {
      playBtn.innerHTML = running
        ? '⏸ ' + (State.state.lang === 'jp' ? '一時停止' : 'Pause')
        : '▶ '  + (State.state.lang === 'jp' ? 'スタート' : 'Start');
    }
    if (sessLbl) {
      sessLbl.textContent = `${sessions} ${State.state.lang === 'jp' ? 'セッション完了' : 'sessions completed today'}`;
    }
    if (modeLbl) {
      modeLbl.textContent = State.state.lang === 'jp' ? m.labelJp : m.label;
    }
  };

  /* ---- Toggle Start/Pause ---- */
  const toggle = () => {
    running = !running;
    if (running) {
      timer = setInterval(() => {
        if (timeLeft <= 1) {
          clearInterval(timer);
          running = false;
          timeLeft = 0;
          Audio.chime();
          if (mode === 'focus') {
            sessions++;
            State.state.sessions = sessions;
            Toast.success(State.state.lang === 'jp' ? 'フォーカスセッション完了！' : 'Focus session complete! 🍅');
          } else {
            Toast.info(State.state.lang === 'jp' ? '休憩終了！' : 'Break over! Back to work 💪');
          }
        } else {
          timeLeft--;
        }
        updateUI();
      }, 1000);
    } else {
      clearInterval(timer);
    }
    updateUI();
  };

  /* ---- Reset ---- */
  const reset = () => {
    clearInterval(timer);
    running  = false;
    timeLeft = MODES[mode].duration;
    updateUI();
  };

  /* ---- Set Mode ---- */
  const setMode = (m) => {
    clearInterval(timer);
    running  = false;
    mode     = m;
    timeLeft = MODES[m].duration;

    // Update tab styles
    Object.keys(MODES).forEach(k => {
      const btn = document.getElementById(`pm-${k}`);
      if (!btn) return;
      btn.style.background = k === m ? MODES[m].color + '22' : 'transparent';
      btn.style.color      = k === m ? MODES[m].color : 'var(--fg-muted)';
    });

    // Update ring color
    const circle  = document.getElementById('pomo-circle');
    const playBtn = document.getElementById('pomo-play-btn');
    if (circle)  circle.style.stroke = MODES[m].color;
    if (playBtn) playBtn.style.background = MODES[m].color;

    updateUI();
  };

  /* ---- Attach mode tab events ---- */
  const attachEvents = () => {
    document.querySelectorAll('.pomo-mode-btn').forEach(btn => {
      btn.addEventListener('click', () => setMode(btn.dataset.mode));
    });
  };

  /* ---- Cleanup (called on page navigation) ---- */
  const cleanup = () => {
    clearInterval(timer);
    running = false;
  };

  return { renderCard, toggle, reset, setMode, attachEvents, cleanup, running: () => running };
})();
