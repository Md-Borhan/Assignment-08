jQuery(document).ready(function($) {

    // Counterup
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Gallery
    var mixer = mixitup('.mix-container');

    // Slider
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // autoplay: true,
        loop: true,

    });
});