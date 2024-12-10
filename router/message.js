const router = require('express').Router()

const {getPeopleListForMessage, viewMessage, newMessage} = require('../controllers/messages')


router
    .route('/')
    .get(getPeopleListForMessage)


router
    .route('/:userid')
    .get(viewMessage)
    .post(newMessage)


module.exports=router