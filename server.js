'use strict';

const express = require('express'),
      app = express(),
      mongoose = require('mongoose'),
      morgan = require('morgan'),
      bodyParser = require('body-parser'),
      routes = require('./app/routes/index.js');

require('dotenv').load();
mongoose.connect(process.env.MONGO_URI);

// Routes
app.use(bodyParser.json());
app.use(morgan('dev'));
app.set('json spaces', 2);
routes(app);

var port = process.env.PORT || 3000
app.listen(port, ()=>console.log("imagesearch listening on port "+port))