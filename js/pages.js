'use strict';
/**
 * NihongoZen — Page Renderers
 * Every page rendered here. No innerHTML from user input ever.
 */

/* =========================================================
   SHARED SHELL — renders sidebar, topbar, mobile nav
   ========================================================= */
function renderShell() {
  // Use real Firebase user if available, fallback to session
  const fbUser = window._nzUser;
  const fbData = window._nzUserData;
  const displayName = fbUser?.displayName || fbData?.displayName || Session.get()?.user || 'Learner';
  const email = fbUser?.email || fbData?.email || '';
  const photoURL = fbUser?.photoURL || fbData?.photoURL || '';
  const level = fbData?.level || Session.get()?.level || 1;
  const initials = (displayName || 'L').charAt(0).toUpperCase();

  // Build avatar HTML — photo if available, else initials
  const avatarHtml = photoURL
    ? `<img src="${photoURL}" alt="${Security.esc(displayName)}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`
    : initials;
  const topbarAvatarHtml = photoURL
    ? `<img src="${photoURL}" alt="${Security.esc(displayName)}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`
    : initials;

  const session = { user: displayName, level };

  document.body.innerHTML = `
<div id="toast-container"></div>

<!-- Mobile Drawer Overlay -->
<div id="mobile-drawer-overlay" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.65);z-index:60;"
  onclick="closeMobileDrawer()"></div>

<!-- Mobile Drawer -->
<div id="mobile-drawer" style="display:none;" class="mobile-drawer">
  <div class="mobile-drawer-head">
    <div style="display:flex;align-items:center;gap:8px;">
      <div class="sb-logo-icon">禅</div>
      <span style="font-weight:700;font-size:15px;color:var(--fg)">NihongoZen</span>
    </div>
    <button onclick="closeMobileDrawer()" style="background:none;border:1px solid var(--border);border-radius:8px;width:30px;height:30px;display:flex;align-items:center;justify-content:center;color:var(--fg-muted);cursor:pointer;">✕</button>
  </div>
  <nav style="padding:8px;">${buildNavItems()}</nav>
</div>

<div class="app-shell">
  <!-- Sidebar -->
  <aside class="sidebar" id="main-sidebar">
    <div class="sb-logo">
      <div class="sb-logo-inner">
        <div class="sb-logo-icon">禅</div>
        <span class="sb-logo-name">NihongoZen</span>
      </div>
      <button class="sb-toggle-btn" id="sb-toggle-btn" onclick="toggleSidebar()" title="Collapse sidebar">‹</button>
    </div>
    <nav class="sb-nav">${buildNavItems()}</nav>
    <div class="sb-user">
      <a class="sb-user-inner" href="#" onclick="Router.go('profile');return false;">
        <div class="sb-avatar">${avatarHtml}</div>
        <div class="sb-user-info">
          <div class="sb-user-name">${Security.esc(displayName)}</div>
          <div class="sb-user-sub">Level ${level} · Scholar</div>
        </div>
        <span class="sb-user-settings">⚙️</span>
      </a>
    </div>
  </aside>

  <!-- Main -->
  <div class="app-main">
    <!-- Topbar -->
    <header class="topbar">
      <button class="topbar-hamburger" onclick="openMobileDrawer()">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M3 12h18M3 6h18M3 18h18"/>
        </svg>
      </button>
      <div class="topbar-logo">
        <div class="sb-logo-icon" style="width:26px;height:26px;font-size:13px;">禅</div>
        <span style="font-size:14px;font-weight:700;color:var(--fg);">NihongoZen</span>
      </div>
      <div class="topbar-search">
        <svg class="topbar-search-icon" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
        </svg>
        <input type="text" placeholder="Search kanji, vocab, grammar..." id="topbar-search-input"
          oninput="handleSearch(this.value)" autocomplete="off" maxlength="80"/>
      </div>
      <div class="topbar-right">
        <div class="topbar-streak">
          <span>🔥</span>
          <span style="color:var(--accent);font-weight:700;font-family:var(--font-mono);">${State.state.streak}</span>
          <span class="text-muted">days</span>
        </div>
        <div class="topbar-xp" style="display:none;" id="topbar-xp-pill">
          <span>⚡</span>
          <span style="color:var(--primary);font-weight:700;font-family:var(--font-mono);">${State.state.xpToday}</span>
          <span class="text-muted">XP</span>
        </div>
        <!-- Lang Toggle -->
        <div class="lang-toggle">
          <button class="lang-toggle-btn active" data-lang="en" onclick="setLang('en')">EN</button>
          <button class="lang-toggle-btn" data-lang="jp" onclick="setLang('jp')">日本語</button>
        </div>
        <button class="topbar-btn" id="notif-btn" onclick="Toast.info('No new notifications')" title="Notifications">
          🔔<span class="topbar-notif-dot"></span>
        </button>
        <div class="topbar-user-wrap" id="topbar-user-wrap">
          <button class="topbar-user-btn" onclick="toggleUserMenu()">
            <div class="topbar-user-avatar">${topbarAvatarHtml}</div>
            <span class="topbar-user-name">${Security.esc((displayName || '').split(' ')[0])}</span>
            <span class="topbar-user-caret">▾</span>
          </button>
          <div class="user-dropdown" id="user-dropdown" style="display:none;">
            <div class="user-dropdown-head">
              <div class="name">${Security.esc(displayName)}</div>
              <div class="sub">${Security.esc(email)}</div>
            </div>
            <div class="user-dropdown-item" onclick="Router.go('profile');closeUserMenu()">👤 Profile</div>
            <div class="user-dropdown-item" onclick="Toast.info('Settings coming soon');closeUserMenu()">⚙️ Settings</div>
            <div class="divider"></div>
            <div class="user-dropdown-item danger" onclick="Pages.logout()">🚪 Log Out</div>
          </div>
        </div>
      </div>
    </header>
    <!-- XP bar under topbar -->
    <div class="topbar-xp-bar">
      <div class="topbar-xp-fill" id="topbar-xp-fill" style="width:0%" data-progress="${Math.round(State.state.xpToday/State.state.xpGoal*100)}"></div>
    </div>

    <!-- Page Content -->
    <main class="app-content" id="app-content"></main>
  </div>
</div>

<!-- Mobile Bottom Nav -->
<nav class="mobile-bottom-nav">
  <div class="nav-tabs">
    ${[
      {page:'dashboard',icon:'🏠',label:'Home',labelJp:'ホーム'},
      {page:'kanji',icon:'📖',label:'Kanji',labelJp:'漢字'},
      {page:'vocab',icon:'📚',label:'Vocab',labelJp:'語彙'},
      {page:'progress',icon:'📊',label:'Progress',labelJp:'進捗'},
      {page:'profile',icon:'👤',label:'Profile',labelJp:'プロフィール'},
    ].map(t => `<div class="nav-tab" data-page="${t.page}" onclick="Router.go('${t.page}')">
      <span style="font-size:18px;">${t.icon}</span>
      <span>${t.label}</span>
    </div>`).join('')}
  </div>
</nav>

<!-- Kanji Modal -->
<div class="modal-overlay" id="kanji-modal" style="display:none;" onclick="if(event.target===this)Pages.closeKanjiModal()">
  <div class="modal-box" id="kanji-modal-box"></div>
</div>
`;

  // Animate topbar XP bar after render
  setTimeout(animateProgressBars, 400);
}

/* =========================================================
   NAV ITEMS HTML
   ========================================================= */
function buildNavItems() {
  const items = [
    { section:'Study', sectionJp:'学習' },
    { page:'dashboard', icon:'🏠', label:'ホーム', labelEn:'Home' },
    { page:'kanji',     icon:'📖', label:'漢字',   labelEn:'Kanji',    badge:'284' },
    { page:'vocab',     icon:'📚', label:'語彙',   labelEn:'Vocab' },
    { page:'listening', icon:'🎧', label:'聴解',   labelEn:'Listening', badge:'New' },
    { page:'reading',   icon:'📄', label:'読解',   labelEn:'Reading' },
    { page:'grammar',   icon:'📝', label:'文法',   labelEn:'Grammar' },
    { section:'JLPT Levels', sectionJp:'JLPTレベル' },
    { page:'jlpt-n5',   icon:'N5', label:'N5 初級', labelEn:'N5 Beginner',    color:'var(--n5)' },
    { page:'jlpt-n4',   icon:'N4', label:'N4 初中級',labelEn:'N4 Elementary', color:'var(--n4)' },
    { page:'jlpt-n3',   icon:'N3', label:'N3 中級', labelEn:'N3 Intermediate',color:'var(--n3)' },
    { section:'Tools', sectionJp:'ツール' },
    { page:'progress',  icon:'📊', label:'進捗',   labelEn:'Progress' },
    { page:'timer',     icon:'⏱️', label:'タイマー',labelEn:'Timer' },
    { page:'kana',      icon:'🔤', label:'かな表',  labelEn:'Kana Chart' },
    { page:'profile',   icon:'👤', label:'プロフィール',labelEn:'Profile' },
  ];

  return items.map(item => {
    if (item.section) {
      return `<div class="sb-section-label">${item.sectionJp || item.section}</div>`;
    }
    const isActive = Router.current() === item.page;
    const iconStyle = item.color ? `style="color:${item.color}"` : '';
    return `<a class="sb-item${isActive ? ' active' : ''}" href="#"
      data-page="${item.page}"
      data-label-en="${item.labelEn || item.label}"
      data-label-jp="${item.label}"
      onclick="Router.go('${item.page}');return false;">
      <span class="sb-icon" ${iconStyle}>${item.icon}</span>
      <span class="sb-label">${item.label}</span>
      ${item.badge ? `<span class="sb-badge">${item.badge}</span>` : ''}
    </a>`;
  }).join('');
}

/* =========================================================
   SEARCH HANDLER (no XSS — all safe rendering)
   ========================================================= */
function handleSearch(raw) {
  const q = raw.trim().toLowerCase();
  if (!q) return;
  // Debounce is handled by the browser input event naturally at typing speed
  // Find matches in kanji and vocab
  const kanjiMatches = AllKanji.filter(k =>
    k.kanji.includes(q) || k.meaning.toLowerCase().includes(q) || k.reading.includes(q)
  ).slice(0, 5);
  const vocabMatches = VocabData.filter(v =>
    v.jp.includes(q) || v.en.toLowerCase().includes(q) || v.romaji.includes(q)
  ).slice(0, 5);
  if (kanjiMatches.length > 0) {
    Router.go('kanji', { search: q });
  } else if (vocabMatches.length > 0) {
    Router.go('vocab', { search: q });
  }
}

/* =========================================================
   PAGES OBJECT — all page renderers
   ========================================================= */
const Pages = {

  /* --------------------------------------------------
     DASHBOARD
  -------------------------------------------------- */
  dashboard() {
    const lang = State.state.lang;
    const xpPct = Math.round(State.state.xpToday / State.state.xpGoal * 100);
    const ringR = 45;
    const ringC = 2 * Math.PI * ringR;

    renderContent(`
<div class="animate-fade-up">
  ${Pages._welcomeBanner(lang, xpPct, ringR, ringC)}
  <div class="stats-grid mb-5">${JLPTLevels.slice(0,4).map((_, i) => Pages._statCard(i)).join('')}</div>
  <div class="dash-grid">
    <div class="dash-left">
      <div>
        <div class="section-header">
          <span class="section-title">${lang === 'jp' ? 'JLPTレベル' : 'JLPT Levels'}</span>
          <span class="section-hint">N5 → N1</span>
        </div>
        <div class="jlpt-grid">${JLPTLevels.map(lv => Pages._jlptCard(lv, lang)).join('')}</div>
      </div>
      ${Pages._kanjiSection(lang)}
      ${Pages._vocabSection(lang)}
    </div>
    <div class="dash-right">
      ${Pages._xpCard(lang)}
      ${Pomodoro.renderCard()}
      ${Pages._activityCard(lang)}
    </div>
  </div>
</div>`);

    // Init pomodoro events
    Pomodoro.attachEvents();

    // Animate rings/bars after paint
    setTimeout(() => {
      const xpRing = document.getElementById('dash-xp-ring');
      if (xpRing) xpRing.style.strokeDashoffset = (ringC * (1 - xpPct / 100)).toFixed(2);
      document.querySelectorAll('.jlpt-prog-fill[data-progress]').forEach(el => {
        el.style.width = el.dataset.progress + '%';
      });
      const xpBar = document.getElementById('xp-level-bar');
      if (xpBar) xpBar.style.width = Math.round(State.state.totalXP / State.state.nextLevelXP * 100) + '%';
      const banner = document.getElementById('banner-prog-fill');
      if (banner) banner.style.width = xpPct + '%';
    }, 350);
  },

  _welcomeBanner(lang, xpPct, ringR, ringC) {
    return `
<div class="welcome-banner mb-5">
  <div class="banner-kanji-watermark">禅</div>
  <div class="banner-body">
    <div class="banner-left">
      <div class="banner-tag">${lang === 'jp' ? '今日も一緒に学びましょう' : '今日も一緒に学びましょう'}</div>
      <h1 class="banner-title">${lang === 'jp' ? 'おはようございます、<span class="highlight">Kenji</span> さん 👋' : 'Good morning, <span class="highlight">Kenji</span> 👋'}</h1>
      <p class="banner-sub">${lang === 'jp'
        ? 'あなたは <span class="accent">14日間</span> 連続で学習中 🔥 — 続けましょう！'
        : 'You\'re on a <span class="accent">14-day streak</span> 🔥 — keep the momentum!'}</p>
      <div class="banner-actions">
        <button class="btn btn-primary" onclick="Router.go('kanji')">
          📖 ${lang === 'jp' ? '勉強を続ける ›' : 'Continue Studying ›'}
        </button>
        <button class="btn btn-secondary" onclick="Router.go('timer')">
          ⏱️ ${lang === 'jp' ? 'タイマー' : 'Start Timer'}
        </button>
        <div class="streak-pill">
          🔥 <span class="num">${State.state.streak}</span>
          <span class="text-muted">${lang === 'jp' ? '日連続' : 'day streak'}</span>
        </div>
      </div>
    </div>
    <div class="xp-ring-wrap">
      <div class="xp-ring">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="${ringR}" fill="none" stroke="var(--card-elevated)" stroke-width="7"/>
          <circle id="dash-xp-ring" cx="50" cy="50" r="${ringR}" fill="none"
            stroke="var(--primary)" stroke-width="7" stroke-linecap="round"
            stroke-dasharray="${ringC.toFixed(2)}"
            stroke-dashoffset="${ringC.toFixed(2)}"
            style="transition:stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)"/>
        </svg>
        <div class="xp-ring-inner">
          <span class="xp-ring-val">${State.state.xpToday}</span>
          <span class="xp-ring-sub">/ ${State.state.xpGoal} XP</span>
        </div>
      </div>
      <div class="xp-ring-label">${lang === 'jp' ? '今日のXP' : "Today's XP"}</div>
    </div>
  </div>
  <div class="banner-progress">
    <div class="banner-progress-row">
      <span>${lang === 'jp' ? '今日のXP進捗' : 'Daily XP Progress'}</span>
      <span class="pct">${xpPct}%</span>
    </div>
    <div class="progress-track">
      <div class="progress-fill" id="banner-prog-fill"
        style="width:0%;background:linear-gradient(90deg,var(--primary),#F06080);"
        data-progress="${xpPct}"></div>
    </div>
  </div>
</div>`;
  },

  _statCard(i) {
    const stats = [
      { label:'XP Today',   labelJp:'今日のXP',   val:`${State.state.xpToday}`, unit:'XP',    delta:'+12%', up:true,  hint:'Goal: 500 XP',   icon:'⚡', col:'var(--primary)', dim:'var(--primary-dim)' },
      { label:'Day Streak', labelJp:'連続日数',    val:`${State.state.streak}`,  unit:'days',  delta:'+2',   up:true,  hint:'Best: 21 days',  icon:'🔥', col:'var(--accent)',  dim:'var(--accent-dim)' },
      { label:'Kanji',      labelJp:'漢字習得',    val:`${State.state.learnedKanji?.size || 284}`, unit:'', delta:'+8', up:true, hint:'N4 level: 72%', icon:'📖', col:'var(--n4)', dim:'var(--n4-dim)' },
      { label:'Accuracy',   labelJp:'正確率',      val:'76',                      unit:'%',     delta:'-4%',  up:false, hint:'Needs focus',    icon:'🎯', col:'var(--n3)',  dim:'var(--n3-dim)' },
    ];
    const s = stats[i];
    const lang = State.state.lang;
    return `
<div class="stat-card card-hover">
  <div class="stat-head">
    <div class="stat-icon" style="background:${s.dim}">${s.icon}</div>
    <div class="stat-delta ${s.up ? 'up' : 'down'}">${s.up ? '↑' : '↓'} ${s.delta}</div>
  </div>
  <div><span class="stat-value">${s.val}</span><span class="stat-unit">${s.unit}</span></div>
  <div class="stat-label">${lang === 'jp' ? s.labelJp : s.label}</div>
  <div class="stat-sub">${s.hint}</div>
</div>`;
  },

  _jlptCard(lv, lang) {
    const locked = lv.status === 'Locked';
    return `
<div class="jlpt-card" style="border-color:${lv.color};"
  ${locked ? '' : `onclick="Router.go('jlpt-${lv.level.toLowerCase()}')"`}
  role="${locked ? 'presentation' : 'button'}" tabindex="${locked ? -1 : 0}">
  <div class="jlpt-card-kanji" style="color:${lv.color}">${lv.kanji}</div>
  <div class="jlpt-card-head">
    <span class="badge" style="background:${lv.dim};color:${lv.color}">${lv.level}</span>
    <span class="jlpt-card-status">${lv.status}</span>
  </div>
  <div class="jlpt-card-title" style="color:${lv.color}">${lv.title}</div>
  <div class="jlpt-card-sub">${lang === 'jp' ? lv.subtitle : lv.subtitle}</div>
  <div class="jlpt-card-desc">${lv.desc}</div>
  <div class="jlpt-card-prog-row">
    <span class="text-muted">${lv.learned}/${lv.total}</span>
    <span style="color:${lv.color};font-family:var(--font-mono)">${lv.progress}%</span>
  </div>
  <div class="progress-track mb-3">
    <div class="jlpt-prog-fill progress-fill" data-progress="${lv.progress}"
      style="width:0%;background:${lv.color}"></div>
  </div>
  <button class="jlpt-card-btn"
    style="background:${lv.progress > 0 ? lv.dim : 'var(--card-elevated)'};color:${lv.progress > 0 ? lv.color : 'var(--fg-muted)'};border-color:${lv.progress > 0 ? lv.color : 'var(--border)'};"
    ${locked ? 'disabled' : ''}>
    ${locked ? '🔒 Locked' : (lang === 'jp' ? '勉強する ›' : 'Study Now ›')}
  </button>
</div>`;
  },

  _kanjiSection(lang, activeTab = 'N5') {
    return `
<div class="kanji-section" id="kanji-section">
  <div class="section-header">
    <span class="section-title">${lang === 'jp' ? '漢字学習' : 'Kanji Study'}</span>
    <span class="section-hint" id="kanji-learned-count">${State.learnedCount()} ${lang === 'jp' ? '習得済み' : 'learned'}</span>
  </div>
  <div class="kanji-grid-panel">
    <div class="kanji-tabs">
      ${['N5','N4','N3'].map(t => `
      <button class="kanji-tab-btn${t === activeTab ? ' active' : ''}"
        id="ktab-${t}" onclick="Pages.switchKanjiTab('${t}')"
        style="${t === activeTab ? `color:${levelColor(t)};` : ''}">
        ${t}
        <span class="kanji-tab-btn${t === activeTab ? ' active' : ''}" style="font-size:10px;color:inherit;">
          (${(KanjiData[t] || []).length})
        </span>
      </button>`).join('')}
    </div>
    <div class="kanji-tiles" id="kanji-tiles">${Pages._kanjiTiles(activeTab)}</div>
  </div>
</div>`;
  },

  _kanjiTiles(tab) {
    return (KanjiData[tab] || []).map(k => `
<div class="kanji-tile${State.isLearned(k.id) ? ' learned' : ''}"
  onclick="Pages.openKanjiModal('${k.id}','${tab}')"
  title="${Security.esc(k.meaning)}" role="button" tabindex="0"
  onkeydown="if(event.key==='Enter')Pages.openKanjiModal('${k.id}','${tab}')">
  ${State.isLearned(k.id) ? `<div class="kanji-dot" style="background:${levelColor(tab)}"></div>` : ''}
  <div class="kanji-char" style="color:${levelColor(tab)}">${k.kanji}</div>
  <div class="kanji-read">${k.reading.split('・')[0]}</div>
  <div class="kanji-mean">${k.meaning.split(' / ')[0]}</div>
</div>`).join('');
  },

  switchKanjiTab(tab) {
    ['N5','N4','N3'].forEach(t => {
      const btn = document.getElementById(`ktab-${t}`);
      if (!btn) return;
      btn.classList.toggle('active', t === tab);
      btn.style.color = t === tab ? levelColor(t) : '';
    });
    const tiles = document.getElementById('kanji-tiles');
    if (tiles) tiles.innerHTML = Pages._kanjiTiles(tab);
    Pages._currentKanjiTab = tab;
  },

  _currentKanjiTab: 'N5',

  openKanjiModal(id, tab) {
    const k = AllKanji.find(x => x.id === id);
    if (!k) return;
    Pages._modalKanji = k;
    Pages._modalTab   = tab;
    const col     = levelColor(tab);
    const learned = State.isLearned(k.id);
    const lang    = State.state.lang;

    const box = document.getElementById('kanji-modal-box');
    if (!box) return;
    box.innerHTML = `
<div class="kanji-modal-header">
  <div style="display:flex;align-items:center;gap:14px;">
    <div class="kanji-modal-char" style="color:${col}">${k.kanji}</div>
    <div>
      <span class="badge mb-2" style="background:${levelDim(tab)};color:${col}">${tab}</span><br>
      <span style="font-family:var(--font-mono);font-size:13px;color:var(--fg-muted)">${k.reading}</span><br>
      <span style="font-size:14px;font-weight:600;color:var(--fg)">${k.meaning}</span>
    </div>
  </div>
  <button class="kanji-modal-close" onclick="Pages.closeKanjiModal()">✕</button>
</div>
<div class="kanji-modal-grid">
  <div class="kanji-info-cell"><div class="kanji-info-label">${lang === 'jp' ? '音読み' : 'On Reading'}</div><div class="kanji-info-val">${k.on || '—'}</div></div>
  <div class="kanji-info-cell"><div class="kanji-info-label">${lang === 'jp' ? '訓読み' : 'Kun Reading'}</div><div class="kanji-info-val">${k.kun || '—'}</div></div>
  <div class="kanji-info-cell"><div class="kanji-info-label">${lang === 'jp' ? '意味' : 'Meaning'}</div><div class="kanji-info-val">${k.meaning}</div></div>
  <div class="kanji-info-cell"><div class="kanji-info-label">${lang === 'jp' ? 'レベル' : 'JLPT Level'}</div><div class="kanji-info-val">${tab}</div></div>
</div>
<div class="kanji-example-box">
  <div class="kanji-example-label">
    📖 ${lang === 'jp' ? '例文' : 'Example Sentence'}
    <button class="speak-btn" onclick="Speech.speak('${k.example}')">🔊 ${lang === 'jp' ? '聞く' : 'Listen'}</button>
  </div>
  <div class="kanji-example-jp">${k.example}</div>
  <div class="kanji-example-en">${k.exampleMeaning}</div>
</div>
<div class="kanji-modal-actions">
  <button class="btn-mark-learned" id="modal-learn-btn" onclick="Pages.toggleModalLearned()"
    style="background:${learned ? 'var(--card-elevated)' : col};color:${learned ? col : '#fff'};border-color:${col};">
    ${learned ? '✓ ' + (lang === 'jp' ? '習得済み' : 'Learned') : (lang === 'jp' ? '習得済みにする' : 'Mark as Learned')}
  </button>
  <button class="btn-modal-close" onclick="Pages.closeKanjiModal()">
    ${lang === 'jp' ? '閉じる' : 'Close'}
  </button>
</div>`;

    document.getElementById('kanji-modal').style.display = 'flex';
  },

  toggleModalLearned() {
    if (!Pages._modalKanji) return;
    State.toggleLearnedKanji(Pages._modalKanji.id);
    Pages.openKanjiModal(Pages._modalKanji.id, Pages._modalTab);
    const tiles = document.getElementById('kanji-tiles');
    if (tiles) tiles.innerHTML = Pages._kanjiTiles(Pages._currentKanjiTab);
    const cnt = document.getElementById('kanji-learned-count');
    const lang = State.state.lang;
    if (cnt) cnt.textContent = `${State.learnedCount()} ${lang === 'jp' ? '習得済み' : 'learned'}`;
    Toast.success(State.isLearned(Pages._modalKanji.id)
      ? (lang === 'jp' ? '習得済みにしました！' : 'Marked as learned! 🎉')
      : (lang === 'jp' ? '未習得に戻しました' : 'Unmarked'));
  },

  closeKanjiModal() {
    document.getElementById('kanji-modal').style.display = 'none';
    Pages._modalKanji = null;
  },

  _modalKanji: null,
  _modalTab:   'N5',

  _vocabSection(lang, mode = 'grid') {
    const words = VocabData.slice(0, 16);
    Pages._vocabMode  = mode;
    Pages._vocabIndex = 0;
    Pages._vocabFlip  = false;
    return `
<div class="vocab-section">
  <div class="section-header">
    <span class="section-title">${lang === 'jp' ? '語彙' : 'Vocabulary'}</span>
    <div class="vocab-mode-btns">
      <button class="vocab-mode-btn${mode === 'grid' ? ' active' : ''}"
        style="${mode === 'grid' ? 'background:var(--primary-dim);color:var(--primary);border-color:var(--primary)' : 'background:var(--card-elevated);color:var(--fg-muted);border-color:var(--border)'}"
        onclick="Pages.setVocabMode('grid')">
        ${lang === 'jp' ? 'グリッド' : 'Grid'}
      </button>
      <button class="vocab-mode-btn${mode === 'flashcard' ? ' active' : ''}"
        style="${mode === 'flashcard' ? 'background:var(--primary-dim);color:var(--primary);border-color:var(--primary)' : 'background:var(--card-elevated);color:var(--fg-muted);border-color:var(--border)'}"
        onclick="Pages.setVocabMode('flashcard')">
        ${lang === 'jp' ? 'フラッシュカード' : 'Flashcards'}
      </button>
    </div>
  </div>
  <div id="vocab-display">${mode === 'grid' ? Pages._vocabGrid(words, lang) : Pages._vocabFlashcard(lang)}</div>
</div>`;
  },

  _vocabGrid(words, lang) {
    return `<div class="vocab-cards-grid">${words.map(w => `
<div class="vocab-card card-hover" onclick="Speech.speak('${w.jp}')">
  <div class="vocab-card-top">
    <div class="vocab-jp">${w.jp}</div>
    <button class="vocab-speak-btn" onclick="event.stopPropagation();Speech.speakBoth('${w.jp}','${w.en}')">🔊</button>
  </div>
  <div class="vocab-romaji">${w.romaji}</div>
  <div class="vocab-en">${w.en}</div>
  <span class="vocab-cat badge" style="background:${(typeof VocabCategoryColors!=='undefined'&&VocabCategoryColors[w.category])?VocabCategoryColors[w.category]+'22':levelDim(w.level)};color:${(typeof VocabCategoryColors!=='undefined'&&VocabCategoryColors[w.category])?VocabCategoryColors[w.category]:levelColor(w.level)}">${w.category}</span>
</div>`).join('')}</div>`;
  },

  _vocabFlashcard(lang) {
    const w = VocabData[Pages._vocabIndex];
    const flipped = Pages._vocabFlip;
    return `
<div class="flashcard-wrap">
  <p class="flashcard-hint">${lang === 'jp' ? 'カードをクリックして裏返す · ← →で移動' : 'Click to flip · ← → to navigate · Space to flip'}</p>
  <div class="flashcard-outer perspective" onclick="Pages.flipCard()">
    <div class="flashcard-inner-wrap flip-inner${flipped ? ' flipped' : ''}" id="fc-inner" style="height:200px;">
      <div class="flip-face fc-face" style="background:var(--card);border:1px solid var(--border);">
        <div class="fc-content">
          <div class="fc-jp">${w.jp}</div>
          <div class="fc-romaji">${w.romaji}</div>
          <button onclick="event.stopPropagation();Speech.speak('${w.jp}')"
            style="background:var(--primary-dim);color:var(--primary);border:1px solid var(--primary-dim);border-radius:8px;padding:5px 12px;font-size:11px;cursor:pointer;">
            🔊 ${lang === 'jp' ? '聞く' : 'Listen'}
          </button>
          <div class="fc-tap-hint">${lang === 'jp' ? 'タップして意味を見る' : 'Click to reveal meaning'}</div>
        </div>
      </div>
      <div class="flip-face flip-back fc-face" style="background:var(--card);border:1px solid var(--primary);">
        <div class="fc-content">
          <div class="fc-en">${w.en}</div>
          <span class="badge" style="background:${(typeof VocabCategoryColors!=='undefined'&&VocabCategoryColors[w.category])?VocabCategoryColors[w.category]+'22':levelDim(w.level)};color:${(typeof VocabCategoryColors!=='undefined'&&VocabCategoryColors[w.category])?VocabCategoryColors[w.category]:levelColor(w.level)}">${w.category}</span>
          <button onclick="event.stopPropagation();Speech.speakBoth('${w.jp}','${w.en}')"
            style="background:var(--primary-dim);color:var(--primary);border:1px solid var(--primary-dim);border-radius:8px;padding:5px 12px;font-size:11px;cursor:pointer;">
            🔊 ${lang === 'jp' ? '両方聞く' : 'Hear both'}
          </button>
          <div class="fc-tap-hint">${lang === 'jp' ? 'タップして戻る' : 'Click to flip back'}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="fc-nav">
    <button class="fc-nav-btn" onclick="Pages.prevCard()">‹</button>
    <span class="fc-counter">${Pages._vocabIndex + 1} / ${VocabData.length}</span>
    <button class="fc-nav-btn" onclick="Pages.nextCard()">›</button>
    <button class="fc-nav-btn" onclick="Pages._vocabIndex=0;Pages._vocabFlip=false;Pages.refreshVocab()" title="${lang === 'jp' ? 'リセット' : 'Reset'}">↺</button>
  </div>
</div>`;
  },

  setVocabMode(m) {
    Pages._vocabMode  = m;
    Pages._vocabIndex = 0;
    Pages._vocabFlip  = false;
    const display = document.getElementById('vocab-display');
    const lang = State.state.lang;
    if (!display) return;
    display.innerHTML = m === 'grid'
      ? Pages._vocabGrid(VocabData.slice(0, 16), lang)
      : Pages._vocabFlashcard(lang);
    document.querySelectorAll('.vocab-mode-btn').forEach((btn, i) => {
      const isActive = (i === 0 && m === 'grid') || (i === 1 && m === 'flashcard');
      btn.style.background   = isActive ? 'var(--primary-dim)' : 'var(--card-elevated)';
      btn.style.color        = isActive ? 'var(--primary)' : 'var(--fg-muted)';
      btn.style.borderColor  = isActive ? 'var(--primary)' : 'var(--border)';
    });
  },

  flipCard() {
    Pages._vocabFlip = !Pages._vocabFlip;
    const inner = document.getElementById('fc-inner');
    if (inner) inner.classList.toggle('flipped', Pages._vocabFlip);
  },

  nextCard() {
    Pages._vocabFlip = false;
    Pages._vocabIndex = (Pages._vocabIndex + 1) % VocabData.length;
    Pages.refreshVocab();
  },

  prevCard() {
    Pages._vocabFlip = false;
    Pages._vocabIndex = (Pages._vocabIndex - 1 + VocabData.length) % VocabData.length;
    Pages.refreshVocab();
  },

  refreshVocab() {
    const display = document.getElementById('vocab-display');
    if (display) display.innerHTML = Pages._vocabFlashcard(State.state.lang);
  },

  _vocabMode:  'grid',
  _vocabIndex: 0,
  _vocabFlip:  false,

  _xpCard(lang) {
    const totalPct = Math.round(State.state.totalXP / State.state.nextLevelXP * 100);
    return `
<div class="xp-card">
  <div class="xp-card-head">
    <div>
      <div style="font-size:10px;color:var(--fg-muted);font-family:var(--font-mono);text-transform:uppercase;letter-spacing:.1em;margin-bottom:2px;">${lang === 'jp' ? '現在レベル' : 'Current Level'}</div>
      <div class="xp-level-num">${State.state.level}</div>
      <div class="xp-level-lbl">${lang === 'jp' ? 'スカラー' : 'Scholar'}</div>
    </div>
    <div class="xp-award-badge">🏆</div>
  </div>
  <div class="xp-bar-row">
    <span>${fmt.num(State.state.totalXP)} XP</span>
    <span>${fmt.num(State.state.nextLevelXP)} XP</span>
  </div>
  <div class="progress-track mb-1">
    <div class="progress-fill" id="xp-level-bar"
      style="width:0%;background:linear-gradient(90deg,var(--accent),#E0B050);"
      data-progress="${totalPct}"></div>
  </div>
  <div class="xp-next-lbl">${fmt.num(State.state.nextLevelXP - State.state.totalXP)} XP ${lang === 'jp' ? 'でLv.13へ' : 'to Level 13'}</div>
  <div>
    <div style="font-size:11px;color:var(--fg-muted);margin:12px 0 6px;">${lang === 'jp' ? '今週' : 'This week'}</div>
    <div class="week-dots">
      ${WeekData.map(d => `
      <div class="week-dot-wrap">
        <div class="week-dot" style="background:${d.active ? 'var(--primary-dim)' : 'var(--card-elevated)'};color:${d.active ? 'var(--primary)' : 'var(--fg-subtle)'};border-color:${d.active ? 'var(--primary)' : 'var(--border)'};">
          ${d.active ? '✓' : d.day}
        </div>
        <span class="week-day-lbl">${d.day}</span>
      </div>`).join('')}
    </div>
  </div>
  <div class="xp-card-foot">
    <div style="display:flex;align-items:center;gap:6px;">
      <span class="badge badge-n4">N4</span>
      <span class="text-muted" style="font-size:11px;">${lang === 'jp' ? '目標' : 'Target'}</span>
    </div>
    <span style="font-size:11px;font-weight:600;color:var(--accent);">${lang === 'jp' ? 'ランク: スカラー' : 'Rank: Scholar'}</span>
  </div>
</div>`;
  },

  _activityCard(lang) {
    const acts = [
      { icon:'📖', col:'var(--n4)', dim:'var(--n4-dim)', label: lang === 'jp' ? 'N4漢字を学習' : 'Studied N4 kanji',     detail: lang === 'jp' ? '漢字12個' : '12 new kanji',    time:'2h ago' },
      { icon:'⚡', col:'var(--primary)', dim:'var(--primary-dim)', label: lang === 'jp' ? '120 XP 獲得' : 'Earned 120 XP', detail: lang === 'jp' ? 'クイズ完了' : 'Quiz completed', time:'3h ago' },
      { icon:'✅', col:'var(--n5)', dim:'var(--n5-dim)', label: lang === 'jp' ? 'N5語彙復習' : 'N5 vocab review',        detail:'98% accuracy',                                    time:'5h ago' },
      { icon:'🏆', col:'var(--accent)', dim:'var(--accent-dim)', label: lang === 'jp' ? 'バッジ獲得' : 'Badge unlocked', detail: lang === 'jp' ? 'スカラーランク' : 'Scholar rank', time:'Yesterday' },
      { icon:'🔥', col:'var(--accent)', dim:'var(--accent-dim)', label: lang === 'jp' ? '14日連続！' : '14-day streak!', detail: lang === 'jp' ? 'マイルストーン達成' : 'Milestone!', time:'Yesterday' },
    ];
    return `
<div class="activity-card">
  <div class="activity-head">
    <span style="font-size:13px;font-weight:600;color:var(--fg);">${lang === 'jp' ? '最近の活動' : 'Recent Activity'}</span>
    <span class="text-muted" style="font-size:11px;">${lang === 'jp' ? '今日' : 'Today'}</span>
  </div>
  <div class="activity-list">
    ${acts.map(a => `
    <div class="activity-item">
      <div class="activity-icon" style="background:${a.dim}">${a.icon}</div>
      <div style="flex:1;min-width:0;">
        <div class="activity-label">${a.label}</div>
        <div class="activity-detail">${a.detail}</div>
      </div>
      <span class="activity-time">${a.time}</span>
    </div>`).join('')}
  </div>
</div>`;
  },

  /* --------------------------------------------------
     KANJI PAGE (full page)
  -------------------------------------------------- */
  kanji() {
    const lang = State.state.lang;
    renderContent(`
<div class="animate-fade-up">
  <div class="page-header">
    <h1 class="page-title">📖 ${lang === 'jp' ? '漢字' : 'Kanji'}</h1>
    <p class="page-sub">${lang === 'jp' ? 'JLPTレベル別に漢字を学習しましょう。クリックして詳細を見る。' : 'Study kanji by JLPT level. Click any character for details.'}</p>
  </div>
  <div class="card p-5 mb-4">
    <div class="grid-4">
      ${KanjiData.N5.filter(k=>State.isLearned(k.id)).length > 0
        ? `<div class="stat-card" style="border-color:var(--n5);">
            <div class="stat-head"><span>✓</span><span class="badge badge-n5">N5</span></div>
            <div><span class="stat-value">${KanjiData.N5.filter(k=>State.isLearned(k.id)).length}</span><span class="stat-unit">/ ${KanjiData.N5.length}</span></div>
            <div class="stat-label">Learned</div>
           </div>` : ''}
      <div><span class="stat-value">${State.learnedCount()}</span><span class="stat-unit"> total</span></div>
    </div>
  </div>
  ${Pages._kanjiSection(lang, Pages._currentKanjiTab)}
</div>`);
  },

  /* --------------------------------------------------
     VOCAB PAGE (full page)
  -------------------------------------------------- */
  vocab(params = {}) {
    const lang = State.state.lang;
    const search = params.search || '';
    const words = search
      ? VocabData.filter(v => v.jp.includes(search) || v.en.toLowerCase().includes(search.toLowerCase()) || v.romaji.includes(search))
      : VocabData;

    renderContent(`
<div class="animate-fade-up">
  <div class="page-header">
    <h1 class="page-title">📚 ${lang === 'jp' ? '語彙' : 'Vocabulary'}</h1>
    <p class="page-sub">${lang === 'jp' ? 'フラッシュカードやグリッドで語彙を学習しましょう。' : 'Build your vocabulary with flashcards and grid study.'}</p>
  </div>
  ${Pages._vocabSection(lang, Pages._vocabMode)}
</div>`);
  },

  /* --------------------------------------------------
     GRAMMAR PAGE
  -------------------------------------------------- */
  grammar() {
    const lang = State.state.lang;
    renderContent(`
<div class="animate-fade-up">
  <div class="page-header">
    <h1 class="page-title">📝 ${lang === 'jp' ? '文法' : 'Grammar'}</h1>
    <p class="page-sub">${lang === 'jp' ? '日本語の文法パターンとJLPT文法を学習しましょう。' : 'Study Japanese grammar patterns and JLPT grammar points.'}</p>
  </div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    ${GrammarData.map(g => `
    <div class="grammar-item" id="gitem-${g.id}">
      <button class="grammar-toggle-btn" onclick="Pages.toggleGrammar('${g.id}')">
        <div>
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:3px;">
            <span class="badge" style="background:${levelDim(g.level)};color:${levelColor(g.level)}">${g.level}</span>
            <span class="grammar-pattern">${g.pattern}</span>
          </div>
          <div class="grammar-pattern-title">${g.title}</div>
        </div>
        <span id="garrow-${g.id}" style="color:var(--fg-muted);transition:transform .2s;">›</span>
      </button>
      <div class="grammar-body" id="gbody-${g.id}" style="display:none;">
        <p class="grammar-explanation">${g.explanation}</p>
        <div class="grammar-structure-box">
          <div class="grammar-structure-label">${lang === 'jp' ? '構造' : 'Structure'}</div>
          <div class="grammar-structure">${g.structure}</div>
        </div>
        <div style="font-size:12px;font-weight:600;color:var(--fg-muted);margin-bottom:8px;">${lang === 'jp' ? '例文' : 'Examples'}</div>
        <div class="grammar-examples">
          ${g.examples.map(ex => `
          <div class="grammar-example">
            <div>
              <div class="grammar-example-jp">${ex.jp}</div>
              <div class="grammar-example-en">${ex.en}</div>
            </div>
            <button class="speak-btn" onclick="Speech.speak('${ex.jp}')">🔊</button>
          </div>`).join('')}
        </div>
      </div>
    </div>`).join('')}
  </div>
</div>`);
  },

  toggleGrammar(id) {
    const body  = document.getElementById(`gbody-${id}`);
    const arrow = document.getElementById(`garrow-${id}`);
    if (!body) return;
    const open = body.style.display === 'block';
    body.style.display  = open ? 'none' : 'block';
    if (arrow) arrow.style.transform = open ? '' : 'rotate(90deg)';
  },

  /* --------------------------------------------------
     LISTENING PAGE
  -------------------------------------------------- */
  listening() {
    const lang = State.state.lang;
    Pages._listeningId    = null;
    Pages._listeningLine  = null;
    Pages._abortCtrl      = null;
    Pages._quizAnswers    = {};

    renderContent(`
<div class="animate-fade-up">
  <div class="page-header">
    <h1 class="page-title">🎧 ${lang === 'jp' ? '聴解' : 'Listening'}</h1>
    <p class="page-sub">${lang === 'jp' ? 'ダイアログの聴解練習をしましょう。' : 'Practice listening comprehension with realistic dialogues.'}</p>
  </div>
  <div class="listening-grid">
    ${ListeningData.map(d => `
    <div class="dialogue-card" onclick="Pages.openDialogue('${d.id}')">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <span class="badge" style="background:${levelDim(d.level)};color:${levelColor(d.level)}">${d.level}</span>
        <span class="text-muted" style="font-size:11px;">${d.lineCount} lines</span>
      </div>
      <div style="font-size:16px;font-weight:700;color:var(--fg);font-family:var(--font-jp-sans);margin-bottom:3px;">${d.topicJp}</div>
      <div style="font-size:13px;color:var(--fg-muted);margin-bottom:10px;">${d.topic}</div>
      <div style="font-size:11px;color:var(--fg-subtle);">${d.preview}</div>
      <button class="btn btn-primary" style="margin-top:14px;width:100%;">
        ${lang === 'jp' ? '始める ›' : 'Start Listening ›'}
      </button>
    </div>`).join('')}
  </div>
  <div id="dialogue-view" style="display:none;margin-top:24px;"></div>
</div>`);
  },

  openDialogue(id) {
    const d = ListeningData.find(x => x.id === id);
    if (!d) return;
    Pages._listeningId = id;
    const lang = State.state.lang;
    const view = document.getElementById('dialogue-view');
    if (!view) return;
    view.style.display = 'block';
    view.innerHTML = `
<div class="card p-6">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
    <div>
      <span class="badge" style="background:${levelDim(d.level)};color:${levelColor(d.level)}">${d.level}</span>
      <h2 style="font-size:18px;font-weight:700;margin-top:6px;">${d.topicJp} <span style="font-size:13px;color:var(--fg-muted);">${d.topic}</span></h2>
    </div>
    <div style="display:flex;gap:8px;">
      <button class="btn btn-primary" onclick="Pages.playDialogue('${id}')">▶ ${lang === 'jp' ? '再生' : 'Play All'}</button>
      <button class="btn btn-secondary" onclick="Speech.cancel()">⏹</button>
    </div>
  </div>
  <div style="display:flex;flex-direction:column;gap:8px;" id="script-${id}">
    ${d.script.map(line => `
    <div class="script-line" id="sl-${line.id}" onclick="Speech.speak('${line.jp}')">
      <div class="script-speaker">${Security.esc(line.speaker)}</div>
      <div style="flex:1;">
        <div class="script-jp">${line.jp}</div>
        <div class="script-en">${line.en}</div>
      </div>
      <button class="speak-btn" onclick="event.stopPropagation();Speech.speak('${line.jp}')">🔊</button>
    </div>`).join('')}
  </div>
  <div style="margin-top:20px;padding-top:16px;border-top:1px solid var(--border);">
    <div style="font-size:13px;font-weight:600;color:var(--fg);margin-bottom:10px;">${lang === 'jp' ? '重要フレーズ' : 'Key Phrases'}</div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;">
      ${d.phrases.map(p => `
      <div style="background:var(--card-elevated);border:1px solid var(--border);border-radius:8px;padding:8px 12px;cursor:pointer;" onclick="Speech.speak('${p.jp}')">
        <div style="font-family:var(--font-jp-sans);font-size:14px;">${p.jp}</div>
        <div style="font-size:11px;color:var(--fg-muted);">${p.en}</div>
      </div>`).join('')}
    </div>
  </div>
  ${d.quiz.length ? `
  <div style="margin-top:20px;padding-top:16px;border-top:1px solid var(--border);">
    <div style="font-size:13px;font-weight:600;color:var(--fg);margin-bottom:12px;">📝 ${lang === 'jp' ? 'クイズ' : 'Comprehension Quiz'}</div>
    ${d.quiz.map(q => `
    <div style="margin-bottom:14px;">
      <div style="font-size:13px;color:var(--fg);margin-bottom:8px;">${Security.esc(q.question)}</div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        ${q.options.map((opt, i) => `
        <button class="quiz-option" id="qopt-${q.id}-${i}"
          style="background:var(--card-elevated);border-color:var(--border);color:var(--fg);"
          onclick="Pages.checkAnswer('${q.id}', ${i}, ${q.answer})">
          ${String.fromCharCode(65+i)}) ${Security.esc(opt)}
        </button>`).join('')}
      </div>
    </div>`).join('')}
  </div>` : ''}
</div>`;
    view.scrollIntoView({ behavior: 'smooth', block: 'start' });
  },

  checkAnswer(qid, selected, correct) {
    if (Pages._quizAnswers[qid] !== undefined) return;
    Pages._quizAnswers[qid] = selected;
    const isRight = selected === correct;
    document.querySelectorAll(`[id^="qopt-${qid}-"]`).forEach((btn, i) => {
      if (i === correct) { btn.style.background = 'var(--n5-dim)'; btn.style.borderColor = 'var(--n5)'; btn.style.color = 'var(--n5)'; }
      else if (i === selected && !isRight) { btn.style.background = 'var(--n1-dim)'; btn.style.borderColor = 'var(--n1)'; btn.style.color = 'var(--n1)'; }
      btn.disabled = true;
    });
    if (isRight) Toast.success('Correct! 🎉');
    else Toast.error('Incorrect. Try again next time.');
  },

  playDialogue(id) {
    const d = ListeningData.find(x => x.id === id);
    if (!d) return;
    if (Pages._abortCtrl) Pages._abortCtrl.abort();
    Pages._abortCtrl = new AbortController();
    Speech.playSequence(
      d.script, line => line.jp,
      line => {
        document.querySelectorAll('.script-line').forEach(el => el.classList.remove('active'));
        if (line) {
          const el = document.getElementById(`sl-${line.id}`);
          if (el) { el.classList.add('active'); el.scrollIntoView({ block:'nearest' }); }
        }
      },
      Pages._abortCtrl.signal
    );
  },

  _listeningId:   null,
  _abortCtrl:     null,
  _quizAnswers:   {},

  /* --------------------------------------------------
     READING PAGE
  -------------------------------------------------- */
  reading() {
    const lang = State.state.lang;
    Pages._readingId = null;
    Pages._readingAnswers = {};

    renderContent(`
<div class="animate-fade-up">
  <div class="page-header">
    <h1 class="page-title">📄 ${lang === 'jp' ? '読解' : 'Reading'}</h1>
    <p class="page-sub">${lang === 'jp' ? 'グレード別テキストで読解力を鍛えましょう。' : 'Improve reading comprehension with graded texts.'}</p>
  </div>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:14px;">
    ${ReadingData.map(r => `
    <div class="dialogue-card" onclick="Pages.openPassage('${r.id}')">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <span class="badge" style="background:${levelDim(r.level)};color:${levelColor(r.level)}">${r.level}</span>
        <span class="text-muted" style="font-size:11px;">${r.difficulty}</span>
      </div>
      <div style="font-size:16px;font-weight:700;color:var(--fg);font-family:var(--font-jp-sans);margin-bottom:3px;">${r.titleJp}</div>
      <div style="font-size:13px;color:var(--fg-muted);margin-bottom:10px;">${r.title}</div>
      <div style="font-size:11px;color:var(--fg-subtle);">${r.wordCount} words</div>
      <button class="btn btn-primary" style="margin-top:14px;width:100%;">${lang === 'jp' ? '読む ›' : 'Read Now ›'}</button>
    </div>`).join('')}
  </div>
  <div id="passage-view" style="display:none;margin-top:24px;"></div>
</div>`);
  },

  openPassage(id) {
    const r = ReadingData.find(x => x.id === id);
    if (!r) return;
    const lang = State.state.lang;
    const view = document.getElementById('passage-view');
    if (!view) return;
    view.style.display = 'block';
    view.innerHTML = `
<div class="card p-6">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
    <div>
      <span class="badge mb-2" style="background:${levelDim(r.level)};color:${levelColor(r.level)}">${r.level} · ${r.difficulty}</span>
      <h2 style="font-size:18px;font-weight:700;font-family:var(--font-jp-sans);">${r.titleJp}</h2>
      <div style="font-size:13px;color:var(--fg-muted);">${r.title}</div>
    </div>
    <button class="btn btn-primary" onclick="Pages.playPassage('${id}')">🔊 ${lang === 'jp' ? '読み上げ' : 'Read Aloud'}</button>
  </div>
  <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;" id="plines-${id}">
    ${r.lines.map(line => `
    <div class="passage-line" id="pl-${line.id}" onclick="Speech.speak('${line.jp}')">
      <div style="flex:1;">
        <div class="passage-jp">${line.jp}</div>
        <div class="passage-en">${line.en}</div>
      </div>
      <button class="speak-btn" onclick="event.stopPropagation();Speech.speak('${line.jp}')">🔊</button>
    </div>`).join('')}
  </div>
  <div style="padding-top:16px;border-top:1px solid var(--border);margin-bottom:16px;">
    <div style="font-size:13px;font-weight:600;margin-bottom:10px;">${lang === 'jp' ? '重要語彙' : 'Key Vocabulary'}</div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;">
      ${r.vocab.map(v => `
      <div style="background:var(--card-elevated);border:1px solid var(--border);border-radius:8px;padding:8px 12px;cursor:pointer;" onclick="Speech.speak('${v.jp}')">
        <div style="font-family:var(--font-jp-sans);font-size:15px;">${v.jp}</div>
        <div style="font-size:11px;color:var(--fg-muted);">${v.en}</div>
      </div>`).join('')}
    </div>
  </div>
  <div>
    <div style="font-size:13px;font-weight:600;margin-bottom:12px;">📝 ${lang === 'jp' ? '読解クイズ' : 'Reading Quiz'}</div>
    ${r.quiz.map(q => `
    <div style="margin-bottom:14px;">
      <div style="font-size:13px;color:var(--fg);margin-bottom:8px;">${Security.esc(q.question)}</div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        ${q.options.map((opt,i) => `
        <button class="quiz-option" id="rqopt-${q.id}-${i}"
          style="background:var(--card-elevated);border-color:var(--border);color:var(--fg);"
          onclick="Pages.checkReadingAnswer('${q.id}',${i},${q.answer})">
          ${String.fromCharCode(65+i)}) ${Security.esc(opt)}
        </button>`).join('')}
      </div>
    </div>`).join('')}
  </div>
</div>`;
    view.scrollIntoView({ behavior: 'smooth', block: 'start' });
  },

  checkReadingAnswer(qid, selected, correct) {
    if (Pages._readingAnswers[qid] !== undefined) return;
    Pages._readingAnswers[qid] = selected;
    document.querySelectorAll(`[id^="rqopt-${qid}-"]`).forEach((btn, i) => {
      if (i === correct) { btn.style.background = 'var(--n5-dim)'; btn.style.borderColor = 'var(--n5)'; btn.style.color = 'var(--n5)'; }
      else if (i === selected && selected !== correct) { btn.style.background = 'var(--n1-dim)'; btn.style.borderColor = 'var(--n1)'; btn.style.color = 'var(--n1)'; }
      btn.disabled = true;
    });
    Toast[selected === correct ? 'success' : 'error'](selected === correct ? 'Correct! 🎉' : 'Incorrect.');
  },

  playPassage(id) {
    const r = ReadingData.find(x => x.id === id);
    if (!r) return;
    if (Pages._abortCtrl) Pages._abortCtrl.abort();
    Pages._abortCtrl = new AbortController();
    Speech.playSequence(
      r.lines, l => l.jp,
      l => {
        document.querySelectorAll('.passage-line').forEach(el => el.classList.remove('active'));
        if (l) { const el = document.getElementById(`pl-${l.id}`); if (el) el.classList.add('active'); }
      },
      Pages._abortCtrl.signal
    );
  },

  _readingAnswers: {},

  /* --------------------------------------------------
     KANA CHART
  -------------------------------------------------- */
  kana() {
    const lang = State.state.lang;
    const tabs = [
      { id:'hiragana', label:'ひらがな Hiragana' },
      { id:'katakana', label:'カタカナ Katakana' },
      { id:'dakuten',  label:'濁点 Dakuten' },
      { id:'combinations', label:'組み合わせ Combos' },
    ];
    Pages._kanaTab = 'hiragana';

    renderContent(`
<div class="animate-fade-up">
  <div class="page-header">
    <h1 class="page-title">🔤 ${lang === 'jp' ? 'かな表' : 'Kana Chart'}</h1>
    <p class="page-sub">${lang === 'jp' ? 'ひらがな・カタカナの参照表。クリックして発音を聞く。' : 'Hiragana & Katakana reference. Click any character to hear pronunciation.'}</p>
  </div>
  <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;">
    ${tabs.map(t => `
    <button id="kana-tab-${t.id}"
      class="btn ${t.id === 'hiragana' ? 'btn-primary' : 'btn-secondary'}"
      onclick="Pages.switchKanaTab('${t.id}')">
      ${t.label}
    </button>`).join('')}
  </div>
  <div id="kana-grid-wrap">${Pages._kanaGrid('hiragana', lang)}</div>
</div>`);
  },

  _kanaGrid(tab, lang) {
    const data = KanaData[tab] || [];
    return `
<div class="card p-5">
  <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;">
    ${data.map(k => k.jp
      ? `<div class="kana-cell" onclick="Speech.speak('${k.jp}')" title="${k.romaji}">
           <div class="kana-char" style="font-family:var(--font-jp-sans)">${k.jp}</div>
           <div class="kana-romaji">${k.romaji}</div>
         </div>`
      : `<div class="kana-cell empty"></div>`
    ).join('')}
  </div>
</div>`;
  },

  switchKanaTab(tab) {
    Pages._kanaTab = tab;
    const lang = State.state.lang;
    document.querySelectorAll('[id^="kana-tab-"]').forEach(btn => {
      const isActive = btn.id === `kana-tab-${tab}`;
      btn.className = `btn ${isActive ? 'btn-primary' : 'btn-secondary'}`;
    });
    const wrap = document.getElementById('kana-grid-wrap');
    if (wrap) wrap.innerHTML = Pages._kanaGrid(tab, lang);
  },

  _kanaTab: 'hiragana',

  /* --------------------------------------------------
     PROGRESS PAGE
  -------------------------------------------------- */
  progress() {
    const lang = State.state.lang;
    const bars = [
      { label:'Kanji N5', labelJp:'漢字N5', prog:94, col:'var(--n5)' },
      { label:'Kanji N4', labelJp:'漢字N4', prog:72, col:'var(--n4)' },
      { label:'Vocabulary',labelJp:'語彙',   prog:65, col:'var(--primary)' },
      { label:'Grammar',  labelJp:'文法',   prog:48, col:'var(--n3)' },
      { label:'Listening',labelJp:'聴解',   prog:35, col:'var(--accent)' },
      { label:'Reading',  labelJp:'読解',   prog:28, col:'var(--n2)' },
    ];

    const maxXP = Math.max(...WeekData.map(d => d.xp), 1);

    renderContent(`
<div class="animate-fade-up">
  <div class="page-header">
    <h1 class="page-title">📊 ${lang === 'jp' ? '進捗' : 'Progress'}</h1>
    <p class="page-sub">${lang === 'jp' ? '日本語学習の全分野の進捗を追跡しましょう。' : 'Track your Japanese learning journey across all areas.'}</p>
  </div>
  <div class="grid-3 mb-5">
    ${[
      { icon:'⚡', val:`${fmt.num(State.state.totalXP)} XP`, lbl: lang==='jp' ? '合計XP' : 'Total XP', col:'var(--primary)' },
      { icon:'🔥', val:`${State.state.streak}`, unit: lang==='jp' ? '日連続' : ' day streak', lbl: lang==='jp' ? '連続学習' : 'Current Streak', col:'var(--accent)' },
      { icon:'📖', val:`${State.learnedCount()}`, unit: lang==='jp' ? '個' : ' kanji', lbl: lang==='jp' ? '漢字習得数' : 'Kanji Learned', col:'var(--n4)' },
    ].map(s => `
    <div class="stat-card" style="border-color:${s.col}22;">
      <div style="font-size:28px;margin-bottom:6px;">${s.icon}</div>
      <div><span class="stat-value">${s.val}</span>${s.unit ? `<span class="stat-unit">${s.unit}</span>` : ''}</div>
      <div class="stat-label">${s.lbl}</div>
    </div>`).join('')}
  </div>

  <div class="card p-6 mb-4">
    <h3 style="font-size:14px;font-weight:600;margin-bottom:16px;">${lang === 'jp' ? 'スキル別進捗' : 'Skill Breakdown'}</h3>
    <div style="display:flex;flex-direction:column;gap:14px;">
      ${bars.map(b => `
      <div>
        <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px;">
          <span>${lang === 'jp' ? b.labelJp : b.label}</span>
          <span style="color:${b.col};font-family:var(--font-mono)">${b.prog}%</span>
        </div>
        <div class="progress-track" style="height:8px;">
          <div class="progress-fill" data-progress="${b.prog}"
            style="width:0%;background:${b.col};border-radius:4px;"></div>
        </div>
      </div>`).join('')}
    </div>
  </div>

  <div class="card p-6 mb-4">
    <h3 style="font-size:14px;font-weight:600;margin-bottom:16px;">${lang === 'jp' ? '今週のXP' : 'Weekly XP'}</h3>
    <div class="xp-bar-chart">
      ${WeekData.map(d => `
      <div class="xp-bar-col">
        <div class="xp-bar-val">${d.xp || ''}</div>
        <div class="xp-bar" style="height:${d.xp ? Math.max(8, Math.round(d.xp / maxXP * 100)) : 4}px;background:${d.active ? 'var(--primary)' : 'var(--card-elevated)'};">&nbsp;</div>
        <div class="xp-bar-day">${d.day}</div>
      </div>`).join('')}
    </div>
  </div>

  <div class="card p-6">
    <h3 style="font-size:14px;font-weight:600;margin-bottom:16px;">${lang === 'jp' ? '実績' : 'Achievements'}</h3>
    <div class="achievement-grid">
      ${Achievements.map(a => `
      <div class="achievement-card${a.earned ? ' earned' : ''}">
        <div class="achievement-icon" style="background:${a.earned ? 'var(--accent-dim)' : 'var(--card)'};">${a.icon}</div>
        <div>
          <div class="achievement-title">
            ${a.title}
            ${a.earned ? '<span style="color:var(--n5);font-size:10px;">✓</span>' : ''}
          </div>
          <div class="achievement-desc">${a.desc}</div>
          ${a.date ? `<div class="achievement-date">${a.date}</div>` : ''}
        </div>
      </div>`).join('')}
    </div>
  </div>
</div>`);
  },

  /* --------------------------------------------------
     TIMER PAGE
  -------------------------------------------------- */
  timer() {
    const lang = State.state.lang;
    renderContent(`
<div class="animate-fade-up">
  <div class="page-header">
    <h1 class="page-title">⏱️ ${lang === 'jp' ? '学習タイマー' : 'Study Timer'}</h1>
    <p class="page-sub">${lang === 'jp' ? 'ポモドーロ法で集中して学習しましょう。' : 'Use the Pomodoro technique to stay focused.'}</p>
  </div>
  <div style="max-width:380px;margin:0 auto;">
    ${Pomodoro.renderCard()}
  </div>
  <div class="card p-6 mt-4" style="max-width:380px;margin:20px auto 0;">
    <h3 style="font-size:14px;font-weight:600;margin-bottom:12px;">${lang === 'jp' ? 'ポモドーロ法とは？' : 'About Pomodoro'}</h3>
    <p style="font-size:13px;color:var(--fg-muted);line-height:1.65;">
      ${lang === 'jp'
        ? '25分集中して勉強し、5分休憩するサイクルを繰り返します。4サイクル後に15〜30分の長い休憩を取ります。'
        : 'Work for 25 minutes, then take a 5-minute break. After 4 cycles, take a longer 15–30 minute break.'}
    </p>
    <div style="margin-top:12px;display:flex;flex-direction:column;gap:8px;">
      ${[
        { icon:'🎯', label: lang==='jp' ? '25分集中' : '25 min focus', col:'var(--primary)' },
        { icon:'☕', label: lang==='jp' ? '5分休憩' : '5 min break',   col:'var(--n5)' },
        { icon:'🌟', label: lang==='jp' ? '15分長休憩' : '15 min long break', col:'var(--n4)' },
      ].map(item => `
      <div style="display:flex;align-items:center;gap:10px;padding:8px;background:var(--card-elevated);border-radius:8px;">
        <span style="font-size:18px;">${item.icon}</span>
        <span style="font-size:13px;color:${item.col};font-weight:600;">${item.label}</span>
      </div>`).join('')}
    </div>
  </div>
</div>`);
    Pomodoro.attachEvents();
  },

  /* --------------------------------------------------
     PROFILE PAGE
  -------------------------------------------------- */
  profile() {
    const fbUser = window._nzUser;
    const fbData = window._nzUserData;
    const displayName = fbUser?.displayName || fbData?.displayName || Session.get()?.user || 'Learner';
    const email = fbUser?.email || fbData?.email || '';
    const photoURL = fbUser?.photoURL || fbData?.photoURL || '';
    const level = fbData?.level || Session.get()?.level || 1;
    const lang = State.state.lang;
    const initials = (displayName || 'L').charAt(0).toUpperCase();
    const profileAvatar = photoURL
      ? `<img src="${photoURL}" alt="${Security.esc(displayName)}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`
      : initials;

    renderContent(`
<div class="animate-fade-up">
  <div class="profile-hero">
    <div class="profile-avatar">${profileAvatar}</div>
    <div>
      <div class="profile-name">${Security.esc(displayName)}</div>
      <div class="profile-email" style="font-size:12px;color:var(--fg-muted);margin-bottom:4px;">${Security.esc(email)}</div>
      <div class="profile-sub">${lang === 'jp' ? `レベル${level} スカラー · 14日連続 🔥` : `Level ${level} Scholar · 14-day streak 🔥`}</div>
      <div class="profile-tags">
        <span class="badge badge-n4">N4 ${lang === 'jp' ? '目標' : 'Target'}</span>
        <span class="badge badge-n5">N5 ✓</span>
      </div>
    </div>
    <div style="margin-left:auto;display:flex;gap:8px;">
      <button class="btn btn-secondary" onclick="Toast.info('${lang === 'jp' ? '設定は近日公開' : 'Settings coming soon'}')">⚙️ ${lang === 'jp' ? '設定' : 'Settings'}</button>
    </div>
  </div>

  <div class="profile-stats-grid mb-5">
    ${[
      { icon:'📖', val:`${State.learnedCount()}`, lbl: lang==='jp' ? '漢字習得' : 'Kanji Learned' },
      { icon:'⚡', val:fmt.num(State.state.totalXP), lbl: lang==='jp' ? '合計XP' : 'Total XP' },
      { icon:'🔥', val:`${State.state.streak}`, lbl: lang==='jp' ? '連続日数' : 'Day Streak' },
    ].map(s => `
    <div class="profile-stat-card">
      <div class="profile-stat-icon">${s.icon}</div>
      <div class="profile-stat-val">${s.val}</div>
      <div class="profile-stat-lbl">${s.lbl}</div>
    </div>`).join('')}
  </div>

  <div class="grid-2 mb-4">
    <div class="card p-5">
      <h3 style="font-size:14px;font-weight:600;margin-bottom:14px;">${lang === 'jp' ? 'JLPT進捗' : 'JLPT Progress'}</h3>
      ${JLPTLevels.slice(0,3).map(lv => `
      <div style="margin-bottom:12px;">
        <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px;">
          <span style="color:${lv.color}">${lv.level} ${lv.title}</span>
          <span style="font-family:var(--font-mono);color:${lv.color}">${lv.progress}%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" data-progress="${lv.progress}"
            style="width:0%;background:${lv.color}"></div>
        </div>
      </div>`).join('')}
    </div>
    <div class="card p-5">
      <h3 style="font-size:14px;font-weight:600;margin-bottom:14px;">${lang === 'jp' ? '今週の学習' : 'This Week'}</h3>
      <div class="week-dots" style="justify-content:space-between;">
        ${WeekData.map(d => `
        <div class="week-dot-wrap">
          <div class="week-dot" style="background:${d.active ? 'var(--primary-dim)' : 'var(--card-elevated)'};color:${d.active ? 'var(--primary)' : 'var(--fg-subtle)'};border-color:${d.active ? 'var(--primary)' : 'var(--border)'};">
            ${d.active ? '✓' : d.day}
          </div>
          <span class="week-day-lbl">${d.day}</span>
        </div>`).join('')}
      </div>
    </div>
  </div>

  <div class="card p-5">
    <h3 style="font-size:14px;font-weight:600;margin-bottom:14px;">${lang === 'jp' ? '実績' : 'Achievements'}</h3>
    <div class="achievement-grid">
      ${Achievements.filter(a => a.earned).map(a => `
      <div class="achievement-card earned">
        <div class="achievement-icon" style="background:var(--accent-dim);">${a.icon}</div>
        <div>
          <div class="achievement-title">${a.title} <span style="color:var(--n5);">✓</span></div>
          <div class="achievement-desc">${a.desc}</div>
          <div class="achievement-date">${a.date}</div>
        </div>
      </div>`).join('')}
    </div>
  </div>
</div>`);
  },

  /* --------------------------------------------------
     JLPT LEVEL PAGES
  -------------------------------------------------- */
  jlptLevel(key) {
    const info = JLPTPageInfo[key];
    const lang = State.state.lang;
    if (!info) { renderContent('<div class="empty-state"><div class="empty-state-icon">🔒</div><div class="empty-state-text">Level not available yet.</div></div>'); return; }

    const kanjiForLevel = KanjiData[info.level] || [];
    const studyItems = [
      { icon:'📖', label: lang==='jp'?'漢字':'Kanji',     desc:`${kanjiForLevel.length} characters`,    page:`kanji` },
      { icon:'📚', label: lang==='jp'?'語彙':'Vocabulary', desc:`${VocabData.filter(v=>v.level===info.level).length} words`, page:'vocab' },
      { icon:'📝', label: lang==='jp'?'文法':'Grammar',    desc:`${GrammarData.filter(g=>g.level===info.level).length} patterns`, page:'grammar' },
      { icon:'🎧', label: lang==='jp'?'聴解':'Listening',  desc:`${ListeningData.filter(d=>d.level===info.level).length} dialogues`, page:'listening' },
      { icon:'📄', label: lang==='jp'?'読解':'Reading',    desc:`${ReadingData.filter(r=>r.level===info.level).length} passages`, page:'reading' },
    ];

    renderContent(`
<div class="animate-fade-up">
  <button class="back-btn" onclick="Router.go('dashboard')">‹ ${lang === 'jp' ? '戻る' : 'Back to Dashboard'}</button>
  <div class="jlpt-hero" style="border-color:${info.color};background:linear-gradient(135deg,${info.dim},transparent);">
    <div class="jlpt-hero-watermark" style="color:${info.color}">${info.kanji}</div>
    <div style="display:flex;align-items:center;gap:14px;margin-bottom:10px;">
      <span class="badge" style="background:${info.dim};color:${info.color};font-size:16px;padding:5px 14px;">${info.level}</span>
      <h1 style="font-family:var(--font-jp);font-size:28px;color:${info.color}">${info.title}</h1>
      <span style="font-size:14px;color:var(--fg-muted);">${info.subtitle}</span>
    </div>
    <p style="font-size:13px;color:var(--fg-muted);margin-bottom:16px;">${info.desc}</p>
    <div style="margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--fg-muted);margin-bottom:6px;">
        <span>${lang === 'jp' ? '進捗' : 'Progress'}: ${info.learned}/${info.total}</span>
        <span style="color:${info.color};font-family:var(--font-mono)">${info.progress}%</span>
      </div>
      <div class="progress-track" style="height:8px;">
        <div class="progress-fill" data-progress="${info.progress}"
          style="width:0%;background:${info.color}"></div>
      </div>
    </div>
  </div>

  <div class="section-header mb-3">
    <span class="section-title">${lang === 'jp' ? '学習コンテンツ' : 'Study Content'}</span>
  </div>
  <div class="jlpt-study-grid mb-5">
    ${studyItems.map(item => `
    <div class="jlpt-study-card" onclick="Router.go('${item.page}')">
      <div class="jlpt-study-icon" style="background:${info.dim}">${item.icon}</div>
      <div>
        <div class="jlpt-study-label">${item.label}</div>
        <div class="jlpt-study-desc">${item.desc}</div>
      </div>
      <span style="margin-left:auto;color:var(--fg-muted);">›</span>
    </div>`).join('')}
  </div>

  ${kanjiForLevel.length ? `
  <div class="section-header mb-3">
    <span class="section-title">${lang === 'jp' ? `${info.level}漢字` : `${info.level} Kanji`}</span>
    <span class="section-hint">${kanjiForLevel.length} characters</span>
  </div>
  <div class="kanji-grid-panel">
    <div class="kanji-tiles">${kanjiForLevel.map(k => `
    <div class="kanji-tile${State.isLearned(k.id) ? ' learned' : ''}"
      onclick="Pages._modalTab='${info.level}';Pages.openKanjiModal('${k.id}','${info.level}')">
      ${State.isLearned(k.id) ? `<div class="kanji-dot" style="background:${info.color}"></div>` : ''}
      <div class="kanji-char" style="color:${info.color}">${k.kanji}</div>
      <div class="kanji-read">${k.reading.split('・')[0]}</div>
      <div class="kanji-mean">${k.meaning.split(' / ')[0]}</div>
    </div>`).join('')}
    </div>
  </div>` : ''}
</div>`);
  },

  /* --------------------------------------------------
     LOGOUT
  -------------------------------------------------- */
  logout() {
    if (confirm('Are you sure you want to log out?')) {
      Session.clear();
      window.location.reload();
    }
  },
};

/* =========================================================
   KEYBOARD SHORTCUTS — Flashcard nav
   ========================================================= */
document.addEventListener('keydown', e => {
  if (Pages._vocabMode === 'flashcard') {
    if (e.key === 'ArrowRight') { e.preventDefault(); Pages.nextCard(); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); Pages.prevCard(); }
    else if (e.key === ' ') { e.preventDefault(); Pages.flipCard(); }
  }
  // Escape closes modal
  if (e.key === 'Escape') {
    const modal = document.getElementById('kanji-modal');
    if (modal && modal.style.display !== 'none') Pages.closeKanjiModal();
    closeMobileDrawer();
    closeUserMenu();
  }
});
