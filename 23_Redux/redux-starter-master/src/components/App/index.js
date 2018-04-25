import React, { Component } from 'react';
import store from '../../store/index';
import Display from '../Display/index';
import Button from '../Button/index';
import {incrementFirst, decrementFirst, incrementSecond, decrementSecond, sum} from '../../actions/index';
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
    
    this.setState({firstNumber: store.getState().firstValue, secondNumber: store.getState().secondValue, sum: store.getState().sum});
  }

  handleIncrement = () => {
    store.dispatch(incrementFirst());
    store.dispatch(sum(store.getState().firstValue, store.getState().secondValue));
  }

  handleDecrement = () => {
    store.dispatch(decrementFirst());
    store.dispatch(sum(store.getState().firstValue, store.getState().secondValue));
  }

  handleSecondIncrement = () => {
    store.dispatch(incrementSecond());
    store.dispatch(sum(store.getState().firstValue, store.getState().secondValue));
  }

  handleSecondDecrement = () => {
    store.dispatch(decrementSecond());
    store.dispatch(sum(store.getState().firstValue, store.getState().secondValue));
  }

  render() {
    return (
      <div className="app">
        <Display text={this.state.firstNumber} />
        <div>
          <Button text="-" onClick={this.handleDecrement}/>
          <Button text="+" onClick={this.handleIncrement}/>
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
