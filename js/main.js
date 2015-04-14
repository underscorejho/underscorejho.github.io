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
/*
$(document).ready(function() {
   $('.tableOption').mouseenter(function() {
       $(this).width('110%');
   });
   $('.tableOption').mouseleave(function() {
       $(this).width('100%');
   });
});*/