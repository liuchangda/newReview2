const Koa = require('koa');
const views = require('koa-views');
const path = require('path')
const Router = require('@koa/router');
const bodyparser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();
app.use(bodyparser());

// 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

router.get('/', async (ctx) => {
    await ctx.render('index', {
        title: "ejs",
        message: "hello world",
        blogs: [
            {
                title: "aaaaa",
                createTime: "2021-02-01",
            },
            {
                title: "bbbb",
                createTime: "2021-02-02",
            },
        ]
    })
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log('[demo] start-quick is starting at port 3000');
