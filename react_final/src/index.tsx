import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import App from './components/App/index';
import store from './store/index';
import registerServiceWorker from './registerServiceWorker';

import 'normalize.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/search/:search' component={App} />
          <Route exact path='/film/:film' component={App} />
          <Route exact path='/favourites' component={App} />
          <Redirect to='/'/>
      </Switch>
    </ BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

registerServiceWorker();