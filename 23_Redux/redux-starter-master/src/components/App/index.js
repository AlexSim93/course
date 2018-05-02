import React from 'react';
import PropTypes from 'prop-types';
import Display from '../Display/index';
import Counter from '../Counter/index';
import './style.css';

const propTypes = {
  firstNumber: PropTypes.number.isRequired,
  secondNumber: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

const App = ({firstNumber, secondNumber, onIncrement, onDecrement}) => (
  <div className="app">
    <Counter 
      displayText={firstNumber} 
      onIncrement={()=>onIncrement('firstNumber')} 
      onDecrement={()=>onDecrement('firstNumber')}
    />
    <Counter 
      displayText={secondNumber} 
      onIncrement={()=>onIncrement('secondNumber')} 
      onDecrement={()=>onDecrement('secondNumber')}
    />
    <Display text={firstNumber + secondNumber} />
  </div>
);

App.propTypes = propTypes;

export default App;



