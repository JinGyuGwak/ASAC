var a=document.getElementById("menuBar");
var menu_ul=document.getElementById("menuHover"); // me=ul임
var bodypage=document.getElementById("bodypage");
var set_btn=document.getElementById("btn_login");
a.addEventListener("mouseover",menuShow);
bodypage.addEventListener("mouseover",menudown);

var lightbox = document.getElementById("lightbox");  // 라이트 박스. querySelector("#lightbox")도 가능
var lightbox_info =document.getElementById("lightbox_info");


var exitBtn=document.getElementById("modalX");

var memberDaoTwo=document.getElementById("memberDaoTwo");
var backDao=document.getElementById("backDao");
var memberdaoForEmailValue=document.getElementById("memberdaoForEmailValue");

var email_text=document.getElementById("email_text");
var email_submit_btn=document.getElementById("email_submit_btn");

email_submit_btn.addEventListener("click",goInfo);
set_btn.addEventListener("click", showLightbox);

function showLightbox() {
	lightbox.style.display = "block";  // 라이트박스 이미지를 화면에 표시
}

function menudown(){
    //햄버거 메뉴에서 벗어나면서 menu_ul 이 아웃 될 경우 display none으로 하고 싶은데 
    //함수를 하나 더 만들어야 하나?
    menu_ul.style.display="none";

}

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


   

function showSignpage(){
    memberDaoTwo.style.display="block";
    lightbox.style.display = "none";
}

backDao.onclick=function(){
    memberDaoTwo.style.display="none";
    lightbox.style.display = "block";
}


function goInfo(){
    if(email_text.value.length==0){
        alert("이메일을 입력하세요");
    }
    else {
        memberdaoForEmailValue.value = email_text.value;
        showSignpage();
    }
}
