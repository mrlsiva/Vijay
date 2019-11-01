import React, { Component } from "react";
import BannerImage from "./BannerImage";

class Banner extends Component {
  render() {
    return (
      <div id="Banner">
        <div
          id="hero"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <img
            src="images/scroll-arrow.svg"
            alt="Scroll down"
            className="scroll"
          />
          <div className="container">
            <ol className="carousel-indicators">
              <li data-target="#hero" data-slide-to="0" className="active"></li>
              <li data-target="#hero" data-slide-to="1" className=""></li>
              <li data-target="#hero" data-slide-to="3" className=""></li>
            </ol>
          </div>
          <div className="carousel-inner">
            {this.props.data ? (
              <>
                {this.props.data.reverse().map((user, index) => (
                  <BannerImage
                    key={user.MovieID}
                    user={user}
                    active={index === 0}
                  />
                ))}
              </>
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
