import React from "react";
import WantedVods from "../../datajson/MainFirstData/WantedVod.json";
function WantedVod() {
  return (
    <>
      {WantedVods.WantedVods.map((wantedvod) => (
        <li key={wantedvod.id}>
          <a href="#!">
            <div>
              <img src={wantedvod.imgAdress} alt={wantedvod.imgAlt} />
            </div>
            <p>{wantedvod.title}</p>
            <div>
              <span>{wantedvod.hashTag}</span>
            </div>
          </a>
        </li>
      ))}
      ;
    </>
  );
}
export default WantedVod;
