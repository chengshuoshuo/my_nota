function getAjax() {
    console.log('ajax get 请求');

    // 1.创建ajax请求对象，用来发送和管理请求
    var xhr = new XMLHttpRequest();

    // 2.监听请求状态的变化
    xhr.onreadystatechange = function(){
        // console.log(xhr.readyState);
        switch (xhr.readyState) {
            case 0:
                console.log('请求还未初始化');
                break;
            case 1:
                console.log('和服务器已经建立连接，但是还未发送请求');
                break;
            case 2:
                console.log('请求已经发送，但是服务器还未响应');
                break;
            case 3:
                console.log('服务器已经收到请求，正在处理请求');
                break;
            case 4:
                {
                    console.log('请求已经完成');
                    // 请求结束后对数据的操作，放在这里
                    console.dir(xhr);
                    // 请求返回的数据
                    // console.log(xhr.responseText);
                    // xhr.status 请求响应的状态码
                    if (xhr.status == 200) {
                        console.log('请求成功');
                        var data = JSON.parse(xhr.responseText);
                        console.dir(data);
                    } else {
                        console.log('请求失败');
                    }
                }
                break;
        }
    }


    // 3.发送请求

    // xhr.open(method,url,async) 设置请求类型、请求的url、是否是异步请求
    // method:请求方法：GET POST；url：请求的接口地址；async：布尔类型，默认true 异步，可以不写
    xhr.open('GET','/api/get?username=张三&age=22');

    // xhr.send() 向服务器发送请求
    xhr.send();


}