// JavDB
  case /^https:\/\/(api\.hechuangxinxi\.xyz|jdforrepam\.com)\/api\/v\d\/\w+/.test(url):
    try {
      let obj = JSON.parse(body);
      if (url.includes("/api/v1/ads")) {
        if (obj?.data?.enabled) {
          obj.data.enabled = false;
        }
        if (obj?.data?.ads) {
          obj.data.ads = {};
        }
      } else if (url.includes("/api/v1/startup")) {
        if (obj?.data?.splash_ad) {
          obj.data.splash_ad.enabled = false;
          obj.data.splash_ad.overtime = 0;
        }
        if (obj?.data?.feedback) {
          obj.data.feedback = {};
        }
        if (obj?.data?.settings?.NOTICE) {
          delete obj.data.settings.NOTICE;
        }
        if (obj?.data?.user) {
          obj.data.user.vip_expired_at = "2101-06-08T17:35:01.000+08:00";
          obj.data.user.is_vip = true;
        }
      } else if (url.includes("/api/v1/users")) {
        if (obj?.data?.user) {
          obj.data.user.vip_expired_at = "2101-06-08T17:35:01.000+08:00";
          obj.data.user.is_vip = true;
        }
      } else if (url.includes("/api/v4/movies/")) {
        if (obj?.data?.show_vip_banner) {
          obj.data.show_vip_banner = false;
        }
      }
      body = JSON.stringify(obj);
    } catch (error) {
      console.log(`JavDB, 出现异常: ` + error);
    }
    break;
