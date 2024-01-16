/***********************************************


[rewrite_local]

^https?:\/\/*\.appraven\.net\/AppRaven\/(app|social|buy) url script-response-body APPraven.vip.js


[mitm]

hostname = *.appraven.net

***********************************************/
var modifiedHeaders = $request.headers;
var operationName = modifiedHeaders['x-apollo-operation-name'];

if (operationName == "GetCurrentUser"||operationName == "GetUserById") {
  var body = $response.body.replace(/"premium":false/g, '"premium":true');
  $done({ body: body });
} else {
  $done({});
}
