/******************************

脚本功能：涩涩视频——去除所有广告
下载地址：https://is.gd/OwSgce
软件版本：1.0
更新时间：2022-11-08


*******************************

[rewrite_local]

^https://files.yuchenglw.com url script-response-body https://raw.githubusercontent.com/Softlyx/QuantumultX/main/AdBlock/SeseVideo/SeseVideo.js

[mitm] 

hostname = files.yuchenglw.com

*******************************/





var body=$response.body;

body = body.replace(/(<div class="banner mt-3">)[\s\S[\d\D]{0,999}(<\/div>)/g,'<!--  -->');

body = body.replace(/(<div class="speaker">)[\s\S[\d\D]{0,345}(<\/div>)/g,'<!--  -->');

body = body.replace(/(<div id="popup">)[\s\S[\d\D]{0,1539}(<\/div>)/g,'<!--  -->');

body = body.replace(/(<div class="float-app">)[\s\S[\d\D]{0,345}(<\/div>)/g,'<!--  -->');

body = body.replace(/(<div id="carousel")[\s\S[\d\D]{0,1777}(<\/div>)/g,'<!--  -->');

body = body.replace(/(<div class="header fixed-top">)[\s\S[\d\D]{0,345}(<\/div>)/g,'<!--  -->');

$done(body);
