import React, { useState } from 'react';

const InputInfo = (props) => {
    const [ value, setValue ] = useState(props.value);

    const onChange = (event) => {
        setValue(event.target.value)
        props.onChange(event.target.value);
    }
    return (
        <div className={`ui icon input`}>
            <input type="text" value={value} placeholder={props.placeholder} onChange={onChange} required />
            <div className="ui icon button blue circular" data-tooltip={props.tooltip}>
                <i className="info icon"></i>
            </div>
        </div>
    );
};

export default InputInfo;