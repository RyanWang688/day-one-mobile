// Demo mode for embedding: ?demo=home|explore|journey|ar|ask|scenario opens one feature and keeps the user inside it.
// Without the parameter the app behaves exactly as before.
(()=>{
const key=new URLSearchParams(location.search).get('demo');
const scopes={
 home:{label:'Home',tab:'home',screens:['home','scenarioSelect','scenarioIntro','scenarioChat','scenarioComplete','savedTips'],start(){state.tab='home';go('home')}},
 journey:{label:'Journey Tree',tab:'simulate',screens:[],start(){state.tab='simulate';state.screen='home';render()}},
 explore:{label:'Short Trip',tab:'explore',screens:['explore','plan','picker','mapPicker','compare','preview','edit','spot','navigation','complete'],start(){state.tab='explore';state.inlineEditing=false;go('plan')}},
 ar:{label:'AR Lens',tab:'home',screens:['arLens'],start(){state.tab='home';arStartScan()}},
 ask:{label:'Ask This Place',tab:'home',screens:['askPlace'],start(){state.tab='home';state.askPlaceId='market';state.askTripReturn=null;go('askPlace')}},
 scenario:{label:'Scenario practice',tab:'home',screens:['scenarioSelect','scenarioIntro','scenarioChat','scenarioComplete'],start(){state.tab='home';go('scenarioSelect')}}
};
const scope=scopes[key];if(!scope)return;
document.documentElement.classList.add('demo-mode');
const style=document.createElement('style');
style.textContent='.demo-mode #nav{display:none!important}.demo-mode body{--nav-height:0px}';
document.head.append(style);
const inScope=()=>scope.tab==='simulate'?state.tab==='simulate':state.tab!=='simulate'&&scope.screens.includes(state.screen);
const baseRender=window.render;let restarting=false;
// Any attempt to leave the feature (another tab, Home, Account…) restarts the feature instead.
window.render=function(reset){
 if(!restarting&&!inScope()){restarting=true;try{scope.start()}finally{restarting=false}toast(`This demo covers ${scope.label} only — choose another feature above.`);return}
 return baseRender(reset);
};
scope.start();
})();
