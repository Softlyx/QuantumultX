[rewrite_local]

^https:\/\/.*\.gdt\.qq\.com\/gdt_mview.fcg url reject-200
^https?:\/\/api-access\.pangolin-sdk-toutiao\.com\/api\/ad\/union\/sdk\/get_ads url reject

[mitm]

hostname = api-access.pangolin-sdk-toutiao.com,*.gdt.qq.com
