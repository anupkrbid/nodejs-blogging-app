const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    if(!req.headers.authorization) {
      const tokenError = new Error('JsonWebTokenError: jwt must be provided.');
      tokenError.status = 401;
      next(tokenError);
    }
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'jwt_secret');
    // req.userData = decoded;
    next();
  } catch (error) {
    const authError = new Error(error);
    authError.status = 401;
    next(authError);
  }
};