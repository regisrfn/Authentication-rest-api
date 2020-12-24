const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required().error((errors) => customError(errors, 'name')),

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

function customError(errors, key) {
    const customError = new Error()
    customError.errors = {}
    customError.type = "Validation Error";
    errors.forEach(err => {
        switch (err.code) {
            case "any.empty":
                customError.errors[key] = { message: "Value should not be empty" };
                break
            case "string.min":
                customError.errors[key] = { message: `Value should have at least ${err.local.limit} characters` };
                break
            case "string.max":
                customError.errors[key] = { message: `Value should have at most ${err.local.limit} characters` }
                break
            case "any.required":
                customError.errors[key] = { message: "Value is required" }
                break
            default:
                break
        }
    })
    return customError;
}
