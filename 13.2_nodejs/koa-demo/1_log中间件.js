const Koa = require("koa");
const logger = require("./log"); //自定义中间件
let fs = require('fs');

const app = new Koa();

app.use(async (ctx) => {
    ctx.body = await logger(ctx)
});

app.listen(3000);
console.log("[demo] start-quick is starting at port 3000");
