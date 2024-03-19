
$(document).ready(function () {



    // course trigger scroll animation
    const courseTrigger = document.querySelectorAll(".sticky-left > div");

    courseTrigger.forEach((section, i) => {

        // trigger swiper scroll animation
        var courseTl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "0% 60%",
                end: "0% 60%",
                toggleActions: "play none none reverse",
                scrub: 2,
                // markers: true,
                id: "course",
                onEnter: () => enterFun(),
                onEnterBack: () => enterBackFun(),
                // onLeave: () => onLeave()
            },
        });

        function enterFun() {
            $('.learn-link li').removeClass('active')
            $('.learn-link li').eq(i).addClass('active')
        }

        function enterBackFun(e) {
            $('.learn-link li').removeClass('active')
            $('.learn-link li').eq(i - 1).addClass('active')
        }
    });


    // course click toggle class
    $('.learn-link li').click(function () {
        $('.learn-link li').removeClass('active')
        $(this).addClass('active')
        document.querySelector('.menu-popup').classList.remove('active');
    })

    // Video Travel animation
    let mm = gsap.matchMedia();
    // mm.add("(min-width: 1201px)", () => {
    var bannerVideoWidth = $(".video-wrap").width();
    var bannerVideoHeight = $(".video-wrap").height();
    var heroVideo = document.getElementById("hero-video")

    mm.add("(min-width: 1024px)", () => {

        let VideoTravelAnim = gsap.timeline({
            scrollTrigger: {
                trigger: ".full-video-sec",
                start: "0% 75%",
                end: "0% 30%",
                onLeave: () => {
                    $(".play-btn").css({
                        opacity: "1",
                    });
                    setTimeout(() => {
                        heroVideo.play();
                    }, 500);

                },
                onEnterBack: () => {
                    $(".play-btn").css({
                        // opacity: "0",
                    });
                    setTimeout(() => {
                        heroVideo.pause()
                    }, 500);
                },
                scrub: 1,
                preventOverlaps: true,
                yoyo: true,
                // markers: true,
            },
        });

        VideoTravelAnim.to(".banner-video video", {
            y: () =>
                $(".video-wrap").offset().top - $(".banner-video").offset().top,
            x: () =>
                $(".video-wrap").offset().left - $(".banner-video").offset().left,

            width: bannerVideoWidth,
            height: bannerVideoHeight,
            borderRadius: '24px',
            ease: "linear",
        }, 0).to('.play-btn', {
            y: () =>
                $(".video-wrap").offset().top - $(".banner-video").offset().top / 2,
            x: () =>
                ($(".video-wrap").offset().left - $(".banner-video").offset().left) / 2,
            // scale: 0.5

        }, 0)

    })

    $('.play-btn').click(function () {
        $(this).css('display', 'none')
        $('.hero-right video').attr('controls', true)
        $('.hero-right video').get(0).play()
    })

    // trust swiper
    var trustSwiper = new Swiper(".trustSwiper", {
        slidesPerView: 4,
        spaceBetween: 40,
        simulateTouch: false,
        loop: true,
        breakpoints: {
            360: {
                spaceBetween: 20,
            },

            1024: {
                speed: 5000,
                autoplay: {
                    delay: 0,
                },
            },
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

    // dynamic accrodion click event
    function dynAcc(i) {

        var accItem = document.querySelectorAll(`.acc-wrap-${i} .acc-item .accordion`);

        $(`.acc-wrap-${i} .acc-container .acc-item:first-child`).addClass("active");
        $(`.acc-wrap-${i} .acc-container .acc-item:nth-child(1) .panel`).slideDown();

        accItem.forEach((el) =>
            el.addEventListener("click", () => {
                if ($(el).parent(`.acc-wrap-${i} .acc-item`)[0].classList.contains("active")) {
                    $(el).siblings(`.acc-wrap-${i} .panel`).slideUp();
                    $(el).parent(`.acc-wrap-${i} .acc-item`).removeClass("active");
                } else {
                    $(`.acc-wrap-${i} .panel`).slideUp();
                    $(`.acc-wrap-${i} .acc-item`).removeClass("active");
                    $(el).siblings(`.acc-wrap-${i} .panel`).slideDown();
                    $(el).parent(`.acc-wrap-${i} .acc-item`).addClass("active");
                }
            })
        );
    }
    for (i = 1; i < 5; i++) {
        dynAcc(i);
    }

    // mobile popup
    document.querySelector('.fixed-menu').addEventListener('click', () => {
        document.querySelector('.menu-popup').classList.toggle('active');
    })

    document.querySelector('.menu-popup .cross-icon').addEventListener('click', () => {
        document.querySelector('.menu-popup').classList.remove('active');
    })

})