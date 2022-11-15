import { createStore } from "redux";

function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      id: 0,
      markCheck: false,
      linaddr: "/2",
      imgAdress: "../img/infini.webp",
      imgAlt: "회사이미지",
      companyWant: "서버/솔루션 유지보수",
      companyName: "구글",
      companyResponse: "응답률 매우 높음",
      companyLocation: "서울·한국",
      reward: "채용보상금 1,000,000원",
      number: 10,
    };
  }
  const newState = { ...currentState };
  if (action.type === "CLICK") {
    newState.markCheck = true;
  }
  return newState;
}

export default reducer;
