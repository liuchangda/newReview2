const Router = require('@koa/router');
const db = require('../modules/db.js');
const controller = require('../controllers/userC.js')
const router = new Router();


router.get('/', async (ctx) => {
    await ctx.render('index', {
        errMessage: ''
    });
})
router.get('/login', async (ctx) => {
    ctx.body = '登录'
})
router.get('/regist', async (ctx) => {
    await ctx.render('regist',{
        errMessage:''
    })
})
router.post('/login', controller.login);

router.post('/regist', controller.regist )


module.exports = router