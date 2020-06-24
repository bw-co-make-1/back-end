const db = require('../../config/dbConfig.js')
module.exports = {
    getComments,
    addComment
}

function getComments() {
    return db('comments')
}

function addComment(comment) {
    return db('comments')
    .insert(comment)
}