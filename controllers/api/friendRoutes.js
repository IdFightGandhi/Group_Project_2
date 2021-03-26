const router = require('express').Router();

const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {

    res.json({message: 'you are in friend routes'});

});


module.exports = router;