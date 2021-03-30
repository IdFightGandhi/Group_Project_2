const withAuth = require('../../utils/auth');
const {User, Pet, FR, Friend, Messages} = require('../../models');
const { Op } = require("sequelize");

const router = require('express').Router();

router.get('/listen/:other_id/:user_id', withAuth, async (req, res) => {
    try{
        let messageData = await Messages.findAll({where: {
            [Op.or]: [
                {sender_id: req.params.other_id, receiver_id: req.params.user_id},
                {sender_id: req.params.user_id, receiver_id: req.params.other_id},
            ]
        }});
        res.status(200).json(messageData);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/send', withAuth, async (req, res) => {
    try{
        let messageData = await Messages.create(req.body);
        res.status(200).json(messageData);
    }catch(err){
        res.status(500).json(err);
    }
});


module.exports = router;