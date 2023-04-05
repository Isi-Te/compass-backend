const knex = require('knex')(require('../knexfile'));
const { v4: uuid } = require('uuid');

exports.getJournal = (_req, res) => {
    knex('journal')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) =>
            res.status(400).send(`Error retrieving Journal: ${err}`)
        );
};

exports.getIcons = (_req, res) => {
    knex('icons')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) =>
            res.status(400).send(`Error retrieving Journal: ${err}`)
        );
};

exports.newEntry = (req, res) => {

    const newLog = { id: uuid(), ...req.body }

    knex('journal')
        .insert(newLog)
        .then(() => {
            res.status(201).json(newLog);
        })
        .catch((error) => res.status(400).send(`Error creating Journal Entry: ${error}`));
};

exports.newIcon = (req, res) => {

    const newIcon = { id: uuid(), ...req.body }

    knex('icons')
        .insert(newIcon)
        .then(() => {
            res.status(201).json(newIcon);
        })
        .catch((error) => res.status(400).send(`Error creating Journal Entry: ${error}`));
};