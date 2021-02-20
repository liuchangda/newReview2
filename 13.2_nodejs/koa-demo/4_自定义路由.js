const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

function render(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

app.use(async (ctx) => {
    let url = ctx.url;
    if (url === '/' || url === '/index') {
        ctx.body = await render('./views/index.html');
    } else if(url === '/todo'){
        ctx.body = await render('./views/todo.html');
    }else{
        ctx.body = await render('./views/404.html')
    }
})


app.listen(3000);

console.log('[demo] start-quick is starting at port 3000');