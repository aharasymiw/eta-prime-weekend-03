var express = require('express');
var router = express.Router();
var memesComments = require('./memes_comments');

router.get('/', function(req, res) {
  res.render('memes', {title: 'Awesome Memes'});
});

router.use(memesComments);

module.exports = router;
