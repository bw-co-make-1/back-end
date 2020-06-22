const express = require('express');
const cors = require('cors');
const helmet = require('helmet');


const authRouter = require('../routes/auth/auth-router.js')
const userRouter = require('../routes/account/account.router.js')
const restricted = require('../middleware/restricted.js')
const isAdmin = require('../middleware/isAdmin.js')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


server.use('/api', authRouter);
server.use('/api/account', restricted, isAdmin(1) ,userRouter)

server.get('/', (req, res) => {
    res.status(200).json('Server is running...')
})

module.exports = server;