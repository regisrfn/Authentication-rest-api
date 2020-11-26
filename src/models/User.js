const db = require("../database/db")
const Schema = db.mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        min: [6, "name too short"],
    },
    email: {
        type: String,
        unique:true,
        validate: {
            validator: (email) => {
                var re = /\S+@\S+\.\S+/
                return re.test(email);
            },
            message: "invalid email format"
        },
        required: [true, 'email is required'],
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