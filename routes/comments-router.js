const router = require("express").Router()
const Comments = require("../models/comments-model")


router.get("/:postId", ( req, res ) => {
    res.status(200).json({ message: "route is working." })
})

router.post("/:postId", ( req, res ) => {
    res.status(200).json({ message: "route is working." })
})

router.put("/:postId", ( req, res ) => {
    res.status(200).json({ message: "route is working." })
})

router.delete("/:commentId", ( req, res ) => {
    res.status(200).json({ message: "route is working." })
})

module.exports = router