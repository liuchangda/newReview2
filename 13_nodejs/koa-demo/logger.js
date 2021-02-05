const fs = require('fs')
function log(ctx) {
    let data = ctx.method+" "+ctx.header.host +" "+ ctx.url +" "+new Date() +'\n';
    // console.log(ctx.method, ctx.header.host + ctx.url);
    fs.appendFile('log.txt',data,()=>{
        console.log('日志已记录...');
    })
}

module.exports = async function (ctx, next) {
    log(ctx);
}
