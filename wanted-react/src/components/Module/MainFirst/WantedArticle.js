import React from "react";
import WantedArticles from "../../datajson/MainFirstData/WantedArticle.json";

function WantedArticle() {
  return (
    <>
      {WantedArticles.WantedArticles.map((wantedArticle) => (
        <li key={wantedArticle.id}>
          <a href="#!">
            <div className="title_3min_img_listImg">
              <img src={wantedArticle.imgAdress} alt={wantedArticle.imgAlt} />
            </div>
            <p>{wantedArticle.title}</p>
            <span className="title_3min_img_listTag">
              {wantedArticle.hashTag}
            </span>
          </a>
        </li>
      ))}
    </>
  );
}
export default WantedArticle;
