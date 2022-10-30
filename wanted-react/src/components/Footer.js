import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="foot_main1">
        <div className="foot_main1_div">
          <div id="abcd">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&amp;w=110&amp;q=100"
              alt="wanted"
            />
            <div>
              <a href="">기업소개</a>
              <a href="">이용약관</a>
              <a href="">개인정보 처리방침</a>
              <a href="">고객센터</a>
            </div>
          </div>

          <div className="sns_tag">
            <div className="foot_main1_div2">
              <a href="" className="foot_main_link">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="" className="foot_main_link">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="" className="foot_main_link">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="" className="foot_main_link">
                <i className="fa-solid fa-blog"></i>
              </a>
              <a href="" className="foot_main_link">
                <i className="fa-brands fa-weixin"></i>
              </a>
              <a href="" className="foot_main_link">
                <i className="fa-brands fa-apple"></i>
              </a>
              <a href="" className="foot_main_link">
                <i className="fa-brands fa-google-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="foot_main2">
        <div className="foot_main2_text">
          <p>
            (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300
            롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147
            <br />
            유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 |
            (국외) 서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 |
            02-539-7118
            <br />© Wantedlab, Inc.
          </p>
        </div>
        <div id="sel">
          <select id="select_btn">
            <option value="KR">한국 (한국어)</option>
            <option value="JP">日本 (日本語)</option>
            <option value="WW">Worldwide (English)</option>
            <option value="SG">Singapore (English)</option>
          </select>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
