import InfoCategory from "../../datajson/MainFirstData/InfoCategory.json";
import React from "react";
import {
  FaSearch,
  FaUserAlt,
  FaHospitalAlt,
  FaCreditCard,
} from "react-icons/fa";

function InfoCate() {
  return (
    <>
      {InfoCategory.InfoCategories.map((infocategoy) => (
        <div className="main7_gridcont" key={infocategoy.id}>
          <a href="#!">
            <FaSearch class="main7Con" />
            <br />
            <span className="grid_cont_text">{infocategoy.category}</span>
          </a>
        </div>
      ))}
    </>
  );
}
export default InfoCate;
