import React, {Component}from 'react';
import './Footer.css';

function Footer (props){
    return(
        <div className="Footer">
            {props.pie}
        </div>
    )
}
export default Footer;