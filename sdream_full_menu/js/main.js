$(document).ready(function(){
    const visual_swiper = new Swiper('.visual  .swiper', { /* 팝업을 감싼는 요소의 class명 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },
        //effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });//visual_swiper

    /****************************************
    *pc 버전 메뉴
    *.header .gnb .gnb_wrap ul.depth1 > li 한테 마우스를 올리면 over 클래스 추가
    *-->마우스를 오버한 단 1개의 li에만 over 클래스가 추가됨
    *
    *.header에 menu_over가 추가... 메뉴에 마우스를 올
    ****************************************/
   let win_w //브라우저의 넓이
   let device_status //지금 pc인지 mobile 저장
   let mobile_size = 1024 //1024부터 모바일

    function device_chk(){
        win_w = $(window).width()
        //console.log(win_w)
        if(win_w > mobile_size){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        console.log(device_status)
    }
    device_chk() //문서가 로딩 되었을 때 단 1번 실행
    $(window).resize(function(){ //브라우저가 리사이즈 될때마다 1번씩 실행
        device_chk()
    })

    $('.header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter',function(){
        if(device_status == 'pc'){
            $(this).addClass('over')
            $('.header').addClass('menu_over')
        }
    })
    $('.header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
        if(device_status == 'pc'){
            $(this).removeClass('over')
        }
    })
    /* header 아래 검은 영역에 마우스 오버하면 메뉴 닫기 */
    $('.header .gnb_bg').on('mouseenter', function(){
        $('.header').removeClass('menu_over')
    })

    $('.header .gnb .gnb_wrap ul.depth1 > li').on('click', function(){
        if(device_status == 'mobile'){
            $('.header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
            $(this).addClass('open')
        }
    })
    $('.header .gnb .gnb_open').on('click', function(){
        if(device_status == 'mobile'){
            $('.header').removeClass('menu_open')
        }
    })

    /***********************************************************
     * 웹진 swiper
    **********************************/
    const webzine_swiper = new Swiper('.webzine .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            // 541: {    /* 768-540사이 */
            //     slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
            //     spaceBetween: 16,
            // },
            769: {    /* 768px 이상일때 적용 */
                slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: false,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {
            nextEl: '.webzine .ctrl_wrap .next',
            prevEl: '.webzine .ctrl_wrap .prev',
        },
    });

    /*******************************************
     * top버튼을 클릭하면 상단으로(맨위로) 스크롤 
    *****************************************/
    $('.footer .top').on('click', function(){
        console.log('클릭')
        //$(window).scrollTop(0)
        $('html,body').animate({
            scrollTop : 0
        }, 500)
    })

})//$(document).ready