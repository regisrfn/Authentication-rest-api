const { userService } = require('../services/userService')
const { registerValidationAsync } = require('../validation/UserValidation')

exports.register = (req, res, next) => {
    registerValidationAsync(req.body)
        .then((value) => userService.saveUser(value))
        .then((savedUser) => {
            return res.status(200).json(savedUser)
        }).catch(error => {
            const newError = new Error("Not OK");
            newError.statusCode = 400
            newError.errors = handleErrorsMsg(error)
            next(newError)
        })
}

exports.login = (req, res, next) => {
    return res.status(200).json({
        message: "Welcome Authentication login"
    })
}

function handleErrorsMsg(error) {
    let errors = {}
    switch (error.type) {
        case "Validation Error":
            errors = error.errors
        default:
            for (err in error.errors) {
                errors[err] = { message: error.errors[err].message }
            }
    }
    return errors
}
