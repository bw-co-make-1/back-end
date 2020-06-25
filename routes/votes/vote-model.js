const db = require('../../config/dbConfig.js')


async function getVotesByIssue(issueId) {
    return await db('votes')
    .where('issue_id', issueId)
    .andWhere('upVoted', true)
}

async function postVotesByIssue(issueId, userId) {
    const checkForUpvote = await db('votes')
    .where('issue_id', issueId)
    .andWhere('user_id', userId)
    .first()

    if(checkForUpvote) {
        console.log('checkForUpvote.upVoted: ', checkForUpvote)
        switch (checkForUpvote.upVoted) {
            case 1:
                // vote exists and upVoted is 'true' so change upVoted to 'false'
                const downVote = await db('votes')
                .update({
                    upVoted: 0,
                    issue_id: issueId,
                    user_id: userId
                })

                // returns the new list of votes for the specified issue
                // returns empty if there are no upvotes
                return await getVotesByIssue(downVote)
            case 0:
                 // vote exists and upVoted is 'false' so change upVoted to 'true'
                 const upVote = await db('votes')
                 .update({
                    upVoted: 1,
                    issue_id: issueId,
                    user_id: userId
                 })

                 // returns the new list of votes for the specified issue
                 return await getVotesByIssue(upVote)
            default:
                break
        }

        // returns the new list of votes for the specified issue
        return getVotesByIssue(issueId)
    } else {
        // vote exists so change upVoted to 'false'
        const [id] = await db('votes')
        .insert({
            upVoted: false,
            issue_id: issueId,
            user_id: userId
        })

        // returns the new list of votes for the specified issue
        return getVotesByIssue(issueId)
    }
}

module.exports = {
    getVotesByIssue,
    postVotesByIssue
}