const Koa = require('koa') //没有路径 默认在node_modules中查找 默认加载js的主入口文件
const app = new Koa()

// let fn = ()=>{
//     let data='';
//     setTimeout(() => {
//         data = Math.random();
//     }, 2000);
//     return data;
// }

let fn = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           let data = Math.random();
            resolve(data)
        }, 2000);
    })
}
app.use(async (ctx) => {
    let res = await fn();
    ctx.body = res;
})




app.listen(8080)
console.log('[demo] start-quick is starting at port 80')