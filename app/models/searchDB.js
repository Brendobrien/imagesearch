'use strict';

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var searches = new Schema({
    search: String,
    time_stamp: String
});

module.exports = mongoose.model('searches', searches);