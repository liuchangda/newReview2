//npm i @koa/router
const Router = require('@koa/router');
const user = require('./userR');
const blog = require('./blogR')
const router = new Router();

router.get('/',async (ctx) => {
    await ctx.render('index',{
        errMessage: ''
    });
})

router.use('/user', user.routes(), user.allowedMethods())
router.use('/blog', blog.routes(), blog.allowedMethods())

module.exports = router
