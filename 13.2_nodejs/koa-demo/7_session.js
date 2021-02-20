//npm i koa-session
const Koa = require('koa');
const session = require('koa-session');
const Router = require('@koa/router');
const views = require('koa-views');
const path = require('path');
const bodyparser = require('koa-bodyparser')


const app = new Koa();
const router = new Router();

app.use(bodyparser());
// 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))
// 配置session安全密钥
app.keys = ['123454679@#$%^&'];
// 加载session中间件
app.use(session(app));

router.get('/', async (ctx) => {
    await ctx.render('login')
})
router.post('/login', async(ctx)=> {
    let user = ctx.request.body;
    // ctx.session.username = user.userName;
    await ctx.render('welcome',{
        username:user.userName
    })

})
router.get('/userlist/:username',async (ctx)=>{
    await ctx.render('userlist',{
        username:ctx.params.username
    })
})


app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log('[demo] start-quick is starting at port 3000');
