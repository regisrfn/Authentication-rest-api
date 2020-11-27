const express = require('express')
const app = express()
const {db} = require('./database/db')
const cors = require('cors')
// Import routes
const authRoute = require('./api/auth')
const { corsOptions } = require("./config/corsOptions")
require('dotenv').config()

db.connect(`${process.env.DATABASE_API}/authApp_users_test`)
app.use(cors(corsOptions))
// routes
app.use('/api/v1/user', authRoute)
app.get('/', (req, res) => {
    return res.status(200).json({
        message: "Welcome Home"
    })
})

var port = process.env.PORT || 5000
app.listen(port)

console.log('server started ' + port)