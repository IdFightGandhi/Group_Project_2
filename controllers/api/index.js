const router = require('express').Router();

const petRoutes = require('./petRoutes');
const userRoutes = require('./userRoutes');
const friendRoutes = require('./friendRoutes');
const friendRequestRoutes = require('./friendrequestRoutes');
const messagesRoutes = require('./messagesRoutes');


router.use('/pet', petRoutes);
router.use('/user', userRoutes);
router.use('/friend', friendRoutes);
router.use('/fr', friendRequestRoutes);
router.use('/message', messagesRoutes);

router.post('/checkinput', async (req, res) => {
    try {
        res.status(200).json({message: 'success'});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;