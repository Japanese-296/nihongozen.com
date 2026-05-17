/**
 * NihongoZen — Kanji Module
 * Fetches from data/kanji/{level}.json
 */

const NZKanji = (() => {
  const cache = {};

  async function load(level) {
    if (cache[level]) return cache[level];
    try {
      const res = await fetch(`data/kanji/${level}.json`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      cache[level] = await res.json();
      return cache[level];
    } catch (e) {
      console.warn(`Kanji load failed for ${level}:`, e);
      return [];
    }
  }

  async function render(level, gridEl, modalEl) {
    gridEl.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--l-text2)">Loading kanji…</div>';
    const data = await load(level);
    if (!data.length) {
      gridEl.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--l-text2)">No kanji data found.</div>';
      return;
    }
    gridEl.innerHTML = '<div class="l-kanji-grid">' +
      data.map((k, idx) => `
        <div class="l-kanji-cell" data-idx="${idx}">
          <span class="kj">${k.kanji}</span>
          <span class="kj-on">${k.on || k.kun}</span>
          <span class="kj-mean">${k.meaning}</span>
        </div>`).join('') +
      '</div>';

    gridEl.querySelectorAll('.l-kanji-cell').forEach(cell => {
      cell.addEventListener('click', () => {
        const k = data[parseInt(cell.dataset.idx)];
        openModal(k, level.toUpperCase(), modalEl);
      });
    });
  }

  function openModal(k, lv, modalEl) {
    modalEl.querySelector('#m-kanji').textContent  = k.kanji;
    modalEl.querySelector('#m-mean').textContent   = k.meaning;
    modalEl.querySelector('#m-on').textContent     = k.on   || '—';
    modalEl.querySelector('#m-kun').textContent    = k.kun  || '—';
    modalEl.querySelector('#m-level').textContent  = 'JLPT ' + lv;
    modalEl.querySelector('#m-ex').textContent     = k.example || '—';
    modalEl.classList.add('open');
  }

  return { load, render, openModal };
})();

window.NZKanji = NZKanji;
