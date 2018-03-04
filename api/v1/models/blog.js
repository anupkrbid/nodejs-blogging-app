const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  content: String,
  created_at: Date,
  updated_at: Date,
});

module.exports = mongoose.model('Blog', blogSchema);