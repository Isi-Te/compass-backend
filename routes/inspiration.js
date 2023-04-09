const express = require('express');
const router = express.Router();
const fs = require('fs');

const FILE_PATH = './data/inspiration.json';

const getInspiration = () => {
    const inspirationalQuote = JSON.parse(fs.readFileSync(FILE_PATH));
    return inspirationalQuote;
}

router.route('/')
    .get((_req, res) => {
        const inspirationalQuote = getInspiration();
        res.status(200).json(inspirationalQuote);
    });

module.exports = router;