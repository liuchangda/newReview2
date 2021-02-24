const db = require('./db');

module.exports = {
    getUserByNameAndPwd(username, password) {
        return db.query(`SELECT * FROM t_user where username=? and password =? `, [username, password])
    },
    saveUser(user) {
        //return db.query(`INSERT INTO t_user SET ?`, user)
        return db.query(`INSERT INTO t_user(username, nickname, password) VALUES('${user.username}', '${user.nickname}', '${user.password}')`)

    }
}