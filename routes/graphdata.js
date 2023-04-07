const router = require('express').Router();
const graphController = require('../controllers/graphController');

router
    .route('/journal-entry')
    .get(graphController.getJournal)
    .post(graphController.newEntry);

module.exports = router;