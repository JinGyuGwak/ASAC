import WantedList from "../../datajson/DevelopeData/WantList.json";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
function InfiniteImg() {
  const ff = () => {
    alert("눌렀당");
  };
  return (
    <>
      {WantedList.WantLists.map((infi) => (
        <li key={infi.id} className="infiImgLi">
          <div>
            <Link to={infi.linaddr}>
              <img src={infi.imgAdress} alt={infi.imgAlt} />
            </Link>
            <FontAwesomeIcon
              icon={faBookmark}
              className="imgBookmark"
              onClick={ff}
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
      ))}
      ;
    </>
  );
}
export default InfiniteImg;
