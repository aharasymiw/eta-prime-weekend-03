var express = require('express');
var router = express.Router();
var memesMessages = require('../public/data/memes_image_comments');
var fs = require('fs');

router.get('/:id?', function(req, res, next) {
  if (req.params.id === undefined) {
    console.log('The ID :' + req.params.id + ' is undefined.');
  } else {
    res.send(memesMessages[req.params.id].message);
  }

  next();
});

module.exports = router;
