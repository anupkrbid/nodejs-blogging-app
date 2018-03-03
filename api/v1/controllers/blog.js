exports.getBlogs = (req, res, next) => {
  res.status(200)
    .json({
      message: 'BLOGS GET'
    })
};

exports.getBlog = (req, res, next) => {
  res.status(200)
    .json({
      message: 'BLOG GET',
      blogId: req.params.blogId
    })
};

exports.postBlog = (req, res, next) => {
  res.status(200)
    .json({
      message: 'BLOG POST'
    })
};

exports.patchBlog = (req, res, next) => {
  res.status(200)
    .json({
      message: 'BLOG PATCH',
      blogId: req.params.blogId
    })
};

exports.deleteBlog = (req, res, next) => {
  res.status(200)
    .json({
      message: 'BLOG DELETE',
      blogId: req.params.blogId
    })
};