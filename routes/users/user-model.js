const db = require('../../data/dbConfig.js')
module.exports = {
    getUsers
}

function getUsers() {
    return db('users').select('id', 'username', 'first_name', 'last_name').orderBy('id')
}