
var nowTime = new Date();
// 2019-6-28 16:20:45
var targetTime = new Date('2019-2-19 10:31:00');//时间比较早
console.log(nowTime);
console.log(targetTime);

// 时间间隔：秒
var offsetTime = (nowTime.getTime() - targetTime.getTime())/1000;
console.log(offsetTime);

var SEC = 1;
var MIN = 60;
var HOUR = MIN*60;
var DAY = HOUR*24;  

var days = Math.floor(offsetTime / DAY);
var hours = Math.floor(offsetTime % DAY / HOUR);
var minutes = Math.floor(offsetTime % DAY % HOUR / MIN);
var seconds = Math.floor(offsetTime % DAY % HOUR % MIN / SEC);
console.log(days);
console.log(hours);
console.log(minutes);
console.log(seconds);
// 一小时内，显示多少分钟前
// 大于一个小时小于一天，显示几时几分
// if (hours == 0) {
    
// } else {
    
// }
//60 3600 86400
var p = document.querySelector('p');
if (offsetTime <= MIN) {
    //一分钟以内
    p.innerHTML = '刚刚发布';
}else if (offsetTime <= HOUR) {
    // 一小时以内
    p.innerHTML = minutes + '分钟前';
}else if (offsetTime <= DAY)  {
    //一天以内
    p.innerHTML = hours + '小时前';
}else{
    //超过一天
    p.innerHTML = days + '天前';
}

