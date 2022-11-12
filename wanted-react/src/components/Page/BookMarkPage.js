import Header from "../Header";
import "../MainFirst.css";
import InfiniteImg from "../Module/Develope/InfiniteImg";
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
            <InfiniteImg />
          </ul>
        </div>
      </div>
    </>
  );
}
export default BookMarkPage;
