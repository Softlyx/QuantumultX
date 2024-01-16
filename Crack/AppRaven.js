/***********************************************


[rewrite_local]

^https?:\/\/*\.appraven\.net\/AppRaven\/(app|social|buy) url script-response-body https://raw.githubusercontent.com/Softlyx/QuantumultX/main/Crack/AppRaven.js


[mitm]

hostname = *.appraven.net

***********************************************/
var modifiedHeaders = $request.headers;
const operationName = modifiedHeaders['x-apollo-operation-name'] || modifiedHeaders['X-APOLLO-OPERATION-NAME'];

if (operationName == "GetCurrentUser"||operationName == "GetUserById") {
  var body = $response.body.replace(/"premium":false/g, '"premium":true');
  $done({ body: body });
} else {
  $done({});
}
