const router = require('express').Router();
const graphController = require('../controllers/graphController');

router
    .route('/journal-entry')
    .get(graphController.getJournal)
    .post(graphController.newEntry);

router
    .route('/icons')
    .get(graphController.getIcons)
    .post(graphController.newIcon);

module.exports = router;