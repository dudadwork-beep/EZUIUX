$(document).ready(function(){
     console.log
/**** header ***/
    let device_steus
    let window_w
    let mobile_size=1024
    function device_chk(){
        window_w = $(window).width()
        if(window_w > mobile_size){
            device_steus =  'pc'
        }else{
            device_steus =  'mo'
        }
        console.log(device_steus)
    }
    device_chk()
    $(window).resize(function(){
        device_chk()
    })
    $('.header .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        $('.header .gnb_wrap ul.depth1 > li').removeClass('over')
        $(this).addClass('over')
    })
     $('.header .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
        $('.header .gnb_wrap ul.depth1 > li').removeClass('over')
    });
    $('.header .util .lang > ul.lang_wrap > li').on('mouseenter', function(){
        $('.header .util .lang > ul.lang_wrap > li').removeClass('over')
        $(this).addClass('over')
    })
     $('.header .util .lang > ul.lang_wrap > li').on('mouseleave', function(){
        $('.header .util .lang > ul.lang_wrap > li').removeClass('over')
    });
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
        on: {
            init: function() {
                // 초기 실행 시 첫 번째 바 활성화
                updateProgress(0);
            },
            slideChange: function() {
                // 실제 슬라이드 인덱스 계산 (loop 모드 고려)
                updateProgress(this.realIndex);
            },
            slideChangeTransitionEnd: function () {
                let activeSlide = this.slides[this.activeIndex];
                let video = activeSlide.querySelector('video');
                if (video) {
                    video.play();
                }
            }
        }
    });

    // 프로그레스 바 상태 업데이트 함수
    function updateProgress(index) {
        let bars = $('.visual_progress .bar');
        
        // 일단 모든 바의 클래스 초기화
        bars.removeClass('active passed');
        
        // 현재 인덱스 이전 바들은 꽉 채우기 (passed)
        bars.each(function(idx) {
            if (idx < index) {
                $(this).addClass('passed');
            } else if (idx === index) {
                // 현재 바 애니메이션 시작
                // transition 초기화를 위해 잠깐 떼었다가 붙임
                $(this).find('span').css('transition', 'none').css('left', '-100%');
                setTimeout(() => {
                    $(this).addClass('active');
                    $(this).find('span').css('transition', `left ${delayTime}ms linear`).css('left', '0');
                }, 10);
            }
        });
    }

    // 바 클릭 시 해당 슬라이드로 이동 (선택 사항)
    $('.visual_progress .bar').on('click', function() {
        var idx = $(this).index();
        visual_swiper.slideToLoop(idx);
    });
})
