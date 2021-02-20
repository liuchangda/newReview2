const model = require('../modules/blogModel');
const db = require('../modules/db');

module.exports = {
    async welcome(ctx) {
        let results = await model.getBlogs();
        let loginUser = ctx.session.loginUser;
        await ctx.render('index', {
            blogs: results,
            user: loginUser
        })
    },
    async createBlog(ctx) {
        // console.log(ctx.request.body);
        // 1.获取表单数据
        let { title, content } = ctx.request.body;
        // 2.安全验证
        // 3.连接数据库
        let results = await model.createBlog({ title, content });
        // let results = await db.query(`INSERT INTO t_blog SET ? `, { title, content });
        // console.log(results);
        if (results.insertId) {
            await ctx.redirect('/');
        } else {
            ctx.render('error', {
                message: '出错了'
            })
        }
    },
    async getBlogDetail(ctx) {
        let { blogId } = ctx.params;
        let result = await model.getBlogDetail(blogId);
        let comments = await model.getBlogComments(blogId);
        console.log(comments);
        await ctx.render('blogDetail', {
            params: result[0],
            comments:comments
        })
    }
}