import { useState } from "react";
import { Link } from "react-router-dom";
import "../../huntingHeading.css";
import "../../MainFirst.css";

function MenuUL({ style }) {
  return (
    <>
      <ul id="menuHover">
        <li>직군 전체</li>
        <li>
          <Link to="/1">개발</Link>
        </li>
        <li>
          <Link to="/1">경영º비즈니스</Link>
        </li>
        <li>마케팅º광고</li>
        <li>디자인</li>
        <li>영업</li>
        <li>고객서비스</li>
        <li>게임제작</li>
        <li>HR</li>
        <li>미디어</li>
        <li>직군 전체</li>
        <li>개발</li>
        <li>경영º비즈니스</li>
        <li>마케팅º광고</li>
        <li>디자인</li>
        <li>영업</li>
        <li>고객서비스</li>
        <li>게임제작</li>
        <li>HR</li>
        <li>미디어</li>
        <li>직군 전체</li>
        <li>개발</li>
        <li>경영º비즈니스</li>
        <li>마케팅º광고</li>
        <li>디자인</li>
        <li>영업</li>
        <li>고객서비스</li>
        <li>게임제작</li>
        <li>HR</li>
        <li>미디어</li>
      </ul>
    </>
  );
}
export default MenuUL;
