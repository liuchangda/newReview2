const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const static = require('koa-static')

const app = new Koa();


//加载模板引擎
app.use(views(path.join(__dirname,'/views')),{
  extension:'ejs'
})

app.use(static(
  path.join(__dirname, './public') /* 定义静态资源文件保存的目录 */
))

app.use(async (ctx)=>{
  let title="hello";
  await ctx.render('index.ejs',{
    title
  })
})


app.listen(8080)
console.log('[demo] start-quick is starting at port 80')