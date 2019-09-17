const express = require('express');
const cors = require('cors')
const session = require('express-session')
const KnexSessionStore = require('connect-session-knex')(session)

const dbConnection = require('./data/dbConfig.js')
const userRouter = require('./usersRoutes/users-routes.js')

const server = express()

const sessionConfig = {
    name: 'authChallenge',
    secret: process.env.SESSION_SECRET || "keep it secret, keep it safe",
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: true,
    store: new KnexSessionStore({
        knex: dbConnection,
        tablename: 'knexsessions',
        sidfieldname: 'sessionid',
        createtable: true,
        clearInterval: 1000 * 60 * 60,
    })
}

server.use(express.json())
server.use(cors())
server.use(session(sessionConfig))
server.use('/api', userRouter)


module.exports = server;