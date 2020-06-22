
exports.up = async function(knex) {
    await knex.schema.createTable("issues", issue => {
      issue.increments();
      issue.string("issue").notNullable();
      issue.string("description").notNullable();
      issue.string("photo").unique();
      issue.string("city").notNullable();
      issue.string("state", 2).notNullable();
      issue.integer("zip_code", 5).notNullable()
      issue
      .integer("user_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
      issue.timestamp("created_at").defaultTo(knex.fn.now());
    });
}
exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("issues");
}