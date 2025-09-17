// --- Objects with MapNames, positions, etc ---
const positionsData = {
  Mirage: {
    TT: {
      A: [
        { name: "1 spot - 3 Smokes", file: "pos1.html", type: "smoke" },
        { name: "Best CT Smoke", file: "bestct.html", type: "smoke"},
        { name: "Jungle Smoke", file: "miragejungle.html", type: "smoke"}
      ],
      B: [
        { name: "Short/Window/Doors", file: "ShortShopDoors.html", type: "smoke"}
      ],
      Mid: [
        { name: "1 spot - 3 Smokes", file: "miragemidsmokes.html", type:"smoke"}
      ]
    },
    CT: {
      A: [
        { name: "Ignite from Stairs to Short", file: "shortmolo.html", type: "molo"}
      ],
      B: [],
      Mid: []
    }
  },
  Inferno: {
    TT: {
      A: [
        { name: "Aps OneWay to Site", file: "pos2.html", type:"smoke" },
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
    CT: { B: [] }
  },
  Overpass: {
    TT: {
      A: [],
      B: [
        { name: "Heaven Smoke [Spawn]", file: "heaven.html", type:"smoke"}
      ],
      Mid: []
    },
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

// --- Populate TT/CT → A/B/Mid → Positions ---
function populatePositions(map) {
  ['TT','CT'].forEach(side => {
    const container = document.getElementById(side);
    container.innerHTML = '';

    const subSides = positionsData[map][side];
    for (const sub in subSides) {
      // A/B/Mid Header
      const h4 = document.createElement('h4');
      h4.textContent = sub;
      h4.style.cursor = "pointer";

      // Grenade positions
      const ul = document.createElement('ul');
      subSides[sub].forEach(posObj => {
        const li = document.createElement('li');
        li.textContent = posObj.name;

        // Add type class for CSS/filter
        if (posObj.type) li.classList.add(posObj.type);

        // Click to load content
        li.addEventListener('click', () => {
          loadContent(map, sub, posObj.file);

          // Highlight position
          if(currentPosLi) currentPosLi.classList.remove('active-pos');
          li.classList.add('active-pos');
          currentPosLi = li;

          // Highlight sub header
          if(currentSubH4 !== h4) {
            if(currentSubH4) currentSubH4.classList.remove('active-sub');
            h4.classList.add('active-sub');
            currentSubH4 = h4;
          }
        });

        ul.appendChild(li);
      });

      ul.classList.remove('expanded');

      // Expand/collapse A/B/Mid
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

  // Apply filters after populating
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
