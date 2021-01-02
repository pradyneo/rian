import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Navbar fixed="top">
                <Nav className="mr-auto">
                    <Link to="/" className="textColor nav-item nav-link px-3"><h3 >Home</h3></Link>
                    <Link to="/gallery" className="textColor nav-item nav-link px-3"><h3>Gallery</h3></Link>
                    <Link to="/liveStream" className="textColor nav-item nav-link px-3"><h3>LiveStream</h3></Link>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;