$(document).ready(function () {

    // media swiper
    var mediaSwiper = new Swiper(".mediaSwiper", {
        // slidesPerView: 6,
        // spaceBetween: 40,
        speed: 5000,
        simulateTouch: false,
        loop: true,
        autoplay: {
            delay: 0,
        },
        breakpoints: {
            360: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            400: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            640: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 40,
            },
        },

    });

    // studentImgSwiper swiper
    var studentImgSwiper = new Swiper(".studentImgSwiper", {
        slidesPerView: 1,
        speed: 1500,
        slideShadows: false,
        // simulateTouch: false,
        rotate: 0,
        cardsEffect: {
            perSlideRotate: "0",
            perSlideOffset: "10",
        },
        loop: true,
        effect: "cards",
        grabCursor: true,
        spaceBetween: 300,
        navigation: {
            nextEl: ".studentContentSwiper .swiper-next-button",
            prevEl: ".studentContentSwiper .swiper-prev-button",
        },
    });

    // studentContentSwiper swiper
    var studentContentSwiper = new Swiper(".studentContentSwiper", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 300,
        // simulateTouch: false,
        navigation: {
            nextEl: ".student-left .swiper-next-button",
            prevEl: ".student-left .swiper-prev-button",
        },
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        on: {
            slideChange: function () {
                i = this.realIndex;
                // console.log(i);
                studentImgSwiper.slideTo(i + 1);
            },
        }
    });

    // journey dynamic height
    $('.journey-content').height($('.journey-content').height() + 50)

    /* journey swiper scroll animation */
    const journeyGsap = gsap.timeline({
        scrollTrigger: {
            trigger: ".journey-sec",
            toggleActions: "restart pause resume none",
            start: "top-=100px 40%",
            end: "bottom+=400px 40%",
            scrub: true,
            // id: '1',
            // markers: true,
            onEnter: journeyEnterFn,
        },
    });

    // scroll animation callback
    function journeyEnterFn() {
        // journeySwiper.autoplay.start();
        // journeySwiper.play()
    }

    journeyEnterFn()

    // journey swiper
    var journeySwiper = new Swiper(".journeySwiper", {
        speed: 1000,
        effect: "fade",
        // allowTouchMove: false,
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    // journey click animation
    $(".journey-bullet").click(function () {
        var cardID = $(this).attr("data-id");

        if ($(this).hasClass("active")) {
            // $(this).removeClass("active");
        } else {
            $(".journey-bullet").removeClass("active");
            $(this).addClass("active");
        }
        journeySwiper.slideTo(cardID);
    });

    // journey slidechange animation
    journeySwiper.on("slideChange", function () {
        var count = journeySwiper.activeIndex;
        $(".journey-bullet").removeClass("active");
        $(".journey" + count).addClass("active");
    });

    // journey wrap dynamic height
    if (window.matchMedia("(min-width: 1025px)").matches) {
        $('.journey-wrap').css('height', $('.journey-wrap').height() + 100)
    }

    //journey sec padding
    var journeyPaddingLeft = window.innerWidth - $('.container').outerWidth() + 30;
    $('.journey-sec').css('padding-left', journeyPaddingLeft / 2);


})