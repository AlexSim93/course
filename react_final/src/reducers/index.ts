import { combineReducers } from 'redux';
import {moviesHaveError, moviesAreLoading, movies} from './fetch';

const reducers = combineReducers({
    moviesHaveError,
    moviesAreLoading,
    movies
});

export default reducers;