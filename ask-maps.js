// Approximate precinct directions on the same real street basemap as Explore.
// These are authored demo directions, not surveyed indoor or live navigation routes.
const askOrigin=[-37.80668,144.95955];
const askMapPlaces={
 dairy:{name:'Dairy Produce Hall',point:[-37.80696,144.95912]},
 doughnut:{name:'American Doughnut Kitchen',point:[-37.80715,144.95794]},
 produce:{name:'Fruit & Vegetable Sheds',point:[-37.80665,144.95715]},
 shopping:{name:'Shopping Sheds',point:[-37.80740,144.95695]},
 toilets:{name:'Public toilets · Queen Street',point:[-37.80773,144.95772]},
 hub:{name:'Information Hub · F Shed Shop 1',point:[-37.80716,144.95776]}
};
function askMapKeys(r){if(r.mapKeys)return r.mapKeys;const text=[r.recommend,r.location,r.focus,...(r.cards||[]).map(c=>c[1])].filter(Boolean).join(' ');const keys=[];if(/Borek|Dairy Produce/.test(text))keys.push('dairy');if(/Doughnut/.test(text))keys.push('doughnut');if(/Fruit & Vegetable/.test(text))keys.push('produce');if(/Shopping Sheds/.test(text))keys.push('shopping');if(/Toilets|toilets/.test(text))keys.push('toilets');if(/Information Hub/.test(text))keys.push('hub');return keys}
function askRouteCoords(key){const p=askMapPlaces[key].point;if(key==='dairy')return [askOrigin,[-37.80683,144.95942],p];return [askOrigin,[-37.80717,144.95969],[-37.80748,144.95812],...(key==='toilets'?[]:[[-37.80716,144.95798]]),p]}
function askMapElement(key){return `<div class="map real-map ask-street-map" data-ask-map="${key}" id="street-map-${++mapSequence}" role="region" aria-label="${askMapPlaces[key].name} route map"></div>`}
function askMapCard(r,n){const keys=askMapKeys(r);if(!keys.length)return '';if(!r.mapVisible)return btn(icon('pin')+' Show location','ask-map-reveal','ask-reply-action',`data-index="${n}"`);const selected=keys.includes(r.selectedMap)?r.selectedMap:keys[0];return `<section class="ask-route-card"><strong>${askMapPlaces[selected].name}</strong><p class="ask-route-origin">From: market entrance opposite Tram Stop 7</p>${keys.length>1?`<div class="ask-map-tabs">${keys.map(k=>btn(askMapPlaces[k].name,'ask-map-select',k===selected?'active':'',`data-index="${n}" data-key="${k}" aria-pressed="${k===selected}"`)).join('')}</div>`:''}${askMapElement(selected)}<small class="ask-route-note">Illustrative directions · Follow on-site signs</small><div class="ask-route-steps"><span>1</span><p>Start at the Elizabeth Street market entrance.</p><span>2</span><p>Follow the arrows towards the labelled destination.</p></div>${btn('Hide map','ask-map-hide','ask-reply-action',`data-index="${n}"`)}${btn(icon('map')+' Enlarge map','ask-map','ask-reply-action',`data-index="${n}"`)}</section>`}
