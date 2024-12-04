const User = require('../models/User')

exports.getProfile = async(req,res)=>{
    let username = req.params.username
    let profile = await User.findOne({username:username})

    if(!profile){
        return res.send('profie not found')
    }

    return res.render('profile',{user:req.user,profile})
}


exports.viewPeople = async(req,res)=>{
    let people = await User.find()

    return res.render('people',{people,user:req.user})
}