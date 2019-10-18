import React, { Component } from 'react';
import $ from 'jquery';
import Nowplay from './Components/Nowplay';
import Header from './Components/Header';
import Banner from './Components/Banner';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
  getData() {
    $.ajax({
      //url: 'https://script.google.com/macros/s/AKfycbylSs0-xFbC2TjHzgXdN22ZzOnL4MPm_G9Z1poYEbE9dj3D_kBy/exec',
      url: '/vijay.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ getData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }
  componentDidMount() {
    this.getData();
  }
  render() {

    return (
      <div className="App" >
        <Header data={this.state.getData} />
        <Banner data={this.state.getData} />
        <Nowplay data={this.state.getData} />
        {/* <Home data={this.state.getData} /> */}
      </div >
    );
  }
}
export default App;
