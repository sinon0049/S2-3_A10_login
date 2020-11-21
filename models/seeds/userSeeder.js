//load restaurant module
const User = require('../user')
const db = require('../../config/mongoose')
//load seeds
const userList = require('./user.json')

db.once('open', () => {
  for (i = 0; i < userList.users.length; i++) {
    User.create(userList.users[i]);
  }
})