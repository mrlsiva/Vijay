import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/todos')
        // fetch('https://jsonplaceholder.typicode.com/users')
        fetch('https://script.google.com/macros/s/AKfycbylSs0-xFbC2TjHzgXdN22ZzOnL4MPm_G9Z1poYEbE9dj3D_kBy/exec')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>loading...</div>
        }
        else {
            return (
                <div className="App" >
                    <ul>
                        {items.user.map(item => (
                            <li key={item.MovieID}>
                                {item.MovieName}
                            </li>
                        ))}
                    </ul>
                </div >
            );
        }
    }
}


export default App;
