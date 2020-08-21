const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const commentsRoutes = require('./comments-routes.js');

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;