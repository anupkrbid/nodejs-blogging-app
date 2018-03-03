const express = require('express');

const bodyParser = require('body-parser');
const morgan = require('morgan');

const Cors = require('./middlewares/cors');
const ErrorHandler = require('./middlewares/error-handler');

const AuthRoutes = require('./api/v1/routes/auth');
const BlogRoutes = require('./api/v1/routes/blog');
const UserRoutes = require('./api/v1/routes/user');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(Cors);

app.use('/api/v1/', AuthRoutes);
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/blogs', BlogRoutes);

app.use(ErrorHandler.badRequest);
app.use(ErrorHandler.anyError);

module.exports = app;
