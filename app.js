const express = require('express');
const mongoose = require("mongoose");

const bodyParser = require('body-parser'); 
const morgan = require('morgan');

const Cors = require('./middlewares/cors');
const ErrorHandler = require('./middlewares/error-handler');

const AuthRoutes = require('./api/v1/routes/auth');
const BlogRoutes = require('./api/v1/routes/blog');
const UserRoutes = require('./api/v1/routes/user');

const app = express();

// mongoose.connect(
//   "mongodb://node-shop:" +
//   process.env.MONGO_ATLAS_PW +
//   "@node-rest-shop-shard-00-00-wovcj.mongodb.net:27017,node-rest-shop-shard-00-01-wovcj.mongodb.net:27017,node-rest-shop-shard-00-02-wovcj.mongodb.net:27017/test?ssl=true&replicaSet=node-rest-shop-shard-0&authSource=admin",
//   {
//     useMongoClient: true
//   }
// );

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/NodeJSBloggingApp');

app.use(morgan('dev'));

// app.use('/uploads', express.static('uploads'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(Cors);

app.use('/api/v1/', AuthRoutes);
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/blogs', BlogRoutes);

app.use(ErrorHandler.badRequest);
app.use(ErrorHandler.anyError);

module.exports = app;
