//        unicode转化为汉字的方法：

        function toChineseWords(data) {
            if (data == '' || typeof data == 'undefined') return '请输入十六进制unicode';
            data = data.split("\\u");
            var str = '';
            for (var i = 0; i < data.length; i++) {
                str += String.fromCharCode(parseInt(data[i], 16).toString(10));
            }
            return str;
        }

        var resultChineseWords = toChineseWords("\\u4e2d\\u56fd");
        console.log(resultChineseWords); //中国