$(document).ready(function () {
    console.log
    /**** header ***/
    let device_steus
    let window_w
    let mobile_size = 1024
    function device_chk() {
        window_w = $(window).width()
        if (window_w > mobile_size) {
            device_steus = 'pc'
        } else {
            device_steus = 'mo'
        }
        console.log(device_steus)
    }
    device_chk()
    $(window).resize(function () {
        device_chk()
    })
    $('.header .gnb_wrap ul.depth1 > li').on('mouseenter', function () {
        if (device_steus == 'pc') {
            $('.header .gnb_wrap ul.depth1 > li').removeClass('over')
            $(this).addClass('over')
        }
    })
    $('.header .gnb_wrap ul.depth1 > li').on('mouseleave', function () {
        if (device_steus == 'pc') {
            $('.header .gnb_wrap ul.depth1 > li').removeClass('over')
        }
    });
    $('.header .util .lang > ul.lang_wrap > li').on('mouseenter', function () {
        if (device_steus == 'pc') {
            $('.header .util .lang > ul.lang_wrap > li').removeClass('over')
            $(this).addClass('over')
        }
    })
    $('.header .util .lang > ul.lang_wrap > li').on('mouseleave', function () {
        if (device_steus == 'pc') {
            $('.header .util .lang > ul.lang_wrap > li').removeClass('over')
        }
    });
    /*** header menu***/
    $('.header .gnb .gnb_wrap ul.depth1 > li').on('click', function () {
        if ($(this).hasClass('open') == true) {
            console.log('열림')
            $(this).removeClass('open')
        } else {
            console.log('닫힘')
            $('.header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
            $(this).addClass('open')
        }
    })
    $('.header .gnb .gnb_open').on('click', function () {
        // console.log('열림') 이게 모바일 햄버거 메뉴 열고, 닫기
        $('.header').addClass('menu_open')
    })
    $('.header .gnb .gnb_close').on('click', function () {
        // console.log('닫힘')
        $('.header').removeClass('menu_open')
    })
    /****************!!visual swiper!!**************** */
    var delayTime = 5000; // 전환 시간 (5초)
    var visual_swiper = new Swiper(".visual .swiper", {
        loop: true,
        speed: 1000,
        allowTouchMove: false, // ★ 드래그/스와이프 막기
        autoplay: {
            delay: delayTime,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".visual .visual_progress",
            clickable: true
        },
        on: {
            autoplayTimeLeft(s, time, progress) {
                $('.visual .visual_progress .swiper-pagination-bullet').css('--visual-progress', 0); //★//
                $('.visual .visual_progress .swiper-pagination-bullet.swiper-pagination-bullet-active').css('--visual-progress', 100 - (progress * 100) + '%');
                // progressCircle.style.setProperty("--progress", 1 - progress);
                // progressContent.textContent = `${Math.ceil(time / 1000)}s`;
            }
        }
    });
    /***************************!!biz swiper!!************************* */
    const biz_swiper = new Swiper(".biz .swiper", {
        slidesPerView: 'auto',
        spaceBetween: 24,
        centeredSlides: true,
        loop: true,
        on: {
            slideChange: function () {
                const activeSlide = this.slides[this.activeIndex]
                const activeSlideWidth = activeSlide.offsetWidth
                const otherSlides = this.slides[this.previousIndex]
                const otherSlideWidth = otherSlides.offsetWidth
                const slideWidthDifference = activeSlideWidth - otherSlideWidth;
                this.setTranslate(this.translate - slideWidthDifference);
            },
            slideChangeTransitionEnd: function () {
                // 전환이 끝나면 Swiper를 다시 업데이트
                setTimeout(() => {
                    this.update();
                }, 100);  // 잠시 딜레이를 주고 업데이트
            }
        },
    });
    /****************************!!txt_sect swiper!!************************* */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.5 });

    // 모든 .fill_txt 요소에 감시자 붙이기
    document.querySelectorAll('.fill_txt').forEach(el => observer.observe(el));
})
