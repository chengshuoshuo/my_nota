
        function dateFor(date) {
            var d = null;
            if (date instanceof Date) {
                d = date;
                console.log(d);
            } else {
                if (typeof date == "number" || typeof date == "string") {
                    d = new Date(date);
                    console.log(d);
                } else {
                    console.log('你输入的值有误 请重新输入')
                }
            }
            var y = d.getFullYear();
            var m = d.getMonth() + 1;
            var day = d.getDate();

            var hours = d.getHours();
            var minute = d.getMinutes();
            var second = d.getSeconds();

            //三目运算符 判断语句?  值1 :值2
            return `${y}-${m}-${day} ${hours}:${minute}:${second}`
        }

        //instanceof 一般判断引用类型 typeof判断值类型
        console.log(dateFor(new Date()))
