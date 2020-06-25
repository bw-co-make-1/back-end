const db = require('../../config/dbConfig.js')
module.exports = {
    getComments,
    addComment,
    byId,
    removeComment
}

function getComments() {
    return db('comments')
}

function addComment(comment) {
    return db('comments')
    .insert(comment)
}

function byId(id){
    return db('issues as I')
    .join(' comments as C', 'C.issue_id','I.id'  )
    .where('C.issue_id', '=', id)
    .select('C.id',
     'I.issue',
     'C.comment'
      )
}

function removeComment(id) {
    return db("comments")
      .where({ id })
      .del();
  }