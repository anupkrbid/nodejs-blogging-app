const mongoose = require('mongoose');

const Blog = require('../models/blog');

exports.getBlogs = (req, res, next) => {
  Blog.find()
    .exec()
    .then(result => {
      res.status(200)
        .json({
          status: true,
          message: 'BLOGS GET',
          result: result
        })
    })
    .catch(error => next(new Error(error)));
};

exports.getBlog = (req, res, next) => {
  Blog.findById(req.params.blogId)
    .exec()
    .then(result => {
      res.status(200)
        .json({
          status: true,
          message: 'BLOG GET',
          result: result
        })
    })
    .catch(error => next(new Error(error)));
};

exports.postBlog = (req, res, next) => {
  const blog = new Blog({
    title: req.body.title,
    content: req.body.content,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    _id: new mongoose.Types.ObjectId()
  });
  blog.save()
    .then(result => {
      res.status(200)
        .json({
          status: true,
          message: 'BLOG POST',
          result: result
        })
    })
    .catch(error => next(new Error(error)));
};

exports.patchBlog = (req, res, next) => {
  const toUpdate = {};
  for(const key in req.body) {
    if(req.body.hasOwnProperty(key)) {
      toUpdate[key] = req.body[key];
      toUpdate['updated_at'] = new Date().toISOString();
    }
  }
  Blog.update({ _id: req.params.blogId }, { $set: toUpdate })
    .exec()
    .then(result => {
      res.status(200)
        .json({
          status: true,
          message: 'BLOG PATCH',
          result: result
        })
    })
    .catch(error => next(new Error(error)));
};

exports.deleteBlog = (req, res, next) => {
  Blog.remove({ _id: req.params.blogId })
    .exec()
    .then(result => {
      res.status(200)
        .json({
          status: true,
          message: 'BLOG DELETE',
          result: result
        })
    })
    .catch(error => next(new Error(error)));
};