import WantedList from "../../datajson/DevelopeData/WantList.json";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function SearchResultImg({ wantSearch, bringNumber, bringCompanyNumber }) {
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    setNewList(
      WantedList.WantLists.filter((infi) => infi.companyName === wantSearch)
    );
  }, []);
  
  bringNumber(newList.length);
  bringCompanyNumber(newList.length);
  console.log(newList);

  return (
    <>
      {newList.length ? (
        newList.map((infi) => (
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
        ))
      ) : (
        <p>그런 회사는 존재하지 않아요</p>
      )}

      {}
    </>
  );
}
export default SearchResultImg;
