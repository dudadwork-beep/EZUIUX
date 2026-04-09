$(document).ready(function(){
    console.log('look')
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
            769: {    /* 640px 이상일때 적용 */
                slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 100,
            },
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
            1100: {    /* 769px 이상일때 적용 */
                slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
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
    
})