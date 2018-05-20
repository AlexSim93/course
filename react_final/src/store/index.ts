import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {throttle} from 'lodash';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers/index';
import { watcherSaga } from '../middlewares';

export const loadFavourites = () => {
    try {
        const serializedState = localStorage.getItem('favourites');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

const middleware = routerMiddleware(history)
const getInitialFavourites = (): any => {
    const favourites = loadFavourites();
    return {favourites};
};

export const store = createStore(
    rootReducer,
    getInitialFavourites(), 
    compose(
        applyMiddleware(middleware, sagaMiddleware), 
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
);

store.subscribe(throttle(() => {
    localStorage.setItem('favourites', JSON.stringify(store.getState().favourites));
  }, 1000));

sagaMiddleware.run(watcherSaga);

