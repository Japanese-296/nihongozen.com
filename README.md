# NihongoZen — HTML/CSS/JS Build

Converted from Next.js source into a clean, secure, multi-file static website.

## 📁 Folder Structure

```
nihongozen/
├── index.html          ← Main app (SPA entry point)
├── pages/
│   └── login.html      ← Login / Sign-up page
├── css/
│   ├── tokens.css      ← Design tokens, resets, animations, utilities
│   ├── layout.css      ← Sidebar, topbar, mobile nav
│   └── components.css  ← All component styles (cards, kanji, vocab, etc.)
└── js/
    ├── core.js         ← Security utils, router, toast, speech, state
    ├── data.js         ← All app data (kanji, vocab, grammar, etc.)
    ├── pomodoro.js     ← Pomodoro timer module
    └── pages.js        ← All page renderers
```

## 🚀 How to Run

Just open `index.html` in a browser — no build step, no server required.

For best results use a local server:
```bash
npx serve .
# or
python3 -m http.server 3000
```

## 🔐 Authentication

- Login page: `pages/login.html`
- Demo login auto-bypasses to dashboard
- Google Auth placeholder is in `pages/login.html` → `handleGoogleAuth()`
- Replace that function body with your real Google OAuth flow

## 🌐 Language Toggle

EN/日本語 toggle in the topbar switches all UI labels live.

## ✅ Working Features

- Dashboard (XP ring, stats, JLPT cards, kanji grid, vocab, pomodoro, activity)
- Kanji study with modal, mark as learned, N5/N4/N3 tabs
- Vocab grid + flashcard mode (keyboard: ← → Space)
- Grammar accordion with examples
- Listening dialogues with auto-play + comprehension quiz
- Reading passages with read-aloud + quiz
- Kana chart (Hiragana, Katakana, Dakuten, Combinations)
- Progress page with XP chart, skill bars, achievements
- Pomodoro timer (Focus / Short Break / Long Break)
- JLPT N5/N4/N3 detail pages
- Profile page
- Sidebar collapse, mobile drawer, mobile bottom nav
- XSS-safe rendering throughout
- Session auth with sessionStorage
