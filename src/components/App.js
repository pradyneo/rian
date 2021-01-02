import React from 'react'
import { Component } from 'react';
import { Row, Col, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header.jsx';

import HomePage from './HomePage.jsx';
import Routes from './Routes.js';

class App extends Component {
    render() {
        return (
            <HomePage/>
            // <BrowserRouter>
            //     <Header />
            //     <Routes />
            // </BrowserRouter>
        )
    }
}

export default App;