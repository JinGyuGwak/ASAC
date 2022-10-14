var a=document.getElementById("menuBar");
var menu_ul=document.getElementById("menuHover"); // me=ul임
a.addEventListener("mouseover",menuShow);

function menuShow(){   

    if(menu_ul.style.display =="none"){
        menu_ul.style.display="block";
    }
    else{
        menu_ul.style.display="none";
    }
}

var lightbox = document.getElementById("lightbox");  // 라이트 박스. querySelector("#lightbox")도 가능
var set_btn=document.getElementById("btn_login");
var exitBtn=document.getElementById("modalX");
set_btn.addEventListener("click", showLightbox);

function showLightbox() {
	lightbox.style.display = "block";  // 라이트박스 이미지를 화면에 표시
}

    modalX.onclick = function() {  //click 이벤트가 발생했을 때 실행할 함수 선언
	lightbox.style.display = "none";  // lightbox 요소를 화면에서 감춤
}