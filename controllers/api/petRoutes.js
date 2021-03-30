const router = require('express').Router();
const withAuth = require('../../utils/auth');
const {User, Pet} = require('../../models');


router.get('/', async (req, res) => {

    res.json({message: 'you are in pet routes'});

});


router.get('/findall', async(req, res) => {
    try{
        const petData = await Pet.findAll();
        res.status(200).json(petData);
    } catch (err) {
        res.status(500).json(err);
    }
});



router.get('/findbyid', async(req, res) => {
    try{
        const petData = await Pet.findByPk(req.body.id);
        if(petData == null){
            res.status(400).json('This user does not exist.');
        } else {
            res.status(200).json(petData);
        }
        
    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('/create', async(req, res) => {
    try{
        let newPetDataToPush = req.body;
        newPetDataToPush.owner_id = req.session.user_id;
        const newPetData = await Pet.create(newPetDataToPush);
        res.status(200).json(newPetData);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.put('/update', async(req, res) => {
    try{
        const updatedData = await Pet.update(req.body, {where: {id: req.body.id}});
        res.status(200).json(updatedData);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.delete('/delete', async(req, res) => {
    try{
        const deletedData = await Pet.destroy({where: {id: req.body.id}});
        res.status(200).json(deletedData);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;