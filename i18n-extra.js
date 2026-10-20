/* Chinese for strings added after the main table, plus screen-reader labels that embed a place name.
   Place names and street addresses stay in English: they match signs, maps and booking sites. */
Object.assign(appZh,{
 'Melbourne · Carlton':'墨尔本 · Carlton',
 'More tools: open Journey guides':'更多工具：打开指南旅程',
 'Current place. Swipe left or press the arrow key for the next stop.':'当前地点。向左滑动或按左方向键，前往下一站。',
 'Available on the café’s retail shelves. Ask staff to grind beans for your brewing method.':'可在咖啡店零售货架购买，也可请店员按你的冲煮方式磨豆。',
 'Café, retail and visitor information ↗':'咖啡店、零售与到访信息 ↗',
 'Old Quad visits and exhibitions ↗':'Old Quad 参观与展览 ↗',
 'Garden information and access ↗':'花园信息与开放时间 ↗',
 'Seven Seeds, historic arcades and a library finish.':'Seven Seeds 咖啡、历史拱廊，最后到图书馆。',
 'City Baths outside, then a short Potter gallery visit.':'先看 City Baths 外观，再短暂参观 Potter 美术馆。',
 'Choose a topic or tap to begin':'选择话题，或点击开始',
 'Route estimates':'路线估算',
 'Map canvas. Drag a place onto a route segment to insert it.':'地图画布。把地点拖到路线段上即可插入。',
 'Route and nearby places':'路线与附近地点',
 'Your route order':'你的路线顺序',
 'Close trip summary':'关闭行程总结',
 'Back to trip':'返回行程'
});
{
 const base=appTranslate;
 const isPlace=name=>typeof places==='object'&&Object.values(places).some(p=>p.name===name||p.short===name);
 const patterns=[
  [/^Remove (.+)$/,n=>`移除 ${n}`],
  [/^Add (.+)$/,n=>`添加 ${n}`],
  [/^Add (.+) to end of route$/,n=>`把 ${n} 添加到路线末尾`],
  [/^About (.+)$/,n=>`关于 ${n}`],
  [/^Reorder (.+)\. Press space, (?:use )?arrow(?: key)?s(?:,)? then Enter\.$/,n=>`调整 ${n} 的顺序：按空格键，用方向键移动，再按回车。`],
  [/^Reorder (.+)\. Press space, arrows, then Enter\.$/,n=>`调整 ${n} 的顺序：按空格键，用方向键移动，再按回车。`],
  [/^Drag (.+) onto the map, or tap for details$/,n=>`将 ${n} 拖到地图上，或点按查看详情`],
  [/^Show delete button for (.+)$/,n=>`显示 ${n} 的删除按钮`],
  [/^Explore (.+)$/,n=>`探索 ${n}`]
 ];
 appTranslate=function(s){
  const out=base(s);if(out!==s||!s)return out;
  for(const [re,fn] of patterns){const m=s.match(re);if(m&&isPlace(m[1]))return fn(m[1])}
  const reason=s.match(/^(.+?)\. (.+)$/);if(reason&&isPlace(reason[1])){const r=base(reason[2]);if(r!==reason[2])return `${reason[1]}。${r}`}
  return s;
 };
}
