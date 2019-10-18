import React, { Component } from 'react';

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
      <div id="Header" >
        <div class="navbar" role="navigation">
          <div class="heading">
            <div class="container">
              <div class="row">
                <div class="col-sm-12">
                  {/* <div class="search"> <a href="#"> <i class="material-icons">search</i> </a> </div> */}
                  <div class="tel"> <a href="tel:03301234567"> <i class="material-icons">phone in talk</i> 0330 123 4567 </a> </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="navbar-header"> <a href="index.html" class="logo" title="Craft beer landing page"> <img src="images/logo.png" alt="Craft Beer HTML Template" /> </a>
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar top-bar"></span> <span class="icon-bar middle-bar"></span> <span class="icon-bar bottom-bar"></span> </button>
            </div>
            <div class="navbar-collapse collapse">
              <ul id="menu-primary" class="nav navbar-nav">
                <li class="active"> <a href="index.html">Home</a> </li>
                <li> <a href="whats-on.html">What's on</a> </li>
                <li> <a href="shortcodes.html">Shortcodes</a> </li>
                <li class="dropdown"> <a href="news.html">News</a>
                  <ul class="dropdown-menu">
                    <li><a href="news-single.html">News single</a></li>
                  </ul>
                </li>
                <li> <a href="contact.html">Contact</a> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;