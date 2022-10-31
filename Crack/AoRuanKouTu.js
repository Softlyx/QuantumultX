/***********************************

> 应用名称：傲软
> 更新时间：2022-10-31
> 特别说明：本脚本仅供学习交流使用，禁止转载售卖
 
[rewrite_local]

# ～ 傲软解锁会员权限
^https?:\/\/gw\.aoscdn\.com\/base\/vip\/client\/authorizations$ url script-response-body https://raw.githubusercontent.com/Softlyx/QuantumultX/main/Crack/AoRuanKouTu.js
^https?:\/\/.*\.aoscdn\.com\/base\/vip\/client\/authorizations$ url script-response-body https://raw.githubusercontent.com/Softlyx/QuantumultX/main/Crack/AoRuanKouTu.js

[mitm] 

hostname=gw.aoscdn.com

***********************************/



var body = $response.body; 
 var objk = JSON.parse(body); 
   objk = {"status":200,"message":"success","data":{"license_type":"free","period_type":"trial","is_activated":1,"remain_days":0,"will_expire":1,"allowed_device_count":1,"begin_activated_time":1662783235,"durations":0,"vip_special":0,"has_buy_extend":0,"has_present":0,"product_id":369,"is_lifetime":0,"expired_at":253395492741,"expire_time":"9999-01-01 00:00:00","candy":0,"candy_expired_at":0,"device_id":2700581012,"exist_trial":0}} 
 body = JSON.stringify(objk); 
   $done({body}); 
