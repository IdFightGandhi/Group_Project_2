const router = require('express').Router();

const petRoutes = require('./petRoutes');
const userRoutes = require('./userRoutes');
const friendRoutes = require('./friendRoutes');
const friendRequestRoutes = require('./friendrequestRoutes');


router.use('/pet', petRoutes);
router.use('/user', userRoutes);
router.use('/friend', friendRoutes);
router.use('/fr', friendRequestRoutes);

module.exports = router;