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
      B: [],
      Mid: []
    }
  },

  Inferno: {
    Callouts: [
      { name: "Inferno", file: "infernomap.html", type: "callouts" }
    ],
    TT: {
      A: [
        { name: "OneWay Site | Aps", file: "pos2.html", type:"smoke" },
        { name: "Before Biblia", file: "beforebilblia.html", type:"smoke"},
        { name: "Pit Smoke", file: "pitsmoke.html", type:"smoke"}
      ],
      B: [
        { name: "Spawn to CT", file: "ctsmoke4.html", type:"smoke"},
        { name: "CT+Boost", file: "ctsmokeandboost.html", type:"smoke"},
        { name: "Coffin", file: "bcoffin.html", type:"smoke"},
        { name: "Car multinades", file:"bcartositenades.html", type:["multi","molo","he","flash"] }
      ],
      Mid: [
        {name: "Mid smoke", file: "midsmoke.html", type:"smoke"},
        {name: "Short smoke", file: "shortsmoke.html", type:"smoke"}
      ]
    },
    CT: { 
      A: [
        {name: "Oneway | Long", file: "longoneway.html", type:"smoke"}
      ],
      B: [
        {name: "B Smokes | Well", file: "ctsitenades.html", type:"smoke"}
      ] }
  },

  Overpass: {
    wip: true,
    Callouts: [
      { name: "Overpass", file: "overpass.html", type: "callouts" }
    ],
    TT: {
      A: [
        {name: "Kible | Spawn", file: "kiblespawn.html", type: "smoke"},
        {name: "Kible | Playground", file: "playgroundkible.html", type: "smoke"},
        {name: "Bank&Śmietnik | Fenix", file: "banksmietnik.html", type: "smoke"},
        {name: "Śmietnik Smoke + Optimus Ignite | Kible", file: "multikible.html", type:["multi", "smoke", "molo"]},
        {name: "Bank | Long", file: "banklongsmoke.html", type: "smoke"},
        {name: "Śmietnik + Molo Optimus | Long", file: "longmultinades.html", type:["multi", "smoke", "molo"]},
      ],
      B: [
        { name: "Heaven Smoke [Spawn]", file: "heaven.html", type:"smoke"}
      ],
    },
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
    wip: true,
    Callouts: [
      { name: "Ancient", file: "ancient.html", type: "callouts" }
    ],
    TT: { A: [], B: [], Mid: [] },
    CT: { A: [], B: [], Mid: [] }
  },

  Dust2: {
    wip: true,
    Callouts: [
      { name: "Dust2", file: "dust2.html", type: "callouts" }
    ],
    TT: { A: [], B: [], Mid: [] },
    CT: { A: [], B: [], Mid: [] }
  },

  Train: {
    wip: true,
    Callouts: [
      { name: "Train", file: "train.html", type: "callouts" }
    ],
    TT: { A: [], B: [], Mid: [] },
    CT: { A: [], B: [], Mid: [] }
  }
};

// --- DOM Elements ---
const details = document.querySelector('.details');
const filterButtonsContainer = document.querySelector('.filters');

// --- Track active elements ---
let currentMapLi = null;
let currentSubH4 = null;
let currentPosLi = null;

// --- Global filters state ---
const activeFilters = {
  smoke: true,
  molo: true,
  flash: true,
  he: true,
};

// --- Load HTML into details ---
function loadContent(map, sub, filename) {
  const url = `maps/${map.toLowerCase()}/${sub}/${filename}`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error('File not found');
      return response.text();
    })
    .then(html => {
      details.innerHTML = html;
    })
    .catch(err => {
      details.innerHTML = `<p>Error loading: ${err}</p>`;
    });
}

// --- Create position element (support multi-types) ---
function createPositionElement(map, sub, posObj, h4) {
  const li = document.createElement('li');
  li.textContent = posObj.name;

  // handle multiple types
  if (Array.isArray(posObj.type)) {
    li.classList.add(posObj.type[0]); // pierwszy typ -> kolor
    li.dataset.types = posObj.type.join(",");
  } else {
    li.classList.add(posObj.type);
    li.dataset.types = posObj.type;
  }

  li.addEventListener('click', () => {
    loadContent(map, sub, posObj.file);

    if(currentPosLi) currentPosLi.classList.remove('active-pos');
    li.classList.add('active-pos');
    currentPosLi = li;

    if(h4 && currentSubH4 !== h4) {
      if(currentSubH4) currentSubH4.classList.remove('active-sub');
      h4.classList.add('active-sub');
      currentSubH4 = h4;
    }
  });

  return li;
}

// --- Fill columns Callouts / TT / CT ---
function populatePositions(map) {
  const sidesOrder = ['Callouts','TT','CT'];

  sidesOrder.forEach(side => {
    const container = document.getElementById(side);
    container.innerHTML = '';

    const subSides = positionsData[map][side];
    if(!subSides) return;

    if(side === 'Callouts') {
      subSides.forEach(posObj => {
        const li = createPositionElement(map, '', posObj, null);
        container.appendChild(li);
      });
      return;
    }

    for (const sub in subSides) {
      const h4 = document.createElement('h4');
      h4.textContent = sub;
      h4.style.cursor = "pointer";

      const ul = document.createElement('ul');
      subSides[sub].forEach(posObj => {
        const li = createPositionElement(map, sub, posObj, h4);
        ul.appendChild(li);
      });

      ul.classList.remove('expanded');

      h4.addEventListener('click', () => {
        if(currentSubH4 && currentSubH4 !== h4) {
          const prevUl = currentSubH4.nextElementSibling;
          if(prevUl && prevUl.tagName === 'UL') prevUl.classList.remove('expanded');
        }
        ul.classList.toggle('expanded');
        if(currentSubH4 && currentSubH4 !== h4) currentSubH4.classList.remove('active-sub');
        h4.classList.add('active-sub');
        currentSubH4 = h4;
      });

      container.appendChild(h4);
      container.appendChild(ul);
    }
  });

  applyFilters();
}

// --- Map click ---
document.querySelectorAll('.maps li').forEach(mapLi => {
  mapLi.addEventListener('click', () => {
    const mapName = mapLi.textContent;

    if(currentMapLi) currentMapLi.classList.remove('active-map');
    mapLi.classList.add('active-map');
    currentMapLi = mapLi;

    populatePositions(mapName);
  });
});

// --- AUTO: load first map ---
window.addEventListener('DOMContentLoaded', () => {
  const firstMapLi = document.querySelector('.maps li');
  if(firstMapLi) firstMapLi.click();
  initFilters();
});

// --- Filters ---
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const type = btn.dataset.type;

    // --- jeżeli przycisk byłby "multi", to pomiń go (nie robimy filtra dla multi)
    if (!(type in activeFilters)) return;

    if(!activeFilters[type]) btn.classList.add('inactive');

    btn.addEventListener('click', () => {
      activeFilters[type] = !activeFilters[type];
      btn.classList.toggle('inactive', !activeFilters[type]);
      applyFilters();
    });
  });
}

function applyFilters() {
  document.querySelectorAll('.sides li').forEach(li => {
    const types = li.dataset.types ? li.dataset.types.split(",") : [];
    const matches = types.some(type => activeFilters[type]);

    li.style.display = matches ? '' : 'none';
  });
}

// --- For WIP maps add icon ---
document.querySelectorAll('.maps li').forEach(mapLi => {
  const mapName = mapLi.textContent;
  const mapData = positionsData[mapName];

  if(mapData && mapData.wip) {
    mapLi.classList.add('wip-map');
    const icon = document.createElement('span');
    icon.textContent = '👷';
    icon.classList.add('wip-icon');
    mapLi.appendChild(icon);
  }

  mapLi.addEventListener('click', () => {
    if(currentMapLi) currentMapLi.classList.remove('active-map');
    mapLi.classList.add('active-map');
    currentMapLi = mapLi;

    populatePositions(mapName);
  });
});
