require('dotenv').config()
const mongoose = require('mongoose')

before(done => {
    //development mode
    //DATABASE_API = mongodb://localhost
    mongoose.connect(`${process.env.DATABASE_API}/authApp_users_test`, {
        useNewUrlParser: true,
        useUnifiedTopology: true, useFindAndModify: false
    })
    mongoose.connection
        .once('open', () => { done() })
        .on('error', (error) => {
            console.warn("Error CONNECTION", error)
            done(error)
        })
})

describe('Connecting', () => {
    it('Connected', () => {})
})