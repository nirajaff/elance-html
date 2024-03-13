$(document).ready(function () {

    // mm.add("(min-width: 1025px)", () => {

    // solution section pinning
    // var focusTl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".focus-height",
    //         start: `0% 0%`,
    //         end: `100% 100%`,
    //         pin: ".focus-sticky",
    //         scrub: true,
    //         // markers: true
    //     },
    // });

    // focus scroll animation
    const focusTrigger = document.querySelectorAll(".focus-trigg");
    focusTrigger.forEach((section, i) => {
        // trigger point dynamic css
        // $(".focus-" + (i + 1)).css({
        //     top: i * 100 + "vh",
        // });

        var carStackGap = 100

        // card stack gap
        // gsap.to(".focus-card-" + (i + 1), {
        //     top: i * 100 + "vh",
        //     paddingTop: i * carStackGap + "px",
        // });

        // trigger swiper
        gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "0% 60%",
                end: "0% 0%",
                toggleActions: "play none none reverse",
                scrub: 2,
                // markers: true,
                onEnter: () => leftSwiper(i),
                onEnterBack: () => leftSwiperRev(i),
            },
        });

        function leftSwiper() {
            // solLeftSwiper.slideTo(i);
        }

        function leftSwiperRev() {
            // solLeftSwiper.slideTo(i - 1);
        }
    });

    // });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    var youSwiper = new Swiper(".youSwiper", {
        slidesPerView: 2.3,
        grabCursor: true,
        simulateTouch: false,
        spaceBetween: 50,
        navigation: {
            nextEl: ".youSwiper .swiper-next-button",
            prevEl: ".youSwiper .swiper-prev-button",
        },
    });

    // media swiper
    var mediaSwiper = new Swiper(".mediaSwiper", {
        slidesPerView: 6,
        spaceBetween: 40,
        speed: 5000,
        simulateTouch: false,
        loop: true,
        autoplay: {
            delay: 0,
        },

    });

    // studentContentSwiper swiper
    var studentContentSwiper = new Swiper(".studentContentSwiper", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 300,
        // simulateTouch: false,
        navigation: {
            nextEl: ".studentContentSwiper .swiper-next-button",
            prevEl: ".studentContentSwiper .swiper-prev-button",
        },
    });

    // studentImgSwiper swiper
    var studentImgSwiper = new Swiper(".studentImgSwiper", {
        slidesPerView: 1,
        speed: 1500,
        // simulateTouch: false,
        spaceBetween: 300,
        navigation: {
            nextEl: ".studentContentSwiper .swiper-next-button",
            prevEl: ".studentContentSwiper .swiper-prev-button",
        },
    });

    studentContentSwiper.controller.control = studentImgSwiper;
    studentImgSwiper.controller.control = studentContentSwiper;





})