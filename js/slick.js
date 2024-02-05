$(document).ready(function(){
    $('.completed-projects__cards-box').slick({
        pauseOnHover: true,
        pauseOnFocus: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        mobileFirst: true,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            },
            // breakpoint: 992,
            // settings: {
            //     slidesToShow: 3,
            //     slidesToScroll: 1
            // },
        }],

    });
})