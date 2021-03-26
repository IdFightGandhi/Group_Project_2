const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {

    res.json({message: 'you are in home routes'});

});


module.exports = router;