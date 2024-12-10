const router = require('express').Router()

const { getLoginPage, getRegisterPage, register, login, logout } = require('../controllers/auth')

router
    .route('/login')
    .get(getLoginPage)
    .post(login)

router
    .route('/register')
    .get(getRegisterPage)
    .post(register)

router
    .route('/logout')
    .get(logout)

module.exports=router