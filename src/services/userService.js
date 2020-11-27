const {userRepository} = require('../repository/userRepository')

function saveUser(user){
    return userRepository.save(user)
}
function updateUser(user){}
function getAllUsers(){}
function deleteUser(){}

module.exports.userService = {
    saveUser,
    updateUser,
    getAllUsers,
    deleteUser
}