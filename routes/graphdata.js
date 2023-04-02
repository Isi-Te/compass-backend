const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuid } = require('uuid');

const FILE_PATH = './data/graphdata.json';

const getGraphData = () => {
    const graphData = JSON.parse(fs.readFileSync(FILE_PATH));
    return graphData;
}

router.route('/')
    .get((_req, res) => {
        const graphData = getGraphData();
        res.status(200).json(graphData);
    })
    .post((req, res) => {
        const graphObj = req.body;

        const newLog = {
            id: uuid(),
            timestamp: "1680470417",
            happy: graphObj.happy,
            sad: graphObj.sad,
            laughs: graphObj.laughs,
            frustrated: graphObj.frustrated,
            stress: graphObj.stress,
            sleep: graphObj.sleep,
            nutrition: graphObj.nutrition,
            energy: graphObj.energy,
            outdoors: graphObj.outdoors,
            fitness: graphObj.fitness,
            social: graphObj.social,
            selfcare: graphObj.selfcare,
            highlight: graphObj.highlight,
            lowlight: graphObj.lowlight
        }

        const graphData = getGraphData();
        graphData.push(newLog);

        fs.writeFileSync(FILE_PATH, JSON.stringify(graphData));

        res.status(200).json(newLog);
    })

module.exports = router;