const Router = require('@koa/router');
const router = new Router();
const blogController = require('../controllers/blogControlle')


/* 首页 */
router.get('/', blogController.welcome)

module.exports = router;