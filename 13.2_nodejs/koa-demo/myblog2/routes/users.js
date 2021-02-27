const router = require('koa-router')()
const controller = require('../controller/userC.js');

router.get('/login',async (ctx)=>{
  await ctx.render('login')
})

router.post('/login',controller.login)

router.get('/regist',async (ctx)=>{
  await ctx.render('regist')
})

router.post('/regist',controller.regist)

module.exports = router
