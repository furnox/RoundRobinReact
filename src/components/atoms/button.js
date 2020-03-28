import React from 'react';

const Button = (props) => {
    return (
        <button className={`ui button ${props.color} ${props.disabled}`} onClick={props.onClick}>{props.text}</button>

    );
}

export default Button;