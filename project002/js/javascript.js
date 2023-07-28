$(document).ready(function(){
        // 실행문


        let ti =0;

        $('.slider button').click(function(){

            ti++;
            console.log(ti)
            $('.slider li').eq(ti-1).clone().appendTo('.slider ul');
            $('.slider ul').css({'left':-400*ti})
            // li값 넣기 left 옆에
            $('.slider li').removeClass('on')
            $('.slider li').eq(ti+1).addClass('on')

        })


/*
문서객체생성추가 위치 설정

앞부분 -  자손자를 만들어냄 
$(대상).prependTo(위치)
        뒷부분 -  자손자를 만들어냄 
$(대상).appendTo(위치)

앞쪽 - 형제자생성
$(대상).beforeTo(위치)
뒤쪽 - 형제자생성
$(대상).afterTo(위치)

*/ 



    //    자동으로 버튼을 클릭한 효과를 내라. 

    let slide =setInterval(function(){
        $('.slider button').trigger('click')

    },2000)



    // 마우스가 올라가면 멈추고 마우스가 떠나면 움직여라. 

    $('.slider').mouseenter(function(){

        clearInterval(slide)
    })

    $('.slider').mouseleave(function(){
        slide =setInterval(function(){
        $('.slider button').trigger('click')

    },2000)

})



// 일정시간이 지나면 동작이 이루어져라
// setTimeout(function(){
//     $('.mainImg').addClass('on')
// },1000)


// 스크롤을 했을 때 이루어지는 이벤트들

// 스크롤을 했을 때 boxG가 브라우저와 맞닿았을 때
// mainImg가 나타나라
// $(window).scroll(function(){
//     let sc = $(this).scrollTop();
//     let hot = $('.boxG').offset().top

//     $('.nav li').eq(0).text(sc)


//     $('.nav li').eq(1).text(hot)

//     if(sc<hot){
//         $('.mainImg').removeClass('on')
//         // $('.mainImg').removeClass('hold')
//     }

//         if(sc>=hot){
//         $('.mainImg').addClass('on')
//         // $('.mainImg').addClass('hold')
//     }


//     if(sc>=hot+500){
//         $('.mainImg').removeClass('on')
//         // $('.mainImg').removeClass('hold')
//     }

// })





// $('div').mousewheel(function(event,delta){
//     if(delta>0){
//         let prev = $(this).prev().offset().top
//         $('html,body').stop().animate({scrollTop:prev},1400,'easeInQuart')
//     }
//     // 떨어지는 모양 구글클래스 룸에 있음
//     // easeInQuart easeOutBounce


//     else if(delta<0){
//         let next = $(this).next().offset().top
//         $('html,body').stop().animate({scrollTop:next},1400, 'easeInQuart')
//     }
// })






// $('div').mousemove(function(e){
//     let x = e.pageX;
//     let y = e.pageY;

//     console.log(x,y)
//     $(this).find('.p11').css({'bottom': 20-(y/10),'right':20-(x/10)})
//     $(this).find('.p12').css({'bottom': 20+(y/10),'right':20+(x/10)})
//     // px값은 생략가능 수치를 올리면 많이 움직여지지 않음

//     $(this).find('.p21').css({'bottom': 20-(y/10),'right':20-(x/10)})
//     $(this).find('.p22').css({'bottom': 20+(y/10),'right':20+(x/10)})

//     $(this).find('.p32').css({'bottom': 20+(y/10),'right':20+(x/10)})
//     $(this).find('.p33').css({'bottom': 20-(y/10),'right':20-(x/10)})
//     $(this).find('.p31').css({'bottom': 20-(y/10),'right':20-(x/10)})

//     $(this).find('.p41').css({'bottom': 20-(y/10),'right':20-(x/10)})
//     $(this).find('.p42').css({'bottom': 20+(y/10),'right':20+(x/10)})
// })







})

