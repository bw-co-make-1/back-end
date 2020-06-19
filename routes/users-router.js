const router = require("express").Router()
const Users = require("./models/users-model")
const restricted = require("../middleware/mw-restricted")
const checkRole = require('../middleware/check-role-middleware')


router.get("/users", restricted, checkRole(1), (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => res.send(err))
})

module.exports = router