const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

app.use(bodyParser());

router.get('/', (ctx) => {
    ctx.body = "koa-router中间件"
});
//path键值对+query 传参
// 1. "?name=lisi&age=23"   ->  get方式在浏览器地址栏以键值对的当时输入参数
// router.get('/index',(ctx)=>{
//     //let query = ctx.querystring;//1. "name=lisi&age=23"
//     let query = ctx.query;// 2. {name: 'lisi', age: 23}
//     console.log(query);
//     ctx.body = '姓名：'+query.name +","+"年龄："+query.age;
// })


//url+params
router.get('/index/:name/:age', (ctx) => {
    let params = ctx.params;//  {name: 'lisi', age: 23}
    console.log(params);
    ctx.body = '姓名：'+params.name +","+"年龄："+params.age;
})


//action->url: 规定当提交表单时向何处发送表单数据。
// router.get('/index',(ctx)=>{
//     let html = `
//       <h1>koa2 request post demo</h1>
//       <form method="POST" action="/regist">
//         <p>userName</p>
//         <input name="userName" /><br/>
//         <p>nickName</p>
//         <input name="nickName" /><br/>
//         <p>email</p>
//         <input name="email" /><br/>
//         <button type="submit" >submit</button>
//       </form>
//     `;  
//     ctx.body = html;
// })

/*
koa-bodyparser : 对于POST请求的处理，koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中 返回一个对象
*/
// router.post('/regist',(ctx)=>{
//     let data = ctx.request.body;
//     console.log(ctx);
//     ctx.body = data;
// })

app.use(router.routes()).use(router.allowedMethods());
    

app.listen(3000)
console.log('[demo] start-quick is starting at port 80')
