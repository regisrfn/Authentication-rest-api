const { userService } = require('../services/userService')

exports.register = async (req, res, next) => {
    try {
        const savedUser = await userService.saveUser(req.body)
        return res.status(200).json({
            message: "OK",
            user: savedUser
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message: "Not OK",
            user: null
        })
    }
}

exports.login = (req, res, next) => {
    return res.status(200).json({
        message: "Welcome Authentication login"
    })
}