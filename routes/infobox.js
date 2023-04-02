const express = require('express');
const router = express.Router();
const fs = require('fs');

const FILE_PATH = './data/infobox.json';

const getInfobox = () => {
    const infoboxDetails = JSON.parse(fs.readFileSync(FILE_PATH));
    return infoboxDetails;
}

router.route('/')
    .get((_req, res) => {
        const infoboxDetails = getInfobox();
        res.status(200).json(infoboxDetails);
    });

module.exports = router;