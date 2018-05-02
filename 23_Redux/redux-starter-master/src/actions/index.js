const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const increase = (number) => ({
    type: INCREASE,
    number
});
const decrease = (number) => ({
    type: DECREASE,
    number
});


export {INCREASE, DECREASE, increase, decrease};