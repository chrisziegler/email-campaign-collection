module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res
      .status(403)
      .send({ error: 'You must purchase credits to create and send surveys' });
  }

  next();
};
