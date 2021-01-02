import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class LiveStream extends Component {
    render() {
        return (
            <Card style={{ width: '60rem' }} className="mx-auto my-5 text-center textColor">
                <Card.Header style={{ fontSize: '60px' }}>Baby Stream</Card.Header>
                <Card.Body>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel=UCZCyNWg3PEYtBGRaP4pjJDA" frameborder="0" allowfullscreen></iframe>
                </Card.Body>
            </Card>
        );
    }
}

export default LiveStream;