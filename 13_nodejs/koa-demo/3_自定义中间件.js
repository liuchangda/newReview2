const Koa = require('koa') //没有路径 默认在node_modules中查找 默认加载js的主入口文件
const app = new Koa()
const logger = require('./logger')

app.use(logger)

app.listen(8080)
console.log('[demo] start-quick is starting at port 80')