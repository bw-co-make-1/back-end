const router = require('express').Router();
const Users = require('./auth-model.js')
const JwToken = require('../config/jwToken.js')
const bcrypt = require('bcryptjs')

router.post('/Register', async (req, res) => {
  const user = req.body
  const hash = bcrypt.hashSync(user.password, 10)
  user.password = hash
  try {
    const newUser = await Users.addUser(user)
    if (newUser) {
      res.status(201).json('New User added')

    } else {
      res.status(404).json('Unable to add new User')
    }
  }
  catch{
    res.status(500).json('Error with Database')
  }
})

router.post('/Login', async (req, res) => {
  let { username, password } = req.body
  try {
    const user = await Users.findBy({ username }).first()
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = JwToken.generateToken(user)
      res.status(200).json({ message: `Welcome ${user.first_name}`, token })
    } else {
      res.status(401).json({ message: 'Invalid Cred' })
    }
  }
  catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router;