function journeySavedCards(){
 let learning;try{learning=JSON.parse(localStorage.getItem('day-one-journey-learning-v1')||'null')}catch{return ''}
 const tracks=[['driving','Driving checklist','驾驶行动清单'],['transport','Transport checklist','交通行动清单'],['campus','Campus settling-in checklist','校园安顿行动清单']].filter(([id])=>learning?.[id]?.saved);
 if(!tracks.length)return '';
 return `<section class="section"><h2>${storyText('Journey checklists','学习旅程清单')}</h2>${tracks.map(([id,en,zh])=>`<div class="card section pad"><span class="tag">${storyText('Learning complete · saved on this device','学习已完成 · 保存在本设备')}</span><h3 class="section">${storyText(en,zh)}</h3><p>${storyText('Your personal next steps, ready to review.','随时回看，继续完成你的实际行动。')}</p>${btn(storyText('Open checklist','打开行动清单'),'journey-review','secondary',`data-track="${id}"`)}</div>`).join('')}</section>`;
}
document.addEventListener('click',e=>{
 const button=e.target.closest('[data-action="journey-review"]');if(!button)return;
 const track=button.dataset.track;if(!['driving','transport','campus'].includes(track))return;
 state.tab='simulate';render();const frame=document.querySelector('#journey');
 const send=()=>frame.contentWindow?.postMessage({type:'day-one-open-learning',track},location.protocol==='file:'?'*':location.origin);
 if(frame.contentDocument?.readyState==='complete')send();else frame.addEventListener('load',send,{once:true});
});
