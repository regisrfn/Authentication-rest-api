const User = require('../models/User')

function save(user) {
    const newUser = new User(user)
    return newUser.save()
}

module.exports.userRepository = {
    save
}