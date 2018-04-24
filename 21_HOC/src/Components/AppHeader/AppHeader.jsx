import React from 'react';
import {themed} from '../theme/theme.jsx';
import log from '../log/log.jsx';
import logo from '../../logo.svg';


const ThemedHeader = themed('header');

const AppHeaderUI = () => (
<ThemedHeader className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h1 className="App-title">Welcome to React</h1>
</ThemedHeader>);

const AppHeader = log(AppHeaderUI);

export default AppHeader;