const fs = require('fs');
const path = require('path');

const zhPath = path.join(__dirname, 'src/i18n/zh.json');
const zh = JSON.parse(fs.readFileSync(zhPath, 'utf8'));

zh.plantGuide.comparison = [];
zh.plantGuide.seasonTitle = "季节变化与最佳体验";
zh.plantGuide.seasonSubtitle = "不同季节的水位直接影响木桥与水下寺庙的景观。";

fs.writeFileSync(zhPath, JSON.stringify(zh, null, 2), 'utf8');
console.log('Fixed plantGuide');
