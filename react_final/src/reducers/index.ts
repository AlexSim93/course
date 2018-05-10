import { combineReducers } from 'redux';
import entities from './fetchMovies';
import chosenFilm from './fetchFilm';
import sortType from './sortMovies';

const rootReducer = combineReducers({
    entities,
    chosenFilm,
    sortType
});

export default rootReducer;
