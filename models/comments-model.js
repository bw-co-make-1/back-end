const db = require('../data/db-config')


function find(postId) {
    // returns all comments belonging to supplied postId and orders them by their createdAt date
  return db('comments').select(postId).orderBy('createdAt', 'desc')
}

function findBy(filter) {
  return db('users').where(filter).orderBy('id')
}

async function add(user) {
  try {
    const [id] = await db('users').insert(user, 'id')

    return findById(id)
  } catch (error) {
    throw error
  }
}

function findById(id) {
  return db('users').where({ id }).first()
}


module.exports = {
  add,
  find,
  findBy,
  findById,
}