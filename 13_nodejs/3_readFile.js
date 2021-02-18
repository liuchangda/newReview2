let fs = require('fs');
// fs.readFile("file.txt","utf-8",(err,data)=>{
//     if(err){
//         console.error(err);
//     }else{
//         console.log(data);
//     }
// });
// console.log("end");

let res = fs.readFileSync("file.txt","utf-8");
console.log(res);