const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  // we learned that passport automatically attaches user to req
  // passport also automatically attaches something called logout()
  // logout takes the cookie and kills it
  app.get('/api/logout', (req, res) => {
    req.logout();
    // for now, send the user something back that acknowledges logout
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
