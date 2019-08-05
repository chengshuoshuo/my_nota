$('.jsonp-btn').click(()=>{
    // jsonp 请求原理

    // var script = document.createElement('script');
    // // 设置了script标签的src属性，把script标签添加到浏览器上，会立即执行src链接 的接口
    // script.src = 'http://127.0.0.1:8000/api/jsonp?callback=getdata';
    // // 从服务端返回 getdata({"err":0,"msg":"jsonp请求成功"}) ，当我们把script标签添加到页面上会立即执行这一段代码，调用getdata方法
    // document.body.appendChild(script);

    // $.getJSON() 支持jsonp跨域请求，需要在接口地址参数部分添加 callback=?
    $.getJSON('http://127.0.0.1:8000/api/jsonp?callback=?',data=>{
        console.log(data);
    });


});
