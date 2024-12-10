const User = require('../models/User')
const Message = require('../models/Message')

let sentMessages=[]
exports.messages= (req,res)=>{
    return res.render('messages',{user:req.user,sentMessages:sentMessages})
}
exports.messageSent=(req,res)=>{
    sentMessages.push(req.body.message)
    return res.render('messages',{user:req.user,sentMessages:sentMessages})
}

exports.getPeopleListForMessage = async(req,res)=>{
    let allpeople = await User.find()
    
    let me = await User.findOne({id:req.user.id})

    let mypeople = allpeople.filter((i)=>i.id!=me.id)
    return res.render('message-people',{mypeople,user:req.user})
}

exports.viewMessage = async (req,res)=>{
    try{
        //(send == me && rec == rec)|| (send==rec && rec==me)
        let recc = await User.findOne({username:req.params.userid})

        let messages = await Message.find({
            $or: [
                { $and: [{sender: req.user.id}, {receiver: recc.id}] },
                { $and: [{sender: recc.id}, {receiver: req.user.id}] }
            ]
        })
        return res.render('messages',{user:req.user,messages,recc})
    }catch(e){
        console.log(e)
    }
    
}

exports.newMessage = async (req,res)=>{
    let rec = await User.findOne({username:req.params.userid})

    await Message.create({
        id:`M${Date.now()}`,
        text:req.body.text,
        sender:req.user.id,
        receiver:rec.id
    })

    return res.redirect(`/message/${rec.username}`)
}