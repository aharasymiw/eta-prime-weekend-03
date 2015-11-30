var express = require('express');
var router = express.Router();
var familyMessages = require('../public/data/family_image_comments.json');
var fs = require('fs');

router.get('/:id?', function(req, res, next) {
  if (req.params.id === undefined) {
    console.log('The ID :' + req.params.id + ' is undefined.');
  } else {
    res.send(familyMessages[req.params.id].message);
  }

  next();
});

module.exports = router;
