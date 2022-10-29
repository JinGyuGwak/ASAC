import "./MainFirst.css";
import "./Wanted_develop.css";
import Header from "./Header";
import Footer from "./Footer";
import InfiniteImg from "./Module/Develope/InfiniteImg";

import { Link } from "react-router-dom";

function WantedDevelop() {
  return (
    <>
      <Header></Header>
      <div class="page">
        <div class="deve_main1">
          <div class="deve_main1_article">
            <div class="deve_main_div1">
              <button class="deveMainBtn1">개발 ▽</button>
              <div id="l">|</div>
              <button class="deveMainBtn2">개발 전체 ▽</button>
            </div>
          </div>
          <div class="deveMainBox">
            <div class="deveMainHeader">
              <div class="mainInfoList">
                <button>
                  <span class="mainInfoList_btnTag">지역</span>
                  <span style={{ color: "blue" }}>한국</span>
                </button>
                <button>
                  <span class="mainInfoList_btnTag">경력</span>
                  <span style={{ color: "blue" }}>전체 ▼</span>
                </button>
                <button>
                  <span style={{ marginRight: "1rem" }}>기술스택</span>▼
                </button>
              </div>
              <div class="mainInfoListLeft">
                <button>
                  <span style={{ marginRight: "1rem" }}>응답률순</span>▼
                </button>
              </div>
            </div>
            <div class="slickList">
              <div>연봉이 최고의 복지 💰</div>
              <div>재택근무 🏠</div>
              <div>퇴사율 10% 이하 📍</div>
              <div>급성장 중 📈</div>
              <div>병역특례 🧑</div>
              <div>50인 이하 ⬇️</div>
              <div>50인 이상 ⬆️</div>
              <div>업력 5년 이상 🏢</div>
            </div>
          </div>
        </div>
        <div class="deve_main2">
          <div>
            <a href="" id="devme_main2Tag">
              <i class="fa-solid fa-bookmark"></i> 북마크 모아보기 ▷
            </a>
          </div>
          <h3 id="devme_main2h">적극 채용 중인 회사</h3>
        </div>
        <div class="deveMain2Good">
          <div class="deveMain2GoodLi">
            <div class="aa">
              <img src="./img/main2img.webp" alt="뭐냐" />
            </div>
            <div class="deveMain2GoodHead">
              <h4>디리아</h4>
              <h5>1개 포지션</h5>
            </div>
            <div class="abc">
              <img src="./img/main2SmallImg.webp" alt="작은이미지" class="bb" />
            </div>
          </div>

          <div class="deveMain2GoodLi">
            <div class="aa">
              <img src="./img/main2img.webp" alt="뭐냐" />
            </div>
            <div class="deveMain2GoodHead">
              <h4>디리아</h4>
              <h5>1개 포지션</h5>
            </div>
            <div class="abc">
              <img src="./img/main2SmallImg.webp" alt="작은이미지" class="bb" />
            </div>
          </div>
          <div class="deveMain2GoodLi">
            <div class="aa">
              <img src="./img/main2img.webp" alt="뭐냐" />
            </div>
            <div class="deveMain2GoodHead">
              <h4>디리아</h4>
              <h5>1개 포지션</h5>
            </div>
            <div class="abc">
              <img src="./img/main2SmallImg.webp" alt="작은이미지" class="bb" />
            </div>
          </div>
          <div class="deveMain2GoodLi">
            <div class="aa">
              <img src="./img/main2img.webp" alt="뭐냐" />
            </div>
            <div class="deveMain2GoodHead">
              <h4>디리아</h4>
              <h5>1개 포지션</h5>
            </div>
            <div class="abc">
              <img src="./img/main2SmallImg.webp" alt="작은이미지" class="bb" />
            </div>
          </div>
          <div class="deveMain2GoodLi">
            <div class="aa">
              <img src="./img/main2img.webp" alt="뭐냐" />
            </div>
            <div class="deveMain2GoodHead">
              <h4>디리아</h4>
              <h5>1개 포지션</h5>
            </div>
            <div class="abc">
              <img src="./img/main2SmallImg.webp" alt="작은이미지" class="bb" />
            </div>
          </div>
        </div>

        <div>
          <ul class="inImg">
            <InfiniteImg />
          </ul>
        </div>

        <div></div>
      </div>
    </>
  );
}
export default WantedDevelop;
