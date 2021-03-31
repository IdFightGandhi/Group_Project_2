const router = require('express').Router();
const withAuth = require('../../utils/auth');
const {User, Pet, FR, Friend} = require('../../models');

router.get('/', async (req, res) => {
    res.json({message: 'you are in user routes'});
});

router.get('/findall', async(req, res) => {
    try{
        const userData = await User.findAll({
            include: [{model: Pet}, {model: FR}, {model: Friend}],
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/finduserprofile', async(req, res) => {
    try{
        const userProfile = await User.findAll();
        res.status(200).json(userProfile);
        console.log(userProfile)
    }catch(err) {
        res.status(500).json(err);
    }
    
});

router.put('/findbyid', async(req, res) => {
    try{
        const userData = await User.findByPk(req.body.id,{
            include: [{model: Pet}, {model: FR}, {model: Friend}],
        });
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
        console.log('/api/user/create route hit');
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

router.put('/editinfo', async(req, res) => {
    try{
        const updatedData = await User.update(req.body, {where: {id: req.session.user_id}});
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

router.post('/loginuser', async(req, res) => {
    try{
        console.log('/api/user/loginuser hit');
        const userData = await User.findOne({where: {email: req.body.emailInput}});
        console.log(userData)
        if(userData == null){
            res.status(400).json({message: 'no user with this email exists'});
        }

        if(userData.checkPassword(req.body.passwordInput)){
            console.log('user logged in');
            
            req.session.save(() =>{
                req.session.user_id = userData.id;
                req.session.logged_in = true;

                res.json({ user: userData, message: 'You are now logged in!' });
            });
            // res.redirect('/profile'); 
        } else {
            console.log('failed user login');
            res.status(300).json({message: 'invalid password'});
        }
        
    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('/logout', (req, res) => {
    console.log('/api/user/logout hit');
    if (req.session.logged_in) {
      // Remove the session variables
      req.session.destroy(() => {
        // res.status(204).end();
        // res.redirect('/');
        res.json({message: 'successfully logged out'});
      });
    //   res.redirect('/');
    } else {
      res.status(404).end();
    }
  });



module.exports = router;