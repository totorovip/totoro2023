var http = require('http');
var result;
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'test'
});
 
connection.connect();
 
connection.query('select * from t_user', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
  result = results;
});

http.createServer(function (request, response) {

// 发送 HTTP 头部 
// HTTP 状态值: 200 : OK
// 内容类型: text/plain
// response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});

// 发送响应数据 "Hello World"
response.end(JSON.stringify(result));
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
