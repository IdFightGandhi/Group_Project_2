const router = require('express').Router();
const withAuth = require('../../utils/auth');
const {User, Pet, FR, Friend} = require('../../models');

router.get('/', async (req, res) => {

    res.json({message: 'you are in friend request routes'});

});


router.get('/findall', async(req, res) => {
    try{
        const requestData = await FR.findAll();
        res.status(200).json(requestData);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/findbyid', async(req, res) => {
    try{
        const requestData = await FR.findByPk(req.body.id);
        if(petData == null){
            res.status(400).json('This user does not exist.');
        } else {
            res.status(200).json(requestData);
        }
        
    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('/create', async(req, res) => {
    try{
        const newRequestData = await FR.create(req.body);
        res.status(200).json(newRequestData);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.put('/update', async(req, res) => {
    try{
        const updatedData = await FR.update(req.body, {where: {id: req.body.id}});
        res.status(200).json(updatedData);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.delete('/delete', async(req, res) => {
    try{
        console.log('/api/fr/delete hit');
        const deletedData = await FR.destroy({where: {id: req.body.id}});
        res.status(200).json(deletedData);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('/acceptfr', async(req, res) => {
    try{
        let user1 = req.body.sender_id;
        let user2 = req.body.receiver_id;
        const deletedData = await FR.destroy({where: {id: req.body.id}});
        let friend1 = {
            main_user_id: user1,
            reference_user_id: user2,
        };
        let friend2 = {
            main_user_id: user2,
            reference_user_id: user1,
        };
        const newRequestData1 = await Friend.create(friend1);
        const newRequestData2 = await Friend.create(friend2);
        res.status(200).json({message: 'request accepted, friends created'});

    } catch (err) {
        res.status(500).json(err);

    }
    
});



module.exports = router;