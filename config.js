window.WIKI_CONFIG = {
  // Google Apps Script をウェブアプリとしてデプロイした /exec URL を貼り付けます。
  GAS_WEB_APP_URL: "https://script.google.com/macros/s/AKfycbwxSjr_PceBC26FklqTztPPjyeCIR_cX0JcgOcX4lQJAJLuVDe_XE1p1ZsJ1cbob9O3Aw/exec",
  CALLBACK_NAME: "wikiDataCallback",
  REQUEST_TIMEOUT_MS: 15000,

  // URL未設定時でもUIを確認できるよう、v002ではサンプル人物を表示します。
  // 本番運用時は false に変更しても構いません。
  USE_DEMO_DATA_WHEN_URL_MISSING: true
};
