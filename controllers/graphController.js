const knex = require('knex')(require('../knexfile'));
const { v4: uuid } = require('uuid');

exports.index = (_req, res) => {
    knex('journal')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) =>
            res.status(400).send(`Error retrieving Journal: ${err}`)
        );
};

exports.newLog = (req, res) => {

    const newLog = { id: uuid(), ...req.body }

    knex('journal')
        .insert(newLog)
        .then(() => {
            res.status(201).json(newLog);
        })
        .catch((error) => res.status(400).send(`Error creating Journal Entry: ${error}`));
};