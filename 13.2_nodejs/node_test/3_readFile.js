const fs = require('fs');

// fs.readFile('file.txt','utf-8',(err,data)=>{
//     if(err) throw err;
//     else console.log(data);
// })
// console.log('end'); //3-7行 先end 再Data

/* 将异步操作变同步 */
let res = fs.readFileSync('file.txt','utf-8');
console.log(res);