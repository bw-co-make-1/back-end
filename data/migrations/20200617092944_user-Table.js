
exports.up = async function(knex) {
    await knex.schema.createTable("users", user => {
      user.increments();
      user
        .string("username", 128)
        .notNullable()
        .unique();
      user.string("password").notNullable();
      user
        .string("email")
        .notNullable()
        .unique();
      user.string("first_name");
      user.string("last_name");
      user.boolean("is_admin").defaultTo(false);
      user.timestamp("created_at").defaultTo(knex.fn.now());
    });
}
exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("users");
}
