var a=document.getElementById("menuBar");
var menu_ul=document.getElementById("menuHover"); // me=ul임
a.addEventListener("mouseover",menuShow);

var lightbox = document.getElementById("lightbox");  // 라이트 박스. querySelector("#lightbox")도 가능
var lightbox_info =document.getElementById("lightbox_info");

var set_btn=document.getElementById("btn_login");
var exitBtn=document.getElementById("modalX");


var email_text=document.getElementById("email_text");
var email_submit_btn=document.getElementById("email_submit_btn");

email_submit_btn.addEventListener("click",goInfo);
set_btn.addEventListener("click", showLightbox);

function menuShow(){   

    if(menu_ul.style.display =="none"){
        menu_ul.style.display="block";
    }
    else{
        menu_ul.style.display="none";
    }
}



modalX.onclick = function() {  //click 이벤트가 발생했을 때 실행할 함수 선언
    email_text.value="";
	lightbox.style.display = "none";  // lightbox 요소를 화면에서 감춤
}


function showLightbox() {
	lightbox.style.display = "block";  // 라이트박스 이미지를 화면에 표시
}

   

function showSignpage(){
    alert("이제 회원가입 창 만들어라");
}

function goInfo(){
    if(email_text.value.length==0){
        alert("이메일을 입력하세요");
    }
    else {showSignpage();}
}
