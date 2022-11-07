import React, { useEffect, useState } from "reacat";

const Iser = {
  email: "text@example.com",
  pw: "test",
};
export default function Login() {
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");
  const [savedloginId, setsavedloginId] = useState("");
  const [savedloginPw, setsavedloginPw] = useState("");
  return (
    <>
      <div>
        ID:
        <input
          type="text"
          onChange={(e) => {
            setLoginId(e.target.value);
          }}
        />
      </div>
      <div>
        Pw:{" "}
        <input
          type="text"
          onChange={(e) => {
            setLoginPw(e.target.value);
          }}
        />
      </div>
      <button
        onClick={() => {
          sessionStorage.setItem("loginId", loginId);
          sessionStorage.setItem("loginPw", loginPw);

          setsavedloginId(sessionStorage.getItem("loginId"));
          setsavedloginPw(sessionStorage.getItem("loginPw"));
        }}
      >
        Logout
      </button>
      <div>
        스토리지에 저장된 아이디는 {savedloginId}이고 비밀번호는 {savedloginPw}
        임
      </div>
    </>
  );
}
