const db = require("../database/db")
const Schema = db.mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        min: [6, "name too short"],
    },
    email: {
        type: String,
        validate: {
            validator: (email) => {
                var re = /\S+@\S+\.\S+/
                return re.test(email);
            },
            message: "Incorrect format"
        },
        required: [true, 'Email is required'],
        min: [6, "email too short"],
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        min: [6, "password too short"],
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const User = db.mongoose.model('user', userSchema)
module.exports = User