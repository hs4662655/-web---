/**
 * Created by admin on 2016/12/6.
 */
window.onload = function () {
    changeSearchColor();
    secondKill();
};
var changeSearchColor = function () {
    //首先获取到搜索栏这个dom  rgba(201, 21, 35, 0.85)
    var search = document.getElementsByClassName("jd_header_box")[0];
    //然后在获取到banner这个dom
    var banner = document.getElementsByClassName("jd_banner")[0];
    var bannerHeight = banner.offsetHeight;
    //监听window的滑动事件
    window.onscroll = function () {
        //console.log(document.body.scrollTop);
        var scrollTop = document.body.scrollTop;
        if (scrollTop > bannerHeight) {
            search.style.background = "rgba(201, 21, 35, 0.85)";
        } else {
            search.style.background = "rgba(201, 21, 35, " + scrollTop / bannerHeight * 0.85 + ")";
        }
    }
};
/*秒杀倒计时*/
var secondKill = function(){
    /*复盒子*/
    var parentTime = document.getElementsByClassName('sk_time')[0];
    /*span时间*/
    var timeList = parentTime.getElementsByClassName('num');

    console.log(timeList.length);

    var times = 7   * 60 * 60;
    var timer;
    timer = setInterval(function(){
        times  -- ;

        var h = Math.floor(times/(60*60));
        var m = Math.floor(times/60%60);
        var s = times%60;

        console.log(h+'-'+m+"-"+s);

        timeList[0].innerHTML = h>10?Math.floor(h/10):0;
        timeList[1].innerHTML = h%10;

        timeList[2].innerHTML = m>10?Math.floor(m/10):0;
        timeList[3].innerHTML = m%10;

        timeList[4].innerHTML = s>10?Math.floor(s/10):0;
        timeList[5].innerHTML = s%10;
        if(times <= 0){
            clearInterval(timer);
        }
    },1000);

}