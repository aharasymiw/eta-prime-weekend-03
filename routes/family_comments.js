var express = require('express');
var router = express.Router();
var familyMessages = require('../public/data/family_image_comments.json');
var fs = require('fs');
var path = require('path');

router.get('/:id?', function(req, res) {
  var messageArray = [];
  familyMessages.forEach(function(elem) {
    if (elem.imageId === req.params.id) {
      messageArray.push(elem.message);
    }
  });

  res.send(messageArray);
});

router.post('/post', function(req, res) {
  var newComment = {
    message: req.body.message,
    imageId: req.body.imageId,
  };

  familyMessages.push(newComment);

  var string = JSON.stringify(familyMessages, null, 2);

  var filePath = path.join(__dirname,
    '../public/data/family_image_comments.json');

  fs.writeFile(filePath, string, function(err) {
    res.send(familyMessages);
  });

});

module.exports = router;
