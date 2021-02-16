const model = require('../modules/blogModel')

module.exports = {
    async welcome(ctx) {
        let results = await model.getBlogs();
        await ctx.render('index', {
            blogs: results
        })
    }
}