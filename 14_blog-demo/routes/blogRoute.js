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
router.get('/blogDetail',async (ctx)=>{
    await ctx.render('blogDetail',{
        
    })
})

module.exports = router;