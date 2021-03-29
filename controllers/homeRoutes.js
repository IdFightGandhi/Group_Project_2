const router = require('express').Router();
const {User, Pet, FR, Friend} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
      try {
        console.log('/ route hit');
        if (req.session.logged_in){
          console.log('user already logged in, redirecting');
          res.redirect('/profile');
        } else {
          console.log('rendering home page');
          res.render('homepage');
        }
      } catch (err) {
        res.status(500).json(err);
      }

});

router.get('/signup', async (req, res) => {

    try {
        res.render('signup');
      } catch (err) {
        res.status(500).json(err);
      }

});

router.get('/profile', withAuth, async (req, res) => {
    try {
        console.log('/profile route hit');
        const userData = await User.findByPk(req.session.user_id,{
          include: [{model: Pet}, {model: FR}, {model: Friend}],
        });

        const data = userData.get({ plain: true });
        res.render('profile', data);
      } catch (err) {
        res.status(500).json(err);
      }

});

router.get('/search', async (req, res) => {
    
    try {
        res.render('search');
      } catch (err) {
        res.status(500).json(err);
      }

});

router.get('/userProfile', async (req, res) => {
     
     try {
        res.render('userProfile');
      } catch (err) {
        res.status(500).json(err);
      }

});

router.get('/test', async (req, res) => {
  console.log('test');
  res.redirect('profile');
});



module.exports = router;