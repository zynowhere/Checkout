//网页端每日签到
const axios = require("axios");
function smzdm() {
  return new Promise(async (resolve) => {
    try {
      let url =
        "https://zhiyou.smzdm.com/user/checkin/jsonp_checkin?callback=&_=";
      const header = {
        headers: {
          Referer: "https://www.smzdm.com/",
          cookie: config.smzdm.cookie,
        },
      };
      let res = await axios.get(url, header);
      if (res.data.error_code == 0) {
        data = `签到成功! 签到天数: ${res.data.data.checkin_num} | Lv:${res.data.data.rank} | 经验值:${res.data.data.exp}`;
      } else {
        data = res.data.error_msg;
      }
      console.log(data);
    } catch (err) {
      console.log(err);
      data="签到接口请求出错"
    }
    resolve("【什么值得买】：" + data);
  });
}
//smzdm()
module.exports = smzdm;
