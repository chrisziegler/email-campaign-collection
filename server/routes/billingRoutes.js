const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });
    // passport setup so req.user is always our signed-in user
    req.user.credits += 5;
    // persist these changes to the db
    const user = await req.user.save();
    // send the data we want to communicate back to the browser
    res.send(user);
  });
};
