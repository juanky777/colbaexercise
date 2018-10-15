import React, { Component } from 'react';
import './Layout.css';
import { Container } from 'reactstrap';

export default class Layout extends Component {

    render() {
        return(
            <Container>
                {this.props.children}
            </Container>
        ); 
    }
}