$('.one-time').slick({
    centerMode:true,
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
    responsive: [
        {
            breakpoint: 1024,
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
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
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

$(".slick-vertical-center-4").slick({
    dots: true,
    vertical: true,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 2
});
$(".slick-vertical-center-3").slick({
    dots: true,
    vertical: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3
});
$(".slick-vertical-center-2").slick({
    dots: true,
    vertical: true,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 2
});
$(".slick-vertical-center").slick({
    dots: true,
    vertical: true,
    centerMode: true,
});
$(".slick-vertical").slick({
    dots: true,
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 3
});
$(".slick-regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});
$(".slick-center").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 3
});
$(".slick-variable").slick({
    dots: true,
    infinite: true,
    variableWidth: true
});
$(".slick-lazy").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true
});
