const Ctrl = require('../controllers/ctrlFile');
const Router = require('koa-router');
const router = new Router();




router.post('/user', Ctrl.Response.post,
                     Ctrl.Trans.exec,
                     Ctrl.User.create,
                     Ctrl.Organization.create,
                     Ctrl.OrgUser.create,
                     Ctrl.UserToken.create);

router.post('/login', Ctrl.Response.post, Ctrl.Auth.sign);

module.exports = router;