const Router = require('@koa/router');
const db = require('../modules/db.js');
const controller = require('../controllers/blogC.js')
const router = new Router();

router.get('/list',controller.getBlogs )

module.exports = router
