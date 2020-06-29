const router = require('express').Router();
const Votes = require('./vote-mode.js');

router.get('/:issueId', async (req, res) => {
   try{
       const {issueId} = req.params
       const found = await Votes.getVote(issueId)
       if (found.length > 0){
           res.status(200).json(found)
       }else{
           res.json({message: 'No vote found'})
       }
   }catch{
       res.json({message: 'Error Loading votes'})
   }
})

module.exports = router