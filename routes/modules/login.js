const express = require('express')
const router = express.Router()
const User = require('../../models/user')

router.post('/', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    User.find({$and:[{email: email}, {password: password}]})
    .lean()
    .then(user => {
        if(!user.length) {
            const wrong = true
            res.render('index', {wrong})
        }
        else {
            res.render('show', { user: user[0] })
        }
    })
})

module.exports = router