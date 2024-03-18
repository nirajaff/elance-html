$(document).ready(function () {

    // show first content by default
    $('#tabs-nav li:first-child').addClass('active');
    $('.content').hide();
    $('.content:first').show();

    // click function
    $('#tabs-nav li').click(function () {
        $('#tabs-nav li').removeClass('active');
        $(this).addClass('active');
        $('.content').hide();
        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });

    // tab animation
    $('.tab-bg').width($('.tab-nav-wrap li').innerWidth());
    $('.tab-nav-wrap li').click(function () {
        var bgLeft = $(this).position().left;
        $('.tab-bg').css('left', bgLeft);
    })

    // job swiper
    var jobSwiper = new Swiper(".jobSwiper", {
        slidesPerView: 2.3,
        grabCursor: true,
        // simulateTouch: false,
        spaceBetween: 50,
        navigation: {
            nextEl: ".jobSwiper .swiper-next-button",
            prevEl: ".jobSwiper .swiper-prev-button",
        },
    });

    // $("#contactForm").validate();


    // file upload script starts
    document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
        const dropZoneElement = inputElement.closest(".drop-zone");

        dropZoneElement.addEventListener("click", (e) => {
            inputElement.click();
        });

        inputElement.addEventListener("change", (e) => {
            if (inputElement.files.length) {
                updateThumbnail(dropZoneElement, inputElement.files[0]);
            }
        });

        dropZoneElement.addEventListener("dragover", (e) => {
            e.preventDefault();
            dropZoneElement.classList.add("drop-zone--over");
        });
        // 
        ["dragleave", "dragend"].forEach((type) => {
            dropZoneElement.addEventListener(type, (e) => {
                dropZoneElement.classList.remove("drop-zone--over");
            });
        });

        dropZoneElement.addEventListener("drop", (e) => {
            e.preventDefault();

            if (e.dataTransfer.files.length) {
                inputElement.files = e.dataTransfer.files;
                updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
            }

            dropZoneElement.classList.remove("drop-zone--over");
        });
    });

    function updateThumbnail(dropZoneElement, file) {
        let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

        // First time - remove the prompt
        if (dropZoneElement.querySelector(".drop-zone__prompt")) {
            dropZoneElement.querySelector(".drop-zone__prompt").remove();
        }

        // First time - there is no thumbnail element, so lets create it
        if (!thumbnailElement) {
            thumbnailElement = document.createElement("div");
            thumbnailElement.classList.add("drop-zone__thumb");
            dropZoneElement.appendChild(thumbnailElement);
        }

        thumbnailElement.dataset.label = file.name;

        // Show thumbnail for image files
        // if (file.type.startsWith("image/")) {
        //     const reader = new FileReader();

        //     reader.readAsDataURL(file);
        //     reader.onload = () => {
        //         thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
        //     };
        // } else {
        //     thumbnailElement.style.backgroundImage = null;
        // }
    }
})