const express = require('express')
const bcrypt = require('bcryptjs')
const data = require('./users-models.js')
const restricted = require('../auth/authRestricted.js')

const router = express.Router()

router.get('/', (req, res) => {
    res.send("testing Port!");
  });

router.post('/register', (req, res) => {
    const {username , password} = req.body

    const hash = bcrypt.hashSync(password, 10)

    data.add({username, password: hash})
    .then(save => {
        res.status(201).json(save)
    })
    .catch(err => {
        res.status(500).send(err)
    })

})

router.post('/login', (req, res) => {
    const {username, password} = req.body

    data.findby({username})
    .first()
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)){
            req.session.user = user
            res.status(200).json(user.id)
        }else {
            res.status(401).json({meaasage: 'invalid credentials'})
        }
    })
    .catch(err => {
        res.send(err)
        //res.status(500).json(err)
    })

})

router.get('/users',restricted, (req, res) => {

    data.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(500).send(err)
    })

})

module.exports = router;