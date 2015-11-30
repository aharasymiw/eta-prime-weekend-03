var express = require('express');
var router = express.Router();
var familyComments = require('./family_comments');

router.get('/', function(req, res, next) {
  res.render('family', { title: 'Awesome Family' });
  next();
});

router.use(familyComments);

module.exports = router;
