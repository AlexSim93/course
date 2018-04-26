
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const SUM = 'SUM';
const FIRST_NUMBER = 'FIRST_NUMBER';
const SECOND_NUMBER = 'SECOND_NUMBER';

const increment = (number) => ({
    type: INCREMENT,
    number
});
const decrement = (number) => ({
    type: DECREMENT,
    number
});
const sum = (firstValue, secondValue) => ({
    type: SUM,
    firstValue,
    secondValue
});


export {INCREMENT, DECREMENT, SUM, increment, decrement, sum, FIRST_NUMBER, SECOND_NUMBER};