const mysql = require('mysql');

// 配置数据库连接池
var pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "blog-demo",
});

function query(sql,params) {
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,connection)=>{
            if(err) reject(err);
            connection.query(sql,params,
                (err,results,filed)=>{
                    connection.release();
                    if(err) reject(err);
                    resolve(results)
                });
        });
    });
};

module.exports ={
    query
}