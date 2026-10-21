/* Ask This Place: location is a suggestion the user can confirm, never a silent verdict.
   - The header states how sure the app is (approximate, confirmed, or precise ± metres).
   - When several places fall inside the accuracy circle, the user is asked which one.
   - "Adjust" opens a sheet with high-accuracy GPS and nearby places sorted by distance;
     GPS only recommends a best match, and the user taps to confirm it. */
const askLocAreas=[
 ['ask-dairy','market'],['ask-produce','market'],['ask-shopping','market'],['ask-hub','market'],['market','market'],
 ['seeds','nearby'],['baths','nearby'],['state-library','nearby'],['lincoln','nearby'],['baillieu','nearby'],['quad','nearby'],['system','nearby'],['grainger','nearby'],['potter','nearby']
].filter(([id])=>places[id]&&MAP_DATA.pins[id]);
const askLocText=(en,zh)=>(window.appLanguage==='zh'||askLanguage==='zh')?zh:en;
const askLocName=id=>{const p=places[id];if(id==='market')return askLocText('Queen Victoria Market · whole market','维多利亚女王市场 · 整个市场');return p?.name||id};
const askLocMeters=(a,b)=>{const dy=(b[0]-a[0])*111320,dx=(b[1]-a[1])*111320*Math.cos(a[0]*Math.PI/180);return Math.hypot(dx,dy)};
const askLocDistance=m=>m<1000?askLocText(`~${Math.max(10,Math.round(m/10)*10)} m`,`约 ${Math.max(10,Math.round(m/10)*10)} 米`):askLocText(`${(m/1000).toFixed(1)} km`,`${(m/1000).toFixed(1)} 公里`);
// Without a live fix, the estimate is the market entrance with typical urban accuracy.
function askLocState(){
 const id=state.askPlaceId||'market';
 if(!state.askLoc||state.askLoc.id!==id){
  const fromTrip=state.askTripReturn==='navigation';
  state.askLoc={id,source:fromTrip?'trip':'estimate',point:fromTrip?MAP_DATA.pins[id]||askOrigin:askOrigin,accuracy:fromTrip?60:200,dismissed:false};
 }
 return state.askLoc;
}
function askLocCandidates(point,limit=99){return askLocAreas.map(([id,group])=>({id,group,m:askLocMeters(point,MAP_DATA.pins[id])})).sort((a,b)=>a.m-b.m).slice(0,limit)}
function askLocAmbiguous(loc){
 if(loc.source==='confirmed'||loc.source==='precise'||loc.dismissed)return [];
 const near=askLocCandidates(loc.point).filter(c=>c.m<=loc.accuracy);
 return near.length>1?near.slice(0,3):[];
}
function askLocBar(){
 const loc=askLocState();
 const status={estimate:[askLocText('Approximate location','大致位置'),askLocText(`±${loc.accuracy} m`,`约 ±${loc.accuracy} 米`),'is-approx'],trip:[askLocText('From your trip','来自当前行程'),askLocText('Current stop','当前站点'),'is-trip'],confirmed:[askLocText('Confirmed by you','你已确认'),'','is-confirmed'],precise:[askLocText('Precise location','精确定位'),askLocText(`±${Math.round(loc.accuracy)} m`,`约 ±${Math.round(loc.accuracy)} 米`),'is-precise']}[loc.source];
 const choices=askLocAmbiguous(loc);
 return `<section class="ask-loc ${status[2]}" aria-label="${askLocText('Your location','你的位置')}"><div class="ask-loc-row"><span class="ask-loc-dot" aria-hidden="true"></span><span class="ask-loc-copy"><strong>${status[0]}</strong>${status[1]?`<small>${status[1]}</small>`:''}</span><button class="ask-loc-adjust" data-action="ask-loc-open">${icon('pin')}${askLocText('Adjust','调整位置')}</button></div>${choices.length?`<div class="ask-loc-prompt" role="group" aria-label="${askLocText('Which place are you at?','你在哪一处？')}"><p>${askLocText('You may be between a few places. Which one are you at?','你可能在几个地点之间，你在哪一处？')}</p><div class="ask-loc-choices">${choices.map(c=>`<button data-action="ask-loc-pick" data-id="${c.id}" ${c.id===loc.id?'aria-pressed="true"':''}><strong>${askLocName(c.id)}</strong><small>${askLocDistance(c.m)}</small></button>`).join('')}<button data-action="ask-loc-open" class="is-other">${askLocText('Somewhere else','其他地点')}</button></div></div>`:''}</section>`;
}

{
 const baseAsk=askPlace,baseLocal=localPlaceHelp;
 askPlace=function(){const html=baseAsk();return html.includes('class="ask-hero"')?html.replace('</section>','</section>'+askLocBar()):html};
 localPlaceHelp=function(){return baseLocal().replace(/(<div class="local-help-title">[\s\S]*?<\/div>)/,'$1'+askLocBar())};
}

function askLocSheet(fix){
 const loc=askLocState(),point=fix?.point||loc.point,accuracy=fix?.accuracy||loc.accuracy,list=askLocCandidates(point),best=fix&&list[0];
 const far=fix&&list[0].m>3000;
 const row=c=>`<button class="ask-loc-option ${c.id===loc.id?'is-current':''} ${best&&!far&&c.id===best.id?'is-best':''}" data-action="ask-loc-pick" data-id="${c.id}"><span class="ask-loc-option-copy"><strong>${askLocName(c.id)}</strong>${places[c.id].area&&places[c.id].area!==askLocName(c.id)?`<small>${places[c.id].area}</small>`:''}</span><span class="ask-loc-option-meta">${best&&!far&&c.id===best.id?`<em>${askLocText('Best match','最接近')}</em>`:''}${askLocDistance(c.m)}</span></button>`;
 return `<form method="dialog" class="ask-loc-sheet"><header><h2 id="ask-loc-title">${askLocText('Where are you?','你在哪里？')}</h2><button class="iconbtn" value="cancel" aria-label="${askLocText('Close','关闭')}">${icon('close')}</button></header>
 <p class="ask-loc-intro">${askLocText('Answers are tailored to the place you choose. Places close together can be hard to tell apart, so check before you ask.','回答会针对你选择的地点。相邻地点不易区分，提问前请先确认。')}</p>
 <button type="button" class="ask-loc-gps" data-action="ask-loc-gps">${icon('pin')}<span><strong>${askLocText('Use precise location','使用精确定位')}</strong><small data-ask-loc-status>${fix?(far?askLocText('You seem to be outside this demo area. Choose a place below.','你似乎不在本演示区域内，请在下方选择地点。'):askLocText(`Located within ±${Math.round(accuracy)} m. Tap the best match to confirm.`,`定位精度约 ±${Math.round(accuracy)} 米，点按“最接近”的地点确认。`)):askLocText('Uses your phone’s GPS once. Nothing is saved.','仅使用一次手机 GPS，不会保存。')}</small></span></button>
 <h3>${askLocText('Inside the market','市场内')}</h3><div class="ask-loc-list">${list.filter(c=>c.group==='market').map(row).join('')}</div>
 <h3>${askLocText('Nearby','附近')}</h3><div class="ask-loc-list">${list.filter(c=>c.group==='nearby').map(row).join('')}</div>
 <p class="ask-loc-note">${askLocText('Distances are from your current estimate.','距离按当前估算位置计算。')}</p></form>`;
}
function openAskLocSheet(fix){
 let d=document.querySelector('#ask-loc-dialog');
 if(!d){d=document.createElement('dialog');d.id='ask-loc-dialog';d.setAttribute('aria-labelledby','ask-loc-title');document.body.append(d);
  d.addEventListener('close',()=>{d.remove();document.querySelector('[data-action="ask-loc-open"]')?.focus({preventScroll:true})});
  d.addEventListener('click',e=>{if(e.target===d)d.close()});}
 d.innerHTML=askLocSheet(fix);
 if(!d.open)d.showModal();
}
function askLocChoose(id,source){
 if(!places[id])return;
 const changed=(state.askPlaceId||'market')!==id;
 state.askPlaceId=id;
 const loc=state.askLoc||{};
 state.askLoc={id,source,point:source==='precise'?loc.fixPoint||MAP_DATA.pins[id]:MAP_DATA.pins[id],accuracy:source==='precise'?loc.fixAccuracy||20:0,dismissed:true};
 document.querySelector('#ask-loc-dialog')?.close();
 if(changed)resetAsk();
 go('askPlace');
 toast(changed?askLocText(`Location set to ${askLocName(id)}`,`已切换到：${askLocName(id)}`):askLocText('Location confirmed','位置已确认'));
}
function askLocGPS(){
 const status=document.querySelector('[data-ask-loc-status]');
 const say=t=>{if(status)status.textContent=t};
 if(!('geolocation' in navigator)){say(askLocText('Location isn’t available in this browser. Choose a place below.','此浏览器无法定位，请在下方选择地点。'));return}
 say(askLocText('Finding your location…','正在定位…'));
 navigator.geolocation.getCurrentPosition(pos=>{
  const fix={point:[pos.coords.latitude,pos.coords.longitude],accuracy:Math.max(5,pos.coords.accuracy||50)};
  const best=askLocCandidates(fix.point,1)[0];state.askLoc={...askLocState(),fixPoint:fix.point,fixAccuracy:fix.accuracy,precisePending:true,bestId:best&&best.m<=3000?best.id:null};
  openAskLocSheet(fix);
  if(navigator.vibrate)try{navigator.vibrate(8)}catch{}
 },err=>{
  say(err.code===1?askLocText('Location permission is off. Allow it in your browser settings, or choose a place below.','未开启定位权限。可在浏览器设置中允许，或在下方选择地点。'):askLocText('Couldn’t get a precise fix here (common indoors). Choose a place below.','此处无法精确定位（室内较常见），请在下方选择地点。'));
 },{enableHighAccuracy:true,timeout:10000,maximumAge:0});
}
document.addEventListener('click',e=>{
 const b=e.target.closest('[data-action]');if(!b||b.disabled)return;const a=b.dataset.action;
 if(a==='ask-loc-open'){e.preventDefault();openAskLocSheet();return}
 if(a==='ask-loc-gps'){e.preventDefault();askLocGPS();return}
 if(a==='ask-loc-pick'){e.preventDefault();askLocChoose(b.dataset.id,state.askLoc?.precisePending&&state.askLoc.bestId===b.dataset.id?'precise':'confirmed')}
});
Object.assign(appZh,{'Ask this place':'问问这里'});
