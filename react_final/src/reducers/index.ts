import { combineReducers } from 'redux';
import entities from './fetchMovies';
import chosenFilm from './fetchFilm';
import sortType from './sortMovies';
import favourites from './fetchFavourites';

const rootReducer = combineReducers({
    entities,
    chosenFilm,
    sortType,
    favourites
});

export default rootReducer;
