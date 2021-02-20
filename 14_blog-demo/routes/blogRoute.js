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
// router.get('/blogDetail/:title/:content/:post_time',blogController.getBlogDetail);
router.get('/blogDetail/:blogId', blogController.getBlogDetail);


module.exports = router;