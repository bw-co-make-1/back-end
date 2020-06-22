
exports.up = async function(knex) {
    await knex.schema.createTable("votes", vote => {
      vote.increments();
      vote.boolean("upVoted").defaultTo(false)
      vote.integer("issue_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("issues")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    });
}
exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("votes");
}