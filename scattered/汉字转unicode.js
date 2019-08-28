//        下面先看一个简单的例子， 汉字转化为unicode方法：

        function toUnicodeFun(data) {
            if (data == '' || typeof data == 'undefined') return '请输入汉字';
            var str = '';
            for (var i = 0; i < data.length; i++) {
                str += "\\u" + data.charCodeAt(i).toString(16);
            }
            return str;
        }

        var resultUnicode = toUnicodeFun('中国'); // \u4e2d\u56fd
        console.log(resultUnicode);