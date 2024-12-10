const mongoose = require('mongoose');

const usc = new mongoose.Schema({
    id:String,
    text:String,
    time:{
        type:Date,
        default:Date.now()
    },
    sender:String,
    receiver:String
});


module.exports = mongoose.model("Message", usc);