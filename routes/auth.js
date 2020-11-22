const router = require("express").Router();

router.post("/register", (req, res) => {
    return res.status(200).json({
        message: "Welcome Authentication register"
    })
})

router.post("/login", (req, res) => {
    return res.status(200).json({
        message: "Welcome Authentication register"
    })
})

module.exports = router;