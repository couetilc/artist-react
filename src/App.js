import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render(props) {
        return (
            <Portfolio className="portfolio">
                { props.children }
            </Portfolio>
        );
    }
}

class Portfolio extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                { props.children }
            </div>
        );
    }
}

class Thumbnail extends Component {
    render() {
        return (
            <a className="noh">
                <div className="thumbnail">
                    <h2></h2>
                    <img src="" />
                </div>
            </a>
        );
    }
}

export default App;
