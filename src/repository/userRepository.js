const User = require('../models/User')

function save(user) {
    const newUser = new User(user)
    return newUser.save()
        .then()
        .catch()
}

module.exports.userRepository = {
    save
}