/**
 * SEO / entity-binding copy and the new "sources" (E-E-A-T) namespace.
 *
 * Kept in a dedicated module so the large existing locale files stay untouched.
 * `ui.ts` shallow-merges these namespaces on top of each language pack, which
 * means every component can keep reading from `messages.entity` / `messages.sources`.
 *
 * Localised for every shipped locale, including `my` (Burmese) and `mnw` (Mon).
 */
export const SOURCE_URL = 'https://maps.app.goo.gl/QWVCDcZqzonpm72w8';
export const TOURISM_URL = 'https://www.tourismthailand.org/';

type LocaleSeo = {
  hero: { ratingSource: string; ratingSourceUrl: string };
  reviews: { sourceNote: string };
  footer: { imageCopyright: string; sourcesLabel: string };
  entity: Record<string, any>;
  sources: Record<string, any>;
};

export const seoMessages: Record<string, LocaleSeo> = {
  zh: {
    hero: {
      ratingSource: '评分与评价数同步自 Google 地图 · 截至 2026 年 10 月',
      ratingSourceUrl: SOURCE_URL,
    },
    reviews: {
      sourceNote:
        '评分 4.6 / 5，基于 Google 地图上 12,024 条公开评价（截至 2026 年 10 月，来源：Google Maps · Mon Bridge）。',
    },
    footer: {
      imageCopyright: '本网站所展示的所有图片产权及版权均归原摄影者所有。',
      sourcesLabel: '资料来源',
    },
    entity: {
      aboutHeading: '关于孟族木桥（Uttamanusorn Bridge）',
      welcomeLead:
        '欢迎来到孟族木桥（Mon Bridge，正式名 Uttamanusorn Bridge），它正是桑卡拉武里最具代表性的中心地标。木桥坐落于泰国北碧府桑卡拉武里的核心地带，是往来该地区旅客的主要枢纽。',
      hierarchyHeading: '地理归属层级',
      hierarchy: ['孟族木桥（Uttamanusorn Bridge）', '桑卡拉武里', '北碧府', '泰国'],
      nearbyHeading: '孟族木桥周边的地标与景点',
      nearbyLead:
        '游览孟族木桥时，游客可以就近探索周边的历史地标与景点，包括旺维卡拉寺（Wat Wang Wiwekaram）与三天门山口（Three Pagodas Pass）。',
      historyHeading: '孟族木桥（Uttamanusorn Bridge）的历史与意义',
      historyLead:
        '孟族木桥由当地孟族村民于 1986 年合力修建，横跨松卡利亚河（Khao Laem 水库），是泰国最长的木桥，也是连接孟族村落与对岸城镇的社区生命线。2013 年风暴损毁后由社区重建并重新开放，如今既是村民日常通行的通道，也是桑卡拉武里「桥、水、孟族」最具代表性的文化地标。',
      officialIntro: '如需官方最新信息与区域旅游资讯，请访问',
      officialLinkLabel: '泰国 / 北碧府官方旅游门户',
      officialUrl: TOURISM_URL,
      mapLinkLabel: '在地图中查看木桥位置',
      locationHeading: '位置与如何前往桑卡拉武里的孟族木桥',
      locationLead:
        '孟族木桥位于泰国北碧府桑卡拉武里县 Nong Lu，1 Saphan Mai Alley（Google Plus Code：4CVX+9W，坐标 15.1434° N, 98.4498° E），距桑卡拉武里镇中心步行或乘车仅数分钟。木桥全天开放、免费通行，可经 323 号公路自驾前往。',
    },
    sources: {
      title: '资料来源与真实性核验',
      subtitle:
        '本页为独立非营利项目，所有关键信息均对照官方与权威公开资料核验并标注来源，方便你进一步查证。',
      ratingTitle: 'Google 地图评分',
      ratingValue: '4.6',
      ratingScale: '/ 5',
      reviewCountLabel: 'Google 地图评价数',
      reviewCountValue: '12,024',
      sourceLabel: '来源',
      sourceName: 'Google 地图 · Mon Bridge (สะพานมอญ)',
      verifiedLabel: '信息核验时间',
      verifiedValue: '2026 年 10 月',
      referencesTitle: '官方与权威参考来源',
      methodologyTitle: '核验方法',
      methodologyText:
        '本站评分与评价数直接同步自 Google 地图上「Mon Bridge (สะพานมอญ)」的公开列表；开放时间、地址、坐标与交通信息对照泰国国家旅游局（TAT）、北碧府官方政务网与泰国国家公园管理局公开资料交叉核验。若官方信息更新，本站将同步调整。',
      imageCopyright: '本网站所展示的所有图片产权及版权均归原摄影者所有。',
    },
  },

  en: {
    hero: {
      ratingSource: 'Rating & review count synced from Google Maps · verified October 2026',
      ratingSourceUrl: SOURCE_URL,
    },
    reviews: {
      sourceNote:
        'Rated 4.6 / 5 based on 12,024 public Google Maps reviews (as of October 2026. Source: Google Maps · Mon Bridge).',
    },
    footer: {
      imageCopyright: 'All image rights and copyrights shown on this website belong to the original photographers.',
      sourcesLabel: 'Sources',
    },
    entity: {
      aboutHeading: 'About Mon Bridge (Uttamanusorn Bridge)',
      welcomeLead:
        'Welcome to Mon Bridge (Uttamanusorn Bridge), widely recognized as the central Mon Bridge. Located in the heart of Sangkhla Buri, Kanchanaburi, Thailand, this destination serves as a primary hub for travelers visiting the region.',
      hierarchyHeading: 'Geographic hierarchy',
      hierarchy: ['Mon Bridge (Uttamanusorn Bridge)', 'Sangkhla Buri', 'Kanchanaburi', 'Thailand'],
      nearbyHeading: 'Landmarks & Attractions Around Mon Bridge',
      nearbyLead:
        'When visiting Mon Bridge, visitors can easily explore surrounding historical landmarks and points of interest, including Wat Wang Wiwekaram and Three Pagodas Pass.',
      historyHeading: 'History & Significance of Mon Bridge (Uttamanusorn Bridge)',
      historyLead:
        'Built by local Mon villagers in 1986, Mon Bridge spans the Songkalia River (Khao Laem Reservoir) as the longest wooden bridge in Thailand and a community lifeline linking the Mon village to the town. Rebuilt by the community after storm damage in 2013, it now serves both as villagers\u2019 daily passage and as Sangkhla Buri\u2019s signature \u201cbridge, water, Mon\u201d cultural landmark.',
      officialIntro: 'For official updates and regional tourism information, visit',
      officialLinkLabel: 'Thailand / Kanchanaburi Official Tourism Portal',
      officialUrl: TOURISM_URL,
      mapLinkLabel: 'View the bridge on the map',
      locationHeading: 'Location & How to Visit Mon Bridge in Sangkhla Buri',
      locationLead:
        'Mon Bridge stands at 1 Saphan Mai Alley, Nong Lu, Sangkhla Buri, Kanchanaburi (Plus Code 4CVX+9W; 15.1434° N, 98.4498° E). It is a few minutes from Sangkhla Buri town centre on foot or by car, open to the public all day and free to cross, and reachable by road via Highway 323.',
    },
    sources: {
      title: 'Sources & Verification',
      subtitle:
        'This page is an independent, non-commercial project. Every key fact is cross-checked against official and authoritative public sources and cited so you can verify it yourself.',
      ratingTitle: 'Google Maps rating',
      ratingValue: '4.6',
      ratingScale: '/ 5',
      reviewCountLabel: 'Google Maps reviews',
      reviewCountValue: '12,024',
      sourceLabel: 'Source',
      sourceName: 'Google Maps · Mon Bridge (สะพานมอญ)',
      verifiedLabel: 'Last verified',
      verifiedValue: 'October 2026',
      referencesTitle: 'Official & authoritative references',
      methodologyTitle: 'Methodology',
      methodologyText:
        'The rating and review count shown here are synced directly from the public Google Maps listing for \u201cMon Bridge (สะพานมอญ)\u201d. Opening hours, address, coordinates, and transport details are cross-checked against public materials from the Tourism Authority of Thailand (TAT), the Kanchanaburi Provincial Government, and the Thai National Parks. Updates to official information are reflected here.',
      imageCopyright: 'All image rights and copyrights shown on this website belong to the original photographers.',
    },
  },

  th: {
    hero: {
      ratingSource: 'คะแนนและจำนวนรีวิวซิงค์จาก Google Maps · ตรวจสอบ ตุลาคม 2026',
      ratingSourceUrl: SOURCE_URL,
    },
    reviews: {
      sourceNote:
        'คะแนน 4.6 / 5 จาก 12,024 รีวิวสาธารณะบน Google Maps (ข้อมูล ณ ตุลาคม 2026 · ที่มา: Google Maps · สะพานมอญ)',
    },
    footer: {
      imageCopyright: 'ลิขสิทธิ์และสิทธิ์ในภาพทั้งหมดที่แสดงบนเว็บไซต์นี้เป็นของช่างภาพต้นฉบับ',
      sourcesLabel: 'แหล่งข้อมูล',
    },
    entity: {
      aboutHeading: 'เกี่ยวกับสะพานมอญ (สะพานอุตตมานุสรณ์)',
      welcomeLead:
        'ยินดีต้อนรับสู่สะพานมอญ (สะพานอุตตมานุสรณ์) ซึ่งรู้จักกันในชื่อสะพานมอญอันเป็นสัญลักษณ์ใจกลางของสังขละบุรี ตั้งอยู่ใจกลางอำเภอสังขละบุรี จังหวัดกาญจนบุรี ประเทศไทย เป็นจุดหมายหลักของนักท่องเที่ยวที่มาเยือนภูมิภาคนี้',
      hierarchyHeading: 'ลำดับพื้นที่ทางภูมิศาสตร์',
      hierarchy: ['สะพานมอญ (สะพานอุตตมานุสรณ์)', 'สังขละบุรี', 'กาญจนบุรี', 'ประเทศไทย'],
      nearbyHeading: 'สถานที่และแลนด์มาร์กรอบสะพานมอญ',
      nearbyLead:
        'เมื่อมาเยือนสะพานมอญ นักท่องเที่ยวสามารถสำรวจแลนด์มาร์กและจุดสนใจทางประวัติศาสตร์โดยรอบได้อย่างง่ายดาย เช่น วัดวังก์วิเวการาม และด่านเจดีย์สามองค์',
      historyHeading: 'ประวัติและความสำคัญของสะพานมอญ',
      historyLead:
        'สะพานมอญสร้างโดยชาวมอญในพื้นที่เมื่อปี 1986 พาดผ่านแม่น้ำซองกาเลีย (อ่างเก็บน้ำเขื่อนเขาแหลม) เป็นสะพานไม้ที่ยาวที่สุดในประเทศไทย และเป็นเส้นทางชีวิตของชุมชนที่เชื่อมหมู่บ้านมอญกับตัวเมือง หลังเสียหายจากพายุในปี 2013 ชุมชนได้ร่วมกันสร้างขึ้นใหม่และเปิดให้สาธารณะ ปัจจุบันเป็นทั้งทางสัญจรประจำวันของชาวบ้านและแลนด์มาร์กทางวัฒนธรรม "สะพาน น้ำ มอญ" ของสังขละบุรี',
      officialIntro: 'สำหรับข้อมูลอย่างเป็นทางการและการท่องเที่ยวระดับภูมิภาค โปรดเยี่ยมชม',
      officialLinkLabel: 'พอร์ทัลการท่องเที่ยวอย่างเป็นทางการของประเทศไทย / กาญจนบุรี',
      officialUrl: TOURISM_URL,
      mapLinkLabel: 'ดูสะพานบนแผนที่',
      locationHeading: 'ที่ตั้งและวิธีเดินทางไปสะพานมอญในสังขละบุรี',
      locationLead:
        'สะพานมอญตั้งอยู่ที่ 1 Saphan Mai Alley, Nong Lu, อำเภอสังขละบุรี จังหวัดกาญจนบุรี (Plus Code 4CVX+9W; 15.1434° N, 98.4498° E) ห่างจากใจกลางเมืองสังขละบุรีเพียงไม่กี่นาทีโดยเดินหรือโดยรถ เปิดให้สาธารณะตลอดวันและข้ามฟรี เดินทางโดยรถยนต์ผ่านทางหลวงหมายเลข 323',
    },
    sources: {
      title: 'แหล่งอ้างอิงและการตรวจสอบ',
      subtitle:
        'หน้านี้เป็นโครงการอิสระที่ไม่แสวงหากำไร ข้อมูลสำคัญทุกจุดได้รับการตรวจสอบเทียบกับแหล่งข้อมูลราชการและแหล่งอ้างอิงที่เชื่อถือได้ พร้อมระบุที่มาเพื่อให้คุณตรวจสอบได้เอง',
      ratingTitle: 'คะแนนจาก Google Maps',
      ratingValue: '4.6',
      ratingScale: '/ 5',
      reviewCountLabel: 'จำนวนรีวิวบน Google Maps',
      reviewCountValue: '12,024',
      sourceLabel: 'ที่มา',
      sourceName: 'Google Maps · สะพานมอญ (Mon Bridge)',
      verifiedLabel: 'ตรวจสอบล่าสุด',
      verifiedValue: 'ตุลาคม 2026',
      referencesTitle: 'แหล่งอ้างอิงอย่างเป็นทางการ',
      methodologyTitle: 'วิธีตรวจสอบ',
      methodologyText:
        'คะแนนและจำนวนรีวิวซิงค์โดยตรงจากรายการสาธารณะบน Google Maps ของ "สะพานมอญ (Mon Bridge)" ส่วนเวลาเปิดทำการ ที่อยู่ พิกัด และการเดินทาง ตรวจสอบเทียบกับข้อมูลสาธารณะของการท่องเที่ยวแห่งประเทศไทย (ททท.) เว็บไซต์ราชการจังหวัดกาญจนบุรี และอุทยานแห่งชาติของไทย หากข้อมูลทางการมีการอัปเดต หน้านี้จะปรับตาม',
      imageCopyright: 'ลิขสิทธิ์และสิทธิ์ในภาพทั้งหมดที่แสดงบนเว็บไซต์นี้เป็นของช่างภาพต้นฉบับ',
    },
  },

  my: {
    hero: {
      ratingSource: 'အဆင့်သတ်မှတ်ချက်နှင့် သုံးသပ်ချက်အရေအတွက်ကို Google Maps မှ ထပ်တူပြုထားသည် · ၂၀၂၆ အောက်တိုဘာ စစ်ဆေးပြီး',
      ratingSourceUrl: SOURCE_URL,
    },
    reviews: {
      sourceNote:
        'Google Maps ပေါ်ရှိ အများသူငှာ သုံးသပ်ချက် ၁၂,၀၂၄ ခုအပေါ် အခြေခံ၍ ၄.၆ / ၅ (၂၀၂၆ အောက်တိုဘာ အထိ · ရင်းမြစ်: Google Maps · Mon Bridge)။',
    },
    footer: {
      imageCopyright: 'ဤဝဘ်ဆိုက်တွင် ဖော်ပြထားသည့် ပုံအားလုံး၏ ပိုင်ဆိုင်ခွင့်နှင့် မူပိုင်ခွင့်များသည် မူရင်းဓာတ်ပုံဆရာများ ပိုင်ဆိုင်သည်။',
      sourcesLabel: 'ရင်းမြစ်များ',
    },
    entity: {
      aboutHeading: 'မွန်တံတား (Uttamanusorn Bridge) အကြောင်း',
      welcomeLead:
        'မွန်တံတား (Mon Bridge၊ တရားဝင်အမည် Uttamanusorn Bridge) မှ ကြိုဆိုပါသည်။ ဆန်ခလဘူရီ၏ အထင်ရှားဆုံး ဗဟိုမှတ်တိုင်ဖြစ်ပြီး ထိုင်းနိုင်ငံ ကန်ချနဘူရီပြည်နယ် ဆန်ခလဘူရီ အလယ်တွင် တည်ရှိကာ ဤဒေသသို့ လာရောက်သည့် ခရီးသွားများ၏ အဓိကအချက်အချာဖြစ်သည်။',
      hierarchyHeading: 'ပထဝီဝင် သက်ဆိုင်မှု အဆင့်ဆင့်',
      hierarchy: ['မွန်တံတား (Uttamanusorn Bridge)', 'ဆန်ခလဘူရီ', 'ကန်ချနဘူရီ', 'ထိုင်းနိုင်ငံ'],
      nearbyHeading: 'မွန်တံတား ပတ်ဝန်းကျင် မှတ်တိုင်များနှင့် ဆွဲဆောင်မှုများ',
      nearbyLead:
        'မွန်တံတားသို့ လာရောက်စဉ် ဝပ်ဝမ်ဝီဝေကာရာမ် (Wat Wang Wiwekaram) နှင့် သီပုဂ္ဂိုလာဒါးစ် (Three Pagodas Pass) အပါအဝင် ပတ်ဝန်းကျင် သမိုင်းဝင် မှတ်တိုင်များနှင့် စိတ်ဝင်စားဖွယ်နေရာများကို အလွယ်တကူ လည်ပတ်နိုင်သည်။',
      historyHeading: 'မွန်တံတား (Uttamanusorn Bridge) ၏ သမိုင်းနှင့် အဓိပ္ပာယ်',
      historyLead:
        'မွန်တံတားကို ၁၉၈၆ ခုနှစ်တွင် ဒေသခံမွန်ရွာသူရွာသားများ စုပေါင်းဆောက်လုပ်ခဲ့ပြီး ဆောင်္ကလီယာမြစ် (ခေါ်လမ်ရေလှောင်ကန်) ကို ဖြတ်ကာ ထိုင်းနိုင်ငံတွင် အရှည်ဆုံး သစ်သားတံတားဖြစ်ကာ မွန်ရွာနှင့် မြစ်တစ်ဖက်ကမ်းရှိ မြို့ကို ဆက်သွယ်သည့် လူ့အဖွဲ့အစည်း၏ အသက်သွေးကြောဖြစ်သည်။ ၂၀၁၃ ခုနှစ် မုန်တိုင်းကြောင့် ပျက်စီးပြီးနောက် ရပ်ရွာက ပြန်လည်တည်ဆောက်ကာ အများပြည်သူအတွက် ပြန်လည်ဖွင့်လှစ်ခဲ့သည်။ ယခုအခါ ရွာသူရွာသားများ၏ နေ့စဉ်သွားလာလမ်းအဖြစ်လည်းကောင်း၊ ဆန်ခလဘူရီ၏ "တံတား၊ ရေ၊ မွန်" ယဉ်ကျေးမှု သင်္ကေတအဖြစ်လည်းကောင်း တည်ရှိသည်။',
      officialIntro: 'တရားဝင် နောက်ဆုံးရသတင်းအချက်အလက်နှင့် ဒေသခရီးသွားအချက်အလက်အတွက် သွားရောက်ကြည့်ရှုပါ',
      officialLinkLabel: 'ထိုင်း / ကန်ချနဘူရီ တရားဝင် ခရီးသွားပေါ်တယ်',
      officialUrl: TOURISM_URL,
      mapLinkLabel: 'မြေပုံတွင် တံတားတည်နေရာ ကြည့်ရန်',
      locationHeading: 'ဆန်ခလဘူရီရှိ မွန်တံတား တည်နေရာနှင့် သွားရောက်နည်း',
      locationLead:
        'မွန်တံတားသည် ထိုင်းနိုင်ငံ ကန်ချနဘူရီပြည်နယ် ဆန်ခလဘူရီခရိုင် နောင်လူ၊ 1 Saphan Mai Alley တွင် တည်ရှိသည် (Plus Code 4CVX+9W၊ 15.1434° N, 98.4498° E)။ ဆန်ခလဘူရီမြို့လယ်မှ လမ်းလျှောက်ဖြစ်စေ ကားဖြစ်စေ မိနစ်အနည်းငယ်အကွာတွင် ရှိသည်။ တစ်နေကုန် ဖွင့်လှစ်ပြီး အခမဲ့ဖြတ်သန်းနိုင်ကာ အဝေးပြေးလမ်းမ ၃၂၃ မှတစ်ဆင့် သွားရောက်နိုင်သည်။',
    },
    sources: {
      title: 'ရင်းမြစ်များနှင့် စစ်ဆေးမှု',
      subtitle:
        'ဤစာမျက်နှာသည် သီးခြားလွတ်လပ်ပြီး အမြတ်မယူသည့် စီမံကိန်းဖြစ်သည်။ အဓိကအချက်အလက်တိုင်းကို တရားဝင်နှင့် ယုံကြည်ရသော အများသူငှာရင်းမြစ်များနှင့် နှိုင်းယှဉ်စစ်ဆေးပြီး ရင်းမြစ်ကို ဖော်ပြထားသည်။',
      ratingTitle: 'Google Maps အဆင့်သတ်မှတ်ချက်',
      ratingValue: '4.6',
      ratingScale: '/ 5',
      reviewCountLabel: 'Google Maps သုံးသပ်ချက်အရေအတွက်',
      reviewCountValue: '12,024',
      sourceLabel: 'ရင်းမြစ်',
      sourceName: 'Google Maps · Mon Bridge (สะพานมอญ)',
      verifiedLabel: 'နောက်ဆုံးစစ်ဆေးချိန်',
      verifiedValue: '၂၀၂၆ အောက်တိုဘာ',
      referencesTitle: 'တရားဝင်နှင့် ယုံကြည်ရသော ကိုးကားရင်းမြစ်များ',
      methodologyTitle: 'စစ်ဆေးနည်း',
      methodologyText:
        'ဤစာမျက်နှာရှိ အဆင့်သတ်မှတ်ချက်နှင့် သုံးသပ်ချက်အရေအတွက်ကို Google Maps ပေါ်ရှိ "Mon Bridge (สะพานมอญ)" လူသိရှင်ကြားစာရင်းမှ တိုက်ရိုက်ထပ်တူပြုထားသည်။ ဖွင့်ချိန်၊ လိပ်စာ၊ ကိုဩဒိနိတ်နှင့် သွားလာရေးအချက်အလက်များကို ထိုင်းနိုင်ငံခရီးသွားအာဏာပိုင် (TAT)၊ ကန်ချနဘူရီပြည်နယ် တရားဝင်ဝဘ်ဆိုက်နှင့် ထိုင်းအမျိုးသားဥယျာဉ်များ၏ အများသူငှာအချက်အလက်များနှင့် နှိုင်းယှဉ်စစ်ဆေးထားသည်။',
      imageCopyright: 'ဤဝဘ်ဆိုက်တွင် ဖော်ပြထားသည့် ပုံအားလုံး၏ ပိုင်ဆိုင်ခွင့်နှင့် မူပိုင်ခွင့်များသည် မူရင်းဓာတ်ပုံဆရာများ ပိုင်ဆိုင်သည်။',
    },
  },

  mnw: {
    hero: {
      ratingSource: 'အဆင့်သတ်မှတ် ကဵု လၟိဟ်သၠေဟ်ပၟာ ထပ်တူပြုလဝ် နူ Google Maps · စၟဳစၟတ် စက်တေမ်ဗါ ၂၀၂၆',
      ratingSourceUrl: SOURCE_URL,
    },
    reviews: {
      sourceNote:
        'သၠေဟ်ပၟာညးဂမၠိုၚ် ၁၂,၀၂၄ လတူ Google Maps အရ အဆင့်သတ်မှတ် ၄.၆ / ၅ (စဵုစက်တေမ်ဗါ ၂၀၂၆ · တမ်ရိုဟ်: Google Maps · Mon Bridge)။',
    },
    footer: {
      imageCopyright: 'အခေါၚ် ကဵု မူပိုင် ဗီုရုပ်အိုတ်သီု မထ္ၜးလဝ်ပ္ဍဲဝေပ်သာက်ဝွံ ဒှ်ဒြပ်ညးတၠဗီုရုပ်တမ်ရိုဟ်။',
      sourcesLabel: 'တမ်ရိုဟ်ပရိုင်',
    },
    entity: {
      aboutHeading: 'ဆေင်ကဵု ဒဒန်မန် (Uttamanusorn Bridge)',
      welcomeLead:
        'ကဵုဒုၚ်တၠုၚ် ပ္ဍဲဒဒန်မန် (Mon Bridge၊ ယၟုတရးဝါ် Uttamanusorn Bridge) မတီပြာကတ်ဒှ် ဒဒန်မန်လဒေါဝ် သၚ်ခလဗူရဳ။ တန်တဴပ္ဍဲလဒေါဝ်သၚ်ခလဗူရဳ၊ ခရိုၚ်ကန္ဆနဗူရဳ၊ ဍုၚ်သေံ — ဒှ်လဒေါဝ်ဗဵုမၞိဟ်အာတရဴ မကၠုၚ်လ္ၚောဝ်ဒေသဝွံ။',
      hierarchyHeading: 'အဆင့်ဒတန်ပထဝဳ',
      hierarchy: ['ဒဒန်မန် (Uttamanusorn Bridge)', 'သၚ်ခလဗူရဳ', 'ကန္ဆနဗူရဳ', 'ဍုၚ်သေံ'],
      nearbyHeading: 'ဒၞာဲမတီပြာကတ် & ဒၞာဲဗဵု ဇရေၚ်ဒဒန်မန်',
      nearbyLead:
        'အခိၚ်ကၠုၚ်လ္ၚောဝ်ဒဒန်မန်၊ မၞိဟ်ကၟုဲ ဂွံအာလ္ၚောဝ်ဒၞာဲပရောင် ကဵု ဒၞာဲဗဵုဇရေၚ်လောဲ: ကျာ်ဝင်ဝိဝေကာရာမ် (Wat Wang Wiwekaram) ကဵု တြၚ်ကျာ်သြာင်ပိ (Three Pagodas Pass)。',
      historyHeading: 'ပရောင် & အဓိပ္ပါယ် ဒဒန်မန် (Uttamanusorn Bridge)',
      historyLead:
        'ဒဒန်မန် သြာ်လဝ်ကဵုကွာန်မန်ဒေသ ပ္ဍဲသၞာံ ၁၉၈၆၊ ကဝ်လတူၜဳသံင်္ကလိရ (ဍာ်ဒဵုကှောလေမ်)， ဒှ်ဒဒန်ဆုဂၠိၚ်အိုတ် ပ္ဍဲဍုၚ်သေံ ကဵု ဂၠံၚ်ဘဝဂကောံ မဆက်စပ် ကွာန်မန် ကဵု ဍုၚ်လပါ်တေအ်။ ကြဴကျာက္တဴပလီုလဝ် ပ္ဍဲသၞာံ ၂၀၁၃ ဂကောံသြာ်ကလေၚ်တုဲ ပံက်ကဵုညးဂမၠိုၚ်ပၠန် — ဒှ်တြာဂၠံၚ်တၞဟ်ခြာ သွက်ကွာန်အာ、 မၞိဟ်ကၟုဲဂြိပ်、 ကဵုညးဗ္တိုက်ဗီုရုပ်ကၠုၚ်လ္ၚောဝ်， ကဵု ဒှ်မွဲ ပ္ဍဲ \u201cဒဒန်、 ဍာ်、 မန်\u201d သၚ်ခလဗူရဳ။',
      officialIntro: 'သွက်ပရိုင်တရးဝါ်လက္ကရဴအိုတ် ကဵု ပရိုင်အာတရဴဒေသ， ဆက်ဗဵု',
      officialLinkLabel: 'ပိုတ်တာလ်ပရေင်အာတရဴတရးဝါ် ဍုၚ်သေံ / ကန္ဆနဗူရဳ',
      officialUrl: TOURISM_URL,
      mapLinkLabel: 'ဗဵုဒၞာဲဒဒန် ပ္ဍဲဗီုတိ',
      locationHeading: 'ဒတန်ဒၞာဲ & ဗီုအာ ဒဒန်မန် ပ္ဍဲသၚ်ခလဗူရဳ',
      locationLead:
        'ဒဒန်မန် တန်တဴပ္ဍဲ 1 Saphan Mai Alley, Nong Lu, ခရိုၚ်သၚ်ခလဗူရဳ၊ ကန္ဆနဗူရဳ， ဍုၚ်သေံ (Plus Code 4CVX+9W; 15.1434° N, 98.4498° E)。 ဂြိပ် ဟွံသေၚ် ကွဳ ၜိုတ်မိနေတ်ညိ နူလဒေါဝ်ဍုၚ်သၚ်ခလဗူရဳ။ ပံက်လဝ်တ္ၚဲဂှ်， ဗၠး， အာမာန်နကဵုဂၠံၚ်ဇၞော် 323။',
    },
    sources: {
      title: 'တမ်ရိုဟ်ပရိုင် & ပရေင်စၟဳစၟတ်',
      subtitle:
        'မုက်လိက်ဝွံ ဒှ်ပရောဂျက်မသၠးပွး မဟွံမွဲအမြတ်。 ပရိုင်အဓိကအိုတ်သီု ပတောအ်စၟဳစၟတ်လဝ်ကဵု တမ်ရိုဟ်တရးဝါ် ကဵု တမ်ရိုဟ်မလ္ၚာဲဂွံ， ကဵုစၟတ်သမ္တီ တမ်ရိုဟ် သွက်ဂွံစၟဳစၟတ်ဇကုကၠာဲ。',
      ratingTitle: 'အဆင့်သတ်မှတ် Google Maps',
      ratingValue: '4.6',
      ratingScale: '/ 5',
      reviewCountLabel: 'လၟိဟ်သၠေဟ်ပၟာ Google Maps',
      reviewCountValue: '12,024',
      sourceLabel: 'တမ်ရိုဟ်',
      sourceName: 'Google Maps · Mon Bridge (สะพานมอญ)',
      verifiedLabel: 'စၟဳစၟတ်လက္ကရဴအိုတ်',
      verifiedValue: 'စက်တေမ်ဗါ ၂၀၂၆',
      referencesTitle: 'တမ်ရိုဟ်တရးဝါ် & မလ္ၚာဲဂွံ',
      methodologyTitle: 'နဲစၟဳစၟတ်',
      methodologyText:
        'အဆင့်သတ်မှတ် ကဵု လၟိဟ်သၠေဟ်ပၟာ မထ္ၜးလဝ်ပ္ဍဲမုက်လိက်ဝွံ ထပ်တူပြုလဝ်တိုက်ရိုက် နူစရၚ်ညးဂမၠိုၚ် Google Maps "Mon Bridge (สะพานมอญ)"。 အခိၚ်ပံက်、 ဒၞာဲ、 ကိုဩဒိနိတ်、 ကဵု ပရေင်အာကၠုၚ် ပတောအ်စၟဳစၟတ်လဝ်ကဵု တမ်ရိုဟ်ညးဂမၠိုၚ် ဂကောံပရေင်အာတရဴဍုၚ်သေံ (TAT)、 ဝေပ်သာက်တရးဝါ်ခရိုၚ်ကန္ဆနဗူရဳ、 ကဵု ဥဒျာန်ကၟိန်ဍုၚ်သေံ။',
      imageCopyright: 'အခေါၚ် ကဵု မူပိုင် ဗီုရုပ်အိုတ်သီု မထ္ၜးလဝ်ပ္ဍဲဝေပ်သာက်ဝွံ ဒှ်ဒြပ်ညးတၠဗီုရုပ်တမ်ရိုဟ်။',
    },
  },

  ja: {
    hero: {
      ratingSource: '評価と口コミ数は Google マップより同期 · 2026年10月確認',
      ratingSourceUrl: SOURCE_URL,
    },
    reviews: {
      sourceNote:
        'Google マップの公開口コミ 12,024 件に基づく評価 4.6 / 5（2026年10月時点 · 出典：Google Maps · Mon Bridge）。',
    },
    footer: {
      imageCopyright: '本ウェブサイトに掲載されているすべての画像の権利および著作権は、元の撮影者に帰属します。',
      sourcesLabel: '出典',
    },
    entity: {
      aboutHeading: 'モン橋（Uttamanusorn Bridge）について',
      welcomeLead:
        'モン橋（Mon Bridge／正式名 Uttamanusorn Bridge）へようこそ。サンクラブリーを代表する中心的な橋であり、タイ・カンチャナブリー県サンクラブリーの中心部に位置して、この地域を訪れる旅行者の主要なハブとなっています。',
      hierarchyHeading: '地理的な帰属階層',
      hierarchy: ['モン橋（Uttamanusorn Bridge）', 'サンクラブリー', 'カンチャナブリー', 'タイ'],
      nearbyHeading: 'モン橋周辺のランドマークと見どころ',
      nearbyLead:
        'モン橋を訪れる際は、ワット・ワン・ウィウェーカラーム（Wat Wang Wiwekaram）やスリー・パゴダ・パス（Three Pagodas Pass）など、周辺の歴史的ランドマークや見どころを気軽に巡ることができます。',
      historyHeading: 'モン橋（Uttamanusorn Bridge）の歴史と意義',
      historyLead:
        'モン橋は1986年に地元モン族の村人たちによって架けられ、ソンカーリア川（カオレム貯水池）にまたがるタイ最長の木橋であり、モン族の村と対岸の町を結ぶコミュニティの生命線です。2013年の暴風雨による損壊後、コミュニティによって再建され一般開放されました。現在は住民の日常の通路であると同時に、サンクラブリーを象徴する「橋・水・モン」の文化ランドマークです。',
      officialIntro: '公式の最新情報や地域の観光情報は、以下をご覧ください。',
      officialLinkLabel: 'タイ／カンチャナブリー公式観光ポータル',
      officialUrl: TOURISM_URL,
      mapLinkLabel: '地図で橋の位置を見る',
      locationHeading: 'サンクラブリーのモン橋へのアクセスと所在地',
      locationLead:
        'モン橋はタイ・カンチャナブリー県サンクラブリー郡ノーン・ルー、1 Saphan Mai Alley にあり（Plus Code 4CVX+9W、北緯15.1434° 東経98.4498°）、サンクラブリー市街中心部から徒歩または車で数分。終日無料で通行でき、国道323号線経由でアクセスできます。',
    },
    sources: {
      title: '出典と検証',
      subtitle:
        '本ページは独立・非営利のプロジェクトです。主要な情報はすべて公的・権威ある公開資料と照合し、出典を明記しています。',
      ratingTitle: 'Google マップの評価',
      ratingValue: '4.6',
      ratingScale: '/ 5',
      reviewCountLabel: 'Google マップの口コミ数',
      reviewCountValue: '12,024',
      sourceLabel: '出典',
      sourceName: 'Google マップ · Mon Bridge (สะพานมอญ)',
      verifiedLabel: '最終確認',
      verifiedValue: '2026年10月',
      referencesTitle: '公式・権威ある参考資料',
      methodologyTitle: '検証方法',
      methodologyText:
        '本ページの評価と口コミ数は、Google マップの公開リスティング「Mon Bridge (สะพานมอญ)」から直接同期しています。営業時間・住所・座標・交通情報は、タイ国政府観光庁（TAT）、カンチャナブリー県公式サイト、タイ国立公園の公開資料と照合しています。公式情報が更新された場合は反映します。',
      imageCopyright: '本ウェブサイトに掲載されているすべての画像の権利および著作権は、元の撮影者に帰属します。',
    },
  },

  ko: {
    hero: {
      ratingSource: '평점과 리뷰 수는 Google 지도에서 동기화 · 2026년 10월 확인',
      ratingSourceUrl: SOURCE_URL,
    },
    reviews: {
      sourceNote:
        'Google 지도 공개 리뷰 12,024건 기준 평점 4.6 / 5 (2026년 10월 기준 · 출처: Google Maps · Mon Bridge).',
    },
    footer: {
      imageCopyright: '이 웹사이트에 표시된 모든 이미지의 권리와 저작권은 원래 촬영자에게 있습니다.',
      sourcesLabel: '출처',
    },
    entity: {
      aboutHeading: '몬 브리지(Uttamanusorn Bridge) 소개',
      welcomeLead:
        '몬 브리지(Mon Bridge, 공식 명칭 Uttamanusorn Bridge)에 오신 것을 환영합니다. 상클라부리를 대표하는 중심 명소로, 태국 깐짜나부리주 상클라부리 중심부에 위치하며 이 지역을 찾는 여행자들의 주요 거점입니다.',
      hierarchyHeading: '지리적 소속 계층',
      hierarchy: ['몬 브리지(Uttamanusorn Bridge)', '상클라부리', '깐짜나부리', '태국'],
      nearbyHeading: '몬 브리지 주변 명소와 랜드마크',
      nearbyLead:
        '몬 브리지를 방문하면 왓 왕 위웨어까람(Wat Wang Wiwekaram)과 스리 파고다 패스(Three Pagodas Pass) 등 주변의 역사적 랜드마크와 명소를 쉽게 둘러볼 수 있습니다.',
      historyHeading: '몬 브리지(Uttamanusorn Bridge)의 역사와 의미',
      historyLead:
        '몬 브리지는 1986년 현지 몬족 주민들이 함께 세운 다리로, 송깔리아강(카오램 저수지)을 가로지르는 태국에서 가장 긴 목조 다리이자 몬족 마을과 강 건너 마을을 잇는 공동체의 생명선입니다. 2013년 폭풍 피해 이후 주민들이 재건해 일반에 개방했으며, 지금은 주민들의 일상 통행로이자 상클라부리를 상징하는 "다리·물·몬" 문화 랜드마크입니다.',
      officialIntro: '공식 최신 정보와 지역 관광 정보는 아래를 참고하세요.',
      officialLinkLabel: '태국 / 깐짜나부리 공식 관광 포털',
      officialUrl: TOURISM_URL,
      mapLinkLabel: '지도에서 다리 위치 보기',
      locationHeading: '상클라부리 몬 브리지 위치 및 방문 방법',
      locationLead:
        '몬 브리지는 태국 깐짜나부리주 상클라부리 논루 1 Saphan Mai Alley에 있으며(Plus Code 4CVX+9W, 북위 15.1434°, 동경 98.4498°), 상클라부리 시내 중심에서 도보나 차로 몇 분 거리입니다. 연중무휴 무료로 통행할 수 있으며 323번 국도를 통해 접근할 수 있습니다.',
    },
    sources: {
      title: '출처 및 검증',
      subtitle:
        '이 페이지는 독립적이며 비영리 프로젝트입니다. 모든 핵심 정보는 공식·권위 있는 공개 자료와 교차 검증하고 출처를 명시합니다.',
      ratingTitle: 'Google 지도 평점',
      ratingValue: '4.6',
      ratingScale: '/ 5',
      reviewCountLabel: 'Google 지도 리뷰 수',
      reviewCountValue: '12,024',
      sourceLabel: '출처',
      sourceName: 'Google 지도 · Mon Bridge (สะพานมอญ)',
      verifiedLabel: '최종 확인',
      verifiedValue: '2026년 10월',
      referencesTitle: '공식·권위 있는 참고 자료',
      methodologyTitle: '검증 방법',
      methodologyText:
        '이 페이지의 평점과 리뷰 수는 Google 지도의 공개 등록 정보 "Mon Bridge (สะพานมอญ)"에서 직접 동기화합니다. 운영 시간·주소·좌표·교통 정보는 태국관광청(TAT), 깐짜나부리주 공식 웹사이트, 태국 국립공원 공개 자료와 교차 검증합니다.',
      imageCopyright: '이 웹사이트에 표시된 모든 이미지의 권리와 저작권은 원래 촬영자에게 있습니다.',
    },
  },
};
