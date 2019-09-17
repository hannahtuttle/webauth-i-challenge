const express = require('express');

const userRouter = require('./usersRoutes/users-routes.js')

const server = express()

server.use(express.json())
server.use('/api', userRouter)


module.exports = server;