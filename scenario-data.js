const scenarioScripts = {
  "gp": {
    "id": "gp",
    "title": [
      "GP Clinic",
      "GP 诊所"
    ],
    "actor": [
      "Receptionist",
      "接待员"
    ],
    "user": [
      "Patient",
      "就诊者"
    ],
    "situation": [
      "You've just arrived in Melbourne and haven't used a GP clinic before. You walk in without an appointment and don't know how bookings, insurance or fees work.",
      "你刚到墨尔本，从未去过当地的 GP 诊所。你没有预约就走进诊所，也不了解预约、保险和收费流程。"
    ],
    "stages": [
      [
        "At the reception",
        "到前台了解预约"
      ],
      [
        "Understanding cover and costs",
        "了解保险与费用"
      ],
      [
        "Booking your first visit",
        "预约首次就诊"
      ]
    ],
    "hints": [
      [
        "Ask whether you can see a doctor today.",
        "询问是否能当天就诊。"
      ],
      [
        "Ask about availability and explain your insurance.",
        "询问可预约时段，并说明你的保险情况。"
      ],
      [
        "Confirm the booking and what to bring.",
        "确认预约，了解需要携带的资料。"
      ]
    ],
    "events": [
      {
        "stage": 0,
        "role": "actor",
        "text": "Hi there! Have you got an appointment?",
        "zh": "你好！你有预约吗？"
      },
      {
        "stage": 0,
        "role": "user",
        "text": "No, I haven't. I've never been to a GP here before. Can I see someone today?",
        "zh": "没有。我还没在这里看过 GP，今天可以看医生吗？"
      },
      {
        "stage": 0,
        "role": "actor",
        "text": "We're fully booked today, but tomorrow at 11:20 is available. I can book you in. First, do you have a Medicare card?",
        "zh": "今天已经约满了，但明天 11:20 还有空位，我可以帮你预约。先问一下，你有 Medicare 卡吗？",
        "tip": {
          "title": [
            "Booking ahead",
            "提前预约"
          ],
          "body": [
            "You explained that you had no appointment. Many GP clinics use appointments; check availability before going.",
            "你刚才说明了自己没有预约。很多 GP 诊所采用预约制，出发前先确认是否有空位。"
          ]
        },
        "tipId": "gp:2"
      },
      {
        "stage": 1,
        "role": "user",
        "text": "I'm not sure what Medicare is. I'm an international student and I've only just arrived.",
        "zh": "我不太清楚 Medicare 是什么。我是国际学生，刚到澳大利亚。"
      },
      {
        "stage": 1,
        "role": "actor",
        "text": "Medicare is Australia's public health insurance scheme. Many international students have a different cover called OSHC. It helps with healthcare costs.",
        "zh": "Medicare 是澳大利亚的公共医疗保险制度。很多国际学生使用另一种叫 OSHC 的保险，它可以帮助支付医疗费用。"
      },
      {
        "stage": 1,
        "role": "user",
        "text": "I haven't heard of OSHC before. How can I find out if I have it?",
        "zh": "我之前没听说过 OSHC，怎么确认自己有没有呢？"
      },
      {
        "stage": 1,
        "role": "actor",
        "text": "It stands for Overseas Student Health Cover. Look for insurance emails or documents from when you arranged your studies. If you can't find them, your education provider may be able to help.",
        "zh": "它的全称是海外学生医疗保险。可以找找办理留学时的保险邮件或文件；找不到的话，可以请学校协助查询。",
        "tip": {
          "title": [
            "Find your cover",
            "先找到自己的保险"
          ],
          "body": [
            "OSHC means Overseas Student Health Cover. Your policy documents identify your insurer; your education provider may help you find them.",
            "OSHC 是海外学生医疗保险。保险文件里会写明保险公司；找不到时，可以请学校协助查询。"
          ]
        },
        "tipId": "gp:8"
      },
      {
        "stage": 1,
        "role": "user",
        "text": "I'll have a look. Before I book, how much would I need to pay?",
        "zh": "我会找找。预约之前，我想先问一下需要付多少钱？"
      },
      {
        "stage": 1,
        "role": "actor",
        "text": "Here, a standard visit is $95, paid on the day. If you have OSHC, your insurer can tell you how much you can claim back. It may not cover the full fee.",
        "zh": "我们这里普通问诊是 95 澳元，当天支付。如果你有 OSHC，可以向保险公司确认能报销多少，不一定能覆盖全部费用。"
      },
      {
        "stage": 1,
        "role": "user",
        "text": "What does 'claim back' mean? Do I pay you first?",
        "zh": "“Claim back”是什么意思？是我先付给你们吗？"
      },
      {
        "stage": 1,
        "role": "actor",
        "text": "Yes, at this clinic you pay first, then ask your insurer to reimburse you. Keep the receipt and check their claim instructions.",
        "zh": "是的，我们诊所需要先付款，再向保险公司申请报销。保留收据，并查看保险公司的报销说明。",
        "tip": {
          "title": [
            "Check the fee and keep the receipt",
            "先问费用，保留收据"
          ],
          "body": [
            "Insurance may not cover the full fee. Confirm the clinic’s payment process and your insurer’s benefit, then keep the receipt for a claim. The $95 here is a scenario example.",
            "有保险也可能需要自付差额。先确认诊所的付款方式和保险报销额，再保留收据用于申请报销。这里的 95 澳元是场景示例。"
          ]
        },
        "tipId": "gp:12"
      },
      {
        "stage": 2,
        "role": "user",
        "text": "Got it. I'd like to book tomorrow at 11:20. What do you need from me?",
        "zh": "明白了。我想预约明天 11:20，需要提供什么资料？"
      },
      {
        "stage": 2,
        "role": "actor",
        "text": "I'll take your name and contact details. Please arrive ten minutes early with your ID and any insurance details you've found. You're booked for tomorrow at 11:20.",
        "zh": "我会登记你的姓名和联系方式。请提前十分钟到达，带上身份证明和找到的保险资料。已经为你预约明天 11:20。"
      },
      {
        "stage": 2,
        "role": "user",
        "text": "Thank you. This is all new to me, so that really helps.",
        "zh": "谢谢，这些对我来说都很陌生，你解释之后清楚多了。"
      },
      {
        "stage": 2,
        "role": "actor",
        "text": "No worries! See you tomorrow.",
        "zh": "不客气！明天见。"
      }
    ],
    "expressions": [
      [
        "I’ve never been to a GP here before.",
        "Let staff know this is your first time, so they can explain the process.",
        "告诉工作人员这是你第一次来，请他们解释流程。"
      ],
      [
        "I’m not sure what that means.",
        "Ask for an unfamiliar term to be explained.",
        "听到陌生名词时，请对方解释。"
      ],
      [
        "Claim back",
        "Apply to your insurer for reimbursement after paying a cost.",
        "付款后向保险公司申请报销。"
      ],
      [
        "Gap",
        "The difference between a fee and the insurance benefit, which you may need to pay yourself.",
        "收费与保险报销额之间，可能需要自己承担的差额。"
      ]
    ],
    "recap": [
      "You learned how to book a GP visit, asked what Medicare and OSHC mean, checked fees and reimbursement, and confirmed what to bring.",
      "你从不了解流程开始，学会了如何预约，询问了 Medicare 与 OSHC 的含义，确认了费用、报销方式和就诊准备。"
    ],
    "know": [
      "Many GP clinics require appointments in advance. Consultation fees and OSHC arrangements vary between clinics.",
      "很多 GP 诊所需要提前预约。问诊费用和 OSHC 安排因诊所而异。"
    ],
    "image": 0,
    "retiredTips": [
      {
        "index": 6,
        "tip": {
          "title": [
            "It’s okay to ask",
            "不懂就直接问"
          ],
          "body": [
            "You said you were unfamiliar with Medicare. Asking what a term means helps staff explain the right next step.",
            "你刚才说明自己不了解 Medicare。遇到陌生名词，可以直接请对方解释，不需要假装已经知道。"
          ]
        }
      },
      {
        "index": 10,
        "tip": {
          "title": [
            "Cover doesn’t always mean free",
            "有保险不等于全免"
          ],
          "body": [
            "You checked the cost before confirming. Ask about both the clinic’s fee and your insurance benefit; you may pay a difference. The $95 here is a scenario example.",
            "你在确认预约前询问了费用。诊所收费与保险报销额可能不同，差额可能需要自付。这里的 95 澳元是场景示例。"
          ]
        }
      },
      {
        "index": 17,
        "tip": {
          "title": [
            "First-visit preparation",
            "首次就诊前确认准备事项"
          ],
          "body": [
            "You asked what to bring. Confirm arrival time, identification and insurance information when booking a first visit.",
            "你刚才询问了需要做哪些准备。第一次就诊，可以在预约时确认到达时间、身份证明和保险资料。"
          ]
        }
      }
    ]
  },
  "rental": {
    "id": "rental",
    "title": [
      "Rental Inspection",
      "租房看房"
    ],
    "actor": [
      "Real Estate Agent",
      "房产中介"
    ],
    "user": [
      "Prospective tenant",
      "看房者"
    ],
    "situation": [
      "It’s your first rental inspection in Melbourne. You’re unsure what is included, what it costs or how to apply.",
      "这是你第一次在墨尔本看房，你还不清楚包含哪些设施、要付哪些费用，以及如何申请。"
    ],
    "stages": [
      [
        "Looking around",
        "到场看房"
      ],
      [
        "Checking the costs",
        "确认费用"
      ],
      [
        "Applying for the property",
        "了解申请"
      ]
    ],
    "events": [
      {
        "stage": 0,
        "role": "actor",
        "text": "Hi! Here for the inspection? Come on in.",
        "zh": "你好！来看房的吗？请进。"
      },
      {
        "stage": 0,
        "role": "user",
        "text": "Thanks! It's my first inspection. Is the furniture I can see included?",
        "zh": "谢谢！这是我第一次看房。眼前这些家具也包括在内吗？"
      },
      {
        "stage": 0,
        "role": "actor",
        "text": "This one is unfurnished. The furniture is just for display, but the oven and dishwasher stay. Have a look around, and ask me if anything is unclear.",
        "zh": "这套房不带家具，家具只是展示用的，但烤箱和洗碗机会留下。 你可以四处看看，有不清楚的地方就问我。",
        "tip": {
          "title": [
            "Check what stays",
            "确认哪些物品会留下"
          ],
          "body": [
            "The furniture you see may be for display. Ask what is included rather than assuming it comes with the property.",
            "看房时看到的家具可能只是展示品。主动确认包含哪些物品，不要默认都会留下。"
          ]
        },
        "tipId": "rental:4"
      },
      {
        "stage": 1,
        "role": "user",
        "text": "The listing says $520 a week. Is that everything I'd pay?",
        "zh": "房源上写每周 520 澳元，这就是全部费用吗？"
      },
      {
        "stage": 1,
        "role": "actor",
        "text": "That's the rent for this property. Electricity and internet are separate, and there's also a bond. I'll send you the cost breakdown.",
        "zh": "那是这套房的租金，电费和网络费另付，另外还需要押金。我可以把费用明细发给你。"
      },
      {
        "stage": 1,
        "role": "user",
        "text": "What's a bond? Is it another fee?",
        "zh": "Bond 是什么？是另一笔费用吗？"
      },
      {
        "stage": 1,
        "role": "actor",
        "text": "It's a security deposit, not extra rent. Before applying, check the amount and how it's handled in the rental information.",
        "zh": "它是作为担保的押金，不是额外租金。申请之前，先看租赁资料里的具体金额和办理方式。",
        "tip": {
          "title": [
            "Look beyond the weekly rent",
            "别只看每周租金"
          ],
          "body": [
            "You asked about the total cost. Request a breakdown of rent, separate bills and bond before deciding. The $520 here is a scenario example.",
            "你刚才询问了总费用。决定之前，索取租金、额外账单和押金的明细。这里的 520 澳元是场景示例。"
          ]
        },
        "tipId": "rental:8"
      },
      {
        "stage": 2,
        "role": "user",
        "text": "I'd like to apply, but I've never rented in Australia. Where do I start?",
        "zh": "我想申请，但从没在澳大利亚租过房，应该从哪里开始？"
      },
      {
        "stage": 2,
        "role": "actor",
        "text": "Use the application link on the listing. If you don't have local rental history, ask which other references or supporting documents we can accept.",
        "zh": "从房源页面的申请链接进入。如果没有本地租房记录，可以问我们接受哪些其他推荐人信息或证明材料。"
      },
      {
        "stage": 2,
        "role": "user",
        "text": "Could you send me that list and the full costs before I apply?",
        "zh": "可以在我申请前，把资料清单和完整费用发给我吗？"
      },
      {
        "stage": 2,
        "role": "actor",
        "text": "Absolutely. Have a read, and let me know if anything isn't clear.",
        "zh": "当然。先看一看，有不清楚的地方再告诉我。",
        "tip": {
          "title": [
            "Ask for the document list",
            "先问申请资料清单"
          ],
          "body": [
            "If you have no local rental history, explain that and ask which alternative documents the agent accepts. An application is not a guarantee of approval.",
            "没有本地租房记录时，直接说明，并询问中介接受哪些替代材料。提交申请并不代表一定获批。"
          ]
        },
        "tipId": "rental:12"
      }
    ],
    "expressions": [
      [
        "Does it come furnished?",
        "Asking whether furniture is included.",
        "询问是否包含家具。"
      ],
      [
        "Does that include bills?",
        "Asking whether utilities are covered by the rent.",
        "询问租金是否包含水电等费用。"
      ],
      [
        "Bond",
        "Money held as security during a tenancy.",
        "租期内作为担保保管的一笔钱，即押金。"
      ],
      [
        "Rental history",
        "Information about your previous rental arrangements.",
        "你之前的租房经历和记录。"
      ]
    ],
    "recap": [
      "You checked what is included, asked about costs and bond, and found out how to apply without local rental history.",
      "你确认了家具与设施、费用和押金，并了解了没有本地租房记录时如何申请。"
    ],
    "know": [
      "In Victoria, rental bonds are generally lodged with the Residential Tenancies Bond Authority (RTBA). Check the property's condition, rental costs and lease terms before committing.",
      "维州租房押金通常交由 RTBA 保管。决定租房前，应检查房屋状况、费用及租约条款。"
    ],
    "image": 1
  },
  "restaurant": {
    "id": "restaurant",
    "title": [
      "Dining at a restaurant",
      "餐厅用餐"
    ],
    "actor": [
      "Restaurant staff",
      "餐厅服务员"
    ],
    "user": [
      "Diner",
      "顾客"
    ],
    "situation": [
      "It’s Sunday. You and a friend visit a Melbourne restaurant without a booking. You can order food, but aren’t sure about the service, extra charges or paying the bill.",
      "周日，你和朋友没订位就来到墨尔本一家餐厅。你能正常点餐，但还不熟悉服务方式、额外收费和结账习惯。"
    ],
    "stages": [
      [
        "Arriving and ordering",
        "入座与点餐"
      ],
      [
        "Checking extra charges",
        "确认额外收费"
      ],
      [
        "Paying the bill",
        "结账与小费"
      ]
    ],
    "events": [
      {
        "stage": 0,
        "role": "actor",
        "text": "Hi! Table for two? Have you booked?",
        "zh": "你好，两位吗？有订位吗？"
      },
      {
        "stage": 0,
        "role": "user",
        "text": "No booking. Is there a table available, or should we wait?",
        "zh": "没有订位。现在有空桌吗，还是需要等？"
      },
      {
        "stage": 0,
        "role": "actor",
        "text": "We have a table—I'll show you over. I'll take your order at the table. Still or sparkling water?",
        "zh": "有空桌，我带你们过去。稍后我到桌边帮你们点餐。要普通瓶装水还是气泡水？"
      },
      {
        "stage": 0,
        "role": "user",
        "text": "Could we have tap water instead, please?",
        "zh": "可以给我们自来水吗？"
      },
      {
        "stage": 0,
        "role": "actor",
        "text": "Of course. Tap water is free here; the bottled options are on the drinks menu.",
        "zh": "当然。我们这里自来水免费，瓶装水的价格在饮品菜单上。"
      },
      {
        "stage": 1,
        "role": "user",
        "text": "The menu says 'Sunday surcharge'. Is that a tip?",
        "zh": "菜单上写着 Sunday surcharge，这就是小费吗？"
      },
      {
        "stage": 1,
        "role": "actor",
        "text": "No, it's an extra charge this restaurant applies on Sundays, as shown on the menu. A tip is separate and optional. I can explain the total before you order.",
        "zh": "不是，是本店周日收取的附加费，菜单上有标注。小费是另外的、自愿的。点餐前我可以帮你确认总价。"
      },
      {
        "stage": 1,
        "role": "user",
        "text": "So the final price is higher than the dish price on the menu?",
        "zh": "所以最终要付的比菜单上菜品标价高，对吗？"
      },
      {
        "stage": 1,
        "role": "actor",
        "text": "Yes, with today's surcharge added. I'll show you the calculation so you can decide before ordering.",
        "zh": "是的，需要加上今天的附加费。我给你看一下怎么算，你们再决定要不要点。",
        "tipId": "restaurant-local:surcharge",
        "tip": {
          "title": [
            "A surcharge is not a tip",
            "附加费不等于小费"
          ],
          "body": [
            "Some restaurants apply weekend or public-holiday surcharges. Check the menu and ask about the total before ordering. These charges are separate from a voluntary tip.",
            "部分餐厅会收周末或节假日附加费。点单前看菜单并确认总价；这种收费与自愿的小费是两回事。"
          ]
        }
      },
      {
        "stage": 1,
        "role": "user",
        "text": "Thanks for explaining. We'll have two chicken parmas, please.",
        "zh": "谢谢解释。那我们要两份鸡肉帕尔玛，谢谢。"
      },
      {
        "stage": 1,
        "role": "actor",
        "text": "Sure. They come with chips and salad. I'll put that through.",
        "zh": "好的，配薯条和沙拉。我帮你们下单。"
      },
      {
        "stage": 2,
        "role": "note",
        "text": "After the meal, you catch the staff member’s attention.",
        "zh": "用餐结束后，你示意服务员过来。"
      },
      {
        "stage": 2,
        "role": "user",
        "text": "Could we get the bill, please? Do we pay here or at the counter?",
        "zh": "可以给我们账单吗？在这里付，还是去柜台？"
      },
      {
        "stage": 2,
        "role": "actor",
        "text": "I'll bring the bill. At this restaurant, you pay at the counter when you're ready.",
        "zh": "我把账单拿来。我们这家店是在准备好后到柜台付款。"
      },
      {
        "stage": 2,
        "role": "user",
        "text": "Can we pay separately, or does it need to be one payment?",
        "zh": "可以分开付吗，还是需要一起付？"
      },
      {
        "stage": 2,
        "role": "actor",
        "text": "We can split it equally between two payments here. Let me know before we start.",
        "zh": "我们这里可以平分成两笔付款，开始结账前告诉我就好。"
      },
      {
        "stage": 2,
        "role": "note",
        "text": "At the counter, the payment screen offers a tip option.",
        "zh": "到了柜台，付款屏幕上出现了小费选项。"
      },
      {
        "stage": 2,
        "role": "user",
        "text": "There's a tip option as well. Is it okay to skip it?",
        "zh": "这里还有小费选项，可以跳过吗？"
      },
      {
        "stage": 2,
        "role": "actor",
        "text": "Absolutely. Tipping is your choice. You can skip it, or leave something if you'd like. Thanks for coming in!",
        "zh": "当然。给不给小费由你决定，可以跳过，也可以自愿留一点。谢谢光临！",
        "tipId": "restaurant-local:paying",
        "tip": {
          "title": [
            "Ask how to pay; tipping is your choice",
            "先问结账方式，小费自己决定"
          ],
          "body": [
            "Check where to pay and whether separate payments are accepted—policies differ. A tip prompt does not make tipping compulsory; in Australia, tipping is generally not expected.",
            "先确认在哪里结账、能否分开付款，各店规定可能不同。出现小费选项不代表必须给；在澳大利亚，小费通常不是默认要求。"
          ]
        }
      }
    ],
    "expressions": [],
    "recap": [
      "You checked seating and water options, clarified a Sunday surcharge, ordered, and asked about paying separately and tipping.",
      "你确认了入座和饮用水选项，弄清周日附加费后点餐，并询问了分账和小费。"
    ],
    "know": [
      "Service and split-payment arrangements vary by restaurant. Check disclosed charges before ordering; tipping is a separate choice.",
      "服务和分账安排因店而异。点餐前确认已标注的收费，小费则是另外的自主选择。"
    ],
    "image": 2,
    "retiredTips": [
      {
        "index": 8,
        "tip": {
          "title": [
            "Ask what’s in the dish",
            "点餐前问清菜品"
          ],
          "body": [
            "You asked what a “parma” is before ordering. You can also ask about ingredients and sides rather than guessing from the name.",
            "你在点餐前问清了 parma 是什么。遇到陌生菜名，也可以询问食材和配菜，不用凭名字猜。"
          ]
        },
        "title": [
          "Restaurant",
          "餐厅用餐"
        ]
      },
      {
        "index": 4,
        "id": "restaurant:4",
        "tip": {
          "title": [
            "Ask for the water you want",
            "直接说明想喝哪种水"
          ],
          "body": [
            "If the water choices are unfamiliar, ask for tap water or check the price before choosing bottled water.",
            "不熟悉饮用水选项时，可以直接询问 tap water，或在选择瓶装水前确认价格。"
          ]
        },
        "title": [
          "Restaurant",
          "餐厅用餐"
        ]
      },
      {
        "index": 12,
        "id": "restaurant:14",
        "tip": {
          "title": [
            "Check where to pay",
            "确认在哪里结账"
          ],
          "body": [
            "You asked whether to pay at the table or counter. Service arrangements vary, so a quick question avoids confusion.",
            "你刚才确认了在桌边还是柜台付款。不同餐厅的服务方式可能不同，直接问一句就能避免困惑。"
          ]
        },
        "title": [
          "Restaurant",
          "餐厅用餐"
        ]
      },
      {
        "index": 15,
        "id": "restaurant:tipping",
        "tip": {
          "title": [
            "A tip is your choice",
            "小费由你决定"
          ],
          "body": [
            "A tipping prompt does not mean you must tip. In Australia, tipping is generally optional; you can skip it or leave something if you want to recognise good service.",
            "出现小费选项不代表一定要给。在澳大利亚，小费通常是自愿的；可以跳过，也可以在想表达对服务的认可时自愿给予。"
          ]
        },
        "title": [
          "Restaurant",
          "餐厅用餐"
        ]
      },
      {
        "index": 6,
        "id": "cafe:order",
        "tip": {
          "title": [
            "Check how this café works",
            "先确认这家店的流程"
          ],
          "body": [
            "Some cafés take orders at the counter; others offer table service. Ask where to order and when to pay, and confirm any extra charges before paying.",
            "有些咖啡馆在柜台点单，有些提供桌边服务。先确认在哪里点单、什么时候付款，并在付款前确认额外收费。"
          ]
        },
        "title": [
          "At a café",
          "咖啡馆点单"
        ]
      },
      {
        "index": 12,
        "id": "cafe:name-tip",
        "tip": {
          "title": [
            "A pickup name, not a tip obligation",
            "名字用于取餐，小费自愿"
          ],
          "body": [
            "In this café, your first name identifies your order at pickup. A tip prompt on the payment screen is optional—you can skip it.",
            "这家咖啡馆用你留下的名字叫号取餐。付款屏幕出现小费选项，不代表一定要给，可以跳过。"
          ]
        },
        "title": [
          "At a café",
          "咖啡馆点单"
        ]
      },
      {
        "index": 18,
        "id": "cafe:pickup",
        "tip": {
          "title": [
            "Keep the queue clear and check your order",
            "让出点单位置，确认餐品齐全"
          ],
          "body": [
            "After paying, wait where staff direct you rather than blocking the till. Listen for your name and check that every item is yours and ready before leaving; food and drinks may arrive separately.",
            "付完款后，到店员指定的位置等候，不占着收银台。留意叫名，离开前确认餐品是自己的、也已经拿齐；食物和饮品可能分开做好。"
          ]
        },
        "title": [
          "At a café",
          "咖啡馆点单"
        ]
      },
      {
        "index": 4,
        "id": "restaurant-local:water",
        "tip": {
          "title": [
            "Ask for the water you want",
            "明确说想喝哪种水"
          ],
          "body": [
            "“Still or sparkling?” may refer to bottled water. You can ask for tap water and check the price rather than assuming all water is free.",
            "“Still or sparkling?”可能是在询问瓶装水。可以直接要 tap water，也可以先问价格，不要默认所有水都免费。"
          ]
        },
        "title": [
          "Dining at a restaurant",
          "餐厅用餐"
        ]
      }
    ],
    "sources": [
      {
        "label": "Tourism Australia — tipping",
        "url": "https://www.australia.com/en/facts-and-planning/about-australia/key-facts-about-australia.html"
      },
      {
        "label": "ACCC — price displays and surcharges",
        "url": "https://www.accc.gov.au/business/pricing/price-displays"
      }
    ]
  }
};
