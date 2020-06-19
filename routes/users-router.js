const router = require("express").Router()
const Users = require("../models/users-model")
const restricted = require("../middleware/mw-restricted")
const checkRole = require('../middleware/mw-checkrole')


router.get("/", restricted, checkRole(1), (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => res.send(err))
})

router.get("/:id", ( req, res ) => {
  res.status(200).json({ message: "route is working." })
})

router.put("/:id", ( req, res ) => {
  res.status(200).json({ message: "route is working." })
})

router.delete("/:id", ( req, res ) => {
  res.status(200).json({ message: "route is working." })
})

module.exports = router