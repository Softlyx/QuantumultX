/***********************************************
> 解锁功能：界面美化[主界面APP应用内购买灰色框太难看了]、使用会员图标功能


[rewrite_local]

^https?:\/\/.*appraven\.net\/appraven\/graphql url script-response-body https://raw.githubusercontent.com/Softlyx/QuantumultX/main/Crack/AppRaven.js
^https?:\/\/v2\.appraven\.net\/appraven\/graphql url script-response-body https://raw.githubusercontent.com/Softlyx/QuantumultX/main/Crack/AppRaven.js


[mitm]

hostname = *appraven.net,v2.appraven.net

***********************************************/





var modifiedHeaders = $request.headers;
var operationName = modifiedHeaders['X-APOLLO-OPERATION-NAME'];

if (operationName == "GetCurrentUser"||operationName == "GetUserById") {
  var body = $response.body.replace(/"premium":false/g, '"premium":true');
  $done({ body: body });
} else {
  $done({});
}
