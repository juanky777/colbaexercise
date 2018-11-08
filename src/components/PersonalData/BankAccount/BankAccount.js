import React from 'react';
import { Row, Table } from 'reactstrap';
import './BankAccount.css';

const BankAccount = () => (
    <div className="BankAccount">
        <Row>
            <h4 className="title">Bank Account</h4>
        </Row>
        <Table className="table">
            <tbody>
                <tr>
                    <th scope="row">Owner:</th>
                    <td>Juanjo M. Martí</td>
                </tr>
                <tr>
                    <th scope="row">IBAN:</th>
                    <td>CH48 00700 0110 0009 7178 4</td>
                </tr>
                <tr>
                    <th scope="row">VAT number:</th>
                    <td>47529348238</td>
                </tr>
            </tbody>
        </Table>
    </div>
)

export default BankAccount;