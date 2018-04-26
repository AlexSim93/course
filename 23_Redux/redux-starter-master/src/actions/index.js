
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const FIRST_NUMBER = 'FIRST_NUMBER';
const SECOND_NUMBER = 'SECOND_NUMBER';

const increase = (number) => ({
    type: INCREASE,
    number
});
const decrease = (number) => ({
    type: DECREASE,
    number
});


export {INCREASE, DECREASE, increase, decrease, FIRST_NUMBER, SECOND_NUMBER};