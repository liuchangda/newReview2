const Koa = require('koa');
const app = new Koa();

function getData() {
    setTimeout(() => {
        return 'hhh'
    }, 2000);
}

app.use(async (ctx)=>{
    console.log(await getData());
})

app.listen(3000);
console.log('[demo] start-quick is starting at port 3000');