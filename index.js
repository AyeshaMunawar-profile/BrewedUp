$(document).ready(function () {
    AOS.init(); // initiate animate on scroll instance
    gsap.registerPlugin(ScrollTrigger);
    let changeBorderColor = function (event) {
        let targetID = event.target.lastChild.previousSibling.id ? event.target.lastChild.previousSibling.id : null;
        targetID ? document.getElementById(targetID).classList.toggle("box-border-dark") : null;
    };
    let carousel_slides = document.querySelectorAll(".slick-slide");
    carousel_slides.forEach((element) => {
        element.addEventListener('mouseenter', changeBorderColor);
        element.addEventListener('mouseleave', changeBorderColor);
    });
    ScrollTrigger.defaults({toggleActions: "restart pause resume pause"});

    // animate the orange lines bellow heading
    gsap.utils.toArray(".section-heading__orange-line").forEach((line) => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: line,
                toggleAction: "restart none restart none",
                start: "top 90%",
                end: "top 20%",
                markers: false,
                scrub: 1,
                // Console.log the event called for the enter leaving , reentering or releaving the scroll trigger
                // area i.e distance between scroll start and scroll enter
                // onEnter: () => console.log("on Enter called"),
                // onLeave: () => console.log("on leave called"),
                // onEnterBack: () => console.log("on Enter back called"),
                // onLeaveBack: () => console.log("On leave back called")
            }
        });
        tl.from(line, {
            scaleX: 0,
            transformOrigin: "left center",
            ease: "none",
            duration: 1
        });
    });
    gsap.to(".we-serve__background__bean",{
        scrollTrigger: {
            toggleActions: "restart none none none",
            trigger: ".we-serve__content",
            markers: {
                // customize the markers
                startColor: "black",
                endColor: "red",
                fontSize: "1rem"
            },
            scrub: 2,
            start: "top center",
            end: () => "+=" + document.querySelector(".we-serve__content").offsetHeight
        },
        x: 40,
        y: 500,
        rotation: 480,
        duration: 10
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
            breakpoint: 1600,
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
            breakpoint: 1200,
            settings: {
                arrows: true,
                centerMode: true,
                slidesToShow: 2,
                slidesToScroll: 2,
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
