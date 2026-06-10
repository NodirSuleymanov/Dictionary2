// ─── State ───────────────────────────────────────────────
var allWords     = [];
var direction    = 'de-uz';
var activeFilter = 'all';
var apiAvailable = false;
var apiTimer     = null;

// ─── Type ma'lumotlari ────────────────────────────────────
var TYPE_INFO = {
  noun:        { icon: '📌', label: 'Ot'          },
  verb:        { icon: '⚡', label: "Fe'l"         },
  adjective:   { icon: '🎨', label: 'Sifat'        },
  phrase:      { icon: '💬', label: 'Ibora'        },
  idiom:       { icon: '🎭', label: 'Idioma'       },
  adverb:      { icon: '🔄', label: 'Ravish'       },
  number:      { icon: '🔢', label: 'Son'          },
  pronoun:     { icon: '👤', label: 'Olmosh'       },
  conjunction: { icon: '🔗', label: "Bog'lovchi"   },
  preposition: { icon: '📍', label: "Ko'makchi"    },
};

// ─── Yuklash ─────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', function () {
  if (typeof WORDS_DATA !== 'undefined' && Array.isArray(WORDS_DATA)) {
    allWords = WORDS_DATA;
    showWords(allWords);
    checkApi();
  } else {
    document.getElementById('resultsList').innerHTML =
      '<div class="no-result"><div class="no-result-icon">⚠️</div><p>Lug\'at bazasi yuklanmadi.</p></div>';
  }
  document.getElementById('searchInput').addEventListener('input', onSearch);
});

// ─── Qidiruv ─────────────────────────────────────────────
function onSearch() {
  var val = document.getElementById('searchInput').value.trim();
  document.getElementById('clearBtn').style.display = val ? 'block' : 'none';
  clearTimeout(apiTimer);

  if (!val) {
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
    document.getElementById('searchInfo').textContent = '';
    if (apiAvailable) {
      showApiLoading();
      apiTimer = setTimeout(function () { fetchOnline(val); }, 800);
    }
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

// ─── Filtrlash ────────────────────────────────────────────
function filterWords(query) {
  var q = query.toLowerCase();
  return allWords.filter(function (w) {
    if (activeFilter !== 'all' && w.type !== activeFilter) return false;
    if (direction === 'de-uz') return w.de.toLowerCase().indexOf(q) !== -1;
    else return w.uz.toLowerCase().indexOf(q) !== -1;
  });
}

// ─── So'zlarni ko'rsatish ─────────────────────────────────
function showWords(words) {
  var list  = document.getElementById('resultsList');
  var query = document.getElementById('searchInput').value.trim().toLowerCase();
  if (words.length === 0) { list.innerHTML = ''; return; }
  var html = '';
  var lim  = Math.min(words.length, 80);
  for (var i = 0; i < lim; i++) html += buildCard(words[i], query);
  if (words.length > 80) {
    html += '<div class="more-hint">...va yana ' + (words.length - 80) + ' ta natija. Qidiruvni aniqlashtiring.</div>';
  }
  list.innerHTML = html;
}

// ─── Karta ───────────────────────────────────────────────
function buildCard(w, query) {
  var t      = TYPE_INFO[w.type] || { icon: '📝', label: w.type };
  var left   = direction === 'de-uz' ? hl(w.de, query, true)  : hl(w.uz, query, true);
  var right  = direction === 'de-uz' ? hl(w.uz, query, false) : hl(w.de, query, false);
  var lFlag  = direction === 'de-uz' ? '🇩🇪' : '🇺🇿';
  var rFlag  = direction === 'de-uz' ? '🇺🇿' : '🇩🇪';

  // Teg
  var badge = '<span class="badge badge-' + w.type + '">' + t.label + '</span>';
  if (w.plural) badge += ' <span class="badge badge-plural">Ko\'pligi: ' + w.plural + '</span>';

  // O'qilish
  var pronHTML = '';
  if (w.pron) {
    pronHTML = '<div class="card-pron"><span class="pron-icon">🔊</span><span class="pron-text">[ ' + w.pron + ' ]</span></div>';
  }

  // Misol gap
  var exHTML = '';
  if (w.example_de && w.example_uz) {
    var exDe = direction === 'de-uz' ? w.example_de : w.example_uz;
    var exUz = direction === 'de-uz' ? w.example_uz : w.example_de;
    var exLF = direction === 'de-uz' ? '🇩🇪' : '🇺🇿';
    var exRF = direction === 'de-uz' ? '🇺🇿' : '🇩🇪';
    exHTML =
      '<div class="card-example">' +
        '<div class="example-label">📝 Misol:</div>' +
        '<div class="example-de">' + exLF + ' <em>' + exDe + '</em></div>' +
        '<div class="example-uz">' + exRF + ' ' + exUz + '</div>' +
      '</div>';
  }

  return '<div class="word-card">' +
    '<div class="card-type-icon icon-' + w.type + '">' + t.icon + '</div>' +
    '<div class="card-body">' +
      '<div class="card-de">'   + lFlag + ' ' + left  + '</div>' +
      '<div class="card-uz">'   + rFlag + ' ' + right + '</div>' +
      pronHTML +
      '<div class="card-meta">' + badge + '</div>' +
      exHTML +
    '</div></div>';
}

function hl(text, q, doIt) {
  if (!doIt || !q) return text;
  return text.replace(new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi'), '<mark>$1</mark>');
}

// ─── Yo'nalish ────────────────────────────────────────────
function setDirection(dir) {
  direction = dir;
  document.getElementById('btnDeUz').classList.toggle('active', dir === 'de-uz');
  document.getElementById('btnUzDe').classList.toggle('active', dir === 'uz-de');
  document.getElementById('searchInput').placeholder =
    dir === 'de-uz' ? "Nemischa so'z kiriting..." : "O'zbekcha so'z kiriting...";
  onSearch();
}

// ─── Filtr ───────────────────────────────────────────────
function setFilter(filter, btn) {
  activeFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
  btn.classList.add('active');
  var val = document.getElementById('searchInput').value.trim();
  if (val) { onSearch(); }
  else {
    showWords(filter === 'all' ? allWords : allWords.filter(function (w) { return w.type === filter; }));
  }
}

// ─── API ─────────────────────────────────────────────────
function checkApi() {
  var el = document.getElementById('apiStatus');
  fetch('https://api.mymemory.translated.net/get?q=Hallo&langpair=de|uz')
    .then(function (r) { return r.json(); })
    .then(function (d) {
      if (d.responseStatus === 200) {
        apiAvailable = true;
        el.textContent = '✅ Faol'; el.style.color = '#6ee7b7';
      } else { el.textContent = '❌ Mavjud emas'; }
    })
    .catch(function () { el.textContent = '❌ Mavjud emas'; });
}

function showApiLoading() {
  document.getElementById('noResult').style.display  = 'none';
  var el = document.getElementById('apiResult');
  el.style.display = 'block';
  el.innerHTML = '<div class="api-loading"><span class="spin">⏳</span> Onlayn tarjima qidirilmoqda...</div>';
}

function fetchOnline(query) {
  var lp  = direction === 'de-uz' ? 'de|uz' : 'uz|de';
  var url = 'https://api.mymemory.translated.net/get?q=' + encodeURIComponent(query) + '&langpair=' + lp;
  var apiEl = document.getElementById('apiResult');
  var noEl  = document.getElementById('noResult');
  fetch(url)
    .then(function (r) { return r.json(); })
    .then(function (d) {
      if (d.responseStatus === 200 && d.responseData.translatedText) {
        var tr   = d.responseData.translatedText;
        var from = (direction === 'de-uz' ? '🇩🇪 ' : '🇺🇿 ') + query;
        var to   = (direction === 'de-uz' ? '🇺🇿 ' : '🇩🇪 ') + tr;
        noEl.style.display  = 'none';
        apiEl.style.display = 'block';
        apiEl.innerHTML =
          '<div class="api-result-header">🌐 Onlayn tarjima (MyMemory)</div>' +
          '<div class="api-result-de">' + from + '</div>' +
          '<div class="api-result-uz">' + to   + '</div>';
      } else {
        apiEl.style.display = 'none';
        noEl.style.display  = 'block';
      }
    })
    .catch(function () {
      apiEl.style.display = 'none';
      noEl.style.display  = 'block';
    });
}
