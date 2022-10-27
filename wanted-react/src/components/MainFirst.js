import "./MainFirst.css";
import Header from "./Header";
import Footer from "./Footer";
import {
  FaSearch,
  FaUserAlt,
  FaHospitalAlt,
  FaCreditCard,
} from "react-icons/fa";
const MainFirst = () => {
  return (
    <>
      <Header></Header>
      <div class="main" id="bodypage">
        <div class="first_main">
          <img src="./img/ii.webp" alt="이미지" />
        </div>

        <div class="mainC">
          <div id="insight">
            나에게 필요한 커리어 인사이트
            <i class="fa-regular fa-circle-question"></i>
          </div>
          <div class="btnMain">
            <ul class="btn_list">
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
          <ul class="img_list">
            <li>
              <a href="">
                <div>
                  <img src="./img/want.webp" />
                </div>
                <p>코딩초보들이 헷갈리는 용어 : API가 뭐냐면...</p>
                <div>
                  <i class="fa-brands fa-youtube"></i>
                  <span>코딩애플</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div>
                  <img src="./img/want.webp" />
                </div>
                <p>코딩초보들이 헷갈리는 용어 : API가 뭐냐면</p>
                <div>
                  <i class="fa-brands fa-youtube"></i>
                  <span>코딩애플</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div>
                  <img src="./img/want.webp" />
                </div>
                <p>코딩초보들이 헷갈리는 용어 : API가 뭐냐면</p>
                <div>
                  <i class="fa-brands fa-youtube"></i>
                  <span>코딩애플</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div>
                  <img src="./img/want.webp" />
                </div>
                <p>코딩초보들이 헷갈리는 용어 : API가 뭐냐면</p>
                <div>
                  <i class="fa-brands fa-youtube"></i>
                  <span>코딩애플</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div>
                  <img src="./img/want.webp" />
                </div>
                <p>코딩초보들이 헷갈리는 용어 : API가 뭐냐면</p>
                <div>
                  <i class="fa-brands fa-youtube"></i>
                  <span>코딩애플</span>
                </div>
              </a>
            </li>

            <li>
              <a href="">
                <div>
                  <img src="./img/want.webp" />
                </div>
                <p>
                  코딩초보들이 헷갈리는 용어 : API가 뭐냐면.........(대체 그게
                  뭔데!)
                </p>
                <div>
                  <i class="fa-brands fa-youtube"></i>
                  <span>코딩애플</span>
                </div>
              </a>
            </li>

            <li>
              <a href="">
                <div>
                  <img src="./img/want.webp" />
                </div>
                <p>
                  코딩초보들이 헷갈리는 용어 : API가 뭐냐면.........(대체 그게
                  뭔데!)
                </p>
                <div>
                  <i class="fa-brands fa-youtube"></i>
                  <span>코딩애플</span>
                </div>
              </a>
            </li>
          </ul>
          <div id="more">
            <button id="more_btn">더 많은 콘텐츠 보기</button>
          </div>
        </div>
      </div>
      <div class="main2">
        <div>
          <div>
            <h2 id="title_3min">3분만에 읽는 Wanted+ 아티클</h2>
            <p id="title_3min_article">아티클 전체보기 ▷</p>
          </div>
          <div>
            <ul class="title_3min_img_list">
              <li>
                <a href="">
                  <div class="title_3min_img_listImg">
                    <img src="./img/optimize.webp" />
                  </div>
                  <p>선선한 가을 날씨에 어울릴 아티클 추천 리스트</p>
                  <span class="title_3min_img_listTag"> #아이 #hr #개발</span>
                </a>
              </li>
              <li>
                <a href="">
                  <div class="title_3min_img_listImg">
                    <img src="./img/optimize.webp" />
                  </div>
                  <p>선선한 가을 날씨에 어울릴 아티클 추천 리스트</p>
                  <span class="title_3min_img_listTag"> #아이 #hr #개발</span>
                </a>
              </li>
              <li>
                <a href="">
                  <div class="title_3min_img_listImg">
                    <img src="./img/optimize.webp" />
                  </div>
                  <p>선선한 가을 날씨에 어울릴 아티클 추천 리스트</p>
                  <span class="title_3min_img_listTag"> #아이 #hr #개발</span>
                </a>
              </li>
              <li>
                <a href="">
                  <div class="title_3min_img_listImg">
                    <img src="./img/optimize.webp" />
                  </div>
                  <p>선선한 가을 날씨에 어울릴 아티클 추천 리스트</p>
                  <span class="title_3min_img_listTag"> #아이 #hr #개발</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="main3">
        <div id="wanted_vod">
          <div>
            <h2>직장인을 위한 Wanted+ VOD</h2>
            <p>
              <a href="">VOD 전체보기 ▷</a>
            </p>
          </div>
        </div>

        <ul class="vod_list">
          <li>
            <a href="">
              <div>
                <img src="./img/want.webp" />
              </div>
              <p>
                코딩초보들이 헷갈리는 용어 : API가 뭐냐면.........(대체 그게
                뭔데!)
              </p>
              <div>
                <span>#코딩애플 #바이오 #싱싱</span>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div>
                <img src="./img/want.webp" />
              </div>
              <p>코딩초보들이 헷갈리는 용어 : API가 뭐냐면</p>
              <div>
                <span>#코딩애플 #바이오 #싱싱</span>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div>
                <img src="./img/want.webp" />
              </div>
              <p>코딩초보들이 헷갈리는 용어 : API가 뭐냐면</p>
              <div>
                <span>#코딩애플 #바이오 #싱싱</span>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div>
                <img src="./img/want.webp" />
              </div>
              <p>코딩초보들이 헷갈리는 용어 : API가 뭐냐면</p>
              <div>
                <span>#코딩애플 #바이오 #싱싱</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="main4">
        <a href="" class="eye_btn">
          <div>직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요.👀</div>
        </a>
      </div>
      <div class="main5">
        <div>
          <div class="main5_title">
            <div>
              <h2>커리어 성장을 위한 맞춤 이벤트</h2>
            </div>
            <a href="">이벤트 전체보기 ▷</a>
          </div>
          <div class="main5_img_list">
            <ul>
              <li>
                <a href="">
                  <div id="main5ImgDiv">
                    <img src="./img/aa.webp" />
                  </div>
                  <div class="main5_text">
                    <div>
                      <span>온라인</span>
                      <span>네트워킹</span>
                    </div>
                    <div>
                      <h2>스터디살롱 : CS/CX의 실무 꿀팁과 Next Career</h2>
                    </div>
                    <div>
                      <p>2022.11.24 (목)</p>
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a href="">
                  <div id="main5ImgDiv">
                    <img src="./img/aa.webp" />
                  </div>
                  <div class="main5_text">
                    <div>
                      <span>온라인</span>
                      <span>네트워킹</span>
                    </div>
                    <div>
                      <h2>스터디살롱 : CS/CX의 실무 꿀팁과 Next Career</h2>
                    </div>
                    <div>
                      <p>2022.11.24 (목)</p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="main6">
        <div class="main6_container">
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
      <div class="main7">
        <div class="main7_content">
          <h2>채용 정보를 찾고 계셨나요?</h2>
        </div>

        <div class="main7_gridbox">
          <div class="main7_gridcont">
            <a href="">
              <FaSearch class="main7Con" />
              <br />
              <span class="grid_cont_text">채용공고 ▷</span>
            </a>
          </div>

          <div class="main7_gridcont">
            <a href="">
              <FaUserAlt class="main7Con" />
              <br />
              <span class="grid_cont_text">내 프로필 ▷</span>
            </a>
          </div>

          <div class="main7_gridcont">
            <a href="">
              <FaHospitalAlt class="main7Con" />
              <br />
              <span class="grid_cont_text">매치업 ▷</span>
            </a>
          </div>

          <div class="main7_gridcont">
            <a href="">
              <FaCreditCard class="main7Con" />

              <br />
              <span class="grid_cont_text">직군별 연봉 ▷</span>
            </a>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};
export default MainFirst;
