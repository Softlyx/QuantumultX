# ======= 高德地图 ======= #
# 2023-02-19 15:20

# 导航详情页,路线规划,地点详情页
^https:\/\/m5\.amap\.com\/ws\/faas\/amap-navigation\/card-service-route-plan\? url reject-dict
^https:\/\/m5\.amap\.com\/ws\/shield\/search\/poi\/detail\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/amap.js
^https:\/\/m5\.amap\.com\/ws\/shield\/search_poi\/(city_feed|tips_adv)\? url reject-dict
^https:\/\/m5\.amap\.com\/ws\/shield\/search_poi\/tips_operation_location\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/amap.js

# 首页,卡片,红点角标,右上角动图,搜索框热词,左下角天气,天气动效图层,消息横幅
^https:\/\/m5\.amap\.com\/ws\/faas\/amap-navigation\/main-page\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/amap.js
^https:\/\/m5\.amap\.com\/ws\/faas\/amap-navigation\/main-page-(assets|location)\? url reject-dict
^https:\/\/m5\.amap\.com\/ws\/(mapapi\/hint_text\/offline_data|message\/notice\/list|shield\/search\/new_hotword)\? url reject-dict
^https:\/\/m5\.amap\.com\/ws\/mapapi\/poi\/infolite\/\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/amap.js
^https:\/\/m5\.amap\.com\/ws\/shield\/frogserver\/aocs\/updatable\/1\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/amap.js
^https:\/\/m5\.amap\.com\/ws\/valueadded\/weather\/v2\? url reject-dict
^https:\/\/mps\.amap\.com\/ws\/mps\/scene\? url reject
^https:\/\/sns\.amap\.com\/ws\/msgbox\/pull(_mp)?\? url reject-dict

# 我的页面,个人主页,卡片,足迹
^https:\/\/m5\.amap\.com\/ws\/faas\/amap-navigation\/usr-profile-fc\/home\? url reject-dict
^https:\/\/m5\.amap\.com\/ws\/shield\/dsp\/profile\/index\/nodefaasv3\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/amap.js
^https:\/\/sns\.amap\.com\/ws\/userview\/footprint url reject-dict

# 附近页
^https:\/\/m5\.amap\.com\/ws\/shield\/search\/nearbyrec_smart\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/amap.js

# 其他
^https:\/\/m5\.amap\.com\/ws\/asa\/ads_attribution\? url reject-dict
^https:\/\/m5\.amap\.com\/ws\/shield\/scene\/recommend\? url reject-dict

# 开屏广告
^https:\/\/m5\.amap\.com\/ws\/valueadded\/alimama\/splash_screen\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/amap.js

# 打车页,红点角标,弹窗,卡片
^https:\/\/m5-zb\.amap\.com\/ws\/boss\/order(_web\/friendly_information|\/car\/king_toolbox_car_bubble)\? url reject-dict
^https:\/\/m5-zb\.amap\.com\/ws\/promotion-web\/resource\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/amap.js

hostname = m5.amap.com, m5-zb.amap.com, mps.amap.com, sns.amap.com
