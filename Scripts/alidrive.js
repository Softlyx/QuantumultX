/***********************************

> 应用名称：阿里云盘
> 更新时间：2022-10-16
> 脚本功能：优化首页display

***********************************/


[rewrite_local]

# ～ 阿里云盘（2022-10-16）@ddgksf2013
^https?:\/\/api\.aliyundrive\.com\/apps\/v\d\/users\/apps\/widgets$ url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Script/alidrive.js

[mitm]

hostname=api.aliyundrive.com

***********************************/

let ddgksf2013 = JSON.parse($response.body);
if (ddgksf2013.result) {
    ddgksf2013.result = Object.values(ddgksf2013.result).filter(item => (item["appCode"]=="file" || item["appCode"]=="video"));
}
$done({ body: JSON.stringify(ddgksf2013) });
