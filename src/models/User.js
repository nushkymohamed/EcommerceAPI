const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
    {
        username: {
            type: String,
            default: "",
            required: true,
        },
        email: {
            type: String,
            default: "",
            required: true,
        },
        password: {
            type: String,
            default: "",
            required: true,
        },
    },
);

module.exports = mongoose.model("User", User);