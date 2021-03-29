const withAuth = (req, res, next) => {
  // If the user isn't logged in, redirect them to the login route
  if (!req.session.logged_in) {
    console.log('unauthorized user rejected');
    res.redirect('/');
  } else {
    console.log('User authorized');
    next();
  }
};

module.exports = withAuth;
