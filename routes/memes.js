var express = require('express');
var router = express.Router();
var memesComments = require('./memes_comments');

router.get('/', function(req, res, next) {
  res.render('memes', { title: 'Awesome Memes' });
  next();
});

router.use(memesComments);

module.exports = router;
