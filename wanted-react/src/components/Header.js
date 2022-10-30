import "./hunting_heading.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import MenuUL from "./Module/MainFirst/MenuUl";

function Header() {
  const [display, setDisplay] = useState("block");

  const sh = () => {
    setDisplay("none");
  };

  return (
    <>
      <div className="header">
        <div id="header_wrap">
          <div className="navbar_logo">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&amp;w=undefined&amp;q=75"
              alt="hamberger menu"
              id="menubar"
              onClick={sh}
            ></img>

            <MenuUL display={display}></MenuUL>
            <Link to="/">Wanted</Link>
          </div>

          <ul className="navbar_menu">
            <li>
              <Link to="/1">채용</Link>
            </li>
            <li>
              <a href="">이벤트</a>
            </li>
            <li>
              <a href="">직군별 연봉</a>
            </li>
            <li>
              <a href="">이력서</a>
            </li>
            <li>
              <a href="">커뮤니티</a>
            </li>
            <li>
              <a href="">프리랜서</a>
            </li>
            <li>
              <a href="">AI 합격예측</a>
            </li>
          </ul>
          <div>
            <ul className="navbar_link">
              <li id="ss1">
                <FaSearch id="ss" />
              </li>
              <li>
                <button id="btn_login">회원가입/로그인</button>
              </li>
              <li>
                <span id="|">|</span>
              </li>
              <li id="btnser">
                <button id="btn_company_service">기업 서비스</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;

// var bodypage = document.getElementById("bodypage");

// bodypage.addEventListener("mouseOver", menudown);
// var menuUl = document.getElementById("menuHover"); // me=ul임
// function menudown() {
//   //햄버거 메뉴에서 벗어나면서 menu_ul 이 아웃 될 경우 display none으로 하고 싶은데
//   //함수를 하나 더 만들어야 하나?
//   menuUl.style.display = "none";
// }
