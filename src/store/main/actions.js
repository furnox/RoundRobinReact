import actionTypes from './types';

const calculateSessions = (data) => {
    return {
        type: actionTypes.CALCULATE_SESSIONS,
        payload: {
            participants: data.participants,
            sessionLength: data.sessionLength,
            interimLength: data.interimLength,
        },
    };
};
export default {
    calculateSessions,
};
