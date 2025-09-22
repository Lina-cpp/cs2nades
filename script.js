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
      Mid:
      [
        {name: "CT oneway | Mid", file: "ctoneway.html", type:"smoke"}
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
        {name: "Oneway | Long", file: "longoneway.html", type:"smoke"}
      ],
      B: [
        {name: "B Smokes | Well", file: "ctsitenades.html", type:"smoke"}
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
    CT: 
    {
      B:
      [
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
      A: 
      [
        { name: "Cave/CT/Donut - 1 spot | Stairs", file: "AStairs3Smokes.html", type:"smoke" },
        { name: "CT | Elbow", file: "ctfromelbow.html", type:"smoke"}
      ],
      B: 
      [
        { name: "Long/Short/Cave & Mid + Ninja Molo | Ruins", file:"bmultismokes.html", type:["multi", "smoke", "molo"]}
      ],
       Mid:
        [
          { name: "Red Room + Donut | Spawn", file: "midfromspawn.html", type:"smoke"},
          { name: "Red Room | Elbow", file:"elbowtoredroom.html", type:"smoke"},
          { name: "Donut | Elbow", file: "donutfromelbow.html", type:"smoke"},
          { name: "Heaven | Elbow", file: "heavenfromelbow.html", type:"smoke"}
        ] },
    CT: {
      B: 
      [
        { name: "Molo+He na rampe | Alley", file: "moloheramp.html", type:["multi", "molo", "he"]}
      ]}
  },






  Dust2: {
    Callouts: [
      { name: "Dust2", file: "dust2.html", type: "callouts" }
    ],
    TT: { 
      A:
      [
        { name: "Cross - only 1 smoke | Double Doors Front", file:"acrosssmoke.html", type:"smoke"},
        { name: "CT | Short", file:"ctfromshort.html", type:"smoke"},
        { name: "Long Sniper Peek | Double Doors Front", file:"sniperpeeksmoke.html", type:"smoke"},
        { name: "Long Flash | Double Doors Front", file:"alongbestflash.html", type:"flash"},
      ],
      B:
      [
        { name: "Doors (fast) | T Plat ", file:"doorsfromplat.html", type:"smoke"},
        { name: "Doors | T Plat ", file:"platdoors.html", type:"smoke"},
        { name: "Doors&Window | Front Tunnels", file:"windowsanddoors.html", type:"smoke"},
        { name: "Doors | Upper Tunnel", file:"drzwiztuneli.html", type:"smoke"}
      ], 
      Mid:
      [
        { name: "Xbox | Spawn", file:"xboxsmoke.html", type:"smoke"},
        { name: "Whole CT | Xbox", file:"ctfromxbox.html", type:"smoke"}
      ] },
    CT: { 
      A:
      [
        { name: "Double Doors | Short Boost", file:"cttodoubledoors.html", type:"smoke"}
      ],
      B:
      [
        { name: "Flash na tunele | Site", file:"tunnelflash.html", type:"flash"}
      ],}
  },

};


const details = document.querySelector('.details');
const sides = document.querySelector('.sides');
const mapItems = document.querySelectorAll('.maps li');

let currentMapLi = null;
let currentSubH4 = null;
let currentPosLi = null;
const activeFilters = { smoke:true, molo:true, flash:true, he:true, callouts:true };

function loadContent(file){
  fetch(file)
    .then(r=>r.ok?r.text():Promise.reject('File not found'))
    .then(html=>details.innerHTML=html)
    .catch(err=>details.innerHTML=`<p>Error loading: ${err}</p>`);
}

function hasPositions(mapName){
  const map=positionsData[mapName];
  if(!map) return false;
  return ['TT','CT'].some(side=>map[side] && Object.keys(map[side]).some(k=>map[side][k].length>0));
}

function createPositionElement(map, sub, posObj, h4){
  const li=document.createElement('li');
  li.textContent=posObj.name;
  li.classList.add(Array.isArray(posObj.type)?posObj.type[0]:posObj.type);
  li.dataset.types = Array.isArray(posObj.type)?posObj.type.join(','):posObj.type;

  li.addEventListener('click',()=>{
    loadContent(`maps/${map.toLowerCase()}/${sub}/${posObj.file}`);
    if(currentPosLi) currentPosLi.classList.remove('active-pos');
    li.classList.add('active-pos'); currentPosLi=li;
    if(h4 && currentSubH4!==h4){ if(currentSubH4) currentSubH4.classList.remove('active-sub'); h4.classList.add('active-sub'); currentSubH4=h4; }
  });
  return li;
}

function populatePositions(mapName){
  if(mapName==='Home'){
    sides.classList.remove('show'); // ukryj .sides
    loadContent('maps/home.html'); // ładuj home.html
    return;
  }

  if(hasPositions(mapName)) sides.classList.add('show'); else sides.classList.remove('show');

  const sidesOrder=['Callouts','TT','CT'];
  sidesOrder.forEach(side=>{
    const container=document.getElementById(side);
    container.innerHTML='';
    const subSides=positionsData[mapName][side]; if(!subSides) return;

    if(side==='Callouts'){
      subSides.forEach(posObj=>container.appendChild(createPositionElement(mapName,'',posObj,null)));
      return;
    }

    for(const sub in subSides){
      const h4=document.createElement('h4');
      h4.textContent=sub;
      h4.style.cursor="pointer";

      const ul=document.createElement('ul');
      subSides[sub].forEach(posObj=>ul.appendChild(createPositionElement(mapName,sub,posObj,h4)));
      ul.classList.remove('expanded');

      h4.addEventListener('click',()=>{
        if(currentSubH4 && currentSubH4!==h4){
          const prevUl=currentSubH4.nextElementSibling;
          if(prevUl && prevUl.tagName==='UL') prevUl.classList.remove('expanded');
        }
        ul.classList.toggle('expanded');
        if(currentSubH4 && currentSubH4!==h4) currentSubH4.classList.remove('active-sub');
        h4.classList.add('active-sub'); currentSubH4=h4;
      });

      container.appendChild(h4);
      container.appendChild(ul);
    }
  });
  applyFilters();
}

// --- Map click ---
mapItems.forEach(mapLi=>{
  mapLi.addEventListener('click',()=>{
    if(currentMapLi) currentMapLi.classList.remove('active-map');
    mapLi.classList.add('active-map'); currentMapLi=mapLi;
    const mapName = mapLi.textContent;
    populatePositions(mapName);
  });
});

function initFilters(){
  document.querySelectorAll('.filter-btn').forEach(btn=>{
    const type=btn.dataset.type;
    if(!(type in activeFilters)) return;
    if(!activeFilters[type]) btn.classList.add('inactive');
    btn.addEventListener('click',()=>{
      activeFilters[type]=!activeFilters[type];
      btn.classList.toggle('inactive',!activeFilters[type]);
      applyFilters();
    });
  });
}

function applyFilters() {
  document.querySelectorAll('.sides li').forEach(li => {
    const types = li.dataset.types ? li.dataset.types.split(',') : [];

    if (types.some(type => activeFilters[type])) {
      li.classList.remove("hidden");
    } else {
      li.classList.add("hidden");
    }
  });
}

// --- AUTO: load Home page ---
window.addEventListener('DOMContentLoaded',()=>{
  const homeLi = Array.from(mapItems).find(li=>li.textContent==='Home');
  if(homeLi) homeLi.click();
  else { const firstMapLi=document.querySelector('.maps li'); if(firstMapLi) firstMapLi.click(); }
  initFilters();
});

function updateWipIcons() {
  document.querySelectorAll('.maps li').forEach(mapLi => {
    const mapName = mapLi.textContent.trim();
    const mapData = positionsData[mapName];

    if(mapData && mapData.wip) {
      mapLi.classList.add('wip-map');

      if(!mapLi.querySelector('.wip-icon')) {
        const icon = document.createElement('span');
        icon.textContent = '👷';
        icon.classList.add('wip-icon');
        mapLi.appendChild(icon);
      }
    }
  });
}

// wywołaj przy starcie i po każdej zmianie map
updateWipIcons();