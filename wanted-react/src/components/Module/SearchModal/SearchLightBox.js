import "../../MainFirst.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import WantLists from "../../datajson/DevelopeData/WantList.json";

function SearchLbox({ bring }) {
  const backClick = () => {
    bring();
  };
  const [companySearch, setCompanySearch] = useState("");

  const onChange = (e) => {
    console.log(e);
    setCompanySearch(e.target.value);
    console.log(companySearch);
  };
  
  const navigate = useNavigate();
  const enterPress = (e) => {
    if ((e.key === "Enter") & (companySearch.length > 0)) {
      navigate("/3/" + companySearch);
    } else if ((e.key === "Enter") & (companySearch.length === 0)) {
      alert("키워드를 입력하세요");
    }
  };
  return (
    <>
      <div className="searchContain">
        <div className="searchDiv">
          <form>
            <input
              type={"search"}
              placeholder={"#태그, 회사, 포지션 검색"}
              value={companySearch}
              onChange={onChange}
              onKeyPress={enterPress}
            />
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
                <button className="hashTagBtn">#맥북</button>
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
      <div className="searchLightbox" onClick={backClick}></div>
    </>
  );
}
export default SearchLbox;
