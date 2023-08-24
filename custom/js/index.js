/**
 * 函数运行区 
 * 顺序按照重要程度以及出错概率排序,为避免JS失效
 * 作者: cnortles.top
*/
if (window.console) {
    Function.prototype.makeMulti = function () {
      var l = new String(this);
      l = l.substring(l.indexOf("/*") + 3, l.lastIndexOf("*/"));
      return l;
    };
    var string = function () {
      /*
                             __  .__                 
  ____   ____   ____________/  |_|  |   ____   ______
  _/ ___\ /    \ /  _ \_  __ \   __\  | _/ __ \ /  ___/
  \  \___|   |  (  <_> )  | \/|  | |  |_\  ___/ \___ \ 
  \___  >___|  /\____/|__|   |__| |____/\___  >____  >
     \/     \/                             \/     \/ 
                                                     
      Powered by crl Ralease 3.0.1. Anzhiy 1.6.0.
      */
    };
    console.log(string.makeMulti());
  }
  
  /*grayscale.js-变灰*/
  if (PublicSacrificeDay()) {
    document.getElementsByTagName("html")[0].setAttribute("style", "filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);");
  }

// /**获取友联链接 */
// getLinks();


//开发者模式监测
window.onkeydown = function (e) {
  123 === e.keyCode && btf.snackbarShow("开发者模式已打开，请遵循GPL协议", !1, 3e3);
  console.warn("开发者模式已打开，请遵循GPL协议");
};



// //动态标题
// var OriginTitile = document.title;
// var titvarime;
// document.addEventListener('visibilitychange', function () {
//   if (document.hidden) {
//     //离开当前页面时标签显示内容
//     document.title = 'w(ﾟДﾟ)w 服务器被黑洞吞了！连接中断......';
//     clearTimeout(titvarime);
//   } else {
//     //返回当前页面时标签显示内容
//     document.title = '♪(^∇^*)服务器又从白洞出来了！连接恢复' + OriginTitile;
//     //两秒后变回正常标题
//     titvarime = setTimeout(function () {
//       document.title = OriginTitile;
//     }, 2000);
//   }
// });


/**页脚运行时间 */
runtime();

/**网站提示 */
welcome_mes();

