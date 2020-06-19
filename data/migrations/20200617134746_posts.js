exports.up = function( knex ) {
    knex.schema.createTable("posts", tbl => {
        tbl.increments()
        tbl.string("title", 255).notNullable()
        tbl.text("description").notNullable()
        tbl.string("postPhotoURL").defaultTo("")
        tbl.string("city", 125).notNullable()
        tbl.string("state", 125).notNullable()
        tbl.string("zipCode", 5).notNullable()
        tbl.foreign('userId').references('id').inTable('users').onDelete("CASCADE").onUpdate("CASCADE")
        tbl.integer("userId").unsigned().notNullable()
        tbl.timestamp("createdAt").defaultTo(knex.fn.now())
        tbl.timestamp("updatedAt").defaultTo(knex.fn.now())
    })
}

exports.down = function( knex ) {
    knex.schema.dropTableIfExists("posts")
}