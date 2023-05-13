[rewrite_local]
^https:\/\/.*\.gdt\.qq\.com\/gdt_mview.fcg url reject
^https?:\/\/.*\.pangolin-.*toutiao.*\.com url reject
[mitm]

hostname = *.pangolin-*toutiao*.com,*.gdt.qq.com
