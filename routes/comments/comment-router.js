const router = require('express').Router();
const Comments = require('./comment-model.js')
const jwtDecode = require('jwt-decode')


//Post new issue with user information
router.post('/:issue_id', async(req, res)=>{
    try {
        let decoded = jwtDecode(req.headers.authorization)
    // console.log(decoded)
    const { subject} = decoded
    const { issue_id } = req.params
         await Comments.addComment({ comment: req.body.comment, user_id: subject, issue_id: issue_id })
        res.status(201).json({message:'New Comment added'})

    }catch{
        res.status(500).json({message: 'Error posting new Comment.'})
    }
})
//Get comments by Issue Id
router.get('/:issue_id', async (req, res) => {
    const { issue_id } = req.params
    try {
        const found = await Comments.byId(issue_id)
        if (found.length > 0) {
            res.status(200).json(found)
        } else {
            res.status(404).json('No Comment found.')
        }
    }
    catch{
        res.status(500).json('Error loading Comment.')
    }
})
//Get all comments
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
//Delete comment using comment id
router.delete('/:id', async(req, res)=>{
    try{
        const {id} = req.params
        const deleted = await Comments.removeComment(id)
        if (deleted){
            res.json({message: `Comment ${id} deleted`})
        }else{
            res.json({message:'Unable to remove Comment.'})
        }
    }catch{
        res.status(500).json({message: 'Error deleting Comment'})
    }
})
module.exports = router