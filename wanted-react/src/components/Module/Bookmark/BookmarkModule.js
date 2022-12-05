import WantedList from "../../datajson/DevelopeData/WantList.json";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { bookmarkdown } from "../../modules/counter";
import { FaBookmark } from "react-icons/fa";

function BookmarkModule() {
  const [newList, setNewList] = useState([]);
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    setNewList(
      WantedList.WantLists.filter((infi) => {
        for (let i = 0; i < number.length; i++) {
          if (infi.id === number[i]) return number;
        }
      })
    );
  }, [number]);

  console.log(newList);
  const ff = (a) => {
    dispatch(bookmarkdown(a));
  };

  return (
    <>
      {newList.length ? (
        newList.map((infi) => (
          <li key={infi.id} className="infiImgLi">
            <div>
              <Link to={infi.linaddr}>
                <img src={infi.imgAdress} alt={infi.imgAlt} />
              </Link>
              <FaBookmark className="imgBookmark" onClick={() => ff(infi.id)} />
            </div>
            <div className="infiniText">
              <div className="infiniText1">{infi.companyWant}</div>
              <div className="infiniText2">{infi.companyName}</div>
              <div>
                <span className="infiniText3">{infi.companyResponse}</span>
              </div>
              <div className="infiniText4">{infi.companyLocation}</div>
              <div className="infiniText5">{infi.reward}</div>
            </div>
          </li>
        ))
      ) : (
        <p>북마크 된 포지션이 없어요</p>
      )}

      {}
    </>
  );
}
export default BookmarkModule;
