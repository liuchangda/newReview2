const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const staticPath = require('koa-static')
const bodyparser = require('koa-bodyparser');
const router = require('./routes/index');


const app = new Koa();
app.use(bodyparser());
/* 配置静态资源文件保存的目录 */
app.use(staticPath(
    path.join(__dirname, '/public')
))
/* 加载模板引擎 */
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(3001);
console.log(3000);