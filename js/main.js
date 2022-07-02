$(window).on('load', function() {
    /*
    	Preloder
    */
    $(".loader").fadeOut();
    $("#preloder").delay(400).fadeOut("slow");

});

(function($) {
    /*
    	Background Set
    */
    $('.set-bg').each(function() {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });


    /*
    	Hero Slider
    */
    $(".hero-slider").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['', ''],
        smartSpeed: 1200,
        autoplay: false,
        mouseDrag: false,
        autoplay: true,
        startPosition: 'URLHash'
    });


    //heading animation

    //wow js

    new WOW().init();

    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();


})(jQuery);