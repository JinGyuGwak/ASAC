import Header from "../Header";
import "../MainFirst.css";
import BookmarkModule from "../Module/Bookmark/BookmarkModule";

function BookMarkPage() {
  return (
    <>
      <Header />;
      <div className="BookMarkDiv">
        <div className="BookMarkDivPTag">
          <p>북마크</p>
        </div>
        <div>
          <ul className="inImg">
            <BookmarkModule />
          </ul>
        </div>
      </div>
    </>
  );
}
export default BookMarkPage;
