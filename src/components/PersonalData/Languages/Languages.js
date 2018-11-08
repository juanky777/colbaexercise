import React from 'react';
import { Row } from 'reactstrap';
import './Languages.css';

const Languages = () => (
    <div className="Languages">
        <Row>
            <h4 className="title">LANGUAGES</h4>
        </Row>
        <Row className="skills">
        <div>
            <p className="labelLanguage">Advanced</p>
            <button type="button" className="btn btn-warning btn-sm" style={{backgroundColor: "orange", color:"orange", width:35 }}></button>
            <button type="button" className="btn btn-warning btn-sm" style={{backgroundColor: "orange", color:"orange", width:35 }} disabled></button>
            <button type="button" className="btn btn-warning btn-sm" style={{backgroundColor: "orange", color:"orange", width:35 }} disabled></button>
            <p className="language">German</p>
        </div>
        <div style={{marginLeft: 50}}>
                <p className="labelLanguage">Safe to negotiate</p>
                <button type="button" className="btn btn-warning btn-sm" style={{backgroundColor: "orange", color:"orange", width:35 }}></button>
                <button type="button" className="btn btn-warning btn-sm" style={{backgroundColor: "orange", color:"orange", width:35 }}></button>
                <button type="button" className="btn btn-warning btn-sm" style={{backgroundColor: "orange", color:"orange", width:35 }} disabled></button>
                <p className="language">English</p>
            </div>
        </Row>
    </div>
)

export default Languages;