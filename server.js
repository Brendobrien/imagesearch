'use strict';

const express = require('express'),
      app = express(),
      mongoose = require('mongoose'),
      body-parser = require('body-parser'),
      morgan = require('morgan');

require('dotenv').load();
