$(document).ready(function () {
    AOS.init(); // initiate animate on scroll instance
    let changeBorderColor = function (event) {
        let targetID = event.target.lastChild.previousSibling.id ? event.target.lastChild.previousSibling.id : null;
        targetID ? document.getElementById(targetID).classList.toggle("box-border-dark") : null;
    };
    let carousel_slides = document.querySelectorAll(".slick-slide");
    carousel_slides.forEach((element) => {
        element.addEventListener('mouseenter', changeBorderColor);
        element.addEventListener('mouseleave', changeBorderColor);
    });

});
$('.one-time').slick({
    centerMode: true,
    centerPadding: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

$('.slick-center').slick({
    centerMode: true,
    centerPadding: '60px',
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true,
    lazyLoad: 'ondemand',
    mobileFirst: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: true,
                centerMode: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToScroll: 2,
                slidesToShow: 2,
                dots: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToScroll: 1,
                slidesToShow: 1,
                dots: false
            }
        }
    ]
});
