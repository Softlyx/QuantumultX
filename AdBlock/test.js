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

body = body.replace(/(<div class="banner">) (.*?)(<\/div>)/g,'<!--  -->');

body = body.replace(/(<div class="speaker">)(.*?)(<\/div>)/g,'<!--  -->');

body = body.replace(/(<div id="popup">)(.*?)(<\/div>)/g,'<!--  -->');

body = body.replace(/(<div class="float-app">)(.*?)(<\/div>)/g,'<!--  -->');

body = body.replace(/(<div id="carousel")(.*?)(<\/div>)/g,'<!--  -->');

body = body.replace(/(<div class="header fixed-top">)(.*?)(<\/div>)/g,'<!--  -->');

$done(body); 
