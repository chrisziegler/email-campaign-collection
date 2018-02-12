module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You must log in!' });
  }
  // if there is no user, something is wrong with request
  // stop from going to request handler lest we crash the server

  // otherwise, next middleware, or go on to request handler if no other
  next();
};
