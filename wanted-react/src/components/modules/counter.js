const BOOKMARKCLICK = "BOOKMARKCLICK";

export const bookmarkclick = (id) => ({ type: BOOKMARKCLICK, id });

const initialState = [];

function counter(state = initialState, action) {
  switch (action.type) {
    case BOOKMARKCLICK:
      return (state = [...state, action.id]);
    default:
      return state;
  }
}
export default counter;
