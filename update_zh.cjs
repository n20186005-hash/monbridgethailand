const fs = require('fs');
const path = require('path');

const zhPath = path.join(__dirname, 'src/i18n/zh.json');
const zh = JSON.parse(fs.readFileSync(zhPath, 'utf8'));

// 1. Merge intro & officialManagement
zh.intro.title = "走近孟族木桥：起源与概述";
zh.intro.description = "孟族木桥（Mon Bridge，泰语称 สะพานมอญ，正式名 Uttamanusorn Bridge）位于泰国北碧府桑卡拉武里县，横跨 Khao Laem 水库（松卡利亚河段）。它由当地孟族（Mon）村民于 1986 年合力修建，是泰国最长的木桥。2013年风暴损毁后，社区自发参与重建并重新开放。作为连接孟族村落与对岸城镇的生命线，这座全天免费开放的社区通道，如今不仅是村民的日常步道，更是旅人观赏水库日出、摄影朝圣与体验边境多民族文化的城市名片。";

zh.officialManagement.title = "";
zh.officialManagement.text = "";

// 2. Geography updates
zh.transportSection.overviewText2 = "木桥周边为水库绿地、附设公共停车场。⚠️ 路况预警：北碧府城距离桑卡拉武里约 220公里。323号公路后半段多急弯与陡坡，自驾通常需要 3.5 - 4.5 小时。晕车的旅客请务必提前准备，不建议夜间初次驾车进山。建议您把交通、停车与步行动线一并规划——尤其带老人、幼儿或行李时，把车停在停车场再步行前往能大幅减少麻烦。";
zh.transportSection.parking.options[3].distance = "约 220 公里";
zh.lodging.options[1].highlight = "位于木桥南侧约 220 公里，是北碧府行政与交通中枢。这里有丰富的美食、夜市与爱侣湾瀑布等景点，是平衡看水与生活便利的折中之选。";
zh.lodging.options[1].points[0] = "巴士或自驾约 3.5–4.5 小时可达木桥。";

// 3. History update
zh.knowledge.title = "桥与人的命运：松卡利亚河畔的史诗";
zh.knowledge.sections = [
  {
    "id": "1950s",
    "title": "1950s · 庇护所的建立",
    "content": "为了躲避缅甸战乱，成千上万的孟族（Mon）难民越过边境。在传奇高僧龙婆乌达玛（Luang Pho Uttama）的庇护下，他们在这片泰缅交界的山谷里安了家。高僧向泰国政府争取了这片土地，使之成为难民们在异乡唯一的避风港。"
  },
  {
    "id": "1984",
    "title": "1984 · 被淹没的故土",
    "content": "泰王国政府为了兴建 Khao Laem 大坝，蓄水淹没了整个老镇。孟族人不得不举族搬迁至地势更高的新村。原本的寺庙与家园沉入水底，成为了今天举世闻名的“水下古城”（Muang Badan）。"
  },
  {
    "id": "1986",
    "title": "1986 · 徒手造就的生命线",
    "content": "失去家园的孟族人被松卡利亚河挡去了与对岸泰族城镇交流的去路。龙婆乌达玛高僧发起号召，在不依靠大型起重机和国家拨款的情况下，孟族村民凭借纯手工砍伐、搬运红木，耗时数月，合力拉起了一座横跨水库的木桥。官方正式命名为 Uttamanusorn Bridge（乌达玛纪念桥），以此致敬高僧的无私愿力。"
  },
  {
    "id": "2013",
    "title": "2013 · 洪水与“六天竹桥奇迹”",
    "content": "2013年7月，特大洪灾夹杂着上游的巨木撞断了桥身。在官方重建计划迟缓的情况下，两岸社群自发组织，仅用 6天时间 便用竹子搭建起了一座可供通行的临时浮桥。这不仅是一次物理上的自救，更是这个边境多民族社区百年凝聚力的最好证明。"
  },
  zh.knowledge.sections.find(s => s.id === 'faith'),
  zh.knowledge.sections.find(s => s.id === 'sea')
].filter(Boolean);

// 4. PlantGuide update -> Water level guide
zh.plantGuide.title = "水位与景观对照表";
zh.plantGuide.subtitle = "水库水位直接决定了木桥和水下寺庙的颜值。一眼看懂什么时候去能看到什么。";
zh.plantGuide.seasons = [
  {
    "icon": "🌱",
    "badge": "COOL",
    "name": "凉季 (11月 - 2月)",
    "summary": "水位中等偏高，气温舒爽。晨雾缭绕，水波清澈。",
    "highlights": [
      "拍摄晨雾木桥、天降供僧",
      "水面平静，倒影最清晰"
    ]
  },
  {
    "icon": "☀️",
    "badge": "HOT",
    "name": "热季 (3月 - 5月)",
    "summary": "水位达到历史最低值。桥墩完全裸露，水下寺庙露出。",
    "highlights": [
      "乘船进入水下佛殿内部徒步",
      "潮间带生物活动频繁，适合慢观"
    ]
  },
  {
    "icon": "🌧️",
    "badge": "RAIN",
    "name": "雨季 (6月 - 10月)",
    "summary": "水位达到历史最高值。水平如镜，桥身临水感极强。",
    "highlights": [
      "欣赏“水上长堤”，船览金色塔尖",
      "木桥临水沉浸感最强，出片率最高"
    ]
  }
];

// 5. Mon Culture Guide
zh.hiddenRules.highlights.push(
  {
    "icon": "🌸",
    "label": "特纳卡（Thanaka）",
    "value": "防晒圣物",
    "note": "桥上孟族妇女和孩童脸上涂抹的黄白色泥浆，是用黄香楝树枝磨成的传统防晒防蚊圣物。"
  },
  {
    "icon": "🧺",
    "label": "头顶重物",
    "value": "惊人平衡力",
    "note": "孟族妇女常用头顶着大托盘或银盆在桥上平稳行走，运送布施用的食物或日常用品。"
  }
);

fs.writeFileSync(zhPath, JSON.stringify(zh, null, 2), 'utf8');
console.log('Done updating zh.json');
