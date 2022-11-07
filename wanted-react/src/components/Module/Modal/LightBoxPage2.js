import "../../MainFirst.css";
import { useState } from "react";
import React from "react";
function LightBoxPage2({ bringData }) {
  const backClick = () => {
    bringData(true);
  };
  const data = [
    { id: 0, title: "만 14세 이상입니다. (필수)" },
    { id: 1, title: "oneID 이용약관 동의 (필수)" },
    { id: 2, title: "개인정보 및 수집 이용 동의 (필수)" },
  ];
  const [checkItems, setCheckItems] = useState([]);

  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems((prev) => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      data.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
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
                onChange={(e) => handleAllCheck(e.target.checked)}
                checked={checkItems.length === data.length ? true : false}
              />
              <p style={{ margin: "0.2rem" }}>전체 동의</p>
            </div>
            <hr className="IamHr" />

            {data?.map((data, key) => (
              <div className="agreeCheck" key={key}>
                <input
                  type="checkbox"
                  style={{ height: "1.5rem" }}
                  name={`select-${data.id}`}
                  onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
                  checked={checkItems.includes(data.id) ? true : false}
                />
                <p>{data.title}</p>
              </div>
            ))}

            <button id="formSubmit">가입하기</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default LightBoxPage2;
