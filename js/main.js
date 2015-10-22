$(document).ready(function() {
  $('.tableOption').mouseenter(function() {
    $(this).animate({
      height: '+=5px'
    });
  });
  $('.tableOption').mouseleave(function() {
    $(this).animate({
      height: '-=5px'
    });
  });
});
