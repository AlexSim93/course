import { INCREASE, DECREASE, FIRST_NUMBER, SECOND_NUMBER } from '../actions/index';

const increaseNumber = (initialState, action) => {
    const newState = Object.assign({}, initialState, {[action.number]: initialState[action.number] + 1});
    newState.sum = newState[FIRST_NUMBER] + newState[SECOND_NUMBER];
    return newState;
};

const decreaseNumber = (initialState, action) => {
    const newState = Object.assign({}, initialState, {[action.number]: initialState[action.number] - 1});
    newState.sum = newState[FIRST_NUMBER] + newState[SECOND_NUMBER];
    return newState;
};

const changeNumberReducer = (state = {[FIRST_NUMBER]: 0, [SECOND_NUMBER]: 0, sum: 0}, action) => {
    switch(action.type){
        case INCREASE:
            return increaseNumber(state, action);
        case DECREASE:
            return decreaseNumber(state, action);
        default:
            return state;
    }
}

export default changeNumberReducer;