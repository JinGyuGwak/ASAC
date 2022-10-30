import WantedList from "../../datajson/DevelopeData/WantList.json";
import React from "react";
import { Link } from "react-router-dom";
function InfiniteImg() {
  return (
    <>
      {WantedList.WantLists.map((infi) => (
        <li key={infi.id}>
          <Link to={infi.linaddr}>
            <img src={infi.imgAdress} alt={infi.imgAlt} />
          </Link>
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