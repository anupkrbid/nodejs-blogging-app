const express = require('express');

const AuthRoutes = require('./api/v1/routes/auth');
const BlogRoutes = require('./api/v1/routes/blog');
const UserRoutes = require('./api/v1/routes/user');

const app = express();

app.use('/api/v1/', AuthRoutes);
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/blogs', BlogRoutes);

module.exports = app;