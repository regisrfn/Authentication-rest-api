const express = require('express')
const app = express();

app.get('/', (req,res) => {
    return res.status(200).json({
        message: "Welcome Home"
    })
}) 

var port = process.env.PORT || 5000
app.listen(port)

console.log('server started ' + port)