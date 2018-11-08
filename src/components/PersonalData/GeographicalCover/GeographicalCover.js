import React from 'react';
import { Row, Table } from 'reactstrap';
import './GeographicalCover.css';

const GeographicalCover = () => (
    <div className="GeographicalCover">
        <Row>
            <h4 className="title">Geographical Cover</h4>
        </Row>
        <Table className="table">
            <tbody>
                <tr>
                    <th scope="row" rowSpan={5}>Geographical Cover:</th>
                    <td>CH- Aargovia, Appenzell, Ausserrhoden,</td>
                </tr>
                <tr>
                    <td>Zurich,Basel-Lanschaft, Appenzell</td>
                </tr>
                <tr>
                    <td>Innerrhoden</td>
                </tr>
            </tbody>
        </Table>
    </div>
)

export default GeographicalCover;