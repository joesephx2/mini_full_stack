
exports.up = function (knex) {
    return knex.schema.createTable('todolist', table => {
        table.increments('id'); // adds an auto incrementing PK column
        table.string('todo').notNullable();
        table.boolean('iskept');
        table.timestamp('timelog', { precision: 6 }).defaultTo(knex.fn.now(6));
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('todolist');
};
