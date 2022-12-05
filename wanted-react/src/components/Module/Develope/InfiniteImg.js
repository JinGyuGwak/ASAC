import WantedList from "../../datajson/DevelopeData/WantList.json";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { bookmarkclick, bookmarkdown } from "../../modules/counter";
import { FaBookmark } from "react-icons/fa";

function InfiniteImg() {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [markCheck, setMarkCheck] = useState(false);

  const ff = (a) => {
    dispatch(bookmarkclick(a));
    console.log(number);
  };
  const tt = (a) => {
    dispatch(bookmarkdown(a));
  };

  return (
    <>
      {WantedList.WantLists.map((infi) => (
        <li key={infi.id} className="infiImgLi">
          <div>
            <Link to={infi.linaddr}>
              <img src={infi.imgAdress} alt={infi.imgAlt} />
            </Link>
            {number.includes(infi.id) ? (
              <FaBookmark className="imgBookmark" onClick={() => tt(infi.id)} />
            ) : (
              <FontAwesomeIcon
                icon={faBookmark}
                className="imgBookmark"
                onClick={() => ff(infi.id)}
              />
            )}
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
      ))}
    </>
  );
}
export default InfiniteImg;
