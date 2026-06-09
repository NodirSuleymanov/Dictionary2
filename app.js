// ─── State ───────────────────────────────────────────────
let allWords    = [];
let direction   = 'de-uz';   // 'de-uz' yoki 'uz-de'
let activeFilter= 'all';
let apiAvailable= false;
let apiTimer    = null;

// ─── Type Ikonlari ───────────────────────────────────────
const TYPE_ICONS = {
  noun:        { icon: '📌', label: 'Ot'       },
  verb:        { icon: '⚡', label: 'Fe\'l'    },
  adjective:   { icon: '🎨', label: 'Sifat'    },
  phrase:      { icon: '💬', label: 'Ibora'    },
  idiom:       { icon: '🎭', label: 'Idioma'   },
  adverb:      { icon: '🔄', label: 'Ravish'   },
  number:      { icon: '🔢', label: 'Son'      },
  pronoun:     { icon: '👤', label: 'Olmosh'   },
  conjunction: { icon: '🔗', label: 'Bog\'lovchi'},
  preposition: { icon: '📍', label: 'Ko\'makchi'},
};

// ─── Lug'at bazasini yuklash ─────────────────────────────
// file:// protokolida fetch ishlamasligi uchun data.js dan yuklaymiz
function loadDictionary() {
  if (typeof WORDS_DATA !== 'undefined') {
    allWords = WORDS_DATA;
    renderWords(allWords);
    checkApi();
  } else {
    document.getElementById('resultsList').innerHTML =
      '<div class="no-result"><div class="no-result-icon">⚠️</div><p>Lug\'at bazasi yuklanmadi.</p></div>';
  }
}
loadDictionary();

// ─── API tekshirish ──────────────────────────────────────
function checkApi() {
  const statusEl = document.getElementById('apiStatus');
  fetch('https://api.mymemory.translated.net/get?q=Hallo&langpair=de|uz', { signal: AbortSignal.timeout(4000) })
    .then(r => r.json())
    .then(d => {
      if (d.responseStatus === 200) {
        apiAvailable = true;
        statusEl.textContent = '✅ Faol';
        statusEl.style.color = '#6ee7b7';
      } else {
        statusEl.textContent = '❌ Mavjud emas';
      }
    })
    .catch(() => {
      statusEl.textContent = '❌ Mavjud emas';
    });
}

// ─── Qidiruv ─────────────────────────────────────────────
const searchInput = document.getElementById('searchInput');
const clearBtn    = document.getElementById('clearBtn');
const searchInfo  = document.getElementById('searchInfo');

searchInput.addEventListener('input', () => {
  const val = searchInput.value.trim();
  clearBtn.style.display = val ? 'block' : 'none';
  clearTimeout(apiTimer);
  if (val.length === 0) {
    renderWords(allWords);
    searchInfo.textContent = '';
    return;
  }
  const local = filterWords(val);
  renderWords(local);
  if (local.length === 0) {
    if (apiAvailable) {
      showApiLoading();
      apiTimer = setTimeout(() => fetchOnline(val), 600);
    } else {
      document.getElementById('noResult').style.display = 'block';
      document.getElementById('apiResult').style.display = 'none';
    }
  } else {
    document.getElementById('noResult').style.display = 'none';
    document.getElementById('apiResult').style.display = 'none';
  }
  searchInfo.textContent = local.length > 0 ? `${local.length} ta natija` : '';
});

function clearSearch() {
  searchInput.value = '';
  clearBtn.style.display = 'none';
  searchInfo.textContent = '';
  document.getElementById('noResult').style.display = 'none';
  document.getElementById('apiResult').style.display = 'none';
  renderWords(allWords);
  searchInput.focus();
}

// ─── So'z filtrlash ──────────────────────────────────────
function filterWords(query) {
  const q = query.toLowerCase().trim();
  return allWords.filter(w => {
    if (activeFilter !== 'all' && w.type !== activeFilter) return false;
    if (direction === 'de-uz') {
      return w.de.toLowerCase().includes(q);
    } else {
      return w.uz.toLowerCase().includes(q);
    }
  });
}

// ─── Render ───────────────────────────────────────────────
function renderWords(words) {
  const list = document.getElementById('resultsList');
  const noRes = document.getElementById('noResult');
  const apiRes = document.getElementById('apiResult');
  noRes.style.display = 'none';
  apiRes.style.display = 'none';

  const query = searchInput.value.trim().toLowerCase();

  if (words.length === 0 && !query) {
    list.innerHTML = '';
    return;
  }

  if (words.length === 0) {
    list.innerHTML = '';
    return;
  }

  // Ko'p natijada faqat 100 ta ko'rsat
  const display = words.slice(0, 100);
  list.innerHTML = display.map(w => wordCard(w, query)).join('');

  if (words.length > 100) {
    list.innerHTML += `<div class="search-info" style="text-align:center;padding:12px;color:#64748b">
      ...va yana ${words.length - 100} ta natija. Qidiruvni aniqlashtiring.
    </div>`;
  }
}

function wordCard(w, query) {
  const typeInfo  = TYPE_ICONS[w.type] || { icon: '📝', label: w.type };
  const deText    = highlight(w.de, query, direction === 'de-uz');
  const uzText    = highlight(w.uz, query, direction === 'uz-de');
  const badgeClass= `badge-${w.type}`;
  const iconClass = `icon-${w.type}`;

  let meta = `<span class="badge ${badgeClass}">${typeInfo.label}</span>`;
  if (w.plural) {
    meta += `<span class="badge badge-plural">Ko'pligi: ${w.plural}</span>`;
  }

  // Nemischa → O'zbekcha yoki aksincha
  const left  = direction === 'de-uz' ? deText : uzText;
  const right = direction === 'de-uz' ? uzText : deText;
  const leftLang  = direction === 'de-uz' ? '🇩🇪' : '🇺🇿';
  const rightLang = direction === 'de-uz' ? '🇺🇿' : '🇩🇪';

  return `
    <div class="word-card">
      <div class="card-type-icon ${iconClass}">${typeInfo.icon}</div>
      <div class="card-body">
        <div class="card-de">${leftLang} ${left}</div>
        <div class="card-uz">${rightLang} ${right}</div>
        <div class="card-meta">${meta}</div>
      </div>
    </div>
  `;
}

function highlight(text, query, doHighlight) {
  if (!query || !doHighlight) return text;
  const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
  return text.replace(regex, '<em>$1</em>');
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ─── Onlayn tarjima (MyMemory API) ───────────────────────
function showApiLoading() {
  const apiRes = document.getElementById('apiResult');
  const noRes  = document.getElementById('noResult');
  noRes.style.display = 'none';
  apiRes.style.display = 'block';
  apiRes.innerHTML = `<div class="api-loading"><span class="spin">⏳</span> Onlayn tarjima qidirilmoqda...</div>`;
}

function fetchOnline(query) {
  const langpair = direction === 'de-uz' ? 'de|uz' : 'uz|de';
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(query)}&langpair=${langpair}`;

  fetch(url)
    .then(r => r.json())
    .then(data => {
      const apiRes = document.getElementById('apiResult');
      const noRes  = document.getElementById('noResult');

      if (data.responseStatus === 200 && data.responseData.translatedText) {
        const translated = data.responseData.translatedText;
        const from = direction === 'de-uz' ? `🇩🇪 ${query}` : `🇺🇿 ${query}`;
        const to   = direction === 'de-uz' ? `🇺🇿 ${translated}` : `🇩🇪 ${translated}`;
        noRes.style.display  = 'none';
        apiRes.style.display = 'block';
        apiRes.innerHTML = `
          <div class="api-result-header">🌐 Onlayn tarjima (MyMemory)</div>
          <div class="api-result-de">${from}</div>
          <div class="api-result-uz">${to}</div>
        `;
      } else {
        apiRes.style.display = 'none';
        noRes.style.display  = 'block';
        document.querySelector('.no-result-sub').textContent = 'Onlayn tarjima ham topilmadi.';
      }
    })
    .catch(() => {
      document.getElementById('apiResult').style.display = 'none';
      document.getElementById('noResult').style.display  = 'block';
    });
}

// ─── Til yo'nalishi ──────────────────────────────────────
function setDirection(dir) {
  direction = dir;
  document.getElementById('btnDeUz').classList.toggle('active', dir === 'de-uz');
  document.getElementById('btnUzDe').classList.toggle('active', dir === 'uz-de');

  const placeholder = dir === 'de-uz' ? 'Nemischa so\'z kiriting...' : 'O\'zbekcha so\'z kiriting...';
  searchInput.placeholder = placeholder;

  const val = searchInput.value.trim();
  if (val) {
    const local = filterWords(val);
    renderWords(local);
    if (local.length === 0 && apiAvailable) {
      showApiLoading();
      fetchOnline(val);
    }
  } else {
    renderWords(allWords);
  }
}

// ─── Kategoriya filtri ───────────────────────────────────
function setFilter(filter, btn) {
  activeFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const val = searchInput.value.trim();
  if (val) {
    const local = filterWords(val);
    renderWords(local);
  } else {
    if (filter === 'all') {
      renderWords(allWords);
    } else {
      renderWords(allWords.filter(w => w.type === filter));
    }
  }
}

// ─── Boshlang'ich ko'rinish ──────────────────────────────
// Sahifa ochilganda barcha so'zlarni ko'rsat (faqat 50 ta)
window.addEventListener('DOMContentLoaded', () => {
  // Lug'at yuklanguncha kutiladi (fetch dan keyin chaqiriladi)
});
