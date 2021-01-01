import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import stork from './../images/stork.gif';

function Timer() {
    const calculateTimeLeft = () => {
        const expectedDate = new Date('2021/01/04 13:15:00');
        const difference = expectedDate - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Minutes: Math.floor((difference / 1000 / 60) % 60),
                Seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span key={interval}>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Card style={{ width: '70rem' }} className="mx-auto my-5 text-center">
                        <Card.Header style={{ fontSize: '60px' }}>Baby is on its way...</Card.Header>
                        <Card.Body>
                            <Card.Text style={{ fontSize: '30px' }}>
                                Arriving in {timerComponents.length ? timerComponents : 'Baby has arrived!!'}
                                <img src={stork} />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Timer;