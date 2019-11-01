import React, { Component } from "react";
import Npimage from "./Npimage";

class Nowplay extends Component {
  render() {
    return (
      <div id="Nowplay">
        <div className="container section">
          <div className="row">
            <div className="col-sm-12">
              <h2>New in</h2>
              <div className="slick-carousel" id="newIn">
                {Array.isArray(this.props.data) ? (
                  <>
                    {this.props.data.length > 0 &&
                      this.props.data.map((user, index) => (
                        <Npimage
                          key={user.MovieID}
                          user={user}
                          // active={index === 0}
                        />
                      ))}
                  </>
                ) : (
                  <div>Loading....</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      //   <div id="Nowplay">
      //     <div
      //       id="hero"
      //       className="carousel slide carousel-fade"
      //       data-ride="carousel"
      //     >

      //       <div className="carousel-inner">

      //       </div>
      //     </div>
      //   </div>
    );
  }
}

export default Nowplay;
