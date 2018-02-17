const sendgrid = require('sendgrid');
// pull a property off sendgrid
// used instead of ES6 destructuring because we want to call it helper instead of mail
// const { mail } = sendgrid;
const helper = sendgrid.mail;
const keys = require('../config/keys');

// we want to take this general Mail class and add some configuration to it.
// we are extending the mail class found inside the sendgrid library (sendgrid.mail)
class Mailer extends helper.Mail {
  // the first argument is the destructured properties we want off survey
  // 2nd argument is going to be the html body string returned by calling the surveyTemplate
  // function in our surveyRoute mailer instance
  // this set-up means we can reuse Mailer in the future  with different
  // templates so long as it has a subject and recipients
  constructor({ subject, recipient }, content) {}
}
module.exports = Mailer;
