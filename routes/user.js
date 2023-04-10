const router = require('express').Router();
const userController = require('../controllers/userController');

router
    .route('/')
    .get(userController.getUser)
    .post(userController.userLogin);

router.route('/signup')
    .get(userController.getUser)
    .post(userController.addUser);

module.exports = router;