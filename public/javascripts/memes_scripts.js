function populateComments(current) {
  $.ajax({
    url:'/memes/' + current,
  }) .done(function(data) {
    var commentSource = $('#comment-template').html();
    var commentTemplate = Handlebars.compile(commentSource);

    var commentHtml = commentTemplate({comment: data});
    $('#commentHook').html(commentHtml);
  });
}

function populateImages(data, current) {
  var imageSource = $('#images-template').html();
  var imageTemplate = Handlebars.compile(imageSource);

  if (current === 0) {
    prev = data.length - 1;
  } else {
    prev = current - 1;
  }

  if (current === data.length - 1) {
    next = 0;
  } else {
    next = current + 1;
  }

  var peopleContext = {
    prevImg: data[prev].url,
    prevAlt: data[prev].alt,
    currentImg: data[current].url,
    currentAlt: data[current].alt,
    nextImg: data[next].url,
    nextAlt: data[next].alt,
  };

  var imageHtml = imageTemplate(peopleContext);
  $('#imgHook').html(imageHtml);
}

$(function() {

  $.ajax({
    url:'/data/memes_image_data.json',
  }) .done(function(json) {

    var data = json;
    var current = 0;

    var prev = data.length - 1;
    var next = 1;

    populateImages(data, current);
    populateComments(current);

    $('body').on('click', '#previous', function() {
      if (current === 0) {
        current = data.length - 1;
      } else {
        current--;
      }

      populateImages(data, current);
      populateComments(current);
    });

    $('body').on('click', '#next', function() {
      if (current === data.length - 1) {
        current = 0;
      } else {
        current++;
      }

      populateImages(data, current);
      populateComments(current);
    });
  });

});
