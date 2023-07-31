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

});



