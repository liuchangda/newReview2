let mysql = require('mysql');
let { HOST, USER, PASSWORD, DATABASE } = require('../config/db.config');

let pool = mysql.createPool({
    connectionLimit: 10,
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE
});

/* 数据库查询 */
function query(sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
            } else {
                connection.query(
                    //"SELECT * FROM t_user where username='"+ username +"' and password='"+password +"'",
                    sql, values,
                    function (error, results) {
                        connection.release();//释放连接到pool中
                        if (error) {
                            reject(error);
                        }
                        else {
                            // console.log(results);
                            resolve(results);
                        }
                    });
            }
        });
    })
}

module.exports = {
    query: query,
}