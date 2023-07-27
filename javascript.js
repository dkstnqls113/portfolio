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
setInterval(typing, 500)
})