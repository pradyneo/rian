import React from 'react'
import { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import HomePage from './HomePage.jsx';

const topSpacing = {
    marginTop: '10%'
}

class App extends Component {

    
    render() {
        return (
            <>
                <Row style={topSpacing} className="justify-content-md-center">
                    <Col md="auto" >
                        <HomePage />
                    </Col>
                </Row>
            </>
        )
    }
}

export default App;