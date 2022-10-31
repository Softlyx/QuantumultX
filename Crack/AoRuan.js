/****************************************

项目功能：傲软合集 解锁VIP
下载地址：http://mtw.so/5ukhax
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************

[rewrite_local]

^https?:\/\/.*\.aoscdn\.com\/base\/vip\/client\/authorizations url script-response-body https://raw.githubusercontent.com/Softlyx/QuantumultX/main/Crack/AoRuan.js

[mitm]

hostname = *.aoscdn.com

****************************************/

var body = $response.body; 
var obj = JSON.parse(body); 

obj.data.is_activated = 1;
obj.data.expire_time = "2099-10-23 09:09:09";
obj.data.durations = 99999;
obj.data.expired_at = 253395492741;

body = JSON.stringify(obj);
$done({body});
