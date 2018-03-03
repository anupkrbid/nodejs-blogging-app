exports.getBlogs = (req, res, next) => {
  res.status(200)
    .json({
      status: true,
      message: 'BLOGS GET',
      data: req.body
    })
};

exports.getBlog = (req, res, next) => {
  res.status(200)
    .json({
      status: true,
      message: 'BLOG GET',
      blogId: req.params.blogId,
      data: req.body
    })
};

exports.postBlog = (req, res, next) => {
  res.status(200)
    .json({
      status: true,
      message: 'BLOG POST',
      data: req.body
    })
};

exports.patchBlog = (req, res, next) => {
  res.status(200)
    .json({
      status: true,
      message: 'BLOG PATCH',
      blogId: req.params.blogId,
      data: req.body
    })
};

exports.deleteBlog = (req, res, next) => {
  res.status(200)
    .json({
      status: true,
      message: 'BLOG DELETE',
      blogId: req.params.blogId,
      data: req.body
    })
};