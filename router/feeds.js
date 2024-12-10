const router = require('express').Router()

const { getFeeds} = require('../controllers/feeds')
const { getProfile, viewPeople, followPerson, unfollowPerson } = require('../controllers/profile')

router
    .route('/')
    .get(getFeeds)
router
    .route('/:username')
    .get(getProfile)
router
    .route('/people/all')
    .get(viewPeople)
router
    .route('/people/follow/:personid')
    .get(followPerson)
router
    .route('/people/unfollow/:personid')
    .get(unfollowPerson)

module.exports=router