const Comments = require('../routes/comments/comment-model')
const Issues = require('../routes/issues/issue-model')
const jwt = require("jsonwebtoken")


async function isCommentOwner(req, res, next) {
    const { commentId } = req.params
    const comment = await Comments.getSingleComment(commentId)

    let user = jwt.decode(req.headers.authorization)

    if(!comment) {
        return res.status(404).json({message: 'The specified comment could not be found.'})
    }

    if(comment.user_id === user.subject) {
        next()
    } else {
        return res.status(401).json({message: 'You are not authorized.'})
    }
}

async function isIssueOwner(req, res, next) {
    const { issueId } = req.params
    const issue = await Issues.byId(issueId)

    let user = jwt.decode(req.headers.authorization)

    if(!issue) {
        return res.status(404).json({message: 'The specified issue could not be found.'})
    }

    if(issue.user_id === user.subject) {
        next()
    } else {
        return res.status(401).json({message: 'You are not authorized.'})
    }
}

module.exports = {
    isCommentOwner,
    isIssueOwner
}