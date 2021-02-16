const Koa = require('koa');
const bodyparser = require('koa-bodyparser');/* 对于POST请求的处理，koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中 */
const staticPath = require('koa-static');
const views = require('koa-views');
const path = require('path')


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

const blogRoute = require('./routes/blogRoute');
const userRoute = require('./routes/userRoute');


// 加载路由中间件
app.use(blogRoute.routes()).use(blogRoute.allowedMethods());
app.use(userRoute.routes()).use(userRoute.allowedMethods());

app.listen(8080)
console.log('[demo] start-quick is starting at port 80')