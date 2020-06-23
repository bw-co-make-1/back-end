const bcryptjs = require("bcryptjs")
const router = require("express").Router()
const jwt = require('jsonwebtoken')
const secrets = require('../config/secrets')
const Users = require("../models/users-model")
const { isValidReg, isValidLogin } = require("../middleware/mw-users-service")
const { genToken } = require("../helpers/auth")


router.post("/register", (req, res) => {
  const newUser = req.body

  if (isValidReg(newUser)) {
    const rounds = process.env.BCRYPT_ROUNDS || 8
    const hash = bcryptjs.hashSync(newUser.password, rounds)

    newUser.password = hash

    Users.add(newUser)
      .then(user => {
        const token = genToken(user)

        res.status(201).json({ data: user, token })
      })
      .catch(error => {
        res.status(500).json({ message: error.message })
      })
  } else {
    res.status(400).json({
      message: "Please provide username, password, first name, last name, and email address.",
    })
  }
})

router.post("/login", (req, res) => {
  const { username, password } = req.body

  if (isValidLogin(req.body)) {
    Users.findBy({ username: username })
      .then(([user]) => {
        if (user && bcryptjs.compareSync(password, user.password)) {
          const token = genToken(user)
          
          res.status(200).json({
            message: "Welcome to our API",
            token
          })
        } else {
          res.status(401).json({ message: "Invalid credentials" })
        }
      })
      .catch(error => {
        res.status(500).json({ message: error.message })
      })
  } else {
    res.status(400).json({
      message: "Please provide a valid username and password.",
    })
  }
})

module.exports = router