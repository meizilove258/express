var express = require('express');
var http = require('http');
var path = require('path');
var routes = require('./routes/index');
const db = require('./moogodb/db')

var app = express();


// var fs = require('fs'); // 此模板引擎依赖 fs 模块
// app.engine('ntl', function (filePath, options, callback) { // 定义模板引擎
//     fs.readFile(filePath, function (err, content) {
//         if (err) return callback(new Error(err));
//         // 这是一个功能极其简单的模板引擎
//         var rendered = content.toString().replace('#title#', '<title>'+ options.title +'</title>')
//             .replace('#message#', '<h1>'+ options.message +'</h1>');
//         return callback(null, rendered);
//     })
// });
// app.set('views', './views'); // 指定视图所在的位置
// app.set('view engine', 'ntl'); // 注册模板引擎


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

http.createServer(app).listen(3000);
