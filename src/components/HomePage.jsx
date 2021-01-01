import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Timer from './Timer.jsx';
import stork from './../images/stork.gif';

const hasArrived = false;
const onWayHeader = "Baby is on its way...";
const arrivedHeader = "Yay!! Baby Rian has arrived !!";

const difference = () => {
    let difference = new Date('2021/04/01 13:15:00') - +new Date();
    if (difference <= 0) hasArrived = true;
};

const cardHeader = () => (hasArrived ? arrivedHeader : onWayHeader);

class HomePage extends Component {

    render() {
        return (
            <Timer/>
        );
    }
}

export default HomePage;