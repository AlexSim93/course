import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import {    MOVIES_ARE_LOADING, 
            FILM_ARE_LOADING,
            FAVOURITES_ARE_LOADING,
            moviesAreLoading, 
            moviesFetchDataSuccess, 
            filmFetchDataSuccess, 
            filmHaveError, 
            moviesHaveError,
            favouritesHaveError,
            favouritesFetchDataSuccess } from '../actions/index'; 

export function* watcherSaga() {
    yield all(
        [
            takeLatest(FILM_ARE_LOADING, sagaFetchFilm),
            takeLatest(FAVOURITES_ARE_LOADING, sagaFetchFavourites),
            takeLatest(MOVIES_ARE_LOADING, sagaFetchMovies),
        ]
    );
};

const fetchData = (url: string) => (
    axios({
        method: 'get',
        url
    })
);

function* sagaFetchMovies(action: any) {
    try {
      const response = yield call(fetchData, action.url);
      const movies = response.data;
  
      yield put(moviesFetchDataSuccess(movies));
    
    } catch (error) {
      yield put(moviesHaveError());
    }
};

function* sagaFetchFilm(action: any) {
    try {
      const response = yield call(fetchData, action.url);
      const film = response.data[0];
      yield put(moviesAreLoading(`http://localhost:3000/movies?genres_like=${film.genres[0]}`));

      yield put(filmFetchDataSuccess(film));

    } catch (error) {
      yield put(filmHaveError());
    }
};

function* sagaFetchFavourites(action: any) {
    try {
      const response = yield call(fetchData, action.url);
      const favourites = response.data;
      yield put(moviesAreLoading(`http://localhost:3000/movies?${favourites.map((element: any)=> `id=${element}`).join('&')}`));

      yield put(favouritesFetchDataSuccess(favourites));

    } catch (error) {
      yield put(favouritesHaveError());
    }
};