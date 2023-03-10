const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type :String,
        required :[true, "Please enter product name."]
    }
})

module.exports = mongoose.model("Name", userSchema)