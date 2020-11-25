const db = require("../config/db")
const Schema = db.mongoose.Schema

const userSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Name is required'],
        min:[6, "usarname too short"],
    }
})
