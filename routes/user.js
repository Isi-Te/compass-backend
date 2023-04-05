const router = require('express').Router();
const userController = require('../controllers/userController');

router
    .route('/')
    .get(userController.getUser)
    .post(userController.userLogin);

module.exports = router;