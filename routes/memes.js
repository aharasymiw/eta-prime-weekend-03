// A route that renders the page alonge with images
// displayed by ../views/memes.js
var express = require('express');
var router = express.Router();
var family = require('../public/memes.json');
var fs = require('fs');
var path = require('path');

// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('memes', { title: 'Awesome Memes' });
  next();
});

router.get('/', function(req, res, next) {
  console.log('Both work');
});

module.exports = router;
