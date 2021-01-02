import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import stork from './../images/stork.gif';
import redCarpet from './../images/redcarpet.gif';

function Timer() {
    const expectedDate = new Date('2021/01/04 13:15:00');

    const calculateTimeLeft = () => {
        const difference = expectedDate - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                Hours: Math.floor((difference / (1000 * 60 * 60))),
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
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });


    const isArrivingHeader = 'Baby is on its way...';
    const hasArrivedHeader = 'Yay!! Baby Rian has arrived!!';
    const isArrivingBody = 'Arring in ';
    const hasArrivedBody = 'Rolling out the carpet for Baby Rian\'s arrival... Stay tuned!!'

    const cardBody = () => {
        if (timerComponents.length) {
            return (
                <Card.Text style={{ fontSize: '30px' }}>
                    {isArrivingBody} {timerComponents}
                    <p><img src={stork} /></p>
                </Card.Text>);
        } else {
            return (
                <Card.Text style={{ fontSize: '30px' }}>
                    {hasArrivedBody}
                    <p><img src={redCarpet} /></p>
                </Card.Text>);
        }
    };

    return (

        <Card style={{ width: '70rem' }} className="mx-auto my-5 text-center">
            <Card.Header style={{ fontSize: '60px' }}>{timerComponents.length ? isArrivingHeader : hasArrivedHeader}</Card.Header>
            <Card.Body>
                {cardBody()}
            </Card.Body>
        </Card>
    );
}

export default Timer;