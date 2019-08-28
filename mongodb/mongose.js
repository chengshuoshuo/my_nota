var express = require('express');

var app = express();

app.use(express.static('public'));

// mongoose 模块是在node环境中对mongoDB数据操作的封装，是一种对象模型工具，可以将数据库中的数据转化为js对象供我们使用
var mongoose = require('mongoose');

// mongoose.connect 连接数据库
// 参数1：连接地址 zy6 是数据库的名称，如果没有会自动创建
// 参数2：是一个配置对象
// 参数3：连接完成的回调函数
mongoose.connect('mongodb://127.0.0.1:27017/zy6',{useNewUrlParser:true},(err)=>{
    if (err) {
        console.log('数据库连接失败');
    } else {
        console.log('数据库连接成功');
    }
});

/**
 {
    "_id" : ObjectId("5d25988de1f633649d4d2271"),
    "name" : "tom",
    "age" : 22.0
}
 */

// Schema 是mongoose中表的描述对象：规定表中有几个字段，每个字段是什么类型，但是他不具备操作数据库的能力
var Schema = mongoose.Schema;
var stuSchema = new Schema({
    // _id  会自动增长不需要预定义
    name:String,
    age:Number
});

// 根据表的描述对象生成模型（类/构造函数），这个模型是表的操作对象，可以对数据库进行 增 删 改 查
// stus 是数据zy6中 一张表
var Student = mongoose.model('stus',stuSchema);

// 通过 Student 模型对数据库进行 增删改查
console.log(Schema.Types);
//查看支持的数据类型
// 1.增加
app.get('/stu/add',(req,res)=>{
    console.log(req.query);
    // 创建模型的实例，实例中保存的数据就是要向数据库表中插入的数据
    var s = new Student(req.query);
    s.save((err)=>{
        if (err) {
            res.send('保存失败');
        } else {
            res.send('保存成功');
        }
    });
});
// 2.查询
app.get('/stu/find',(req,res)=>{
    var condition = {};
    if (req.query.name) {
        condition.name = req.query.name;
    }
    console.log(condition);
    Student.find(condition,(err,data)=>{
        if (err) {
            res.send('查询失败');
        } else {
            console.log(data);
            res.send(JSON.stringify(data));
        }
    });
});
//query对象可以使用链式调用的方式在数据库查询结果
//find()不添加回调函数时返回query对象




// 3.更新
app.get('/stu/update',(req,res)=>{
    // Student.update
    // Student.updateOne
    // 根据名字更新年龄
    var condition = {};
    if (req.query.name) {
        condition.name = req.query.name;
    }
    // 参数1：条件；参数2：更新哪些数据；参数3：回调函数
    Student.updateOne(condition,{
        age:req.query.age
    },(err)=>{
        if (err) {
            res.send('更新失败');
        } else {
            res.send('更新成功');
        }
    });

});
// 4.删除
app.get('/stu/del',(req,res)=>{
    var condition = {};
    if (req.query.name) {
        condition.name = req.query.name;
    }
    
    Student.deleteOne(condition,(err)=>{
        if (err) {
            res.send('删除失败');
        } else {
            res.send('删除成功');
        }
    });
});
// 5.查询表中有多少条数据
app.get('/stu/count',(req,res)=>{
    var condition = {};
    if (req.query.name) {
        condition.name = req.query.name;
    }
    
    Student.countDocuments(condition,(err,count)=>{
        if (err) {
            res.send('查询失败');
        } else {
            res.send('删除成功：'+count);
        }
    });
});


 Grade.findOne({
        //多条件模糊查询
        $or:[
            {major:{$regex:req.body.major,$options:'$i'}},
            {class:{$regex:req.body.classroom,$option:'$i'}}
        ]
    })


app.listen(3000,()=>{
    console.log('node running');
});