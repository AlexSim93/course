import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers/index';
import {watcherSaga} from '../actions/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware), (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
(window as any).__REDUX_DEVTOOLS_EXTENSION__()));

sagaMiddleware.run(watcherSaga);

export default store;
