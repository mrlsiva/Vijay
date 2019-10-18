import React, { Component } from 'react';
class Nowplay extends Component {
    render() {
        if (this.props.data) {
            var ns = this.props.data.user.map(function (user) {
                return <div class="movie-slide"> <div class="movie-poster"> <aside> <div> <a href="https://youtu.be/d96cjJhvlMA" data-vbtype="video" class="venobox play"> <i class="material-icons">play_arrow</i> </a> <a href="single-movie.html" class="read-more">read more</a> <span class="date">Released: 7 Mar, 2017</span> </div> </aside>  <a > <img src={`https://mrlsiva.s3.ap-south-1.amazonaws.com/Vijay/${user.MovieID}.jpg`} alt={user.MovieName} /> </a> </div> <h4 class="no-underline">{user.MovieName}</h4>  <div class="star-rating"> <i class="material-icons">star_rate</i> <i class="material-icons">star_rate</i> <i class="material-icons">star_rate</i> <i class="material-icons">star_rate</i> <i class="material-icons">star_rate</i> </div> </div>
            })

            // var count = 0;
            // var slider1 = "";
            // if (count == 0) {
            //     slider1 += "<div class='item active'>"

            // }
            // else {
            //     slider1 += "<div class='item '>"
            // }
            // slider1 += "</div>"
            // count++
        }
        return (
            <div id="Nowplay" >
                <div class="container section">
                    <div class="row">
                        <div class="col-sm-12">
                            <h2>New in</h2>
                            <div class="slick-carousel" id="newIn">
                                {ns}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );



    }
}


export default Nowplay;