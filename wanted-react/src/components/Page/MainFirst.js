import "../MainFirst.css";
import Header from "../Header";
import Footer from "../Footer";
import CareerInsight from "../Module/MainFirst/CareerInsight";
import WantedArticle from "../Module/MainFirst/WantedArticle";
import CareerPlusEvent from "../Module/MainFirst/CareerEvent";
import WantedVod from "../Module/MainFirst/WantedVod";
import InfoCate from "../Module/MainFirst/InfoCate";
import {
  FaSearch,
  FaUserAlt,
  FaHospitalAlt,
  FaCreditCard,
} from "react-icons/fa";
function MainFirst() {
  return (
    <>
      <Header></Header>
      <div className="main" id="bodypage">
        <div className="first_main">
          <img src="./img/ii.webp" alt="이미지" />
        </div>

        <div className="mainC">
          <div id="insight">
            나에게 필요한 커리어 인사이트
            <i className="fa-regular fa-circle-question"></i>
          </div>
          <div className="btnMain">
            <ul className="btn_list">
              <li>
                <button>인간관계</button>
              </li>
              <li>
                <button>IT/기술</button>
              </li>
              <li>
                <button>회사생활</button>
              </li>
              <li>
                <button>취업/이직</button>
              </li>
              <li>
                <button>커리어고민</button>
              </li>
              <li>
                <button>조직문화</button>
              </li>
              <li>
                <button>리더십</button>
              </li>
              <li>
                <button>라이프스타일</button>
              </li>
              <li>
                <button>HR</button>
              </li>
            </ul>
          </div>

          <ul className="img_list">
            <CareerInsight />
          </ul>

          <div id="more">
            <button id="more_btn">더 많은 콘텐츠 보기</button>
          </div>
        </div>
      </div>
      <div className="main2">
        <div>
          <div>
            <h2 id="title_3min">3분만에 읽는 Wanted+ 아티클</h2>
            <p id="title_3min_article">아티클 전체보기 ▷</p>
          </div>
          <div>
            <ul className="title_3min_img_list">
              <WantedArticle />
            </ul>
          </div>
        </div>
      </div>

      <div className="main3">
        <div id="wanted_vod">
          <div>
            <h2>직장인을 위한 Wanted+ VOD</h2>
            <p>
              <a href="">VOD 전체보기 ▷</a>
            </p>
          </div>
        </div>

        <ul className="vod_list">
          <WantedVod />
        </ul>
      </div>
      <div className="main4">
        <a href="" className="eye_btn">
          <div>직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요.👀</div>
        </a>
      </div>
      <div className="main5">
        <div>
          <div className="main5_title">
            <div>
              <h2>커리어 성장을 위한 맞춤 이벤트</h2>
            </div>
            <a href="">이벤트 전체보기 ▷</a>
          </div>
          <div className="main5_img_list">
            <ul>
              <CareerPlusEvent />
            </ul>
          </div>
        </div>
      </div>
      <div className="main6">
        <div className="main6_container">
          <div>
            <h1>wanted+ 구독해야 하는 이유</h1>
            <p>구독자의 서류 합격률이 비구독자보다 1.5배 높아요!</p>
            <button>첫 구독 0원 신청하기</button>
          </div>
          <div>
            <img src="./img/wantedball.png" alt="동그라미" />
          </div>
        </div>
      </div>
      <div className="main7">
        <div className="main7_content">
          <h2>채용 정보를 찾고 계셨나요?</h2>
        </div>

        <div className="main7_gridbox">
          <InfoCate />
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
export default MainFirst;
