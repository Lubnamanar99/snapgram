const router = require('express').Router()

const {getAddPost, addPost, likeORUnlike, viewPost } = require('../controllers/feeds')
const { isLoggedIn } = require('../middleware/auth')

router
    .route('/add')
    .get(getAddPost)
    .post(addPost)
router
    .route('/:id')
    .get(viewPost)
router
    .route('/:postid/like')
    .get(isLoggedIn,likeORUnlike)

module.exports=router