exports.apiExceptionHandler = (err, req, res, next) => {
    const status = err.statusCode || 400
    return res.status(status).json({
        message: err.message,
        errors: handleErrorsMsg(err)
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