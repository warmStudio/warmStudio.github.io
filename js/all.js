/*swipe.js */
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    speed: 2000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
/*individual*/
$(document).ready(function () {
    $(function () {
        /*window滾至160以上，添加fixed效果*/
        $(window).scroll(function () {
            var scrollVal = $(this).scrollTop();
            if (scrollVal >= 160) {
                $('.nav-bar').addClass('fixed-top');

            } else {
                $('.nav-bar').removeClass('fixed-top');
            }
        });
        /*navbar連結滑動效果*/
        $('.scrollTop').click(function (e) {
            e.preventDefault();
            var target = $(this).attr('href');
            var targetPos = $(target).offset().top;
            $('html, body').animate({ scrollTop: targetPos }, 1500);
        });
    });
});
/*aos*/
AOS.init();