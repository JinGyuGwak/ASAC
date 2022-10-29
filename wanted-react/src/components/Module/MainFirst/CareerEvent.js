import React from "react";
import { Link } from "react-router-dom";
import CareerEvent from "../../datajson/MainFirstData/CareerEvent.json";

function CareerPlusEvent() {
  return (
    <>
      {CareerEvent.CareerEven.map((careerevent) => (
        <li key={careerevent.id}>
          <Link to="/">
            <div className="main5ImgDiv">
              <img src={careerevent.imgAdress} alt={careerevent.imgAlt} />
            </div>
            <div className="main5_text">
              <div>
                <span>{careerevent.onOff}</span>
                <span>{careerevent.category}</span>
              </div>
              <div>
                <h2>{careerevent.title}</h2>
              </div>
              <div>
                <p>{careerevent.eventDate}</p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </>
  );
}
export default CareerPlusEvent;
