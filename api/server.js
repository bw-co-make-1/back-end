const express = require('express');
const cors = require('cors');
const helmet = require('helmet');


const authRouter = require('../routes/auth/auth-router.js')
const userRouter = require('../routes/account/account.router.js')
const issueRouter = require('../routes/issues/issue-router.js')
const commentRouter = require('../routes/comments/comment-router.js')
const voteRouter = require('../routes/votes/vote-router.js')

const restricted = require('../middleware/restricted.js')
const isAdmin = require('../middleware/isAdmin.js')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


server.use('/api', authRouter);
server.use('/api/account', restricted, isAdmin(1) ,userRouter)
server.use('/api/Issue', restricted, issueRouter)
server.use('/api/Comment', restricted, commentRouter)
server.use('/api/vote', restricted, voteRouter)

server.get('/', (req, res) => {
    res.status(200).json('Server is running...')
})

server.use((req, res)=> {
    res.status(404).send('Incorrect URL 😔');
});
module.exports = server;