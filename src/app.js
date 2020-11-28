const express = require('express')
const app = express()
const config = require('config')
const cors = require('cors')
const { db } = require('./database/db')
const { corsOptions } = require("./config/corsOptions")
require('dotenv').config()

// Import routes
const authRoute = require('./api/auth')
// DATABASE
db.connect(`${process.env.DATABASE_API}/${config.DBName}`)
//Middleware
app.use(cors(corsOptions))
app.use(express.json())
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
module.exports = app