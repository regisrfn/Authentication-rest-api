const { db } = require("../database/db")
const Schema = db.mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, "Invalid name size"],
    },
    email: {
        type: String,
        unique: [true, 'This email is already being used '],
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
}, { timestamps: true })

userSchema.post('save', function (error, doc, next) {
    let err = {}
    let key = 'email'
    if (error.name === 'MongoError' && error.code === 11000 && key in error.keyValue) {
        err[key] = { message: "Email not available" }
        next({ errors: err })
    } else {
        next();
    }
});

const User = db.mongoose.model('user', userSchema)
module.exports = User