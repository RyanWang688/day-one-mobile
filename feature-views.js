// Additive views. Route building, rich place guides and summary stay in app.js.
Object.assign(appZh,{'Journey':'指南旅程'});
function tripNodes(){return [state.plan.start,...state.route.stops,end()]}
function currentTripNode(){return tripNodes()[Math.min(state.step,tripNodes().length-1)]}
function advanceTripNode(){if(state.screen!=='navigation')return;state.nodeExpanded=false;state.step++;go(state.step>=tripNodes().length?'complete':'navigation')}
function setAppLanguage(language){if(!['en','zh'].includes(language))return;askLanguage=language;window.appLanguage=language;try{localStorage.setItem('day-one-language',language)}catch{}window.speechSynthesis?.cancel();render(false);translateAppDOM();syncJourneyLanguage()}
function syncJourneyLanguage(){document.querySelector('#journey')?.contentWindow?.postMessage({type:'day-one-language',language:window.appLanguage||'en'},'*')}
window.addEventListener('message',e=>{if(e.source===document.querySelector('#journey')?.contentWindow&&e.data?.type==='day-one-language-ready')syncJourneyLanguage()});
window.addEventListener('storage',e=>{if(e.key==='day-one-language'&&['en','zh'].includes(e.newValue))setAppLanguage(e.newValue)});
Object.assign(appZh,{'A little off your path':'沿途的小发现','Distance':'距离','Stop':'停留点','Stops':'停留点','min':'分钟','km':'公里','total':'总计','walk':'步行','Saved to your routes':'已收藏此路线','Demo only · Time and distance are estimates':'仅为演示 · 时间与距离为估算值','Coffee & Campus':'咖啡与校园','Current stop':'当前站点','Change time budget':'调整时间预算','Undo last change':'撤销上次修改'});
function navigation(){const nodes=tripNodes(),id=currentTripNode(),p=places[id],last=state.step===nodes.length-1;return `<div class="navigation-map">${map(state.route.stops,true)}</div><div class="navigation-top"><div class="navigation-toolbar">${btn(icon('back'),'preview','iconbtn','aria-label="Back to trip"')}<span class="tag">Explore · Demo</span>${askLanguageButton()}</div><section class="navigation-progress card pad" aria-hidden="${!!state.nodeExpanded}"><div class="row"><strong>This stop · ${state.step+1} / ${nodes.length}</strong><small>${state.plan.travel}</small></div><div class="arrival-segments">${nodes.map((_,i)=>`<span class="${i<state.step?'done':i===state.step?'current':''}"></span>`).join('')}</div></section></div><section class="checkpoint card current-place-card ${state.nodeExpanded?'is-expanded':''}" tabindex="0" aria-keyshortcuts="ArrowRight ArrowUp Escape" aria-label="Current place. Swipe right for the next stop."><div class="node-sheet-head"><button class="node-sheet-toggle" data-action="node-expand" aria-expanded="${!!state.nodeExpanded}" aria-controls="node-story-content" aria-label="Expand or collapse place information"><span class="sheet-handle" aria-hidden="true"></span><span class="node-toggle-copy">${storyText(state.nodeExpanded?'Back to map':'Explore this place',state.nodeExpanded?'收起，回到地图':'展开，探索这里')}${icon(state.nodeExpanded?'down':'up')}</span></button><div class="row"><span class="eyebrow">This stop</span><small>${p.stay?p.stay+' min pause':'Route landmark'}</small></div><h1>${p.name}</h1><p class="node-address">${p.area}</p></div><div class="node-sheet-scroll"><div class="node-teaser"><img src="${placeImagePreviews[storyImage(id).split('/' ).pop()]||storyImage(id)}" alt="${p.name}" width="72" height="56"><p>${p.desc}</p></div><div id="node-story-content" class="node-full-details" ${state.nodeExpanded?'':'hidden'}>${exploreStory(id)}</div></div><div class="node-sheet-footer"><div class="checkpoint-actions">${btn(icon('ask')+' Ask this place','node-ask','secondary')}</div><small class="trip-swipe-hint" data-idle="${storyText(last?'Swipe right to finish':'Swipe right for the next stop',last?'向右滑动，完成行程':'向右滑动，前往下一站')}">${storyText(last?'Swipe right to finish':'Swipe right for the next stop',last?'向右滑动，完成行程':'向右滑动，前往下一站')} →</small></div></section>`}

function localPlaceHelp(){const id=state.askPlaceId,p=places[id];return `${head('Ask this place','ask-trip-return',askLanguageButton())}<div class="local-help-title"><span class="tag">Place guide</span><h1>${p.name}</h1><p>${p.area}</p></div><p class="notice">Prepared local guide · Live chat is not connected.</p>${placeGuide(id)}`}
function setNodeExpanded(expanded){const card=$('.current-place-card');if(!card||state.nodeExpanded===expanded)return;const before=card.getBoundingClientRect().height;card.getAnimations({subtree:true}).forEach(a=>a.cancel());const scroll=card.querySelector('.node-sheet-scroll');if(!expanded)state.nodeReading={id:currentTripNode(),scroll:scroll.scrollTop};state.nodeExpanded=expanded;$('.navigation-progress')?.setAttribute('aria-hidden',expanded);card.classList.toggle('is-expanded',expanded);const detail=card.querySelector('.node-full-details');detail.hidden=!expanded;const toggle=card.querySelector('.node-sheet-toggle');toggle.setAttribute('aria-expanded',expanded);toggle.querySelector('.node-toggle-copy').innerHTML=storyText(expanded?'Back to map':'Explore this place',expanded?'收起，回到地图':'展开，探索这里')+icon(expanded?'down':'up');scroll.scrollTop=expanded&&state.nodeReading?.id===currentTripNode()?state.nodeReading.scroll:0;const after=card.getBoundingClientRect().height;if(!matchMedia('(prefers-reduced-motion: reduce)').matches){const motion=card.animate([{height:before+'px',maxHeight:before+'px'},{height:after+'px',maxHeight:after+'px'}],{duration:expanded?380:280,easing:'cubic-bezier(.22,1,.36,1)'});motion.onfinish=()=>{if(!state.nodeExpanded&&state.screen==='navigation')liveMaps[0]?.fitCurrentRoute?.()};if(expanded){detail.animate([{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'}],{duration:280,delay:70,fill:'backwards',easing:'ease-out'})}}else if(!expanded)liveMaps[0]?.fitCurrentRoute?.()}

// Only the place card owns the gesture; the map and article keep native panning.
let nodeGesture=null,nodeTouch=null,nodeSwipeBusy=false;
function settleNodeSwipe(g,commit=false){
 const card=g.card;if(!card.isConnected)return;
 const transform=card.style.transform||'translateX(0px)',opacity=getComputedStyle(card).opacity;
 card.style.transform='';card.style.opacity='';card.classList.remove('is-swiping');
 const hint=card.querySelector('.trip-swipe-hint');if(hint)hint.textContent=hint.dataset.idle+' →';
 card.style.removeProperty('--swipe-progress');
 const finish=()=>{nodeSwipeBusy=false;if(commit&&card.isConnected&&state.screen==='navigation'&&currentTripNode()===g.node)advanceTripNode()};
 if(matchMedia('(prefers-reduced-motion: reduce)').matches){finish();return}
 nodeSwipeBusy=true;
 const animation=card.animate([{transform,opacity},{transform:commit?`translateX(${innerWidth}px)`:'translateX(0px)',opacity:commit?0:1}],{duration:commit?180:240,easing:'cubic-bezier(.22,1,.36,1)',fill:'forwards'});
 animation.finished.then(()=>{animation.cancel();finish()},()=>{nodeSwipeBusy=false});
}
document.addEventListener('pointerdown',e=>{
 const card=e.target.closest('.current-place-card');
 if(state.screen!=='navigation'||nodeSwipeBusy||!e.isPrimary||e.button!==0||!card||e.target.closest('button,a,summary,input'))return;
 const heading=!!e.target.closest('.node-sheet-head');if(state.nodeExpanded&&!heading)return;
 nodeGesture={x:e.clientX,y:e.clientY,id:e.pointerId,card,heading,node:currentTripNode(),dx:0,horizontal:false};
});
document.addEventListener('pointermove',e=>{
 const g=nodeGesture;if(!g||e.pointerId!==g.id)return;
 const dx=e.clientX-g.x,dy=e.clientY-g.y;
 if(!g.horizontal&&dx>8&&dx>Math.abs(dy)*1.4){g.horizontal=true;g.card.setPointerCapture(e.pointerId);g.card.classList.add('is-swiping')}
 if(!g.horizontal)return;
 g.dx=Math.max(0,Math.min(dx,innerWidth*.8));g.threshold=Math.min(100,g.card.clientWidth*.28);
 if(!matchMedia('(prefers-reduced-motion: reduce)').matches){g.card.style.transform=`translateX(${g.dx}px)`;g.card.style.opacity=1-g.dx/(innerWidth*2)}
 g.card.style.setProperty('--swipe-progress',Math.min(1,g.dx/g.threshold));
 const hint=g.card.querySelector('.trip-swipe-hint'),copy=g.dx>=g.threshold?storyText('Release to continue','松手，继续行程'):hint?.dataset.idle;
 if(hint)hint.textContent=copy+' →';
});
document.addEventListener('pointerup',e=>{
 const g=nodeGesture;if(!g||e.pointerId!==g.id)return;nodeGesture=null;
 if(g.horizontal){settleNodeSwipe(g,g.dx>=g.threshold);return}
 const dy=e.clientY-g.y,dx=e.clientX-g.x;
 if(g.heading&&state.nodeExpanded&&dy>45&&dy>Math.abs(dx)*1.5)setNodeExpanded(false);
 else if(!state.nodeExpanded&&dy< -45&&Math.abs(dy)>Math.abs(dx)*1.5)setNodeExpanded(true);
});
document.addEventListener('pointercancel',e=>{if(nodeGesture?.id===e.pointerId){const g=nodeGesture;nodeGesture=null;if(g.horizontal)settleNodeSwipe(g)}});
// Vertical native scrolling can cancel a pointer stream; retain the sheet gesture.
document.addEventListener('touchstart',e=>{nodeTouch=state.screen==='navigation'&&!nodeSwipeBusy&&e.touches.length===1&&e.target.closest('.current-place-card')&&!e.target.closest('button,a,summary')?{x:e.touches[0].clientX,y:e.touches[0].clientY,heading:!!e.target.closest('.node-sheet-head')}:null},{passive:true});
document.addEventListener('touchend',e=>{const g=nodeTouch;nodeTouch=null;if(!g||state.screen!=='navigation'||nodeSwipeBusy)return;const dx=e.changedTouches[0].clientX-g.x,dy=e.changedTouches[0].clientY-g.y;if(Math.abs(dy)<45||Math.abs(dy)<Math.abs(dx)*1.5)return;if(state.nodeExpanded&&g.heading&&dy>0)setNodeExpanded(false);else if(!state.nodeExpanded&&dy<0)setNodeExpanded(true)},{passive:true});
document.addEventListener('touchcancel',()=>nodeTouch=null,{passive:true});
document.addEventListener('keydown',e=>{if(state.screen!=='navigation'||nodeSwipeBusy||!e.target.closest('.current-place-card')||e.target.closest('button,a,input,textarea,summary'))return;if(e.key==='ArrowRight'){e.preventDefault();settleNodeSwipe({card:$('.current-place-card'),node:currentTripNode()},true)}else if(e.key==='ArrowUp'||e.key==='Escape'){e.preventDefault();setNodeExpanded(e.key==='ArrowUp')}});
// High-resolution stories retain a local, embedded photo if the image request fails.
document.addEventListener('error',e=>{const img=e.target;if(!(img instanceof HTMLImageElement)||!img.closest('.current-place-card')||img.dataset.fallbackUsed)return;const name=new URL(img.src,location.href).pathname.split('/').pop(),fallback=placeImagePreviews[name];if(fallback){img.dataset.fallbackUsed='true';img.src=fallback}},{capture:true});

