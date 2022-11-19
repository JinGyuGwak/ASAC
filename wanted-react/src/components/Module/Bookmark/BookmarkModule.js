import WantedList from "../../datajson/DevelopeData/WantList.json";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { Provider, useSelector, useDispatch } from "react-redux";

function BookmarkModule() {
  const [newList, setNewList] = useState([]);
  const number = useSelector((state) => state.counter);

  useEffect(() => {
    setNewList(WantedList.WantLists.filter((infi) => infi.id === number[0]));
  }, []);

  console.log(newList);
  const ff = (a) => {
    console.log(a);
    console.log(number); //number에 id가 들어가 있다.
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
              <FontAwesomeIcon
                icon={faBookmark}
                className="imgBookmark"
                onClick={() => ff(infi.id)}
              />
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
