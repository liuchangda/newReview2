const router = require('koa-router')();
const user = require('./users');
const blog = require('./blogs');
const db = require('../model/db.js')
const controllder = require('../controller/index')

router.get('/', controllder.welcome)

router.use('/user', user.routes(), user.allowedMethods());
router.use('/blog', blog.routes(), blog.allowedMethods());

module.exports = router
