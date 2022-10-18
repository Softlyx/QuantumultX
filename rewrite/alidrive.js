/***********************************

> 应用名称：阿里云盘
> 更新时间：2022-10-16
> 脚本功能：优化首页display



[rewrite_local]

# ～ 阿里云盘（2022-10-16）
^https?:\/\/api\.aliyundrive\.com\/apps\/v\d\/users\/apps\/widgets$ url script-response-body https://raw.githubusercontent.com/Softlyx/QuantumultX/main/Scripts/alidrive.js

[mitm]

hostname=api.aliyundrive.com

***********************************/

let Softly = JSON.parse($response.body);
if (Softly.result) {
    Softly.result = Object.values(Softly.result).filter(item => (item["appCode"]=="file" || item["appCode"]=="video"));
}
$done({ body: JSON.stringify(Softly) });
