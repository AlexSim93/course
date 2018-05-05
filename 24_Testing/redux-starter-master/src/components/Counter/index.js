import React from 'react';
import PropTypes from 'prop-types';
import Display from '../Display/index';
import Button from '../Button/index';

import './style.css';

const propTypes = {
    displayText: PropTypes.number.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onIncrement: PropTypes.func.isRequired,
};

const Counter = ({displayText, onDecrement, onIncrement}) => (
    <div>
        <Display text={displayText} />
        <div>
            <Button text="-" onClick={onDecrement} />
            <Button text="+" onClick={onIncrement} />
        </div>
    </div>
);

Counter.propTypes = propTypes;

export default Counter;