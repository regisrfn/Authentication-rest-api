const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required().error(() => customError("Name is required")),

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

function customError(msg) {
    const customError = new Error()
    customError.errors = {}
    customError.type = "Validation Error";
    customError.errors['name'] = { message: msg };
    return customError;
}
