import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import entities from './fetchMovies';
import chosenFilm from './fetchFilm';
import sortType from './sortMovies';
import favourites from './favourites';
import searchType from './setSearchType';


const rootReducer = combineReducers({
    entities,
    chosenFilm,
    sortType,
    favourites,
    searchType,
    routing: routerReducer
});

export default rootReducer;
