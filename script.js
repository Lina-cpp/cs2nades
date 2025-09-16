// --- Obiekt pozycji z nazwami wyświetlanymi i plikami ---
const positionsData = {
  Mirage: {
    TT: {
      A: [
        { name: "1Pos 3Smokes", file: "pos1.html" },
      ],
      B: [
        
      ],
      Mid: [
        
      ]
    },
    CT: {
      A: [
        
      ],
      B: [
        
      ],
      Mid: [
        
      ]
    }
  },
  Inferno: {
    TT: {
      A: [
        { name: "Banana Push", file: "pos2.html" }
      ]
    },
    CT: {
      B: [
        
      ]
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
function loadContent(map, sub, filename) {
  const url = `maps/${map.toLowerCase()}/${sub}/${filename}`;

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
      // Nagłówek podstrony A/B/Mid
      const h4 = document.createElement('h4');
      h4.textContent = sub;
      h4.style.cursor = "pointer";

      // Lista pozycji
      const ul = document.createElement('ul');
      subSides[sub].forEach(posObj => {
        const li = document.createElement('li');
        li.textContent = posObj.name;

        li.addEventListener('click', () => {
          loadContent(map, sub, posObj.file);

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

      // Początkowo lista zwinięta
      ul.classList.remove('expanded');

      // Kliknięcie nagłówka rozwija / zwija listę
      h4.addEventListener('click', () => {
        if (currentSubH4 && currentSubH4 !== h4) {
          const prevUl = currentSubH4.nextElementSibling;
          if (prevUl && prevUl.tagName === 'UL') prevUl.classList.remove('expanded');
        }

        ul.classList.toggle('expanded');

        if (currentSubH4 && currentSubH4 !== h4) currentSubH4.classList.remove('active-sub');
        h4.classList.add('active-sub');
        currentSubH4 = h4;
      });

      container.appendChild(h4);
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

// --- AUTO: wybierz pierwszą mapę po załadowaniu strony ---
window.addEventListener('DOMContentLoaded', () => {
  const firstMapLi = document.querySelector('.maps li');
  if (firstMapLi) firstMapLi.click();
});
