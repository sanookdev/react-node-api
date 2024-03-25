const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    Username : String,
    Password : String,
    FirstName : String,
    LastName : String
},{timestamp:true})


module.exports = mongoose.model('users',userSchema)