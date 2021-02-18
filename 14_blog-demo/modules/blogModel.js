const db = require('./db');

module.exports = {
    getBlogs() {
        return db.query(`select * from t_blog`)
    },
    createBlog(blog){
        return db.query(`INSERT INTO t_blog SET ? `, blog);
    }
}