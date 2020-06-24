const router = require('express').Router();
const Issues = require('./issue-model.js')
const isAdmin = require('../../middleware/isAdmin.js')

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

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const found = await Issues.byId(id)
        if (found.length > 0) {
            res.status(200).json(found)
        } else {
            res.status(404).json('No Issue found.')
        }
    }
    catch{
        res.status(500).json('Error loading issue.')
    }
})

router.delete('/:id', isAdmin(1),async(req,res)=>{
    try{
        const {id} = req.params
        const deleted = await Issues.deleteIssue(id)
        if (deleted){
            res.json({message: `Issued ${id} deleted`})
        }else{
            res.json({message:'Unable to remove issue.'})
        }
    }catch{
        res.status(500).json({message: 'Error removing issue'})
    }
})

module.exports = router