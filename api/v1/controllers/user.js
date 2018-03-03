exports.getUsers = (req, res, next) => {
  res.status(200)
    .json({
      message: 'USERS GET'
    })
};

exports.getUser = (req, res, next) => {
  res.status(200)
    .json({
      message: 'USER GET',
      blogId: req.params.userId
    })
};

exports.postUser = (req, res, next) => {
  res.status(200)
    .json({
      message: 'USER POST'
    })
};

exports.patchUser = (req, res, next) => {
  res.status(200)
    .json({
      message: 'USER PATCH',
      blogId: req.params.userId
    })
};

exports.deleteUser = (req, res, next) => {
  res.status(200)
    .json({
      message: 'USER DELETE',
      blogId: req.params.userId
    })
};