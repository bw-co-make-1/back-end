const db = require('../../config/dbConfig.js')
module.exports = {
    getUsers,
    getById,
    updateUser,
    removeAccount
}

function getUsers() {
    return db('users').select('id', 'username', 'first_name', 'last_name').orderBy('id')
}

function getById(id) {
    return db("users")
      .where({ id })
      .first(
        "id",
        "first_name",
        "last_name",
        "username",
        "email",
        "is_admin",
        "created_at"
      )
      .orderBy("id", "asc");
  }

  function updateUser(id,changes){
      return db('users')
      .where({id})
      .update(changes)
  }

  function removeAccount(id) {
    return db("users")
      .where({ id })
      .del();
  }