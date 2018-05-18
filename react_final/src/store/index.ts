import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers/index';
import { watcherSaga } from '../middlewares/index';

export const loadFavourites = () => {
    try {
        const serializedState = localStorage.getItem('favourites');
        if (serializedState === null) {
            return undefined;
        }
        return [JSON.parse(serializedState)];
    } catch (err) {
        return undefined;
    }
};

export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const middleware = routerMiddleware(history)

export const store = createStore(
    rootReducer, 
    compose(
        applyMiddleware(middleware, sagaMiddleware), 
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
);



sagaMiddleware.run(watcherSaga);

