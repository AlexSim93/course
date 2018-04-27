import React from 'react';
import Display from '../Display/index';
import Button from '../Button/index';
import { FIRST_NUMBER, SECOND_NUMBER } from '../../actions/index';
import './style.css';

const App = ({firstNumber, secondNumber, onIncrement, onDecrement}) => (
  <div className="app">
    <Display text={firstNumber} />
    <div>
      <Button text="-" onClick={() => onDecrement(FIRST_NUMBER)} />
      <Button text="+" onClick={() => onIncrement(FIRST_NUMBER)} />
    </div>
    <Display text={secondNumber} />
    <div>
      <Button text="-" onClick={() => onDecrement(SECOND_NUMBER)} />
      <Button text="+" onClick={() => onIncrement(SECOND_NUMBER)} />
    </div>
    <Display text={firstNumber + secondNumber} />
  </div>
);

export default App;



