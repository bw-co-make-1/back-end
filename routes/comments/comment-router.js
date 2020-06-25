const router = require('express').Router();
const Comments = require('./comment-model.js')
const { isCommentOwner } = require('../../middleware/isOwner')
const jwt = require("jsonwebtoken")


// Get all comments for specified post
router.get("/:issueId", async ( req, res ) => {
    const { issueId } = req.params

    await Comments.getAllComments(issueId)
    .then(comments => {
      res.status(200).json(comments)
    })
    .catch(err => res.send(err))
})

// Post a new comment on specified post
router.post("/:issueId", async ( req, res ) => {
    const user = jwt.decode(req.headers.authorization)
    const commentData = {
        id: null,
        comment: req.body.comment,
        user_id: user.subject,
        issue_id: req.params.issueId
    }

    await Comments.postNewComment(commentData)
    .then(newComment => {
        res.status(201).json(newComment)
    })
    .catch(err => res.send(err))
})

// Update specified comment
router.put("/:commentId", isCommentOwner, async ( req, res ) => {
    const id = req.params.commentId
    const commentData = {
        comment: req.body.comment
    }

    await Comments.putComment(id, commentData)
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