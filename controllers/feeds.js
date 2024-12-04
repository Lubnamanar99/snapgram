
exports.getFeeds = (req,res)=>{
    return res.render('feeds',{user:req.user})
}