import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Timer from './Timer.jsx';

class HomePage extends Component {

    render() {
        return (
            <Row className="topSpacing justify-content-md-center">
                <Col md="auto" >
                    <Timer />
                </Col>
            </Row>
        );
    }
}

export default HomePage;