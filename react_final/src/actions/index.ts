import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

export const MOVIES_HAVE_ERROR = 'MOVIES_HAVE_ERROR';
export const MOVIES_ARE_LOADING = 'MOVIES_ARE_LOADING';
export const MOVIES_FETCH_DATA_SUCCESS = 'MOVIES_FETCH_DATA_SUCCESS';

export const moviesAreLoading = (url: any) => ({
    type: MOVIES_ARE_LOADING,
    url
});

export const moviesHaveError = () => (
    {
        type: MOVIES_HAVE_ERROR,
    }
);

export const moviesFetchDataSuccess = (movies: any[]) => (
    {
        type: MOVIES_FETCH_DATA_SUCCESS,
        movies,
    }
);

export function* watcherSaga() {
    yield takeLatest(MOVIES_ARE_LOADING, workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchMovies(url: any) {
    return axios({
        method: 'get',
        url
    });
}

function* workerSaga(action: any) {
    try {
      const response = yield call(fetchMovies, action.url);
      const movies = response.data;
  
      yield put(moviesFetchDataSuccess(movies));
    
    } catch (error) {
      yield put(moviesHaveError());
    }
}
