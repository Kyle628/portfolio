$(function() {

//page 1 timers

setTimeout(
function() {
  $('#hi').animate({'opacity':'1'},500);
}, 500);

setTimeout(
  function() {
    $('#imkyle').animate({'opacity':'1'},1000);
  }, 1000);

  setTimeout(
    function() {
      $('#me').animate({'opacity':'1'},1000);
    }, 1000);


setTimeout(
function() {
  $('#makewebsites').animate({'opacity':'1'},1000);
}, 2000);

setTimeout(
  function() {
    $('#arrow').animate({'opacity':'1'},1000);
  }, 2000);

  setTimeout(
    function() {
      $('#whoami').animate({'opacity':'0'},1000);
    }, 1000);

//page 2

$(window).scroll( function(){

    /* Check the location of each desired element */
    $('#whytheweb').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
          setTimeout(function() {
            $('#whytheweb').animate({'opacity': '1'}, 1000);
          }, 500);
          setTimeout(function() {
            $('#when').animate({'opacity': '1'}, 1000);
          }, 1000);
          setTimeout(function() {
            $('#google').animate({'opacity': '1'}, 1500);
          }, 1500);
          setTimeout(function() {
            $('#neopets').animate({'opacity': '1'}, 1500);
          }, 1600);
          setTimeout(function() {
            $('#runescape').animate({'opacity': '1'}, 1500);
          }, 1700);
          setTimeout(function() {
            $('#albinoblacksheep').animate({'opacity': '1'}, 1500);
          }, 1800);

          setTimeout(function() {
            $('#likes').animate({'opacity': '1'}, 1500);
          }, 2000);

        }

    });

    $('#iliketo').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
          setTimeout(function() {
            $('#notdeveloping').animate({'opacity': '1'}, 1000);
          }, 500);
          setTimeout(function() {
            $('#iliketo').animate({'opacity': '1'}, 1000);
          }, 1000);
          setTimeout(function() {
            $('#surf').animate({'opacity': '1'}, 1500);
          }, 2000);
          setTimeout(function() {
            $('#surfcaption').animate({'opacity': '1'}, 1500);
          }, 2000);
          setTimeout(function() {
            $('#game').animate({'opacity': '1'}, 1500);
          }, 3000);
          setTimeout(function() {
            $('#gamecaption').animate({'opacity': '1'}, 1500);
          }, 3000);
          setTimeout(function() {
            $('#explore').animate({'opacity': '1'}, 1500);
          }, 4000);
          setTimeout(function() {
            $('#explorecaption').animate({'opacity': '1'}, 1500);
          }, 4000);
          setTimeout(function() {
            $('#hobbies').animate({'opacity': '1'}, 1500);
          }, 4000);

        }

    });

});


});
