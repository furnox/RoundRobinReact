import React from 'react';

import './table.css';

const Table = (props) => {
    let [ seat1, seat2 ] = props.seats;
    if (seat1 === 'bye') {
        seat1 = <i className='ui ban blue small icon' />;
    }
    if (seat2 === 'bye') {
        seat2 = <i className='ui ban blue small icon' />;
    }

    return (
        <div className='table'>
            <div className="ui image label participant"><i className="ui user blue large icon" />{seat1}</div>
            <div className="ui brown square huge label table-top">{props.id}</div>
            <div className="ui image label participant"><i className="ui user blue large icon" />{seat2}</div>
        </div>
    );
};

export default Table;