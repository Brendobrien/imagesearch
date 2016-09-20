'use strict';

var ImgurHandler = require(process.cwd() + '/app/controllers/imgurHandler.server.js');

module.exports = function (app) {
  var imgurHandler = new ImgurHandler();

  app.route('/')
  .get((req,res)=> res.sendFile(process.cwd() + '/index.html'));

  app.route('/search/:term')
  .get((req,res)=>imgurHandler.imgurAPI(req,res));

  app.route('/list')
  .get((req,res)=>imgurHandler.returnSearches(req,res))
};