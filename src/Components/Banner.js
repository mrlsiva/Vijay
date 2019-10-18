import React, { Component } from 'react';
// import Background from './images/hero-1.jpg';

class Banner extends Component {
    //  var backgroundImage: "url(${Background})";
    render() {
        if (this.props.data) {
            // var vino = this.props.data.user.map(function (user) {
            //     return <p>{user.MovieName}</p>
            // })
            // var siva = this.props.data.user.map(function (user) {
            //     return <div><h3>{user.MovieID}.{user.MovieName}</h3><p>{user.Role}</p></div>
            // })

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
            <div id="Banner" >
                <div id="hero" class="carousel slide carousel-fade" data-ride="carousel"> <img src="images/scroll-arrow.svg" alt="Scroll down" class="scroll" />
                    <div class="container">
                        <ol class="carousel-indicators">
                            <li data-target="#hero" data-slide-to="0" class="active"></li>
                            <li data-target="#hero" data-slide-to="1"></li>
                            <li data-target="#hero" data-slide-to="2"></li>
                        </ol>
                    </div>
                    <div class="carousel-inner">
                        {/* <div class="item active" style={backgroundImage} > */}
                        <div class="item active">
                            <div class="container">
                                <div class="row blurb scrollme animateme" data-when="exit" data-from="0" data-to="1" data-opacity="0" data-translatey="100">
                                    <div class="col-md-9"> <span class="title">Action, Adventure, Fantasy</span>
                                        <h1>MovieName</h1>
                                        <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum.</p>
                                        <div class="buttons"> <span class="certificate"> PG </span> <a href="https://youtu.be/RhFMIRuHAL4" data-vbtype="video" class="venobox btn btn-default"> <i class="material-icons">play_arrow</i> <span>Play trailer</span> </a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
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
                        </div>
                    </div>
                </div>

            </div>
        );



    }
}


export default Banner;