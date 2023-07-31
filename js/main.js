$(function(){
    $('.btn_close').click(function(){
        $('.popup').slideUp();
    });
    
    $('.gnb').mouseenter(function(){
        $('.h_wrap').stop().animate({'height':371},300);
        $('.depth2').stop().show();
    })

    $('.h_wrap').mouseleave(function(){
        $('.h_wrap').stop().animate({'height':103},300)
        $('.depth2').stop().hide();
    })

    $('.tab li').click(function(){
        let num = $(this).index()

        $('.tab li').removeClass('on')
        $(this).addClass('on')

        $('.list').hide();
        $('.list').eq(num).show();
        
    })
    // 스크롤바를 아래로 내리면 top버튼 서서히 나타남
    // 스크롤바를 아래로 내리는 이벤트 발생
    $(window).scroll(function(){
        //스크롤바 위치 알려주는 함수 scrollTop()
        let num = $(this).scrollTop()
        console.log(num)

        if(num >= 800){
            $('.btn_top').fadeIn()
        }else{
            $('.btn_top').fadeOut()
        }
    })

    // top 버튼 클릭시 스크롤바 위치 0으로 이동
    $('.btn_top').click(function(){
        $('body,html').animate({scrollTop:0})
    })
    

});



