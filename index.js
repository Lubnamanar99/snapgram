require('dotenv').config()

const express=require('express')
const cookieParser = require('cookie-parser')
let app=express()

app.set('view engine','ejs')
app.set('views','views')
app.use(express.static('static'))
app.use(express.urlencoded())
app.use(cookieParser())
const { isLoggedIn, currentUser } = require('./middleware/auth')
app.use(currentUser)
let {connectDb} = require('./config/database')
connectDb()

const { getLoginPage, getRegisterPage, register, login, logout } = require('./controllers/auth')
const { getFeeds } = require('./controllers/feeds')

const { getProfile, viewPeople } = require('./controllers/profile')




app.get('/login',getLoginPage)
app.post('/login',login)
app.get('/register',getRegisterPage)
app.post('/register',register)
app.get('/logout',logout)

app.get('/',isLoggedIn,getFeeds)
app.get('/:username',getProfile)
app.get('/people/all',viewPeople)

app.listen(8000,()=>{
    console.log("app started")
})