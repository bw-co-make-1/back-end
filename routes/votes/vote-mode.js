const db = require('../../config/dbConfig.js')
module.exports = {
    getVote,
    addVote,
    findBy
}

async function getVote(issueId) {
    return await db('votes')
    .where('issue_id', issueId)
    .andWhere('upVoted', true)
}

  function addVote(vote) {
    return db('votes')
    .insert(vote)
}

function findBy(filter) {
    return db("votes")
      .where(filter)
      .select("user_id", "issue_id");
  }