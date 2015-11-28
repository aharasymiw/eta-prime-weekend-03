var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Awesome Users' });
  next();
});

router.get('/:id?', function(req, res) {
  if (req.params.id !== undefined) {
    console.log('Our ID is ', req.params.id);
  }
});

module.exports = router;
