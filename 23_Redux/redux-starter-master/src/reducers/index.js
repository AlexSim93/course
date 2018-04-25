import {INCREMENT_FIRST, DECREMENT_FIRST, INCREMENT_SECOND, DECREMENT_SECOND, SUM} from '../actions/index';
import {combineReducers} from 'redux';

const firstNumberHandler = (state = 0, action) => {
    switch(action.type){
        case INCREMENT_FIRST:
            return state + 1;
        case DECREMENT_FIRST:
            return state - 1;
        default:
            return state;
    }
};

const secondNumberHandler = (state = 0, action) => {
    switch(action.type){
        case INCREMENT_SECOND:
            return state + 1;
        case DECREMENT_SECOND:
            return state - 1;
        default:
            return state;
    }
};

const handleSum = (state = 0, action) => {
    switch(action.type){
        case SUM:
            return action.firstValue + action.secondValue;
        default:
            return state;
    }
}

const reducers = combineReducers({firstValue: firstNumberHandler, secondValue: secondNumberHandler, sum: handleSum});

export default reducers;