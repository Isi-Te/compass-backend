const router = require('express').Router();
const graphController = require('../controllers/graphController');

router
    .route('/')
    .get(graphController.index)
    .post(graphController.newLog);

module.exports = router;