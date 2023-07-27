$(document).ready(function(){
  // 일정시간이 지나면 동작이 이루어져라
  // setTimeout(function(){
  //   $('.header_1').addClass('on')
  // },1000);






      // 스크롤을 했을 때 이루어지는 이벤트들

    // 스크롤을 했을 때 box3과 브라우저와 맞닿았을 때
    // header_1이 나타나라

    $(window).scroll(function(){
      let sc = $(this).scrollTop();
      $('.nav li').eq(0).text(sc)


      // let mh = $('.box3').scrollTop();
      // $('.nav li').eq(0).text(mh)


      let hot = $('.box3').offset().top
      $('.nav li').eq(1).text(hot)


      if(sc>=hot){
        $('.header_1').addClass('on')
        $('.header_1').removeClass('hold')
      }
// 숫자가 중복되면 안됨
      if(sc<hot){
          $('.header_1').removeClass('on')
          $('.header_1').addClass('hold')
      }

      
  })





      // 스크롤을 했을 때 box3과 브라우저와 맞닿았을 때
    // nav_1이 사라져라

    $(window).scroll(function(){
      let sc = $(this).scrollTop();
      $('.nav li').eq(0).text(sc)


      // let mh = $('.box3').scrollTop();
      // $('.nav li').eq(0).text(mh)


      let hot = $('.box3').offset().top
      $('.nav li').eq(1).text(hot)


      if(sc>=hot){
        $('.nav_1').removeClass('on')
        $('.nav_1').addClass('hold')
      }
// 숫자가 중복되면 안됨
      if(sc<hot){
        $('.nav_1').addClass('on')
        $('.nav_1').removeClass('hold')
      }

      
  })




  $(window).mousemove(function(e){
    let x = e.pageX ,
    y = e.pageY;

    // $('div').children('p').eq(0).find('span').text(x)
    // $('div').children('p').eq(1).find('span').text(y)


    $('.em').css({'left':x , 'top':y})
})


})