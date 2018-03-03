exports.signIn = (req, res, next) => {
  res.status(200)
    .json({
      message: 'SIGN IN'
    })
};

exports.signUp = (req, res, next) => {
  res.status(200)
    .json({
      message: 'SIGN UP'
    })
};

exports.signOut = (req, res, next) => {
  res.status(200)
    .json({
      message: 'SIGN OUT'
    })
};

exports.emailTaken = (req, res, next) => {
  res.status(200)
    .json({
      message: 'EMAIL TAKEN'
    })
};

exports.forgotPassword = (req, res, next) => {
  res.status(200)
    .json({
      message: 'FORGOT PASSWORD'
    })
};

exports.resetPassword = (req, res, next) => {
  res.status(200)
    .json({
      message: 'RESET PASSWORD'
    })
};