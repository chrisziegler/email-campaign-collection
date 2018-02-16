const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

// this is a subdocument collection, not mongoose.model
module.exports = recipientSchema;
