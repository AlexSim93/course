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

exports.increase = increase;
exports.decrease = decrease;
exports.INCREASE = INCREASE;
exports.DECREASE = DECREASE;
export {INCREASE, DECREASE, increase, decrease};

