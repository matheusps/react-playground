import React from 'react';
import './style.css';

const CustonInput = props => {

    return (
        <input 
            className="custom-input"
            placeholder={props.placeholder}
        ></input>
    )
};

export default CustonInput;