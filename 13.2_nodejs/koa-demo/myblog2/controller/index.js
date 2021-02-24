const db = require('../model/db.js')

module.exports = {
    welcome: async (ctx) => {
        let blogs = await db.query(`select * from t_blog`)
        blogs = blogs.map((blog) => {
            let time = blog.post_time;
            blog.post_time = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate();
            return blog;
        })
        console.log(blogs);
        await ctx.render('index', {
            blogs
        })
    }
}