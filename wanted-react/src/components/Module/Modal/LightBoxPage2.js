import "../../MainFirst.css";
import React from "react";
function LightBoxPage2({ bringData }) {
  const backClick = () => {
    bringData(true);
  };
  return (
    <>
      <div id="memberDaoTwo">
        <div className="member_dao">
          <div className="dao_header">
            <button id="backDao" onClick={backClick}>
              〈{" "}
            </button>
            <p>회원가입</p>
          </div>
          <form className="mamberdaoForm">
            <div className="formText">이메일</div>
            <div>
              <input
                type="email"
                placeholder="wlsrb2695@naver.com"
                className="memberdaoFormEmail"
                id="memberdaoForEmailValue"
              />
            </div>

            <div className="formText">이름</div>
            <div>
              <input
                type="email"
                placeholder="이름을 입력해주세요."
                className="memberdaoFormInput"
              />
            </div>

            <div className="formText">휴대폰 번호</div>
            <div>
              <select className="phoneSelect">
                <option value="KR">South Korea +82</option>
                <option value="JP">Japan +81</option>
                <option value="TW">Taiwan +886</option>
                <option value="HK">Hong Kong +852</option>
                <option value="SG">Singapore +65</option>
                <option value="AF">Afghanistan +93</option>
                <option value="AL">Albania +355</option>
                <option value="DZ">Algeria +213</option>
                <option value="AO">Angola +244</option>
                <option value="AR">Argentina +54</option>
                <option value="AM">Armenia +374</option>
                <option value="AW">Aruba +297</option>
                <option value="KR">South Korea +82</option>
                <option value="JP">Japan +81</option>
                <option value="TW">Taiwan +886</option>
                <option value="HK">Hong Kong +852</option>
                <option value="SG">Singapore +65</option>
                <option value="AF">Afghanistan +93</option>
                <option value="AL">Albania +355</option>
                <option value="DZ">Algeria +213</option>
                <option value="AO">Angola +244</option>
                <option value="AR">Argentina +54</option>
                <option value="AM">Armenia +374</option>
                <option value="AW">Aruba +297</option>
              </select>
              <div>
                <input
                  type="text"
                  placeholder="(예시)01040228739."
                  id="phoneNum"
                />
                <button id="phoneGet">인증번호 받기</button>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="인증번호를 입력해주세요."
                  className="memberdaoFormEmail"
                />
              </div>
            </div>

            <div className="formText">비밀번호</div>

            <input
              type="text"
              placeholder="비밀번호를 입력해주세요."
              className="memberdaoFormEmail"
            />
            <input
              type="text"
              placeholder="비밀번호를 다시 한번 입력해주세요."
              className="memberdaoFormEmail"
            />
            <p id="passwordP">
              영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상
              16자 이하로 입력해주세요.
            </p>

            <div className="agreeCheck">
              <input
                type="checkbox"
                value="selectall"
                className="is_agree_all"
              />
              <p style={{ margin: "0.2rem" }}>전체 동의</p>
            </div>
            <hr className="IamHr" />
            <div className="agreeCheck">
              <input
                type="checkbox"
                style={{ height: "1.5rem" }}
                name="is_agree"
              />
              <p>만 14세 이상입니다. (필수)</p>
            </div>
            <div className="agreeCheck">
              <input
                type="checkbox"
                style={{ height: "1.5rem" }}
                name="is_agree"
              />
              <p>oneID 이용약관 동의 (필수)</p>
            </div>
            <div className="agreeCheck">
              <input
                type="checkbox"
                style={{ height: "1.5rem" }}
                name="is_agree"
              />
              <p>개인정보 및 수집 이용 동의 (필수)</p>
            </div>
            <button id="formSubmit">가입하기</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default LightBoxPage2;
