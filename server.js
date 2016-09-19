'use strict';

const express = require('express'),
      app = express(),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      morgan = require('morgan');

require('dotenv').load();
