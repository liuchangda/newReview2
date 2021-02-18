const Router = require('@koa/router');
const router = new Router();
const userController = require('../controllers/userController')
const blogController = require('../controllers/blogControlle')


/* 首页 */
router.get('/', blogController.welcome)

/* 登录路由 */
router.get('/login', async (ctx) => {
    await ctx.render('login')
})
router.post('/login', userController.login)


/* 注册路由 */
router.get('/regist', async (ctx) => {
    await ctx.render('regist')
})
router.post('/regist', userController.saveUser)

module.exports = router;