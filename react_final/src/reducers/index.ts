import { combineReducers } from 'redux';
import entities from './fetchMovies';
import chosenFilm from './fetchFilm';
import sortType from './sortMovies';
import favourites from './fetchFavourites';
import changingFavourites from './addRemoveFavourites';

const rootReducer = combineReducers({
    entities,
    chosenFilm,
    sortType,
    favourites,
    changingFavourites
});

export default rootReducer;
