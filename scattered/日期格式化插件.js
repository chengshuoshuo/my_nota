var date = moment().format('MMMM Do YY');
        console.log(date);



        //日期格式化
        moment().format('MMMM Do YYYY, h:mm:ss a'); // 五月 24日 2019, 2:22:43 下午
        moment().format('dddd'); // 星期五
        moment().format("MMM Do YY"); // 5月 24日 19
        moment().format('YYYY [escaped] YYYY'); // 2019 escaped 2019
        moment().format(); // 2019-05-24T14:22:43+08:00
        //相对时间
        moment("20111031", "YYYYMMDD").fromNow(); // 8 年前
        moment("20120620", "YYYYMMDD").fromNow(); // 7 年前
        moment().startOf('day').fromNow(); // 14 小时前
        moment().endOf('day').fromNow(); // 10 小时内
        moment().startOf('hour').fromNow(); // 23 分钟前
        //日历时间
        moment().subtract(10, 'days').calendar(); // 2019年5月14日
        moment().subtract(6, 'days').calendar(); // 上周六下午2点22
        moment().subtract(3, 'days').calendar(); // 本周二下午2点22
        moment().subtract(1, 'days').calendar(); // 昨天下午2点22分
        moment().calendar(); // 今天下午2点22分
        moment().add(1, 'days').calendar(); // 明天下午2点22分
        moment().add(3, 'days').calendar(); // 下周一下午2点22
        moment().add(10, 'days').calendar(); // 2019年6月3日
        //多语言支持
        moment().format('L'); // 2019-05-24
        moment().format('l'); // 2019-05-24
        moment().format('LL'); // 2019年5月24日
        moment().format('ll'); // 2019年5月24日
        moment().format('LLL'); // 2019年5月24日下午2点23分
        moment().format('lll'); // 2019年5月24日下午2点23分
        moment().format('LLLL'); // 2019年5月24日星期五下午2点23分
        moment().format('llll'); // 2019年5月24日星期五下午2点23分
