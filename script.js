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
        { name: "Car multinades", file:"bcartositenades.html", type:"multi"}
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
      A: 
      [
        {name:"Heaven | Spawn", file:"nukeheaven.html", type:"smoke"},
        {name: "Vent Rush | Spawn", file: "ventrush.html", type:"smoke"}
      ],
      Outside:
      [
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
    TT: {
      A: [],
      B: [],
      Mid: []
    },
    CT: { 
      A: [], 
      B: [], 
      Mid: [] 
    }
  },



      Dust2: {
    wip: true,
    Callouts: [
    { name: "Dust2", file: "dust2.html", type: "callouts" }
        ],
    TT: {
      A: [],
      B: [],
      Mid: []
    },
    CT: { 
      A: [], 
      B: [], 
      Mid: [] 
    }
  },

      Train: {
    wip: true,
    Callouts: [
    { name: "Train", file: "train.html", type: "callouts" }
        ],
    TT: {
      A: [],
      B: [],
      Mid: []
    },
    CT: { 
      A: [], 
      B: [], 
      Mid: [] 
    }
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
  multi: true
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


// --- Fill columns Callouts / TT / CT → A/B/Mid → Positions ---
function populatePositions(map) {
  const sidesOrder = ['Callouts','TT','CT']; // Order including Callouts

  sidesOrder.forEach(side => {
    const container = document.getElementById(side);
    container.innerHTML = '';

    const subSides = positionsData[map][side];
    if(!subSides) return; // jeśli brak Callouts, przejdź dalej

    // Jeśli Callouts nie ma sub-sekcji (TT/CT mają A/B/Mid)
    if(side === 'Callouts') {
      subSides.forEach(posObj => {
        const li = document.createElement('li');
        li.textContent = posObj.name;

        if(posObj.type) li.classList.add(posObj.type);

        li.addEventListener('click', () => {
          loadContent(map, '', posObj.file); // sub pusty dla Callouts

          if(currentPosLi) currentPosLi.classList.remove('active-pos');
          li.classList.add('active-pos');
          currentPosLi = li;
        });

        container.appendChild(li);
      });
      return;
    }

    // --- Existing TT/CT logic ---
    for (const sub in subSides) {
      const h4 = document.createElement('h4');
      h4.textContent = sub;
      h4.style.cursor = "pointer";

      const ul = document.createElement('ul');
      subSides[sub].forEach(posObj => {
        const li = document.createElement('li');
        li.textContent = posObj.name;

        if(posObj.type) li.classList.add(posObj.type);

        li.addEventListener('click', () => {
          loadContent(map, sub, posObj.file);

          if(currentPosLi) currentPosLi.classList.remove('active-pos');
          li.classList.add('active-pos');
          currentPosLi = li;

          if(currentSubH4 !== h4) {
            if(currentSubH4) currentSubH4.classList.remove('active-sub');
            h4.classList.add('active-sub');
            currentSubH4 = h4;
          }
        });

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

  applyFilters(); // Apply filters after filling columns
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

// --- AUTO: load first map (Mirage) ---
window.addEventListener('DOMContentLoaded', () => {
  const firstMapLi = document.querySelector('.maps li');
  if(firstMapLi) firstMapLi.click();
  initFilters(); // Initialize filter buttons
});

// --- Filters ---
// Initialize filter buttons
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const type = btn.dataset.type;

    // Set initial appearance based on activeFilters
    if(!activeFilters[type]) btn.classList.add('inactive');

    btn.addEventListener('click', () => {
      // Toggle filter
      activeFilters[type] = !activeFilters[type];

      // Toggle button appearance
      btn.classList.toggle('inactive', !activeFilters[type]);

      // Apply filter
      applyFilters();
    });
  });
}

// --- Apply filters ---
function applyFilters() {
  document.querySelectorAll('.sides li').forEach(li => {
    const classes = li.classList;
    let visible = true;

    if(classes.contains('smoke') && !activeFilters.smoke) visible = false;
    if(classes.contains('molo') && !activeFilters.molo) visible = false;
    if(classes.contains('flash') && !activeFilters.flash) visible = false;
    if(classes.contains('he') && !activeFilters.he) visible = false;
    if(classes.contains('multi') && !activeFilters.multi) visible = false;

    li.style.display = visible ? '' : 'none';
  });
}


// --- For work in progress map add icon on the righ ---

document.querySelectorAll('.maps li').forEach(mapLi => {
  const mapName = mapLi.textContent;
  const mapData = positionsData[mapName];

  if(mapData && mapData.wip) {
    mapLi.classList.add('wip-map'); // klasa WIP
    const icon = document.createElement('span');
    icon.textContent = '👷'; // kask
    icon.classList.add('wip-icon');
    mapLi.appendChild(icon); // dodajemy na koniec li
  }

  mapLi.addEventListener('click', () => {
    if(currentMapLi) currentMapLi.classList.remove('active-map');
    mapLi.classList.add('active-map');
    currentMapLi = mapLi;

    populatePositions(mapName);
  });
});
