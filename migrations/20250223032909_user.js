export async function up(knex) {
  await knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('first_name')
    table.string('last_name')
    table.string('email').unique()
    table.string('password')
    table.string('googleId').nullable()
    table.string('githubId').nullable()
    table.string('created_at').defaultTo(knex.fn.now())
    table.string('updated_at').defaultTo(knex.fn.now())
    table.string('deleted_at').nullable()
  })
}

export async function down(knex) {
  await knex.schema.dropTable('users')
}
