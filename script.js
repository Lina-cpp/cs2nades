// --- Hierarchiczny obiekt pozycji TT/CT -> A/B/Mid -> pozycje ---
const positionsData = {
  Mirage: {
    TT: {
      A: ["Pozycja1", "Pozycja2"],
      B: ["Pozycja3", "Pozycja4"],
      Mid: ["Pozycja5"]
    },
    CT: {
      A: ["Pozycja6"],
      B: ["Pozycja7"],
      Mid: ["Pozycja8"]
    }
  },
  Inferno: {
    TT: {
      A: ["Banana"],
      B: ["SiteB"],
      Mid: ["Midpoint"]
    },
    CT: {
      A: ["A_Site"],
      B: ["B_Site"],
      Mid: ["Mid_CT"]
    }
  }
};

// --- Elementy DOM ---
const details = document.querySelector('.details');

// --- Zmienne do śledzenia aktywnych elementów ---
let currentMapLi = null;
let currentSubH4 = null;
let currentPosLi = null;

// --- Funkcja do ładowania pliku HTML po prawej ---
function loadContent(map, sub, pos) {
  const filename = `${sub}_${pos}.html`.toLowerCase().replace(/\s+/g, '_');
  const url = `maps/${map.toLowerCase()}/${filename}`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error('Plik nie znaleziony');
      return response.text();
    })
    .then(html => {
      details.innerHTML = html;
    })
    .catch(err => {
      details.innerHTML = `<p>Błąd ładowania: ${err}</p>`;
    });
}

// --- Wypełnianie środkowej kolumny TT/CT → A/B/Mid → pozycje ---
function populatePositions(map) {
  ['TT','CT'].forEach(side => {
    const container = document.getElementById(side);
    container.innerHTML = '';

    const subSides = positionsData[map][side];
    for (const sub in subSides) {
      // Nagłówek A/B/Mid
      const h4 = document.createElement('h4');
      h4.textContent = sub;
      h4.style.cursor = "pointer";

      h4.addEventListener('click', () => {
        // Podświetlenie subside
        if (currentSubH4) currentSubH4.classList.remove('active-sub');
        h4.classList.add('active-sub');
        currentSubH4 = h4;
      });

      container.appendChild(h4);

      // Lista pozycji
      const ul = document.createElement('ul');
      subSides[sub].forEach(pos => {
        const li = document.createElement('li');
        li.textContent = pos;

        li.addEventListener('click', () => {
          loadContent(map, sub, pos);

          // Podświetlenie pozycji
          if (currentPosLi) currentPosLi.classList.remove('active-pos');
          li.classList.add('active-pos');
          currentPosLi = li;

          // Podświetlenie subside, jeśli nie było kliknięte
          if (currentSubH4 !== h4) {
            if (currentSubH4) currentSubH4.classList.remove('active-sub');
            h4.classList.add('active-sub');
            currentSubH4 = h4;
          }
        });

        ul.appendChild(li);
      });

      container.appendChild(ul);
    }
  });
}

// --- Kliknięcie mapy po lewej ---
document.querySelectorAll('.maps li').forEach(mapLi => {
  mapLi.addEventListener('click', () => {
    const mapName = mapLi.textContent;

    // Podświetlenie mapy
    if (currentMapLi) currentMapLi.classList.remove('active-map');
    mapLi.classList.add('active-map');
    currentMapLi = mapLi;

    populatePositions(mapName);
  });
});

// --- Wczytanie domyślnej mapy przy starcie ---
window.addEventListener('DOMContentLoaded', () => {
  const firstMapLi = document.querySelector('.maps li');
  if (firstMapLi) {
    firstMapLi.classList.add('active-map');
    currentMapLi = firstMapLi;
    populatePositions(firstMapLi.textContent);
  }
});
