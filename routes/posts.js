const express = require('express');
const router = express.Router();

const postsController = require('../controllers/posts_controllers');


router.get('/profile', postsController.posts);




module.exports = router;