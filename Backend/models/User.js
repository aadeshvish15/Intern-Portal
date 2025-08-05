const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required:true
    },
    referralCode: {
        type: String,
        required: true,
        trim: true
    },
    amountRaised: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model("User", userSchema);