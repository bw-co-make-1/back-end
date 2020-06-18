const express = require('express');
const cors = require('cors');
const helmet = require('helmet');


const authRouter = require('../auth/auth-router.js')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


server.use('/api', authRouter);

server.get('/', (req, res) => {
    res.status(200).json('Server is running...')
})

module.exports = server;