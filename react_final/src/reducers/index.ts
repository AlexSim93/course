import { combineReducers } from 'redux';
import entities from './fetchMovies';
import chosenFilm from './fetchFilm';
import sortType from './sortMovies';
import favourites from './favourites';
import changingFavourites from './addRemoveFavourites';
import searchType from './setSearchType';;

const rootReducer = combineReducers({
    entities,
    chosenFilm,
    sortType,
    favourites,
    changingFavourites,
    searchType
});

export default rootReducer;
