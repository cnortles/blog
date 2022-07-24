/*功能实现区*/

/**网站提示区 */
function welcome_mes(){
  if(navigator.userAgent.match(/edg/i)){ var we_mes = 'Edge';}
  else if(navigator.userAgent.match(/HBPC/i || /huawei/i)){ var we_mes = '华为浏览器';}
  else if(navigator.userAgent.match(/quark/i)){ var we_mes = '夸克浏览器';}
  else if(navigator.userAgent.match(/firefox/i)){ var we_mes = '火狐浏览器';}
  else if(navigator.userAgent.match(/iphone/i) && navigator.userAgent.match(/mac/i)){ var we_mes = '苹果设备';}
  else if(navigator.userAgent.match(/360/i)){ var we_mes = '360浏览器';}
  else if(navigator.userAgent.match(/qq/i)){ var we_mes = 'QQ浏览器';}
  else if(navigator.userAgent.match(/chrome/i)){ var we_mes = 'Chrome浏览器';}
  var ip_mess = ip_mes["nation"]+ip_mes["province"]+ip_mes["city"];
  btf.snackbarShow("你好啊，来自"+ip_mess+"的朋友，您正在使用"+we_mes+"访问本站");
}welcome_mes();

/**搜索引擎推送*/
(function(){
  var el = document.createElement("script");
  el.src = "https://lf1-cdn-tos.bytegoofy.com/goofy/ttzz/push.js?8ae936feb612a2d4a890825a60def1c7d3172cc27fc13e57bb7e029ed48cc55abc434964556b7d7129e9b750ed197d397efd7b0c6c715c1701396e1af40cec962b8d7c8c6655c9b00211740aa8a98e2e";
  el.id = "ttzz";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(el, s);
  })(window)
/**统计 */
LA.init({id: "JkcBsOFTTB5LJIqW",ck: "JkcBsOFTTB5LJIqW",autoTrack:true,hashMode:true});
//开发者模式监测
window.onkeydown = function(e) {
  123 === e.keyCode && btf.snackbarShow("开发者模式已打开，请遵循GPL协议", !1, 3e3)
}
;


//IE内核监测
var isIE = IEVersion();
    if (isIE == "6" || isIE == "7" || isIE == "8" || isIE == "9" || isIE == "10" || isIE == "11" ){//判断当前是否是IE浏览器
      window.location = "/custom/html/kernel.html";//如果是IE内核跳转至kernel.html
  }
//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        //离开当前页面时标签显示内容
        document.title = 'w(ﾟДﾟ)w 服务器被黑洞吞了！连接中断......';
        clearTimeout(titleTime);
    }
    else {
        //返回当前页面时标签显示内容
        document.title = '♪(^∇^*)服务器又从白洞出来了！连接恢复' + OriginTitile;
        //两秒后变回正常标题
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});


/*END*/
/*grayscale.js-变灰*/
if(PublicSacrificeDay()){
    document.getElementsByTagName("html")[0].setAttribute("style","filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);");
  }
  
  function PublicSacrificeDay(){
      var PSFarr=new Array("0327","0403","0404","0405","0406","0414","0512","0707","0807","0814","0909","0918","0930","1025","1213");
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
      var mm = currentdate.getMonth()+1;
      if(currentdate.getMonth()>9){
        str += mm;
      }else{
        str += "0" + mm;
      }
      if(currentdate.getDate()>9){
        str += currentdate.getDate();
      }else{
        str += "0" + currentdate.getDate();
      }
      if(PSFarr.indexOf(str)>-1){
          return 1;
      }else{
          return 0;
          
      }
  }
/*grayscale.js-变灰*/
/*函数定义去 */
/**运行时间 */
function siteTime(){
    window.setTimeout("siteTime()", 1000);
    var seconds = 1000;
    var minutes = seconds * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;
    var today = new Date();
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth()+1;
    var todayDate = today.getDate();
    var todayHour = today.getHours();
    var todayMinute = today.getMinutes();
    var todaySecond = today.getSeconds();
    var t1 = Date.UTC(2021,8,12,0,0,0); //年，月，日，时，分，秒
    var t2 = Date.UTC(todayYear,todayMonth,todayDate,todayHour,todayMinute,todaySecond);
    var diff = t2-t1;
    var diffYears = Math.floor(diff/years);
    var diffDays = Math.floor((diff/days)-diffYears*365);
    var diffHours = Math.floor((diff-(diffYears*365+diffDays)*days)/hours);
    var diffMinutes = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours)/minutes);
    var diffSeconds = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours-diffMinutes*minutes)/seconds);
    document.getElementById("sitetime").innerHTML=" 已运行 "+diffYears+" 年 "+diffDays+" 天 "+diffHours+" 小时 "+diffMinutes+" 分钟 "+diffSeconds+" 秒";
}
   
/**IE检测 */
function IEVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if(isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var IEVersion;
        IEVersion = parseFloat(RegExp["$1"]);
        if (IEVersion == 7) {
          return 7;
        } else if(IEVersion == 8) {
          return 8;
        } else if(IEVersion == 9) {
          return 9;
        } else if(IEVersion == 10) {
          return 10;
        } else {
          return 6;//IE版本<=7
        }
    } else if(isEdge) {
      return 'edge';//edge
    } else if(isIE11) {
      return 11; //IE11
    }else{
      return -1;//不是ie浏览器
    }
  }


        