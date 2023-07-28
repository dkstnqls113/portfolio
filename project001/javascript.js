        $(document).ready(function(){
    
            // 실행문
    
    
            let ti =0;
    
            $('.wrap03 button').click(function(){
    
                ti++;
                // console.log(ti)
                $('.wrap03 li').eq(ti-1).clone().appendTo('.wrap03 ul');
                $('.wrap03 ul').css({'left':-250*ti})
                $('.wrap03 li').removeClass('on_1')
                $('.wrap03 li').eq(ti+2).addClass('on_1')
    



                $('.wrap04 li').eq(ti-1).clone().appendTo('.wrap04 ul');
                $('.wrap04 ul').css({'left':-250*ti})
                $('.wrap04 li').removeClass('on_1')
                $('.wrap04 li').eq(ti+2).addClass('on_1')

                $('.wrap05 li').eq(ti-1).clone().appendTo('.wrap05 ul');
                $('.wrap05 ul').css({'left':-250*ti})
                $('.wrap05 li').removeClass('on_1')
                $('.wrap05 li').eq(ti+2).addClass('on_1')
            })
    
            let slide =setInterval(function(){
        $('.wrap03 button').trigger('click')
        $('.wrap04 button').trigger('click')
        $('.wrap05 button').trigger('click')
    },2000)



    
    // 마우스가 올라가면 멈추고 마우스가 떠나면 움직여라. 

    $('.wrap03').mouseenter(function(){

        clearInterval(slide)
    })

    $('.wrap03').mouseleave(function(){
        slide =setInterval(function(){
        $('.wrap03 button').trigger('click')

    },2000)

})


// $('.circle_box ul li').click(function(){

//     let ic = $(this).index()
//     console.log(ic) 


//     $('.txt_hi ul li').eq(ic).css({'opacity':1})
//     $('.circle_box ul li').eq(ic).css({'opacity':0})
// })


// .circle_box ul li 첫번째를 눌렀을 때 .txt_hi ul li 첫번째가 오퍼시티가 1이 되어라
$('.circle_box ul li').eq(0).click(function(){
    $('.circle_box ul li').eq(0).css({'opacity':0})
    $('.circle_box ul li').eq(1).css({'opacity':1})
    $('.circle_box ul li').eq(2).css({'opacity':1})
    $('.txt_hi ul li').eq(0).css({'opacity':1})
    $('.txt_hi ul li').eq(1).css({'opacity':0})
    $('.txt_hi ul li').eq(2).css({'opacity':0})    
    $('.wrap03').css({'display':'block'})
    $('.wrap04').css({'display':'none'})
    $('.wrap05').css({'display':'none'})
})

// .circle_box ul li 두번째를 눌렀을 때 .circle_box ul li 두번째만 사라지고 .txt_hi ul li 두번째만 나타나라
$('.circle_box ul li').eq(1).click(function(){
    $('.circle_box ul li').eq(1).css({'opacity':0})
    $('.circle_box ul li').eq(0).css({'opacity':1})
    $('.circle_box ul li').eq(2).css({'opacity':1})
    $('.txt_hi ul li').eq(1).css({'opacity':1})
    $('.txt_hi ul li').eq(0).css({'opacity':0})
    $('.txt_hi ul li').eq(2).css({'opacity':0})
    $('.wrap03').css({'display':'none'})
    $('.wrap04').css({'display':'block'})
    $('.wrap05').css({'display':'none'})
})



// .circle_box ul li 세번째를 눌렀을 때 .circle_box ul li 세번째만 사라지고 .txt_hi ul li 세번째만 나타나라
$('.circle_box ul li').eq(2).click(function(){
    $('.circle_box ul li').eq(0).css({'opacity':1})
    $('.circle_box ul li').eq(1).css({'opacity':1})
    $('.circle_box ul li').eq(2).css({'opacity':0})
    $('.txt_hi ul li').eq(2).css({'opacity':1})
    $('.txt_hi ul li').eq(0).css({'opacity':0})
    $('.txt_hi ul li').eq(1).css({'opacity':0})
    $('.wrap03').css({'display':'none'})
    $('.wrap05').css({'display':'block'})
    $('.wrap04').css({'display':'none'})
})

// 배너 슬라이드 설정
            // btn을 클릭했을때 slide li 가 이동해라.

            $('.btn_3 li').click(function(){

                let i = $(this).index();
                $('.slide_box li').css({'opacity':1}).stop().animate({'opacity':'0'})
                $('.slide_box li').eq(i).css({'opacity':'0'}).stop().animate({'opacity':'1'})
                
                $('.btn_3 li').removeClass('on')
                $(this).addClass('on')
            });



        // 일정시간간격으로 버튼을 순차적으로 자동으로 클릭해라.
        let a= 0
    

        let slide_box = setInterval(timer,3000);


        $('.wrap06').mouseenter(function(){

            clearInterval(slide_box)
        })
        $('.wrap06').mouseleave(function(){

        slide_box = setInterval(timer,3000);
        })


    
        function timer(){
            a++;
            if(a==3)a=0;

            $('.btn_3 li').eq(a).trigger('click')
}

// 프로그램 교사소개
$('.carousel[data-type="multi"] .item').each(function() {
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));

	for (var i = 0; i < 2; i++) {
		next = next.next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}

		next.children(':first-child').clone().appendTo($(this));
	}
});


});