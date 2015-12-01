var express = require('express');
var router = express.Router();
var familyComments = require('./family_comments');

router.get('/', function(req, res) {
  res.render('family', {title: 'Awesome Family'});
});

router.use(familyComments);

module.exports = router;
