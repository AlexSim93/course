import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from './containers/AppContainer/index';
import store from './store/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </ BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

registerServiceWorker();