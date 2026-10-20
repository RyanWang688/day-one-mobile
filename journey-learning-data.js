// Authored learning exercises. Official links are checked 20 October 2026.
const jlSources={
 licence:['VicRoads · Overseas licence','https://www.vicroads.vic.gov.au/licences/convert-your-licence/driving-with-your-overseas-licence'],
 convert:['VicRoads · Conversion checker','https://www.vicroads.vic.gov.au/licences/new-to-victoria/convert-your-overseas-licence'],
 learner:['VicRoads · Getting your Ls','https://www.vicroads.vic.gov.au/ls-and-ps/getting-your-ls/how-to-get-your-ls'],
 probationary:['VicRoads · Getting your Ps','https://www.vicroads.vic.gov.au/ls-and-ps/getting-your-ps/how-to-get-your-ps'],
 limits:['Transport Victoria · Safe driving','https://transport.vic.gov.au/road-and-active-transport/road-rules-and-safety/safe-driving-tips'],
 left:['Transport Victoria · Driving in Victoria','https://transport.vic.gov.au/road-and-active-transport/road-rules-and-safety/tourists-driving-in-victoria'],
 hook:['Transport Victoria · Hook turns','https://transport.vic.gov.au/road-and-active-transport/road-rules-and-safety/hook-turns'],
 crash:['Transport Victoria · Crash responsibilities','https://transport.vic.gov.au/road-and-active-transport/road-rules-and-safety/crash-responsibilities'],
 insurance:['Victoria Legal Aid · Driving and accidents','https://www.legalaid.vic.gov.au/driving-and-accidents'],
 emergency:['Victoria Police · Contact','https://www.police.vic.gov.au/contact'],
 myki:['Transport Victoria · Tap on and off','https://transport.vic.gov.au/tickets-and-payments/myki/tap-on-and-off-with-myki'],
 payments:['Transport Victoria · Payment options','https://transport.vic.gov.au/tickets-and-payments/contactless'],
 contactless:['Transport Victoria · Cards and digital wallets','https://transport.vic.gov.au/tickets-and-payments/contactless/contactless-payment-frequently-asked-questions'],
 concessions:['Transport Victoria · Contactless concessions','https://transport.vic.gov.au/news-and-resources/campaigns/tap-and-go/concessions'],
 topup:['Transport Victoria · In-person myki top ups','https://transport.vic.gov.au/tickets-and-payments/myki/top-up-your-myki/top-up-in-person'],
 students:['Transport Victoria · Student eligibility','https://transport.vic.gov.au/tickets-and-payments/myki/myki-types/students'],
 works:['Transport Victoria · Disruptions','https://transport.vic.gov.au/disruptions/disruptions-information'],
 tracker:['Transport Victoria · Replacement bus tracker','https://transport.vic.gov.au/plan-a-journey/travel-tips-and-resources/replacement-bus-real-time-tracking'],
 access:['Metro · Accessible replacement travel','https://www.metrotrains.com.au/station-accessibility-features/service-changes/'],
 metro:['Metro · Travel and service information','https://www.metrotrains.com.au/'],
 priority:['Metro · On the train','https://www.metrotrains.com.au/station-accessibility-features/on-the-train/']
};
const jlCountries=[['CN','China','中国'],['ID','Indonesia','印度尼西亚'],['KR','South Korea','韩国'],['DE','Germany','德国'],['AR','Argentina','阿根廷'],['JP','Japan','日本'],['GB','United Kingdom','英国'],['IN','India','印度'],['OTHER','Somewhere else','其他国家或地区']];
// Country conventions, not a claim about an individual's driving experience.
const jlCountrySides={CN:'right',ID:'left',KR:'right',DE:'right',AR:'right',JP:'left',GB:'left',IN:'left'};
const jlStepImages={driving:['city.jpg','ar-parking-street.jpg','city.jpg','city.jpg','ar-parking-street.jpg','city.jpg'],transport:['city.jpg','ar-myki-reader.jpg','city.jpg','city.jpg','ar-myki-reader.jpg','city.jpg']};
const jlTracks={
 driving:{name:['Your Victorian licence','取得维州驾照'],intro:['A clear path to your licence.','把取得驾照的路径理清楚。'],copy:['Start with your overseas licence or first L, then follow the stages and application steps.','从海外驾照或第一张 L 开始，了解牌照阶段与申请步骤。'],image:'city.jpg',steps:[
  [['Your driving background','你的驾驶背景'],['Choose the country or region you know.','选择熟悉的国家或地区。']],
  [['Your licence pathway','你的驾照路径'],['Use your age, issuing country and recognised licence years.','根据年龄、发证地区与获认可的持证年限了解路径。']],
  [['L, red P, green P & Full','L、红 P、绿 P 与 Full'],['See what each stage allows and how they connect.','看懂各阶段的区别与衔接。']],
  [['Apply, step by step','按步骤申请驾照'],['Documents, appointments, learner requirements and assessments.','资料、预约、学习持证要求与评估。']],
  [['Help on the road','上路后的情景处理'],['Insurance, breakdowns, accidents and local road situations.','保险、抛锚、事故与本地道路情景。']],
  [['Your licence checklist','你的驾照行动清单'],['Keep the actual steps you still need to take.','保存接下来需要完成的实际行动。']]
 ]},
 transport:{name:['Melbourne transport','墨尔本公共交通'],intro:['Find your way. Keep your options.','熟悉出行，也为变化做好准备。'],copy:['Learn the ticket rhythm, explore a first trip, and find a plan B when services change.','理解票制，了解第一次乘车，并在运营变化时找到备选方案。'],image:'city.jpg',steps:[
  [['Your travel background','你的出行背景'],['Bring your habits; check what changes.','从你的习惯出发，看看哪些不同。']],
  [['A ticket that makes sense','看懂本地票制'],['Bank card, Apple Pay, Google Pay or myki.','银行卡、Apple Pay、Google Pay 或 myki。']],
  [['Your first tram trip','第一次乘坐电车'],['From the free zone to a paid journey.','从免费区到需要付费的行程。']],
  [['When trains cannot run','火车无法运行时'],['Works, sudden disruption and accessible alternatives.','施工、临时中断与无障碍替代方案。']],
  [['Help while travelling','乘车途中的应对方法'],['Payment issues, missed stops and getting support.','支付故障、坐过站与寻求帮助。']],
  [['Your travel backup kit','你的出行备用清单'],['Keep a simple plan for your next trip.','为下一次出行留下一份简单计划。']]
 ]}
};
const jlRoadTopics=[
 {title:['Keep left','靠左行驶'],body:['Victoria drives on the left. Rebuild your lane-position habit before joining unfamiliar traffic.','维州靠左行驶。进入陌生道路前，先重新建立车道位置意识。'],feedback:['Use the left side; follow markings and signs for your lane.','靠左行驶，并遵循车道标线与路牌。'],source:'left',scene:'lanes'},
 {title:['Read the limit','看限速牌'],body:['Use the posted limit, not the speed you remember from home. Slow further when conditions need it.','以现场标示限速为准，不套用家乡的记忆；路况不佳时还应减速。'],feedback:['The posted limit is a maximum, not a target in poor conditions.','标示限速是上限，路况不佳时不必达到该速度。'],source:'limits',scene:'speed'},
 {title:['Make room','给彼此留空间'],body:['Unfamiliar tram lanes and intersections deserve extra time. Do not improvise a turn to avoid waiting.','面对陌生的电车轨道和路口，给自己多一点判断时间，不为赶路临时乱转弯。'],feedback:['A legal alternative route is better than an improvised manoeuvre.','合法换一条路线，比临时冒险转弯更稳妥。'],source:'limits',scene:'hook'}
];
