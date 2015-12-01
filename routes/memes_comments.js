var express = require('express');
var router = express.Router();
var memesMessages = require('../public/data/memes_image_comments');
var fs = require('fs');
var path = require('path');

router.get('/:id?', function(req, res) {
  var messageArray = [];
  memesMessages.forEach(function(elem) {
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

  memesMessages.push(newComment);

  var string = JSON.stringify(memesMessages, null, 2);

  var filePath = path.join(__dirname,
    '../public/data/memes_image_comments.json');

  fs.writeFile(filePath, string, function(err) {
    res.send(memesMessages);
  });

});

module.exports = router;
