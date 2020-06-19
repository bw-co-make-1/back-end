const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

const authRouter = require("../routes/auth-router")
const usersRouter = require("../routes/users-router")
const postsRouter = require("../routes/posts-router")
const commentsRouter = require("../routes/comments-router")
const votesRouter = require("../routes/votes-router")

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use("/api/auth", authRouter)
server.use("/api/users", usersRouter)
server.use("/api/posts", postsRouter)
server.use("/api/comments", commentsRouter)
server.use("/api/votes", votesRouter)

server.use(( req, res ) => {
  res.status(500).json({
    message: "There was an internal server error."
  })
})

server.get("/", ( req, res ) => {
  res.json({ message: "The API server is live." })
})

module.exports = server