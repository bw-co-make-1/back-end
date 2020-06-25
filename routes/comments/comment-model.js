const db = require('../../config/dbConfig')


function getAllComments(issueId) {
  return db('comments')
  .select('issue_id', issueId)
}

function getSingleComment(id) {
  return db('comments')
  .where({id})
  .first()
}

async function postNewComment(newComment) {
  try {
    const [id] = await db('comments').insert(newComment, 'id')
    
    return getSingleComment({id})
  } catch (error) {
    throw error
  }
}

async function putComment(commentId, commentData) {
  try {
    const [id] = await db('comments')
    .where('id', commentId)
    .update({commentData})
    
    return getSingleComment({id})
  } catch (error) {
    throw error
  }
}

function deleteComment(commentId) {
  try {
    return db('comments')
    .where('id', commentId)
    .del()
  } catch (error) {
    throw error
  }
}


module.exports = {
  getAllComments,
  getSingleComment,
  postNewComment,
  putComment,
  deleteComment
}