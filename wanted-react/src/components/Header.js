import "./hunting_heading.css";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div class="header">
      <div id="header_wrap">
        <div class="navbar_logo">
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&amp;w=undefined&amp;q=75"
            alt="hamberger menu"
            id="menubar"
          ></img>
          <a href="">Wanted</a>
        </div>
        <ul class="navbar_menu">
          <li>
            <a href="./watned_hunting.html">채용</a>
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
          <ul class="navbar_link">
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
  );
};
export default Header;
