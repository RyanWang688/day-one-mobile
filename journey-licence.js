/* Victoria car-licence guidance, checked against current VicRoads pages on 20 Oct 2026. */
Object.assign(jlSources,{
 issueguide:['VicRoads · Licence issuing guide','https://www.vicroads.vic.gov.au/-/media/files/formsandpublications/licences/the-victorian-driver-licence-journey.ashx'],
 stages:['Transport Victoria · Graduated licensing','https://transport.vic.gov.au/road-and-active-transport/road-rules-and-safety/victorias-graduated-licensing-system'],
 plateRules:['Transport Victoria · L and P rules','https://transport.vic.gov.au/road-and-active-transport/road-rules-and-safety/learner-and-probationary-driver-road-rules'],
 full:['VicRoads · Moving from Ps to Full','https://www.vicroads.vic.gov.au/ls-and-ps/driving-on-your-ps'],
 conversionSteps:['VicRoads · Conversion steps','https://www.vicroads.vic.gov.au/licences/new-to-victoria/overseas-licence-conversion-result'],
 id:['VicRoads · Identity documents','https://www.vicroads.vic.gov.au/licences/manage-your-licence/evidence-of-identity/types-of-identity-documents']
});
const jlLicenceRecognition={CN:'NON',ID:'NON',KR:'NON',DE:'FULL',AR:'NON',JP:'FULL',GB:'FULL',IN:'NON'};
const jlLicenceGrades={
 L:{label:['Learner · L','学习驾照 · L'],letter:'L',title:['Learn with a supervisor','在监督驾驶下学习'],summary:['From age 16. This is a permit to learn, not to drive alone.','最早 16 岁申请，取得学习许可后仍需监督驾驶。'],facts:[['Display L plates and drive with an eligible full-licence supervisor.','展示 L 牌，并由符合条件的正式驾照持有人监督。'],['Zero blood alcohol. Learner device and towing restrictions apply.','血液酒精浓度为零，遵守学习驾驶的设备和拖车限制。'],['To get Ps: minimum age 18, required learner period, Hazard Perception Test and Drive Test.','取得 P 牌：最早 18 岁，满足学习期要求，并完成危险感知与路考。']]},
 P1:{label:['Red P · P1','红 P · P1'],letter:'P',title:['Your first probationary stage','第一阶段的临时驾照'],summary:['For new drivers licensed before 21: normally the first 12 months. Overseas credit can change the period.','首次取得驾照时未满 21 岁，通常先经历 12 个月红 P；海外持证经历可能影响期限。'],facts:[['You can drive independently, with red P plates displayed.','可独立驾驶，并须展示红 P 牌。'],['Zero blood alcohol; probationary prohibited-vehicle restrictions apply.','血液酒精浓度为零，并受 P 牌禁驾车型规则约束。'],['Normally no more than one peer passenger aged 16 to under 22; family and supervision exceptions apply.','通常最多搭载一名 16 至未满 22 岁同龄乘客；家庭成员和监督驾驶等情况有例外。']]},
 P2:{label:['Green P · P2','绿 P · P2'],letter:'P',title:['More experience, still on Ps','经验更多，仍属于 P 牌阶段'],summary:['New drivers licensed at 21 or older start here. The normal new-driver P2 period is three years; recognised overseas experience can alter it.','首次取得驾照时已满 21 岁，通常从绿 P 开始。新司机的绿 P 通常为三年，获认可的海外经历可影响期限。'],facts:[['Display green P plates. P2 is not a full licence.','展示绿 P 牌，绿 P 仍不是正式 Full 驾照。'],['Zero blood alcohol and P-plate vehicle restrictions continue.','仍需保持零酒精，并遵守 P 牌车型限制。'],['The P1 peer-passenger cap ends; other probationary conditions remain.','不再适用红 P 的同龄乘客人数上限，其他 P 牌条件仍需遵守。']]},
 FULL:{label:['Full licence','正式驾照 · Full'],letter:'✓',title:['Beyond the probationary stages','完成临时驾照阶段'],summary:['A full licence follows the applicable probationary period, or an eligible overseas conversion.','符合条件的海外驾照转换，或完成适用的 P 牌阶段后，可取得正式驾照。'],facts:[['No L or P plates are required for your full car licence.','正式汽车驾照无需展示 L 或 P 牌。'],['Finish the P2 period with the required driving record and complete the renewal process VicRoads sends you.','完成 P2 阶段、满足驾驶记录要求，并按 VicRoads 通知完成换证流程。'],['Licence conditions, road rules and applicable alcohol limits still apply.','仍须遵守驾照附加条件、道路规则及适用的酒精限制。']]}
};
function jlLicencePlan(p,background=''){
 const age=Number(p.age),ageValid=p.age!==''&&p.age!==undefined&&Number.isInteger(age)&&age>=0&&age<=100;
 const issuer=p.issuer||background||'OTHER',recognition=jlLicenceRecognition[issuer]||'UNKNOWN';
 const base={ready:false,stage:null,reason:'setup',age,issuer,recognition,path:'setup',months:age<21?12:age<25?6:3,hours:age<21?120:0};
 if(!p.licence||!ageValid)return base;
 if(p.licence==='none')return {...base,ready:true,stage:age<16?'WAIT':'L',reason:age<16?'young':'new',path:'new'};
 if(p.licence==='learner')return {...base,ready:['vic','overseas'].includes(p.learnerPlace),stage:age<16?'WAIT':'L',reason:p.learnerPlace==='overseas'?'overseasLearner':'learner',path:p.learnerPlace==='overseas'?'reviewLearner':'learner'};
 if(p.licence==='expired')return {...base,ready:true,stage:'REVIEW',reason:'invalid',path:'review'};
 if(p.licence!=='valid')return base;
 if(age<18)return {...base,ready:true,stage:age<16?'WAIT':'L',reason:'under18',path:'reviewLearner'};
 const minimum={lt1:0,'1to3':1,'3to4':3,'4plus':4}[p.experience];
 if(minimum===undefined)return base;
 if(minimum>age-18)return {...base,error:'experience'};
 if(p.interrupted)return {...base,ready:true,stage:'REVIEW',reason:'interrupted',path:'review'};
 let stage=age<21?(minimum<1?'P1':'P2'):age<22?'P2':minimum<3?'P2':'FULL',reason='conversion';
 // Current checker explicitly flags licences first obtained before 21 and held <4 years.
 if(age>=22&&age<25&&p.experience==='3to4'){
  if(age===24&&p.earlyIssue==='after21')stage='FULL';
  else {stage='REVIEW';reason='earlyIssue'}
 }
 return {...base,ready:true,stage,reason,path:recognition==='UNKNOWN'?'review':recognition==='FULL'?'recognised':'conversion',earlyNote:age<22&&minimum<4};
}
