/* Inline maps that sit inside a scrolling page behave like embedded maps in native apps:
   one finger scrolls the page, two fingers pan and zoom the map. Mouse and pen keep normal
   dragging. A short hint appears the first time a single finger lands on the map. */
// A map keeps its element when the preview turns into the full-screen route builder,
// so the rule is checked on every touch rather than once at creation.
const mapIsInline=el=>!!el.dataset.askMap||(!document.querySelector('#content')?.classList.contains('route-builder')&&!state.inlineEditing&&['explore','plan','preview'].includes(state.screen));
function cooperativeMap(map,el){
 if(!matchMedia('(pointer: coarse)').matches)return;
 const sync=()=>{const inline=mapIsInline(el);el.classList.toggle('is-cooperative',inline);if(inline)map.dragging.disable();else map.dragging.enable();return inline};
 sync();
 const hint=document.createElement('div');hint.className='map-gesture-hint';hint.setAttribute('aria-hidden','true');
 const label=()=>window.appLanguage==='zh'?'双指移动地图':'Use two fingers to move the map';
 el.append(hint);
 let timer=0,start=null;
 const show=()=>{hint.textContent=label();hint.classList.add('is-visible');clearTimeout(timer);timer=setTimeout(()=>hint.classList.remove('is-visible'),1100)};
 el.addEventListener('touchstart',e=>{
  if(!sync()){start=null;return}
  if(e.touches.length>=2){hint.classList.remove('is-visible');map.dragging.enable();start=null;return}
  start={x:e.touches[0].clientX,y:e.touches[0].clientY};
 },{passive:true});
 el.addEventListener('touchmove',e=>{
  // A vertical swipe is a page scroll; hint only when one finger clearly tries to pan sideways.
  if(!start||e.touches.length!==1)return;
  const dx=e.touches[0].clientX-start.x,dy=e.touches[0].clientY-start.y;
  if(Math.abs(dy)>24&&Math.abs(dy)>Math.abs(dx)){start=null;return}
  if(Math.abs(dx)>24&&Math.abs(dx)>Math.abs(dy)*1.2){show();start=null}
 },{passive:true});
 el.addEventListener('touchend',e=>{if(e.touches.length===0){start=null;sync()}},{passive:true});
 el.addEventListener('touchcancel',()=>{start=null;sync()},{passive:true});
 // Entering or leaving the builder re-renders around the same map; resync after each render.
 const watcher=new MutationObserver(()=>{if(!el.isConnected||!map._container){watcher.disconnect();return}sync()});
 watcher.observe(document.querySelector('#content'),{attributes:true,attributeFilter:['class']});
}
