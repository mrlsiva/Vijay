import React, { Component } from "react";
import BannerImage from "./BannerImage";
// import Background from './images/hero-1.jpg';

class Banner extends Component {
  //  var backgroundImage: "url(${Background})";
  render() {
    if (this.props.data) {
      // eslint-disable-next-line no-unused-vars
      var siva = this.props.data.user.map(function(user) {
        return (
          <div
            class="item"
            style={{
              backgroundImage: `url(https://mrlsiva.s3.ap-south-1.amazonaws.com/Vijay/big/${user.MovieID}.jpg)`
            }}
          >
            <div class="container">
              <div
                class="row blurb scrollme animateme"
                data-when="exit"
                data-from="0"
                data-to="1"
                data-opacity="0"
                data-translatey="100"
              >
                <div class="col-md-9">
                  <span class="title">Vijay as {user.Role}</span>
                  <h1>{user.MovieName}</h1>
                  <p>
                    {user.MovieName} is a {user.Year} Indian Tamil-language film
                    directed by {user.Director}.
                  </p>
                  <div class="buttons">
                    <span class="certificate"> PG </span>
                    <a
                      href="https://www.youtube.com/watch?v=GR-Ui8-V2M0"
                      data-vbtype="video"
                      class="venobox btn btn-default"
                    >
                      <i class="material-icons">play_arrow</i>
                      <span>Play trailer</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
      // var count = 0;
      // var slider1 = "";
      // if (count == 0) {
      //     slider1 += "<div class="item active"> <div class="container"> <div class="row blurb scrollme animateme" data-when="exit" data-from="0" data-to="1" data-opacity="0" data-translatey="100"> <div class="col-md-9"> <span class="title">Action, Adventure, Fantasy</span> <h1>{user.MovieName}</h1> <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum.</p> <div class="buttons"> <span class="certificate"> PG </span> <a href="https://youtu.be/RhFMIRuHAL4" data-vbtype="video" class="venobox btn btn-default"> <i class="material-icons">play_arrow</i> <span>Play trailer</span> </a> </div> </div> </div> </div>"
      // }
      // else {
      //     slider1 += "<div class="item"> <div class="container"> <div class="row blurb scrollme animateme" data-when="exit" data-from="0" data-to="1" data-opacity="0" data-translatey="100"> <div class="col-md-9"> <span class="title">Action, Adventure, Fantasy</span> <h1>{user.MovieName}</h1> <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum.</p> <div class="buttons"> <span class="certificate"> PG </span> <a href="https://youtu.be/RhFMIRuHAL4" data-vbtype="video" class="venobox btn btn-default"> <i class="material-icons">play_arrow</i> <span>Play trailer</span> </a> </div> </div> </div> </div>"
      // }
      // slider1 += "</div>"
      // count++
    }

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
              {/* {vino} */}
              {/* <li data-target="#hero" data-slide-to="1"></li>
                            <li data-target="#hero" data-slide-to="2"></li> */}
            </ol>
          </div>
          <div className="carousel-inner">
            {/* <div className="item active" style={backgroundImage} > */}
            <div
              className="item active"
              style={{
                backgroundImage:
                  "url(" +
                  "https://mrlsiva.s3.ap-south-1.amazonaws.com/Vijay/big/63.jpg" +
                  ")"
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
                    <span className="title">
                      Vijay as Bigil | Michael | Rayappan
                    </span>
                    <h1>Bigil</h1>
                    <p>
                      A sports action film directed by Atlee Kumar, starring
                      Vijay and Nayanthara Kurian in the lead roles.
                    </p>
                    <div className="buttons">
                      <span className="certificate"> U/A </span>
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
            {this.props.data &&
              this.props.data.user
                .reverse()
                .map((user, index) => (
                  <BannerImage
                    key={user.MovieID}
                    user={user}
                    active={index === 0}
                  />
                ))}
            {/* <div class="item">
                            <div class="container">
                                <div class="row blurb scrollme animateme" data-when="exit" data-from="0" data-to="1" data-opacity="0" data-translatey="100">
                                    <div class="col-md-9"> <span class="title">Action, Adventure, Fantasy</span>
                                        <h1>End of the World: Part II</h1>
                                        <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamu.</p>
                                        <div class="buttons"> <span class="certificate"> 15 </span> <a href="https://youtu.be/RhFMIRuHAL4" data-vbtype="video" class="venobox btn btn-default"> <i class="material-icons">play_arrow</i> <span>Play trailer</span> </a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item" >
                            <div class="container">
                                <div class="row blurb scrollme animateme" data-when="exit" data-from="0" data-to="1" data-opacity="0" data-translatey="100">
                                    <div class="col-md-9"> <span class="title">Action, Adventure, Fantasy</span>
                                        <h1>End of the World: Part II</h1>
                                        <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum.</p>
                                        <div class="buttons"> <span class="certificate"> PG </span> <a href="https://youtu.be/RhFMIRuHAL4" data-vbtype="video" class="venobox btn btn-default"> <i class="material-icons">play_arrow</i> <span>Play trailer</span> </a> </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
