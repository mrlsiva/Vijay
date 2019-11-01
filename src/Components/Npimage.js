import React from "react";
// import classNames from "classnames";

const Npimage = ({ user }) => (
  <div class="movie-slide">
    <div class="movie-poster">
      <aside>
        <div>
          <a
            href="https://youtu.be/d96cjJhvlMA"
            data-vbtype="video"
            class="venobox play"
          >
            <i class="material-icons">play_arrow</i>
          </a>
          <a href="single-movie.html" class="read-more">
            read more
          </a>
          <span class="date">Released: 7 Mar, 2017</span>
        </div>
      </aside>
      <a href="indx.hmtl">
        <img
          src={`https://mrlsiva.s3.ap-south-1.amazonaws.com/Vijay/small/${user.MovieID}.jpg`}
          alt={user.MovieName}
        />
      </a>
    </div>
    <h4 class="no-underline">{user.MovieName}</h4>
    {/* <div class="star-rating">
              <i class="material-icons">star_rate</i>
              <i class="material-icons">star_rate</i>
              <i class="material-icons">star_rate</i>
              <i class="material-icons">star_rate</i>
              <i class="material-icons">star_rate</i>
            </div> */}
  </div>
);

export default Npimage;
