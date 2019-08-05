
服务端需要设置

// 跨域携带cookie
app.use((req,res,next)=>{
    // 将跨域的源设置指定的域：http://127.0.0.1:8000，不能使用通配符*
    res.header('Access-Control-Allow-Origin','http://127.0.0.1:8000');
    // 允许跨域携带cookie
    res.header('Access-Control-Allow-Credentials',true);

    next();
});


客户端需要设置
$.ajaxSetup({
    xhrFields:{
        withCredentials:true //发送的时候携带cookie
    }
});
