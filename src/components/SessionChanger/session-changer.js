import React, { useState } from 'react';

import './session-changer.css';

const SessionChanger = (props) => {
    const [ session, setSession ] = useState(props.min);

    if (props.max < session) {
        setSession(props.min);
    }

    const onClick = (event, direction) => {
        if (direction === 'down') {
            setSession(session - 1);
            props.onChangeSession(session - 1);
        } else {
            setSession(session + 1);
            props.onChangeSession(session + 1);
        }
    }
    return (
        <div className='session-changer'>
            <button className='left' onClick={event => onClick(event, 'down')} disabled={(session <= props.min) ? 'disabled' : ''}>
                <i className="angle double left icon white"></i>
            </button>
            <label>{session}</label>
            <button className="right" onClick={event => onClick(event, 'up')} disabled={(session >= props.max) ? 'disabled' : ''}>
                <i className="angle double right icon white"></i>
            </button>
        </div>
    );
}

export default SessionChanger;