const router = require('express').Router();
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {

    res.json({message: 'you are in user routes'});

});


module.exports = router;