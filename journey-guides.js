/* Bilingual, explorable guidance. No scores or answer keys. Sources checked 20 Oct 2026. */
Object.assign(jlSources,{
 cover:['Consumer Affairs Victoria · Car insurance','https://www.consumer.vic.gov.au/consumers-and-businesses/cars/buying-a-used-car/before-you-buy-a-used-car/insurance'],
 tac:['TAC · Injury cover','https://www.tac.vic.gov.au/what-to-do-after-an-accident/what-is-a-tac-claim'],
 hire:['Consumer Affairs Victoria · Car hire','https://www.consumer.vic.gov.au/consumers-and-businesses/cars/car-hire'],
 breakdown:['RACV · Breakdown safety','https://www.racv.com.au/royalauto/transport/cars/car-breakdown-guide.html'],
 reader:['Transport Victoria · Reader errors','https://transport.vic.gov.au/help-and-support/public-transport-ticketing-help/ticket-reader-errors-for-contactless-payment'],
 safety:['Transport Victoria · Safety and help','https://transport.vic.gov.au/news-and-resources/campaigns/safety-you-can-see'],
 night:['Transport Victoria · Late-night travel','https://transport.vic.gov.au/plan-a-journey/travel-tips-and-resources']
});
const jlGuideStep=(en,zh,body,bodyZh,phrase='',phraseZh='')=>({title:[en,zh],body:[body,bodyZh],phrase:phrase?[phrase,phraseZh]:null});
const jlGuides={
 insurance:{title:['Understand your car cover','先弄懂车险保障'],intro:['Your registration is paid. What does that actually cover?','已经付了车辆注册费，哪些情况真的有保障？'],scene:'insurance',sources:['cover','tac'],steps:[
  jlGuideStep('People: TAC','人身伤害：TAC','The TAC charge included in Victorian registration supports eligible transport-injury claims. It does not pay to repair your car or other property.','维州注册费内的 TAC 费用用于符合条件的交通伤害理赔，不负责维修车辆或其他财产。'),
  jlGuideStep('Other property: third party','他人财产：第三方财产险','Third party property insurance can cover liability for damage to someone else’s car or property. It is different from TAC injury cover.','第三方财产险可保障对他人车辆或财产损失的责任，与 TAC 人身伤害保障不同。'),
  jlGuideStep('Your car: check the policy','自己的车：查看保单','Comprehensive policies generally include damage to your car and others’ property. Read exclusions, excesses and driver conditions before relying on cover.','综合险通常包含自己的车辆和他人财产损失。实际保障须看除外责任、自付额及驾驶人条件。','What is my excess, and are there any driver restrictions?','我的自付额是多少？对驾驶人有什么限制？')
 ],variants:[
  {id:'buying',label:['Before buying','投保前'],note:['Compare the policy wording, not just its name or premium.','比较保单条款，不只看名称和保费。']},
  {id:'claim',label:['After an accident','出事故后'],note:['Make everyone safe first. Contact your insurer before authorising repairs and keep your claim reference.','先确保人员安全。授权维修前联系保险公司，并保存理赔编号。']}
 ]},
 breakdown:{title:['Your car breaks down','车子坏在路上'],intro:['The engine loses power. Make people safe before thinking about repairs.','车子突然失去动力。先照顾人员安全，再考虑维修。'],scene:'breakdown',sources:['breakdown','emergency'],steps:[
  jlGuideStep('Make the car visible','让其他车辆看见你','Switch on hazard lights and, if possible, move well clear of moving traffic. Stop the engine once safely parked.','打开危险警示灯；能安全移动时，尽量远离行进车流停车，再关闭发动机。'),
  jlGuideStep('Choose a safe waiting place','找到安全的等候位置','Your waiting place depends on traffic exposure. Use the situation tabs above for the guidance that fits where you stopped.','等候位置取决于周围车流危险程度。切换上方情况，查看与你停车位置相符的处理。'),
  jlGuideStep('Tell help where you are','说清位置，联系救援','Contact your roadside-assistance provider. Give the road, direction, nearest exit or landmark, registration and the problem. Check call-out and towing terms.','联系道路救援服务，说明道路、行驶方向、最近出口或地标、车牌和故障，并确认出勤与拖车安排。','My car has broken down on [road], travelling towards [direction].','我的车坏在［道路］，行驶方向是［方向］。')
 ],variants:[
  {id:'shoulder',label:['Clear of traffic','已远离车流'],note:['If the car is safely clear of traffic, wait inside with seatbelts fastened.','车辆已安全远离车流时，可在车内系好安全带等候。'],body:{1:['Stay belted inside if the vehicle is a safe distance from traffic. Keep hazard lights on while waiting.','车辆与车流有安全距离时，留在车内系好安全带，保持危险警示灯开启。']}},
  {id:'traffic',label:['Close to traffic','紧靠车流'],note:['Do not attempt roadside repairs beside moving traffic. If you cannot get off the road, call the incident response service on 131 170; immediate danger: 000.','不要在行进车流旁维修。无法驶离道路时可联系道路事故应急服务 131 170；有紧迫危险时拨打 000。'],body:{1:['If safe to exit, use the passenger side and wait well away from traffic. If leaving is unsafe, stay belted and call for help.','能安全下车时，从远离车流的乘客侧离开，远离道路等候；无法安全离开时，系好安全带并求助。']}},
  {id:'fire',label:['Smoke or fire','冒烟或起火'],note:['Immediate danger or fire: call 000. Move away if you can do so safely and follow emergency instructions.','起火或有紧迫危险时拨打 000。能安全离开时远离车辆，遵循应急人员指示。'],body:{1:['Move people away from the vehicle and traffic if safe. Do not return for belongings. Follow the emergency operator’s instructions.','在安全可行时，让人员远离车辆和车流，不返回取物，遵循应急接线员指示。']}}
 ]},
 minor:{title:['A small collision','发生轻微碰撞'],intro:['Two cars have bumped. Nobody appears injured.','两车发生碰擦，目前没有人表现出受伤。'],scene:'crash',sources:['crash','insurance'],steps:[
  jlGuideStep('Stop and check people','停车，确认人员情况','Stop immediately and check for injuries and danger. If anyone needs urgent help, call 000.','立即停车，确认是否有人受伤及是否有危险；需要紧急帮助时拨打 000。'),
  jlGuideStep('Exchange the essentials','交换必要资料','Exchange names, addresses, registration numbers and vehicle-owner names. Record the time, location and damage only when safe.','交换姓名、地址、车牌号码及车主姓名。安全时记录时间、地点和损坏情况。','Can we exchange our names, addresses and vehicle details?','我们可以交换姓名、地址和车辆资料吗？'),
  jlGuideStep('Keep a clear record','保存记录，联系保险公司','Keep photos and correspondence. Tell your insurer what happened; ask how repairs and any claim should proceed.','保存照片与往来记录，向保险公司说明经过，确认维修和理赔如何进行。')
 ]},
 injury:{title:['Someone is injured','事故中有人受伤'],intro:['At a collision, a person needs help. Safety and emergency assistance come first.','碰撞后有人需要帮助，先处理安全与紧急求助。'],scene:'crash',sources:['crash','emergency','tac'],urgent:['For immediate danger or urgent medical help, call 000.','有紧迫危险或需要紧急医疗帮助时，拨打 000。'],steps:[
  jlGuideStep('Stop and get help','停车并求助','Stop. Call 000 for an emergency and explain the location, hazards and whether anyone is injured.','停车。遇紧急情况拨打 000，说明位置、现场危险和受伤情况。','There has been a crash at [location]. Someone is injured.','［位置］发生交通事故，有人受伤。'),
  jlGuideStep('Assist without adding danger','在不增加危险的前提下协助','Help as you safely can and follow the emergency operator. Do not put yourself in moving traffic.','在安全能力范围内协助，并遵循接线员指示，不要让自己置身行进车流。'),
  jlGuideStep('Report and follow up','报告并跟进','If anyone is injured and police are not at the scene, report to the nearest police station. Keep incident details for treatment, TAC and your insurer.','有人受伤且警方未在场时，须向最近的警察局报告。保留事故资料，供就医、TAC 及保险跟进。')
 ]},
 property:{title:['You hit a parked car','碰到无人看管的车辆'],intro:['You damage a parked car and cannot find its owner.','损坏了停放的车辆，却找不到车主。'],scene:'crash',sources:['crash','insurance'],steps:[
  jlGuideStep('Stop and check','停车并确认情况','Stop and check for injury or further danger. Do not simply drive away.','停车，确认是否有人受伤或有进一步危险，不要直接驶离。'),
  jlGuideStep('Document and report','记录并报告','Record details safely. When property is damaged and neither its owner nor police is present, report to the nearest police station.','安全记录相关资料。财产受损且主人和警方均不在场时，须向最近的警察局报告。'),
  jlGuideStep('Keep the follow-up together','保存后续资料','Keep the report details and contact your insurer. Leaving a note does not replace the required police report.','保留报告资料并联系保险公司。留下纸条不能代替依法需要的警方报告。','I need to report damage to an unattended vehicle.','我需要报告一起无人看管车辆受损的事故。')
 ]},
 rental:{title:['A problem with a hire car','租来的车出了问题'],intro:['A warning light appears, or you notice damage during a rental.','租车途中出现警示灯，或发现车辆受损。'],scene:'insurance',sources:['hire','breakdown'],steps:[
  jlGuideStep('Stop safely and document','安全停车，记录情况','Stop safely if the car may be unsafe. Photograph the issue and check the condition report supplied at pickup.','车辆可能不安全时先安全停车。拍下问题，对照取车时的车况报告。'),
  jlGuideStep('Contact the rental company','联系租车公司','Use the rental company’s assistance number before arranging repairs or towing. Follow emergency advice first if there is immediate danger.','安排维修或拖车前，联系租车公司的援助电话；有紧迫危险时先求紧急帮助。','The hire car has a warning light. What assistance should I use?','租车出现了警示灯，我应使用什么援助服务？'),
  jlGuideStep('Check liability and charges','核对责任与费用','Check the contract’s excess and exclusions. Ask for an itemised damage bill and an opportunity to dispute a charge before a deduction.','核对合同中的自付额和除外责任。扣款前要求提供损坏明细账单及合理的异议机会。')
 ]},
 hook:{title:['Follow a Melbourne hook turn','看懂墨尔本钩形转弯'],intro:['At a signed hook-turn intersection, follow the sequence from left approach to right turn.','在有钩形转弯标志的路口，沿着图解看懂如何从左侧接近并完成右转。'],scene:'hook',sources:['hook'],steps:[
  jlGuideStep('Approach from the left','从左侧车道接近','Use a hook turn only where signed. Approach from the left lane and signal your right turn.','仅在有相应标志的路口使用钩形转弯，从左侧车道接近并打右转灯。'),
  jlGuideStep('Move into the waiting position','进入等候位置','On green, move into the left-side waiting position, keeping clear of pedestrian crossings and traffic.','绿灯时进入左侧等候位置，避开人行横道及其他交通。'),
  jlGuideStep('Wait for the new green','等目标道路方向亮绿灯','Wait until the lights for the road you are entering turn green. Check it is safe, then complete the turn.','等待将要进入的道路方向亮绿灯，确认安全后完成转弯。')
 ]},
 tram:{title:['Beyond the Free Tram Zone','离开电车免费区'],intro:['You board inside the free zone and will leave it during this journey.','在免费区内上车，但这趟行程会驶出免费区。'],scene:'ticket',sources:['myki','payments','contactless'],steps:[
  jlGuideStep('Look at the whole journey','看完整行程','A free starting stop does not make a trip outside the Free Tram Zone free. Check the destination.','起点免费，不代表驶出免费区的整趟行程免费，先确认终点。'),
  jlGuideStep('Use your payment method','使用选定的支付方式','Tap on before leaving the free zone using myki or a supported card or wallet. Check the reader confirms success.','驶离免费区前，使用 myki 或受支持的银行卡、手机钱包刷卡，并确认成功提示。'),
  jlGuideStep('Keep the same card or device','换乘也使用同一卡片或设备','When transferring with contactless, keep the same card on the same device. A phone, watch and physical card are separate payment methods.','使用非接触支付换乘时，继续使用同一设备上的同一张卡。手机、手表和实体卡属于不同支付方式。')
 ]},
 works:{title:['Trains replaced by buses','施工期间改乘接驳巴士'],intro:['Your usual rail section is closed for planned works.','平时乘坐的铁路区段因计划性施工关闭。'],scene:'replacement',sources:['works','tracker','metro'],steps:[
  jlGuideStep('Check the changed section','确认改变的是哪一段','Read the official disruption notice. Note the affected section, replacement stop and extra journey time.','查看官方中断通知，确认受影响区段、接驳站点，并预留额外时间。'),
  jlGuideStep('Find the replacement stop','找到接驳巴士站点','Follow replacement-bus signs. Confirm the destination and stopping pattern with staff before boarding.','跟随接驳巴士标志。上车前向工作人员确认方向及停站安排。','Where is the replacement bus for [destination]?','去［目的地］的接驳巴士在哪里？'),
  jlGuideStep('Recheck your connection','重新确认后续换乘','Use the current journey plan. Check the replacement tracker where available rather than relying on the normal train timetable.','按当前行程计划重新确认换乘；提供接驳追踪时可查看，不照搬平时的火车时刻表。')
 ]},
 sudden:{title:['Your train is cancelled','火车临时取消'],intro:['The platform display changes while you are waiting.','等车时，站台显示屏上的班次突然取消。'],scene:'replacement',sources:['works','metro'],steps:[
  jlGuideStep('Read the latest update','先看最新消息','Check the station display, announcements and official disruption information.','查看站台显示、广播和官方中断信息。'),
  jlGuideStep('Ask what is running','问清仍有哪些选择','Ask staff about the next service, another route or any replacement arrangement. Do not assume a bus has been arranged.','向工作人员确认下一班、其他路线或接驳安排，不默认已经有接驳巴士。','Is there another way to reach [destination] tonight?','今晚还有其他方式到［目的地］吗？'),
  jlGuideStep('Choose a workable plan','选一条能实际完成的路线','Check the alternative’s boarding point and final connection. Allow extra time and let anyone waiting know your new arrival plan.','确认替代路线的上车点及最后一段换乘，预留时间，并告知等你的人新的到达安排。')
 ]},
 accessible:{title:['The replacement is not accessible','接驳车辆不适合你的需求'],intro:['A replacement vehicle cannot safely carry you or your mobility aid.','接驳车辆无法安全满足你或助行设备的需要。'],scene:'replacement',sources:['access'],steps:[
  jlGuideStep('Explain the access need','说明通行需求','Tell station staff or call Transport Victoria about the assistance you need. For planned works, contact them before travelling.','向站务人员或 Transport Victoria 说明援助需求；计划性施工可提前联系。'),
  jlGuideStep('Ask for an alternative','请求替代安排','Ask staff to arrange suitable alternative travel when the replacement is inaccessible. Confirm that your mobility aid can be accommodated safely.','接驳车辆不适用时，请工作人员安排合适的替代交通，并确认助行设备可以安全搭载。','This replacement is not accessible for me. Can you arrange an alternative?','这辆接驳车不适合我的无障碍需求，可以安排替代交通吗？'),
  jlGuideStep('Confirm before moving','出发前核对安排','Confirm pickup point, destination and vehicle suitability with staff. Keep the arrangement details available.','向工作人员确认上车点、目的地与车辆适用性，并保留安排资料。')
 ]},
 missed:{title:['You missed your stop','坐过站了'],intro:['The tram has already passed the stop you wanted.','电车已经经过了原本打算下车的站。'],scene:'ticket',sources:['metro','safety'],steps:[
  jlGuideStep('Stay aboard until a safe stop','等到安全站点再下车','Wait for the next stop. Do not force doors or enter the driver’s area.','等到下一站，不强行开门，也不进入司机操作区域。'),
  jlGuideStep('Check the return direction','确认返回方向','Read destination displays and the route plan before crossing to another stop. Use a safe crossing.','查看目的地显示与路线图，再通过安全过街点前往另一方向的站点。'),
  jlGuideStep('Ask when unsure','不确定时开口询问','Confirm where to board for your destination rather than relying on a matching stop name.','确认去目的地应在哪边上车，不只依赖相同的站名。','Which stop should I use to go back to [place]?','返回［地点］应在哪个站点上车？')
 ]},
 boarding:{title:['A crowded doorway','车门口很拥挤'],intro:['Passengers are getting off as you prepare to board.','准备上车时，乘客正在从车门下车。'],scene:'boarding',sources:['priority'],steps:[
  jlGuideStep('Leave the doorway clear','让出下车通道','Wait beside the doorway and let people leave before boarding.','在车门两侧等候，让乘客先下车。'),
  jlGuideStep('Move beyond the entrance','上车后向车厢内移动','Keep the doorway and aisle clear, including your bags.','保持车门及过道畅通，也让行李避开通道。'),
  jlGuideStep('Make space for access','为有需要的乘客让出空间','Keep allocated mobility spaces accessible and make room when someone needs them.','保持指定助行区域可用，有乘客需要时让出空间。','Would you like some space here?','需要我把这里让出来吗？')
 ]},
 inspection:{title:['An officer checks your ticket','遇到查票'],intro:['An authorised officer asks how you paid for this trip.','授权查票员询问你本次行程的支付方式。'],scene:'payment',sources:['contactless','students'],steps:[
  jlGuideStep('Show what you used','出示实际使用的支付方式','Present the myki, card or device used for this journey and follow the officer’s instructions.','出示本次行程实际使用的 myki、银行卡或设备，并遵循查票员指示。'),
  jlGuideStep('Have concession proof ready','准备优惠资格证明','If travelling on a concession, carry its required proof. International-student status alone is not enough.','使用优惠票时携带所需证明；仅有留学生身份并不足以证明资格。'),
  jlGuideStep('Explain any payment issue','说明遇到的支付问题','Explain calmly if you think a tap failed. If issued a notice, keep it and read the official review process.','认为刷卡失败时，平静说明经过。若收到通知，保存资料并查看正式复核流程。','I may have had a problem tapping on. Could you explain the next steps?','我上车刷卡可能出了问题，可以说明后续怎么处理吗？')
 ]},
 declined:{title:['The reader rejects your card','读卡器拒绝付款'],intro:['The reader shows an error instead of confirming your tap.','读卡器显示错误，没有提示刷卡成功。'],scene:'payment',sources:['reader','contactless'],steps:[
  jlGuideStep('Read the exact message','先看具体提示','A reader error is not a successful tap. Different messages need different fixes.','错误提示不代表刷卡成功，不同提示对应不同处理。'),
  jlGuideStep('Try the matching fix','按提示处理','Use the message tabs above to see what to do. Ask staff if you still cannot obtain a valid ticket.','切换上方提示，查看对应操作；仍无法取得有效车票时向工作人员求助。'),
  jlGuideStep('Check success before travelling','确认成功后再出发','Wait for the reader confirmation. Once a payment method works, keep that same card or device for the journey.','等待读卡器成功提示。选定可用的支付方式后，行程中继续使用同一张卡或同一台设备。')
 ],variants:[
  {id:'again',label:['Tap again','请重刷'],note:['Hold one card near the reader for longer. Keep other cards away.','让单张卡在读卡器附近稍作停留，并移开其他卡片。'],body:{1:['Hold one card or device steadily near the reader and check the result.','将一张卡或一台设备稳稳靠近读卡器，并确认结果。']}},
  {id:'declined',label:['Card declined','卡片被拒'],note:['Try a different supported physical or digital card. Do not assume the first tap paid for travel.','尝试另一张受支持的实体卡或数字银行卡，不默认第一次已支付。'],body:{1:['Use another supported card or wallet, or arrange myki travel. Ask staff if you need help.','使用另一张受支持的卡或钱包，或改用 myki；需要帮助时询问工作人员。']}},
  {id:'clash',label:['Multiple cards','卡片冲突'],note:['Remove the card from your wallet and keep other cards away from the reader.','从钱包取出一张卡，让其他卡片远离读卡器。'],body:{1:['Tap one card only. The multiple-card error means the payment was not processed.','只刷一张卡，多卡冲突提示表示付款尚未处理。']}}
 ]},
 phone:{title:['Your phone runs out of power','手机没电了'],intro:['You planned to travel using a phone wallet, but the phone is unavailable.','原计划用手机钱包乘车，但手机现在无法使用。'],scene:'payment',sources:['contactless','reader'],steps:[
  jlGuideStep('Pause before changing cards','换卡前先停一下','If you have already tapped on, a physical card or watch is not the same payment method as your phone.','已经刷手机上车时，实体卡或手表并不是同一种支付方式。'),
  jlGuideStep('Get help for the current trip','请工作人员协助当前行程','Tell staff what you used and where you tapped on. Do not assume switching devices will close that trip.','告诉工作人员你使用的设备和刷卡位置，不默认换一台设备就能结束原行程。','My phone has no power. I tapped on with Apple Pay at [station].','我的手机没电了，之前在［车站］用 Apple Pay 刷卡上车。'),
  jlGuideStep('Prepare the next journey','为下一段行程做好准备','Before a new trip, arrange a working supported card, charged device or myki. Keep its payment method consistent.','开始新的行程前，准备可用的银行卡、有电的设备或 myki，并在该行程保持支付方式一致。')
 ]},
 night:{title:['A disruption late at night','深夜遇到交通中断'],intro:['Your planned connection is no longer running.','原本计划的换乘已无法乘坐。'],scene:'night',sources:['night','safety','metro'],steps:[
  jlGuideStep('Wait somewhere supported','在便于求助的位置等候','Use a well-lit area near staff or a marked safety zone where available. Ask staff or use a help point.','尽量在有照明、靠近工作人员或设有安全区的位置等候，可向工作人员或求助点求助。'),
  jlGuideStep('Check the last workable route','确认仍能完成的路线','Check current services and final connections. Ask whether a replacement is arranged; do not assume one is available.','确认当前班次和最后一段换乘，询问是否安排接驳，不默认一定有替代车辆。'),
  jlGuideStep('Confirm your backup plan','确认备用安排','If using a taxi or rideshare, confirm the booking and pickup location. Share your new plan with someone you trust.','改乘出租车或网约车时，确认预约及上车位置，并把新安排告知可信任的人。','What services are still running to [destination]?','现在还有哪些班次能到［目的地］？')
 ]},
 unsafe:{title:['You need help on board','乘车时感到不安全'],intro:['Something on board makes you feel unsafe or someone needs urgent help.','车厢内的情况让你感到不安全，或有人需要紧急帮助。'],scene:'night',sources:['safety','emergency'],urgent:['Immediate danger: call 000.','有紧迫危险时拨打 000。'],steps:[
  jlGuideStep('Move towards support','向便于求助的位置移动','Move away from a threatening situation if safe. Seek staff, a driver or a nearby help point.','安全时远离威胁，寻找工作人员、司机或附近求助点。'),
  jlGuideStep('Explain where help is needed','说清需要帮助的位置','Use an emergency assist button where available. Describe the route, station or vehicle location and what is happening.','有紧急求助按钮时可使用，说明线路、车站或车辆位置及发生的情况。','We need assistance on this service near [station].','这班车在［车站］附近需要援助。'),
  jlGuideStep('Use the right reporting channel','使用合适的报告渠道','For immediate danger call 000. For non-urgent unwanted or antisocial behaviour, see Victoria Police’s STOP IT reporting information; it is not monitored live.','紧迫危险拨打 000。非紧急的不当或反社会行为，可查看警方 STOP IT 报告信息；该渠道不是实时监控。')
 ]}
};
