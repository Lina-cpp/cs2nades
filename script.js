// --- Objects with MapNames, positions, etc ---
const positionsData = {
  Mirage: {
    Callouts: [
      { name: "Mirage", file: "miragemap.html", type: "callouts" }
    ],
    TT: {
      A: [
        { name: "CT/Jungle/Stairs | Ramp - 1 spot", file: "pos1.html", type: "smoke" },
        { name: "Best CT Smoke | Ramp", file: "bestct.html", type: "smoke"},
        { name: "Jungle | Ramp", file: "miragejungle.html", type: "smoke"}
      ],
      B: [
        { name: "Short/Window/Doors | Snax", file: "ShortShopDoors.html", type: "smoke"}
      ],
      Mid: [
        { name: "Conn/Window/Short | Spawn - 1 spot", file: "miragemidsmokes.html", type:"smoke"}
      ]
    },
    CT: {
      A: [
        { name: "Short Ignite | Stairs", file: "shortmolo.html", type: "molo"}
      ],
      Mid: [
        {name: "CT oneway | Sniper's Nest", file: "ctoneway.html", type:"smoke"},
        {name: "Another CT oneway | CT Spawn", file:"anotheroneway.html", type:"smoke"},
        {name: "Anty-rush mid | Spawn", file:"antyrush.html", type:"smoke"}
      ]
    },
  },

  Inferno: {
    Callouts: [
      { name: "Inferno", file: "infernomap.html", type: "callouts" }
    ],
    TT: {
      A: [
        { name: "OneWay Site | Aps", file: "pos2.html", type:"smoke" },
        { name: "Przed Biblioteke | Mid", file: "beforebilblia.html", type:"smoke"},
        { name: "Pit Smoke | Mid", file: "pitsmoke.html", type:"smoke"}
      ],
      B: [
        { name: "CT | T Ramp", file: "ctsmoke4.html", type:"smoke"},
        { name: "CT+Boost | T Ramp", file: "ctsmokeandboost.html", type:"smoke"},
        { name: "Coffin | Banan", file: "bcoffin.html", type:"smoke"},
        { name: "B multinades | Car", file:"bcartositenades.html", type:["multi","molo","he","flash"] }
      ],
      Mid: [
        {name: "Mid | T Ramp", file: "midsmoke.html", type:"smoke"},
        {name: "Short | T Ramp", file: "shortsmoke.html", type:"smoke"}
      ]
    },
    CT: { 
      A: [
        {name: "Oneway | Long", file: "longoneway.html", type:"smoke"},
        {name: "Oneway | Short", file: "shortneway.html", type:"smoke"}
      ],
      B: [
        {name: "B Smokes | Well", file: "ctsitenades.html", type:"smoke"},
        {name:"Banana Oneway | Car", file:"bananaonewayct.html", type:"smoke"},
        {name: "Double Ignite Car + He | 1st", file:"ctcarignites.html", type:["multi","molo", "he"]}
      ] }
  },

  Overpass: {
    Callouts: [
      { name: "Overpass", file: "overpass.html", type: "callouts" }
    ],
    TT: {
      A: [
        {name: "Kible | Spawn", file: "kiblespawn.html", type: "smoke"},
        {name: "Kible | Playground", file: "playgroundkible.html", type: "smoke"},
        {name: "Bank&Śmietnik | Fenix", file: "banksmietnik.html", type: "smoke"},
        {name: "Bank&Śmietnik | Fenix", file: "adoublesmokebench.html", type: "smoke"},
        {name: "Śmietnik Smoke + Optimus Ignite | Kible", file: "multikible.html", type:["multi", "smoke", "molo"]},
        {name: "Bank | Long", file: "banklongsmoke.html", type: "smoke"},
        {name: "Śmietnik + Molo Optimus | Long", file: "longmultinades.html", type:["multi", "smoke", "molo"]},
      ],
      B: [
        { name: "Heaven | Spawn", file: "heaven.html", type:"smoke"},
        { name: "Heaven | Monster", file: "monstertoheaven.html", type:"smoke"},
        { name: "Short | Monster", file: "monstertoshort.html", type:"smoke"},
        { name: "ABC | Syf", file: "syftoabc.html", type:"smoke"},
        { name: "Heaven/Water/ABC(close) | Syf", file: "syfmulti.html", type:"smoke"}
      ],
    },
    CT: {
      B: [
        {name: "Monster Smoke | Spawn", file: "monstersmokefromspawn.html", type:"smoke"},
        {name: "A site molo | Kible", file: "molositeb.html", type:"molo"}
      ]
    }
  },

  Nuke: {
    Callouts: [
      { name: "Nuke", file: "nuke.html", type: "callouts" }
    ],
    TT: {
      A: [
        {name:"Heaven | Spawn", file:"nukeheaven.html", type:"smoke"},
        {name: "Vent Rush | Spawn", file: "ventrush.html", type:"smoke"}
      ],
      Outside: [
        {name: "Outside 3x | Spawn", file:"oustidetriple.html", type:"smoke"},
        {name: "Outside 2x | Spawn", file:"outsidedouble.html", type:"smoke"},
        {name: "Front Red | Spawn", file:"oustidered.html", type:"smoke"},
        {name: "Red w biegu | Spawn", file:"redrun.html", type:"smoke"}
      ]
    },
  },

  Ancient: {
    Callouts: [
      { name: "Ancient", file: "ancient.html", type: "callouts" }
    ],
    TT: { 
      A: [
        { name: "Cave/CT/Donut - 1 spot | Stairs", file: "AStairs3Smokes.html", type:"smoke" },
        { name: "CT | Elbow", file: "ctfromelbow.html", type:"smoke"}
      ],
      B: [
        { name: "Long/Short/Cave & Mid + Ninja Molo | Ruins", file:"bmultismokes.html", type:["multi", "smoke", "molo"]}
      ],
      Mid: [
        { name: "Red Room + Donut | Spawn", file: "midfromspawn.html", type:"smoke"},
        { name: "Red Room | Elbow", file:"elbowtoredroom.html", type:"smoke"},
        { name: "Donut | Elbow", file: "donutfromelbow.html", type:"smoke"},
        { name: "Heaven | Elbow", file: "heavenfromelbow.html", type:"smoke"}
      ] },
    CT: {
      B: [
        { name: "Molo+He na rampe | Alley", file: "moloheramp.html", type:["multi", "molo", "he"]}
      ]}
  },

  Dust2: {
    Callouts: [
      { name: "Dust2", file: "dust2.html", type: "callouts" }
    ],
    TT: { 
      A: [
        { name: "Cross - only 1 smoke | Double Doors Front", file:"acrosssmoke.html", type:"smoke"},
        { name: "CT | Short", file:"ctfromshort.html", type:"smoke"},
        { name: "Long Sniper Peek | Double Doors Front", file:"sniperpeeksmoke.html", type:"smoke"},
        { name: "Long Flash | Double Doors Front", file:"alongbestflash.html", type:"flash"},
        { name: "Solo Flash Double Doors | Double doors", file:"soloflashdoubledoors.html", type:"flash"}
      ],
      B: [
        { name: "Doors (fast) | T Plat ", file:"doorsfromplat.html", type:"smoke"},
        { name: "Doors | T Plat ", file:"platdoors.html", type:"smoke"},
        { name: "Doors&Window | Front Tunnels", file:"windowsanddoors.html", type:"smoke"},
        { name: "Doors | Upper Tunnel", file:"drzwiztuneli.html", type:"smoke"}
      ], 
      Mid: [
        { name: "Xbox | Spawn", file:"xboxsmoke.html", type:"smoke"},
        { name: "Whole CT | Xbox", file:"ctfromxbox.html", type:"smoke"}
      ] },
    CT: { 
      A: [
        { name: "Double Doors | Short Boost", file:"cttodoubledoors.html", type:"smoke"}
      ],
      B: [
        { name: "Flash na tunele | Site", file:"tunnelflash.html", type:"flash"}
      ],
      Mid: [
        {name: "Short oneway | Short Boost", file:"onewayshort.html", type:"smoke"}
      ]
    }
  },
  Anubis: {
  Callouts: [
    { name: "Anubis", file: "anubismap.html", type: "callouts" }
  ],
  TT: {
    A: 
    [
     
    ],
    Mid:
    [
      { name: "Window Molo | Mid", file:"midignite.html", type:"molo"}
    ],
    B: 
    [
      { name: "CT, Blue, Connect | Entry", file:"bentrydefault.html", type:"smoke"},
      { name: "Eco plant Smokes | Entry", file:"bplantsmokes.html", type:"smoke"}
    ]
  },
  CT: {
    A: [],
    B: []
  }
},
};

// Map thumbnail images
const mapThumbnails = {
  Mirage:   'thumbs/mirage.webp',
  Inferno:  'thumbs/inferno.webp',
  Overpass: 'thumbs/overpass.webp',
  Nuke:     'thumbs/nuke.webp',
  Ancient:  'thumbs/ancient.webp',
  Dust2:    'thumbs/dust2.webp',
  Anubis: 'thumbs/anubis.webp',
};

const details   = document.querySelector('.details');
const sides     = document.querySelector('.sides');
const mapItems  = document.querySelectorAll('.maps li');

const STANDALONE_PAGES = {
  'Home':    'maps/home.html',
  'Komendy': 'maps/additionalpages/commands.html'
};

let currentMapLi   = null;
let currentSubH4   = null;
let currentPosLi   = null;
let currentMapName = null;
let currentSide    = null;
let currentSub     = null;

const activeFilters = { smoke:true, molo:true, flash:true, he:true, callouts:true };

// ─── History ────────────────────────────────────────────────────────────────
const MAX_HISTORY = 5;
let historyItems = JSON.parse(localStorage.getItem('nadesHistory') || '[]');

function saveHistory(entry) {
  // entry = { map, side, sub, name, file }
  historyItems = historyItems.filter(h => h.file !== entry.file);
  historyItems.unshift(entry);
  if (historyItems.length > MAX_HISTORY) historyItems = historyItems.slice(0, MAX_HISTORY);
  localStorage.setItem('nadesHistory', JSON.stringify(historyItems));
  renderHistory();
}

function renderHistory() {
  const container = document.getElementById('history-list');
  if (!container) return;
  container.innerHTML = '';
  if (historyItems.length === 0) {
    container.innerHTML = '<li class="history-empty">Brak historii</li>';
    return;
  }
  historyItems.forEach(h => {
    const li = document.createElement('li');
    li.textContent = `${h.map} › ${h.sub ? h.sub + ' › ' : ''}${h.name}`;
    li.title = h.name;
    li.addEventListener('click', () => {
      // navigate to the map first
      const mapLi = Array.from(mapItems).find(m => m.dataset.map === h.map);
      if (mapLi && currentMapName !== h.map) mapLi.click();
      // then load content
      setTimeout(() => {
        const path = h.sub
          ? `maps/${h.map.toLowerCase()}/${h.sub}/${h.file}`
          : `maps/${h.map.toLowerCase()}/${h.file}`;
        loadContent(path);
        updateBreadcrumb(h.map, h.side, h.sub, h.name);
      }, 50);
    });
    container.appendChild(li);
  });
}

// ─── Breadcrumb ─────────────────────────────────────────────────────────────
function updateBreadcrumb(map, side, sub, name) {
  const bc = document.getElementById('breadcrumb');
  if (!bc) return;
  let parts = [];
  if (map)  parts.push(`<span>${map}</span>`);
  if (side && side !== 'Callouts') parts.push(`<span>${side}</span>`);
  if (sub)  parts.push(`<span>${sub}</span>`);
  if (name) parts.push(`<span class="bc-active">${name}</span>`);
  bc.innerHTML = parts.join('<span class="bc-sep">›</span>');
}

// ─── Content loader with fade animation ─────────────────────────────────────
function loadContent(file) {
  details.classList.add('details-loading');
  fetch(file)
    .then(r => r.ok ? r.text() : Promise.reject('File not found'))
    .then(html => {
      details.innerHTML = html;
      details.classList.remove('details-loading');
      details.classList.add('details-loaded');
      setTimeout(() => details.classList.remove('details-loaded'), 400);
    })
    .catch(err => {
      details.innerHTML = `<p>Error loading: ${err}</p>`;
      details.classList.remove('details-loading');
    });
}

// ─── Helpers ────────────────────────────────────────────────────────────────
function hasPositions(mapName) {
  const map = positionsData[mapName];
  if (!map) return false;
  return ['TT','CT'].some(side => map[side] && Object.keys(map[side]).some(k => map[side][k].length > 0));
}

// ─── Position element ────────────────────────────────────────────────────────
function createPositionElement(map, sub, posObj, h4, side) {
  const li = document.createElement('li');
  li.textContent = posObj.name;
  li.classList.add(Array.isArray(posObj.type) ? posObj.type[0] : posObj.type);
  li.dataset.types = Array.isArray(posObj.type) ? posObj.type.join(',') : posObj.type;
  li.dataset.searchText = posObj.name.toLowerCase();

  li.addEventListener('click', () => {
    const filePath = sub
      ? `maps/${map.toLowerCase()}/${sub}/${posObj.file}`
      : `maps/${map.toLowerCase()}/${posObj.file}`;
    loadContent(filePath);
    updateBreadcrumb(map, side, sub, posObj.name);
    saveHistory({ map, side, sub, name: posObj.name, file: posObj.file });

    if (currentPosLi) currentPosLi.classList.remove('active-pos');
    li.classList.add('active-pos');
    currentPosLi = li;

    if (h4 && currentSubH4 !== h4) {
      if (currentSubH4) currentSubH4.classList.remove('active-sub');
      h4.classList.add('active-sub');
      currentSubH4 = h4;
    }
  });
  return li;
}

// ─── Populate sidebar ────────────────────────────────────────────────────────
function populatePositions(mapName) {
  currentMapName = mapName;
  if (hasPositions(mapName)) sides.classList.add('show');
  else sides.classList.remove('show');

  const sidesOrder = ['Callouts','TT','CT'];
  sidesOrder.forEach(side => {
    const container = document.getElementById(side);
    container.innerHTML = '';
    const subSides = positionsData[mapName][side];
    if (!subSides) return;

    if (side === 'Callouts') {
      subSides.forEach(posObj =>
        container.appendChild(createPositionElement(mapName, '', posObj, null, side))
      );
      return;
    }

    // Collapse/expand entire TT/CT section via the h3 toggle button
    const sectionEl = container.closest('.side-section');
    if (sectionEl) sectionEl.classList.remove('collapsed');

    for (const sub in subSides) {
      const h4 = document.createElement('h4');
      h4.textContent = sub;
      h4.style.cursor = 'pointer';

      const ul = document.createElement('ul');
      subSides[sub].forEach(posObj =>
        ul.appendChild(createPositionElement(mapName, sub, posObj, h4, side))
      );
      ul.classList.add('expanded');

      h4.addEventListener('click', () => {
        ul.classList.toggle('expanded');
        h4.classList.toggle('active-sub', ul.classList.contains('expanded'));
      });

      container.appendChild(h4);
      container.appendChild(ul);
    }
  });
  applyFilters();
  applySearch();
}

// ─── Map click ───────────────────────────────────────────────────────────────
mapItems.forEach(mapLi => {
  mapLi.addEventListener('click', () => {
    if (currentMapLi) currentMapLi.classList.remove('active-map');
    mapLi.classList.add('active-map');
    currentMapLi = mapLi;

    const mapName = mapLi.dataset.map;
    if (STANDALONE_PAGES[mapName]) {
      sides.classList.remove('show');
      loadContent(STANDALONE_PAGES[mapName]);
      updateBreadcrumb(mapName, null, null, null);
      return;
    }

    populatePositions(mapName);
  });
});

// ─── Section collapse/expand (TT / CT headers) ──────────────────────────────
document.querySelectorAll('.side-section .section-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const section = btn.closest('.side-section');
    section.classList.toggle('collapsed');
  });
});

// ─── Filters ─────────────────────────────────────────────────────────────────
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const type = btn.dataset.type;
    if (!(type in activeFilters)) return;
    if (!activeFilters[type]) btn.classList.add('inactive');
    btn.addEventListener('click', () => {
      activeFilters[type] = !activeFilters[type];
      btn.classList.toggle('inactive', !activeFilters[type]);
      applyFilters();
    });
  });
}

function applyFilters() {
  document.querySelectorAll('.sides li').forEach(li => {
    const types = li.dataset.types ? li.dataset.types.split(',') : [];
    const passFilter = types.some(t => activeFilters[t]);
    li.dataset.filterHidden = passFilter ? '0' : '1';
    refreshVisibility(li);
  });
}

// ─── Search ──────────────────────────────────────────────────────────────────
function initSearch() {
  const input = document.getElementById('sidebar-search');
  if (!input) return;
  input.addEventListener('input', applySearch);
}

function applySearch() {
  const input = document.getElementById('sidebar-search');
  const query = input ? input.value.toLowerCase().trim() : '';

  document.querySelectorAll('.sides li').forEach(li => {
    const text = (li.dataset.searchText || li.textContent).toLowerCase();
    const types = li.dataset.types ? li.dataset.types.split(',') : [];
    const matchesText = text.includes(query);
    const matchesType = types.some(t => t.toLowerCase().includes(query));

    li.dataset.searchHidden = (query && !matchesText && !matchesType) ? '1' : '0';
    refreshVisibility(li);
  });

  if (query) {
    document.querySelectorAll('.sides ul').forEach(ul => {
      const hasMatch = Array.from(ul.querySelectorAll('li')).some(
        li => li.dataset.searchHidden === '0' && li.dataset.filterHidden === '0'
      );
      if (hasMatch) ul.classList.add('expanded');
    });
  }
}

function refreshVisibility(li) {
  const hidden = li.dataset.filterHidden === '1' || li.dataset.searchHidden === '1';
  li.classList.toggle('hidden', hidden);
}

// ─── Keyboard nav ────────────────────────────────────────────────────────────
function getVisiblePositions() {
  return Array.from(document.querySelectorAll('.sides li:not(.hidden)'));
}

document.addEventListener('keydown', e => {
  // Don't trigger when typing in the search box
  if (document.activeElement && document.activeElement.id === 'sidebar-search') return;
  if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;

  const items = getVisiblePositions();
  if (!items.length) return;
  e.preventDefault();

  let idx = currentPosLi ? items.indexOf(currentPosLi) : -1;
  if (e.key === 'ArrowDown') idx = Math.min(idx + 1, items.length - 1);
  if (e.key === 'ArrowUp')   idx = Math.max(idx - 1, 0);

  items[idx].click();
  items[idx].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
});

// ─── WIP icons ───────────────────────────────────────────────────────────────
function updateWipIcons() {
  document.querySelectorAll('.maps li').forEach(mapLi => {
    const mapName = mapLi.dataset.map;
    const mapData = positionsData[mapName];
    if (mapData && mapData.wip) {
      mapLi.classList.add('wip-map');
      if (!mapLi.querySelector('.wip-icon')) {
        const icon = document.createElement('span');
        icon.textContent = '👷';
        icon.classList.add('wip-icon');
        mapLi.appendChild(icon);
      }
    }
  });
}

// ─── Copy popup ──────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.details');
  if (!container) return;

  const popup = document.createElement('div');
  popup.className = 'copy-popup';
  popup.innerHTML = `
    <h4>Sukces!</h4>
    <p>Użyj CTRL + V aby wkleić komendę</p>
    <div class="progress-bar"></div>
  `;
  document.body.appendChild(popup);

  const progress = popup.querySelector('.progress-bar');
  let popupTimeout = null;
  let start = null;
  const duration = 3000;

  function showPopup() {
    popup.classList.add('show');
    popup.style.opacity = '1';
    popup.style.transform = 'translateX(-50%) translateY(0)';
    progress.style.transform = 'scaleX(1)';
    start = null;

    if (popupTimeout) clearTimeout(popupTimeout);

    function animateProgress(timestamp) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const scale = 1 - (elapsed / duration);
      progress.style.transform = `scaleX(${Math.max(scale, 0)})`;
      if (elapsed < duration) {
        requestAnimationFrame(animateProgress);
      } else {
        popup.classList.remove('show');
        setTimeout(() => popup.style.opacity = '0', 200);
      }
    }
    requestAnimationFrame(animateProgress);

    popupTimeout = setTimeout(() => {
      popup.classList.remove('show');
      setTimeout(() => popup.style.opacity = '0', 200);
    }, duration);
  }

  container.addEventListener('click', e => {
    const cmd = e.target.closest('.cmd-code');
    if (!cmd) return;
    navigator.clipboard.writeText(cmd.textContent)
      .then(() => {
        const originalBg = cmd.style.backgroundColor || '#111625';
        cmd.style.backgroundColor = '#3399ff';
        setTimeout(() => cmd.style.backgroundColor = originalBg, 200);
        showPopup();
      })
      .catch(err => console.error('Copy failed:', err));
  });

  // Init everything
  renderHistory();
  initFilters();
  initSearch();
  updateWipIcons();

  // Auto-load Home
  const homeLi = Array.from(mapItems).find(li => li.dataset.map === 'Home');
  if (homeLi) homeLi.click();
  else { const firstMapLi = document.querySelector('.maps li'); if (firstMapLi) firstMapLi.click(); }
});