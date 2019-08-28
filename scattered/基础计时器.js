 var hour, minute, second; //时 分 秒
    hour = minute = second = 0; //初始化
    var millisecond = 0; //毫秒
    var int;
    //重置函数
    function Reset() {
        window.clearInterval(int);
        millisecond = hour = minute = second = 0;
        document.getElementById('timetext').value = '00时00分00秒000毫秒';
    }
    //开始函数
    function start() {
        int = setInterval(timer, 50); //每隔50毫秒执行一次timer函数
    }
    //计时函数
    function timer() {
        millisecond = millisecond + 50;
        if (millisecond >= 1000) {
            millisecond = 0;
            second = second + 1;
        }
        if (second >= 60) {
            second = 0;
            minute = minute + 1;
        }

        if (minute >= 60) {
            minute = 0;
            hour = hour + 1;
        }
        document.getElementById('timetext').value = hour + '时' + minute + '分' + second + '秒' + millisecond + '毫秒';

    }
    //暂停函数
    function stop() {
        window.clearInterval(int);
    }
