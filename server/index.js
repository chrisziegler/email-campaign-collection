const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('./models/User');
require('./services/passport');

mongoose.Promise = global.Promise;

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// tell passport it should make use of cookies to handle authentication
app.use(passport.initialize());
app.use(passport.session());

// both these routes return a function
// which we immediately call with the app object
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
