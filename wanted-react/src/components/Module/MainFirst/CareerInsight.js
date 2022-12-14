import React from "react";
import MainInsight from "../../datajson/MainFirstData/MainInsight.json";

function CareerInsight() {
  return (
    <>
      {MainInsight.MainInsightData.map((mainInsight) => (
        <li key={mainInsight.id}>
          <a href="WantedDevelop">
            <img
              className="card-image"
              src={mainInsight.imgAdress}
              alt={mainInsight.imgAlt}
            />
            <p className="card-title">{mainInsight.title}</p>
            <div>
              <span className="writer">{mainInsight.name}</span>
            </div>
          </a>
        </li>
      ))}
    </>
  );
}
export default CareerInsight;
