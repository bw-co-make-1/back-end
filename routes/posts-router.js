const router = require("express").Router()
const Posts = require("../models/posts-model")


router.get("/", ( req, res ) => {
    res.status(200).json({ message: "route is working." })
})

router.get("/:postId", ( req, res ) => {
    res.status(200).json({ message: "route is working." })
})

router.get("/:userId", ( req, res ) => {
    res.status(200).json({ message: "route is working." })
})

router.post("/", ( req, res ) => {
    res.status(200).json({ message: "route is working." })
})

router.put("/:id", ( req, res ) => {
    res.status(200).json({ message: "route is working." })
})

router.delete("/:id", ( req, res ) => {
    res.status(200).json({ message: "route is working." })
})

module.exports = router