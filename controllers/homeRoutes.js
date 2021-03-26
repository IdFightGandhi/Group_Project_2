const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {

    res.json({message: 'you are in home routes'});

});

router.get('/signup', async (req, res) => {

    res.json({message: 'you are in signup'});

});

router.get('/profile', async (req, res) => {

    res.json({message: 'you are in profile'});

});

router.get('/search', async (req, res) => {

    res.json({message: 'you are in search'});

});

router.get('/userProfile', async (req, res) => {

    res.json({message: 'you are in user profile'});

});



//TODO for each r


//  // Serialize user data so templates can read it
const users = userData.map((project) => project.get({ plain: true }));

// Pass serialized data into Handlebars.js template
res.render('homepage', { users });
} catch (err) {
res.status(500).json(err);
}
});

module.exports = router;