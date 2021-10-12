import React from 'react';
import './Body.css';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function Body (props){
    return(
        <div className="Body">
            {props.practica} 
            <ol>
                {props.temas.map((e,inde)=><li key = {inde}>{e}</li>)}
            </ol>
            <Button variant="primary" onClick={()=>(alert("Lo logré."))}>Dale Click</Button>
        </div>
    )
}
export default Body;
Body.propTypes={practica:PropTypes.string.isRequired}