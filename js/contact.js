// Anim text starts

window.addEventListener("DOMContentLoaded", () => {
    gsap.config({ trialWarn: false });
    // console.clear();
    gsap.registerPlugin(ScrollTrigger, SplitText);
    let split = new SplitText(".anim-text", { type: "lines" });

    function makeItHappen() {
        split.lines.forEach((target) => {
            gsap.to(target, {
                backgroundPositionX: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: target,
                    // markers: true,
                    scrub: 0.5,
                    start: "top 50%",
                    end: "bottom 50%",
                },
                opacity: 1,
            });
        });
    }

    makeItHappen();
});

// Anim text ends