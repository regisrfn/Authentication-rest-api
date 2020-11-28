const { get } = require('config')
const { userService } = require('../services/userService')
const errsMessage = ['email', 'name', 'password']

exports.register = async (req, res, next) => {
    try {
        const savedUser = await userService.saveUser(req.body)
        return res.status(200).json({
            message: "OK",
            user: savedUser
        })
    } catch (error) {
        return res.status(400).json({
            message: "Not OK",
            error: getError(error.errors)
        })
    }
}

exports.login = (req, res, next) => {
    return res.status(200).json({
        message: "Welcome Authentication login"
    })
}

function getError(errorObj) {
    let err = {}
    errsMessage.forEach(error => {
        if (errorObj[error]) {
            err[error] = { message: errorObj[error].message }
            console.log(errorObj[error].message)
        }
    })
    return err
}
