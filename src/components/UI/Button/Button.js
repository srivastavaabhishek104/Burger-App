import React from 'react';
import classes from './Button.css'

const button = (props) => {
    const cssButtonClass = [classes.Button];
    cssButtonClass.push(props.btnType);
    return (
        <button disabled = {props.disabled} 
            className = {[classes.Button, classes[props.btnType]].join(' ')} onClick={props.clicked}>
            {props.children}
        </button>
    );
};

export default button;