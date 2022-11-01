import ActiveRecruit from "../../datajson/DevelopeData/ActiveRecruit.json";
import React from "react";
function ActiveRecru() {
  return (
    <>
      {ActiveRecruit.ActivRecruits.map((recru) => (
        <div className="deveMain2GoodLi" key={recru.id}>
          <div className="aa">
            <img src={recru.imgAdress} alt={recru.imgAlt} />
          </div>
          <div className="deveMain2GoodHead">
            <h4>{recru.companyName}</h4>
            <h5>{recru.countPosition}개 포지션</h5>
          </div>
          <div className="abc">
            <img
              src={recru.smallImgAdress}
              alt={recru.smallImgAlt}
              className="bb"
            />
          </div>
        </div>
      ))}
    </>
  );
}
export default ActiveRecru;
