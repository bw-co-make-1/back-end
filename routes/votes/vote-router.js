const router = require('express').Router();
const Votes = require('./vote-mode.js');
const validateId = require('../../middleware/validations/validateId.js');
const validatePOST = require('../../middleware/validations/validatePOST.js');
const jwtDecode = require('jwt-decode')

router.get('/:issueId',validateId, async (req, res) => {
   try{
       const {issueId} = req.params
       const found = await Votes.getVote(issueId)
       if (found.length > 0){
           res.status(200).json(found)
       }else{
           res.status(404).json({message: 'No vote found'})
       }
   }catch{
       res.status(500).json({message: 'Error Loading votes'})
   }
})

router.post('/:issue_id',validatePOST,async(req, res)=>{
    try {
        let decoded = jwtDecode(req.headers.authorization)
        const { subject} = decoded
        const {issue_id} = req.params
        const upvote = { upVoted: 1, issue_id: issue_id, user_id: subject }
        const validator = await Votes.findBy({user_id: upvote.user_id})
        const valCheck = validator.filter(issue => issue_id === upvote.issue_id && issue)
        
        if(valCheck.length >0){
            res.status(400).json({message: 'You already voted.'})
        }else{
            await Votes.addVote(upvote)
           res.status(201).json({message:'New vote added'})
        }

    }catch{
        res.status(500).json({message: 'Error posting new vote.'})
    }
})
module.exports = router