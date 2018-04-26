import {createStore} from 'redux';
import changeNumberReducer from '../reducers/index';

const store = createStore(changeNumberReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



export default store;