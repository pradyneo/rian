import React from 'react'
import { Component } from 'react';
import { Card, Col, Container, Image, Jumbotron, Row } from 'react-bootstrap';
import Header from './Header.jsx';

class App extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Card style={{ width: '50rem' }} className="mx-auto my-5 text-center">
                            <Card.Header style={{ fontSize: '60px' }}>Rian Neog</Card.Header>
                            <Card.Body>
                                <Card.Text style={{ fontSize: '30px' }}>Our little bundle of joy!!</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App;