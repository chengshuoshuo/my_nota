var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

var User = require('./modules/db/user');

// md5 是一种加密算法。能够对一段数据进行加密，加密之后得到一段 32 位长度的16进制的数字，md5加密是不可逆的
var md5 = require('md5');
// 202cb962ac59075b964b07152d234b70
// console.log(md5('123@www+456'));


// 注册
app.post('/regist',(req,res)=>{
    User.findOne({username:req.body.username},(err,data)=>{
        if (data) {
            res.send('用户名已被抢注');
        } else {
            // 对密码进行MD5加密
            req.body.password = md5(req.body.password);
            var user = new User(req.body);
            // console.log(user);
            user.save(err=>{
                res.redirect('/login.html');
            });
        }
    });
});

// 登录
app.post('/login',(req,res)=>{
    User.findOne({username:req.body.username},(err,user)=>{
        if (!user) {
            res.send('用户名不存在');
        } else {
            if (md5(req.body.password) == user.password) {
                //登录成功  设置cookie
                res.cookie('username',req.body.username,{
                    maxAge:1000*60*60
                });
                res.redirect('/');
            } else {
                res.send('密码错误');
            }
        }
    });
});


// 发帖
app.post('/add/msg',(req,res)=>{
    if (req.cookies.username) {
        //可以发帖
        res.send(req.cookies.username+'发帖成功');
    } else {
        //未登录，告诉用户先登录
        res.send('请先登录');
    }
});


// 退出登录
app.get('/logout',(req,res)=>{
    res.clearCookie('username');
    res.redirect('/');
});



app.listen(3000,()=>{
    console.log('node running');
});