import "../../MainFirst.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import LightBoxPage2 from "./LightBoxPage2";
import {
  faFacebook,
  faApple,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
function LightBox({ showdao, bringData }) {
  const [email, setEmail] = useState("");

  const [emailValid, setEmailValid] = useState(false);

  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    if (emailValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const xClick = () => {
    bringData(0);
  };

  const nextClick = () => {
    bringData(2);
  };

  return (
    <>
      <div id="lightbox">
        <div id="modal_login">
          <header style={{ padding: "16px 20px" }}>
            <div className="modal_exit">
              <p>wanted</p>
              <button id="modalX" onClick={xClick}>
                X
              </button>
            </div>
            <br />
            <div id="modal_login_text" style={{ paddinTop: "20px" }}>
              <h1 id="dd">직장인을 위한</h1>
              <h1 id="dd">커리어 플랫폼, 원티드!</h1>
              <h3>커리어 성장과 행복을 위한 여정</h3>
              <h3>지금 원티드에서 시작하세요.</h3>
            </div>
          </header>
          <div className="mail_page">
            <div>
              <label id="mail_label">
                이메일
                <br />
              </label>
              <input
                type="email"
                placeholder="이메일을 입력해 주세요."
                id="email_text"
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div className="errorMessageWrap">
              {!emailValid && email.length > 0 && (
                <div>올바른 이메일을 입력해주세요.</div>
              )}
            </div>

            <div>
              <button
                id="email_submit_btn"
                onClick={nextClick}
                disabled={notAllow}
              >
                📧이메일로 계속하기
              </button>
              <div className="email_submit_text">
                <div style={{ margin: "0.8em 0" }}>or</div>
                <div style={{ marginBottom: "1rem" }}>
                  다음 계정으로 계속하기
                </div>
              </div>
            </div>
            <div className="sns">
              <div className="sns_list">
                <button>
                  <div style={{ margin: "0 auto" }}>
                    <FontAwesomeIcon
                      icon={faComment}
                      style={{ color: "white" }}
                    />
                  </div>
                  <p>kakao</p>
                </button>

                <button>
                  <div id="facebook_btn" style={{ margin: "0 auto" }}>
                    <FontAwesomeIcon icon={faFacebook} />
                  </div>
                  <p>Facebook</p>
                </button>

                <button>
                  <div id="google_btn" style={{ margin: "0 auto" }}>
                    <FontAwesomeIcon icon={faGoogle} />
                  </div>
                  <p>Google</p>
                </button>

                <button>
                  <div id="apple_btn" style={{ margin: "0 auto" }}>
                    <FontAwesomeIcon icon={faApple} />
                  </div>
                  <p>Apple</p>
                </button>
              </div>
            </div>
            <p id="foot">
              걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.
              <br />
              회원가입 시 개인정보 처리방침과 이용약관을 확인하였으며,
              동의합니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default LightBox;
