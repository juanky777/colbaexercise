import React from 'react';
import Lawyer from '../../assets/images/Lawyer.png';
import { Button } from 'reactstrap';
import './PersonalData.css';

/**
 * Do it with divs and not with Col and Row for using in the CSS flex display 
 */
const PersonalData = () => (
    <div className="PersonalData">
        <div className="Img">
            <img src={Lawyer} alt="Lawyer" className="rounded-circle" width="200"/>
        </div>
        <div className="Data">
            <h4>Prof. Juanjo Martí</h4>
            <Button outline className="Age" size="sm"><i className="fa fa-venus"></i> 68 years</Button>
            <h5>Juanjo M. Martí</h5>
            <p> Alte Landstrasse 21 8800 Thalwil ZH CH</p>
            <p><i className="fa fa-phone"></i> +34663475770 +41555555555</p>
            <p><i className="fa fa-envelope"></i> juanjo@colba.es</p>
            <p><i className="fa fa-globe"></i> <a href="http://colba.es">http/www.colba.es</a></p>
        </div>
        <div>
            <Button color="success" size="sm"><i className="fa fa-check"></i><p>Available</p></Button>
        </div>
    </div>
)

export default PersonalData;