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
        spaceBetween: 16,
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
    /**********************************
     * message는 높이가 높고 그 안에 inner가 고정으로 있음 sticky
     * message가 스크롤 되는 동안 p strong span태그가 넓이가 넓어지면서 색상 바뀜
    ***********************************/
    let color_obj = $('.message .txt_color strong')
    let color_area = $('.message')
    let color_resizer = 'span'
    let color_line = color_obj.length //몇줄인지
    let color_w //넓이
    let color_header //header의 높이
    let color_win_h //브라우저의 높이

    let color_start //색상을 변경하기 시작하는 위치
    let color_end //색상 변경이 종료되는 위치
    let color_total //색상 변경 전체 길이
    let color_diff //색상이 변경되기 시작한 이후에 얼마나 스크롤 되었는지
    let color_count //몇줄 완성하는지..

    let scrolling //현재 스크롤 된값

    //3번째 strong의 span 넓이 50%
    //color_obj.eq(2).find(color_resizer).width('50%')

    function color_change() {
        scrolling = $(window).scrollTop()
        color_win_h = $(window).height()
        color_header = $('.header').height()

        color_start = color_area.offset().top - color_header
        color_end = color_area.offset().top + color_area.height() - color_win_h

        if (color_end < scrolling) {
            //console.log('끝')
            color_obj.find(color_resizer).width('100%')
        } else if (color_start > scrolling) {
            // console.log('시작전')
            color_obj.find(color_resizer).width('0')
        } else {
            color_total = color_end - color_start
            color_diff = scrolling - color_start
            color_count = color_diff / color_total * 100
            // console.log(color_count)
            for (i = 0; i < color_line; i++) {
                color_w = (color_count - (100 / color_line) * i) * color_line
                if (color_w > 100) {
                    color_w = 100
                }
                color_obj.eq(i).find(color_resizer).width(color_w + '%')
            }//for
        }
    }
    color_change() //문서가 로딩되고 단 1번 실행
    $(window).scroll(function () { //스크롤 될때마다 1번씩 실행
        color_change()
    });
    /****************proj swiper************ */
    const proj_swiper = new Swiper('.proj .swiper', { /* 팝업을 감싼는 요소의 class명 */
        initialSlide: 2, // 0부터 시작 → 2 = 세번째 슬라이드
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 640px 이상일때 적용 */
                slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 2500,
        //     disableOnInteraction: true,
        // },
        navigation: {
            nextEl: '.proj-button-next',
            prevEl: '.proj-button-prev',
        },
    });
    /********!!txt_move!!******* */
    window.addEventListener('DOMContentLoaded', () => {
        const roller = document.querySelector('.moveroll');
        const track = document.querySelector('.roll_track');

        // 1. 기존 트랙을 복제합니다.
        const clone = track.cloneNode(true);

        // 2. 복제본에 'clone' 클래스를 추가해 구별할 수도 있습니다 (선택사항)
        clone.classList.add('clone');

        // 3. 부모인 moveroll 안에 복제본을 추가합니다.
        roller.appendChild(clone);
    });
})
