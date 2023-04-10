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

//create getUserJournal

exports.newEntry = (req, res) => {

    const newLog = { id: uuid(), ...req.body }

    //validation here -- get timestamp and convert to today date == const today date
    // if (req.body.date =)

    knex('journal')
        .insert(newLog)
        .then(() => {
            res.status(201).json(newLog);
        })
        .catch((error) => res.status(400).send(`Error creating Journal Entry: ${error}`));
};