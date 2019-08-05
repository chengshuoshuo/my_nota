function postAjax(){

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4) {
            
            console.dir(xhr);
            console.log('在客户端获取响应报文：');
            console.log('响应行：');
            console.log('状态码：'+xhr.status);
            console.log('状态码的英文名称：'+xhr.statusText);
            console.log('响应头：');
            console.log('所有的响应头：'+xhr.getAllResponseHeaders());
            console.log('Date：'+xhr.getResponseHeader('Date'));
            console.log('响应体：');
            console.log('响应数据：'+xhr.response);
            console.log('文本形式的响应数据:'+xhr.responseText);
            console.log(JSON.parse(xhr.responseText));
        }
    }

// 请求报文：
    // 请求行
    // 请求头
    // 空行
    // 请求体

// 1.请求行：方法、url
    xhr.open('POST','/api/post');

// 2.请求头：客户端环境的描述，写在xhr.open 方法调用之后
    // xhr.setRequestHeader(key,value)
    // post需要设置请求头：把请求的数据转成 key=value&key=value 的形式
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

    // post请求常用的数据格式：
    // application/x-www-form-urlencoded，form表单默认的数据格式，提交的数据按照 key1=val1&key2=val2 的方式进行编码，key 和 val 都进行了 URL 转码。大部分服务端语言都对这种方式有很好的支持。
    // application/json，现在越来越多的人把它作为请求头，用来告诉服务端消息主体是序列化后的 JSON 字符串。服务端语言也有很多函数去解析JSON，使用JSON可以支持更加复杂的结构化数据。
    // multipart/form-data，对用于在表单中上传文件时，也可以上传普通数据，只需要让form的enctype等于multipart/form-data就可以了，method必须使用POST

// 3.空行 
    // 不需要控制

// 4.请求体：客户端发送给服务器的数据（post请求数据放在请求体，get请求数据放在url后面）
    // xhr.send(data) data 是发送给服务器数据，仅用于post请求，post请求的数据是放在请求体内
    xhr.send('username=张三&age=22');


}