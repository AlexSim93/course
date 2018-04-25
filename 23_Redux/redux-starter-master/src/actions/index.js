const INCREMENT_FIRST = 'INCREMENT_FIRST';
const DECREMENT_FIRST = 'DECREMENT_FIRST';
const INCREMENT_SECOND = 'INCREMENT_SECOND';
const DECREMENT_SECOND = 'DECREMENT_SECOND';
const SUM = 'SUM';

const incrementFirst = () => ({
    type: INCREMENT_FIRST
});

const decrementFirst = () => ({
    type: DECREMENT_FIRST
});

const incrementSecond = () => ({
    type: INCREMENT_SECOND
});

const decrementSecond = () => ({
    type: DECREMENT_SECOND
});

const sum = (firstValue, secondValue) => ({
    type: SUM,
    firstValue,
    secondValue
});

export {incrementFirst, decrementFirst, incrementSecond, decrementSecond, INCREMENT_FIRST, DECREMENT_FIRST, INCREMENT_SECOND, DECREMENT_SECOND, SUM, sum};