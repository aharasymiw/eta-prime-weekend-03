// A route that renders the page alonge with images
// displayed by ../views/family.js
var express = require('express');
var router = express.Router();
var family = require('../public/family.json');
var fs = require('fs');
var path = require('path');

router.get('/', function(req, res, next) {
  res.render('family', { title: 'Awesome Family' });
});

module.exports = router;
