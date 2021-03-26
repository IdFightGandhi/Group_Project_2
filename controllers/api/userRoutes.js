const router = require('express').Router();
const withAuth = require('../../utils/auth');
const {User} = require('../../models');

router.get('/', async (req, res) => {
    res.json({message: 'you are in user routes'});
});

router.get('/findall', async(req, res) => {
    try{
        const userData = await User.findAll();
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/findbyid', async(req, res) => {
    try{
        const userData = await User.findByPk(req.body.id);
        if(userData == null){
            res.status(400).json('This user does not exist.');
        } else {
            res.status(200).json(userData);
        }
        
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/create', async(req, res) => {
    try{
        const newUserData = await User.create(req.body);
        res.status(200).json(newUserData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/update', async(req, res) => {
    try{
        const updatedData = await User.update(req.body, {where: {id: req.body.id}});
        res.status(200).json(updatedData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/delete', async(req, res) => {
    try{
        const deletedData = await User.destroy({where: {id: req.body.id}});
        res.status(200).json(deletedData);
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;