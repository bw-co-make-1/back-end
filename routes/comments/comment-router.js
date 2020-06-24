const router = require('express').Router();
const Comments = require('./comment-model.js')


router.post('/:user_id/:issue_id', async(req, res)=>{
    try {
         await Comments.addComment({ comment: req.body.comment, user_id: req.params.user_id, issue_id: req.params.issue_id })
        res.status(201).json({message:'New Comment added'})

    }catch{
        res.status(500).json({message: 'Error posting new Comment.'})
    }
})
router.get('/', async(req, res)=>{
    try{
        const found = await Comments.getComments()
        if (found){
            res.status(200).json(found)
        }else{
            res.status(401).json({message: 'No Comment to Display'})
        }
    }catch{
        res.status(500).json({message: 'Error Loading Comment'})
    }
})
module.exports = router