// A route that renders the page alonge with images
// displayed by ../views/memes.js
var express = require('express');
var router = express.Router();
var family = require('../public/memes.json');
var fs = require('fs');
var path = require('path');

router.get('/', function(req, res, next) {
  res.render('memes', { title: 'Awesome Memes' });
});

module.exports = router;
