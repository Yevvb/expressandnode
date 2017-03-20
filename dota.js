// require 是用来引入模块的
var express = require('express');

// 相对路径的设置目的就是为了防止去 node_moudles 查找模块，手动加载
var fortune = require('./lib/fortune.js');

console.log(fortune);// { getFortune: [Function] }

var app = express();

// 关联模板引擎
var handlebars = require('express3-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

// static 中间件可以将一个或者多个目录指派为包含静态资源的目录，其中的资源不经任何特殊处理直接发送到客户端
app.use(express.static(__dirname + '/public'));

// var fortunes = [
//     "Conquer your fears or they will conquer you.",
//     "Rivers need springs.",
//     "Do not fear what you don't know.",
//     "You will have a pleasant surprise.",
//     "Whenever possible, keep it simple.",
// ];

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/about', function(req, res) {
	var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
	// 这里可以使用 fortune 模块中导出的 getFortune 方法
    res.render('about', { fortune: fortune.getFortune() });
});

// 404 catch-all 处理器（中间件）
app.use(function(req, res, next) {
    res.status(404);
    res.render('404');
});

// 500 错误处理器（中间件）
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
