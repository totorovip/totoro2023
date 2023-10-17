// // src/server/index.js

// const Koa = require('koa'); // 引入 koa
// const router = require('koa-router')(); // 引入 koa-router
// const bodyParser = require('koa-bodyparser'); // 引入 koa-body-parser
// const app = new Koa(); // 起一个 koa 服务器

// app.use(bodyParser()); // 还没派上用场，先放这儿

// // 这两个请求处理，是用来测试的
// router.get('/', async (ctx, next) => {
//     // ctx 是对请求的 request 和 response 对象的封装
//     ctx.response.body = '<h1>Home</h1>';
// })
// router.get('/api/login', async (ctx, next) => {
//     ctx.response.body = '<h1>Login</h1>';
// })

// app.use(router.routes());

// app.listen(1129); // 设置服务器的端口
// console.log('App started at port 1129...');


// src/server/index.js
/** 改进 */
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const controller = require('../server/controller');

app.use(bodyParser());

app.use(controller());

app.listen(1129);
console.log('App started at port 1129...')
