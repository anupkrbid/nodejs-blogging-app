const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.signIn = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if(!!user.length) {
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
          if(err) {
            next(new Error(err));
          }
          if(result) {
            const token = jwt.sign(
              {
                email: req.body.email,
                password: user[0].password
              },
              'jwt_secret',
              {
                expiresIn: '2h'
              }
            );
            res.status(200)
              .json({
                status: true,
                token: token,
                message: 'SIGN IN'
              });
          } else {
            const newError = new Error('Invalid Credentials!');
            newError.status = 401;
            next(newError);
          }
        });
      } else {
        const newError = new Error('Invalid Credentials!');
        newError.status = 401;
        next(newError);
      }
    })
    .catch(error => next(new Error(error)));
};

exports.signUp = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if(!user.length) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if(err) {
            next(new Error(err));
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              name: req.body.name,
              email: req.body.email,
              password: hash,
              created_at: new Date(),
              updated_at: new Date()
            });
            user.save()
              .then(result => {
                res.status(201)
                  .json({
                    status: true,
                    message: 'SIGN UP',
                    result: result
                  })
              })
              .catch(error => next(new Error(error)));
          }
        });
      } else {
        const newError = new Error('Email not available!');
        newError.status = 409;
        next(newError);
      }
    })
    .catch(error => next(new Error(error)));
};

exports.signOut = (req, res, next) => {
  res.status(200)
    .json({
      status: true,
      message: 'SIGN OUT',
      data: req.body
    })
};

exports.emailTaken = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if(!user.length) {
        res.status(200)
          .json({
            status: false,
            message: 'EMAIL NOT TAKEN'
          })
      } else {
        res.status(200)
          .json({
            status: true,
            message: 'EMAIL TAKEN'
          })
      }
    })
    .catch(error => next(new Error(error)));
};

exports.forgotPassword = (req, res, next) => {
  res.status(200)
    .json({
      status: true,
      message: 'FORGOT PASSWORD',
      data: req.body
    })
};

exports.resetPassword = (req, res, next) => {
  res.status(200)
    .json({
      status: true,
      message: 'RESET PASSWORD',
      data: req.body
    })
};
