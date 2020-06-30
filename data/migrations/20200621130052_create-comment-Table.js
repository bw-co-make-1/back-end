
exports.up = async function(knex) {
  await knex.schema.createTable("comments", comments => {
    comments.increments();
    comments.string("comment").notNullable();
    comments
      .integer("issue_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("issues")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    comments
      .integer("user_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    comments.timestamp("created_at").defaultTo(knex.fn.now());
  });
};
exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("comments");
}