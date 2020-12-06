const { userService } = require('../services/userService')
const apiExceptionRequest = require('../exception/ApiExceptionHandler')

exports.register = async (req, res, next) => {
    try {
        const savedUser = await userService.saveUser(req.body)
        return res.status(200).json(savedUser)
    } catch (error) {
        const newError = new Error("Not OK");
        newError.statusCode = 400
        newError.errors = getErrorMsg(error)
        next(newError)
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
