import React, { useState } from 'react';
import { connect } from 'react-redux';

import SessionChanger from '../SessionChanger';
import Table from '../Table';

import { generateSchedule } from '../../utilities/pairings';

import './sessions.css';

const Sessions = (props) => {
    const [ session, setSession ] = useState(1);

    if (!props.participants) {
        return <></>;
    }

    const sessionTotal = Math.floor((props.participants - 1) / 2) * 2 + 1;
    if (sessionTotal < session) {
        setSession(1);
    }

    const schedule = generateSchedule(props.participants);

    let totalTime = schedule.length * (props.sessionLength + props.interimLength);
    if (totalTime > 60) {
        const hours = Math.floor(totalTime / 60);
        totalTime = `${hours} ${hours > 1 ? 'hours' : 'hour'}, ${totalTime % 60}`;
    }
    totalTime = `${totalTime} minutes`;

    const buildTables = () => {
        const scheduleSession = schedule[session - 1];
        if (scheduleSession) {
            return (
                <div>
                    {schedule[session - 1].map((table, index) => <Table key={index} seats={table} id={index + 1} />)}
                </div>
            );
        } else {
            return <></>
        }
    }

    return (
        <div className='ui container centered sessions'>
            <div className='ui large label total-info'>Total sessions<div className='detail'>{sessionTotal}</div></div>
            <div className='ui large label total-info'>Total event time<div className='detail'>{totalTime}</div></div>
            <SessionChanger min={1} max={sessionTotal} onChangeSession={setSession} />
            {buildTables()}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        participants: parseInt(state.main.participants),
        sessionLength: parseInt(state.main.sessionLength),
        interimLength: parseInt(state.main.interimLength),
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sessions);