const router = require('express').Router();
const withAuth = require('../../utils/auth');
const {User, Pet, FR, Friend} = require('../../models');

router.get('/', async (req, res) => {

    res.json({message: 'you are in friend routes'});

});


router.delete('/delete', async(req, res) => {
    try{
        const deletedFriend1 = await Friend.destroy({where: {main_user_id: req.body.main_user_id, reference_user_id: req.body.reference_user_id}});
        const deletedFriend2 = await Friend.destroy({where: {reference_user_id: req.body.main_user_id, main_user_id: req.body.reference_user_id}});
        res.status(200).json({message: 'friend deleted'});
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;