const db = require('../../config/dbConfig.js')
module.exports = {
    getComments,
    addComment,
    byId,
    removeComment,
    updateComment,
    getSingleComment
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

function getSingleComment(id) {
    return db('comments')
    .where({id})
    .first()
  }
function updateComment(id, changes) {
    return db('comments')
    .where({id})
    .update(changes)
}

function removeComment(id) {
    return db("comments")
      .where({ id })
      .del();
  }