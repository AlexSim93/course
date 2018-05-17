import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AppContainer from './containers/AppContainer/index';
import store from './store/index';
import registerServiceWorker from './registerServiceWorker';

import 'normalize.css';
import './style.scss';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
          <Route exact path='/search/:searchValue?' component={AppContainer} />
          <Route exact path='/film/:film' component={AppContainer} />
          <Route exact path='/favourites' component={AppContainer} />
          <Redirect to='/search/' />
      </Switch>
    </ BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

registerServiceWorker();