// User-authored demonstration scripts. These are prepared responses, not live AI.
const askScripts = {
main:{turns:[
["I'm getting hungry. Anything good to eat around here?",{text:'Try <strong>The Borek Shop</strong> in the Dairy Produce Hall! They serve savoury Turkish pastries.',location:'Dairy Produce Hall, DH 93–96'}],
['Anything vegetarian under $10?',{text:'Their <strong>cheese & spinach borek</strong> could be a good choice! Check the current price at the stall.'}],
["Actually, I can't have dairy.",{text:'Their <strong>spicy potato borek</strong> might work! Just check with the vendor that it’s dairy-free.'}],
['How do I ask that?',{text:'You can say:',phrase:'Hi, does this contain any dairy?',listen:['Hi, does this contain any dairy?']}]
]},
start:{intro:{text:'Here are some great places to start!',cards:[['food','Fruit & Vegetable Sheds','Explore fresh local produce.'],['food','Dairy Produce Hall','Discover local food and snacks.'],['save','Shopping Sheds','Browse gifts and souvenirs.']],map:'View market map',focus:'Market overview'},turns:[
["I've only got 20 minutes. What would you recommend?",{text:'Try the hot jam doughnuts at <strong>American Doughnut Kitchen</strong>! It’s a Melbourne favourite.',location:'Queen Street, outside F Shed'}],
["How do I tell which queue is for ordering and which is for pickup?", {"text": "Check for order and pickup signs. If it is unclear, ask before joining \u2014 I cannot confirm how the stall is arranging its queue today.", "phrase": "Hi, is this the queue to order?", "listen": ["Hi, is this the queue to order?"]}]
]},
food:{intro:{text:'Here are two popular picks!',cards:[['food','The Borek Shop','Savoury Turkish pastries.','Dairy Produce Hall, DH 93–96'],['food','American Doughnut Kitchen','Hot jam doughnuts.','Queen Street, outside F Shed']]},turns:[
['Anything vegetarian and cheap?',{text:'Try the <strong>cheese & spinach borek</strong> at The Borek Shop!<br><br>It’s a budget-friendly option, though prices may vary.'}],
["If I pay by card, could it cost more than the displayed price?", {"text": "Check any payment notices and ask before paying. I cannot confirm this stall\u2019s current card surcharge or minimum spend. You can ask:", "phrase": "Is there a card surcharge or a minimum spend?", "listen": ["Is there a card surcharge or a minimum spend?"]}]
]},
shopping:{intro:{text:'Here are some useful shopping phrases!',cards:[['ask','“Could you do a deal if I buy two?”','Ask politely about a multi-buy discount. The trader may say no.'],['ask','“Can I grab one of these, please?”','A casual way to order. Here, grab means buy, not take without asking.'],['ask','“No worries, cheers!”','A friendly way to say that’s okay, thanks — useful if a discount is declined.']],listen:['Could you do a deal if I buy two?','Can I grab one of these, please?','No worries, cheers!']},turns:[
["Is it rude to ask for a discount when the price is already marked?", {"text": "Treat the marked price as the asking price, not an invitation to bargain. If you are buying several items, you could politely ask once about a bundle deal. If the trader says the price is fixed, accept that rather than pushing.", "phrase": "Could you do a deal if I buy two?", "listen": ["Could you do a deal if I buy two?"]}],
["What if they say no — how do I avoid making it awkward?", {"text": "A simple, friendly reply is enough. You can still buy at the marked price, or thank them and leave it. You do not need to keep negotiating.", "phrase": "No worries, cheers!", "listen": ["No worries, cheers!"]}],
["Can I pick the fruit myself, or should I wait for the vendor?", {"text": "Do not assume every stall works the same way. Look for instructions or ask before handling the produce. This checks whether you can choose your own or the vendor serves you.", "phrase": "Is it okay to choose my own, or would you prefer to pick them for me?", "listen": ["Is it okay to choose my own, or would you prefer to pick them for me?"]}]
]},
essentials:{intro:{text:'Here’s some useful market information!',cards:[['pin','Toilets',"Queen Street & Queen’s Food Hall."],['ask','Information Hub','F Shed, Queen Street.'],['time','Saturday Market Hours','6 AM–4 PM.']],map:'View market map',focus:'Market overview'},turns:[
["I'm at the market entrance opposite Tram Stop 7. Where's the toilet?",{text:'There are public toilets along <strong>Queen Street</strong>.',map:'View toilets on map',focus:'Public toilets · Queen Street'}],
['Where can I ask someone for help?',{text:'Visit the <strong>Information Hub</strong> at F Shed Shop 1, on Queen Street.<br><br>Staff can help with directions and market information.',map:'View location',focus:'Information Hub · F Shed Shop 1, Queen Street'}]
]}
};
const askTopicIds=['start','food','shopping','essentials'];

// Card branches supplement the scripted conversation without advancing its turn.
const askPlaces={
 'The Borek Shop':{image:'borek',alt:'The Borek Shop at Queen Victoria Market',text:'<strong>The Borek Shop</strong> makes savoury Turkish pastries at the market. Ask the vendor about today’s fillings, prices and ingredients before ordering.',location:'Dairy Produce Hall, DH 93–96'},
 'American Doughnut Kitchen':{image:'doughnut',alt:'American Doughnut Kitchen market van',text:'<strong>American Doughnut Kitchen</strong> is known for its hot jam doughnuts. Look for the doughnut van on Queen Street, outside F Shed.',location:'Queen Street, outside F Shed'},
 'Fruit & Vegetable Sheds':{image:'produce',alt:'Fresh produce at Mr Organics, Queen Victoria Market',text:'Explore the <strong>Fruit & Vegetable Sheds</strong> for fresh produce. Compare the displayed prices and ask a vendor for the quantity you need.',location:'Fruit & Vegetable Sheds'},
 'Dairy Produce Hall':{image:'dairy',alt:'Big Vic Deli in the Dairy Produce Hall',text:'The <strong>Dairy Produce Hall</strong> brings together delis and food stalls. Browse the counters for a snack, and ask about ingredients if you have a dietary requirement.',location:'Dairy Produce Hall'},
 'Shopping Sheds':{image:'shopping',alt:'Live in Art stall at Queen Victoria Market',text:'Browse the <strong>Shopping Sheds</strong> for gifts and souvenirs. Ask the trader about the item and its price before buying.',location:'Shopping Sheds'}
};
askScripts.main.turns[0][1].recommend='The Borek Shop';
askScripts.main.turns[1][1].recommend='The Borek Shop';
askScripts.main.turns[2][1].recommend='The Borek Shop';
askScripts.start.turns[0][1].recommend='American Doughnut Kitchen';
askScripts.food.turns[0][1].recommend='The Borek Shop';
