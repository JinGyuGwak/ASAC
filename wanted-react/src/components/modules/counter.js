const BOOKMARKCLICK = "BOOKMARKCLICK";
const BOOKMARKDOWN = "BOOKMARKDOWN";

export const bookmarkclick = (id) => ({ type: BOOKMARKCLICK, id });
export const bookmarkdown = (id) => ({ type: BOOKMARKDOWN, id });

const initialState = [];

function counter(state = initialState, action) {
  switch (action.type) {
    case BOOKMARKCLICK:
      return (state = [...state, action.id]);

    case BOOKMARKDOWN:
      return state.filter((te) => te !== action.id);
    default:
      return state;
  }
}
export default counter;
