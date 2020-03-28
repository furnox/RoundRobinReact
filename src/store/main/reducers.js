import actionTypes from './types';

const initialState = {
    participants: 0,
    sessionLength: 0,
    interimLength: 0,
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CALCULATE_SESSIONS:
            return {
                ...state,
                participants: action.payload.participants,
                sessionLength: action.payload.sessionLength,
                interimLength: action.payload.interimLength,
            };
        default:
            return state;
    }
}

export default mainReducer;
