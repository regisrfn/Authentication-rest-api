const express = require('express')
const app = express()

// Import routes
const authRoute = require('./routes/auth')


// routes
app.use('/api/v1/user', authRoute)

app.get('/', (req,res) => {
    return res.status(200).json({
        message: "Welcome Home"
    })
}) 

var port = process.env.PORT || 5000
app.listen(port)

console.log('server started ' + port)