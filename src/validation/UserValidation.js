const Joi = require('joi');
const customError = new Error()
customError.errors = {}

const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required().error((error) => {
            customError.type = "Validation Error"
            customError.errors['name'] = {message: "Name is required"}
            return customError
        }),

    password: Joi.string()
        .min(6)
        .required(),

    email: Joi.string()
        .min(6)
        .required(),
})

exports.registerValidationAsync = (data) => {
    return schema.validateAsync(data)
}

exports.registerValidation = (data) => {
    return schema.validate(data)
}