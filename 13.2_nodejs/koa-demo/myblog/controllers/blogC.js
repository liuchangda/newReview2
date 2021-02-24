const db = require('../modules/db.js');
module.exports = {
    getBlogs: async (ctx) => {
        let blogs = await db.query(`select * from t_blog`);
        // console.log(blogs);
        let newBlogs = blogs.map((blog) => {
            let time = blog.post_time;
            blog.post_time = time.getFullYear() + '-' + time.getMonth() + '-' + time.getDate();
            return blog;
        })
        await ctx.render('blog', {
            blogs: blogs
        })
    }
}