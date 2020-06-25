const db = require('../../config/dbConfig')


function getAllComments(issueId) {
  return db('comments')
  .where('issue_id', issueId)
}

function getSingleComment(id) {
  return db('comments')
  .where({id})
  .first()
}

async function postNewComment(newComment) {
  const [id] = await db('comments').insert(newComment, 'id')
  return getSingleComment(id)
}

async function putComment(id, commentData) {
    await db('comments')
    .where('id', id)
    .update(commentData)
    
    return getSingleComment(id)
}

function deleteComment(commentId) {
    return db('comments')
    .where('id', commentId)
    .del()
}


module.exports = {
  getAllComments,
  getSingleComment,
  postNewComment,
  putComment,
  deleteComment
}