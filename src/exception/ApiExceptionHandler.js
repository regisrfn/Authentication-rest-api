exports.apiExceptionHandler = (err, req, res, next) => {
    const status = err.statusCode || 400
    return res.status(status).json({
        message: err.message,
        errors: err.errors
    })
}

exports.getDbErrorMsg = (error) => {
    let errors = {}
    for (err in error.errors) {
        errors[err] = { message: error.errors[err].message }
    }
    return errors
}