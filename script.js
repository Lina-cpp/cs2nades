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
  },
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


const details = document.querySelector('.details');
const sides = document.querySelector('.sides');
const mapItems = document.querySelectorAll('.maps li');

let currentMapLi = null;
let currentSubH4 = null;
let currentPosLi = null;
const activeFilters = { smoke:true, molo:true, flash:true, he:true, callouts:true };

function loadContent(map, sub, filename) {
  fetch(`maps/${map.toLowerCase()}/${sub}/${filename}`)
    .then(r=>r.ok?r.text():Promise.reject('File not found'))
    .then(html=>details.innerHTML=html)
    .catch(err=>details.innerHTML=`<p>Error loading: ${err}</p>`);
}

function createPositionElement(map, sub, posObj, h4){
  const li=document.createElement('li');
  li.textContent=posObj.name;
  li.classList.add(Array.isArray(posObj.type)?posObj.type[0]:posObj.type);
  li.dataset.types = Array.isArray(posObj.type)?posObj.type.join(','):posObj.type;

  li.addEventListener('click',()=>{
    loadContent(map,sub,posObj.file);
    if(currentPosLi) currentPosLi.classList.remove('active-pos');
    li.classList.add('active-pos'); currentPosLi=li;
    if(h4 && currentSubH4!==h4){ if(currentSubH4) currentSubH4.classList.remove('active-sub'); h4.classList.add('active-sub'); currentSubH4=h4; }
  });
  return li;
}

function hasPositions(mapName){
  const map=positionsData[mapName];
  if(!map) return false;
  return ['TT','CT'].some(side=>map[side] && Object.keys(map[side]).some(k=>map[side][k].length>0));
}

function populatePositions(map){
  const sidesOrder=['Callouts','TT','CT'];
  if(hasPositions(map)) sides.classList.add('show'); else sides.classList.remove('show');

  sidesOrder.forEach(side=>{
    const container=document.getElementById(side);
    container.innerHTML='';
    const subSides=positionsData[map][side]; if(!subSides) return;

    if(side==='Callouts'){
      subSides.forEach(posObj=>container.appendChild(createPositionElement(map,'',posObj,null)));
      return;
    }

    for(const sub in subSides){
      const h4=document.createElement('h4');
      h4.textContent=sub;
      h4.style.cursor="pointer";

      const ul=document.createElement('ul');
      subSides[sub].forEach(posObj=>ul.appendChild(createPositionElement(map,sub,posObj,h4)));
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

mapItems.forEach(mapLi=>{
  const mapName=mapLi.textContent;
  const mapData=positionsData[mapName];

  if(mapData && mapData.wip){
    mapLi.classList.add('wip-map');
    const icon=document.createElement('span');
    icon.textContent='👷';
    icon.classList.add('wip-icon');
    mapLi.appendChild(icon);
  }

  mapLi.addEventListener('click',()=>{
    if(currentMapLi) currentMapLi.classList.remove('active-map');
    mapLi.classList.add('active-map'); currentMapLi=mapLi;
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

function applyFilters(){
  document.querySelectorAll('.sides li').forEach(li=>{
    const types = li.dataset.types?li.dataset.types.split(','):[];
    li.style.display=types.some(type=>activeFilters[type])?'':'none';
  });
}

window.addEventListener('DOMContentLoaded',()=>{
  const firstMapLi=document.querySelector('.maps li');
  if(firstMapLi) firstMapLi.click();
  initFilters();
});

