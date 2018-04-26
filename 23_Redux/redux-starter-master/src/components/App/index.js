import React, { Component } from 'react';
import store from '../../store/index';
import Display from '../Display/index';
import Button from '../Button/index';
import {increment, decrement, sum, FIRST_NUMBER, SECOND_NUMBER} from '../../actions/index';
import './style.css';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      firstNumber: 0, 
      secondNumber: 0,
      sum: 0
    }
    this.unsubscribe = store.subscribe(this.handleChange);
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  handleChange = () => {
    this.setState({firstNumber: store.getState().values[FIRST_NUMBER], secondNumber: store.getState().values[SECOND_NUMBER], sum: store.getState().sum});
  }

  handleFirstIncrement = () => {
    store.dispatch(increment(FIRST_NUMBER));
    store.dispatch(sum(store.getState().values[FIRST_NUMBER], store.getState().values[SECOND_NUMBER]));
  }

  handleFirstDecrement = () => {
    store.dispatch(decrement(FIRST_NUMBER));
    store.dispatch(sum(store.getState().values[FIRST_NUMBER], store.getState().values[SECOND_NUMBER]));
  }

  handleSecondIncrement = () => {
    store.dispatch(increment(SECOND_NUMBER));
    store.dispatch(sum(store.getState().values[FIRST_NUMBER], store.getState().values[SECOND_NUMBER]));
  }

  handleSecondDecrement = () => {
    store.dispatch(decrement(SECOND_NUMBER));
    store.dispatch(sum(store.getState().values[FIRST_NUMBER], store.getState().values[SECOND_NUMBER]));
  }

  render() {
    return (
      <div className="app">
        <Display text={this.state.firstNumber} />
        <div>
          <Button text="-" onClick={this.handleFirstDecrement}/>
          <Button text="+" onClick={this.handleFirstIncrement}/>
        </div>
        <Display text={this.state.secondNumber} />
        <div>
          <Button text="-" onClick={this.handleSecondDecrement}/>
          <Button text="+" onClick={this.handleSecondIncrement}/>
        </div>
        <Display text={this.state.sum} />
      </div>
    );
  }
}

export default App;
