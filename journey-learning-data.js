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
 payments:['Transport Victoria · Payment options','https://transport.vic.gov.au/news-and-resources/campaigns/tap-and-go'],
 topup:['Transport Victoria · In-person myki top ups','https://transport.vic.gov.au/tickets-and-payments/myki/top-up-your-myki/top-up-in-person'],
 students:['Transport Victoria · Student eligibility','https://transport.vic.gov.au/tickets-and-payments/myki/myki-types/students'],
 works:['Transport Victoria · Disruptions','https://transport.vic.gov.au/disruptions/disruptions-information'],
 tracker:['Transport Victoria · Replacement bus tracker','https://transport.vic.gov.au/plan-a-journey/travel-tips-and-resources/replacement-bus-real-time-tracking'],
 access:['Metro · Accessible replacement travel','https://www.metrotrains.com.au/station-accessibility-features/service-changes/'],
 metro:['Metro · Travel and service information','https://www.metrotrains.com.au/'],
 priority:['Metro · On the train','https://www.metrotrains.com.au/station-accessibility-features/on-the-train/']
};
const jlCountries=[['CN','China','中国'],['ID','Indonesia','印度尼西亚'],['KR','South Korea','韩国'],['DE','Germany','德国'],['AR','Argentina','阿根廷'],['JP','Japan','日本'],['GB','United Kingdom','英国'],['IN','India','印度'],['OTHER','Somewhere else','其他国家或地区']];
const jlTracks={
 driving:{name:['Driving in Victoria','在维州开车'],intro:['A familiar road. A different rhythm.','熟悉驾驶，从重新认识道路开始。'],copy:['Build your licence plan, learn the local differences, then rehearse the unexpected.','理清驾照路径，理解本地差异，再练习突发情况。'],image:'ar-parking-street.jpg',steps:[
  [['Your driving background','你的驾驶背景'],['Start with what feels familiar.','从你熟悉的规则开始。']],
  [['Your licence pathway','你的驾照路径'],['An overseas licence or a first licence?','已有海外驾照，还是第一次学车？']],
  [['Everyday road differences','日常道路差异'],['Left-side driving, signs and safe choices.','靠左行驶、路牌与安全判断。']],
  [['A Melbourne hook turn','练习墨尔本钩形转弯'],['Three decisions at a signed intersection.','在有标志的路口，完成三次判断。']],
  [['When a crash happens','发生事故时怎么办'],['Practise injury, minor damage and unattended property.','练习受伤、轻微碰撞和无人看管财产受损的情况。']],
  [['Your road-ready checklist','你的上路准备清单'],['Keep the steps you still need to take.','留下接下来需要完成的行动。']]
 ]},
 transport:{name:['Melbourne transport','墨尔本公共交通'],intro:['Find your way. Keep your options.','熟悉出行，也为变化做好准备。'],copy:['Learn the ticket rhythm, practise a first trip, and find a plan B when services change.','理解票制，练习第一次乘车，并在运营变化时找到备选方案。'],image:'city.jpg',steps:[
  [['Your travel background','你的出行背景'],['Bring your habits; check what changes.','从你的习惯出发，看看哪些不同。']],
  [['A ticket that makes sense','看懂本地票制'],['Explore myki by train, tram and bus.','分别认识火车、电车和公交的 myki 规则。']],
  [['Your first tram trip','第一次乘坐电车'],['From the free zone to a paid journey.','从免费区到需要付费的行程。']],
  [['When trains cannot run','火车无法运行时'],['Works, sudden disruption and accessible alternatives.','施工、临时中断与无障碍替代方案。']],
  [['Small moments, local habits','小场景里的本地习惯'],['Missed stops, boarding and ticket checks.','坐过站、上下车与查票。']],
  [['Your travel backup kit','你的出行备用清单'],['Keep a simple plan for your next trip.','为下一次出行留下一份简单计划。']]
 ]}
};
const jlRoadTopics=[
 {title:['Keep left','靠左行驶'],body:['Victoria drives on the left. Rebuild your lane-position habit before joining unfamiliar traffic.','维州靠左行驶。进入陌生道路前，先重新建立车道位置意识。'],question:['Which side should your car normally use in Victoria?','在维州，车辆通常应在哪一侧行驶？'],options:[['The left side','左侧'],['The right side','右侧'],['Either side when quiet','人少时哪侧都可以']],correct:0,feedback:['Use the left side; follow markings and signs for your lane.','靠左行驶，并遵循车道标线与路牌。'],source:'left',scene:'lanes'},
 {title:['Read the limit','看限速牌'],body:['Use the posted limit, not the speed you remember from home. Slow further when conditions need it.','以现场标示限速为准，不套用家乡的记忆；路况不佳时还应减速。'],question:['A sign says 40, but traffic is moving faster. What guides you?','路牌限速 40，但车流更快。你应依据什么？'],options:[['Match the fastest car','跟上最快的车'],['The sign and safe conditions','路牌与安全路况'],['My home-country default','家乡的默认限速']],correct:1,feedback:['The posted limit is a maximum, not a target in poor conditions.','标示限速是上限，路况不佳时不必达到该速度。'],source:'limits',scene:'speed'},
 {title:['Make room','给彼此留空间'],body:['Unfamiliar tram lanes and intersections deserve extra time. Do not improvise a turn to avoid waiting.','面对陌生的电车轨道和路口，给自己多一点判断时间，不为赶路临时乱转弯。'],question:['You are unsure whether a signed turn is allowed. What is safer?','你不确定路口标志是否允许转弯，什么做法更安全？'],options:[['Copy the car ahead','照着前车走'],['Turn quickly before the tram','抢在电车前转弯'],['Follow the signs; continue legally if unsure','遵循标志，不确定时合法继续行驶']],correct:2,feedback:['A legal alternative route is better than an improvised manoeuvre.','合法换一条路线，比临时冒险转弯更稳妥。'],source:'limits',scene:'hook'}
];
const jlQ=(question,options,correct,feedback,source,scene)=>({question,options,correct,feedback,source,scene});
const jlScenarios={
 hook:{title:['A signed hook turn','有标志的钩形转弯'],intro:['You approach a Melbourne intersection displaying a hook-turn sign.','你接近一个设有钩形转弯标志的墨尔本路口。'],scene:'hook',questions:[
  jlQ(['You need to turn right. Where do you approach from?','你需要右转，应从哪条车道接近？'],[['Left lane, indicating right','左侧车道，打右转灯'],['The centre tram tracks','中间电车轨道'],['Any lane with space','哪条车道空就走哪条']],0,['A signed hook turn starts from the left lane.','有标志的钩形转弯从左侧车道开始。'],'hook'),
  jlQ(['You enter the intersection. Where do you wait?','进入路口后，应在哪里等待？'],[['Across the pedestrian crossing','停在人行横道上'],['At the far-left position, following markings and keeping crossings clear','沿标线到路口靠左等待位置，并让出人行横道'],['Beside the tram in the centre','路口中间的电车旁']],1,['Use the marked waiting position where provided; keep pedestrian crossings clear.','有等待标线时按标线停靠，并保持人行横道畅通。'],'hook'),
  jlQ(['When do you complete the right turn?','何时完成右转？'],[['As soon as your original light turns amber','原方向变黄灯就转'],['When the driver behind honks','后车鸣笛时'],['When the road you are entering gets green, after checking for moving traffic','目标道路变绿灯，并确认没有行进车辆后']],2,['Wait for the destination-road green and check for moving traffic before turning.','等待目标道路绿灯，检查行进车辆后再转弯。'],'hook')
 ]},
 minor:{title:['A minor collision','轻微碰撞'],intro:['In this practice, two cars collide. Nobody appears injured.','模拟情境：两车发生碰撞，目前没有人明显受伤。'],scene:'crash',questions:[
  jlQ(['What do you do first?','首先应做什么？'],[['Stop safely and check everyone','安全停车，确认人员情况'],['Drive away if the scratch is small','刮痕很小就离开'],['Discuss payment in the traffic lane','站在行车道里谈赔偿']],0,['Stop and check for injuries; stay out of moving traffic.','停车并检查人员情况，远离行进车流。'],'crash'),
  jlQ(['The scene is safe. What details must you provide?','现场安全后，应提供哪些资料？'],[['Only a social-media account','只留社交账号'],['Name, address, registration and vehicle owner’s name','姓名、地址、车牌号及车主姓名'],['Nothing if you disagree about fault','对责任有异议就不提供']],1,['Exchange the required details even if you disagree about what happened.','即使对事故经过有分歧，也应交换规定的资料。'],'crash'),
  jlQ(['What is a useful next action once safe?','确保安全后，什么后续行动有帮助？'],[['Promise cash before recording anything','没记录就先答应付现金'],['Delete the other driver’s details','删掉对方资料'],['Record the scene safely and contact your insurer','安全记录现场，并联系保险公司']],2,['Keep a factual record and follow your insurer’s claim process.','保留客观记录，并按保险公司的理赔流程处理。'],'insurance')
 ]},
 injury:{title:['Someone is injured','有人受伤'],intro:['In this practice, a passenger is injured after a collision.','模拟情境：碰撞后，一名乘客受伤。'],scene:'crash',questions:[
  jlQ(['There is an immediate emergency. Which response fits?','出现紧急情况，哪种应对合适？'],[['Wait until tomorrow','等到明天再处理'],['Stop safely, call 000 and follow the operator','安全停车，拨打 000，并听从接线员指示'],['Only message an insurer','只发消息给保险公司']],1,['000 is for emergencies; give the location and follow instructions.','紧急情况拨打 000，说明地点并听从指示。'],'emergency'),
  jlQ(['How do you help while waiting?','等待期间如何提供帮助？'],[['Stand between cars in moving traffic','站在车流中的两车之间'],['Move every injured person immediately','立即搬动所有伤者'],['Help without creating further danger; follow emergency instructions','避免造成二次危险，并按急救指示提供帮助']],2,['Assist safely and follow emergency guidance.','在确保安全的前提下协助，并遵循紧急救援指引。'],'crash'),
  jlQ(['Police did not attend, but someone was injured. What next?','有人受伤，但警察未到现场。之后怎么办？'],[['Report the crash to the nearest police station','向最近的警察局报告事故'],['An insurance message is always enough','发给保险公司就总是足够'],['No action after exchanging numbers','交换号码后无需其他处理']],0,['An injury crash must be reported to the nearest police station if police were not there.','有人受伤而警方未到场时，必须向最近的警察局报告。'],'crash')
 ]},
 property:{title:['The owner is not there','受损财产的主人不在'],intro:['In this practice, you damage a parked vehicle. The owner is absent.','模拟情境：你碰坏一辆停放的车，车主不在现场。'],scene:'crash',questions:[
  jlQ(['What is your first responsibility?','首先应履行什么责任？'],[['Leave before anyone notices','趁没人发现离开'],['Stop and make the situation safe','停车并确保现场安全'],['Ask a friend to remove your plate','让朋友遮住车牌']],1,['Stop; a small amount of damage does not remove your responsibilities.','应停车；损坏很小也不意味着可以免除责任。'],'crash'),
  jlQ(['The owner and police are both absent. What is required?','车主和警方都不在场，应怎么办？'],[['A note always replaces reporting','留纸条就总能代替报告'],['Nothing if the car is parked','停着的车不需要处理'],['Report the crash to the nearest police station','向最近的警察局报告事故']],2,['Report property damage when neither the owner nor police is present.','财产受损且主人和警方均不在场时，应向最近的警察局报告。'],'crash'),
  jlQ(['Which record will help you explain the incident?','哪种记录有助于说明事故？'],[['Time, place, damage and vehicle details, recorded safely','安全记录时间、地点、损坏及车辆资料'],['A guess about who was at fault','猜测谁有责任'],['Only a screenshot of a group chat','只截图群聊']],0,['A factual record supports the report and any insurance follow-up.','客观记录有助于报告与后续保险处理。'],'crash')
 ]},
 tram:{title:['Beyond the free zone','离开电车免费区'],intro:['Your practice tram trip starts inside the Free Tram Zone and ends outside it in Zone 1.','模拟行程：从电车免费区出发，终点位于区外的 Zone 1。'],scene:'ticket',questions:[
  jlQ(['Is this whole trip free?','这趟行程全程免费吗？'],[['Yes, because I board in the free zone','是，因为我从免费区上车'],['No; the destination is outside the free zone','不是，终点在免费区之外'],['All Melbourne trams are free','墨尔本所有电车都免费']],1,['A trip leaving the free zone needs a valid paid ticket.','离开免费区的行程需要有效付费车票。'],'myki'),
  jlQ(['This exercise uses myki. What do you do when boarding?','本练习使用 myki。上车时应怎么做？'],[['Skip the reader because the start is free','起点免费，所以不刷'],['Tap three different cards','连续刷三张不同卡'],['Tap on and check the reader confirms success','刷卡上车，并确认读卡器提示成功']],2,['Use the reader and check its confirmation.','使用读卡器并确认已成功刷卡。'],'myki'),
  jlQ(['Your tram journey is entirely in Zone 1. Tap off?','这趟电车行程全程在 Zone 1，下车需要刷卡吗？'],[['No tap off is needed for this myki tram trip','这类 myki 电车行程不需要下车刷卡'],['Always, just like a train','总是需要，和火车一样'],['Only when the tram is busy','只有人多时需要']],0,['Zone 1 myki tram trips need a tap on, not a tap off.','Zone 1 的 myki 电车行程需要上车刷卡，不需要下车刷卡。'],'myki')
 ]},
 works:{title:['Planned rail works','计划性铁路施工'],intro:['In this situation, replacement buses run between two stations this weekend.','这次情境中，本周末两站之间火车改为接驳巴士。'],scene:'replacement',questions:[
  jlQ(['Before leaving, what do you check?','出门前应确认什么？'],[['Only my usual train timetable','只看平时的时刻表'],['The official works notice, affected segment and replacement stops','官方施工通知、受影响区段及接驳站点'],['Whether a friend went yesterday','朋友昨天是否坐过']],1,['A works notice can change the route and boarding location.','施工通知可能改变路线与上车地点。'],'works'),
  jlQ(['You reach the station. Where do you go?','到达车站后应去哪里？'],[['Wait on the closed train platform','在关闭的火车站台等'],['Take the first ordinary bus','随便坐上第一辆普通公交'],['Follow replacement-bus signs and confirm the destination with staff','跟随接驳巴士标志，并向工作人员确认方向']],2,['Use the designated replacement stop; confirm the stopping pattern.','使用指定接驳站点，并确认巴士停靠模式。'],'metro'),
  jlQ(['How do you protect your connection?','如何给后续换乘留余地？'],[['Allow extra time and check current connections','预留额外时间，并确认当前换乘安排'],['Assume the bus takes exactly the train time','默认巴士耗时与火车完全一样'],['Ignore later changes','忽略后续变化']],0,['Check the current journey plan rather than assuming the usual timing.','确认当前行程计划，不照搬平时耗时。'],'works')
 ]},
 sudden:{title:['An unexpected cancellation','突发取消'],intro:['Practice notice: your train is cancelled without a published replacement timetable.','模拟通知：你的火车临时取消，还没有公布接驳时刻表。'],scene:'replacement',questions:[
  jlQ(['What is the best first check?','最先应确认什么？'],[['Walk along the tracks','沿铁轨步行'],['An old social-media screenshot','旧的社交媒体截图'],['Official service updates or station staff','官方运营更新或车站工作人员']],2,['Use current service advice; never enter the railway to find a shortcut.','查看当前运营指引，切勿进入铁路区域抄近路。'],'metro'),
  jlQ(['The replacement-bus tracker shows nothing. What does that prove?','接驳巴士追踪器没有显示，能说明什么？'],[['It does not prove there is no help; the tracker covers running planned replacements','不能据此认定没有帮助；该追踪器用于运行中的计划性接驳'],['Every train is running normally','所有火车都正常'],['A taxi will automatically be reimbursed','打车费用会自动报销']],0,['The tracker is not available for unplanned disruptions. Ask for current alternatives.','该追踪器不覆盖临时中断，应询问当前替代方案。'],'tracker'),
  jlQ(['Your appointment is soon. What is a practical plan B?','你快赶不上预约了，什么备选做法合理？'],[['Promise to arrive on the original timetable','仍承诺按原时刻到达'],['Check a legal alternative route and let the destination know you may be late','确认可用替代路线，并告知对方可能迟到'],['Rush through a closed gate','冲过关闭的闸门']],1,['Re-plan using current information and communicate the delay.','根据最新信息重新规划，并沟通延误。'],'works')
 ]},
 accessible:{title:['An accessible alternative','需要无障碍替代出行'],intro:['Practice: a replacement coach cannot safely board your mobility aid.','模拟情境：接驳大巴无法让你的助行设备安全上车。'],scene:'replacement',questions:[
  jlQ(['How do you prepare for known works?','已知有施工时，如何提前准备？'],[['Assume every coach is accessible','默认每辆大巴都无障碍'],['Check disruption accessibility information and discuss your needs with staff','查看施工无障碍信息，并与工作人员沟通需求'],['Avoid asking anyone','不向任何人询问']],1,['Replacement vehicles can differ; check assistance before travelling.','接驳车辆条件可能不同，出发前应确认协助安排。'],'access'),
  jlQ(['The ramp or securement is unsuitable. What next?','坡道或固定设施不适用，接下来怎么办？'],[['Ask staff for a safe alternative travel arrangement','请工作人员安排安全的替代出行'],['Board even if the aid cannot be secured','设备无法固定也上车'],['Leave the mobility aid behind','把助行设备留下']],0,['Do not board unsafely. Metro provides alternative arrangements subject to mobility-aid requirements.','不要冒险上车。Metro 会根据助行设备要求提供替代安排。'],'access'),
  jlQ(['What should you confirm before leaving with the alternative?','乘坐替代交通前应确认什么？'],[['Only the colour of the vehicle','只确认车辆颜色'],['A guessed departure time','猜测的出发时间'],['Pickup location, destination and whether the vehicle meets your needs','上车位置、目的地及车辆是否符合你的需求']],2,['Confirm the arrangement directly with staff.','直接与工作人员确认具体安排。'],'access')
 ]},
 missed:{title:['You missed your stop','坐过站了'],intro:['Practice: you notice your tram has passed your stop.','模拟情境：你发现电车已经开过了要下的站。'],scene:'ticket',questions:[
  jlQ(['What is a safe response?','怎样应对更安全？'],[['Force the doors between stops','在站间强行开门'],['Get off at the next safe stop and re-plan','在下一个安全站点下车，重新规划'],['Step into the driver’s space','闯入司机操作区']],1,['Stay on board until a safe stop; check your return route.','留在车上，等到安全站点再下车，并确认返程路线。'],'metro'),
  jlQ(['You are unsure how to get back. What can you do?','不确定怎么返回时，可以怎么办？'],[['Cross the tracks without looking','不看车就横穿轨道'],['Assume both platforms go the same way','默认两边站台方向相同'],['Check the destination display or ask staff before boarding','上车前核对目的地显示，或询问工作人员']],2,['Confirm direction rather than relying on the stop name alone.','确认行驶方向，不只看站名。'],'metro')
 ]},
 boarding:{title:['A busy doorway','拥挤的车门'],intro:['Practice: people are leaving a crowded train as you prepare to board.','模拟情境：你准备上车时，一群乘客正在从拥挤的火车下车。'],scene:'boarding',questions:[
  jlQ(['Where do you wait?','应在哪里等候？'],[['Beside the doorway, letting people leave first','站在门两侧，让乘客先下车'],['In the centre of the doorway','堵在车门中央'],['Across the platform edge','越过站台边缘']],0,['Leave a clear path and board after passengers have alighted.','留出通道，先下后上。'],'metro'),
  jlQ(['A passenger needs the priority space. What is considerate?','有乘客需要使用优先区域，怎样做更体贴？'],[['Keep luggage across the aisle','让行李挡着过道'],['Clear the doorway, aisle and allocated space','让出车门、过道和指定空间'],['Assume nobody can ask you to move','认为没人能请你让开']],1,['Keep access routes and allocated mobility spaces clear.','保持通行路线与指定助行空间畅通。'],'priority')
 ]},
 inspection:{title:['A ticket check','遇到查票'],intro:['Practice: an authorised officer asks to check your ticket.','模拟情境：授权查票员要求检查车票。'],scene:'ticket',questions:[
  jlQ(['You used a student concession. What should you have checked?','你使用了学生优惠票，事先应确认什么？'],[['Every international student automatically qualifies','所有留学生都自动享有优惠'],['A university ID always replaces eligibility','学生证总能代替资格证明'],['The specific concession eligibility and required proof','具体优惠资格及所需证明']],2,['Student status alone does not establish eligibility for every concession.','学生身份本身不代表符合所有优惠资格。'],'students'),
  jlQ(['You think you made a ticket mistake. How do you respond?','你觉得自己可能刷错票了，如何回应？'],[['Show the payment or ticket used and explain calmly; follow official instructions','出示使用的支付方式或车票，平静说明并遵循官方指引'],['Borrow another passenger’s ticket','借其他乘客的票'],['Leave before the check','在检查前逃离']],0,['Use the official process; ask about review options if a notice is issued.','按官方流程处理；若收到通知，可询问正式复核途径。'],'payments')
 ]}
};
