const router = require("express").Router()
const Votes = require("../models/votes-model")


router.get("/:postId", ( req, res ) => {
    res.status(200).json({ message: "route is working." })
})

module.exports = router