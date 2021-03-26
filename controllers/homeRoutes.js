const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {

    try {
        res.render('homepage');
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

router.get('/profile', async (req, res) => {
    
    try {
        res.render('profile');
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



module.exports = router;