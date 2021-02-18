// module.exports = (ctx) => {
//     console.log(ctx.url);
// }
const fs = require('fs');

fs.readFile('log.txt', 'utf-8', (err, data) => {
    console.log(data);
})
module.exports = ()=>{
    fs.readFile('log.txt','utf-8',(err,data)=>{
        console.log(data);
    })
}