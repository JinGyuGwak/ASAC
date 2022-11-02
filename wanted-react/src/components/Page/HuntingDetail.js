import "../MainFirst.css";
import "../Hunting_detail.css";

import Header from "../Header";
import Footer from "../Footer";
function HuntingDetail() {
  return (
    <>
      <Header></Header>
      <div className="page">
        <div className="hunting_detail_container">
          <div className="hunting_detail_main">
            <div className="hunting_detail_div1">
              <img src="./img/hunt_de.webp" alt="회사홍보" />

              <div className="detailMainHeader">
                <h2 id="detadilMainHeaderTitle">Unity 3D 개발자(2년이상)</h2>
                <div style={{ display: "flex" }}>
                  <h6 id="detadilMainHeaderSp1">비주얼신</h6>
                  <div id="detadilMainHeaderSp2">응답률 매우 높음</div>
                  <span id="detadilMainHeaderSp3">서울·한국</span>
                </div>
                <ul id="detailMainHeaderUl">
                  <a href="">
                    <li>#휴계실</li>
                  </a>
                  <a href="">
                    <li>#복지포인트</li>
                  </a>
                  <a href="">
                    <li>#노트북</li>
                  </a>
                  <a href="">
                    <li>#IT,컨텐츠</li>
                  </a>
                </ul>
              </div>
              <p id="hunting_detail_main1P">
                <span>
                  비주얼신(구 피니뷰)은 세상의 모든 현실을 3D 디지털 트윈으로
                  재창조하고 이를 이용한 다양한 기술을 활용한 서비스를 만들고
                  있으며, 비주얼신과 함께 성장할 인재를 모집합니다.
                  <br />
                  <br />
                  비주얼신은 2022년 08월 16일 첫 서비스로 "finiroom" App을 출시
                  하였습니다.
                  <br />
                  finiroom은 모바일을 활용하여 3D 스캔, 편집, 스타일링, 모델
                  공유등 활용도를 높여 가고 있으며,
                  <br />
                  해당 기술 기반으로 패션, 엔터테인먼트, 이커머스, 마케팅,
                  인테리어, 제조업 분야등 에서 누구나 쉽게 사용할 수 있는
                  3D서비스를 제공하기 위해 개발 진행 하고 있습니다. 또한
                  계속적인 개발, 기획, 관리 인원에 대한 충원 계획을 갖고
                  있습니다.
                  <br />
                  <br />
                  미래를 함께 하실 유능한 인재를 모집하기에 적극적인 관심과 지원
                  바랍니다.
                </span>
              </p>
              <div className="bor_B">
                <h5>기술스택 · 툴</h5>
                <ul id="detailMainHeaderSkill">
                  <a href="">
                    <li>휴계실</li>
                  </a>
                  <a href="">
                    <li>복지포인트</li>
                  </a>
                  <a href="">
                    <li>노트북</li>
                  </a>
                  <a href="">
                    <li>IT,컨텐츠</li>
                  </a>
                  <a href="">
                    <li>휴계실</li>
                  </a>
                  <a href="">
                    <li>복지포인트</li>
                  </a>
                  <a href="">
                    <li>노트북</li>
                  </a>
                  <a href="">
                    <li>IT,컨텐츠</li>
                  </a>
                </ul>
              </div>

              <div>
                <div className="deadline">
                  <p className="deadlineP1">마감일</p>
                  <p className="deadlineP2">상시</p>
                </div>

                <div className="deadline">
                  <p className="deadlineP1">근무지역</p>
                  <p className="deadlineP2">
                    13449) 경기도 성남시 수정구 대왕판교로 판교테크로벨리
                    기업지원허브 혁신기술존 2층
                  </p>
                </div>
                <a href="">
                  <img src="./img/aa.webp" alt="구글지도" id="gooMap" />
                </a>
              </div>

              <div>
                <div className="companyDiv">
                  <button className="companyDivBtn">
                    <div>
                      <img src="./img/kzone.jpg" alt="케이존" />
                    </div>
                    <div id="companyDivH">
                      <h5>케이존</h5>
                      <h6>IT, 컨텐츠</h6>
                    </div>
                  </button>
                  <button id="foBtn">팔로우</button>
                </div>
              </div>

              <div className="readMe">
                <svg className="" width="24" height="24" viewBox="0 0 24 24">
                  <g fill="currentColor" fill-rule="evenodd">
                    <path
                      fill-rule="nonzero"
                      d="M15.266 20.658A9.249 9.249 0 0112 21.25a9.25 9.25 0 010-18.5 9.21 9.21 0 016.54 2.71A9.217 9.217 0 0121.25 12a9.213 9.213 0 01-2.71 6.54.75.75 0 101.061 1.062A10.713 10.713 0 0022.75 12c0-2.89-1.146-5.599-3.149-7.601A10.717 10.717 0 0012 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75c1.31 0 2.591-.235 3.794-.688a.75.75 0 10-.528-1.404z"
                    ></path>
                    <path d="M13 16a1 1 0 11-2 0 1 1 0 012 0"></path>
                    <path
                      fill-rule="nonzero"
                      d="M11.25 7v5a.75.75 0 101.5 0V7a.75.75 0 10-1.5 0z"
                    ></path>
                  </g>
                </svg>
                <h5>
                  본 채용정보로는 원티드랩의 동의없이 무단전재, 재배포, 재가공할
                  수 없으며, 구직활동 이외의 <br /> 용도로 사용할 수 없습니다.
                </h5>
              </div>
            </div>

            <div className="hunting_detail_aside">
              <div className="hunting_detail_aside_div">
                <h3>채용보상금</h3>
                <ul>
                  <li>
                    <h4>추천인</h4>
                    <p>500,000원</p>
                  </li>
                  <li>
                    <h4>지원자</h4>
                    <p>500,000원</p>
                  </li>
                </ul>
              </div>
              <button className="hunting_detail_aside_btn">
                <i className="fa-solid fa-bookmark"></i> 북마크하기
              </button>
              <button
                className="hunting_detail_aside_btn"
                style={{ backgroundColor: "#36f", color: "white" }}
              >
                지원하기
              </button>
              <button id="like_btn">♡ 9</button>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "70px" }}>
          <h5 id="hunting_detail_img_header">이 포지션을 찾고 계셨나요?</h5>
          <ul className="inImg">
            <li>
              <a href="">
                <img src="./img/infini.webp" alt="히히" />
              </a>
              <div className="infiniText">
                <div className="infiniText1">Unity 3D 개발자(2년 이상)</div>
                <div className="infiniText2">비주얼신</div>
                <div>
                  <span className="infiniText3">응답률 매우 높음</span>
                </div>
                <div className="infiniText4">서울·한국</div>
                <div className="infiniText5">채용보상금 1,000,000원</div>
              </div>
            </li>

            <li>
              <a href="">
                <img src="./img/infini.webp" alt="히히" />
              </a>
              <div className="infiniText">
                <div className="infiniText1">Unity 3D 개발자(2년 이상)</div>
                <div className="infiniText2">비주얼신</div>
                <div>
                  <span className="infiniText3">응답률 매우 높음</span>
                </div>
                <div className="infiniText4">서울·한국</div>
                <div className="infiniText5">채용보상금 1,000,000원</div>
              </div>
            </li>
            <li>
              <a href="">
                <img src="./img/infini.webp" alt="히히" />
              </a>
              <div className="infiniText">
                <div className="infiniText1">Unity 3D 개발자(2년 이상)</div>
                <div className="infiniText2">비주얼신</div>
                <div>
                  <span className="infiniText3">응답률 매우 높음</span>
                </div>
                <div className="infiniText4">서울·한국</div>
                <div className="infiniText5">채용보상금 1,000,000원</div>
              </div>
            </li>
            <li>
              <a href="">
                <img src="./img/infini.webp" alt="히히" />
              </a>
              <div className="infiniText">
                <div className="infiniText1">Unity 3D 개발자(2년 이상)</div>
                <div className="infiniText2">비주얼신</div>
                <div>
                  <span className="infiniText3">응답률 매우 높음</span>
                </div>
                <div className="infiniText4">서울·한국</div>
                <div className="infiniText5">채용보상금 1,000,000원</div>
              </div>
            </li>
            <li>
              <a href="">
                <img src="./img/infini.webp" alt="히히" />
              </a>
              <div className="infiniText">
                <div className="infiniText1">Unity 3D 개발자(2년 이상)</div>
                <div className="infiniText2">비주얼신</div>
                <div>
                  <span className="infiniText3">응답률 매우 높음</span>
                </div>
                <div className="infiniText4">서울·한국</div>
                <div className="infiniText5">채용보상금 1,000,000원</div>
              </div>
            </li>
          </ul>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
export default HuntingDetail;
