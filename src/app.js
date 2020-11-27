const express = require('express')
const app = express()
const { db } = require('./database/db')
const cors = require('cors')
// Import routes
const authRoute = require('./api/auth')
const { corsOptions } = require("./config/corsOptions")
const config = require('config')
require('dotenv').config()

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