import { takeLatest, takeEvery ,call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import {    MOVIES_ARE_LOADING, 
            FILM_ARE_LOADING,
            FAVOURITES_ARE_LOADING,
            ADD_TO_FAVOURITES_ARE_LOADING,
            REMOVE_FROM_FAVOURITES_ARE_LOADING,
            favouritesAreLoading,
            moviesAreLoading, 
            moviesFetchDataSuccess, 
            filmFetchDataSuccess, 
            filmHaveError, 
            moviesHaveError,
            favouritesHaveError,
            favouritesFetchDataSuccess,
            addRemoveFavouritesHaveError,
            addRemoveFavouritesSuccess
        } from '../actions/index'; 

export function* watcherSaga() {
    yield all(
        [
            takeLatest(FILM_ARE_LOADING, sagaFetchFilm),
            takeLatest(FAVOURITES_ARE_LOADING, sagaFetchFavourites),
            takeLatest(MOVIES_ARE_LOADING, sagaFetchMovies),
            takeEvery(ADD_TO_FAVOURITES_ARE_LOADING, sagaAddToFavourites),
            takeEvery(REMOVE_FROM_FAVOURITES_ARE_LOADING, sagaRemoveFromFavourites)
        ]
    );
};

const fetchData = (url: string) => (
    axios({
        method: 'get',
        url
    })
);

const addToFavouritesRequest = (id: number) => (
    axios({
        method: 'post',
        url: 'http://localhost:3000/favourites',
        data: {
            id
        }
    })
);

const removeFromFavouritesRequest = (id: number) => (
    axios.delete(`http://localhost:3000/favourites/${id}`)
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

      yield put(favouritesFetchDataSuccess(favourites));

    } catch (error) {
      yield put(favouritesHaveError());
    }
};

function* sagaAddToFavourites(action: any) {
    try {
      yield call(addToFavouritesRequest, action.id);

      yield put(addRemoveFavouritesSuccess());

      yield put(favouritesAreLoading('http://localhost:3000/favourites'));

    } catch (error) {
      yield put(addRemoveFavouritesHaveError());
    }
};

function* sagaRemoveFromFavourites(action: any) {
    try {
      yield call(removeFromFavouritesRequest, action.id); 

      yield put(addRemoveFavouritesSuccess());

      yield put(favouritesAreLoading('http://localhost:3000/favourites'));

    } catch (error) {
      yield put(addRemoveFavouritesHaveError());
    }
};