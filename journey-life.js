/* Housing and everyday-life journeys for new international students, built from data blocks
   that reuse the Campus (Medicare-style) components. Official pages checked 20 Oct 2026. */
Object.assign(jlSources,{
 bond:['Consumer Affairs Victoria · Bond amounts and payments','https://www.consumer.vic.gov.au/housing/renting/rent-bond-bills-and-condition-reports/bond/bond-amounts-and-paying-a-bond'],
 rtba:['Consumer Affairs Victoria · Lodging the bond with the RTBA','https://www.consumer.vic.gov.au/housing/renting/rent-bond-bills-and-condition-reports/bond/lodging-the-bond-with-the-rtba'],
 conditionReport:['Consumer Affairs Victoria · Condition reports','https://www.consumer.vic.gov.au/housing/renting/rent-bond-bills-and-condition-reports/condition-reports'],
 minimum:['Consumer Affairs Victoria · Minimum standards','https://www.consumer.vic.gov.au/housing/renting/repairs-alterations-safety-and-pets/minimum-standards'],
 repairs:['Consumer Affairs Victoria · Repairs','https://www.consumer.vic.gov.au/housing/renting/repairs-alterations-safety-and-pets/repairs'],
 rentRules:['Consumer Affairs Victoria · Rent','https://www.consumer.vic.gov.au/housing/renting/rent-bond-bills-and-condition-reports/rent'],
 bills:['Consumer Affairs Victoria · Utilities, phone and internet','https://www.consumer.vic.gov.au/housing/renting/rent-bond-bills-and-condition-reports/paying-for-utilities-phone-and-internet'],
 movingOut:['Consumer Affairs Victoria · Moving out and notice','https://www.consumer.vic.gov.au/housing/renting/moving-out-giving-notice-and-evictions'],
 energy:['Victorian Energy Compare','https://compare.energy.vic.gov.au/'],
 sunsmart:['SunSmart · UV and sun protection','https://www.sunsmart.com.au/'],
 cds:['CDS Vic · Container Deposit Scheme','https://cdsvic.org.au/'],
 healthdirect:['healthdirect · 1800 022 222','https://www.healthdirect.gov.au/'],
 policeLine:['Victoria Police · Police Assistance Line 131 444','https://www.police.vic.gov.au/police-assistance-line-and-online-reporting']
});

const jlStep=(en,zh,body,bodyZh,phrase='',phraseZh='')=>jlGuideStep(en,zh,body,bodyZh,phrase,phraseZh);
Object.assign(jlGuides,{
 repairs:{title:['The heater stops working','暖气坏了'],intro:['It is winter and the heater in your rental has stopped. Here is how to get it fixed.','冬天到了，出租屋的暖气却坏了。这样处理。'],scene:'repairs',sources:['repairs','minimum'],steps:[
  jlStep('Report it in writing','书面报修','Tell your agent or rental provider in writing. Describe the problem, when it started and add photos. Keep a copy.','以书面方式告知中介或房东，写明问题、开始时间并附上照片，自己保留一份。','The heater in the living room stopped working on Monday. Could you arrange a repair?','客厅的暖气周一开始不工作了，可以安排维修吗？'),
  jlStep('Know if it is urgent','判断是否属于紧急维修','Failures of heating, hot water or cooking, gas leaks and serious water leaks can count as urgent repairs, which must be dealt with quickly.','暖气、热水或炉灶失灵，燃气泄漏或严重漏水，可能属于紧急维修，需要尽快处理。'),
  jlStep('Get help if it is not fixed','迟迟未修时寻求帮助','Consumer Affairs Victoria explains the next steps when repairs are not done. Keep a record of every message and date.','维州消费者事务局说明了维修不到位时的后续步骤。记录每一次沟通和日期。')
 ]},
 sharehouse:{title:['Housemates and shared bills','室友与分摊账单'],intro:['The electricity bill arrives and nobody agrees how to split it.','电费单来了，大家对怎么分摊意见不一。'],scene:'sharehouse',sources:['bills','renting'],steps:[
  jlStep('Agree early','提前约定','Before bills arrive, agree who is named on each account and how costs are split: equally, by room or by use.','在账单到来之前，约定每个账户由谁登记，以及按人头、按房间还是按使用量分摊。','Could we agree on how we split the electricity bill?','我们可以先商量一下电费怎么分吗？'),
  jlStep('Keep records','保留记录','Use a shared sheet or app for bills and payments, and keep receipts. Clear records prevent most disagreements.','用共享表格或应用记录账单与付款，保存收据。清楚的记录能避免大多数分歧。'),
  jlStep('Talk, then get advice','先沟通，再寻求建议','Raise issues calmly and early. For problems about rent, bond or the agreement, Consumer Affairs Victoria explains renters’ rights.','尽早、平和地沟通。涉及房租、押金或租约的问题，可参考维州消费者事务局对租客权利的说明。')
 ]},
 lostwallet:{title:['You lose your wallet or phone','钱包或手机丢了'],intro:['Your cards and student card are gone. Act in this order.','银行卡和学生卡都不见了，按这个顺序处理。'],scene:'lostwallet',sources:['policeLine','card','stop1'],steps:[
  jlStep('Lock your cards','先锁卡','Lock or cancel cards straight away in your banking app, or call your bank. Change passwords if your phone is gone.','立即在银行应用中锁定或注销银行卡，或致电银行。如果手机丢了，尽快修改密码。'),
  jlStep('Report it','报失','For non-urgent loss or theft, call the Police Assistance Line on 131 444 or report online. In an emergency, call 000.','非紧急的遗失或盗窃，拨打警方协助热线 131 444 或在线报案。遇到紧急情况请拨打 000。','I’d like to report a lost wallet and get a reference number.','我想报失一个钱包，并拿一个报案编号。'),
  jlStep('Replace your documents','补办证件','Order a new student card through the University, and contact your country’s embassy or consulate if your passport is missing.','通过学校补办学生卡；如果护照丢失，联系本国大使馆或领事馆。')
 ]},
 nightunwell:{title:['Feeling unwell at night','夜里身体不舒服'],intro:['It is late, clinics are closed and you feel sick. Choose the right help.','夜深了，诊所都关门了，你感觉不舒服。选择合适的求助方式。'],scene:'nightunwell',urgent:['Chest pain, trouble breathing or a life-threatening emergency: call 000 now.','胸痛、呼吸困难或危及生命时：请立即拨打 000。'],sources:['healthdirect','healthUni'],steps:[
  jlStep('Is it an emergency?','是否属于紧急情况？','If someone’s life may be at risk, call 000. Do not wait for a clinic to open.','如果可能危及生命，拨打 000，不要等诊所开门。'),
  jlStep('Get advice any time','随时获取建议','healthdirect gives 24-hour health advice on 1800 022 222 and can tell you where to go.','healthdirect 全天 24 小时提供健康咨询，电话 1800 022 222，并会告诉你该去哪里就医。','I feel unwell and I’m not sure whether I need to see a doctor tonight.','我身体不舒服，不确定今晚是否需要看医生。'),
  jlStep('Follow up with a GP','之后预约 GP','Book a GP for the next day if advised. The Healthcare journey shows how a first visit works; keep your OSHC details handy.','如有建议，次日预约 GP。医疗旅程介绍了第一次看诊的流程，记得准备好 OSHC 信息。')
 ]}
});

{
 const baseArt=jlGuideArt;
 jlGuideArt=function(kind,step=0,variant=''){
  const blue='#1953D9',ink='#27364D',muted='#96A2B5',green='#00704A',amber='#B16B1A';
  const s=(d,c=blue,w=3)=>`<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
  const halo=(x,y,n)=>`<circle cx="${x}" cy="${y}" r="${step===n?40:34}" fill="${step===n?'#DCE7FF':'#F5F7FB'}" class="jg-art-halo ${step===n?'is-current':''}"/>`;
  const person=(x,y,c=blue)=>`<g transform="translate(${x} ${y})"><circle cy="-18" r="8" fill="${c}"/>${s('M-12 15V1Q0-13 12 1v16M-6 15v19M6 15v19',c,5)}</g>`;
  const phone=(x,y,mark)=>`<g transform="translate(${x} ${y})"><rect x="-18" y="-34" width="36" height="66" rx="7" fill="${ink}"/><rect x="-13" y="-25" width="26" height="43" rx="3" fill="white"/>${mark}<circle cy="25" r="2" fill="white"/></g>`;
  const doc=(x,y,c=blue)=>`<g transform="translate(${x} ${y})"><rect x="-22" y="-28" width="44" height="58" rx="6" fill="white" stroke="${muted}" stroke-width="2"/>${s('M-12-12h24M-12-1h18M-12 10h12',c,2)}</g>`;
  const scenes={
   repairs:()=>`${halo(58,84,0)}${phone(58,86,s('M-8-6h16M-8 2h10',blue,2))}${halo(160,84,1)}<g transform="translate(160 86)"><rect x="-30" y="-22" width="60" height="42" rx="6" fill="white" stroke="${ink}" stroke-width="3"/>${[-18,-6,6,18].map(x=>s(`M${x}-12v22`,'#C8D2E2',3)).join('')}${s('M-4-38q8 8 0 14',amber,3)}</g>${halo(266,84,2)}${doc(266,84,green)}`,
   sharehouse:()=>`${halo(70,86,0)}${person(54,94)}${person(88,94,green)}${halo(170,84,1)}${doc(170,84)}<text x="170" y="128" text-anchor="middle" font-size="10" font-family="system-ui,sans-serif" fill="${ink}">$ ÷ 3</text>${halo(268,86,2)}<g transform="translate(268 84)"><path d="M-24-16h48v26H-4l-12 10V10h-8Z" fill="#E9EEFC" stroke="${blue}" stroke-width="2" stroke-linejoin="round"/>${s('M-14-6h28M-14 2h18',blue,2)}</g>`,
   lostwallet:()=>`${halo(58,84,0)}<g transform="translate(58 86)"><rect x="-30" y="-20" width="60" height="40" rx="6" fill="${blue}"/><path d="M-30-8h60" stroke="white" stroke-width="5"/><circle cx="20" cy="10" r="7" fill="#FFE9BC"/>${s('M16 10h8M20 6v8','#B44936',2)}</g>${halo(160,84,1)}${phone(160,86,`<text y="2" text-anchor="middle" font-size="10" font-weight="700" font-family="system-ui,sans-serif" fill="${blue}">131 444</text>`)}${halo(266,84,2)}<g transform="translate(266 84)"><rect x="-30" y="-20" width="60" height="40" rx="6" fill="white" stroke="${muted}" stroke-width="2"/><circle cx="-14" cy="-2" r="8" fill="#C8D2E2"/>${s('M2-6h18M2 4h12',blue,2)}${s('m10 24 6 6 12-14',green,3)}</g>`,
   nightunwell:()=>`<rect width="320" height="180" rx="12" fill="#E9EEF8"/><circle cx="286" cy="30" r="12" fill="#FFF1CD"/><circle cx="292" cy="26" r="11" fill="#E9EEF8"/>${halo(58,88,0)}<g transform="translate(58 88)"><circle r="24" fill="#FDECEA"/><text y="8" text-anchor="middle" font-size="20" font-weight="800" font-family="system-ui,sans-serif" fill="#B3261E">000</text></g>${halo(160,88,1)}${phone(160,90,s('m-7 -2 5 5 10-12',green))}<text x="160" y="140" text-anchor="middle" font-size="10" font-family="system-ui,sans-serif" fill="${ink}">1800 022 222</text>${halo(266,88,2)}${person(266,96,green)}`
  };
  if(!scenes[kind])return baseArt(kind,step,variant);
  return `<svg class="jg-art" viewBox="0 0 320 180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="180" rx="12" fill="#F3F6FB"/>${scenes[kind]()}</svg>`;
 };
}

/* A small block renderer shared by the data-driven journeys. */
const jlLifeTrack=def=>{
 const icons={info:'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 11v6M12 7.5v.01',warn:'M12 3 2 20h20ZM12 10v4M12 17v.01',ok:'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm-4-10 3 3 5-6',check:'m5 12 4 4L19 6',home:'M3 11 12 4l9 7M5 10v10h14V10M10 20v-6h4v6',building:'M5 21V4h10v17M15 9h4v12M8 8h4M8 12h4M8 16h4M3 21h18',people:'M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20c0-3 3-5 6-5s6 2 6 5M16 5a3 3 0 0 1 0 6M18 15c2 .5 3 2.5 3 5',key:'M8 15a4 4 0 1 1 3.5-6H21v3h-2v3h-3v-3h-4.5A4 4 0 0 1 8 15Z',doc:'M6 3h9l4 4v14H6ZM14 3v5h5M9 12h7M9 16h5',search:'M10.5 3a7.5 7.5 0 1 0 4.7 13.3L21 22M10.5 6a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9',flame:'M12 22c4 0 7-3 7-7 0-4-3-6-4-10-2 2-3 4-3 6-1-1-2-2-2-4-3 3-5 5-5 8 0 4 3 7 7 7Z',drop:'M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z',lock:'M6 11h12v10H6ZM8 11V8a4 4 0 0 1 8 0v3',plug:'M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0ZM12 18v4',signal:'M4 20v-3M9 20v-7M14 20v-11M19 20V5',clock:'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 7v5l3 2',camera:'M4 7h4l2-3h4l2 3h4v13H4ZM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',shield:'M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z',calendar:'M4 5h16v16H4ZM4 10h16M8 3v4M16 3v4',basket:'M3 9h18l-2 11H5ZM8 9l4-6 4 6M9 13v4M15 13v4',sun:'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4',umbrella:'M3 12a9 9 0 0 1 18 0ZM12 12v7a2 2 0 0 0 4 0',bin:'M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14',recycle:'M7 19H4l3-5M17 19h3l-3-5M12 4l-2 3h4ZM7 14l3-5M17 14l-3-5M7 19h10',coin:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM15 9.5c-.5-1-1.6-1.5-3-1.5-1.7 0-3 .8-3 2s1.3 1.7 3 2 3 .8 3 2-1.3 2-3 2c-1.4 0-2.5-.5-3-1.5M12 6v2M12 16v2',phone:'M7 2h10v20H7ZM11 18h2',card:'M3 5h18v14H3ZM3 10h18M6 15h4',heart:'M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11Z'};
 const icon=n=>`<svg class="jl-svg mc-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="${icons[n]||icons.info}"/></svg>`;
 let ctx=null;const P=p=>ctx.pair(p),T=(en,zh)=>ctx.t(en,zh);
 const link=id=>jlSources[id]?`<a class="mc-direction" href="${jlSources[id][1]}" target="_blank" rel="noopener noreferrer">${ctx.esc(jlSourceName(id).split(' · ').pop())}<span aria-hidden="true">→</span><span class="jl-sr">${T('(opens in a new tab)','（在新标签页打开）')}</span></a>`:'';
 const alert=(kind,title,copy)=>`<div class="mc-alert mc-${kind}" role="note">${icon(kind==='warning'?'warn':kind==='success'?'ok':'info')}<div><strong>${P(title)}</strong><p>${P(copy)}</p></div></div>`;
 const blocks={
  choose:(b,p)=>{const chosen=b.options.find(o=>o[0]===p.pick);return `<div class="mc-options" role="radiogroup">${b.options.map(([id,label,hint,ic])=>`<button class="mc-option ${p.pick===id?'is-selected':''}" role="radio" aria-checked="${p.pick===id}" data-jl="campus" data-field="pick" data-value="${id}"><span class="mc-option-icon">${icon(ic)}</span><span class="mc-option-text"><strong>${P(label)}</strong><small>${P(hint)}</small></span><span class="mc-radio" aria-hidden="true"></span></button>`).join('')}</div>${chosen?`<section class="mc-keyinfo" aria-live="polite"><span class="mc-keyinfo-label">${P(b.resultLabel)}</span><ol>${b.results[chosen[0]].map(([text,ic])=>`<li>${icon(ic||'check')}<span>${P(text)}</span></li>`).join('')}</ol>${b.jumps?.[chosen[0]]!==undefined?`<button class="mc-jump" data-jl="step" data-index="${b.jumps[chosen[0]]}">${T('Go to step','前往步骤')} ${String(b.jumps[chosen[0]]+1).padStart(2,'0')} · ${P(def.steps[b.jumps[chosen[0]]][0])}<span aria-hidden="true">→</span></button>`:''}</section>`:''}`},
  alert:b=>alert(b.kind,b.title,b.copy),
  heading:b=>`<h2>${P(b.text)}</h2>`,
  steps:b=>`<ol class="mc-steps">${b.items.map(([ic,title,copy,src],i)=>`<li><span class="mc-step-number">${i+1}</span><div><h3>${P(title)}</h3><p>${P(copy)}</p>${src?link(src):''}</div></li>`).join('')}</ol>`,
  tasks:(b,p)=>{const done=b.items.filter(x=>p.tasks.includes(x.id)).length;return `<section class="mc-stage"><div class="mc-stage-head"><h2>${P(b.title)}</h2><span class="mc-count" aria-live="polite">${T(`${done} of ${b.items.length} done`,`已完成 ${done}/${b.items.length}`)}</span></div><div class="mc-meter" aria-hidden="true"><span style="--value:${done/b.items.length}"></span></div>${b.items.map(x=>{const on=p.tasks.includes(x.id);return `<article class="mc-task ${on?'is-done':''} ${x.tag?'is-key':''}"><span class="mc-task-icon">${icon(x.icon)}</span><div><h3>${P(x.title)}${x.tag?`<span class="mc-tag">${P(x.tag)}</span>`:''}</h3><p>${P(x.copy)}</p>${x.src?link(x.src):''}<button class="mc-done" data-jl="campus" data-field="task" data-value="${x.id}" aria-pressed="${on}"><span class="mc-done-box" aria-hidden="true">${icon('check')}</span>${on?T('Done','已完成'):T('Mark as done','标记为已完成')}</button></div></article>`}).join('')}</section>`},
  tabs:(b,p)=>{const i=Number(p.tab?.[p.step])||0,r=b.items[i]||b.items[0];return `<div class="jl-tabs mc-segment" role="tablist" aria-label="${P(b.label)}">${b.items.map((v,n)=>`<button role="tab" aria-selected="${n===i}" aria-pressed="${n===i}" data-jl="campus" data-field="tab" data-value="${n}">${P(v.label)}</button>`).join('')}</div><section class="mc-compare" aria-live="polite"><h2>${P(r.title)}</h2><div class="mc-compare-row"><span class="mc-compare-label">${T('What to know','需要了解')}</span><p>${P(r.diff)}</p></div><div class="mc-compare-row is-help"><span class="mc-compare-label">${icon('ok')}${T('What helps','这样做会更顺利')}</span><p>${P(r.help)}</p></div></section>`},
  keyinfo:b=>`<section class="mc-keyinfo ${b.quiet?'is-quiet':''}"><span class="mc-keyinfo-label">${P(b.label)}</span>${b.items?`<ol>${b.items.map(([text,ic])=>`<li>${icon(ic||'check')}<span>${P(text)}</span></li>`).join('')}</ol>`:`<p>${P(b.copy)}</p>`}${b.src?link(b.src):''}</section>`,
  numbers:b=>`<section class="mc-keyinfo"><span class="mc-keyinfo-label">${P(b.label)}</span><ul class="mc-numbers">${b.items.map(([num,label,kind])=>`<li class="${kind||''}"><a href="tel:${num.replace(/\s/g,'')}"><strong>${num}</strong><span>${P(label)}</span></a></li>`).join('')}</ul></section>`,
  cases:b=>`${b.title?`<h2>${P(b.title)}</h2>`:''}${ctx.caseList(b.ids)}`
 };
 const fieldsOk=p=>{if(!Array.isArray(p.tasks))p.tasks=[];if(!p.tab||typeof p.tab!=='object'||Array.isArray(p.tab))p.tab={};if(typeof p.pick!=='string')p.pick=''};
 jlTracks[def.id]={name:def.name,intro:def.intro,copy:def.copy,image:def.image,steps:def.steps};
 jlStepImages[def.id]=def.images;
 return {
  fields:{pick:'',tab:{},tasks:[]},
  normalise:p=>{fieldsOk(p);const chooser=def.content[0].blocks.find(b=>b.type==='choose');if(p.pick&&!chooser?.options.some(o=>o[0]===p.pick))p.pick=''},
  bind:c=>{ctx=c},
  lesson:(p,c)=>{ctx=c;fieldsOk(p);const s=def.content[p.step];return `<span class="jl-kicker mc-kicker">${P(s.kicker)}</span><h1>${P(s.h1)}</h1>${s.intro?`<p>${P(s.intro)}</p>`:''}${s.blocks.map(b=>blocks[b.type](b,p)).join('')}${ctx.source(...s.sources)}`},
  handle:(b,p)=>{fieldsOk(p);const f=b.dataset.field,v=b.dataset.value,s=def.content[p.step];if(f==='pick'&&s.blocks.some(x=>x.type==='choose'&&x.options.some(o=>o[0]===v)))p.pick=v;else if(f==='tab'&&Number.isInteger(+v))p.tab={...p.tab,[p.step]:+v};else if(f==='task'){p.tasks=p.tasks.includes(v)?p.tasks.filter(x=>x!==v):[...p.tasks,v];return 'task'}else return false;p.saved=false;return f},
  ready:p=>!!p.pick,
  phases:t=>def.phases.map(([en,zh])=>t(en,zh)),
  caseIds:p=>def.content[p.step]?.blocks.find(b=>b.type==='cases')?.ids||[],
  checklist:t=>def.checklist.map(([en,zh])=>t(en,zh)),
  sources:def.sources,tab:def.tab,title:def.title,guideKicker:def.guideKicker,recapLine:def.recapLine,startHelp:def.startHelp
 };
};

jlCustomTracks.housing=jlLifeTrack({
 id:'housing',tab:['Housing','住宿租房'],title:['Housing journey','住宿租房旅程'],guideKicker:['HOUSING GUIDE','住房情景指南'],recapLine:['Your home in Melbourne','你在墨尔本的家'],startHelp:['Choose the kind of place you are looking for.','请选择你想找的住宿类型。'],
 name:['Housing & renting','住宿与租房'],intro:['A safe place to land.','先找到一个安心落脚的地方。'],copy:['Compare your options, inspect safely, sign with confidence and know your rights as a renter in Victoria.','比较住宿方式、安全看房、放心签约，并了解维州租客的权利。'],image:'housing-terrace.jpg',
 phases:[['Find a place','找到住处'],['Sign, move in, live well','签约、入住与生活'],['Your next steps','你的下一步']],
 images:['housing-college.jpg','housing-street.jpg','housing-lease.jpg','housing-moving.jpg','housing-kitchen.jpg','housing-terrace2.jpg'],
 steps:[
  [['Your housing options','选择住宿方式'],['Student housing, share houses, homestay or your own lease.','学生公寓、合租、寄宿家庭，还是独立租房。']],
  [['Search and inspect safely','安全找房与看房'],['Spot scams and check the place in person.','识别骗局，实地看房。']],
  [['Apply and sign','申请与签约'],['Your documents, the agreement and what to read first.','申请材料、租约，以及签字前要读什么。']],
  [['Bond and moving in','押金与入住'],['Bond, condition report, bills and insurance.','押金、房屋状况报告、水电网与保险。']],
  [['Living there','安心住下来'],['Repairs, housemates and moving out.','维修、室友相处与搬离。']],
  [['Your housing checklist','你的住房行动清单'],['Keep the steps that protect your home and bond.','保存保护住处与押金的关键行动。']]
 ],
 content:[
  {kicker:['START WITH YOUR SEARCH','从你的需求开始'],h1:['What kind of place suits you?','哪种住处更适合你？'],intro:['Each option has a different cost, commitment and level of independence.','不同住宿方式的费用、承诺期限和独立程度都不一样。'],sources:['stop1','renting'],blocks:[
   {type:'choose',resultLabel:['Before you commit','决定之前'],options:[
    ['student',['Student accommodation','学生公寓或学校宿舍'],['Furnished rooms, often with bills included.','通常带家具，账单常已包含。'],'building'],
    ['share',['Share house','合租'],['A room in a house with other renters.','和其他租客合住一套房子。'],'people'],
    ['homestay',['Homestay','寄宿家庭'],['Live with a local household, often with meals.','住在本地家庭，通常含餐。'],'home'],
    ['lease',['Your own lease','独立租房'],['Rent an apartment or house through an agent.','通过中介租一套公寓或房子。'],'key']],
    results:{
     student:[[['Check what the weekly price includes: bills, internet, furniture.','确认每周价格包含哪些：水电、网络、家具。'],'coin'],[['Ask about the minimum stay and leaving early.','问清最短入住期限以及提前退租的规定。'],'calendar'],[['If you arrive early, book a short stay first.','如果提前到达，可以先订短住。'],'clock']],
     share:[[['Find out who is on the lease, and whether you are a renter or a sub-tenant.','弄清谁是租约上的租客，你是正式租客还是转租者。'],'doc'],[['Agree how bills, cleaning and guests work before moving in.','入住前约定账单、清洁和访客规则。'],'people'],[['Meet housemates in person or by video first.','先当面或视频认识室友。'],'search']],
     homestay:[[['Confirm meals, house rules and notice periods in writing.','书面确认餐食、家规和退住通知期。'],'doc'],[['Ask what is shared: kitchen, laundry, internet.','问清哪些是共用的：厨房、洗衣、网络。'],'home'],[['Keep your own emergency contacts and plan B.','保留自己的紧急联系人与备用方案。'],'shield']],
     lease:[[['Prepare identity, proof of funds and references early.','提前准备身份证明、资金证明和推荐信。'],'doc'],[['Budget for bond (in most cases up to one month’s rent) plus rent in advance.','预留押金（多数情况下最多一个月房租）和预付房租。'],'coin'],[['Inspect before you apply.','先看房，再申请。'],'search']]
    }},
   {type:'alert',kind:'info',title:['Book somewhere short-term first','可以先订短期住处'],copy:['Many students book temporary accommodation for their first weeks, then inspect long-term places in person after arriving.','不少学生会先订头几周的临时住处，落地后再实地看长期房源。']}
  ]},
  {kicker:['SEARCH SAFELY','安全找房'],h1:['See it before you pay.','付钱之前，先看到房子。'],intro:['Scams often target new arrivals searching from overseas.','诈骗常常针对还在海外找房的新来者。'],sources:['minimum','rtba','uniScams'],blocks:[
   {type:'alert',kind:'warning',title:['Never pay before you inspect','未看房，绝不付款'],copy:['Be careful with anyone who asks for money before you have seen the place or a written agreement. In Victoria, a bond is lodged with the RTBA, not paid into someone’s personal account.','对没看房、没书面协议就要求付款的人要格外小心。在维州，押金应交由 RTBA 托管，而不是转入个人账户。']},
   {type:'tasks',title:['At the inspection','看房时检查'],items:[
    {id:'h-heat',icon:'flame',title:['Heating and hot water','暖气与热水'],copy:['Run the hot water and turn on the heater. Victorian rentals must meet minimum standards.','打开热水和暖气试一试。维州出租房须符合最低标准。'],src:'minimum'},
    {id:'h-mould',icon:'drop',title:['Mould and damp','霉斑与潮湿'],copy:['Look at ceilings, window frames and bathroom corners, and notice any musty smell.','看看天花板、窗框和浴室角落，留意是否有霉味。']},
    {id:'h-locks',icon:'lock',title:['Locks and safety','门锁与安全'],copy:['Check that external doors and windows lock, and that there is a working smoke alarm.','确认外门和窗户都能上锁，烟雾报警器能正常工作。']},
    {id:'h-power',icon:'plug',title:['Power, lights and taps','电源、灯和水龙头'],copy:['Test a few power points, lights and taps.','试几个插座、灯和水龙头。']},
    {id:'h-trip',icon:'clock',title:['Your trip to campus','到学校的通勤'],copy:['Time the journey at the hour your classes start.','按上课时间实际走一趟，算算通勤时长。']},
    {id:'h-signal',icon:'signal',title:['Phone and internet','手机信号与网络'],copy:['Check mobile reception inside and ask which internet options are available.','在室内看看手机信号，问清可选的网络方案。']}
   ]}
  ]},
  {kicker:['APPLY AND SIGN','申请与签约'],h1:['Read it before you sign it.','签字之前，先读清楚。'],intro:['A rental agreement is a legal contract. Take your time.','租约是有法律效力的合同，不必着急。'],sources:['renting','bond','rentRules'],blocks:[
   {type:'steps',items:[
    ['doc',['Prepare your application','准备申请材料'],['Identity, proof you can pay rent (such as bank statements or a scholarship letter) and references.','身份证明、支付能力证明（如银行流水或奖学金信），以及推荐人。']],
    ['search',['Read the whole agreement','通读整份租约'],['Check the rent, how and when to pay, the length of the agreement and who is named on it.','确认房租金额、付款方式与时间、租期，以及租约上列明的租客。']],
    ['shield',['Ask before you sign','不清楚就先问'],['A genuine agent gives you time to read. Never sign under pressure or pay into a personal account.','正规中介会给你时间阅读。不要在压力下签字，也不要转账到个人账户。'],'renting']
   ]},
   {type:'tabs',label:['Agreement types','租约类型'],items:[
    {label:['Fixed-term','固定期限'],title:['A set period','约定明确期限'],diff:['Often 6 or 12 months. Leaving early can cost you, so check the rules before signing.','常见为 6 或 12 个月。提前退租可能产生费用，签字前先了解规则。'],help:['Ask what happens if you need to leave before the end date.','问清楚如果需要提前搬走会怎样。']},
    {label:['Periodic','按月续租'],title:['No end date','没有固定结束日'],diff:['The agreement continues month to month. Notice rules apply to both you and the rental provider.','租约按月延续，你和房东都需遵守通知期规定。'],help:['Give and keep every notice in writing.','所有通知都以书面形式发出并保存。']},
    {label:['Sub-letting','转租'],title:['Renting from another renter','从其他租客处转租'],diff:['You rent from the head renter, not the owner. The head renter may ask you for a bond.','你是向主租客而不是房东租房，主租客可能会向你收取押金。'],help:['Get a written agreement and a receipt for every payment.','签书面协议，每笔付款都要收据。']}
   ]}
  ]},
  {kicker:['BOND AND MOVING IN','押金与入住'],h1:['Protect your bond from day one.','从第一天起保护你的押金。'],sources:['bond','rtba','conditionReport','energy','bills','address'],blocks:[
   {type:'keyinfo',label:['Bond basics in Victoria','维州押金要点'],items:[[['In most cases, bond can’t be more than one month’s rent. It can be higher only if weekly rent is over $900 or VCAT approves.','多数情况下押金不超过一个月房租；只有周租超过 900 澳元或经 VCAT 批准时才可更高。'],'coin'],[['The bond is held in trust by the RTBA. You review and accept the lodgement, then keep your bond number.','押金由 RTBA 托管。你需要审核并确认押金登记，然后保存押金编号。'],'shield'],[['Bond and rent are separate. Bond can’t be used to pay rent.','押金和房租是分开的，押金不能用来抵房租。'],'doc']]},
   {type:'tasks',title:['Moving-in tasks','入住事项'],items:[
    {id:'h-report',icon:'doc',title:['Check the condition report','核对房屋状况报告'],tag:['5 business days','5 个工作日内'],copy:['You should get the report before moving in. Add your comments and return a signed copy within 5 business days of moving in.','入住前你应收到报告。补充意见后，在入住 5 个工作日内交回签字版本。'],src:'conditionReport'},
    {id:'h-photos',icon:'camera',title:['Take dated photos','拍下带日期的照片'],copy:['Photograph every room, including marks and damage, and keep them safe.','每个房间都拍照，包括已有痕迹和损坏，并妥善保存。']},
    {id:'h-utilities',icon:'plug',title:['Set up utilities','开通水电燃气与网络'],copy:['If bills are not included, connect electricity, gas and internet. Compare energy offers first.','如果房租不含账单，需自行开通电、燃气与网络，先比较能源方案。'],src:'energy'},
    {id:'h-insurance',icon:'shield',title:['Consider contents insurance','考虑财物保险'],copy:['The owner’s insurance generally doesn’t cover your belongings.','房东的保险一般不覆盖你的个人物品。']},
    {id:'h-address',icon:'calendar',title:['Update your address','更新地址'],tag:['Visa condition','签证条件'],copy:['Tell the University your new address within 7 days of moving.','搬家后 7 天内向学校更新地址。'],src:'address'}
   ]}
  ]},
  {kicker:['LIVING THERE','安心住下来'],h1:['A home that works for everyone.','让每个人都住得舒服。'],sources:['repairs','movingOut','conditionReport'],blocks:[
   {type:'tabs',label:['Living topics','居住主题'],items:[
    {label:['Repairs','维修'],title:['Urgent or not?','紧急还是非紧急？'],diff:['Urgent repairs, such as no heating or hot water, a gas leak or a serious leak, are handled differently from non-urgent ones.','紧急维修（如没有暖气或热水、燃气泄漏、严重漏水）与非紧急维修的处理方式不同。'],help:['Report every repair in writing and keep a copy.','所有维修都书面报修，并保留副本。']},
    {label:['Housemates','室友'],title:['Bills, cleaning, guests','账单、清洁与访客'],diff:['These three cause most share-house tension.','这三件事是合租矛盾的主要来源。'],help:['Write a simple house agreement and track bills in a shared sheet.','写一份简单的合住约定，用共享表格记录账单。']},
    {label:['Moving out','搬离'],title:['Get your bond back','拿回押金'],diff:['Notice rules depend on your agreement. An exit condition report records the property when you leave.','通知期取决于租约类型。退房时会有退房状况报告记录房屋情况。'],help:['Clean, return all keys and compare with your move-in photos.','打扫干净、归还所有钥匙，并对照入住时的照片。']}
   ]},
   {type:'cases',title:['Try a situation','看看这些情景'],ids:['repairs','sharehouse','rental','scam']}
  ]}
 ],
 checklist:[['Inspect in person, or via someone I trust, before paying anything.','付任何钱之前，亲自或请信任的人看房。'],['Read the whole rental agreement and keep a copy.','通读整份租约并保存副本。'],['Confirm the bond is lodged with the RTBA and save the bond number.','确认押金已交由 RTBA 托管，并保存押金编号。'],['Return the signed condition report within 5 business days, with photos.','5 个工作日内交回签字的房屋状况报告，并附照片。'],['Set up utilities and consider contents insurance.','开通水电网络，考虑购买财物保险。'],['Update my address with the University within 7 days.','7 天内向学校更新地址。'],['Report repairs in writing and keep copies.','书面报修并保留副本。']],
 sources:['renting','bond','rtba','conditionReport','minimum','repairs','movingOut','energy','address']
});

jlCustomTracks.daily=jlLifeTrack({
 id:'daily',tab:['Daily life','日常起居'],title:['Everyday life journey','日常起居旅程'],guideKicker:['EVERYDAY GUIDE','日常情景指南'],recapLine:['Your everyday routine','你的日常节奏'],startHelp:['Choose what feels most unfamiliar.','请选择你最陌生的部分。'],
 name:['Everyday life','日常起居'],intro:['Small routines, easier days.','把小日常理顺，生活更轻松。'],copy:['Groceries, weather, bins, money and staying safe: the everyday things nobody explains.','买菜、天气、垃圾分类、花钱和安全：那些没人专门告诉你的日常。'],image:'ask-market.jpg',
 phases:[['Settle your routine','理顺作息'],['Everyday know-how','生活常识'],['Your next steps','你的下一步']],
 images:['ask-dairy.jpg','daily-supermarket.jpg','daily-weather.jpg','daily-bins.jpg','route-green.jpg','explore-green.jpg'],
 steps:[
  [['Your first-week routine','你的第一周作息'],['Choose what feels most unfamiliar.','选出你最陌生的部分。']],
  [['Groceries and cooking','买菜与做饭'],['Supermarkets, markets and reading price labels.','超市、市场与看懂价签。']],
  [['Weather and sun','天气与防晒'],['Four seasons in a day and a strong UV index.','一天四季，紫外线很强。']],
  [['Bins and recycling','垃圾分类与回收'],['Bin lids, collection day and the 10c refund.','垃圾桶颜色、收运日与 10 分退款。']],
  [['Money and staying safe','花钱与安全'],['Everyday costs, helplines and what to do if things go wrong.','日常开销、求助电话与意外处理。']],
  [['Your everyday checklist','你的日常行动清单'],['Keep the routines that make life easier.','保存让生活更顺的小习惯。']]
 ],
 content:[
  {kicker:['START WITH YOUR DAY','从你的日常开始'],h1:['What feels most unfamiliar?','哪部分让你最陌生？'],intro:['Pick one. We will point you to the step that helps most.','选一项，我们会带你去最有帮助的那一步。'],sources:['setUp'],blocks:[
   {type:'choose',resultLabel:['Start here','从这里开始'],options:[
    ['food',['Food and groceries','买菜与吃饭'],['Where to shop and how to compare prices.','去哪里买，怎么比价。'],'basket'],
    ['weather',['Weather and clothes','天气与穿衣'],['Changeable days and strong sun.','多变的天气和强烈的阳光。'],'sun'],
    ['bins',['Bins and recycling','垃圾分类'],['Which bin, which day.','哪个桶、哪天收。'],'recycle'],
    ['money',['Money and safety','花钱与安全'],['Costs, numbers to save, what if.','开销、要存的电话、意外怎么办。'],'coin']],
    results:{
     food:[[['Find your nearest supermarket and a market for fresh produce.','找到最近的超市和买生鲜的市场。'],'basket'],[['Compare the unit price on shelf labels.','比较价签上的单位价格。'],'search']],
     weather:[[['Check the forecast and UV index each morning.','每天早上看天气预报和紫外线指数。'],'sun'],[['Carry a light layer — the weather can change quickly.','随身带件薄外套，天气变化很快。'],'umbrella']],
     bins:[[['Look up your council’s bin colours and collection day.','查一下所在区议会的垃圾桶颜色和收运日。'],'bin'],[['Keep eligible bottles and cans for the 10c refund.','把符合条件的瓶罐留着换 10 分退款。'],'recycle']],
     money:[[['Save 000, 131 444, 1800 022 222 and 13 11 14.','保存 000、131 444、1800 022 222 和 13 11 14。'],'phone'],[['Turn on banking alerts and track one month of spending.','开启银行提醒，记录一个月的开销。'],'card']]
    },jumps:{food:1,weather:2,bins:3,money:4}}
  ]},
  {kicker:['GROCERIES','买菜'],h1:['Shop smart from week one.','从第一周起聪明购物。'],sources:['setUp'],blocks:[
   {type:'tabs',label:['Where to shop','去哪里买'],items:[
    {label:['Supermarkets','超市'],title:['Weekly specials, unit prices','每周特价与单位价格'],diff:['Big supermarkets run weekly specials. Shelf labels show a unit price, such as per 100 g, so you can compare pack sizes.','大型超市每周都有特价。价签上会标出单位价格（如每 100 克），方便比较不同包装。'],help:['Compare the unit price, not just the pack price, and bring reusable bags.','比较单位价格而不只看总价，并自带购物袋。']},
    {label:['Markets','市场'],title:['Fresh produce, local stalls','新鲜农产品与本地摊位'],diff:['Queen Victoria Market and local markets sell fresh fruit, vegetables, meat and bread. Opening days vary.','维多利亚女王市场和各区市场出售新鲜蔬果、肉类和面包，开放日各不相同。'],help:['Check opening days before you go, and bring a bag and a card.','出门前先查开放日，带上购物袋和银行卡。']},
    {label:['Specialty grocers','特色超市'],title:['Familiar ingredients','熟悉的食材'],diff:['Asian and other specialty grocers stock ingredients from home, often in larger sizes.','亚洲超市和其他特色食品店有家乡食材，包装往往更大。'],help:['Compare prices for staples like rice and sauces across stores.','比较几家店里大米、酱料等常用品的价格。']}
   ]},
   {type:'alert',kind:'info',title:['The price you see is the price you pay','标价就是实付价'],copy:['Displayed prices already include GST. Tipping is optional in Australia, including in cafés and restaurants.','标价已包含消费税（GST）。在澳洲，包括咖啡店和餐厅在内，小费都是自愿的。']}
  ]},
  {kicker:['WEATHER AND SUN','天气与防晒'],h1:['Four seasons, one day.','一天之内，四季变换。'],sources:['sunsmart'],blocks:[
   {type:'alert',kind:'warning',title:['Protect your skin from UV 3','紫外线指数 3 起就要防晒'],copy:['SunSmart advises protecting your skin whenever the UV index is 3 or higher, even on cool or cloudy days.','SunSmart 建议，只要紫外线指数达到 3 或以上就要防晒，即使天气凉爽或多云也一样。']},
   {type:'tabs',label:['Seasons','季节'],items:[
    {label:['Summer','夏季'],title:['Hot days, sudden changes','炎热天气与骤变'],diff:['Summer can bring very hot, dry days, sometimes followed by a quick cool change.','夏天可能非常炎热干燥，有时紧接着迅速降温。'],help:['Carry water, and use sunscreen, a hat and sunglasses.','带水，并做好防晒：防晒霜、帽子和墨镜。']},
    {label:['Winter','冬季'],title:['Cool, grey and windy','阴冷多风'],diff:['Winter is cool and often wet, and many older homes feel cold inside.','冬天阴冷多雨，很多老房子室内也会比较冷。'],help:['Dress in layers, bring a waterproof jacket and check your heater early.','分层穿衣，带防水外套，并提前检查暖气。']},
    {label:['Changeable days','多变天气'],title:['“Four seasons in one day”','“一天四季”'],diff:['Melbourne weather is known for changing quickly within a single day.','墨尔本的天气以一天之内变化快著称。'],help:['Check the forecast each morning and carry a light layer.','每天早上看预报，随身带件薄外套。']}
   ]}
  ]},
  {kicker:['BINS AND RECYCLING','垃圾分类与回收'],h1:['Right bin, right day.','对的桶，对的日子。'],sources:['cds'],blocks:[
   {type:'alert',kind:'info',title:['Rules depend on your council','规则因区议会而异'],copy:['Bin colours, what goes in each bin and collection days vary by council. Check your council’s website or the labels on your bins.','垃圾桶颜色、各类垃圾投放规则和收运日因区议会而异。请查看区议会网站或垃圾桶上的标签。']},
   {type:'steps',items:[
    ['bin',['General rubbish','其他垃圾'],['Usually the red or dark-lid bin, for things that can’t be recycled.','通常是红色或深色盖的桶，投放不可回收物。']],
    ['recycle',['Mixed recycling','混合回收'],['Usually the yellow-lid bin: clean paper, cardboard, cans and hard plastic containers. Keep items loose, not bagged.','通常是黄色盖的桶：干净的纸、纸板、易拉罐和硬塑料容器。散放，不要装袋。']],
    ['basket',['Food and garden','厨余与园艺'],['Many councils use a green or lime-lid bin for food scraps and garden waste.','很多区议会用绿色或浅绿色盖的桶收厨余和园艺垃圾。']],
    ['coin',['Container refund','瓶罐退款'],['Return eligible drink containers at a CDS Vic refund point for a 10c refund each.','把符合条件的饮料瓶罐送到 CDS Vic 回收点，每个可退 10 分。'],'cds']
   ]},
   {type:'tasks',title:['This week','本周可以做'],items:[
    {id:'d-day',icon:'calendar',title:['Find your collection day','查到收运日'],copy:['Ask a housemate or check your council’s website, then set a reminder.','问室友或查区议会网站，然后设个提醒。']},
    {id:'d-cds',icon:'recycle',title:['Start a refund bag','准备一个退款袋'],copy:['Keep eligible bottles and cans separate for the 10c refund.','把符合条件的瓶罐单独收好，换 10 分退款。'],src:'cds'}
   ]}
  ]},
  {kicker:['MONEY AND SAFETY','花钱与安全'],h1:['Spend calmly, stay safe.','从容花钱，安心生活。'],sources:['healthdirect','policeLine','lifeline','scamwatch'],blocks:[
   {type:'numbers',label:['Numbers to save','存好这些电话'],items:[['000',['Emergency: police, fire, ambulance','紧急情况：警察、消防、救护'],'is-urgent'],['131 444',['Police Assistance Line (non-urgent)','警方协助热线（非紧急）']],['1800 022 222',['healthdirect: 24-hour health advice','healthdirect：24 小时健康咨询']],['13 11 14',['Lifeline: crisis support, any hour','Lifeline：全天危机支持']]]},
   {type:'tabs',label:['Money topics','财务主题'],items:[
    {label:['Everyday costs','日常开销'],title:['Know your real budget','了解真实预算'],diff:['Rent, groceries, transport and your phone plan are usually the biggest regular costs.','房租、买菜、交通和手机套餐通常是最主要的固定开销。'],help:['Track one month of spending and ask about student discounts with your student card.','记录一个月的开销，凭学生卡询问学生优惠。']},
    {label:['Paying','付款'],title:['Tap and pay almost everywhere','几乎处处可刷卡'],diff:['Contactless cards and phone wallets are widely accepted. Some places add a small card surcharge.','非接触式银行卡和手机钱包普遍可用，部分商家会收取少量刷卡附加费。'],help:['Turn on transaction alerts in your banking app.','在银行应用中开启交易提醒。']},
    {label:['If something goes wrong','遇到意外'],title:['Act fast, then get help','先快速处理，再求助'],diff:['Lost cards, a scam message or feeling unwell at night all have clear next steps.','银行卡丢失、收到诈骗信息或夜里身体不适，都有明确的应对步骤。'],help:['Open a situation below to see what to do.','打开下面的情景，看看该怎么做。']}
   ]},
   {type:'cases',ids:['lostwallet','nightunwell','scam']}
  ]}
 ],
 checklist:[['Save 000, 131 444, healthdirect 1800 022 222 and Lifeline 13 11 14.','保存 000、131 444、healthdirect 1800 022 222 和 Lifeline 13 11 14。'],['Find my nearest supermarket, market and pharmacy.','找到最近的超市、市场和药房。'],['Check the UV forecast and use sun protection on UV 3+ days.','查看紫外线预报，指数 3 以上时做好防晒。'],['Learn my council’s bin colours and collection day.','了解所在区议会的垃圾桶颜色和收运日。'],['Return eligible drink containers for the 10c refund.','把符合条件的饮料瓶罐拿去换 10 分退款。'],['Turn on banking alerts and track one month of spending.','开启银行提醒，记录一个月的开销。']],
 sources:['setUp','sunsmart','cds','healthdirect','policeLine','lifeline','scamwatch']
});
