const Koa = require('koa') //没有路径 默认在node_modules中查找 默认加载js的主入口文件
const app = new Koa()

//app.use: 加载中间件 理解为第三方包
//同步操作，不需要加async
app.use(async (ctx) => {
    ctx.body = 'hello koa2'
})

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')