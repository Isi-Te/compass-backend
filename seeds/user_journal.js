/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const userData = require('../seeds/seed_data/user');
const journalData = require('../seeds/seed_data/journal');

exports.seed = function (knex) {
  return knex('user')
    .del()
    .then(function () {
      return knex('user').insert(userData);
    })
    .then(() => {
      return knex('journal').del();
    })
    .then(() => {
      return knex('journal').insert(journalData);
    })
};
