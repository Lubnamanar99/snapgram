require('dotenv').config()

const express=require('express')
const cookieParser = require('cookie-parser')
const app=express()

app.set('view engine','ejs')
app.set('views','views')
app.use(express.static('static'))
app.use(express.urlencoded())
app.use(cookieParser())

const { isLoggedIn, currentUser } = require('./middleware/auth')
app.use(currentUser)

const {connectDb} = require('./config/database')
connectDb()
const {connectCloudinary} = require('./config/cloudinary')
connectCloudinary()

const fileUpload = require('express-fileupload')
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}))

const auth = require('./router/auth')
const message = require('./router/message')
const feeds = require('./router/feeds')
const post = require('./router/post')

app.use('/',auth)
app.use('/message',isLoggedIn,message)
app.use('/',isLoggedIn,feeds)
app.use('/post',isLoggedIn,post)

app.listen(8000,'192.168.1.12',()=>{
    console.log("app started")
})