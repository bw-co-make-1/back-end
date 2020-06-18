exports.up = async function( knex ) {
    await knex.schema.createTable("users", user => {
        user.increments()
        user.string("username", 45).notNullable().unique()
        user.string("password", 255).notNullable()
        user.string("email", 320).notNullable().unique()
        user.string("firstName", 45).notNullable()
        user.string("lastName", 45).notNullable()
        user.text("profilePhotoURL").defaultTo("https://i0.wp.com/cms.ironk12.org/wp-content/uploads/2020/02/no-person-profile-pic.png?ssl=1")
        user.boolean("isAdmin").defaultTo(false)
        user.timestamp("createdAt").defaultTo(knex.fn.now())
        user.timestamp("updatedAt").defaultTo(knex.fn.now())
    })
}

exports.down = async function( knex ) {
    await knex.schema.dropTableIfExists("users")
}