import React, { Component } from 'react';

class Home extends Component {
    render() {
        if (this.props.data) {
             var vino = this.props.data.user.map(function (user) {
                return <p>{user.MovieID}</p>
            })
            // var siva = this.props.data.user.map(function (user) {
            //     return <div><h3>{user.MovieID}.{user.MovieName}</h3><p>{user.Role}</p></div>
            // })
        }


        return (
            <div id="Home" >
                
                        {/* {siva} */}
                   {vino}
            </div>
        );



    }
}


export default Home;