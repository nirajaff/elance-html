$(document).ready(function () {

    // magnific popup
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    // you swiper
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
                slidesPerView: 2.6,
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





    // gsap initiate
    gsap.registerPlugin(ScrollTrigger);

    function onloadAnim() {
        gsap.to(
            ".hero-content", {
            y: 0,
            duration: 1.5,
            autoAlpha: 1,
            zIndex: 11
        },
            0);
        gsap.from(
            ".triangle-wrap",
            {
                rotate: '180deg',
                duration: 1.5,
            },
            0)
        gsap.from(
            "#header",
            {
                y: '-100%',
                duration: 1.5,
            },
            0)
        gsap.from(
            [".hero-card-1", ".hero-card-4"],
            {
                y: -500,
                duration: 2,
            },
            2)
        gsap.from(
            ".hero-card-2",
            {
                y: -800,
                x: 50,
                duration: 2,
            },
            2)
        gsap.from(
            ".hero-card-5",
            {
                y: -800,
                x: -50,
                duration: 2,
            },
            2)
        gsap.from(
            ".hero-card-3",
            {
                y: -1200,
                x: -60,
                duration: 2,
            },
            2)
        gsap.from(
            ".hero-card-6",
            {
                y: -1200,
                x: 60,
                duration: 2,
            },
            2)
        gsap.to(
            ".triangle-wrap",
            {
                rotate: '200deg',
                duration: 2,
            },
            2)
        gsap.to(
            ".triangle-line .triangle-wrap",
            {
                opacity: 0,
            },
            4)
        gsap.to(
            ".gsap-triangle",
            {
                top: $(".hero-triangle").offset().top - 100 + "px",
                left: $(".hero-triangle").offset().left + "px",
                width: $(".hero-triangle").outerWidth() + "px",
                height: $(".hero-triangle").outerHeight() + "px",
                opacity: 1,
                duration: 0,
                position: 'fixed',

            },
            4)
    }

    onloadAnim()            //onload gsap banner animation


    // mm.add("(min-width: 641px)", () => {
    const heroTriggers = document.querySelectorAll(".hero-trigg");
    heroTriggers.forEach((section, i) => {


        // her section pinning
        var headHeight = $('.header-box').outerHeight()
        var heroPinTl = gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".hero-height",
                    start: `0% 80px`,
                    end: "100% 100%",
                    pin: ".hero-sticky",
                    scrub: 1,
                    // markers: true
                },
            })


        // trigger point dynamic css
        var heroHeight = $(".hero-wrap").outerHeight();
        $(".hero-" + (i + 1)).css({
            top: i * heroHeight + "px",
            height: heroHeight + "px",
        });


        // hero scroll animation
        const heroScrollTl = gsap
            .timeline({
                scrollTrigger: {
                    trigger: section,
                    scrub: 1,
                    start: `100% 50%`,
                    end: "200% 50%",
                    // toggleActions: "play none none reverse",
                    onEnter: () => techSlideEnter(),
                    onEnterBack: () => techSlideEnterBack(),
                    // markers: true,
                },
            })


        function firstAnim() {
            heroScrollTl
                .to(
                    ".hero-content",
                    {
                        transform: 'scale(0)',
                        duration: 1,
                        autoAlpha: 0
                    },
                    0)
                .to(
                    ".gsap-triangle",
                    {
                        left: '50%',
                        top: '50%',
                        rotate: '-20deg',
                        scale: 8,
                        autoAlpha: 1,
                        zIndex: '0',
                        duration: 1
                    },
                    0)
                .to(
                    ".hero-card", {
                    transform: 'scale(1) translate3d(0, 0, 0)',
                    position: 'static',
                    zIndex: '11',
                    duration: 1.5
                }, 2)
        }

        function secondAnim() {
            heroScrollTl
                .to(
                    ".img-box",
                    {
                        y: '-150%',
                        duration: 1.5,
                    },
                    0)
                .to(
                    ".gsap-triangle",
                    {
                        scale: 20,
                        duration: 1.5,
                        autoAlpha: 0
                    },
                    1)
                .to(
                    ".blue-gradient",
                    {
                        duration: 1.5,
                        autoAlpha: 1,
                    },
                    1)
                .from(
                    ".focus-banner-wrap",
                    {
                        y: 500,
                        duration: 1.5,
                        autoAlpha: 0,
                    },
                    2)

        }

        function thirdAnim() {
            heroScrollTl
                .to(
                    ".blue-gradient",
                    {
                        autoAlpha: 0,
                        duration: 1.5
                    },
                    0)

        }

        // ==============triangle scroll=====================
        if (i == 0) {
            firstAnim()            //banner content disappear
        } else if (i == 1) {
            secondAnim()
        } else if (i == 2) {
            thirdAnim()
        }
        // ==============triangle scroll end=================
    })

});

function techSlideEnter() {
    console.log(i + ' enter');
}

function techSlideEnterBack() {
    console.log(i + ' enterback');
}

// focus card stack
var fCards = document.querySelectorAll('.focus-card')
fCards.forEach((e, i) => {
    $('.focus-card-' + (i + 1)).css('top', 100 + ((i + 1) * 30))
})


// pool image hover effect
function moveImage(event, box) {
    const img = box.querySelector('.pool-img');
    const boxRect = box.getBoundingClientRect();
    const offsetX = event.clientX - boxRect.left;
    const offsetY = event.clientY - boxRect.top;
    const centerX = boxRect.width / 2;
    const centerY = boxRect.height / 2;
    const moveX = (offsetX - centerX) * 0.1;
    const moveY = (offsetY - centerY) * 0.1;
    img.style.transform = `translate(${moveX}px, ${moveY}px)`;
}