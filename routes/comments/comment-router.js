const router = require('express').Router();
const Comments = require('./comment-model.js')
const { isCommentOwner } = require('../../middleware/isOwner')


// Get all comments for specified post
router.get("/:issueId", ( req, res ) => {
    const { issueId } = req.params

    Comments.getAllComments(postId)
    .then(comments => {
      res.status(200).json(comments)
    })
    .catch(err => res.send(err))
})

// Post a new comment on specified post
router.post("/:issueId", ( req, res ) => {
    let decoded = jwt.decode(req.headers.authorization)
    const { id } = decoded
    const { issueId } = req.params
    const commentData = {
        comment: req.body.comment,
        user_id: id,
        issue_id: issueId
    }

    Comments.postNewComment(commentData)
    .then(newComment => {
        res.status(201).json(newComment)
    })
    .catch(err => res.send(err))
})

// Update specified comment
router.put("/:commentId", isCommentOwner, async ( req, res ) => {
    const { commentId } = req.params
    const commentData = {
        comment: req.body.comment,
    }

    await Comments.putComment(commentId, commentData)
    .then(comment => {
        res.status(201).json(comment)
    })
    .catch(err => res.send(err))
})

// Delete specified comment
router.delete("/:commentId", isCommentOwner, async ( req, res ) => {
    const { commentId } = req.params
    
    await Comments.deleteComment(commentId)
    .then(res => {
        res.status(200).json({message: 'Comment has been deleted.'})
    })
    .catch(err => res.send(err))
})

module.exports = router