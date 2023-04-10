const knex = require('knex')(require('../knexfile'));
const jwt = require('jsonwebtoken');
const { v4: uuid } = require('uuid');
const bcrypt = require('bcrypt');

const JWT_SECRET = "58yuht4jrgkv9sdf8uht";

exports.getUser = (req, res) => {
    knex('user')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) =>
            res.status(400).send(`Error retrieving user: ${err}`)
        );
};

exports.userLogin = (req, res) => {
    const { username, password } = req.body;

    knex('user')
        .where({ username })
        .first()
        .then((user) => {
            if (!user) {
                res.status(404).json({
                    error: 'Username not found.'
                });
                return;
            }

            if (password !== user.password) {
                res.status(401).json({
                    error: 'Invalid password.'
                });
                return;
            }

            const token = jwt.sign({ username: user.username }, JWT_SECRET);
            res.status(200).json({ token });
        })
        .catch((err) => {
            console.error(`Error retrieving user: ${err}`);
            res.status(500).json({ error: 'Internal server error.' });
        });
};

exports.addUser = (req, res) => {
    const { name, username, password } = req.body;

    const addUser = { id: uuid(), ...req.body }

    knex('user')
        .where({ username })
        .first()
        .then((user) => {
            if (name || password || username === "") {
                res.status(404).json({
                    error: 'Information incomplete.'
                });
                return;
            }
            if (username === user.username) {
                res.status(409).json({
                    error: 'Username already exists.'
                });
                return;
            }
            knex('user')
                .insert(addUser)
                .then(() => {
                    res.status(201).json(addUser);
                })
                .catch((error) => res.status(400).send(`Error signing up new user: ${error}`));
        })
}

// knex('user')
//     .insert(userLogin)
//     .then(() => {
//         res.status(201).json(userLogin);
//     })
//     .catch((error) => res.status(400).send(`Error creating Journal Entry: ${error}`));

// exports.userLogin = (req, res) => {
//     const { username, password } = req.body;

//     knex('user')
//         .where({ username })
//         .then((data) => {
//             if (data.length === 0) {
//                 res.status(404);
//                 res.json({
//                     error: "User not found"
//                 });
//             } if (password !== data[0].password) {
//                 res.status(401);
//                 res.json({
//                     error: "Password is incorrect."
//                 });
//             }

//             let token = jwt.sign({ username });
//             res.status(201).json({ token });

//         })
//         .catch((err) => {
//             console.error(`Error retrieving user: ${err}`);
//             res.status(500).json({ error: "Internal server error." });
//         });
// }