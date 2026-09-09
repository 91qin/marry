// ============================================================
// 配置文件
// 报名统计：Supabase 免费 → https://supabase.com
// SQL 建表见 admin.html，填好下面 supabase 两项即可
// ============================================================

window.MARRY_CONFIG = {
  supabaseUrl: 'https://kotuakobmtnjkshkdfiw.supabase.co',
  supabaseKey: 'YOUR_SUPABASE_ANON_KEY',
  adminPassword: 'qinming2026',

  // GitHub Pages 在国内较慢，部署到 github.io 后自动走 jsDelivr CDN
  // 本地预览留空即可；也可手动写死 CDN 地址
  assetBase: '',
  assetVersion: '6',

  // 封面 & 微信分享图（第 6 张：红底囍字合照）
  coverImage: 'assets/6.jpg',
  shareImage: 'assets/share.jpg',
  photoCount: 17,

  venue: {
    name: '杭州和达希尔顿逸林酒店',
    hall: '会议厅 M4',
    address: '杭州市钱塘区金沙大道600号',
    date: '2026年10月6日（星期二）',
    time: '11:30 开席',
    lat: 30.311908,
    lng: 120.323939
  }
};
