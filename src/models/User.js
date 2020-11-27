const {db} = require("../database/db")
const Schema = db.mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, "Invalid name size"],
    },
    email: {
        type: String,
        unique:true,
        required: [true, 'Email is required'],
        minlength: [6, "Invalid email size"],
        validate: {
            validator: (email) => {
                var re = /\S+@\S+\.\S+/
                return re.test(email);
            },
            message: "Invalid email format"
        },
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, "Invalid password size"],
    },
    date: {
        type: Date,
        default: Date.now()
    }
},{timestamps:true})

const User = db.mongoose.model('user', userSchema)
module.exports = User