const db = require('../../config/dbConfig.js')
module.exports = {
    getVote
}

async function getVote(issueId) {
    return await db('votes')
    .where('issue_id', issueId)
    .andWhere('upVoted', true)
}