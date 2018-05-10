import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import { MOVIES_ARE_LOADING, FILM_ARE_LOADING, moviesFetchDataSuccess, filmFetchDataSuccess, filmHaveError, moviesHaveError } from '../actions/index'; 

export function* watcherSaga() {
    yield all(
        [
            takeLatest(MOVIES_ARE_LOADING, sagaFetchMovies),
            takeLatest(FILM_ARE_LOADING, sagaFetchFilm)
        ]
    );
};

const fetchMovies = (url: string) => (
    axios({
        method: 'get',
        url
    })
);

function* sagaFetchMovies(action: any) {
    try {
      const response = yield call(fetchMovies, action.url);
      const movies = response.data;
  
      yield put(moviesFetchDataSuccess(movies));
    
    } catch (error) {
      yield put(moviesHaveError());
    }
};

const fetchFilm = (url: string) => (
    axios({
        method: 'get',
        url
    })
);

function* sagaFetchFilm(action: any) {
    try {
      const response = yield call(fetchFilm, action.url);
      const film = response.data[0];
  
      yield put(filmFetchDataSuccess(film));
    
    } catch (error) {
      yield put(filmHaveError());
    }
};