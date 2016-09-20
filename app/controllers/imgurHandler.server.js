'use strict'

var searches = require('../models/searchDB.js');

function imgurHandler() {
	this.imgurAPI = function(req,res) {
		var https = require("https");
		var route={};
		route.sort = "top";
		if(req.query.offset)
			route.page = "/"+req.query.offset+"/";
		else
			route.page = "/0/"

		var options = {
		  protocol:"https:",
		  host: 'api.imgur.com',
		  path: "/3/gallery/search/"+route.sort+route.page+"?q="+req.params.term,
		  headers: {"Authorization" : "Client-ID " + process.env.CLIENT_ID}
		};  

		var server = https.request(options, function(response) {
		  var str = '';
		  response.on('data', function (chunk) {
		    str += chunk;
		  });
		  response.on('end', function () {
		    extractData(req,res,JSON.parse(str));
		  });
		});

		server.end();
	}

	this.returnSearches = function(req,res) {
		searches.find({},{search:1,time_stamp:1,_id:0},(err, search) => {

	        res.json(search.reverse());
	    });
	}
}

function extractData(req,res,json) {
	var time = new Date();
	searches.create({
	    search: req.params.term,
	    time_stamp: time.toISOString()
	})

	var result = json.data.map((x)=>{
		var image = (x.gifv) ? x.gifv : x.link;
		var page = (x.account_url) ? "http://imgur.com/user/"+x.account_url+"/submitted" : "no page for this pic, bruh"
		return {
          "image_URL": image,
          "alt_text": x.title,
          "page_url": page
        };
    })
	res.json(result);
}

module.exports = imgurHandler;