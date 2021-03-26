const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
     // res.json({message: 'you are in home routes'});

    try {
        res.render('homepage');
      } catch (err) {
        res.status(500).json(err);
      }

});

router.get('/signup', async (req, res) => {
    // res.json({message: 'you are in signup'});

    try {
        res.render('/signup');
      } catch (err) {
        res.status(500).json(err);
      }

});

router.get('/profile', async (req, res) => {
    // res.json({message: 'you are in profile'});
    try {
        res.render('/profile');
      } catch (err) {
        res.status(500).json(err);
      }

});

router.get('/search', async (req, res) => {
    // res.json({message: 'you are in search'});
    try {
        res.render('/search');
      } catch (err) {
        res.status(500).json(err);
      }

});

router.get('/userProfile', async (req, res) => {
     // res.json({message: 'you are in user profile'});
     try {
        res.render('/userProfile');
      } catch (err) {
        res.status(500).json(err);
      }

});



module.exports = router;