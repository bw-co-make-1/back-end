const router = require('express').Router();
const Issues = require('./issue-model.js')

router.get('/', async (req, res) => {
   try{
       const found = await Issues.getIssue()
       if (found){
           res.status(200).json(found)
       }else{
           res.status(401).json({message: 'No issue to Display'})
       }
   }catch{
       res.status(500).json({message: 'Error Loading Issues'})
   }
})

router.post('/:userId', async(req, res)=>{
    try {
         await Issues.addIssue({ issue: req.body.issue, description: req.body.description, photo: req.body.photo, city: req.body.city, state: req.body.state, zip_code: req.body.zip_code,user_id: req.params.userId })
        res.status(201).json({message:'New issue added'})

    }catch{
        res.status(500).json({message: 'Error posting new issue.'})
    }
})

module.exports = router