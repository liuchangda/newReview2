const db = require('./db');

module.exports = {
    getBlogs() {
        return db.query(`select * from t_blog`)
    },
    createBlog(blog) {
        return db.query(`INSERT INTO t_blog SET ? `, blog);
    },
    getBlogDetail(blogId) {
        return db.query(`select * from t_blog where blog_id=${blogId}`)
    },
    getBlogComments(blogId) {
        return db.query(`select * from t_comment where blog_id=${blogId}`);
    }
}