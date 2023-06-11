

[rewrite_local]
^https:\/\/api\.ujvnmkx\.cn\/api url script-response-body https://raw.githubusercontent.com/Softlyx/QuantumultX/main/AdBlock/JavDB.js

[mitm]
hostname = api.ujvnmkx.cn

*************************************/


var body = $response.body;
var chxm1023 = JSON.parse(body);

const ada = '/ads';
const adb = '/startup';


//横幅广告
if ($request.url.indexOf(ada) != -1){
  chxm1023.data.ads = {};
}

//公告，开屏
if ($request.url.indexOf(adb) != -1){
  chxm1023.data.splash_ad.enabled = false;
  chxm1023.data.splash_ad.overtime = 0;
  chxm1023.data.splash_ad.ad = {};
  chxm1023.data.feedback.placeholder = "";
  chxm1023.data.settings.UPDATE_DESCRIPTION = "";
  chxm1023.data.settings.NOTICE = "";
}

$done({body : JSON.stringify(chxm1023)});
