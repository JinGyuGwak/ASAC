import React, { useState } from "react";
import "../MainFirst.css";
import "../Hunting_detail.css";
import "../SearchPage.css";
import "../Wanted_develop.css";
import SearchResultImg from "../Module/SearchModal/SearchResultImg";

import Header from "../Header";
function DevelopeSearch() {
  const [positionNumber, setPositionNumber] = useState(0);
  const [companyNumber, setCompanyNumber] = useState(0);
  const bringCompanyNumber = (a) => {
    setCompanyNumber(a);
  };
  const bringNumber = (number) => {
    setPositionNumber(number);
  };
  return (
    <>
      <Header />
      <div className="SearchPage">
        <div className="SearchValue">
          <button className="SearchValueBtn">
            <h1>Google</h1>
          </button>
        </div>
        <div className="SearchResult">
          <h2 className="SearchResultTag">
            회사 <span>{companyNumber}</span>
          </h2>
          <div className="SearchResultInfo">
            <a href="">
              <div className="SearchResultCompany">
                <img
                  src="https://static.wanted.co.kr/images/wdes/0_5_61698d3c-a685-40b7-826e-522c4b1aaec2.jpg"
                  alt="mdu"
                />
                <div className="SearchResultCompanyHTag">
                  <h5>모두싸인</h5>
                  <br />
                  <h6>IT, 컨텐츠</h6>
                </div>
                <button className="SearchResultCompanyBtn">팔로우</button>
              </div>
            </a>
            <div className="SearchResultPosi">
              <h2 className="SearchResultPosiHtag">
                포지션 <span>{positionNumber}</span>
              </h2>
              <div className="SearchResultCategoryBox">
                <div className="SearchResultCategory">
                  <div>
                    <button>지역 | 한국</button>
                  </div>
                  <div>
                    <button>경력 | 전체</button>
                  </div>
                  <div>
                    <button>기술스택</button>
                  </div>
                </div>
                <div>
                  <button id="aa">응답률순</button>
                </div>
              </div>
              <hr className="SolidLine" />
              <div className="SearchCategoryBtn">
                <button>연봉이 최고의 복지</button>
                <button>재택근무</button>
                <button>퇴사율 10% 이하</button>
                <button>급성장 중</button>
                <button>병역특례</button>
                <button>50인 이하</button>
                <button>50인 이상</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ul className="inImg">
            <SearchResultImg
              bringNumber={bringNumber}
              bringCompanyNumber={bringCompanyNumber}
            />
          </ul>
        </div>
      </div>
    </>
  );
}
export default DevelopeSearch;
