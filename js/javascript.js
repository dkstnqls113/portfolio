$(document).ready(function(){
const content = "안녕하세요! 안수빈의 포트폴리오입니다."
const text = document.querySelector(".text")
let index = 0;

function typing(){
text.textContent += content[index++]
if(index > content.length){
    text.textContent = ""
    index = 0;
}
}
setInterval(typing, 300);



$(window).resize(function(){
    let ht = $(window).height();
    $('section').height(ht)
    // 윈도우는 따옴표 넣지 말기
});



 // nav li를 클릭할 때 마다 scrollTop 의 위치를 바꾸어라
$(window).scroll(function(){
let sc = $(window).scrollTop()
// $('h1').text(sc)
let ht = $(window).height();

//     if(sc>=ht*0 && sc<ht*1){
//         $('nav li').removeClass('on')
//         $('nav li').eq(0).addClass('on')
//     }

//     if(sc>=ht*1 && sc<ht*2){
//         $('nav li').removeClass('on')
//         $('nav li').eq(1).addClass('on')
//     }

//     if(sc>=ht*2 && sc<ht*3){
//         $('nav li').removeClass('on')
//         $('nav li').eq(2).addClass('on')
//     }

//     if(sc>=ht*3 && sc<ht*4){
//         $('nav li').removeClass('on')
//         $('nav li').eq(3).addClass('on')
//     }
// 

// 반복문을 활용한 축약설정

for(var a=0; a<4; a++){
if(sc>=ht*a && sc<ht*a+1){
$('nav li').removeClass('on')
$('nav li').eq(a).addClass('on')
}
}
});



$('nav li').click(function(e){
    e.preventDefault()
    // a가 있을 때는 다써야함

    let i = $(this).index()
    console.log(i)
    let ht = $(window).height();
    

    $('html,body').stop().animate({scrollTop:ht*i},1400);
    $('nav li').removeClass('on')
    $(this).addClass('on')
    // 스크롤은 부드럽게 움직이게 하는 것은 animate밖에 없음
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
        $('html,body').stop().animate({scrollTop:next},1400, 'easeInQuart')
    }
})
// 절대값은 offset




//예제 윈도에서 마우스를 올렸을 때,  마우스 올림 글씨 출력 
// 윈도우에서 마우스를 내렸을 때, 마우스 내림 글씨 출력

// $(window).mousewheel(function(event,delta){
//     event.preventDefault()

//     // 마우스를 올렸을 때 
//     if(delta>0){
//         $('h1').text('마우스올림')
//     }

//     else if(delta<0){
//         $('h1').text('마우스내림')
//     }
// })
// 마우스 휠 js가 없으면 안됨 깃허브에 소스있음 델타가 0보다 클때
// 마우스를 올렸을 때 델타가 0보다 작을 때는 마우스를 내렸을 때

/* Modernizr custom build of 1.7: cssanimations | csstransforms | csstransforms3d | csstransitions | touch */
// window.Modernizr=function(a,b,c){function G(){}function F(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+p.join(c+" ")+c).split(" ");return!!E(d,b)}function E(a,b){for(var d in a)if(k[a[d]]!==c&&(!b||b(a[d],j)))return!0}function D(a,b){return(""+a).indexOf(b)!==-1}function C(a,b){return typeof a===b}function B(a,b){return A(o.join(a+";")+(b||""))}function A(a){k.cssText=a}var d="1.7",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l=b.createElement("input"),m=":)",n=Object.prototype.toString,o=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),p="Webkit Moz O ms Khtml".split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v,w=function(a){var c=b.createElement("style"),d=b.createElement("div"),e;c.textContent=a+"{#modernizr{height:3px}}",h.appendChild(c),d.id="modernizr",g.appendChild(d),e=d.offsetHeight===3,c.parentNode.removeChild(c),d.parentNode.removeChild(d);return!!e},x=function(){function d(d,e){e=e||b.createElement(a[d]||"div");var f=(d="on"+d)in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),y=({}).hasOwnProperty,z;C(y,c)||C(y.call,c)?z=function(a,b){return b in a&&C(a.constructor.prototype[b],c)}:z=function(a,b){return y.call(a,b)},r.touch=function(){return"ontouchstart"in a||w("@media ("+o.join("touch-enabled),(")+"modernizr)")},r.cssanimations=function(){return F("animationName")},r.csstransforms=function(){return!!E(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},r.csstransforms3d=function(){var a=!!E(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);a&&"webkitPerspective"in g.style&&(a=w("@media ("+o.join("transform-3d),(")+"modernizr)"));return a},r.csstransitions=function(){return F("transitionProperty")};for(var H in r)z(r,H)&&(v=H.toLowerCase(),e[v]=r[H](),u.push((e[v]?"":"no-")+v));e.input||G(),e.crosswindowmessaging=e.postmessage,e.historymanagement=e.history,e.addTest=function(a,b){a=a.toLowerCase();if(!e[a]){b=!!b(),g.className+=" "+(b?"":"no-")+a,e[a]=b;return e}},A(""),j=l=null,e._enableHTML5=f,e._version=d,g.className=g.className.replace(/\bno-js\b/,"")+" js "+u.join(" ");return e}(this,this.document)



setTimeout(function(){
    $('section:nth-child(3) .ne_sec').css({'opacity':'1'})
},3000)
<<<<<<< HEAD
setTimeout(function(){
    $('section:nth-child(3) .ne_box ul li').css({'opacity':'1'})
},3000)
=======
// setTimeout(function(){
//     $('section:nth-child(3) .ne_box ul li').css({'opacity':'1'})
// },3000)
>>>>>>> 8f9095e0643c977191c3dc9516f1cce5e0685b4c
// 이거 풀어
setTimeout(function(){
    $('section:nth-child(3) .wa').css({'opacity':'1'})
},3000)
<<<<<<< HEAD
setTimeout(function(){
    $('section:nth-child(3) .list ul li').css({'opacity':'1'})
},3000)
=======
// setTimeout(function(){
//     $('section:nth-child(3) .list ul li').css({'opacity':'1'})
// },3000)
>>>>>>> 8f9095e0643c977191c3dc9516f1cce5e0685b4c
// 이거 풀어


// list에 li를 클릭할때 addclass .li가 붙어라
$('.list ul li').click(function(){
    let l = $(this).index()
    $('.list ul li').removeClass('lh')
    $('.list ul li').eq(l).addClass('lh')
})

// list에 li를 클릭했을 때 ne_box ul li가 차례대로 나와라
<<<<<<< HEAD
$('.list ul li').eq(0).click(function(){
    $('.ne_box ul li').css({'opacity':'0'})
    $('.ne_box ul li').eq(0).css({'opacity':'1'})
})
$('.list ul li').eq(1).click(function(){
    $('.ne_box ul li').css({'opacity':'0'})
    $('.ne_box ul li').eq(1).css({'opacity':'1'})
})
$('.list ul li').eq(2).click(function(){
    $('.ne_box ul li').css({'opacity':'0'})
    $('.ne_box ul li').eq(2).css({'opacity':'1'})
})
$('.list ul li').eq(3).click(function(){
    $('.ne_box ul li').css({'opacity':'0'})
    $('.ne_box ul li').eq(3).css({'opacity':'1'})
})
$('.list ul li').eq(4).click(function(){
    $('.ne_box ul li').css({'opacity':'0'})
    $('.ne_box ul li').eq(4).css({'opacity':'1'})
})
=======
// $('.list ul li').eq(0).click(function(){
//     $('.ne_box ul li').css({'opacity':'0'})
//     $('.ne_box ul li').eq(0).css({'opacity':'1'})
// })
// $('.list ul li').eq(1).click(function(){
//     $('.ne_box ul li').css({'opacity':'0'})
//     $('.ne_box ul li').eq(1).css({'opacity':'1'})
// })
// $('.list ul li').eq(2).click(function(){
//     $('.ne_box ul li').css({'opacity':'0'})
//     $('.ne_box ul li').eq(2).css({'opacity':'1'})
// })
// $('.list ul li').eq(3).click(function(){
//     $('.ne_box ul li').css({'opacity':'0'})
//     $('.ne_box ul li').eq(3).css({'opacity':'1'})
// })
// $('.list ul li').eq(4).click(function(){
//     $('.ne_box ul li').css({'opacity':'0'})
//     $('.ne_box ul li').eq(4).css({'opacity':'1'})
// })
>>>>>>> 8f9095e0643c977191c3dc9516f1cce5e0685b4c

});//제이쿼리 끝