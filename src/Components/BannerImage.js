import React from "react";
import classNames from "classnames";

const BannerImage = ({ user, active }) => (
  <div
    //className={`item ${active ? "active" : ""}`}
    className={classNames("item", {
      active: active
    })}
    style={{
      backgroundImage: `url(https://mrlsiva.s3.ap-south-1.amazonaws.com/Vijay/big/${user.MovieID}.jpg)`
    }}
  >
    <div className="container">
      <div
        className="row blurb scrollme animateme"
        data-when="exit"
        data-from="0"
        data-to="1"
        data-opacity="0"
        data-translatey="100"
      >
        <div className="col-md-9">
          <span className="title">Vijay as {user.Role}</span>
          <h1>{user.MovieName}</h1>
          <p>
            {user.MovieName} is a {user.Year} Indian Tamil-language film
            directed by {user.Director}.
          </p>
          <div className="buttons">
            <span className="certificate"> PG </span>
            <a
              href="https://www.youtube.com/watch?v=GR-Ui8-V2M0"
              data-vbtype="video"
              className="venobox btn btn-default"
            >
              <i className="material-icons">play_arrow</i>
              <span>Play trailer</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BannerImage;
