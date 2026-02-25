$(document).ready(function(){
    let visual_bar_w
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

            autoplay: {  /* 팝업 자동 실행 */
                delay: 5000,
                disableOnInteraction: false,
            },

            effect: "fade", /* fade 효과 */

            loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
            pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
                el: '.swiper-pagination', /* 해당 요소의 class명 */
                clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
                type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
                renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                    return '<span class="' + className + '">' + (index + 1) + "</span>";
                },
            },
            

            navigation: {  /* 이전, 다음 버튼 */
                nextEl: '.visual .ctrl_right .next',  /* 다음 버튼의 클래스명 */
                prevEl: '.visual .ctrl_right .prev',  
            },
            on: {
                autoplayTimeLeft(s, time, progress) {
                   /* 1 -> 0 
                     0% ~ 100% */
                    visual_bar_w = 100 - (100 * progress)
                    $('.visual .ctrl_left .bar span').width(visual_bar_w + '%')
                }
            }

        });
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        visual_swiper.autoplay.start();  /* 재생 기능 */
        
        $('.visual .ctrl_left .stop').on('click', function(){
            // console.log('정지!!!!')
            visual_swiper.autoplay.stop();  /* 일시정지 기능 */
            $(this).hide()
            $('.visual .ctrl_left .play').show()
        })
         $('.visual .ctrl_left .play').on('click', function(){
            // console.log('재생!!')
            visual_swiper.autoplay.start();  /* 재생 기능 */
            $(this).hide()
            $('.visual .ctrl_left .stop').show()
        })

        /******************************************************************** 
         * 1차 지금 현재 넓이가 pc버전인지 mobile 버전인지 구분 (메뉴만 1025px이상은 pc 1024px 이하는 mobile)
         *  ==> 브라우저의 넓이값을 구해서 1024보다 큰지 작은지 구분
         *  ==> 첫번째 로딩됐을때 계산, 그리고 브라우저가 리사이즈 될때마다 브라우저 넓이 체크
         *      동일한 계산을 두번해야하는 경우는 함수로 정의한 다음에 호출해서 사용하는 방식을 씀
        *********************************************************************/
        let win_w //브라우저 넓이
        let mobile_size  = 1024 //모바일 사이즈 시작(경계)
        let device_status //pc, mobile 두개의 값 저장

        function device_chk(){ //함수의 정의
            win_w = $(window).width()
            if(win_w > mobile_size){
                device_status = 'pc'
            }else{
                device_status = 'mo'
            }
            console.log(device_status)
        }
        device_chk()//함수실행 -- 문서가 로딩되고 1번만
        $(window).resize(function(){
            device_chk()//함수실행 -- 브라우저가 리사이즈 될때마다 1번씩
        })

        $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
            if(device_status == 'pc'){
                console.log('오버했다아아아!')
            }
        })

})//document).ready