var http = require('http');
var querystring = require('querystring');
 
var postHTML = 
  '<html><head><meta charset="utf-8"><title>post请求 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '用户名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';


var mysql      = require('mysql');
var connection = mysql.createConnection({
host     : 'localhost',
user     : 'root',
password : '123456',
database : 'test'
});


http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    // 解析参数
    body = querystring.parse(body);
    // 设置响应头部信息及编码
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
 
    if(body.name && body.url) { // 输出提交的数据
        res.write("网站名：" + body.name);
        res.write("<br>");
        res.write("网站 URL：" + body.url);
        console.log('>>>name', body.name, body.url);
        /** 写入到db */
        let sql = `INSERT INTO test.t_user (name) VALUES (?)`;
        let sqlParams = [body.name];

        // execute the insert statment
        connection.connect();
        // connection.query(sql);
        connection.query(sql,sqlParams,function (err, result) {
            if(err){
             console.log('[INSERT ERROR] - ',err.message);
             return;
            }        
           console.log('--------------------------INSERT----------------------------');
           console.log('INSERT ID:',result);        
           console.log('-----------------------------------------------------------------\n\n');  
    });
        connection.end();
    } else {  // 输出表单
        res.write(postHTML);
    }
    res.end();
  });
}).listen(3000);