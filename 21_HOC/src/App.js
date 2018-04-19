import React, { Component } from 'react';
import log from './log.jsx';
import ErrorBoundary from './errorBoundary.jsx';
import {theme, themed} from './theme.jsx';
import {withData} from './withData.jsx';
import {get} from 'lodash';
import PropTypes from 'prop-types';
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

  static propTypes = {
    weather: PropTypes.shape({
      time: PropTypes.number.isRequired,
      temperature: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
      windSpeed: PropTypes.number.isRequired
    }),
    time: PropTypes.instanceOf(Date)
  }
  static defaultProps = {
    weather: {
      time: 0,
      temperature: -273,
      pressure: 0,
      windSpeed: 0
    },
    time: new Date()
  }
  static displayName = 'AppBodyUI';

  getDateOptions = () => (['en', {timeZone: 'Europe/London'}]);

  render(){
    return (
    <div className="App-intro">
      <h2>Weather in London</h2>
      <div>
        <p>Date: <span>{get(this.props, 'time', new Date()).toLocaleDateString(...this.getDateOptions())}</span></p>
      </div>
      <div>
        <p>Time: <span>{get(this.props, 'time', new Date()).toLocaleTimeString(...this.getDateOptions())}</span></p>
      </div>
      <div>
        <p>Temperature: <span>{get(this.props, 'weather.temperature', 'no data received')}</span> &deg;F</p>
      </div>
      <div>
        <p>Pressure: <span>{get(this.props, 'weather.pressure', 'no data received')}</span> mbar</p>
      </div>
      <div>
        <p>Wind speed: <span>{get(this.props, 'weather.windSpeed', 'no data received')}</span> m/s</p>
      </div>
      <button onClick={this.props.updateData}>Update data</button>
    </div>
    );
  }
}



const AppBody = log(AppBodyUI);

const mapUrlsToProps = {
  weather: { 
    url:'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/2e55f8a910029d968e0414c68e71d5e4/51,0', 
    path: 'currently' 
  },
};

const AppBodyWithData = withData(mapUrlsToProps)(AppBody);

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
