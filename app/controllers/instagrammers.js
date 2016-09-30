var request = require('request');
var locus   = require('locus');
var Instagrammer = require('../models/instagrammer');
var bodyParser = require('body-parser')
var favorites = [];

var index = function(req, res, next){
  Instagrammer.find({}, function(err, instagrammers) {
    if (err) {
      res.send({message: err});
    } else {
      res.json(instagrammers);
    }
  });
};

var show = function(req, res, next){
  Instagrammer.find({user: req.params.user}, function(err, instagrammers) {
    if (err) {
      res.json({message: 'Could not find Instagrammer User because ' + err});
    } else if (!instagrammers) {
      res.json({message: 'No Instagram Account associated with this user.'});
    } else {
      res.json(instagrammers);
    }
  });
  console.log(Instagrammer);
};

var get = function(req, res, next){
  // request to Search
  request.get(`https://api.instagram.com/v1/users/search?q=jack&access_token=ACCESS-TOKEN=${req.user.accessToken}`), function(err, responses) {
    if (err) {
      res.send({message: err});
    } else {
      res.json(response);
    };
  };
  var instagrammerData = JSON.parse(body);
  console.log("Grab data is hit!");
  var instagrammerData = searchData.data.map(imgData => [imgData.images.standard_resolution.url, imgData.images.text, imgData.videos.standard_resolution.url, imgData.user.full_name]);
  res.json(instagrammerData);
};



module.exports = {
  index: index,
  show:  show,
  get: get
};
