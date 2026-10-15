// Direct manipulation on the map. Touch pan remains available on the card shelf.
let activeStopDrag=null,pendingStopPointer=null,suppressDragClickUntil=0;
function setDragHint(text){const h=document.querySelector('#drag-hint');if(h)h.textContent=text}
function clearStopDrag(){
 const d=activeStopDrag;if(!d)return;
 d.layers?.forEach(layer=>layer.remove());d.ghost?.remove();
 document.body.classList.remove('dragging-stop');
 document.querySelectorAll('.drag-source').forEach(e=>e.classList.remove('drag-source'));
 setDragHint('Drag a place onto the blue route');activeStopDrag=null;
}
function draftWithInsertion(id,index,from){
 const stops=[...state.draft.stops];let position=index;
 if(from==='route'){const old=stops.indexOf(id);stops.splice(old,1);if(old<position)position--}
 else if(stops.includes(id))return stops;
 stops.splice(Math.max(0,Math.min(position,stops.length)),0,id);return stops;
}
function routeLegPoints(index){
 const ids=[state.plan.start,...state.draft.stops,end()];
 return MAP_DATA.routes[ids[index]+'|'+ids[index+1]]?.p||[MAP_DATA.snaps[ids[index]],MAP_DATA.snaps[ids[index+1]]];
}
function nearestRouteSlot(x,y){
 const m=liveMaps[0],rect=m.getContainer().getBoundingClientRect(),p={x:x-rect.left,y:y-rect.top};
 let best={index:0,distance:Infinity,point:null};
 for(let index=0;index<=state.draft.stops.length;index++){
  const points=routeLegPoints(index).map(ll=>m.latLngToContainerPoint(ll));
  for(let j=1;j<points.length;j++){
   const a=points[j-1],b=points[j],dx=b.x-a.x,dy=b.y-a.y,length=dx*dx+dy*dy;
   const t=length?Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.y-a.y)*dy)/length)):0;
   const point=L.point(a.x+t*dx,a.y+t*dy),distance=(point.x-p.x)**2+(point.y-p.y)**2;
   if(distance<best.distance)best={index,distance,point};
  }
 }
 return best;
}
function showStopDrop(index,point){
 const d=activeStopDrag,m=liveMaps[0];if(!d||!m)return;
 if(d.previewIndex!==index){
  d.layers?.forEach(layer=>layer.remove());d.layers=[];
  const stops=draftWithInsertion(d.id,index,d.from),metrics=routeMetrics({stops});
  d.layers.push(L.polyline(metrics.coords,{color:'#137A62',weight:5,dashArray:'6 7',opacity:.95,interactive:false}).addTo(m));
  d.marker=L.marker(MAP_DATA.pins[d.id]||MAP_DATA.snaps[d.id],{draggable:false,interactive:false,keyboard:false,zIndexOffset:1000,icon:L.divIcon({className:'canvas-drop-marker',html:'<span>+</span>',iconSize:[40,40],iconAnchor:[20,20]})}).addTo(m);
  d.layers.push(d.marker);d.previewIndex=index;
  const next=state.draft.stops[index],over=metrics.total-state.plan.time;
  setDragHint(`${next?'Before '+places[next].short:'Before the finish'} · ${metrics.total} min${over>0?' · '+over+' min over':''}`);
 }
 d.index=index;
}
function beginStopDrag(source,keyboard=false){
 const id=source.dataset.dragId,from=source.dataset.dragFrom;
 activeStopDrag={id,from,source,keyboard,index:state.draft.stops.length,valid:keyboard,layers:[]};
 source.classList.add('drag-source');document.body.classList.add('dragging-stop');
 setDragHint(keyboard?'Arrows choose a position · Enter to drop':'Lift onto the map to preview your detour');
 if(keyboard){showStopDrop(state.draft.stops.length);return}
 const ghost=document.createElement('div');ghost.className='drag-ghost';
 ghost.innerHTML=`<img src="${placeImage(id)}" alt=""><div><strong>${places[id].short}</strong><small>${places[id].stay} min detour</small></div>`;
 document.body.append(ghost);activeStopDrag.ghost=ghost;
}
function commitStopDrag(){
 const d=activeStopDrag;if(!d)return;
 const {id,index,from,valid,keyboard}=d;clearStopDrag();suppressDragClickUntil=Date.now()+250;
 if(!valid){toast('Drag onto the map to add this place');return}
 const next=draftWithInsertion(id,index,from);if(JSON.stringify(next)===JSON.stringify(state.draft.stops))return;
 state.undo=clone(state.draft);state.draft.stops=next;refreshDraftMap();render(false);
 if(!warnBuilderBudget())toast(`${places[id].short} ${from==='route'?'moved':'added'} · Route updated`);
 const row=document.querySelector(`.rail-stop[data-stop-id="${id}"]`),rail=document.querySelector('.route-rail');
 if(row&&!matchMedia('(prefers-reduced-motion: reduce)').matches)row.animate([{background:'#DDF5E9',boxShadow:'0 0 0 2px #137A6240'},{background:'#F0F5FF',boxShadow:'0 0 0 0 transparent'}],{duration:650,easing:'ease-out'});if(row&&rail){const a=row.getBoundingClientRect(),b=rail.getBoundingClientRect();if(a.right>b.right)rail.scrollLeft+=a.right-b.right;if(a.left<b.left)rail.scrollLeft-=b.left-a.left;if(keyboard)row.querySelector('[data-drag-id]')?.focus({preventScroll:true})}
}
document.addEventListener('pointerdown',e=>{
 const source=e.target.closest('[data-drag-id]');if(!source||e.button!==0||!state.inlineEditing)return;
 pendingStopPointer={source,id:e.pointerId,x:e.clientX,y:e.clientY};source.setPointerCapture(e.pointerId);
});
document.addEventListener('pointermove',e=>{
 if(!pendingStopPointer||e.pointerId!==pendingStopPointer.id)return;const p=pendingStopPointer;
 if(!activeStopDrag){if(Math.hypot(e.clientX-p.x,e.clientY-p.y)<8)return;beginStopDrag(p.source)}
 const d=activeStopDrag;e.preventDefault();
 d.ghost.style.left=Math.max(8,Math.min(innerWidth-192,e.clientX-92))+'px';d.ghost.style.top=(e.clientY-78)+'px';
 const zone=document.querySelector('#route-dropzone').getBoundingClientRect(),budget=document.querySelector('#builder-budget').getBoundingClientRect(),shelf=document.querySelector('.canvas-shelf').getBoundingClientRect();
 const inside=r=>e.clientX>=r.left-4&&e.clientX<=r.right+4&&e.clientY>=r.top-4&&e.clientY<=r.bottom+4;d.valid=inside(zone)&&!inside(budget)&&!inside(shelf);
 if(d.valid){const slot=nearestRouteSlot(e.clientX,e.clientY);showStopDrop(slot.index,slot.point);d.ghost.classList.add('ready')}
 else{d.layers.forEach(layer=>layer.remove());d.layers=[];d.previewIndex=null;d.marker=null;d.ghost.classList.remove('ready');setDragHint('Lift onto the map to preview your detour')}
},{passive:false});
document.addEventListener('pointerup',e=>{if(!pendingStopPointer||e.pointerId!==pendingStopPointer.id)return;pendingStopPointer=null;if(activeStopDrag)commitStopDrag()});
document.addEventListener('pointercancel',()=>{pendingStopPointer=null;clearStopDrag()});
document.addEventListener('keydown',e=>{
 const source=e.target.closest('[data-drag-id]');
 if(e.key==='Escape'&&activeStopDrag){e.preventDefault();clearStopDrag();return}
 if(activeStopDrag?.keyboard){
  if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Enter',' '].includes(e.key)){
   e.preventDefault();if(e.key==='Enter'||e.key===' '){commitStopDrag();return}
   showStopDrop(Math.max(0,Math.min(state.draft.stops.length,activeStopDrag.index+(['ArrowUp','ArrowLeft'].includes(e.key)?-1:1))));
  }return;
 }
 if(source&&(e.key===' '||(e.key==='Enter'&&source.dataset.dragFrom==='route'))){e.preventDefault();beginStopDrag(source,true)}
});
window.addEventListener('blur',()=>{pendingStopPointer=null;clearStopDrag()});
