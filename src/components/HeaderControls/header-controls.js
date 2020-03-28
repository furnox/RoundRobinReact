import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../store/main';

import { isInteger } from '../../utilities/numbers';

import InputInfo from '../InputInfo';
import Icons from '../Icons';
import { Button } from '../atoms';

import './header-controls.css';

const HeaderControls = (props) => {
    const [ participants, setParticipants ] = useState('');
    const [ sessionLength, setSessionLength ] = useState('');
    const [ interimLength, setInterimLength ] = useState('');

    const validateData = () => {
        if (!isInteger(participants) || participants <= 1 || participants > 99) {
            return 'disabled';
        }

        if (!isInteger(sessionLength) || sessionLength <= 0) {
            return 'disabled';
        }

        if (!isInteger(interimLength) || interimLength <= 0) {
            return 'disabled';
        }

        return '';
    };

    const onClick = () => {
        const data = {
            participants,
            sessionLength,
            interimLength,
        };

        props.calculateSessions(data);
    };

    return (
        <div className='header-controls'>
            <h2 className="ui icon header center aligned">
                <Icons.Robin height='128' width='128' color='#2185D0' />
                <div className="content">
                    Round-Robin Pairings
                    <div className="sub header">Quickest way to pair up!</div>
                </div>
            </h2>
            <div className='header-control-inputs'>
                <div className='ui centered grid'>
                    <InputInfo value={participants} placeholder='Number of participants' tooltip='Participants as a whole number between 2 and 99' onChange={value => setParticipants(value)} />
                    <InputInfo value={sessionLength} placeholder='Time for each session' tooltip='Session length in minutes' onChange={value => setSessionLength(value)} />
                    <InputInfo value={interimLength} placeholder='Time between sessions' tooltip='Interim length in minutes' onChange={value => setInterimLength(value)} />
                </div>
            </div>
            <div className='header-control-button'>
                <div className='ui centered grid'>
                    <Button color='blue' text="Let's be seated" onClick={onClick} disabled={validateData()}/>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        calculateSessions: (data) => dispatch(actionCreators.calculateSessions(data)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderControls);