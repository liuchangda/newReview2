const Router = require('@koa/router');
const router = new Router();
const blogController = require('../controllers/blogController')


/* 首页 */
router.get('/', blogController.welcome);

/* 写博客 */
router.get('/createBlog',async (ctx)=>{
    await ctx.render('create');
});
router.post('/createBlog', blogController.createBlog);

/* 博客详情 */
//url+params
router.get('/blogDetail/:title/:content/:post_time',async (ctx)=>{
    let params = ctx.params
    await ctx.render('blogDetail',{
        params:params
    })
})

module.exports = router;