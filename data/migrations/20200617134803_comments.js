exports.up = function( knex ) {
    await knex.schema.createTable("comments", tbl => {
        tbl.increments()
        tbl.text("text", 500).notNullable()
        tbl.string("username").notNullable()
        tbl.integer("postId").unsigned().notNullable()
        tbl.integer("userId").unsigned().notNullable()
        tbl.foreign('postId').references('id').inTable('posts').onDelete("CASCADE").onUpdate("CASCADE")
        tbl.foreign('userId').references('id').inTable('users').onDelete("CASCADE").onUpdate("CASCADE")
        tbl.timestamp("createdAt").defaultTo(knex.fn.now())
        tbl.timestamp("updatedAt").defaultTo(knex.fn.now())
    })
}

exports.down = async function( knex ) {
    await knex.schema.dropTableIfExists("comments")
}