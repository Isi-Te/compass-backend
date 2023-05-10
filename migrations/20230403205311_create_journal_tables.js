/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('user', (table) => {
        table.string('id').primary();
        table.string('username').notNullable();
        table.string('name').notNullable();
        table.string('password').notNullable();
    }).createTable('journal', (table) => {
        table.string('id').primary();
        table.timestamp('date').defaultTo(knex.fn.now());
        table.integer('user_id').notNullable();
        table.integer('happy').notNullable();
        table.integer('sad').notNullable();
        table.integer('frustrated').notNullable();
        table.integer('stress').notNullable();
        table.integer('sleep').notNullable();
        table.integer('nutrition').notNullable();
        table.integer('fitness').notNullable();
        table.integer('social').notNullable();
        table.integer('qualitytime').notNullable();
        table.string('highlight').notNullable();
        table.string('lowlight').notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('user').dropTable('journal');
};
