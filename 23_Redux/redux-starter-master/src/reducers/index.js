import { INCREMENT, DECREMENT, SUM, FIRST_NUMBER, SECOND_NUMBER } from '../actions/index';
import { combineReducers } from 'redux';

const changeNumberReducer = (state = {[FIRST_NUMBER]: 0, [SECOND_NUMBER]: 0}, action) => {
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                [action.number]: state[action.number] + 1
            };
        case DECREMENT:
            return {
                ...state,
                [action.number]: state[action.number] - 1
            };
        default:
            return state;
    }
}

const sumReducer = (state = 0, action) => {
    switch (action.type){
        case SUM:
            return action.firstValue + action.secondValue;
        default:
            return state;
    }
}

const reducers = combineReducers({values: changeNumberReducer, sum: sumReducer});

export default reducers;