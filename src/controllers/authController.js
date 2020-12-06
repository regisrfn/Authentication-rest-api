const { userService } = require('../services/userService')
const errsMessage = ['email', 'name', 'password']

exports.register = async (req, res, next) => {
    try {
        const savedUser = await userService.saveUser(req.body)
        return res.status(200).json(savedUser)
    } catch (error) {
        return res.status(400).json({
            message: "Not OK",
            errors: getErrorMsg(error)
        })
    }
}

exports.login = (req, res, next) => {
    return res.status(200).json({
        message: "Welcome Authentication login"
    })
}

function getErrorMsg(error) {
    let errors = {}
    for (err in error.errors) {
        errors[err] = { message: error.errors[err].message}
    }
    return errors
}
