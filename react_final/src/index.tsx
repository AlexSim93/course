import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppContainer from './containers/AppContainer';
import {store, history} from './store';
import { ConnectedRouter } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';

import 'normalize.css';
import './scss/blocks/page.scss';
import './scss/blocks/body.scss';
import './scss/blocks/root.scss';

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