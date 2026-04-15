$(document).ready(function(){
    $('.top_bnr .top_bnr_close').on('click', function(){
        // console.log('클릭')
        $('.top_bnr').hide()
    })
/*********top_bnr*********/
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
    })
/****************!!popup(비주얼) swiper!!**************** */
   const popup_swiper = new Swiper('.popup .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            769: {    /* 769px 이상일때 적용 */
                slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 100,
            },
        },
        autoplay: {  /* 팝업 자동 실행 */
		delay: 5000,
		disableOnInteraction: true,
	    },
        centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },
        navigation: {
            nextEl: '.popup .next',
            prevEl: '.popup .prev',
        }
    });
     $('.popup .ctrl_wrap .stop').on('click', function(){
        // console.log('정지버튼을 눌렀어요!!!!!!!!')
        // stop 숨김 play 보임
        popup_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.popup .ctrl_wrap .play').show()
    })
    $('.popup .ctrl_wrap .play').on('click', function(){
        // console.log('재생버튼을 눌렀어요!!!!!!!!')
         popup_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.popup .ctrl_wrap .stop').show()
    })

/****************!!MD(md픽) swiper!!**************** */
   const md_swiper = new Swiper('.md .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            769: {    /* 640px 이상일때 적용 */
                slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 30,
            },
        },
        // centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        // loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        // pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
        //     el: '.pagination', /* 해당 요소의 class명 */
        //     clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        // }
    });

/******************!!time  swiper!!******************** */
    var time_swiper = new Swiper(".time .swiper", {
        
        slidesPerView: 1,
        spaceBetween: 16,
        grid: {
            rows: 1,
        },
        spaceBetween: 24,	
        breakpoints: {
             573: {    /* 769px 이상일때 적용 */
                slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
                grid: {
                    rows: 1,
                    fill: 'row',
                },
            },
            1134: {    /* 769px 이상일때 적용 */
                slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
                grid: {
                    rows: 1,
                    fill: 'row',
                },
            },
            1137: {    /* 769px 이상일때 적용 */
                slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
                grid: {
                    rows: 2,
                    fill: 'row',
                },
            },
        },
    })
 /******************!!best  swiper!!******************** */
      const best_swiper = new Swiper('.best .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            1025: {    /* 1025px 이상일때 적용 */
                slidesPerView: 5,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 20,
            },
        },
    });

/****************!!insta swiper!!************** */
    const insta_swiper = new Swiper('.insta .swiper', {
        loop: true,
        slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
        spaceBetween: 15,
        speed: 3000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            // pauseOnMouseEnter는 제거하거나 유지해도 되지만, 
            // 아래 커스텀 이벤트가 더 확실하게 즉시 멈춰줍니다.
        },
        freeMode: true,
        breakpoints: {
            769: {    /* 769px 이상일때 적용 */
                spaceBetween: 30,
            },
        },    
    });

    // 마우스를 올렸을 때 즉시 멈춤
    const swiperContainer = document.querySelector('.insta .swiper');

    swiperContainer.addEventListener('mouseenter', () => {
        insta_swiper.autoplay.stop(); // 자동 재생 정지
        // 현재 움직이고 있는 wrapper의 트랜지션을 제거하여 그 자리에 고정
        const wrapper = swiperContainer.querySelector('.swiper-wrapper');
        wrapper.style.transitionDuration = '0ms'; 
    });

    // 마우스가 나갔을 때 다시 재생
    swiperContainer.addEventListener('mouseleave', () => {
        insta_swiper.autoplay.start(); // 자동 재생 시작
});
/***************!!top button!!**************/
    $('.footer .top').on('click', function(){
        // console.log('클릭')
        $('html,body').animate({
            scrollTop: 0
        },500)
    })
})