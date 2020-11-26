exports.register = (req, res, next) => {
    return res.status(200).json({
        message: "Welcome Authentication register"
    })
}

exports.login = (req, res, next) => {
    return res.status(200).json({
        message: "Welcome Authentication login"
    })
}