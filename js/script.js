// slider

$('.cd-testimonials-wrapper').flexslider({
    selector: ".cd-testimonials > li",
    animation: "slide",
    controlNav: false,
    slideshow: false,
    smoothHeight: true,
    start: function() {
        $('.cd-testimonials').children('li').css({
            'opacity': 1,
            'position': 'relative'
        });
    }
});

$('.cd-testimonials-all-wrapper').children('ul').masonry({
    itemSelector: '.cd-testimonials-item'
});


/* Smooth scroll to Block
    ====================================*/

/* button */

$("#js-application-form").on("click", function(e) {

    e.preventDefault();
    var contact = $("#js-contact").offset().top;

    $("html, body").animate({
        scrollTop: contact
    }, 2000);

});

/* main-nav */

$("#js-main").on("click", function(e) {

    e.preventDefault();
    var contact = $("#js-header").offset().top;

    $("html, body").animate({
        scrollTop: contact
    }, 2000);

});

/* prog */

$("#js-prog").on("click", function(e) {

    e.preventDefault();
    var contact = $("#js-portfolio").offset().top;

    $("html, body").animate({
        scrollTop: contact
    }, 2000);

});

/* abous-us */

$("#js-abous-us").on("click", function(e) {

    e.preventDefault();
    var contact = $("#js-about").offset().top;

    $("html, body").animate({
        scrollTop: contact
    }, 2000);

});

/* contact */

$("#js-contacts").on("click", function(e) {

    e.preventDefault();
    var contact = $("#js-contact").offset().top;

    $("html, body").animate({
        scrollTop: contact
    }, 2000);

});


/* Fixed header when scroll
    ====================================*/

var headerH = $("#js-header").height(),
    navH = $("#js-nav-container").innerHeight();
console.log(headerH);
$(document).on("scroll", function() {

    var documentScroll = $(this).scrollTop();

    if (documentScroll > headerH) {
        $("#js-nav-container").addClass("fixed");

        $("#js-header").css({
            "paddingTop": navH
        });
    } else {
        $("#js-nav-container").removeClass("fixed");
        $("#js-header").removeAttr("style");
    }

});


/* Modals
    ====================================*/
$(".js-show-modal").on("click", function(e) {

    e.preventDefault();
    $(".js-modal, #js-overlay").fadeIn(1000);

});

$(".js-modal-close").on("click", function(e) {

    e.preventDefault();
    $(".js-modal, #js-overlay").fadeOut(500);

});