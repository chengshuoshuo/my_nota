在node的session的使用方法



```
var session = require('express-session');

var MongoStore = require('connect-mongo')(session);

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
```





