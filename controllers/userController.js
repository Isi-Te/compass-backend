const knex = require('knex')(require('../knexfile'));
const jwt = require('jsonwebtoken');
const { v4: uuid } = require('uuid');

const secretKey = "58yuht4jrgkv9sdf8uht";

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

    const users = getUser();

    const name = req.body.name;
    const password = req.body.password;

    const Login = { id: uuid(), ...req.body }

    const user = users.find(user => user.name === name);

    if (user) {
        // Check if the password matches
        if (user.password === password) {
            // Login successful
            const token = jwt.sign({ name: name }, secretKey);
            res.json({
                token: token
            });
        } else {
            // Incorrect password
            res.status(401);
            res.json({
                error: "Password is incorrect."
            });
        }
    } else {
        // Username doesn't exist in our list of users
        res.status(404);
        res.json({
            error: "User not found"
        });
    }
}

// knex('user')
//     .insert(userLogin)
//     .then(() => {
//         res.status(201).json(userLogin);
//     })
//     .catch((error) => res.status(400).send(`Error creating Journal Entry: ${error}`));

