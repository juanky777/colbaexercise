import React from 'react';
import { Row, Table } from 'reactstrap';
import './Qualifications.css';

const Qualifications = () => (
    <div className="Qualifications">
        <Row>
            <h4 className="title">QUALIFICATIONS</h4>
        </Row>
        <Table className="table">
            <tbody>
                <tr>
                    <th scope="row">Lawyers License:</th>
                    <td>Yes</td>
                </tr>
                <tr>
                    <th scope="row">Year of License:</th>
                    <td>1995</td>
                </tr>

                <tr>
                    <th scope="row" rowSpan={5}>Qualifications:</th>
                    <td>Certified Specialist SAV Labour Law</td>
                </tr>
                <tr>
                    <td>Specialist lawyer SAV Inheritance Law</td>
                </tr>
                <tr>
                    <td>Specialist Lawyer SAV Construction and <br/> Real State Law</td>
                </tr>
                <tr>
                    <td>Specialist lawyer SAV Liability and <br/> Insurance Law</td>
                </tr>
                <tr>
                    <td >Certified Specialist SAV Family Law</td>
                </tr>
            </tbody>
        </Table>
    </div>
)

export default Qualifications;