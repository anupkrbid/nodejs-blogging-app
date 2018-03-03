exports.signIn = (req, res, next) => {
  res.status(200)
    .json({
      status: true,
      message: 'SIGN IN',
      data: req.body
    })
};

exports.signUp = (req, res, next) => {
  res.status(200)
    .json({
      status: true,
      message: 'SIGN UP',
      data: req.body
    })
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
  res.status(200)
    .json({
      status: true,
      message: 'EMAIL TAKEN',
      data: req.body
    })
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
