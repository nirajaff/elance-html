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
        slidesPerView: 6,
        spaceBetween: 40,
        speed: 5000,
        simulateTouch: false,
        loop: true,
        autoplay: {
            delay: 0,
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

    // GSAP onload
    gsap.from(
        ".hero-content", {
        y: 100,
        duration: 1.7,
        autoAlpha: 0
    }, 0);
    gsap.from(
        "#header",
        {
            y: '-100%',
            duration: 1.5,
        },
        0)
    gsap.from(
        ".header-list",
        {
            background: '#000',
            duration: 1.5,
        },
        0)
    gsap.from(
        [".hero-card-1", ".hero-card-4"],
        {
            y: -500,
            duration: 2,
        },
        1)
    gsap.from(
        ".hero-card-2",
        {
            y: -800,
            x: 50,
            duration: 2,
        },
        1)
    gsap.from(
        ".hero-card-5",
        {
            y: -800,
            x: -50,
            duration: 2,
        },
        1)
    gsap.from(
        ".hero-card-3",
        {
            y: -1200,
            x: -60,
            duration: 2,
        },
        1)
    gsap.from(
        ".hero-card-6",
        {
            y: -1200,
            x: 60,
            duration: 2,
        },
        1)
    gsap.from(
        ".hero-card-round",
        {
            background: '#000',
            duration: 2,
        },
        1)

    var fCards = document.querySelectorAll('.focus-card')

    fCards.forEach((e, i) => {
        $('.focus-card-' + (i + 1)).css('top', 100 + ((i + 1) * 30))
    })

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

})