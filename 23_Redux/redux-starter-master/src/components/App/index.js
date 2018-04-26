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

  changeNumberHandler = (number, action) => (()=>{
    store.dispatch(action(number));
    store.dispatch(sum(store.getState().values[FIRST_NUMBER], store.getState().values[SECOND_NUMBER]));
  })

  handleChange = () => {
    this.setState({firstNumber: store.getState().values[FIRST_NUMBER], secondNumber: store.getState().values[SECOND_NUMBER], sum: store.getState().sum});
  }

  render() {
    return (
      <div className="app">
        <Display text={this.state.firstNumber} />
        <div>
          <Button text="-" onClick={this.changeNumberHandler(FIRST_NUMBER, decrement)}/>
          <Button text="+" onClick={this.changeNumberHandler(FIRST_NUMBER, increment)}/>
        </div>
        <Display text={this.state.secondNumber} />
        <div>
          <Button text="-" onClick={this.changeNumberHandler(SECOND_NUMBER, decrement)}/>
          <Button text="+" onClick={this.changeNumberHandler(SECOND_NUMBER, increment)}/>
        </div>
        <Display text={this.state.sum} />
      </div>
    );
  }
}

export default App;
