import { INCREASE, DECREASE } from '../actions/index';

const increase = (state, action) => {
    if(state.hasOwnProperty(action.number)){
        return {
            ...state,
            [action.number]: state[action.number] + 1 
        }
    }
    return state;
}

const decrease = (state, action) => {
    if(state.hasOwnProperty(action.number)){
        return {
            ...state,
            [action.number]: state[action.number] - 1 
        }
    }
    return state;
}

const changeNumberReducer = (state = {firstNumber: 0, secondNumber: 0}, action) => {
    switch(action.type){
        case INCREASE:
            return increase(state, action);
        case DECREASE:
            return decrease(state, action);
        default:
            return state;
    }
}

export default changeNumberReducer;
module.exports = {
    changeNumberReducer,
    INCREASE,
    DECREASE
};
