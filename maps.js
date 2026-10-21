/* Real OSM vector snapshot, not an illustrative street diagram. No tile requests or keys.
   Geographic data © OpenStreetMap contributors, ODbL. See MAP-SOURCES.md. */
let mapSequence=0,liveMaps=[];
function routeMetrics(r){
 const ids=[state.plan.start,...r.stops,end()];let metres=0,coords=[];
 for(let i=1;i<ids.length;i++){const leg=MAP_DATA.routes[ids[i-1]+'|'+ids[i]];if(leg){metres+=leg.m;coords.push(...leg.p)}}
 const pauses=r.stops.reduce((n,id)=>n+places[id].stay,0);
 const walking=Math.ceil(metres/75); // Approximate 4.5 km/h, plus per-stop pauses.
 const travel=state.plan.travel==='Walk'?walking:state.plan.travel==='Bike'?Math.ceil(metres/180)+5:walking;
 const base={metres,coords,pauses,walking,travel,total:travel+pauses};return typeof modeMetrics==='function'?modeMetrics(r,base):base;
}
function map(stops=[],large=false,picker=false){return `<div class="map real-map ${large?'large':''}" data-stops="${stops.join(',')}" data-picker="${picker}" id="street-map-${++mapSequence}" role="region" aria-label="Street map of Queen Victoria Market and the University of Melbourne"></div>`}
// Remove vector paths while their Canvas renderer still exists; Leaflet queues redraws on path removal.
function disposeMap(m){m.stop();const paths=[],renderers=[];m.eachLayer(layer=>{if(layer instanceof L.Path)paths.push(layer);if(layer instanceof L.Canvas)renderers.push(layer)});paths.forEach(layer=>m.removeLayer(layer));m.remove();/* Bundled Leaflet can queue a final Canvas redraw during layer disposal. */renderers.forEach(renderer=>{L.Util.cancelAnimFrame(renderer._redrawRequest);renderer._redrawRequest=null})}
function destroyMaps(){liveMaps.forEach(disposeMap);liveMaps=[]}
function initMaps(){
 document.querySelectorAll('.real-map').forEach(el=>{
  if(el._leaflet_id)return;const askKey=el.dataset.askMap,locPicker=el.dataset.locPicker==='true';let stops=el.dataset.stops?el.dataset.stops.split(','):[];const picker=el.dataset.picker==='true';
  const m=L.map(el,{zoomControl:false,scrollWheelZoom:false,touchZoom:true,zoomAnimation:false,fadeAnimation:false,dragging:true,doubleClickZoom:true,keyboard:true,attributionControl:true,zoomSnap:.25,minZoom:12,maxZoom:19,maxBounds:(state.inlineEditing||state.screen==='complete'||state.screen==='navigation')?null:[[-37.810,144.951],[-37.794,144.968]],maxBoundsViscosity:1,preferCanvas:false});liveMaps.push(m);
  if(!picker&&(askKey||['explore','plan','preview'].includes(state.screen)))cooperativeMap(m,el);
  m.attributionControl.setPrefix(false);m.attributionControl.addAttribution('© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>');
  let glReady=false; m.createPane('offline').style.zIndex=190; m.createPane('labels').style.zIndex=410;m.getPane('labels').style.pointerEvents='none';
  const renderer=L.canvas({padding:.3,pane:'offline'});/* A detached renderer can still receive a queued frame during rapid view changes. */const redraw=renderer._redraw;renderer._redraw=function(){if(!this._map||!this._ctx){this._redrawRequest=null;return}return redraw.call(this)};const baseStyle={renderer,interactive:false};
  const roadWidth=h=>['primary','secondary','tertiary'].includes(h)?7:['residential','unclassified','living_street'].includes(h)?5:h==='service'?3:1.4;
  for(const f of MAP_DATA.features){if(f.k==='green')L.polygon(f.p,{...baseStyle,stroke:false,fillColor:'#dce8d4',fillOpacity:1}).addTo(m);else if(f.k==='building')L.polygon(f.p,{...baseStyle,color:'#d8d5ce',weight:.5,fillColor:'#e5e1da',fillOpacity:1}).addTo(m)}
  for(const f of MAP_DATA.features){if(f.k==='road'){const foot=['footway','path','pedestrian','steps'].includes(f.h);if(!foot)L.polyline(f.p,{...baseStyle,color:'#dedcd5',weight:roadWidth(f.h)+1.5}).addTo(m);L.polyline(f.p,{...baseStyle,color:foot?'#d0bd9c':'#ffffff',weight:roadWidth(f.h),dashArray:foot?'2 3':null}).addTo(m)}else if(f.k==='tram')L.polyline(f.p,{...baseStyle,color:'#c7c9c7',weight:1,dashArray:'4 3'}).addTo(m)}
  const labels=[];
  MAP_DATA.labels.filter(l=>l.l>140).forEach(l=>{const marker=L.marker(l.p,{pane:'labels',interactive:false,keyboard:false,icon:L.divIcon({className:'street-label',html:`<span style="transform:translate(-50%,-50%) rotate(${l.a}deg)">${l.n}</span>`,iconSize:[0,0]})});labels.push([marker,l]);});
  function updateLabels(){labels.forEach(([marker,l])=>{let show=!glReady&&(m.getZoom()>15.6||l.l>400);if(show&&!m.hasLayer(marker))marker.addTo(m);if(!show&&m.hasLayer(marker))m.removeLayer(marker)})}m.on('zoomend',updateLabels);
  const routeLayer=L.layerGroup().addTo(m);
  function drawRoute(){routeLayer.clearLayers();
  const route=askKey?{coords:askRouteCoords(askKey)}:locPicker?{coords:[]}:routeMetrics({stops});if(route.coords.length){L.polyline(route.coords,{color:'white',weight:7,opacity:.95,interactive:false}).addTo(routeLayer);L.polyline(route.coords,{color:'#1953D9',weight:4,opacity:1,dashArray:state.plan.travel==='Transit'?'8 5':null,interactive:false}).addTo(routeLayer)}
  // Location picker: small dots for selectable places; the fixed centre pin does the choosing.
  if(locPicker){(typeof askLocAreas!=='undefined'?askLocAreas:[]).forEach(([id])=>{const dot=L.marker(MAP_DATA.pins[id],{keyboard:false,title:places[id].name,icon:L.divIcon({className:'loc-dot',html:'<span></span>',iconSize:[18,18],iconAnchor:[9,9]})}).addTo(routeLayer);dot.on('click',()=>m.panTo(MAP_DATA.pins[id]))});return}
  let ids=askKey?[]:picker?Object.keys(places):[...new Set([state.plan.start,...stops,end()])];
  ids.forEach(id=>{
   const p=places[id],n=stops.indexOf(id)+1,start=id===state.plan.start,finish=id===end(),chosen=picker&&state.candidate===id;
   const marker=L.marker(MAP_DATA.pins[id]||MAP_DATA.snaps[id],{draggable:false,title:p.name,alt:p.name,keyboard:true,zIndexOffset:chosen?100:0,icon:L.divIcon({className:'place-pin',html:`<span class="${start?'start':finish?'finish':''} ${chosen?'chosen':''} ${state.screen==='navigation'&&id===currentTripNode()?'current-node':''}">${n|| (start?'S':finish?'E':'•')}</span>`,iconSize:[44,44],iconAnchor:[22,22]})}).addTo(routeLayer);
   marker.on('add',()=>marker.getElement()?.setAttribute('aria-label',p.name));marker.bindTooltip(p.short,{permanent:!picker&&state.screen!=='edit'&&(start||finish),direction:start?'bottom':'top',offset:[0,start?12:-12],className:'place-label'});
   marker.on('click',()=>{if(picker){state.candidate=id;document.querySelector('#candidate-name').textContent=p.name;el.querySelectorAll('.chosen').forEach(x=>x.classList.remove('chosen'));marker.getElement().querySelector('span').classList.add('chosen')}else{marker.openTooltip()}});
  });
  if(askKey){L.circleMarker(askOrigin,{radius:7,color:'white',weight:3,fillColor:'#1953D9',fillOpacity:1}).addTo(routeLayer).bindTooltip(askLanguage==='zh'?'你在这里':'You are here');L.marker(askMapPlaces[askKey].point,{draggable:false,title:askMapPlaces[askKey].name,icon:L.divIcon({className:'ask-destination',html:'●',iconSize:[24,24],iconAnchor:[12,12]})}).addTo(routeLayer).bindTooltip(askMapPlaces[askKey].name,{permanent:true,direction:'top'})}
  }drawRoute();
  let bounds=L.latLngBounds(askKey?askRouteCoords(askKey):(picker?Object.keys(places):[state.plan.start,...stops,end()]).map(id=>MAP_DATA.pins[id]||MAP_DATA.snaps[id]));const fitRoute=()=>{if(locPicker)return;let left=32,right=32,top=state.screen==='navigation'?150:40,bottom=state.screen==='navigation'?(state.nodeExpanded?260:(document.querySelector('.checkpoint')?.getBoundingClientRect().height||260))+40:44;if(state.inlineEditing){const rect=el.getBoundingClientRect(),hint=document.querySelector('.canvas-instruction')?.getBoundingClientRect(),shelf=document.querySelector('.canvas-shelf')?.getBoundingClientRect();top=hint?hint.bottom-rect.top+24:140;bottom=shelf?rect.bottom-shelf.top+52:240;el.style.setProperty('--route-shelf-inset',(shelf?rect.bottom-shelf.top+4:218)+'px');if(shelf&&shelf.left>rect.left+rect.width*.3){left=24;right=rect.right-shelf.left+24;bottom=48}}m.fitBounds(bounds,{paddingTopLeft:[left,top],paddingBottomRight:[right,bottom],maxZoom:askKey?18:16.5,animate:false})};if(locPicker)m.setView(el.dataset.center.split(',').map(Number),17,{animate:false});else fitRoute();m.fitCurrentRoute=fitRoute;m.on('resize',fitRoute);let disposed=false;const mapResize=new ResizeObserver(()=>{if(!disposed)m.invalidateSize({pan:false})});mapResize.observe(el);m.once('unload',()=>{disposed=true;mapResize.disconnect()});updateLabels();
  m.updateDraftRoute=next=>{stops=[...next];el.dataset.stops=stops.join(',');drawRoute();bounds=L.latLngBounds([state.plan.start,...stops,end()].map(id=>MAP_DATA.pins[id]||MAP_DATA.snaps[id]));fitRoute()};
  const controls=L.control({position:'topright'});controls.onAdd=()=>{const d=L.DomUtil.create('div','map-controls');d.innerHTML='<button type="button" aria-label="Recenter route" title="Recenter route"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3"/></svg></button>';L.DomEvent.disableClickPropagation(d);L.DomEvent.disableScrollPropagation(d);d.children[0].onclick=fitRoute;return d};if(state.screen!=='complete'&&!locPicker)controls.addTo(m);
  el.setAttribute('tabindex','0');el.setAttribute('aria-description','Drag to move the map. Pinch with two fingers to zoom. With a keyboard, use arrow keys to pan and plus or minus to zoom.');
  const badge=L.control({position:'topleft'});badge.onAdd=()=>{let d=L.DomUtil.create('span','map-badge');d.textContent='Street map';return d};if(state.screen!=='complete'&&!locPicker)badge.addTo(m);
  // OpenFreeMap supplies a standard non-satellite street basemap, no account/key.
  // Keep the local OSM snapshot underneath if the network is unavailable.
  if(window.maplibregl&&L.maplibreGL){try{
   const gl=L.maplibreGL({style:'https://tiles.openfreemap.org/styles/liberty',interactive:false}).addTo(m);
   const fallback=()=>{if(!glReady&&m.hasLayer(gl)){m.removeLayer(gl);const b=el.querySelector('.map-badge');if(b)b.textContent='Offline street map';}};const fallbackTimer=setTimeout(fallback,8000);m.once('unload',()=>clearTimeout(fallbackTimer));
   gl.getMaplibreMap().on('load',()=>{clearTimeout(fallbackTimer);glReady=true;updateLabels();m.attributionControl.addAttribution('<a href="https://openfreemap.org/" target="_blank" rel="noopener">OpenFreeMap</a> · <a href="https://openmaptiles.org/" target="_blank" rel="noopener">OpenMapTiles</a>');});
   gl.getMaplibreMap().on('error',()=>{if(!glReady)fallback();});
  }catch{const b=el.querySelector('.map-badge');if(b)b.textContent='Offline street map';}}

 });
}
