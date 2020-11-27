const User = require('../models/User')
const {db} =  require('../database/db')

beforeEach((done) => {
    const users = db.mongoose.connection.collections.users
    users.drop()
        .then(() => {
            done()
        })
        .catch(err => {
            if(err.message = 'ns not found'){
                done()
            }else{
                done(err)
            }
        })
})