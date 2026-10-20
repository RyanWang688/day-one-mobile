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
 driving:{name:['Driving in Victoria','在维州开车'],intro:['A familiar road. A different rhythm.','熟悉驾驶，从重新认识道路开始。'],copy:['Build your licence plan, learn the local differences, then explore everyday situations.','理清驾照路径，理解本地差异，再了解突发情况的处理。'],image:'ar-parking-street.jpg',steps:[
  [['Your driving background','你的驾驶背景'],['Start with what feels familiar.','从你熟悉的规则开始。']],
  [['Your licence pathway','你的驾照路径'],['An overseas licence or a first licence?','已有海外驾照，还是第一次学车？']],
  [['Everyday road differences','日常道路差异'],['Left-side driving, signs and safe choices.','靠左行驶、路牌与安全判断。']],
  [['A Melbourne hook turn','看懂墨尔本钩形转弯'],['Follow the car through a signed intersection.','沿着图解看懂有标志路口的转弯过程。']],
  [['Cover, breakdowns & accidents','保险、抛锚与事故'],['Explore what to do before and after things go wrong.','图解了解出发前和出意外后该怎么处理。']],
  [['Your road-ready checklist','你的上路准备清单'],['Keep the steps you still need to take.','留下接下来需要完成的行动。']]
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
