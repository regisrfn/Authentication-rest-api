const {db} = require("../database/db")
const Schema = db.mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        minlength: [3, "name too short"],
    },
    email: {
        type: String,
        unique:true,
        required: [true, 'email is required'],
        minlength: [6, "email too short"],
        validate: {
            validator: (email) => {
                var re = /\S+@\S+\.\S+/
                return re.test(email);
            },
            message: "invalid format"
        },
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minlength: [6, "password too short"],
    },
    date: {
        type: Date,
        default: Date.now()
    }
},{timestamps:true})

const User = db.mongoose.model('user', userSchema)
module.exports = User