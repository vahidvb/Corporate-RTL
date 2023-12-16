$(document).ready(function () {
    $('[data-bs-toggle=tooltip]').tooltip();
    /* remove pre loading section */
    $('.page-preloader-cover').delay(3500).fadeOut('slow');
    /* remove pre loading section */
    // start header & button-up show
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $('.header-nav').addClass('sticky');
            $('.btn-up').show();
        } else {
            $('.btn-up').hide();
            $('.header-nav').removeClass('sticky');
        }
    });
    $(".btn-up").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    })
    // end header & button-up show
    // start search box
    $('.search-link').click(function () {
        $('.search-box').css('transform', 'translateY(-38px)');
        $('.search-box').css('opacity', '1');
        $('#search-tooltip').tooltip('hide');
        
    })
    $('.close-btn').click(function () {
        $('.search-box').css('transform', 'translateY(-280%)');
        $('.search-box').css('opacity', '0');
    });
    // start search box
    // start close navbar
    $('.header-btn').click(function () {
        $('.navbar-collapse').css('transform', 'translateX(0px)');
        $('.hover-menu').css('visibility', 'visible');
        $('.hover-menu').click(function () {
            $('.navbar-collapse').css('transform', 'translateX(-100%)');
            $('.hover-menu').css('visibility', 'hidden');
        });
    })
    $('.close').click(function () {
        $('.navbar-collapse').css('transform', 'translateX(-100%)');
        $('.hover-menu').css('visibility', 'hidden');
    })
    // end close navbar
    // start header-slider
    $('.middle-carousel').owlCarousel({
        loop: false,
        rtl: true,
        margin: 0,
        autoWidth: false,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
    // end header-slider
    // start counter
    $('.counter').waypoint(function () {
        $(".number-counter").each(function () {
            const options = {
                useEasing: true,
                useGrouping: false,
                separator: ',',
                decimal: '.',
            };
            const counter = new CountUp(this, 0, $(this).html(), 0, 9.5, options);
            if (!counter.error) {
                counter.start();
            } else {
                console.error(counter.error);
            }
        });
        this.destroy();
    }
        , {
            offset: '100%'
        });
    // end counter
    // start customer-slider
    $('.customer-slider').owlCarousel({
        loop: false,
        rtl: true,
        margin: 0,
        autoWidth: false,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    });
    // end customer-slider
    // start button-up
    $(".btn-up").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    })
    // end button-up
})