$(document).ready(function(){
    // nav li를 클릭했을 때,scroll의 위치가 바뀐다.
    // nav li를 클릭했을 때, 각 li의 순번을 찾고 그 순번에 맞게
    // scroll의 위치를 매번 바뀌게 해라
    $('nav li').click(function(){
        let i = $(this).index();
        let sht = $('section').height();
        // 조건문이 필요없겠다 생각하기
        // $(window).scrollTop
        $('html, body').stop().animate({'scrollTop':(i+1)*sht},1200)
        $('nav li').removeClass('on')
        $(this).addClass('on')
    });


    $('h1').click(function(){
        // logo를 클릭했을 때 scroll의 위치를 0으로 이동해라

        $('html, body').stop().animate({'scrollTop':0},1200);
        $('nav').fadeOut()
        $('nav li').removeClass('on')
        // fadeOut은 display none이나 opacity로만 움직임
    });


    $('.wel').click(function(){
        let sht = $('section').height();
        $('html, body').stop().animate({'scrollTop':sht},1200);
        $('nav').fadeIn(1800);

        $('nav li').removeClass('on')
        $('nav li').eq(0).addClass('on')
    });



    $(window).scroll(function(){
        // 스크롤의 위치값을 확인하고 스크롤의 값이 section 높이만큼 내려왔을 떄부터
        // nav가 보여라
        let sc = $(this).scrollTop()
        let sht = $('section').height();
        // if(sc>=sht){
        //     $('nav').fadeIn(600)
        // }
        // else{
        //     $('nav').fadeOut(600)
        // }


        if(sc>=sht*0 && sc<sht*1){
            // $('nav').fadeOut(600)
            // $('nav li').removeClass('on')
            // 만약에 처음에도 나오게 하고 싶으면 이거 없애라~~
        }


        // if(sc>=sht*1 && sc<sht*2){
        //     $('nav').fadeIn(600)
        //     $('nav li').removeClass('on')
        //     $('nav li').eq(0).addClass('on')

        // }

        // if(sc>=sht*2 && sc<sht*3){
        //     $('nav').fadeIn(600)            
        //     $('nav li').removeClass('on')
        //     $('nav li').eq(1).addClass('on')
        // }

        
        // if(sc>=sht*3 && sc<sht*4){
        //     $('nav').fadeIn(600)
        //     $('nav li').removeClass('on')
        //     $('nav li').eq(2).addClass('on')
        // }

        // if(sc>=sht*4 && sc<sht*5){
        //     $('nav').fadeIn(600)
        //     $('nav li').removeClass('on')
        //     $('nav li').eq(3).addClass('on')
        // }

        // 위의 사항을 for문으로 만들기
        for(var a = 0; a<5; a++)
        if(sc>=sht*(a+1) && sc<sht*(a+2)){
                $('nav').fadeIn(600)
                $('nav li').removeClass('on')
                $('nav li').eq(a).addClass('on')
            }
    });


    // 처음페이지에서는 홈버튼이 안보이고 두번째페이지에서는 홈버튼이 보여라
    $(window).scroll(function(){
        let sc = $(this).scrollTop()
        let sht = $('section').height();
        if(sc>=sht*0 && sc<sht*1){
            $('h1').fadeOut(600)
            $('h1').removeClass('ryu')
        }

        for(var b = 0; b<7; b++)
        if(sc>=sht*(b+1) && sc<sht*(b+2)){
                $('h1').fadeIn(600)
                $('h1').removeClass('ryu')
                $('h1').addClass('ryu')
            }
    });


// 처음페이지에서는 어바웃에 span이 안보이고 두번째페이지에서는 어바웃에 span이 보여란
$(window).scroll(function(){
    let sc = $(this).scrollTop()
    let sht = $('section').height();
    if(sc>=sht*0 && sc<sht*1){
        $('nav ul li span').fadeOut(600)
        $('nav ul li span').removeClass('for')
    }

    for(var c = 0; c<7; c++)
    if(sc>=sht*(c+1) && sc<sht*(c+2)){
            $('nav ul li span').fadeIn(600)
            $('nav ul li span').removeClass('for')
            $('nav ul li span').eq(c).addClass('for')
        }
});


// 메인화면 달이랑 행성 움직이는 것
    $('.effect').mousemove(function(e){
            let x = e.pageX;
            let y = e.pageY;
        
            console.log(x,y)
            $(this).find('.p11').css({'top': 30-(y/10),'left':5-(x/10)})
            $(this).find('.p12').css({'top': 30-(y/10),'right':25-(x/10)})
        });

// 메인화면 류준열 움직이는 것
        $('section').eq(0).mousemove(function(e){
            let x = e.pageX;
            let y = e.pageY;
        
            console.log(x,y)
            $(this).find('.main_img').css({'left':50-(x/80)})
        });




// section 위에서 마우스를 올릴 때 내릴 때 이벤트가 발생한다.
    $('section').mousewheel(function(event,delta){
        if(delta>0){
            let prev = $(this).prev().offset().top
            $('html,body').stop().animate({scrollTop:prev},1400,'easeInQuart')
        }
// 떨어지는 모양 구글클래스 룸에 있음
// easeInQuart easeOutBounce


        else if(delta<0){
            let next = $(this).next().offset().top
            $('html,body').stop().animate({scrollTop:next},1400,'easeInQuart')
        }
    });
// // 절대값은 offset

// 어바웃 설정

	// 마우스 오버시
	$(".contents article").on("mouseover",function(){		
	
		// 변수 vid에 video파일 참조
		var vid = $(this).find("img").get(0);
		// 동영상의 재생위치를 처음(0)으로 설정
		// vid.currentTime=0;
		// 동영상을 재생
		// vid.play();	
		
		$(this).stop().animate({"width":"35%"},1000,function(){
			//article이 넓어진 바로 후에 아래 구문이 실행됩니다.
			$(this).find("h3").stop().animate({"right":"10px"},400);
			$(this).find("p").stop().animate({"right":"10px"},800);	
		});
		$(this).find("img").stop().animate({"opacity":"0.9"},1200);		
	});
	
	// 마우스 아웃시
	$(".two_about article").on("mouseout",function(){		
		
		// 변수 vid에 video파일 참조
		var vid = $(this).find("img").get(0);
		// 동영상을 정지
		// vid.pause();
			
		$(this).stop().animate({"width":"12%"},700);
		$(this).find("img").stop().animate({"opacity":"0"},2000);	
		$(this).find("h3").stop().animate({"right":"-480px"},200);
		$(this).find("p").stop().animate({"right":"-450px"},500);	
	});

// 필모그래피 설정
// 메뉴 설정
$('.fillmography .menu ul li').eq(0).click(function(){
    $('.fillmography .menu ul li span').removeClass('fm')
    $('.fillmography .menu ul .m_1 span').addClass('fm')

})
$('.fillmography .menu ul li').eq(1).click(function(){
    $('.fillmography .menu ul li span').removeClass('fm')
    $('.fillmography .menu ul .m_2 span').addClass('fm')

})
$('.fillmography .menu ul li').eq(2).click(function(){
    $('.fillmography .menu ul li span').removeClass('fm')
    $('.fillmography .menu ul .m_3 span').addClass('fm')

})
// 필모그래피에 메뉴를 차례대로 눌렀을 때 무비 드라마 cf가 차례대로 나와라
$('.fillmography .menu ul li').eq(0).click(function(){
    // var fm = $(this).index()
    // console.log(fm)
    $('.fillmography .movie').css({'opacity':'1'})
    $('.fillmography .cf').css({'opacity':'0'})
    $('.fillmography .drama').css({'opacity':'0'})
})
$('.fillmography .menu ul li').eq(1).click(function(){
    // var fm = $(this).index()
    // console.log(fm)
    $('.fillmography .movie').css({'opacity':'0'})
    $('.fillmography .cf').css({'opacity':'0'})
    $('.fillmography .drama').css({'opacity':'1'})
})
$('.fillmography .menu ul li').eq(2).click(function(){
    // var fm = $(this).index()
    // console.log(fm)
    $('.fillmography .movie').css({'opacity':'0'})
    $('.fillmography .drama').css({'opacity':'0'})
    $('.fillmography .cf').css({'opacity':'1'})
})

// 마스터워크 메뉴 순서를 눌렀을 때 마스터 워크 Bbox가 순서에 맞게 나와라
    $('.masterwork_big ul li').eq(0).click(function(){
        $('.masterwork_Bbox ul li').fadeOut(600)
        $('.masterwork_Bbox ul li').eq(0).fadeIn(600)
    })

    $('.masterwork_big ul li').eq(1).click(function(){
        $('.masterwork_Bbox ul li').fadeOut(600)
        $('.masterwork_Bbox ul li').eq(1).fadeIn(600)
    })

    $('.masterwork_big ul li').eq(2).click(function(){
        $('.masterwork_Bbox ul li').fadeOut(600)
        $('.masterwork_Bbox ul li').eq(2).fadeIn(600)
    })

    $('.masterwork_big ul li').eq(3).click(function(){
        $('.masterwork_Bbox ul li').fadeOut(600)
        $('.masterwork_Bbox ul li').eq(3).fadeIn(600)
    })


    $('.masterwork_big ul li').eq(4).click(function(){
        $('.masterwork_Bbox ul li').fadeOut(600)
        $('.masterwork_Bbox ul li').eq(4).fadeIn(600)
    })




// 릴레이션십 설정 
// 메뉴를 눌렀을 때 류준열이 아래로 사라져라 그리고 동그라미가 나와라
$('.relationship_big ul li').eq(0).click(function(){
    $('.relationship_img').animate({"height":"-800px"},600);
    $('.re_hide ul').fadeOut()
    $('.re_hide ul').eq(0).fadeIn(600)
    $('.re_b').fadeOut(600)
    $('.re_b').fadeIn(600)
    $('.delete').css({'opacity':'1'})
    $('.re_hide').css({'opacity':'1'})
    // 어떤 버튼을 누르면 다시 처음으로 돌아가라
})
$('.relationship_big ul li').eq(1).click(function(){
    $('.relationship_img').animate({"height":"-800px"},600);
    $('.re_hide ul').fadeOut()
    $('.re_hide ul').eq(1).fadeIn(600)
    $('.re_b').fadeOut(600)
    $('.re_b').fadeIn(600)
    $('.delete').css({'opacity':'1'})
    $('.re_hide').css({'opacity':'1'})
})
$('.relationship_big ul li').eq(2).click(function(){
    $('.relationship_img').animate({"height":"-800px"},600);
    $('.re_hide ul').fadeOut()
    $('.re_hide ul').eq(2).fadeIn(600)
    $('.re_b').fadeOut(600)
    $('.re_b').fadeIn(600)
    $('.delete').css({'opacity':'1'})
    $('.re_hide').css({'opacity':'1'})
})
$('.relationship_big ul li').eq(3).click(function(){
    $('.relationship_img').animate({"height":"-800px"},600);
    $('.re_hide ul').fadeOut()
    $('.re_hide ul').eq(3).fadeIn(600)
    $('.re_b').fadeOut(600)
    $('.re_b').fadeIn(600)
    $('.delete').css({'opacity':'1'})
    $('.re_hide').css({'opacity':'1'})
})


// 화살표 버튼을 누르면 re_hide ul li들이 90도씩 돌아가라
i=0;
$('section:nth-child(5) .re_b ul li:nth-child(1)').click(function(){

    if(i<4)i++;
    $('.re_hide ul').css({'transform':'rotate('+ (0-(90*-i)) +'deg)'})
})

$('section:nth-child(5) .re_b ul li:nth-child(2)').click(function(){

    if(i>-4)i--;
    $('.re_hide ul').css({'transform':'rotate('+ (0-(-90*i)) +'deg)'})
});

// delete 버튼을 누르면 처음 화면으로 돌아가라
$('.delete').click(function(){
    $('.re_b').fadeOut()
    $('.re_hide').css({'opacity':'0'})
    $('.relationship_img').animate({'height':'800px'},800)
})



// 갤러리 설정
$(window).scroll(function(){

    let sc = $(this).scrollTop();
    let sNum = Math.floor(sc)
    // 소수점 없애고 자연수로 만듬


    let bht = $('section').height()

let lsc = (sNum-bht*5);
// 0으로 만들기 위해서
let pwd =$('.box2 .scroll-animation-example .scrollsection').width()
let psc =pwd/2
    // $('h1').text(lsc);

if(lsc>=0 && lsc<psc){

$('section:nth-child(6)').addClass('fix');
$('.box2 .scrollsection').css({'left':200-lsc})

}
else{
$('section:nth-child(6)').removeClass('fix');
}
});

// animate부드럽게 넘어가시요
// 처음 버튼을 눌렀을 때 scrollTop값이 0이 되어라
$('.container').click(function(){
    let bht = $('section').height()
    $(window).scrollTop(bht*5)
})

});//제이쿼리 끝