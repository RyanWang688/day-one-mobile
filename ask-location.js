/* Ask This Place: a small "Not here?" control instead of a fixed verdict.
   It opens a compact sheet where the user drags the map under a centre pin (or taps a nearby
   place, or uses their location once). The nearest place to the pin is shown live and the
   user confirms it. Nothing is chosen without a tap. */
const askLocAreas=[
 ['ask-dairy'],['ask-produce'],['ask-shopping'],['ask-hub'],['market'],
 ['seeds'],['baths'],['state-library'],['lincoln'],['baillieu'],['quad'],['system'],['grainger'],['potter']
].filter(([id])=>places[id]&&MAP_DATA.pins[id]);
const askLocText=(en,zh)=>(window.appLanguage==='zh'||askLanguage==='zh')?zh:en;
const askLocName=id=>id==='market'?askLocText('Queen Victoria Market','维多利亚女王市场'):places[id]?.name||id;
const askLocMeters=(a,b)=>{const dy=(b[0]-a[0])*111320,dx=(b[1]-a[1])*111320*Math.cos(a[0]*Math.PI/180);return Math.hypot(dx,dy)};
const askLocNearest=point=>askLocAreas.map(([id])=>({id,m:askLocMeters(point,MAP_DATA.pins[id])})).sort((a,b)=>a.m-b.m);
let askLocPick=null;

{
 const chip=()=>`<button class="ask-loc-chip" data-action="ask-loc-open" aria-haspopup="dialog">${icon('pin')}<span>${askLocText('Not here?','不在这？')}</span></button>`;
 const baseAsk=askPlace,baseLocal=localPlaceHelp;
 askPlace=function(){return baseAsk().replace('<section class="ask-hero">','<section class="ask-hero">'+chip())};
 localPlaceHelp=function(){return baseLocal().replace(/(<div class="local-help-title">)/,'$1'+chip())};
}

function openAskLocSheet(){
 const current=state.askPlaceId||'market',center=MAP_DATA.pins[current]||askOrigin;
 askLocPick=current;
 const d=document.createElement('dialog');d.id='ask-loc-dialog';d.setAttribute('aria-labelledby','ask-loc-title');
 const near=askLocNearest(center).slice(0,4);
 d.innerHTML=`<header><h2 id="ask-loc-title">${askLocText('Move the map to your spot','拖动地图，对准你的位置')}</h2><button class="iconbtn" data-action="ask-loc-close" aria-label="${askLocText('Close','关闭')}">${icon('close')}</button></header>
 <div class="ask-loc-map">${map([],true).replace('class="map real-map','data-loc-picker="true" data-center="'+center.join(',')+'" class="map real-map')}<span class="ask-loc-pin" aria-hidden="true">${icon('pin')}</span><span class="ask-loc-label" aria-live="polite"></span><button class="ask-loc-me" data-action="ask-loc-gps" aria-label="${askLocText('Use my location','定位到我')}" title="${askLocText('Use my location','定位到我')}"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3"/></svg></button></div>
 <div class="ask-loc-near" role="group" aria-label="${askLocText('Nearby places','附近地点')}">${near.map(n=>`<button data-action="ask-loc-jump" data-id="${n.id}">${askLocName(n.id)}</button>`).join('')}</div>
 <button class="primary ask-loc-confirm" data-action="ask-loc-confirm"></button>`;
 document.body.append(d);
 d.addEventListener('close',()=>{liveMaps=liveMaps.filter(m=>{if(d.contains(m.getContainer())){disposeMap(m);return false}return true});d.remove();document.querySelector('[data-action="ask-loc-open"]')?.focus({preventScroll:true})});
 d.addEventListener('click',e=>{if(e.target===d)d.close()});
 d.showModal();initMaps();
 const m=liveMaps.find(x=>d.contains(x.getContainer()));
 const update=()=>{if(!m)return;const c=m.getCenter(),best=askLocNearest([c.lat,c.lng])[0];askLocPick=best.id;
  d.querySelector('.ask-loc-label').textContent=askLocName(best.id)+(best.m>120?askLocText(' · nearest',' · 最近'):'');
  d.querySelector('.ask-loc-confirm').textContent=askLocText(`Use ${askLocName(best.id)}`,`就在 ${askLocName(best.id)}`);
  d.querySelectorAll('.ask-loc-near button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.id===best.id)))};
 if(m){m.on('move',update);m.on('movestart',()=>d.querySelector('.ask-loc-map').classList.add('is-moving'));m.on('moveend',()=>{d.querySelector('.ask-loc-map').classList.remove('is-moving');update()})}
 update();
}
function askLocMap(){const d=document.querySelector('#ask-loc-dialog');return d&&liveMaps.find(x=>d.contains(x.getContainer()))}
function askLocGPS(){
 const d=document.querySelector('#ask-loc-dialog'),label=d?.querySelector('.ask-loc-label');
 const say=t=>{if(label)label.textContent=t};
 if(!('geolocation' in navigator)){say(askLocText('Location unavailable · drag the map','无法定位 · 请拖动地图'));return}
 say(askLocText('Locating…','定位中…'));
 navigator.geolocation.getCurrentPosition(pos=>{
  const point=[pos.coords.latitude,pos.coords.longitude],m=askLocMap();
  if(askLocNearest(point)[0].m>3000){say(askLocText('You’re outside this area · drag the map','你不在本区域内 · 请拖动地图'));return}
  m?.flyTo(point,18,{duration:matchMedia('(prefers-reduced-motion: reduce)').matches?0:.6});
 },err=>say(err.code===1?askLocText('Location is off · drag the map','未开启定位 · 请拖动地图'):askLocText('Weak signal · drag the map','信号较弱 · 请拖动地图')),{enableHighAccuracy:true,timeout:10000,maximumAge:0});
}
function askLocConfirm(){
 const id=askLocPick;document.querySelector('#ask-loc-dialog')?.close();if(!id||!places[id])return;
 const changed=(state.askPlaceId||'market')!==id;
 if(changed){state.askPlaceId=id;resetAsk();go('askPlace')}
 toast(changed?askLocText(`Now showing ${askLocName(id)}`,`已切换到：${askLocName(id)}`):askLocText('Location confirmed','位置已确认'));
}
document.addEventListener('click',e=>{
 const b=e.target.closest('[data-action]');if(!b||b.disabled)return;const a=b.dataset.action;
 if(a==='ask-loc-open'){e.preventDefault();openAskLocSheet()}
 else if(a==='ask-loc-close'){document.querySelector('#ask-loc-dialog')?.close()}
 else if(a==='ask-loc-gps'){e.preventDefault();askLocGPS()}
 else if(a==='ask-loc-jump'){askLocMap()?.panTo(MAP_DATA.pins[b.dataset.id])}
 else if(a==='ask-loc-confirm'){askLocConfirm()}
});
