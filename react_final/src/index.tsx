import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppContainer from './containers/AppContainer';
import {store, history} from './store';
import { ConnectedRouter } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';

import 'normalize.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/search/:searchValue?' component={AppContainer} />
          <Route exact path='/film/:film' component={AppContainer} />
          <Route exact path='/favourites' component={AppContainer} />
          <Redirect to='/search/' />
        </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

registerServiceWorker();