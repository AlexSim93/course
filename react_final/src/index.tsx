import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/index';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <App />
    </ BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
