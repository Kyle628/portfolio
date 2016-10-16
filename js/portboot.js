console.log("loaded js");

$(function() {

var isFirstJumboHover = true;

var isFirstNavHover = true;



$(".greeting").hide(function() {
  console.log("yodle");
});

$('.jumbotron').hover(function(){
  $('.greeting').show(1000);
  //$('.contact').effect('shake');
  if (isFirstJumboHover) {
    if (window.matchMedia("(min-width: 768px)").matches) {
        console.log("in");
        $(".greeting").animate({
        right: "-=100px",
        }, 1000);
    } else {
        console.log("in");
        $(".greeting").animate({
        right: "-=10px",
        }, 1000);
    };
    isFirstJumboHover = !isFirstJumboHover;
  };
});


$("img").mouseenter(function() {
  $(this).fadeTo( "fast" , 0.5, function() {
    console.log("should fade");
  });
});

$( "img").mouseleave(function() {
  $(this).fadeTo( "fast" , 1.0, function() {
    // Animation complete.
  });
});

$('.navbar').mouseenter(function() {
  if (isFirstNavHover) {
    $('.fb').animate({
      left: "-=50px",
    }, 1000);

    $('.linked').animate({
      right: "-=50px",
    }, 1000);
  } else {
    $('.fb').animate({
      left: "+=50px",
    }, 1000);

    $('.linked').animate({
      right: "+=50px",
    }, 1000);
  };
  isFirstNavHover = !isFirstNavHover;
});

$(window).scroll( function(){

    /* Check the location of each desired element */
    $('.col-xs-2').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'},500);

        }

    });

});

});
