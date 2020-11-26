const mongoose = require('mongoose')

function connect(URL) {
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true, useFindAndModify: false
    })
    mongoose.connection
        .once('open', () => {console.log("DB CONNECTED") })
        .on('error', (error) => {
            console.warn("Error CONNECTION", error)
            done(error)
        })
}

module.exports = {
    connect,
    mongoose
}