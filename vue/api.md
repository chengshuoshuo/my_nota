服务器代理vue.config.js项目根目录下
```
module.exports = {
    devServer: {
        proxy: {
            '/element': {
                target: 'https://h5.ele.me/restapi/bgs/poi/reverse_geo_coding?latitude=32.0583&longitude=118.7964',
                secure:false,
                changeOrigin: true,
                pathRewrite: {
                    "^/element":''
                }
            }
        },
    }
};
```


html5获取定位方法
navigator.geoloaction.getCurrentPosition()
localStorage   只能存储字符串 持久化存储直到手动删除 本地存储
sessionStorage  只能存储字符串 会话存储页面关闭释放