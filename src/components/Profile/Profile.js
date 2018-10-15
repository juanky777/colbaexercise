import React, { Component } from 'react';
import { Row, Col, ButtonGroup, Button, Progress } from 'reactstrap';
import './Profile.css'

export default class Profile extends Component {
    /**
     * TODO CHANGE PROFILE VALUE WHEN CLICK THE BUTTONS
     */
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col xs="2">
                        <h1>Profile</h1>
                    </Col>
                    <Col>
                    <ButtonGroup className="float-right">
                        <Button outline color="success">Back</Button>
                        <Button outline color="success">Edit Profile</Button>
                        <Button outline color="success">Edit Offer</Button>
                    </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Progress className="Progress" color="success" value="11" />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}
