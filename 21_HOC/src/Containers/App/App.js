import React, { Component } from 'react';
import {theme} from '../../Components/theme/theme.jsx';
import AppHeader from '../../Components/AppHeader/AppHeader.jsx';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.jsx';
import AppBodyWithData from '../AppBody/AppBody.jsx';
import './App.css';




class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <ErrorBoundary>
          <AppBodyWithData />
        </ErrorBoundary>     
      </div>
    );
  }
}

export default theme(App, {color: 'Red'});
