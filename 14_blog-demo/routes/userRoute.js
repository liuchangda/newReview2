const Router = require('@koa/router');
const router = new Router();
const userController = require('../controllers/userController')

/* 登录路由 */
router.get('/login', async (ctx) => {
    let loginUser = ctx.session.loginUser;
    await ctx.render('login',{
        user:loginUser
    })
})
router.post('/login', userController.login)


/* 注册路由 */
router.get('/regist', async (ctx) => {
    let loginUser = ctx.session.loginUser;
    await ctx.render('regist',{
        user:loginUser
    })
})
router.post('/regist', userController.saveUser)

module.exports = router;