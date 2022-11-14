import { createStore } from "redux";
function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      markCheck: false,
    };
  }
  const newState = { ...currentState };
  if (action.type === "CLICK") {
    newState.markCheck = true;
  }
  return newState;
}
const store = createStore(reducer);

export default reducer;
