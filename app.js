// ─── State ───────────────────────────────────────────────
let allWords     = [];
let direction    = 'de-uz';
let activeFilter = 'all';
let apiAvailable = false;
let apiTimer     = null;

// ─── Type ma'lumotlari ────────────────────────────────────
const TYPE_INFO = {
  noun:        { icon: '📌', label: 'Ot',          cls: 'icon-noun'        },
  verb:        { icon: '⚡', label: "Fe'l",         cls: 'icon-verb'        },
  adjective:   { icon: '🎨', label: 'Sifat',        cls: 'icon-adjective'   },
  phrase:      { icon: '💬', label: 'Ibora',        cls: 'icon-phrase'      },
  idiom:       { icon: '🎭', label: 'Idioma',       cls: 'icon-idiom'       },
  adverb:      { icon: '🔄', label: 'Ravish',       cls: 'icon-adverb'      },
  number:      { icon: '🔢', label: 'Son',          cls: 'icon-number'      },
  pronoun:     { icon: '👤', label: 'Olmosh',       cls: 'icon-pronoun'     },
  conjunction: { icon: '🔗', label: "Bog'lovchi",   cls: 'icon-conjunction' },
  preposition: { icon: '📍', label: "Ko'makchi",    cls: 'icon-preposition' },
};

// ─── So'z bazasini yuklash ────────────────────────────────
window.addEventListener('DOMContentLoaded', function () {

  // data.js orqali yuklangan WORDS_DATA ni ishlatamiz
  if (typeof WORDS_DATA !== 'undefined' && Array.isArray(WORDS_DATA)) {
    allWords = WORDS_DATA;
    showWords(allWords);
    checkApi();
  } else {
    document.getElementById('resultsList').innerHTML =
      '<div class="no-result"><div class="no-result-icon">⚠️</div>' +
      "<p>Lug'at bazasi yuklanmadi.</p></div>";
  }

  // Qidiruv inputiga event
  var input = document.getElementById('searchInput');
  input.addEventListener('input', onSearch);
});

// ─── Qidiruv ─────────────────────────────────────────────
function onSearch() {
  var val = document.getElementById('searchInput').value.trim();
  var clearBtn = document.getElementById('clearBtn');
  clearBtn.style.display = val.length > 0 ? 'block' : 'none';

  clearTimeout(apiTimer);

  if (val.length === 0) {
    document.getElementById('searchInfo').textContent = '';
    document.getElementById('noResult').style.display  = 'none';
    document.getElementById('apiResult').style.display = 'none';
    showWords(allWords);
    return;
  }

  var found = filterWords(val);
  showWords(found);

  if (found.length === 0) {
    document.getElementById('noResult').style.display = 'block';
    if (apiAvailable) {
      showApiLoading();
      apiTimer = setTimeout(function () { fetchOnline(val); }, 800);
    }
    document.getElementById('searchInfo').textContent = '';
  } else {
    document.getElementById('noResult').style.display  = 'none';
    document.getElementById('apiResult').style.display = 'none';
    document.getElementById('searchInfo').textContent  = found.length + ' ta natija';
  }
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  document.getElementById('clearBtn').style.display = 'none';
  document.getElementById('searchInfo').textContent = '';
  document.getElementById('noResult').style.display  = 'none';
  document.getElementById('apiResult').style.display = 'none';
  showWords(allWords);
  document.getElementById('searchInput').focus();
}

// ─── So'z filtrlash ───────────────────────────────────────
function filterWords(query) {
  var q = query.toLowerCase();
  return allWords.filter(function (w) {
    if (activeFilter !== 'all' && w.type !== activeFilter) return false;
    if (direction === 'de-uz') {
      return w.de.toLowerCase().indexOf(q) !== -1;
    } else {
      return w.uz.toLowerCase().indexOf(q) !== -1;
    }
  });
}

// ─── So'zlarni ekranga chiqarish ──────────────────────────
function showWords(words) {
  var list  = document.getElementById('resultsList');
  var query = document.getElementById('searchInput').value.trim().toLowerCase();

  if (words.length === 0) {
    list.innerHTML = '';
    return;
  }

  var display = words.slice(0, 100);
  var html = '';
  for (var i = 0; i < display.length; i++) {
    html += buildCard(display[i], query);
  }
  if (words.length > 100) {
    html += '<div style="text-align:center;padding:14px;color:#64748b;font-size:0.85rem">' +
            '...va yana ' + (words.length - 100) + ' ta natija. Qidiruvni aniqlashtiring.</div>';
  }
  list.innerHTML = html;
}

// ─── Karta HTML ───────────────────────────────────────────
function buildCard(w, query) {
  var t       = TYPE_INFO[w.type] || { icon: '📝', label: w.type, cls: 'icon-noun' };
  var deHL    = hl(w.de, query, direction === 'de-uz');
  var uzHL    = hl(w.uz, query, direction === 'uz-de');
  var left    = direction === 'de-uz' ? deHL : uzHL;
  var right   = direction === 'de-uz' ? uzHL : deHL;
  var lFlag   = direction === 'de-uz' ? '🇩🇪' : '🇺🇿';
  var rFlag   = direction === 'de-uz' ? '🇺🇿' : '🇩🇪';
  var meta    = '<span class="badge badge-' + w.type + '">' + t.label + '</span>';
  if (w.plural) {
    meta += ' <span class="badge badge-plural">Ko\'pligi: ' + w.plural + '</span>';
  }
  return '<div class="word-card">' +
    '<div class="card-type-icon ' + t.cls + '">' + t.icon + '</div>' +
    '<div class="card-body">' +
      '<div class="card-de">' + lFlag + ' ' + left  + '</div>' +
      '<div class="card-uz">' + rFlag + ' ' + right + '</div>' +
      '<div class="card-meta">' + meta + '</div>' +
    '</div></div>';
}

// ─── Qidiruv so'zini ajratib ko'rsatish ──────────────────
function hl(text, query, doIt) {
  if (!doIt || !query) return text;
  var re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
  return text.replace(re, '<em>$1</em>');
}

// ─── Til yo'nalishi ───────────────────────────────────────
function setDirection(dir) {
  direction = dir;
  document.getElementById('btnDeUz').classList.toggle('active', dir === 'de-uz');
  document.getElementById('btnUzDe').classList.toggle('active', dir === 'uz-de');
  document.getElementById('searchInput').placeholder =
    dir === 'de-uz' ? "Nemischa so'z kiriting..." : "O'zbekcha so'z kiriting...";
  onSearch();
}

// ─── Kategoriya filtri ────────────────────────────────────
function setFilter(filter, btn) {
  activeFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(function (b) {
    b.classList.remove('active');
  });
  btn.classList.add('active');

  var val = document.getElementById('searchInput').value.trim();
  if (val.length > 0) {
    onSearch();
  } else {
    if (filter === 'all') {
      showWords(allWords);
    } else {
      showWords(allWords.filter(function (w) { return w.type === filter; }));
    }
  }
}

// ─── API tekshirish ───────────────────────────────────────
function checkApi() {
  var statusEl = document.getElementById('apiStatus');
  fetch('https://api.mymemory.translated.net/get?q=Hallo&langpair=de|uz')
    .then(function (r) { return r.json(); })
    .then(function (d) {
      if (d.responseStatus === 200) {
        apiAvailable = true;
        statusEl.textContent = '✅ Faol';
        statusEl.style.color = '#6ee7b7';
      } else {
        statusEl.textContent = '❌ Mavjud emas';
      }
    })
    .catch(function () {
      statusEl.textContent = '❌ Mavjud emas';
    });
}

// ─── Onlayn tarjima ───────────────────────────────────────
function showApiLoading() {
  var apiRes = document.getElementById('apiResult');
  document.getElementById('noResult').style.display = 'none';
  apiRes.style.display = 'block';
  apiRes.innerHTML = '<div class="api-loading"><span class="spin">⏳</span> Onlayn tarjima qidirilmoqda...</div>';
}

function fetchOnline(query) {
  var langpair = direction === 'de-uz' ? 'de|uz' : 'uz|de';
  var url = 'https://api.mymemory.translated.net/get?q=' +
            encodeURIComponent(query) + '&langpair=' + langpair;
  var apiRes = document.getElementById('apiResult');
  var noRes  = document.getElementById('noResult');

  fetch(url)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (data.responseStatus === 200 && data.responseData.translatedText) {
        var tr   = data.responseData.translatedText;
        var from = (direction === 'de-uz' ? '🇩🇪 ' : '🇺🇿 ') + query;
        var to   = (direction === 'de-uz' ? '🇺🇿 ' : '🇩🇪 ') + tr;
        noRes.style.display  = 'none';
        apiRes.style.display = 'block';
        apiRes.innerHTML =
          '<div class="api-result-header">🌐 Onlayn tarjima (MyMemory)</div>' +
          '<div class="api-result-de">' + from + '</div>' +
          '<div class="api-result-uz">' + to   + '</div>';
      } else {
        apiRes.style.display = 'none';
        noRes.style.display  = 'block';
      }
    })
    .catch(function () {
      apiRes.style.display = 'none';
      noRes.style.display  = 'block';
    });
}
