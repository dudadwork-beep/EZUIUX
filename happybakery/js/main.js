$(document).ready(function(){
    const visualt_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 2500,
        //     disableOnInteraction: true,
        // },
        // effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .swiper-pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },
    });
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
    $('.header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        $('.header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
        $(this).addClass('over')
        $('.header').addClass('menu_over')
    })
     $('.header').on('mouseleave', function(){
        $('.header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
        $('.header').removeClass('menu_over')
    })

    let scrolling
    function scroll_chk(){
        scrolling = $(window).scrollTop()
        // console.log(scrolling)
        if(scrolling > 0){
            $('.header').addClass('fixed')
        }else{
            $('.header').removeClass('fixed')
        }
    }
    scroll_chk()
    $(window).scroll(function(){
        scroll_chk()
    })

    /****************!!signature swiper!!**************** */
    const signature_swiper = new Swiper('.signature .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		769: {    /* 640px 이상일때 적용 */
			slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 20,
		},
		1370: {    /* 640px 이상일때 적용 */
                slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
		},
		1381: {    /* 640px 이상일때 적용 */
                slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
		},
	},
	//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

	navigation: {
		nextEl: '.signature .next',
		prevEl: '.signature .prev',
	}
    });
})
