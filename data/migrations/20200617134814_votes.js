exports.up = function(knex) {
    await knex.schema.createTable("votes", tbl => {
        tbl.increments()
        tbl.integer("userId").notNullable()
        tbl.integer("postId").unsigned().notNullable()
        tbl.foreign('postId').references('id').inTable('posts').onDelete("CASCADE").onUpdate("CASCADE")
        tbl.timestamp("createdAt").defaultTo(knex.fn.now())
        tbl.timestamp("updatedAt").defaultTo(knex.fn.now())
    })
}

exports.down = async function( knex ) {
    await knex.schema.dropTableIfExists("votes")
}