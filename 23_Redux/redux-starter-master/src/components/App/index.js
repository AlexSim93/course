import React, { Component } from 'react';
import store from '../../store/index';
import Display from '../Display/index';
import Button from '../Button/index';
import {increase, decrease, FIRST_NUMBER, SECOND_NUMBER} from '../../actions/index';
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
    this.setState({firstNumber: store.getState()[FIRST_NUMBER], secondNumber: store.getState()[SECOND_NUMBER], sum: store.getState().sum});
  }

  changeNumberHandler = (number, action) => (()=>{
    store.dispatch(action(number));
  })

  render() {
    return (
      <div className="app">
        <Display text={this.state.firstNumber} />
        <div>
          <Button text="-" onClick={this.changeNumberHandler(FIRST_NUMBER, decrease)}/>
          <Button text="+" onClick={this.changeNumberHandler(FIRST_NUMBER, increase)}/>
        </div>
        <Display text={this.state.secondNumber} />
        <div>
          <Button text="-" onClick={this.changeNumberHandler(SECOND_NUMBER, decrease)}/>
          <Button text="+" onClick={this.changeNumberHandler(SECOND_NUMBER, increase)}/>
        </div>
        <Display text={this.state.sum} />
      </div>
    );
  }
}

export default App;
