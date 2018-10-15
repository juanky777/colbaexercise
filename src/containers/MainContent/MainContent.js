import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Header from '../../components/Header/Header';
import Profile from '../../components/Profile/Profile';
import PersonalData from '../../components/PersonalData/PersonalData';
import Footer from '../../components/Footer/Footer';

import './MainContent.css';

export default class MainContent extends Component {
    /**
     * Implement methods for recover Personal Data with axios
     */
    
    render () {
        return (
            <React.Fragment>
                <Header />
                <Profile />
                <Row className="MainContent">
                    <Col xs="6">
                        <PersonalData />
                    </Col>
                    <Col xs="6">
                
                    </Col>
                </Row>
                <Footer />
            </React.Fragment>
        );
    }
}