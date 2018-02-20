const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

// this, along with requiring mongoose above, side-steps an issue with running
// frontend tests that we might encounter had we required in directly e.g.
// const Survey = require('../models/Survey')
const Survey = mongoose.model('surveys');

module.exports = app => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email })),
      // current users id is auto-available on mongoose as req.user.id
      _user: req.user.id,
      dateSent: Date.now()
    });
    // Great place to send an e-mail
    const mailer = new Mailer(survey, surveyTemplate(survey));
    mailer.send();
  });
};
