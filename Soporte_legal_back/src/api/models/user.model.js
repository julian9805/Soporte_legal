const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    telephone: {type: Number, required: true}
},
    {
        collection: "user"
    }
);

const User = mongoose.model("user", userSchema);
module.exports = User;