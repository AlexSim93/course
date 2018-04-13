import React, { Component } from 'react';
import log from './log.jsx';
import ErrorBoundary from './errorBoundary.jsx';
import {theme, themed} from './theme.jsx';
import logo from './logo.svg';
import './App.css';

const ThemedHeader = themed('header');

const AppHeaderUI = () => (
<ThemedHeader className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h1 className="App-title">Welcome to React</h1>
</ThemedHeader>);

const AppHeader = log(AppHeaderUI);

class AppBodyUI extends Component {
  state = {
    hasError: false
  }
  onClick = () => {
    this.setState({hasError: true});
  }
  render(){
    // if(this.state.hasError){
    //   const {x} = this.state.y;
    // }
    return (
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
      <button onClick={this.onClick}>error</button>
    </p>
    );
  }
}



const AppBody = log(AppBodyUI);

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <ErrorBoundary>
          <AppBody />
        </ErrorBoundary>     
      </div>
    );
  }
}

export default theme(App, {color: 'Red'});
