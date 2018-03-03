const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  content: String,
  created_at: Date
});

module.exports = mongoose.model('Blog', blogSchema);