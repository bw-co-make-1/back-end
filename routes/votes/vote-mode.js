const db = require('../../config/dbConfig.js')


function getVotesByIssue(issueId) {
    return db('votes')
    .where('issue_id', issueId)
}

async function addVote(issueId) {
    voteData = 
  const [id] = await db("votes")
  .insert({
      upVoted: 'true'
  })

  return findVoteById(id)
}

module.exports = {
    getVotesByPost,
    addVote
}