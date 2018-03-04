const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  password: String,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model('User', userSchema);
