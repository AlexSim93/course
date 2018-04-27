import { INCREASE, DECREASE, FIRST_NUMBER, SECOND_NUMBER } from '../actions/index';

const increase = (state, action) => {
    if(state.hasOwnProperty(FIRST_NUMBER)){
        return {
            ...state,
            [action.number]: state[action.number] + 1 
        }
    }
    return state;
}

const decrease = (state, action) => {
    if(state.hasOwnProperty(FIRST_NUMBER)){
        return {
            ...state,
            [action.number]: state[action.number] - 1 
        }
    }
    return state;
}

const changeNumberReducer = (state = {[FIRST_NUMBER]: 0, [SECOND_NUMBER]: 0}, action) => {
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