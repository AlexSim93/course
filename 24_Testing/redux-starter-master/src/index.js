import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import AppContainer from './containers/AppContainer/index';
import store from './store/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
