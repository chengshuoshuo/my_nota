var express = require('express');

var app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));

var artTmpEngine = require('./modules/art-tem-config');
artTmpEngine(app);

var User = require('./modules/db/user');

// connect-flash 会话闪存模块，flash相当于一个暂存器，暂存器里面的内容使用过一次便被清空，适合做网站的提示信息
var flash = require('connect-flash');
app.use(flash());

// md5 是一种加密算法。能够对一段数据进行加密，加密之后得到一段 32 位长度的16进制的数字，md5加密是不可逆的
var md5 = require('md5');

// express-session 会话模块，是基于express专门处理session的模块，把会话数据保存在服务器上，默认是存储在内存中，会话标识（非会话数据）保存在cookie
var session = require('express-session');
// connet-mongo 程序运行的时候，app对象会自动替我们管理session的 存储、更新、删除
// 会把session 存储到MongoDB数据库中
var MongoStore = require('connect-mongo')(session);

// 使用use挂载express-session之后，会自动生成http请求session对象，保存在 req.session 中，在登录注册时通过req.session来存储和访问会话数据
app.use(session({
    //添加session的配置信息
    secret:'mylogin',
    resave:true,
    saveUninitialized:true,
    rolling:true,
    cookie:{
        maxAge:1000*60*60
    },
    store: new MongoStore({
        // 连接数据库
        url:'mongodb://127.0.0.1/session-login'
    })
}));

/*
Session {
    cookie:
     { path: '/',
       _expires: 2019-07-16T08:30:49.683Z,
       originalMaxAge: 3600000,
       httpOnly: true } }
*/
// 首页
app.get('/',(req,res)=>{
    console.log(req.session);
    var error = req.flash('error').toString();
    res.render('index',{
        user:req.session.user,
        error
    });
});

// 注册
app.get('/regist',(req,res)=>{
    // console.log(req.flash('error').toString());
    // 从flash暂存器中取出 error 的值
    var error = req.flash('error').toString();
    res.render('regist',{error});
});
app.post('/regist',(req,res)=>{
    User.findOne({username:req.body.username},(err,data)=>{
        if (data) {
            // res.send('用户名已被抢注');
            // 在flash暂存器中添加一个 error 信息
            req.flash('error','用户名已被抢注');
            res.redirect('/regist')
        } else {
            // 对密码进行MD5加密
            req.body.password = md5(req.body.password);
            var user = new User(req.body);
            // console.log(user);
            user.save(err=>{
                res.redirect('/login');
            });
        }
    });
});

// 登录
app.get('/login',(req,res)=>{
    var error = req.flash('error').toString();
    res.render('login',{error});
});
app.post('/login',(req,res)=>{
    User.findOne({username:req.body.username},(err,user)=>{
        if (!user) {
            // res.send('用户名不存在');
            req.flash('error','用户名不存在');
            res.redirect('/login');
        } else {
            if (md5(req.body.password) == user.password) {
                // 每次登录时，在session对象中添加user，user会被自动的保存或者更新到session中
                req.session.user = user;
                res.redirect('/');
            } else {
                // res.send('密码错误');
                req.flash('error','密码错误');
                res.redirect('/login');
            }
        }
    });
});

// 发帖
app.post('/add/msg',(req,res)=>{
    // console.log(req.session);
    if (req.session.user) {
        res.send(req.session.user.username+'发帖成功');
    } else {
        // res.send('请登录');
        req.flash('error','请登录');
        res.redirect('/');
    }
});

// 退出登录
app.get('/logout',(req,res)=>{
    req.session.user = null;
    res.redirect('/');
});



app.listen(3000,()=>{
    console.log('node running');
});