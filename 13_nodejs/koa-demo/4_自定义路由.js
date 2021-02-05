const Koa = require('koa'); //没有路径 默认在node_modules中查找 默认加载js的主入口文件
const app = new Koa();
const fs = require("fs")

/* 
需求:
    1. http://localhost || http://localhost/index 加载index.html
    2. http://localhost/todo 加载todo.html
    3. http://localhost/xxx 加载404.html
那么我们的路由可以设定为：
    1. "/" 路由名字
    2. "/index"
    3. "/todo"
    4. "/xxx"
*/

//render渲染函数，一般用来加载页面
function render(path) {
    let fileName = "./views" + path + ".html";
    return new Promise((resolve, reject) => { //异步操作要返回 放在promise的函数中
        fs.readFile(fileName, 'utf-8', function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })

}

app.use(async (ctx) => {
    let url = ctx.url;
    let data = "";
    switch (url) {
        case "/":
        case "/index":
            data = await render('/index');
            break;
        case "/todo":
            data = await render("/todo");
            break;
        default:
            data = await render("/404");
            break;
    }
    ctx.body = data;
})

app.listen(8080)
console.log('[demo] start-quick is starting at port 80')