const router = require('express').Router();
const Users = require('./account-model.js')
const bcrypt = require('bcryptjs');
const validateId = require('../../middleware/validations/validateId.js');

router.get('/', async (req, res) => {
    try {
        const found = await Users.getUsers()
        if (found) {
            res.status(200).json(found)
        } else {
            res.status(401).json('No Account to Display')
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
});

router.get('/:id',validateId, async(req, res)=>{
    try{
        const {id} = req.params
        const user = await Users.getById(id)
        if (user){
        res.status(200).json(user)
        }else{
            res.status(401).json({message:'No Account to Display'})
        }
    }
    catch{
        res.status(500).json({message: 'Error Loading Acount.'})
    }
})

router.put('/:id', validateId,async(req,res)=>{
    try{
        const {id} =req.params
        const changes = req.body
        const hash = await bcrypt.hashSync(changes.password, 10)
  changes.password = await hash
        const updatedUser = await Users.updateUser(id, changes)
        if (updatedUser){
            res.json({message: 'Account Updated'})
        }else{
            res.json({message:'Unable to make changes'})
        }
    }
    catch{
        res.status(500).json({message:'Error making changes'})
    }
})

router.delete("/:id",  validateId,async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Users.removeAccount(id)
  if(deleted){
      res.json({message: 'Acount removed'})
  }else{
      res.json({message: 'Unable to remove account'})
  }
    } catch {
      res.status(500).json({message: 'Error removing'})
    }
  });

module.exports = router