import "../../MainFirst.css";
import React from "react";
import { Link } from "react-router-dom";
function SearchLbox() {
  return (
    <>
      <div className="searchLightbox">
        <div className="searchContain">
          <div className="searchDiv">
            <form>
              <input type={"search"} placeholder={"#태그, 회사, 포지션 검색"} />
            </form>

            <div className="searchBox">
              <div className="searchInfoDiv">
                <h4 className="searchInfoDivH">추천태그로 검색해보세요</h4>
                <a link="" className="searchInfoDivTag">
                  기업태그 홈 이동하기
                </a>
              </div>
              <ul className="searchHashTagList">
                <li>
                  <button className="hashTagBtn">#MacBook</button>
                </li>
                <li>
                  <button className="hashTagBtn">#연봉상위0.01%</button>
                </li>
                <li>
                  <button className="hashTagBtn">#연봉상위0.1%</button>
                </li>
                <li>
                  <button className="hashTagBtn">#연봉상위99%</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchLbox;