/**
 * Created by TienTTT on 1/26/2018.
 */
<!--script for scroll nav-->
    $(window).scroll(function () {
        if ($(this).scrollTop() > $('#nav2').height()) {
            $('#nav2').addClass('navbar-fixed-top');
        } else {
            $('#nav2').removeClass('navbar-fixed-top');
        }
    });

<!--script for Tab in Partner-->
$(document).ready(function () {
    $(".tabs-menu a").click(function (event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});

<!--script for carousel item partner-->

    $(document).ready(function () {
        /* Owl carousel */
        $(".owl-carousel").owlCarousel({
            slideSpeed: 500,
            rewindSpeed: 1000,
            mouseDrag: true,
            stopOnHover: true
        });
        /* Own navigation */
        $(".owl-nav-prev").click(function () {
            $(this).parent().next(".owl-carousel").trigger('owl.prev');
        });
        $(".owl-nav-next").click(function () {
            $(this).parent().next(".owl-carousel").trigger('owl.next');
        });
    });

<!--script for scroll to top-->

$(document).ready(function(){

    $(function(){

        $(document).on( 'scroll', function(){

            if ($(window).scrollTop() > 100) {
                $('.scroll-top-wrapper').addClass('show');
            } else {
                $('.scroll-top-wrapper').removeClass('show');
            }
        });

        $('.scroll-top-wrapper').on('click', scrollToTop);
    });

    function scrollToTop() {
        verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = $('body');
        offset = element.offset();
        offsetTop = offset.top;
        $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
    }

});

// script for tabs in the news
$(document).ready(function() {
    $(".nav-tabs a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});
