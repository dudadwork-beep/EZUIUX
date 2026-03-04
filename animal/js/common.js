/**************
 * header와 footer 공통 사항에 들어가는 스크립트
 * ************ */
$(document).ready(function(){
    let device_status //mo: 모바일 , pc : pc 버전
    let mobile_size = 1024
    let window_w //브라우저 넓이

    function devive_chk(){ //함수의 정의
        window_w = $(window).width()
        if(window_w > mobile_size){
            device_status = 'pc'
        }else{
            device_status = 'mo'
        }
        console.log(device_status)
    }

    devive_chk() //문서가 로딩되었을때 단 한번
    $(window).resize(function(){
        devive_chk() //브라우저가 리사이즈 될때마다 1번 실행
    })

    $('.header .gnb ul.depth1 > li:has(ul.depth2)').on('mouseenter',function(){
        if(device_status == 'pc'){
            $(this).addClass('over')
            $(this).find('ul.depth2').slideDown()
        }
    })
     $('.header .gnb ul.depth1 > li').on('mouseleave',function(){
        if(device_status == 'pc'){
            $(this).removeClass('over')
            $(this).find('ul.depth2').slideUp()
        }
    })
})