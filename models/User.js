const mongoose = require('mongoose');
var passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

userSchema.plugin(passportLocalMongoose)


module.exports = mongoose.model('User', userSchema);