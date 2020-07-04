const Comments = require('../routes/comments/comment-model.js')
const Issues = require('../routes/issues/issue-model.js')
const jwtDecode = require('jwt-decode');

async function isCommentOwner(req, res, next){
    let user = jwtDecode(req.headers.authorization)
    // console.log(user)
    const { id } = req.params
    const comment = await Comments.getSingleComment(id)
    if(!comment){
        return res.status(404).json({message:'Specified Comment could not be found.'})
    }
    if(comment.user_id === user.subject){
        next();
    }else{
        return res.status(401).json({message: 'You are not owner of this Comment.'})
    }
}

async function isIssueOwner(req, res, next){
    let user = jwtDecode(req.headers.authorization)
    // console.log(user)
    const { id } = req.params
    const issue = await Issues.getSingleIssue(id)
    if(!issue){
        return res.status(404).json({message:'Specified Issue could not be found.'})
    }
    if(issue.user_id === user.subject){
        next();
    }else{
        return res.status(401).json({message: 'You are not owner of this Issue.'})
    }
}

module.exports={
isCommentOwner,
isIssueOwner
}