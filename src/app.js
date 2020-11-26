const express = require('express')
const app = express()
const db = require('./database/db')
const cors = require('cors')
// Import routes
const authRoute = require('./routes/auth')
require('dotenv').config()

var corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: "Content-Type,Authorization"
}

if (process.env.NODE_ENV === 'production' && process.env.HTTP_LIST) {
    const whitelist = process.env.HTTP_LIST.split(',')
    corsOptions.origin = function (origin, callback) {
        console.log(origin)
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback('Not allowed by CORS', false)
        }
    }

}

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