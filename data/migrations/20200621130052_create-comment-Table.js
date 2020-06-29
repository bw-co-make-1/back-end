
exports.up = async function(knex) {
    await knex.schema.createTable("comments", comment => {
      comment.increments();
      comment.string("comment").notNullable();
      comment.integer("user_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("users")
      // .onUpdate("CASCADE")
      // .onDelete("CASCADE");
      comment.integer("issue_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("issues")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
      comment.timestamp("created_at").defaultTo(knex.fn.now());
    });
}
exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("comments");
}