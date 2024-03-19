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

})