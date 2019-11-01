import React, { Component } from "react";

class Header extends Component {
  render() {
    if (this.props.data) {
      // var vino = this.props.data.user.map(function (user) {
      //     return <p>{user.MovieID}</p>
      // })
      // var siva = this.props.data.user.map(function (user) {
      //     return <div><h3>{user.MovieID}.{user.MovieName}</h3><p>{user.Role}</p></div>
      // })
    }
    return (
      <div id="Header">
        <div className="navbar" role="navigation">
          <div className="heading">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  {/* <div className="search"> <a href="#"> <i className="material-icons">search</i> </a> </div> */}
                  <div className="tel">
                    <a href="tel:03301234567">
                      <i className="material-icons">phone in talk</i> 9994090424
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="navbar-header">
              <a
                href="index.html"
                className="logo"
                title="Craft beer landing page"
              >
                <img src="images/logo.png" alt="Craft Beer HTML Template" />
              </a>
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>
            </div>
            <div className="navbar-collapse collapse">
              <ul id="menu-primary" className="nav navbar-nav">
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="whats-on.html">What's on</a>
                </li>
                <li>
                  <a href="shortcodes.html">Shortcodes</a>
                </li>
                <li className="dropdown">
                  <a href="news.html">News</a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="news-single.html">News single</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
