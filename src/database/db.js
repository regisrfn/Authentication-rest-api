const mongoose = require('mongoose')

function connect(URL) {
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true, useFindAndModify: false
    })
    mongoose.connection
        .once('open', () => {console.log("DB CONNECTED") })
        .on('error', (error) => {
            console.warn("Error CONNECTION", error)
        })
}

module.exports.db = {
    connect,
    mongoose
}