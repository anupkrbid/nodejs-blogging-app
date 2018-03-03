exports.getUsers = (req, res, next) => {
  res.status(200)
    .json({
      status: true,
      message: 'USERS GET',
      blogId: req.params.blogId,
      data: req.body
    })
};

exports.getUser = (req, res, next) => {
  res.status(200)
    .json({
      status: true,
      message: 'USER GET',
      blogId: req.params.userId,
      data: req.body
    })
};

exports.postUser = (req, res, next) => {
  res.status(200)
    .json({
      status: true,
      message: 'USER POST',
      data: req.body
    })
};

exports.patchUser = (req, res, next) => {
  res.status(200)
    .json({
      status: true,
      message: 'USER PATCH',
      blogId: req.params.userId,
      data: req.body
    })
};

exports.deleteUser = (req, res, next) => {
  res.status(200)
    .json({
      status: true,
      message: 'USER DELETE',
      blogId: req.params.userId,
      data: req.body
    })
};