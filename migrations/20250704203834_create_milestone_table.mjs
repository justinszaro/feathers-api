
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
  await knex.schema.createTable('milestones', table => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('description').nullable();
    table.boolean('active').defaultTo(true);
    table.date('date').notNullable();
    table.integer('month').notNullable();
    table.integer('year').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
  await knex.schema.dropTable('milestones');
};
