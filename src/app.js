const express = require('express')
const app = express()
const db = require('./database/db')
// Import routes
const authRoute = require('./routes/auth')
require('dotenv').config()

// routes
app.use('/api/v1/user', authRoute)
db.connect(`${process.env.DATABASE_API}/authApp_users_test`)

app.get('/', (req,res) => {
    return res.status(200).json({
        message: "Welcome Home"
    })
}) 

var port = process.env.PORT || 5000
app.listen(port)

console.log('server started ' + port)