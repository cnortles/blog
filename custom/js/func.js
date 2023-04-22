/**函数定义区
 * 函数定义区
 * www.cnortles.top
*/
//IE内核监测
var isIE = IEVersion();
if (isIE == "6" || isIE == "7" || isIE == "8" || isIE == "9" || isIE == "10" || isIE == "11") { //判断当前是否是IE浏览器
  window.location = "/crl/html/kernel.html"; //如果是IE内核跳转至kernel.html
}
/**友联跳转 */
function random_flink() {
    fetch("/link")
    .then(e => e.text())
    .then(e => {
    var t = document.createElement("div");
    t.innerHTML = e;
      var n = t.getElementsByClassName("flink-item-name");
      var l = t.querySelectorAll(".flink-list-item a");
      n = Array.from(n);
      l = Array.from(l);
      var a=6;  //可设置为任意开始的位置
      var b=l.length;   //可设置位任意结束的位置
      var num=Math.floor(Math.random()*eval(b)+eval(a))-1;
      var n_name = n[num].innerText;
      btf.snackbarShow("温馨提示,您即将前往"+'『'+n_name+'』',!1, 3e3);
      function jump(){window.location.href=l[num];}
      setTimeout(jump,2000);
    })
  }
/**运行时间 */
function timer(e, t) {
    e = Math.round(e / 1e3);
    var n = Math.round((new Date).getTime() / 1e3);
    var o = 0;
    if (t == 0)
        o = n - e;
    else
        o = e - n;
    var i = new Array(0,0,0,0,0);
    var a = function(e) {
        return e > 9 ? e : "0" + e
    };
    if (o >= 365 * 24 * 3600) {
        i[0] = parseInt(o / (365 * 24 * 3600));
        o %= 365 * 24 * 3600
    }
    if (o >= 24 * 3600) {
        i[1] = parseInt(o / (24 * 3600));
        o %= 24 * 3600
    }
    if (o >= 3600) {
        i[2] = a(parseInt(o / 3600));
        o %= 3600
    }
    if (o >= 60) {
        i[3] = a(parseInt(o / 60));
        o %= 60
    }
    if (o >= 0)
        i[4] = a(o);
    return i
  }
  function runtime() {
    var e = timer(new Date("2022/1/23 00:00:00").getTime(), 0);
    var t = "小破站已坚持：";
    if (e[0] != 0)
          t += e[0] + " 年 ";
    t += e[1] + " 天 " + e[2] + " 时 " + e[3] + " 分 " + e[4] + "秒";
    document.getElementById("runtime").innerHTML = t;
    setTimeout(runtime, 1e3)
  }
/**网站提示区 */
function welcome_mes() {
    if (navigator.userAgent.match(/edg/i)) {
      var we_mes = 'Edge';
    }
    /**社交软件检测 */
    else if (navigator.userAgent.match(/weixin/i)) {
      var we_mes = '微信';
    } else if (navigator.userAgent.match(/ks/i)) {
      var we_mes = '快手';
    } else if (navigator.userAgent.match(/weibo/i)) {
      var we_mes = '微博';
    } else if (navigator.userAgent.match(/dy/i)) {
      var we_mes = '抖音';
    }
    /**手机厂商浏览器检测区域 */
    else if (navigator.userAgent.match(/heytapbrowser/i)) {
      var we_mes = 'OPPO浏览器';
    } else if (navigator.userAgent.match(/vivobrowser/i)) {
      var we_mes = 'VIVO浏览器';
    } else if (navigator.userAgent.match(/HBPC/i) || navigator.userAgent.match(/huaweibrowser/i)) {
      var we_mes = '华为浏览器';
    } else if (navigator.userAgent.match(/iphone/i) && navigator.userAgent.match(/mac/i)) {
      var we_mes = '苹果设备';
    }
  
    /**第三方浏览器检测区域 */
    else if (navigator.userAgent.match(/quark/i)) {
      var we_mes = '夸克浏览器';
    } else if (navigator.userAgent.match(/firefox/i)) {
      var we_mes = '火狐浏览器';
    } else if (navigator.userAgent.match(/ucbrowser/i)) {
      var we_mes = 'UC浏览器';
    } else if (navigator.userAgent.match(/baidubox/i)) {
      var we_mes = '百度浏览器';
    } else if (navigator.userAgent.match(/opr/i)) {
      var we_mes = 'Opera浏览器';
    }
    /**else if(navigator.userAgent.match(/360/i)){ var we_mes = '360浏览器';}因多次查证，360浏览器并不包含特有信息，无法查证*/
    else if (navigator.userAgent.match(/qq/i)) {
      var we_mes = 'QQ浏览器';
    } else if (navigator.userAgent.match(/chrome/i)) {
      var we_mes = 'Chrome浏览器';
    }
  /*grayscale.js-变灰*/
function PublicSacrificeDay() {
    var PSFarr = new Array("0327", "0403", "0404", "0405", "0406", "0414", "0512", "0707", "0807", "0814", "0909", "0918", "0930", "1025", "1213");
    //2022年3月27东航MU5735头七祭
    //2020年4月4日 新冠肺炎哀悼日，清明节
    //2010年4月14日，青海玉树地震
    //2008年5月12日，四川汶川地震
    //1937年7月7日,七七事变 又称卢沟桥事变
    //2010年8月7日，甘肃舟曲特大泥石流
    //8月14日，世界慰安妇纪念日
    //1976年9月9日，毛主席逝世
    //1931年9月18日，九一八事变
    //烈士纪念日为每年9月30日
    //1950年10月25日，抗美援朝纪念日
    //1937年12月13日，南京大屠杀
    var currentdate = new Date();
    var str = "";
    var mm = currentdate.getMonth() + 1;
    if (currentdate.getMonth() > 9) {
      str += mm;
    } else {
      str += "0" + mm;
    }
    if (currentdate.getDate() > 9) {
      str += currentdate.getDate();
    } else {
      str += "0" + currentdate.getDate();
    }
    if (PSFarr.indexOf(str) > -1) {
      return 1;
    } else {
      return 0;
  
    }
  }/**IE检测 */
function IEVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
      var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
      reIE.test(userAgent);
      var IEVersion;
      IEVersion = parseFloat(RegExp["$1"]);
      if (IEVersion == 7) {
        return 7;
      } else if (IEVersion == 8) {
        return 8;
      } else if (IEVersion == 9) {
        return 9;
      } else if (IEVersion == 10) {
        return 10;
      } else {
        return 6; //IE版本<=7
      }
    } else if (isEdge) {
      return 'edge'; //edge
    } else if (isIE11) {
      return 11; //IE11
    } else {
      return -1; //不是ie浏览器
    }
  }
  
  
  function getLinks() {
    fetch("/link").then(e => e.text()).then(e => {
      var t = document.createElement("div");
      t.innerHTML = e;
      var o = document.querySelectorAll("#friend-links-in-footer .footer-item");
      var n = t.getElementsByClassName("flink-item-name");
      var l = t.querySelectorAll(".flink-list-item a");
      n = Array.from(n);
      l = Array.from(l);
      for (var t = 0; t < 5; t++) {
        var e = parseInt(Math.random() * n.length);
        o[t].innerText = n[e].innerText;
        o[t].href = l[e].href;
        n.splice(e, 1);
        l.splice(e, 1)
      }
    })
  }
    /**IP部分 */
    if (ip_mes["nation"] == '中国') {
      var ip_mess = ip_mes["city"];
    } else if (ip_mes["city"].match(/台湾/i)) {
      var ip_mess = "中国台湾";
    } else {
      var ip_mess = ip_mes["nation"] + ip_mes["province"] + ip_mes["city"];
    }
  
    /**来源检测 */
    var we_link = document.referrer;
    if (we_link.match(/baidu/i)) {
      var welcome_link = '百度'
    } else if (we_link.match(/sougou/i)) {
      var welcome_link = '搜狗'
    } else if (we_link.match(/weixin/i)) {
      var welcome_link = '微信'
    } else if (we_link.match(/qq/i)) {
      var welcome_link = 'qq'
    } else if (we_link.match(/zhihu/i)) {
      var welcome_link = '知乎'
    } else if (we_link.match(/google/i)) {
      var welcome_link = '谷歌'
    } else if (we_link.match(/bing/i)) {
      var welcome_link = '必应'
    } else if (we_link.match(/so/i)) {
      var welcome_link = '360'
    } else if (we_link.match(/weibo/i)) {
      var welcome_link = '微博'
    } else if (we_link.match(/t.co/i)) {
      var welcome_link = '推特'
    } else if (we_link.match(/sougou/i)) {
      var welcome_link = '搜狗'
    } else if (we_link.match(/toutiao/i)) {
      var welcome_link = '今日头条'
    } else {
      var welcome_link = '远方'
    }
    if (getCookie("welcome") == '') {
      btf.snackbarShow("你好啊，来自" + ip_mess + "的朋友，您使用" + we_mes + "从" + welcome_link + "赶来", !1, 3e3);
      console.info(ip_mess+we_mes+we_link)
      setCookie("welcome", '1.8.1', "/");
    }
  }