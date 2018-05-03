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
module.exports = {
    increase,
    decrease,
    INCREASE,
    DECREASE
};

export {INCREASE, DECREASE, increase, decrease};

