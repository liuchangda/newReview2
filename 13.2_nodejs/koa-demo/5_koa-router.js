//npm i @koa/router
const Koa = require('koa');
const Router = require('@koa/router');
const bodyparser = require('koa-bodyparser');

const app = new Koa();
app.use(bodyparser());
const router = new Router();

router.get('/',async (ctx)=>{
    ctx.body = 'index...';
})

//键值对+ctx.query
router.get('/todo', async (ctx) => {
    ctx.body = ctx.query;//对象
})


//url+ctx.params
router.get('/index/:name/:age', async (ctx) => {
    ctx.body = ctx.params;//对象
})

let html = `
    <h1>koa2 request post demo</h1>
    <form method="POST" action="/regist">
      <p>userName</p>
      <input name="userName" /><br/>
      <p>nickName</p>
      <input name="nickName" /><br/>
      <p>email</p>
      <input name="email" /><br/>
      <button type="submit">submit</button>
    </form>
  `;

  router.get('/regist',async (ctx)=>{
      ctx.body = html

  })
  router.post('/regist',async (ctx)=>{
      ctx.body = ctx.request.body //{"userName":"li","nickName":"zi","email":"lisi@163.com"}
  })




// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
console.log('[demo] start-quick is starting at port 3000');
