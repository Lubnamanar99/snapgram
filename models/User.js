const mongoose = require('mongoose');

const usc = new mongoose.Schema({
    id:String,
    name:String,
    phone:String,
    username:String,
    password:{
        type:String,
        select:false
    },
    followers:[String],
    following:[String]
});




module.exports = mongoose.model("User", usc);